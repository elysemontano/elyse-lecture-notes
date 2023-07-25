## Tour Application
  ### App.js
    When we start working on an application that we have stuff provided, the first place I like to go is App.js as this is really where all things will come together.

    We can see that App.js already has a state variable called board which has an array of question marks.

    We also have a header on this page as well.

  ### components/Square.js
    It looks like we already have a components folder made and so let's take a look in here and we find we have a component called Square.js.  Let's explore that component.

  ### README
    I can also keep my README open on the side as this has all of my user stories.  This is also a great place to keep notes, document my process and pseudocode.


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
        <h1>Tic Tac Toe</h1>
        {squares.map(square => {
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
  width: 320px;
  /* good first step to center is margin 0 */
  margin: 0 auto;
}

h1 {
  text-align: center;
}
```

### First user story Complete
    Since we finished our first user story, let's push this to github and do a pull request.

### Second user story
    Branch: click-square

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

    Since we know which square we are clicking on, we now need to update the corresponding value in the array.

    Single instances in state do not like to be directly modified, so I need to create a duplicate of this array that I can modify a single instance and then set the entire array to state.

    Emoji keyboard is control + command + space

```javascript
const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null))

const handleGamePlay = (index) => {
  // alert(index)
  let updatedBoard = [...squares]
  updatedBoard[index] = "❌"
  setSquares(updatedBoard)
}
```
    User story complete - push code and PR


