# Frontend React Configurations
Now that we have our backend setup, we are going to switch gears and get our frontend application dialed in.  Once again, most of this will be mostly review, so I will move a little faster through this content so you have more time to code on the challenges.

## Setup
Process
`$ yarn create react-app apartment-app-frontend`
`$ cd apartment-app-frontend`
`$ yarn add react-router-dom`
`$ yarn add bootstrap`
`$ yarn add reactstrap`
`$ yarn start`
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
Ask your instructors for branch protection

## React Router
So that we can utilize React Router for navigation, we will need to make a few changes to src/index.js

```javascript
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom" // add this import

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

# Mock Data
Let's create a mockApartments.js file and a mockUsers.js file for us to work with as we scaffold out the frontend UI.

```javascript
// src/mockUsers.js
let mockUsers = [
  {
    id: 1,
    email: "test1@example.com"
  },
  {
    id: 2,
    email: "test2@example.com"
  },
  {
    id: 3,
    email: "test3@example.com"
  }
]

export default mockUsers




// src/mockApartments.js
let mockApartments = [
  {
    id: 1,
    street: "101 Rimrock",
    unit: "9A",
    city: "San Diego",
    state: "CA",
    square_footage: 500,
    price: "1800",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "yes!",
    image:
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    user_id: 1
  },
  {
    id: 2,
    street: "720 Second Avenue",
    unit: "508",
    city: "San Diego",
    state: "CA",
    square_footage: 700,
    price: "2500",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "yes!",
    image:
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    user_id: 1
  },
  {
    id: 2,
    street: "415 Rainbow Street",
    unit: "3B",
    city: "San Diego",
    state: "CA",
    square_footage: 400,
    price: "2000",
    bedrooms: 1,
    bathrooms: 2.0,
    pets: "small pets okay",
    image:
      "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    user_id: 2
  }
]

export default mockApartments
```

We can now setup App.js to be able to have both stored in state.  Our state variable for apartments should hold all of them, but we will want to only have one currentUser in state, so we will call on only the first instance in the array.

```javascript
import React, { useState } from "react"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <h3>Apartment App</h3>
    </>
  )
}
```

## Structure
Next, we need to setup some structure for our application. For this we wil need 4 folders.

- __tests__
- Assets
- Components
- Pages

** Push up code


## Components
Let's look at Trello where we can see a list of all the different files we will need for this project.  

Components:
- Header
- Footer

Pages:
- Home
- SignUp
- Login
- ApartmentIndex
- ApartmentShow
- ApartmentProtectedIndex
- ApartmentNew
- ApartmentEdit
- NotFound

## Routing
Let's add some routing to App.js so that we can get to all of these routes.

```javascript
import { useState, useEffect } from 'react';
import './App.css';
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import {  Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import MyApartments from "./pages/MyApartments"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Signup from "./components/Signup"
import Login from "./components/Login"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)
  
  return (
    <>    
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apartmentindex" element={<ApartmentIndex />} />
        <Route path="/myapartments" element={<MyApartments />} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
```