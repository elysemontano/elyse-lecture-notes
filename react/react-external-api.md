# React External API

# Lecture Notes

### Process
- Use React in Rails project Apartment app for demo

### Additional Notes and Goals

- Is an interface that is designed to be worked with by OTHER PROGRAMS
- Is super helpful for devs to share data from around the Internet.
- it is NOT a UI // User Interface
- Is an interface that is designed to be worked with by humans or human like beings
- It helps us make really cool UI's by populating data for our users


#### NASA API Scaffold
- Not all APIs are created equally
The NASA API has super cool information and it gives us a test run at the data. No matter what, storing data costs money. And accessing that stored data cost money. So it is common for developers to limit the number of API calls (or requests) that can be made to a server. That way, whoever owns the data stays in charge of who can access it and can control the amount of traffic to prevent overwhelming the server.

Remember that every time you make a request, you get a response, even if that response is an error. A malicious person could have a bunch of computers pinging a web server thousands and thousands of times a second and back up the server. All the requests will get answers, but if the server is answering slower than the requests are coming in a queue will start to form. This can create a situation where normal users will try and use the site and it will look like it is down because that request is behind so many others. When this is done intentionally to cause harm it is called a DDOS attack - or distributed denial of service attack.

To prevent this from happening, developers will ask users of their API to register so that they can put a limit on the number of requests made by a single app. This is usually done in the form of an API key. A key will be a token that is added to the URL in the fetch request.
- An API key is tied directly to you and therefore should never be stored on GitHub.  There are ways to hide the API key that we will go through later, but for now let's just start with building the application using the data from the demo key.

- Put the data provided from demo key into a local file to allow us to mock the data while building out the application.
- Make sure the logic works
- Then make the fetch request
- [Nasa API](https://api.nasa.gov/)

```javascript
// File - src/mockNasa.js
// let nasaData = .....
// export default nasaData
// beautify or prettier 

import React, { useState } from 'react'
import mockNasa from './mockNasa'

const App = () => {

  const [nasaData, setNasaData] = useState(mockNasa)
 
    return(
      <>
        <h1>Mars Rover Pictures</h1>
        <button> Click me!</button>
  
        {nasaData && nasaData.photos.map((obj, index) => {
          return <img src={obj.img_src} alt="" key={index} />
        })}
      </>
    )
  }

  export default App
```

#### NASA API Fetch
Now that I know I can show data from the mock info I put in mockNasa, let's make this live.  I need to create an account which will give me an API key.  It is very important this information does not get added to github.  This key unlocks my access to the API, and if someone get's a hold of my API key, I am held responsible for whatever happens on that key.

Let's first check that we get this live by setting up our fetch call.

- Make an account with NASA
- Generate an API key
- Start with adding it directly to the URL

```javascript
    const nasaFetch = () => {
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=my key here`)
      .then(response => response.json())
      .then(payload => setNasaData(payload))
      .catch(errors => console.log(errors))
    }
```

Now that we have this working, let's go ahead and hide this key from github.
- [Hiding API Keys](https://www.pluralsight.com/guides/hiding-secret-keys-in-create-react-app)
- Create an .env file and add it to .gitignore
- inside .env add:  REACT_APP_API_KEY = "key here"
- `$ bundle add dotenv-rails`
- Update fetch call
- ** Will need to restart server **


```javascript
import React, { useState } from 'react'

  const App = () => {
    const [nasaData, setNasaData] = useState(null)
  
    const apiKey = process.env.REACT_APP_API_KEY
  
    const nasaFetch = () => {
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
      .then(response => response.json())
      .then(payload => setNasaData(payload))
      .catch(errors => console.log(errors))
    }
  
    return (
      <>
        <h1>Mars Rover Pictures</h1>
        <button onClick={nasaFetch}> Click me!</button>
  
        {nasaData && nasaData.photos.map((obj, index) => {
          return <img src={obj.img_src} alt="" key={index} />
        })}
      </>
    )
  }

  export default App
```

### Review
- What are APIs? Websites that store data.
- How can you access an API? With a fetch request.
- What does fetch return? A promise.
- What are the three states of a promise? Pending, rejected, fulfilled.
- What is an API key?
- How do you protect your API key? Don't push it to GitHub, use an .env file.
- How do you know if you have found a "good" API or a "bad" one? You don't. You have to read the docs and test it out.

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `react-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room
