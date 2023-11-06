# Cat Tinder Frontend Intro
So far we have build our backend API for our cat tinder application, where we have set up our models and controllers, but next up on our list if we are following the MVC architecture is our VIEW!

Since we are building a decoupled application, where we built our backend in Rails, we will now create our frontend in React.

The first thing we want to do in this process is to check Trello which is telling us that our first step is to create a new React project and then tie it to the github repo.

## Setup
As we recall, the command to create a React app is:

`$ yarn create react-app cat-tinder-frontend`
`$ cd cat-tinder-frontend`

Connect to GitHub:
`$ git remote add origin <url>`
`$ git branch -M main`
`$ git push origin main`  <-- Git status may show there are not changes.  Push anyway and it should appear

At this point, you will message myself and Gene to add branch protections onto the repo.

## Structure
Let's go ahead and head on over to App.js to start with, and I always like to refactor so that it is in our es6 arrow syntax and remove all the boiler plate code given.

```javascript
const App = () => {
  return (
    <>
      <h1>Cat Tinder!</h1>
    </>
  )
}
```

Next up is to  setup some folders for us to add our pieces to this React puzzle.  In the past we were only working with SPA (single page applications), but for this application, we will be working with multiple pages so we will be adding another folder to hold our pages components.

** Check Trello **

- Add components folder
  - Add Header.js
  - Add Footer.js
- Add assets folder (images)
- Add pages folder
  - Home.js
  - CatIndex.js
  - CatShow.js
  - CatNew.js
  - CatEdit.js
  - NotFound.js


## Reactstrap
Since this is one of the three larger projects we do in the cohort, we are also going to want to add some styles to it.  To do that, we are going to add something called Reactstrap which is a version of Bootstrap specifically made for React.  For those of you who haven't heard of Bootstrap, it is one of many styling libraries out there that provide pre built styling components.  This is very helpful so you don't have to do all the styling completely from scratch, Reactstrap is going to help us make this look pretty much faster.

To install Reactstrap, we can look at our syllabus for the installs.  We need to first add bootstrap because reactstrap is built off of bootstrap.

`$ yarn add bootstrap`
`$ yarn add reactstrap`

- Add to src/index.js:
  ```javascript
  import 'bootstrap/dist/css/bootstrap.min.css'
  ```


## Routes
Since we setup all of those pages, we need to think about how we are going to navigate throughout those pages in React.  

To help us out with some of this navigation, we are going to use something call React Router.  The cool thing about React Router is that if we recall, React was built on the concept of only re-rendering specific nodes that were changed on a page instead of doing entire page refreshes.  Typically in Rails, going to another page meant we were refreshing the request/response cycle.  React Router, however, allows us to maintain that React behavior of not re-rendering the entire page going through an entire request/response cycle, instead it will only swap out the components based on the url.

So with that, in the syllabus we have an install command:
`$ yarn add react-router-dom`

To allow this to work properly, we have to head over to a file we don't frequent very often in React, index.js, and import BrowserRouter into this file and will be calling our App component from within the Browser Router.

```javascript
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { App } from "./App"
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

Now we can head back to App.js and import Route and Routes from react-router-dom.

```javascript
import { Route, Routes } from 'react-router-dom'
```

We also need to start adding this into our return starting with Routes.  Routes will hold anything that we plan to make a Route for, like a page (not necessarily a component since we want that to render on all pages).  

```javascript
const App = () => {
  return (
    <>
      <Header />
      <Routes>
      </Routes>
      <Footer />
    </>
  )
}
```

We will then setup a Route for each individual page.  Route has two attributes that we will be using, path and element.  The element attribute allows us to specify the url path we wish to give a specific page, and the element attribute will call on the component.

```javascript
const App = () => {
  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
  )
}
```

We can test these routes by going to these paths and seeing if we are displaying something for each page.


## Mock Cats
Last on our list in Trello, besides styling, is mock data.  So let's now consider that our backend has all of this data, but as we are building our frontend out, we are going to want to have some data to work with as well even though we are not quite ready to connect the two together just yet.  

For this let's create some mock data for us to work with in our frontend for now.

This mock data should match the same structure that our backend will be handing off to us as (JSON) with all relative columns in our database schema.  In this case, we will be getting an array of objects with the columns of name, age, enjoys, image, AND id (since we are mocking data available to us).

- Create file at same level as App.js:
    - src/mockCats.js

```javascript
const cats = [
  {
    id: 1,
    name: 'Tobey',
    age: 5,
    enjoys: 'Snuggling',
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
    {
    id: 2,
    name: 'Nala',
    age: 4,
    enjoys: 'Eating',
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
]

export default cats
```

We also need to import this into App.js so that we can utilize this later on when we start to want to render the cats.  While we are here, let's also call on our mock cats by setting it up in state.

```javascript
// App.js

import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import mockCats from './mockCats'

const App = () => {
  const [cats, setCats] = useState(mockCats)

  console.log(cats)

  return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<CatIndex />} />
      <Route path="/catshow" element={<CatShow />} />
      <Route path="/catnew" element={<CatNew />} />
      <Route path="/catedit" element={<CatEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
  )
}
```

Push up frontend-structure branch