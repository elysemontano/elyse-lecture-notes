# Lecture Notes

### Overview
- Passing data and behavior into a child component
- Creating a distinction between logic and display components
- Props are an information pipeline between components
- Props cannot be updated

### Process
- Ensure you are in the cohort-lecture-examples repo
- Ensure your local is up to date and there are no stale branches
- Create a new branch
- Create a React app with the naming convention `framework-topic`
- `cd` into the project
- Run the project with `yarn start`
- Ensure all git commands are done at the repo level and all yarn commands are done at the project level

### Additional Notes and Goals
- Working with a project folder nested inside a git repository

### Major Takeaways
- Props, short for properties, are a one-directional pipeline of information between components
- State can be manipulated and updated, props cannot, props can only be re-rendered to reflect the updated state
- Passing props to a component is a similar concept to passing arguments to a function
- Keep the data and behavior centralized in the application


## Revisit CSS colors from State

JSX is just like HTML most of the time. And this is one of the times it is very different. The style attribute can be added to any tag. That is the same. And just like the onClick, we need to pass JavaScript so we need our friend the curlies to escape into JavaScript. Then, once we are inside the curlies, what gets passed is an object with key:value pairs.

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
    setMiles({miles + 1})
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

### Lecture
React is a collection of components. The power of this is components can be called as many times we need. Each component call invokes that component function and each function is unique and will act independently from any other function. This is wonderful but at this point our components are behaving exactly identical. We can create dynamic components that will accept additional information as props.

So what are props?
Props are short for properties and we assign these to components.  Essentially, we are passing information from a parent component (example App.js) to a child component

`$ yarn create react-app react-props`

#### Saving App Build out
For this example we are going to create an app that is going to draw a card and then keep track of the card that was previously drawn. 
- Set up App.js with a header
- Ensure App.js renders to the browser

```javascript
const App = () => {
    return(
      <>
        <h1>Card Draw</h1>
      </>
    )
}
export default App
```

Let's also make a card component.
- Create a components folder in `src`
- Create a file in the components folder called `Card.js`
- Add a header to Card
- Import Card to App.js
- Call the Card component


```javascript
const Card = () => {
    return(
      <>
        <h1>This is a card</h1>
      </>
    )
}
export default Card
```

We can call on the card component many times in App.js

```javascript
const App = () => {
    return(
      <>
        <h1>Card Draw</h1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </>
    )
}
export default App
```

While this is great because we can reuse this component however many times we want, it is very static currently.  Meaning, I have hardcoded something inside my card component and that will be the same always.  This is great for a button, but what if I want to display something that can be updated?  I need to now make this Component dynamic by passing info to it.

#### Adding Card Logic
Since app is working we can add a state variable that will hold our mini card deck and a function that will pick a random card from the deck.
- Add a state variable
- Add an array of cards to state
- Add a currentCard to state
- Add a function that generates a random number to access a card from the array
- Set the currentCard to state
- Add a button to call the drawCard function


```javascript
import React, { useState } from 'react'

const App = () => {
    const [cards, setCards] = useState(["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"])
    const [randomIndex, setRandomIndex] = useState(null)


  const drawCard = () => {
    let randomCard = Math.floor(Math.random() * cards.length)
    setRandomIndex(randomCard)
  }

    return(
      <>
        <h1>Card Draw</h1>
        <Card />
        <button onClick={drawCard}>Draw a Card</button>
      </>
    )
}
export default App
```


#### Passing Props
Now that we have App set up, how do we get the the information of the randomized card from state in App.js to our Card component?  We will pass props.  We pass down from parent (App) to child (Card).

 The Card component doesn't have its own state. It is a display component. Its job is to just take data and display it.  So we want the Card component to display the current card.  To do this, we can pass information to the Card component through the component call. 


So we are setting up a name (creating a variable or alias) that we want to call props in our child component and assigning it to the value that currently lives in state, in this case cards. 

We are also going to need to pass an index so that we can use bracket notation to display the card that has been drawn randomly.

App.js
```javascript
<Card cards={cards} index={randomIndex}>
```

Then we want to display this in our Card component.  So we need to specify that we are bringing props in as a parameter in our function.  We then have access to props.  Since props is an object, we can use dot notation to access the information passed.

- Console log props to show object

```javascript
const Card = (props) => {
    return(
    <>
      <h2>Current Card</h2>
      <p>{props.cards[props.index]}</p>
    </>
    )
}
export default Card
```

### Passing Methods as Props
We can also pass methods down to child components.  So I am going to take my button that I have in App.js and add it to it's own component, so that I could reuse it if I so choose.
- Create DrawButton component

```javascript
import React from 'react'

const DrawButton = (props) => {
  return (
    <>
      <button onClick={props.drawCard}>Draw a Card</button>
    </>
  )
}

export default DrawButton
```

Call component in App.js:

```javascript
<DrawButton drawCard={drawCard} />
```

#### Tracking Previously Played Cards
Now that the cards variable is working, we want to be able to track all the previously played cards. We can start in App.js and create the logic to store an array of cards in state.
- Add perviousCards to the state object
- Update the drawCard method to add cards to the previousCards array using the rest syntax

#### Passing the Previous Cards to Previous Cards component
We are going to create a component that will display all previous cards (PreviousCards.js). Since we have an array here, we need to pass the array to our component and then iterate on this array and display each value in the array.

```javascript
// src/App.js
import React, { useState } from 'react'

const App = () => {
    const [cards, setCards] = useState(["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"])
    const [randomIndex, setRandomIndex] = useState(null)
    const [previousCards, setPreviousCards] = []


  const drawCard = () => {
    let randomCard = Math.floor(Math.random() * cards.length)
    setRandomIndex(randomCard)
    setPreviousCards([...previousCards, cards[randomCard]])
  }

    return(
    <>
      <h1>Card Draw</h1>
      <DrawButton drawCard={drawCard}/>
      <Card cards={cards} index={randomIndex} />
      <PreviousCards prevCards={previousCards} />
    </>
    )
}
export default App


// PreviousCards.js
import React from 'react'

const PreviousCards = (props) => {
  return (
    <>
      <h2>Previous Cards:</h2>
        {props.prevCards.map((card, index) => {
          return(
            <p key={index}>{card}</p>
          )
        })}
    </>
  )
}

export default PreviousCards

```

- Look at the terminal and see the warning for `Each child in a list should have a unique "key" prop.` 


### Review
- Data can be passed to other components through the component call.
- If you pass data to another component, how is it referenced?
- What is the syntax for referencing JavaScript inside of JSX?
- What is the difference between state and props?
- Can props be updated?
- What is the difference between a display component and a logic component? Why is it important to have a distinction?


# Notes:
Props are short for properties
  - information passed from parent(App.js) to child component through the component call
  <Card card={card} key={index}/>
  - Props are objects, where values can be accessed through dot notation
  - State can be updated however props is read only
  - We can pass methods as props as well as data


```javascript
  // App.js
import { useState } from 'react'
import './App.css';
import Card from './components/Card'
import DrawButton from './components/DrawButton'

const App = () => {
  const [cards, setCards] = useState(["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"])
  const [randomIndex, setRandomIndex] = useState(null)
  const [previousCards, setPreviousCards] = useState([])

  const drawCard = () => {
    let randomCard = Math.floor(Math.random() * cards.length)
    setRandomIndex(randomCard)
    setPreviousCards([...previousCards, cards[randomIndex]])
  }


  return (
    <>
      <h1>Card Draw</h1>
      <DrawButton drawCard={drawCard}/>
      <h2>Current Card</h2>
      <Card card={cards[randomIndex]} />
      <h2>Previous Cards:</h2>
      {previousCards.map((card, index) => {
        return <Card card={card} key={index}/>
      })}
    </>
  );
}

export default App;


// Card.js - passing data to component
import React from 'react'

const Card = (props) => {
  return (
    <>
      <p>{props.card}</p>
    </>
  )
}

export default Card


// DrawButton.js - Passing method to component
import React from 'react'

const DrawButton = (props) => {
  return (
    <>
      <button onClick={props.drawCard}>Draw a Card</button>
    </>
  )
}

export default DrawButton
```