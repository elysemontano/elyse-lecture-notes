# API INTRO
    Update Trello!
    
    $ rails new cat_tinder_backend_instructors -d postgresql -T 
    $ cd cat_tinder_backend
    $ git add remote ...
    $ git checkout -b main
    $ rails db:create
    $ bundle add rspec-rails
    $ rails generate rspec:install
    $ rails server

    - Do Github Work here

    $ rails generate resource Cat name:string age:integer enjoys:text
    $ rails db:migrate
    $ rspec spec
    % just to make sure things didn't break 

# Rails Seed
Bring in data in an array

- When you made the wildlife tracker you had to insert all of the data manually. with seeds you can get up and running with starter data quite quickly

```javascript
cats = [
  {
    name: 'Felix',
    age: 2,
    enjoys: 'Long naps on the couch, and a warm fire.'
  },
  {
    name: 'Homer',
    age: 12,
    enjoys: 'Food mostly, really just food.'
  },
  {
    name: 'Jack',
    age: 5,
    enjoys: 'Furrrrociously hunting bugs.'
  }
]

cats.each do |attributes|
  Cat.create attributes
  puts "creating cat #{attributes}"
end
```

    $ rails db:seed

    - Each time we run rails db:seed we will end up adding the mock data to our data base. SO if we ran it three times we would have 3 of each cat in our database.


## Trouble Shooting
    $ rails db:drop 
    $ rails db:create 
    $ rails db:migrate 
    $ rails db:seed



# API CORS

Before we continue with cors we are going to want to make our lives a bit easier by bypassing some built in security in rails. normally this before_action command would verify that information was coming from within the rails app and would not allow us to pass in information from outside. We want to skip that before_action.

```ruby
app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
end
```

- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources.

- Adding this line of code to the Gemfile:

```ruby
gem 'rack-cors', :require => 'rack/cors'
```


config/initializers/cors.rb

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

    $ bundle install

- When you take your app to production, you'll want to change the wildcard * to the URL that your frontend app is served from.