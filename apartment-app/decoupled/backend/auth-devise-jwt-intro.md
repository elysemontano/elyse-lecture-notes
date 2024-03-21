# Apartment App API Intro
This week we will be building another decoupled application called Apartment App.  We will once again be utilizing Trello for project management. Each team will be responsible for communication and be in agreement with each other on who is working on what tasks.  While it is up to you on how you want to work in your teams, many groups find that splitting off into two pairs is helpful, just make sure each pair is still communicating with the other half of the team on blockers or progress made.  

I will be around to help wherever and whenever possible and will also be reviewing PR's as they come through.  We will periodically check on your Trello board and will ask questions if something seems out of place.


## Authorization vs Authentication
We also are going to be adding an additional concept onto this project that is very common in development.  Most web applications that we interact with in this day and age will require someone to login for certain features on their website.  This brings us to Authorization and Authentication.

- These are two independent yet interconnected concepts

- Authentication is when you provide credentials that say you are who you say you are.  For instance, a user name and password.
- Authorization is what you have access to when you are logged in.

For instance, if I log into my LinkedIn account, I have to prove I am who I say I am, which means I am authenticated.  As a user, I am only authorized to see what is in my account though.  I cannot see anyone else's account because I am not authorized for that.

This can become a very complicated task to implement if we try to do it from scratch and since this is a very common need in web development, chances are someone has already built some reusable and highly supported code that we can utilize in our applications. And guess what, they have!  We will be using Devise for this:

## Devise
- Devise is a Ruby gem.  We have talked about gems and how they are libraries or packages of code that we can bring into our applications. 
- Devise is a very popular gem, used in many applications which means it has a lot of community support.
- What we get from Devise is that we get the ability to create a user in our application.  The user can log into an account and have special access to certain parts of your application.  

The really cool thing about Devise is that it can handle both authorization and authentication.
- So we can authenticate a user, which means it gives us login pages where a user can create an account or login to an account.

Now, since we have a decoupled application, we will need to verify that a person is who they are on the backend, but will also need the frontend to know that a user is logged in, giving the authorization to access specific features in the application.  To pass this information, we will be using JWT.

## JWT
JWT - JSON Web Tokens
When a user logs into an application, this creates a user session.  When this session is created in the backend, we will be packaging up information securely to hand over to our frontend.  That being said, password will NOT be passed in this token, in fact the way Devise is setup, a password is encrypted so that we cannot even see what the password is in our database.  This package is a token that we can store in our frontend telling our application that a user is logged in, authenticated and now is authorized for access certain pages.

- A token is handed from our backend to the frontend telling our application a user is logged in and authenticated

Analogy: Devise is a bank that does the handling of transactions and money.  JWT is like a debit card that our bank gives us so that we can carry it around with us and gives us access to our money.

## Setup
With that, we are going to follow a similar workflow to cat tinder, where we build the backend out, then the frontend and later connect the two.  So let's start by creating our Rails API:

`rails new apartment-app-backend -d postgresql -T`
`cd apartment-app-backend`
`rails db:create`
`bundle add rspec-rails`
`rails generate rspec:install`
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
Ask your instructors for branch protection
`rails server`


## Installing Devise
Branch: backend-structure
Now we are going to start installing Devise into our application:

`bundle add devise`
`rails generate devise:install`
`rails generate devise User`
`rails db:migrate`

## Installing JWT
To implement JWT efficiently with Devise, we will need to install a few other gems:

Add to gemfile:
```ruby
gem 'devise-jwt'
gem 'rack-cors'
```
run `bundle`

## CORS
Next we need to allow our Rails app to be able to communicate with our React app in the future.  

- Create a new file in config/initializers named cors.rb and add the following content:
```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001'
    resource '*',
    headers: ["Authorization"],
    expose: ["Authorization"],
    methods: [:get, :post, :put, :patch, :delete, :options, :head],
    max_age: 600
  end
end
```


## Additional Devise Configurations
- Set up the default url options for the Devise mailer in our development environment. Add the following code near the other mailer options:

```ruby
# config/environments/development.rb
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```


```ruby
# config/initializers/devise.rb

# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get

# Uncomment the config.navigational_formats line and remove the contents of the array:
config.navigational_formats = []
```


- Create registrations and sessions controllers to handle signups and logins.
`rails g devise:controllers users -c registrations sessions`

- Replace the contents of these controllers with the following code:

```ruby
# app/controllers/users/registrations_controller.rb
class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def create
    build_resource(sign_up_params)
    resource.save
    sign_in(resource_name, resource)
    render json: resource
  end
end


# app/controllers/users/sessions_controller.rb

class Users::SessionsController < Devise::SessionsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    render json: resource
  end
  def respond_to_on_destroy
    render json: { message: "Logged out." }
  end
end


# Update the devise routes: config/routes.rb

Rails.application.routes.draw do
  resources :apartments
  devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
end
```


# JWT Secret Key Configuration
We need a secret key to create a JWT token. We can generate one with this command:

`$ bundle exec rake secret`

Be sure to copy the newly-generated key. It is very important that we hide this key. Rails stores secrets in config/credentials.yml.enc and uses the config/master.key to encrypt the credentials file. To add our secret key to these credentials, we can edit the credentials file through the terminal:

`$ EDITOR="code --wait" bin/rails credentials:edit`

We should see a new file in our VS Code that resembles the file below. (The secret_key_base will be different.)

```ruby
# aws:
#   access_key_id: 123
#   secret_access_key: 345

# Used as the base secret for all MessageVerifiers in Rails, including the one protecting cookies.
secret_key_base: 3fd528aca03e14342dd41c3a5b03d26c76a71b036a021a3f1e294d6461fd44c9313aafa0850b012bbcea730f3cf1232024c8076ad520dbc91d42878bc0218fb2
```

Now we can add our new secret at the bottom of this file by assigning it to a key jwt_secret_key:

`$ jwt_secret_key: <newly-created secret key>`
Save and use control + c to encrypt and save the file.


# Configure Devise and JWT
Next we need to add the following code to the Devise configurations file. This will configure the JWT to work with Devise. It defines the types of requests that we will be using with JWT.
```ruby
#config/initializers/devise.rb

config.jwt do |jwt|
  jwt.secret = ENV['DEVISE_JWT_SECRET_KEY']
  jwt.dispatch_requests = [
    ['POST', %r{^/login$}],
  ]
  jwt.revocation_requests = [
    ['DELETE', %r{^/logout$}]
  ]
  jwt.expiration_time = 5.minutes.to_i
end
```

## Revocation with JWT
While we have setup for a user to be able to login and pass access with JWT, we also need a way to tell our frontend that a user is no longer logged in as well.  Devise has a few ways that we can do this, and in this case we will be using deny list to revoke the JWT token when signed out.

We are going to use a DenyList to revoke the JWT. To create a DenyList, we need to generate a new model.

`$ rails generate model jwt_denylist`

Inside the migration that is created from this generate command, add the following code to the change method.

```ruby
def change
  create_table :jwt_denylist do |t|
    t.string :jti, null: false
    t.datetime :exp, null: false
  end
  add_index :jwt_denylist, :jti
end
```

And migrate!

Lastly, we need to update the User model to include the revocation strategy.
```ruby
app/models/user.rb

devise  :database_authenticatable, :registerable,
        :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
```

## Apartment Resource
Next we need to setup the structure for an apartment on our backend.  In this application, any user will be able to see apartments that are listed in the application, however, we will want to use some authorization for creating, updating and deleting apartments to if they are signed in and can only modify content they have created.  We will dig into that a little further when we get to the frontend, but for now, knowing this we know that there will need to be some associations between User and Apartment.  A user can have many apartments, and an apartment will belong to a user.  So when generating our apartment resource, we will need to make sure to include the foreign key for user as an attribute as well.

`rails generate resource Apartment street:string unit:string city:string state:string square_footage:integer price:string bedrooms:integer bathrooms:float pets:string image:text user_id:integer`

## Associations
```ruby

# models/user.rb
# Add association:
has_many :apartments


# models/apartment.rb
belongs_to :user
```


## User Seeds

```ruby
user1 = User.where(email: "test1@example.com").first_or_create(password: "password", password_confirmation: "password")
user2 = User.where(email: "test2@example.com").first_or_create(password: "password", password_confirmation: "password")

user1_apartments = [
  {
    street: "ABC Sesame Street",
    unit: "20",
    city: "Sesame",
    state: "ISLE",
    square_footage: 2000,
    price: 15000,
    bedrooms: 5,
    bathrooms: 3,
    pets: "puppets only",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Sesame_Street_buildings_%28193090534%29.jpg"
  }
]

user2_apartments = [
  {
      street: "Walaby Way",
      unit: "42"
      city: "Sydney",
      state: "Australia",
      square_footage: 2000,
      price: 25000,
      bedrooms: 3,
      bathrooms: 2,
      pets: "fish",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBSF2x6QbX697RXfV7WdOtqCxF9glLOlF_37xL7pvvea_bWK8JkWHu1llBVz8k9LmFbY&usqp=CAU"
  }
]

user1Apartments.each do |apartment|
    user1.apartments.create(apartment)
    p "created: #{apartment}"
end

user2Apartments.each do |apartment|
    user2.apartments.create(apartment)
    p "created: #{apartment}"
end
```