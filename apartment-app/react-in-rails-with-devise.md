# React in Rails with Devise

This is the last official lecture where you are learning a new concept of the cohort!  

Yesterday we explored how to configure a React in Rails application, we are going to visit those same concepts, but add one more concept and that is Devise.

# Devise
- Devise is a Ruby gem.  We have talked about gems and how they are libraries or packages of code that we can bring into our applications. 
- Devise is a very popular gem, used in many applications which means it has a lot of community support.
- What we get from Devise is that we get the ability to create a user in our application.  The user can log into an account and have special access to certain parts of your application.  This brings us to two important concepts, authorization and authentication.

# Authorization vs Authentication
- These are two independent yet interconnected concepts

- Authentication is when you provide credentials that say you are who you say you are.  For instance, a user name and password.
- Authorization is what you have access to when you are logged in.

For instance, if I log into my LinkedIn account, I have to prove I am who I say I am, which means I am authenticated.  As a user, I am only authorized to see what is in my account though.  I cannot see anyone else's account because I am not authorized for that.

The really cool thing about Devise is that it gives us both of these things.
- So we can authenticate a user, which means it gives us login pages where a user can create an account or login to an account.
- It also has the information or tools that says users can have access to specific places on the application.

# Setup
```bash
$ rails new react-in-rails-with-devise -d postgresql -T
$ cd react-in-rails-with-devise
$ rails db:create
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
```

Add a file in app/views/home called index.html.erb
and following code block:

```javascript
<%= react_component 'App' %>
```


app/views/layouts/application.html.erb

```javascript
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

config/routes.rb

```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```

Add a tag to App.js to make sure we are displaying something

This should get us setup initially so we can fire up our server.  
`$ rails s`

Now we need to go ahead and install devise.  

## Adding Devise

Since Devise is a gem, we are going to use bundle to install it.

(walk through each command and explain)
```bash
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
```

So with these few commands, we now have full authentication and authorization ability within our application making our app secure.

## Routes

Since we now have in a sense ran a generate resource command, filled with routes and everything, let's take a quick look at our routes.

`$ rails routes`

I can see that devise has provided a ton of routes, many of which I will not need.  One that we will use often is the user sign in route, which when a user signs in, it is actually a POST request.  So when a user signs in, they are creating something called a session.  The session exists while a user is logged in.  So while I am a logged in as a user, there is a token attached to everything I do as a user, so every request I make, who I am, the token of me as a user is goes with that request.  When I sign out as a user, that session gets deleted.  

The other route we are going to use often is user sign up.  User sign up will have a form that will allow me to make a new instance of a user.  The route user sign up takes me to a form that already exists.

A side note on this view that we get for sign up and sign in is that anytime we work with a page that we did not create, it is a view that is coming from the Rails side (or is a Ruby file) and not the React side.

## Using Devise

So let's go ahead and create a user by using the sign up page. (/users/sign_up)
When I sign up, I am routed back to whatever I have set to my landing page.

I can also go into the Rails console and see that I have create a user in my database.
For your user's protection, it does not display the password when checking the database which is pretty cool.

## Navigation

The next step is that we will want to be able to pass the information that Devise gives to our React side, since React is where we will be doing most of our navigation as a user.

To pass information about our user from Rails to React such as if they are logged in, who is logged in, and all of the routes we need to add the following to app/views/home/index.html.erb

Inside here, we are going to pass an object over to React.  The object keys are defined by the developer, however the values are coming from Devise.

```javascript
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

We can now utilize these values inside our react side, so let's try console logging some of these.  The object is being passed into React as props, so we will need to utilize our friend this.props.

App.js
```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return(
      <>
        <h1>React in Rails with Devise</h1>
      </>
    )
  }
}

export default App
```

## Additional Configurations

Some extra things that we should add in here are on the syllabus starting with our mailer.  In this case, Devise has a mailer since we need a way to email a user for verification or if they forget their password.  This command that we are placing in here is just letting our mailer know in a sense that we are working in development.

config/environments/development.rb
```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

The second one is that we will replace our sign out request from delete to get, which just makes our request response cycle a little more simple.

config/initializers/devise.rb
```ruby
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```

To customize views, run:
`rails g devise:views`


# React Side

Let's start by creating our folders like components, pages, and assets.
- Create Home page in pages
- Create a Navigation component in components

Right now I want to mainly focus on how we will use our Devise routes in React.  So if I import my Navigation onto App.js, I will want access to all of the information that I have in regards to Devise.  
I could pass each one in individually into Navigation, but I just want to pass all, so I will use the spread operator and this.props to send all of the props to my component.

```javascript
  render() {
    return(
      <>
        <Navigation {...this.props} />
      </>
    )
  }
```

Now in my Nav, I am going to take all of the Devise information that I now passed as props and drop it into my Navigation component since this is primarily where I will be using it.

```javascript
class Navigation extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return()
  }}
```

If I want to use my sign up route, which this will be traveling outside of React, which means we will not want to use NavLink with the to attribute this time around, instead we need an <a> tag.

We can also use some conditional rendering as well:

```javascript
import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return(
      <>
        <h1>React in Rails with Devise</h1>
        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>
      </>
    )
  }
}
export default Header
```