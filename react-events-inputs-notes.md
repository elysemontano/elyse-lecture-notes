# Lecture Notes

  ## Overview
    1. The DOM tracks interactions with the user
    2. These interactions can be captured and used inside the code logic of the application through JavaScript event listeners

  ## Process
    * Ensure you are in the cohort-lecture-examples repo
    * Ensure your local is up to date and there are no stale branches
    * Create a new branch
    * Create a React app with the naming convention framework-topic
    * cd into the project
    * Run the project with yarn start
    * Ensure all git commands are done at the repo level and all yarn commands are done at the project level

  ## Major Takeaways
    * Inputs are HTML/JSX tags that can take attributes such as type and onChange
    * Event listeners are a set of properties and methods in JavaScript that can be referenced by a developer
    * Input values can be captured by a developer and set to state


  ## Lecture
    React is really, really good at responding (or React-ing) to user interactions. React is able to handle user interactions effectively and efficiently by only making updates where there are changes detected rather than refreshing the entire page. React does this by always listening for any changes made to the DOM.

    - DOM stands for Document Object Model
    - React uses a Virtual DOM which is a representation of the actual DOM which will create a diff every time there is a change

           * Spin up a React App
          - cd into the alpha-lecture-examples repository
          - Create a new branch: react-events-inputs
          - Create a new React application with no spaces: 
              * yarn create react-app events-inputs-elyse-otherinstructors
              * While creating, discuss events
          - cd into the project
            * Convert App.js to a class component
            * Add a heading an ensure the app is rendering


    -  Events
        * The browser is always listening for events. An event occurs anytime a user or the browser manipulates a webpage. Examples of events are when a page loads, when the user clicks a button, any key strokes, and resizing a window. All these events can be captured by developers through event handlers, or methods that track events. If you have ever used an onclick/onClick method you have made an event handler.

        - Big data is able to analyze what you click, how often you click, where you click, what you look at, and how you interact with those things. 
        
        -While onclick is often used for button click events, we are going to talk about onChange which is used to capture text in an input field. Inputs are an HMTL/JSX tag

        * Google "JavaScript inputs", select "HTML Input Types - W3Schools"

        * Input is a self-closing tag, in HTML it can look like this <input> but in JSX it needs to look like this <input />
        
        * By default the "type" is text but it is a good practice to specify the input type no matter what
          -Play around with a few different types from the W3School docs: password will block characters, checkbox, submit will create a button, etc

```javascript
    import React, { Component } from 'react'

class App extends Component {
  render() {
    return(
      <>
        <h1>Greeter App</h1>
        <input type="text"/>
        <input type="password"/>
        <input type="checkbox"/>
        <input type="submit"/>
        <input type="date"/>
      </>
    )
  }
}
export default App
```

    * We are going to want to be able to grab the information from these input tags and the way we do that is with an onChange:


  ## OnChange
    * onChange is an attribute that lives on the input tag. Its job is to listen for changes in the input field and capture those changes. 
    * Out of the box, onChange provides certain properties.  It is listening for any dom event and will give that to us when we call a method.  Event is a property of the onChange listener
    * This action is a behavior so onChange is going to correspond to a method.

      
  ``` javascript 
import React, { Component } from 'react'

class App extends Component {

  handleChange = () => {
  }

  render() {
    return(
      <>
        <h1>Greeter App</h1>
        <input 
          type="text" 
          onChange={this.handleChange} 
        /> // ** Start here! **
      </>
    )
  }
}
export default App
```

      - It is a convention for the method attached to the onChange attributes to be called handleChange
      - onChange automatically passes an argument of event to the method
      - It is common practice for event to be shortened to e

``` javascript 
import React, { Component } from 'react'

class App extends Component {

  handleChange = (e) => {
    console.log(e) // first step
          // - Inspect the page and look at the logs for event
          // - Event is an object that has many key:value pairs
          // - One of the keys is called target which is also an object
          
    console.log(e.target) // second step
          // - Inside the target there is a key called value that will have a string of the text from the input field

    console.log(e.target.value) // third step
          // - Displays the value inside the input
  }

  render() {
    return(
    <>
      <h1>Greeter App</h1>
      <input type="text" onChange={this.handleChange} />
    </>
    )
    }
    }
export default App
```
          
          - Inspect the page and look at the logs for event
          - Event is an object that has many key:value pairs
          - One of the keys is called target which is also an object

          - Inside the target there is a key called value that will have a string of the text from the input field
          - Update the log to e.target
          - Update the log to e.target.value




  ## Setting State
    - Now that we are capturing the values from the input we can set them to state.

    - Create a state object.
    - Remove console.log and replace with this.setState()
    - Adding a value attribute to connect the state object with what is showing up in the input field
    - With several attributes it is best practice to drop the attributes onto additional lines


``` javascript
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    console.log(this.state.name)
    return(
      <>
        <h1>Greeter App</h1>
            // first step: show a hardcoded value
        <input
          type="text"
          onChange={this.handleChange}
          value="placeholder"
        />


            // second step: change the value to reflect the current value of state
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
      </>
    )
  }
}
export default App
```


  ## Passing the Input as Props
    -Now that we have the value in state we can pass the data to another component.
    - I want to use this component to see the input value shown on the page so it will be my display or dumb component

    - Create a folder called components
    - Create a file called Yelling.js
    - Create a class component with a heading
    - Import the component to App.js
    - Call the component and see the heading render
    - Pass the state value into the Yelling component
    - Call the value as props


``` javascript
// src/App.js
import React, { Component } from 'react'
import Yelling from './components/Yelling'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return(
      <>
        <h1>Greeter App</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Yelling name={this.state.name}/>
      </>
    )
  }
}
export default App

// src/components/Yelling.js

import React, { Component } from 'react'

class Yelling extends Component {
  render() {
    return(
      <>
        <h3>HELLO, I SEE YOUR NAME IS:</h3>
        <p>{this.props.name}</p>
      </>
    )
  }
}
export default Yelling
```


  ## Manipulating the Prop Values
    Inside the Yelling component we can use JavaScript logic to manipulate the output. We don't need state, just a good ol' fashion class method.

    Create a method with a parameter
    Return the parameter in all uppercase letters
    Call the method and pass in the argument of the props values
    // src/components/Yelling.js


```javascript
import React, { Component } from 'react'

class Yelling extends Component {
  yelling = (userInput) => {
    return userInput.toUpperCase()
  }

  render() {
    return(
      <>
        <h3>HELLO, I SEE YOUR NAME IS:</h3>
        <p>{this.yelling(this.props.name)}</p>
      </>
    )
  }
}
export default Yelling
```


# Additional Notes and Goals
    Revisit the fundamentals of React as you build

# Review
    What is an input?
    What different types of inputs are there?
    What is an event?
    What is the convention for naming the event?
    What data type is the event?
    What does the onChange attribute do?

## Next Steps
    Open the syllabus section and briefly run through the challenges and expectations
    Remind the student to use the react-challenges repo
    Remind the students of the appropriate naming conventions for their branch and project name
    Remind the students that yarn commands happen at the project level and git commands happen at the repo level
    Post pairs in Slack
    Open breakout rooms with ability for participants to choose their room