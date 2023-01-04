# Cat Tinder Fetch
- [Mean Girls Video](https://www.youtube.com/watch?v=jjt9Qx9MBPk)
At this point we have setup our backend to handle full CRUD and our frontend has pages for any possible CRUD views we need.  Since this is a decoupled app, our backend is a completely different app than our frontend and the two are not communicating yet.  Which means, a user cannot interact with our database currently.  What we really want, is for our frontend application to consume and interact with the backend database.  This is where we are going to incorporate a concept called FETCH.

Fetch is a method in JavaScript that makes asynchronous requests. JavaScript, as a language, is single threaded. That means it can do one thing at a time. JavaScript has a queue of tasks and it executes the tasks one by one, in order. This can become problematic when working with APIs. As a developer, you don't have control over how long it will take to complete a request-response cycle. Even having a progress bar or a loading message requires code logic to be executing. Asynchronous programming is the way to solve this problem. An asynchronous action will step out of the queue while it is processing and step back in when the process is complete. Asynchronous programming is powerful yet complicated

** Notes to type**
Fetch - a tool that allows for asynchronous requests
- Javascript is single threaded- only does one thing at a time
- Fetch allows the app to multitask
- Fetch - sends a request and waits for a response
- Fetch returns a Promise
- A Promise has three states: pending, fulfilled, rejected

Diagram for Promise: https://javascript.info/promise-basics


#### Promises
Fetch is a way to make asynchronous requests. When you send out a request and specify that it is going to be asynchronous, what you get back is a Promise. Promises represent the eventual completion (or failure) of an asynchronous operation. Promises will return either the payload of data or an error. A Promise is a proxy for a value not yet known. A Promise says, "I will definitely give you back something. I just have no way of knowing if it will succeed or fail or how long it will take."

- Promises are JavaScript objects
- Promises are in one of three states: pending, fulfilled, rejected
- If promise is fulfilled, we get a payload.

## Setup
- Have two terminals open with each repo
  - Start server for RAILS first!  Rails is pickier on the location of the server (port we are using), while React will just look for the next best thing
  - `$ rails s`
  - `$ yarn start`
    - Will show a message asking if we want to start on another server -- Type `y`

## Cat Tinder Fetch READ
First we need to setup a function that will load up all of our cats from the database. 

```javascript
 // remove the mock cats and start with an empty array
  const [cats, setCats] = useState([])

// Passing an argument of API endpoint you want to fetch and returns a promise containing the response.  Dot then is going to be chained onto our fetch so that we can then do something specific with our response, and we can chain .then multiple times.  Dot then is a higher order function that's job is simply to handle the response.  Let's console log what the response is first.
  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => console.log(response))
  }
```

 But how are we calling this function?  Since we want this function to start when our component loads, we will use an action in React called useEffect()

 useEffect has two parts, the action and the dependency value.  The action we want to take is to call on readCat and the dependency value is an empty array

```javascript
  useEffect(() => {
    readCat()
  }, [])
```


```javascript
// The object is just an HTTP response. To extract the JSON body content from the response, we use the .json() method and we can see the promise object.
  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => console.log(response.json()))
  }

// Once the promise is fulfilled we can handle the payload.
  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => console.log(payload))
  }

//  Once we can see the payload being logged the next step is setting the data to state.
  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => setCats(payload))
  }

// Catch is like an else statement that can log any errors we get.
  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => setCats(payload))
      .catch((error) => console.log(error))
  }

  ```

## Cat Tinder Fetch Create
Create is going to be similar to Read, but instead of just pulling information from our database, we will be submitting information to our database, so we will need to modify some things.

```javascript
const createCat = (cat) => {
  fetch("http://localhost:3000/cats", {
    // converts the object to a string that can be passed in the request
    body: JSON.stringify(cat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("Cat create errors:", errors))
}
```


## Cat Tinder Fetch UPDATE
MUST HAVE EDIT PAGE UPDATED TO SHOW THIS!
```javascript
// CatEdit.js
import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useNavigate, useParams } from 'react-router-dom'

const CatEdit = ({cats, updateCat}) => {
  const navigate = useNavigate()
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)
  const [myCat, setMyCat] = useState({
    name: currentCat?.name,
    age: currentCat?.age,
    enjoys: currentCat?.enjoys,
    image: currentCat?.image
  })
  const handleChange = (e) => {
    setMyCat({...myCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    updateCat(myCat, currentCat.id)
    navigate(`/catshow/${currentCat.id}`)
  }

  return (
    <>
      <h1>Edit {currentCat?.name} Cat</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            defaultValue={currentCat?.name}
            onChange={handleChange}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            name="age"
            defaultValue={currentCat?.age}
            onChange={handleChange}
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            name="enjoys"
            defaultValue={currentCat?.enjoys}
            onChange={handleChange}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            name="image"
            defaultValue={currentCat?.image}
            onChange={handleChange}
            type="url"
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CatEdit

// App.js
import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import mockCats from './mockCats'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  const [cats, setCats] = useState()

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
    .then((response) => response.json())
    .then((payload) => setCats(payload))
    .catch((error) => console.log("Cat read error:", error))
  }

  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("Cat create errors:", errors))
  }

  const updateCat = (cat, id) => {
    console.log(cat, id)
  }

  return (
  <>
    <Header />
    <Routes >
        <Route path='/' element={<Home  />}/>
        <Route path='/catindex' element={<CatIndex cats={cats} />} />
        <Route path='/catshow/:id' element={<CatShow cats={cats} />} />
        <Route path='/catnew' element={<CatNew createCat={createCat} />} />
        <Route path='/catedit/:id' element={<CatEdit cats={cats} updateCat={updateCat} />} />
        <Route path="*"  element={<NotFound/>} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;

```


```javascript
const updateCat = (cat, id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    // converting an object to a string
    body: JSON.stringify(cat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "PATCH"
  })
    .then((response) => response.json())
    .then((payload) => readCat())
    .catch((errors) => console.log("Cat update errors:", errors))
}
```

