# Cat Tinder Fetch
- [Mean Girls Video](https://www.youtube.com/watch?v=jjt9Qx9MBPk)

At this point we have setup our backend to handle full CRUD and our frontend has pages for any possible CRUD views we need.  Since this is a decoupled app, our backend is a completely different app than our frontend and the two are not communicating yet.  Which means, a user cannot interact with our database currently.  What we really want, is for our frontend application to consume and iteract with the backend database.  This is where we are going to incorporate a concept called FETCH.

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



## Cat Tinder Fetch READ
```javascript
 // remove the mock cats and start with an empty array
  const [cats, setCats] = useState([])

// Passing an argument of API endpoint you want to fetch and returns a promise containing the response.  Dot then is going to be chained onto our fetch so that we can then do something specific with our response, and we can chain .then multiple times.  Dot then is a higher order function that's job is simply to handle the response.  Let's console log what the response is first.
  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => console.log(response))
  }

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

