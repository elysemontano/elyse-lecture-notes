# Treasure Hunt Mob Buildout

  ## Setup
    - Use github classroom link to get repo
    - Accept assignment
    - Show that there is a React app already here WITH a README that contains user stories for the build.
    - Clone assignment
    - `$ cd project`
    - Run `$ yarn` so that we now have node modules available on our machine
    - `$ yarn start`
    

## Tour Application
  ### App.js
    When we start working on an application that we have stuff provided, the first place I like to go is App.js as this is really where all things will come together.

    We can see that App.js already has a state variable called board which has an array of question marks.

    We also have a header on this page as well.

  ### components/Square.js
    It looks like we already have a components folder made and so let's take a look in here and we find we have a component called Square.js.  Let's explore that component.

  ### README
    I can also keep my README open on the side as this has all of my user stories, and I am going to keep my notes as well in here so I can track my process.  


    Branch: grid

    My first user story is to create a grid, and if you remember from Jumpstart, we used a table to create that grid.  Since we are building this with React, we have some different tools that we have available now that we didn't back then that will make this more dynamic and less repetative.

    Our square is going to be a component which will be repeated over and over again.

    **** May not need 

                Let's start with building a single component

                ### Square
                    Create a div that has no inner html.  To give it styling, I am going to identify it with class square and then give the square a height and width of 200ox and a border so we can see it.

                ```javascript
                      <>
                        <div className='square'></div>
                      </>
                ```

                ```css
                .square {
                  height: 200px;
                  width: 200px;
                  border: 2px solid black;
                }
                ``` 
    *****

### App.js
    Import and call square component

### Add more squares
    While we can call our square component as many times as we want, that would mean that we need to pass information to each component individually which kind of takes away from some of the dynamicness that we want to use here.  

    Instead, we can map over square a certain number of times and this is where our board array on App.js comes in handy.  We know that each value is representative of what we want displayed in the square, and we can update each value at any given time.  This array is where the logic is going to be controlled, and can be passed to our component to display.

```javascript
    return(
      <>
        <h1>Treasure Hunt</h1>
        {board.map(value => {
          return <Square />
        })}
      </>
    )


```

    Now we have 9 square showing up on our page.  Obviously we still have some work as this does not look like a grid.  So we need to do some styling.

    Each div is a block level that is taking the width of the whole screen.  Since each one has that, we need to contain all of this into another div.  So in this case, we will wrap all of the squares with another div and give it a class to identify it.  In other words, we have created a parent that is around the children.

```javascript
    return(
      <>
        <h1>Treasure Hunt</h1>
        <div className="gameboard">
        {board.map(value => {
          return <Square />
        })}
        </div>
      </>
    )

```

```css
.gameboard {
  display: flex;
  flex-wrap: wrap;
  /* if each square is 200px and each side of the border is 2px, we need to add this up and give it some wiggle room */
  width: 620px;
  /* good first step to center is margin 0 */
  margin: 0 auto;
}

h1 {
  text-align: center;
}
```

### Passing value to square
    We have an error asking for a key and we also need something to display to each square.

    We are going to provide an index and since we will be passing multiple things, we will drop to new line

```javascript
// App.js

    return(
      <>
        <h1>Treasure Hunt</h1>
        <div className="gameboard">
        {board.map((value, index) => {
          return(            
            <Square 
              key={index}
              value={value}
            />
          ) 
        })}
        </div>
      </>
    )


// Square.js
  return(
    <>
      <div className="square">
      {props.value}
      </div>
    </>
  )

```

```css
.square {
  height: 200px;
  width: 200px;
  border: 2px solid black;
  font-size: 150px;
  text-align: center
}

/* ...cont */
```

### First user story Complete
    Since we finished our first user story, let's push this to github and do a pull request.

### Second user story
    Branch: alert-index

    We need Square to know about our index so let's pass it to our component.

```javascript
// App.js

        {board.map((value, index) => {
          return <Square 
            key={index}
            value={value}
            index={index}
          />
        })}
```

    I want to check to make sure I am passing index properly, so I will console log that in Square.js

    I also need to make an onClick on the div that is calling a method called handleClick


```javascript

// Square.js

const handleClick = () => {
  alert(props.index)
}

  console.log(props.index)
  return(
    <>
      <div className="square" onClick={handleClick}>
      {props.value}
      </div>
    </>
  )

```

    So now my click event on Square component knows what index, but I also need App.js to know this as well.  So I need to make my information swim up the river.

    We know that we can pass methods that exist in App.js and call them in another component.

    Let's call this method in App.js handleGamePlay and inside this, we will take an arguement.  Let's call this index for our param, and for right now just setup an alert.

```javascript
const handleGamePlay = (index) => {
  alert(index)
}
```

    I can now take this method and call it somewhere else, and I want to call it in Square.  To do this I will pass it as props.

```javascript
// App.js

        {board.map((value, index) => {
          return <Square 
            key={index}
            value={value}
            index={index}
            handleGamePlay={handleGamePlay}
          />
        })}


// Square.js

const handleClick = () => {
  // alert(props.index)
  props.handleGamePlay(props.index)
}

```

    Since this user story is finished, I am going to push it up and do a PR

  
### Change Question Mark to Tree Emoji
    Branch: tree-emoji

    Since we know which square we are clicking on, we now need to update the corresponding value in the array.

    Single instances in state do not like to be directly modified, so I need to create a duplicate of this array that I can modify a single instance and then set the entire array to state.

    Emoji keyboard is control + command + space

```javascript
const App = () => {
  
  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])

const handleGamePlay = (index) => {
  // alert(index)
  let updatedBoard = [...board]
  updatedBoard[index] = "🌴"
  setBoard(updatedBoard)
}
```
    User story complete - push code and PR

### Winning Square
    Branch: winner-loser

    We need to think about the fact that there is only one square per game to be the winner.  If we create a randomized number, then it is information that will be important to our entire application, so we will need to store this somewhere like state.  We also need to make a decision on whether or not we clicked on the right square.  If we did, then we need to update our UI to show that they won.

    First, let's start by creating the random location. We want the random number to be generated only when the user initially loads the game, but not everytime the user clicks a box, otherwise they will be chasing a ghost.  So we will set our default value in state to a random location for treasure and one for bomb.


```javascript
  const App = () => {
  
  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])
   const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
   const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
```

    Now that we have this setup, we need to compare this random number to the box we are clicking.  We already have a method that is being called when we click something, and so this seems like a valid place to use a conditional.

```javascript
const handleGamePlay = (index) => {
  // Makes a copy of the board in state so that we can modify a single instance inside the array
    let updatedBoard = [...board]
    if(index === treasureLocation) {
      updatedBoard[index] = "💎"
      setBoard(updatedBoard)
    } else if(index === bombLocation) {
      updatedBoard[index] = "💣"
      setBoard(updatedBoard)
    } else {
      updatedBoard[index] = "🌴"
      setBoard(updatedBoard)
    }

```

    User story complete - push and PR


### Completed App.js:

```javascript
import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  const [counter, setCounter] = useState(5)
  const [gameOver, setGameOver] = useState(false)

  const restartGame = () => {
    // sets the initial state values
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"])
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
    setCounter(5)
    setGameOver(false)
  }

  const handleGamePlay = (index) => {
    // decrements the counter for every click
    let count = counter - 1
    if(index === treasureLocation && !gameOver && counter > 0){
      board[index] = "💎"
      setBoard(board)
      setGameOver("winner")
    } else if(index === bombLocation && !gameOver && counter > 0){
      board[index] = "💣"
      setBoard(board)
      setGameOver("lose")
    } else if(!gameOver && counter > 0 && board[index] === "?"){
      board[index] = "🌴"
      setBoard(board)
      setCounter(count)
    }
  }

    // logging the treasure and bomb location during development
    console.log("treasure:", treasureLocation, "bomb:", bombLocation)
    return(
      <>
        <h1>Treasure Hunt</h1>
        <h3>Counter: {counter}</h3>
        <div id="gameBoard">
          { board.map((value, index) => {
            return (
              <Square
                value={ value }
                key={ index }
                index={ index }
                handleGamePlay={ handleGamePlay }
              />
            )
          }) }
        </div>
        { gameOver === "winner" &&
          <div className="endGameMessage">
            <h3>Woo hoo!  You found the treasure!</h3>
            <button onClick={ restartGame }>Start Again</button>
          </div>
        }
        { (gameOver === "lose" || counter === 0)  &&
          <div className="endGameMessage">
            <h3>Oh no!  You lost the game!!</h3>
            <button onClick={ restartGame }>Start Again</button>
          </div>
        }
      </>
    )
}

export default App
```

