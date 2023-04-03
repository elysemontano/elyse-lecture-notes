# Apartment App Initial Setup with Devise
## Initial Setup
branch: none(initial commit)
We can find the setup instructions in the apartment-app section of the syllabus.  It is important to follow the order given in here.
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

** Check server and run test libraries before pushing to GitHub **

## Application Structure
branch: application-structure
### Apartment Resource
Here I want to spend some time thinking about how we will structure our database.  So let's brainstorm together what we may need as information for an apartment listing.

- Street: string
- City: string
- State: string
- Manager: string
- Email: string
- Price: string
- Bedrooms: integer
- Bathrooms: integer
- Pets: string
- Image: text
- User ID: integer

Now that we have thought about the columns and their data types, let's go ahead and create our apartment resource.

`$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user_id:integer`
`$ rails db:migrate`


### Associations
We also need to think about our associations between our user table and our apartment table.  A user will have many apartments and an apartment will belong_to a user.

```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```

```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
```

### React Setup
Now that we have some of the backend structured, let's do some setup for the React side of our application.

```javascript
// app/javascript/components/App.js
import React from "react"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  return (
    <>
      <h1>Apartment App</h1>
    </>
  )
}

export default App
```

### Frontend Structure
Alright, while I am hanging out here on the React side of things, let's setup some structure for our components and talk about where our styling will go as well.

Let's start by making our folders that we will need:
- components
- pages
- assets

Now we can start to add in our files we will need in each folder.

Components:
- Header.js
- Header.test.js
- Footer.js
- Footer.test.js
- Navigation.js
- Navigation.test.js

Pages:
- ApartmentIndex.js
- ApartmentIndex.test.js
- ApartmentShow.js
- ApartmentShow.test.js
- ApartmentNew.js
- ApartmentNew.test.js
- ApartmentEdit.js
- ApartmentEdit.test.js
- ProtectedApartmentIndex.js
- ProtectedApartmentIndex.test.js
- Home.js
- Home.test.js
- NotFound.js
- NotFound.test.js

### Routes
Now that we have all of these pages with some basic boiler plate code in each, let's setup React so we have some basic routing as well.

```javascript
// app/javascript/components/App.js
import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"

import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex />} />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
```

### Styling
For styling, I have found some people like to make separate stylesheets for each of these pages as well.  While this is fine, make sure that you are placing them in app/assets/stylesheets folder.

### Seeds
The last thing with our initial setup is to setup our seed file so we can easily populate our database with data.  Since we have associated tables this time around, we are going to want to not only make apartments in our file, but also create some users that we can then associate with the apartments.  

```ruby
user1 = User.where(email: "test@test.com").first_or_create(password: "testing123", password_confirmation: "testing123")
user2 = User.where(email: "testing@test.com").first_or_create(password: "testing1234", password_confirmation: "testing1234")

user1Apartments = [
    {
        street: "ABC Sesame Street",
        city: "Sesame",
        state: "Isle",
        manager: "Cookie Monster",
        email: "monstermanager@cookies.com",
        price: 15000,
        bedrooms: 1,
        bathrooms: 1,
        pets: "puppets only",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Sesame_Street_buildings_%28193090534%29.jpg"
    }
]

user2Apartments = [
    {
        street: "Wallaby Way",
        city: "Sydney",
        state: "Australia",
        manager: "Shermin",
        email: "pshermin@dentist.com",
        price: 25000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "Fish",
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

Note that I am not adding the user_id in my objects for apartments, because I want Rails to handle that in my do blocks.


** Check server before pushing to GitHub **
