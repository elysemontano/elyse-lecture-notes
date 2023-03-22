# Apartment App
Apartment app is a full stack application that we will be building in small groups, essentially as dev teams.  In this project, you will build the application, work through CRUD actions on both front and back end, test your work using React testing library and Rspec, style the components as you work through them, and work together as a team to complete this task.  We will be utilizing Trello as a project management software to help keep track of what is in progress and the tasks that are needed to be completed.  

We are going to go through a few of the initial steps together, starting with our Trello cards.

## Trello
We used Trello with Cat Tinder, where you were provided cards with specific tasks.  This time, together we are going to collectively think about the content that we are going to need as a class, and priortize these items accordingly.

- Initial Setup 
  - Installs
  - Devise
  - React in Rails
  - Reactstrap
  - Everyone is cloned down and has no errors when running `$ rails s`
  - Everyone should be able to run rspec spec

- 

## Initial Setup
```
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ rails generate controller Home index
```

### Devise Config
config/environments/development.rb
```
This line added:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

config/initializers/devise.rb
```
# This line replaced:
config.sign_out_via = :delete
# With this line:
config.sign_out_via = :get
```

Add this code into the following file:

app/views/home/index.html.erb
```ruby
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

### React in Rails Config
app/views/layouts/application.html.erb
```
# This line replaced:
<%= javascript_importmap_tags %>
# With this line:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

config/routes.rb
```
# These lines added:
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

### React Routing Config

`$ yarn add react-router-dom`

app/javascript/components/App.js

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom"
```

### Reactstrap Config

```
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
```

app/assets/stylesheets/application.scss
```javascript
@import "bootstrap";
```

### Add Testing

`$ yarn add jest`

Add script to package.json

```javascript
  "scripts": {
    "test": "jest",
    "test-watch": "jest --watch"
  }
```