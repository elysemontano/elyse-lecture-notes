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

    We can see that App.js is already written as a class componenet, where we have a state object with the key of board which has an array.

    We also have a header on this page as well.

  ### components/Square.js
    It looks like we already have a components folder made and so let's take a look in here and we find we have a component called Square.js.  Let's explore that component.

    We can see that it is also setup as a class component

  ### README
    I can also keep my README open on the side as this has all of my user stories, and I am going to keep my notes as well in here so I can track my process.  


    Branch: grid

    My first user story is to create a grid, and if you remember from Jumpstart, we used a table to create that grid.  Since we are building this with React, we have some different tools that we have available now that we didn't back then that will make this more dynamic and less repetative.

    Our square is going to be a component which will be repeated over and over again.

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

### App.js
    Import and call square component

### Add more squares
    While we can call our square component as many times as we want, that would mean that we need to pass information to each component individually which kind of takes away from some of the dynamicness that we want to use here.  

    Instead, we can map over square a certain number of times and this is where our board array on App.js comes in handy.  We know that each value is representative of what we want displayed in the square, and we can update each value at any given time.  This array is whee the logic is going to be controlled, and can be passed to our component to display.

```javascript
  render() {
    return(
      <>
        <h1>Treasure Hunt</h1>
        {this.state.board.map(value => {
          return <Square />
        })}
      </>
    )
  }

```

    Now we have 9 square showing up on our page.  Obviously we still have some work as this does not look like a grid.  So we need to do some styling.

    Each div is a block level that is taking the width of the whole screen.  Since each one has that, we need to contain all of this into another div.  So in this case, we will wrap all of the squares with another div and give it a class to identify it.  In other words, we have created a parent that is around the children.

```javascript
  render() {
    return(
      <>
        <h1>Treasure Hunt</h1>
        <div className="gameboard">
        {this.state.board.map(value => {
          return <Square />
        })}
        </div>
      </>
    )
  }

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

  render() {
    return(
      <>
        <h1>Treasure Hunt</h1>
        <div className="gameboard">
        {this.state.board.map((value, index) => {
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
  }

// Square.js
render() {
  return(
    <>
      <div className="square">
      {this.props.value}
      </div>
    </>
  )
}

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

        {this.state.board.map((value, index) => {
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

handleClick = () => {
  alert(this.props.index)
}

render() {
  console.log(this.props.index)
  return(
    <>
      <div className="square" onClick={this.handleClick}>
      {this.props.value}
      </div>
    </>
  )
}

```

    So now my click event on Square component knows what index, but I also need App.js to know this as well.  So I need to make my information swim up the river.

    We know that we can pass methods that exist in App.js and call them in another component.

    Let's call this method in App.js handleGamePlay and inside this, we will take an arguement.  Let's call this index for our param, and for right now just setup an alert.

```javascript
handleGamePlay = (index) => {
  alert(index)
}
```

    I can now take this method and call it somewhere else, and I want to call it in Square.  To do this I will pass it as props.

```javascript
// App.js

        {this.state.board.map((value, index) => {
          return <Square 
            key={index}
            value={value}
            index={index}
            handleGamePlay={this.handleGamePlay}
          />
        })}


// Square.js

handleClick = () => {
  // alert(this.props.index)
  this.props.handleGamePlay(this.props.index)
}

```

    Since this user story is finished, I am going to push it up and do a PR

  
### Change Question Mark to Tree Emoji
    Branch: tree-emoji

    Since we know which square we are clicking on, we now need to update the corresponding value in the array.

    I am going to destructure board from state so that I have an instance of state that is not exactly state at this point but allows me to do something with it until I decide to setState.

    Emoji keyboard is control + command + space

```javascript
handleGamePlay = (index) => {
  // alert(index)
  const { board } = this.state
  board[index] = "🌴"
  this.setState({board: board})
}
```
    User story complete - push code and PR

### Winning Square
    Branch: treasure

    We need to think about the fact that there is only one square per game to be the winner.  If we create a randomized number, then it is information that will be important to our entire application, so we will need to store this somewhere like state.  We also need to make a decision on whether or not we clicked on the right square.  If we did, then we need to update our UI to show that they won.

    First, let's start by creating the random location. We want the random number to be generated only when the user initially loads the game, but not everytime the user clicks a box, otherwise they will be chasing a ghost.  We will use a React lifecycle method called componentDidMount().  React lifecycle methods are out of the box methods that run automatically without us having to say so (such as render(), constructor()) and componentDidMount() will too.  

    - render() is the first method that is ran so the page displays something.  Getting content on the screen is the highest priority to React.
    - constructor() is next because the data associated with our app is right in line and we want this to come into existence.
    - componentDidMount() is right after that and will run whatever we tell it to.

```javascript
  this.state = {
    board: ["?", "?", "?", "?", "?", "?" , "?" ,"?" ,"?"],
    treasureLocation: null
  }

  componentDidMount() {
    let randomNumber = Math.floor(Math.random() * this.state.board.length)
    // console.log(randomNumber)
    this.setState({treasureLocation: randomNumber})
  }
```

    Now that we have this setup, we need to compare this random number to the box we are clicking.  We already have a method that is being called when we click something, and so this seems like a valid place to use a conditional to check for a winner.

```javascript
handleGamePlay = (index) => {
  const { board, treasureLocation } = this.state
  if(index === treasureLocation) {
    board[index] = "💎"
    this.setState({board: board})
  } else {
    board[index] = "🌴"
    this.setState({board: board})
  }
}

```

    User story complete - push and PR

### Bomb
    Branch: bomb

    This will look very similar to the scenario we just setup for treasure.  

```javascript
  this.state = {
    board: ["?", "?", "?", "?", "?", "?" , "?" ,"?" ,"?"],
    treasureLocation: null,
    bombLocation: null
  }

  componentDidMount() {
    let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure})
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({bombLocation: bomb})
  }

  handleGamePlay = (index) => {
  const { board, treasureLocation, bomb } = this.state
  if(index === treasureLocation) {
    board[index] = "💎"
    this.setState({board: board})
  } else if(index === bomb) {
    board[index] = "💣"
    this.setState({board: board})
  } else {
    board[index] = "🌴"
    this.setState({board: board})
  }
}
```

    User story complete - push and PR

