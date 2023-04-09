# React in Rails
There are many different ways to build a full stack application.  We have explored building a full stack application in Rails alone, creating a decoupled application, but sometimes you can actually combine technologies together into a monolithic applications (one app handles both the database and the view) which is what we are going to focus on for the remainder of our class time.  We will be using the same tools that we have been learning for months now, React and Rails, but simply inserting React into a Rails application so we can utilize the best parts of both technologies.  

With this setup, there will be two distinct routing systems.  One will be the rails router that handles the API endpoints and react router for displaying the different pages.

So what are the benefits to building a monolithic application with React in Rails?
- React is easier to write then ERB views
- Fetch calls are simpler since they are not cross-origin
- We can add authentication and authorization to our application more simply

## Setup
Let's start with our syllabus, since this will be the main source of our information on how to setup our application.  

It is very important to follow the steps given in the syllabus in that order.  Installing things out of order can lead to really large problems.  So we will follow the recipe given here.


We will start by creating a rails app:

`$ rails new react-rails-intro -d postgresql -T`
`$ cd react-rails-intro`
`$ rails db:create`
`$ rails s`

Looking good so far.  Now let's talk about the process in adding React.

Rails 7 opens up a lot of options to developers to choose how to support Javascript.  The default Javascript compiler is web pack and you will often see Javascript documentation refer to webpack.  We will be using the Rails version of webpack called web packer.

Web packer is pretty powerful but does require a bit more setup than we are used to.

```
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install  (choose 5.4.3)
$ rails webpacker:install:react (supports react components)
$ yarn add @babel/preset-react (translator)
$ yarn add @rails/activestorage (stores and manages media)
$ yarn add @rails/ujs (overrides the default to get requests and allows pop up confirmations)
```

Next, let's generate the files and folders we need.

```
$ rails generate react:install
$ rails generate react:component App
```

Let's now take a look at what we have in our application.  We have all the usual suspects of the folders we would expect to see in a rails application.  We have our models, controllers, db folders that we are getting pretty comfortable with.  

Inside app, there is a folder called javascript that has some more folders.  If we click into component, we see App.js in here!  This is where our React part of the application will live.  If we recall in a React app, we have a components folder that held any components, we had a pages folder to hold our pages and an assets folder.  We will set this up the same way inside this component folder.

component (consider this as the src folder in React):
- App.js
- components
- pages
- assets

We can update our default App.js code to use our functional component setup.

Currently, we won't be able to see any of our React side yet because we haven't made the connection just yet.  We only set up the files and folder structure, but we now need to let Rails know that we intend to use this this component folder to be our view.

## Controller and View
Now we need to generate a controller which will also create a view for us.  We are going to call this Home.

`$ rails generate controller Home index`

We will add a file called index.html.erb into our views/home folder so now we can do some ERB that will tell us to call on React.

```ruby
<%= react_component 'App' %>
```

This is essentially calling our App component the rails way.  So when we tell Rails that our root is this home page, we will then be sending it to React.

So now let's setup that route to send us to this view.

```ruby
Rails.application.routes.draw do
  root 'home#index'
end
```

We have one last step though to complete this path.  We will go to views/layouts/application.html.erb modify this:

```ruby
# Find this line:
<%= javascript_importmap_tags %>

# And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

Let's run this, but since we made a lot of backend changes, we should restart the server.


## Reactstrap
Now that we are up and running, let's use our favorite styling library Reacstrap.  As we did last week, we have to first install Bootstrap because Reactstrap is built off of Bootstrap.  But we also need to make the files compatible with Rails so we are going to change our css file to use the extension .scss which stands for sassy css. Scss gives greater functionality and allows imports and functions which is definitely worth a deeper dive if you are interested.

```
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
```

The application.scss file is a very important file as this is our asset pipeline.  Basically, all of our styles get packaged up and served to the user.  

We can import bootstrap to our scss file.

```javascript
@import "bootstrap";
```

## React Components
Now that we are all setup with the rails side and asset pipeline, we can focus on getting the React side of the application to look and feel a little more like the structure we are used to.  So we will add our assets, components, and pages folders.  

Inside pages, we will add AboutUs.js, and Home.js

We also will want to be able to route within our React side, so we need to install react-router.

`$ yarn add react-router-dom`

We can now setup App.js to be able to use the BrowserRouter, Routes and make specific route paths to our different pages.

```javascript
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
)
```

Let's also setup a Navigation component that will allow us to move through our application as a user.

```javascript
import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation
```

Now that we have two different routers in our application, we need to distinguish where JSON data is handled and where HTML is being handled.
- JSON: backend
- HTML: funneled to React

So with that, in our rails routes, we want to add a line of code that says that any HTML requests then send it to React.

```ruby
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```

