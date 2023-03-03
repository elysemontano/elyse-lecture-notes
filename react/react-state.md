# Lecture Notes

### Overview
- A React application is a collection of components
- Components are classes that incorporate both logic and markup
- The logic comes as JavaScript code and the mark up is called JSX

### Goals
- Modeling git workflow putting a React app inside a shared repo
- Review of basic React functional components structure
- Adding a state object using useState()
- Adding logic to a React functional component
- Invoking a component multiple times creating multiple instances of a single class that operate independently
- Discuss the syntax differences of inline styling in JSX vs HTML

### Major Takeaways
- useState() and state object syntax
- Placement of logic, and render inside a React functional component
- `useState()` method

### Lecture
- Create a branch
- Create a React app with no spaces in the name `$ yarn create react-app react-state`
- `cd` into the project
- Run the app with `yarn start`

#### Review of React Anatomy
Let's start out by heading to App.js. App.js is the component that gets rendered to the browser.  This does all the heavy lifting.  We will be utilizing lots of different pieces and the pieces of the puzzle will have to come through App.js to show up on our page.

We are going to rewrite the boiler plate code given which currently renders the cool react logo that we don't need.

```javascript
const App = () => {
    return(
      <>
        <h2>Hello World</h2>
      </>
    )
}
export default App
```

And what is happening here?
- We have a function called App 
- We have a return (because every function needs a return)
- But in React what we return is exactly one item of JSX
- And it is a great practice to have that one thing that gets returned be a React Fragment which are noted by empty opening and closing tags
- Nested between the empty tags we can add as many additional tags as we want
- Then we have an export that makes this function findable to the rest of the project

#### Running App Example
For this example, I am making a very simple app that is going to keep a log of the number of miles I run per month. I want to be able to see the current number of miles and add miles to the current number.

#### Starting with Markup
Let's start by adding some basic static data. See a header, the current number of miles, and a button.  Whenever we are using a button, we need to be thinking about some kind of logic, because the button will always be performing some type of action.
```javascript
const App = () =>  {
    return(
      <>
        <h2>Mile Tracker</h2>
        <p>Miles: 0</p>
        <button>Add a mile</button>
      </>
    )
}
```

#### State
We need a place to store the miles to maintain a running total of miles that can be updated every time we click the button. Right now I have a hard coded 0. Now we need to replace that 0 with a variable that can reflect the changes in the miles.

State is a special variable that we can utilize in React components which can affect how our page is rendered. 

State is a variable that holds information within your application that belongs to the React component.  State gives us 2 things, we have a variable that can be displayed and a method that will update that variable.  

```javascript
import React, { useState } from 'react'

const App = () => {
  // Display will be what I want to call it, the method to update which conventions has us using the same name of the variable but with the word set before it.
  const [miles, setMiles] = useState(0)
  // useState is a built in piece of React functionality called a state hook. (A method that belongs to React, so we need to add this in our import)

  return (
    <>
        <h2>Mile Tracker</h2>
        <p>Miles: 0</p>
        <button>Add a mile</button>
    </>
  )
}

export default App
```

 Our application needs to store miles. So we will set an initial value of 0.


#### Passing Class Variables in JSX
Instead of hard coding the value of 0 in our JSX we can reference the state value.  If I put `miles` inside the JSX tag it just treats those characters like innerHTML.

```javascript
import React, { useState } from 'react'

const App = () => {
  const [miles, setMiles] = useState(0)

  return (
    <>
        <h2>Mile Tracker</h2>
        <p>Miles: miles</p>
        <button>Add a mile</button>
    </>
  )
}

```

This isn't what we want. We need to tell our program to read this as JavaScript. So to do that I have to wrap this variable name in curly braces. The curly brace indicate that we are escaping out of JSX and  passing in JavaScript code.

```javascript
  return (
    <>
        <h2>Mile Tracker</h2>
        <p>Miles: {miles}</p>
        <button>Add a mile</button>
    </>
  )


```

So now I see 0 but it is coming from state rather than from a hard coded 0 in the JSX. And if I change the value in state, I get a repaint that updates the DOM and changes the view.

#### Updating State with Logic
The button needs to add a mile every time it gets clicked. Updating the number of miles is an action. The button will have behavior. And in order to create behavior means we need to create a function.

The functions we write that produce behavior specific to our app lives after our state variable. 

Our function is going to take the current value of miles and add one. We need to update the value in state. We also need to ensure React recognizes the change and updates its view appropriately.  This is where we are going to use the method in state called setMiles.  

```javascript
const addMile = () => {
  setMiles()
}
```

Inside `setMiles()` we can pass in here whatever we want our variable to be updated to when this function is called. In this case, we want to increase the value by one. 

```javascript
const addMile = () => {
  setMiles(miles + 1)
}
```

#### Adding the Button Action
Just like any function, it is not doing anything until it gets called. And we want to call our function when the button gets clicked. So we need an onClick attribute.

Button is a JSX tag that is almost exactly like an HTML button tag. And the HTML button tag can take attributes. Meaning we can add information inside the opening tag that modifies the behavior of the tag. `onClick` is the attribute and it is followed with an equal sign and a value. But in this case the value is JavaScript, so we need our curlies. And inside the curlies we need to call the function.

```javascript
  return(
    <>
      <p>Miles: {miles} </p>
      <button onClick={addMile}>Add a mile</button>
    </>
  )

```

Now we have a working app!

#### Creating Multiple Trackers
But If I want to keep track of my miles run per month, I need more than one tracker. We are going to do a big refactor here. So take this in, take a screen shot, whatever you want to do. We are going to tear this apart. We are going to move all this logic into another component.

App.js is the highest level component. It is the component that puts everything else on the page. We are going to group all the other components we create into another folder. This is just a convention to keep our files organized. Inside of `src` we are going to create a new folder called components. And inside of components, we will create a file called Tracker.js

Tracker.js and any other components will use the Pascal naming convention.

Cut everything and move it over.

Now, that we have all of this brought over into our new file, we want to be able to display it.  To do that, we need two things. One is a component call.

```javascript
import React from 'react'

const App = () => {
  return(
    <>
      <h1>Mile Tracker</h1>
      <Tracker />
    </>
  )
}
export default App
```

If you look in the browser you will see an error: Tracker is not defined. This is because App.js needs to know how to find the Tracker component.

import Tracker from './components/Tracker'

Now we are back to where we started, but now we have options.

```javascript
  return(
    <>
      <h1>Mile Tracker</h1>
      <h3>January</h3>
      <Tracker />
      <h3>February</h3>
      <Tracker />
      <h3>March</h3>
      <Tracker />
    </>
  )
```

We wrote one component and can call it as many times as we want and all of them maintain their own state.

Each one of these component calls are a unique instance, so even though we are using the same code, they are running seperatly.

And that is pretty cool.

#### Inline Styling with JSX
One last thing, to talk about. That will help you with your challenge today.

To style in App.css make sure to import into App.js './App.css'

 But let's talk about inline styling in JSX.

I mentioned that JSX is just like HTML most of the time. And this is one of the times it is very different. The style attribute can be added to any tag. That is the same. And just like the onClick, we need to pass JavaScript so we need our friend the curlies to escape into JavaScript. Then, once we are inside the curlies, what gets passed is key:value pairs.

```html
<button onClick={this.addMile} style={ {backgroundColor: "pink"} }>Add a mile</button>
```

The key is the styling property and the value has to be a data type that JavaScript recognizes. In this case it is a string. So this is different. And most of the time we want stylings to be in the css file, but sometimes you want inline styling and today you will want inline styling.

One final hint about styling. The value has to be a data type JavaScript recognizes, but that can be stored in a variable. So I can also do this:

```javascript
const App = () => {
  const [miles, setMiles] = useState(0)
  const [color, setColor] = useState("pink")

  const addMile = () => {
    setMiles(miles + 1)
  }

  render() {
    return(
      <>
        <p>Miles: {miles} </p>
        <button onClick={addMile} style={ {color: color} }>Add a mile</button>
      </>
    )
  }
}
```

### Review
- What is JSX?
- What is state?
- How do we update our state variable?
- What is an attribute?
- When do we need to use curly braces in the JSX section?
- Where do git commands happen vs yarn commands

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `react-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and project name
- Remind the students that yarn commands happen at the project level and git commands happen at the repo level
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room
