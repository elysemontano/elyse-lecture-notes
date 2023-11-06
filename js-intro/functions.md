
# Lecture

### Variable scope
- var is available anywhere (function scoped).  Can be defined in a block (if/else, loops) and accessed outside of the block
  - let is available only inside the block it is defined in
  - var can be reasigned and overwrite variables whereas let and const will not allow this.  Also allows hoisting
  - const does not allow you to redclare or reasign variable


```javascript
// Why we use let:

for(let i = 0; i < 10; i++) {
  var myCat = "Tobey"
  console.log(i)
}
  console.log(myCat) // Will log Tobey


//  let: function and block scope

for(let i = 0; i < 10; i++) {
  let myCat = "Tobey"
  console.log(i)
}

console.log(myCat)

// Why const is not reassingable:
const myDog = "Bruno"
myDog = "Kodi"

console.log(myDog) // Will throw an error

// Hoisting:
myCat = "Tobey"
console.log(myCat)
var myCat
```
    
### Functions

 - Reusable blocks of code, think of it as a container or tupperware that holds your code and can be reused over and over
 - Their main job is to take in an input, do something and produce an output.  

There are many ways to define a function. The way we use functions at LEARN is using the arrow syntax.
- Const
  - Variable declaration
- Arrow Syntax (function expression)
  - ( ) 
    - Funnel we can pass data through
  - => 
    - The es6 arrow is the replacement for the keyword function
  - {}
    - The curly braces represent the area we can write our javascript code in
Code 
- Return

Example: 
    
    const myFunction = () => {
      return "output"
    }

    To call the function: myFunction()


#### Output and Invocation
So let's set up a working example.  We are going to make a coffee maker with a function.

```javascript
const makeCoffee = () => {
  return "Coffee is made!"
}
```
Every function must output something. The output is defined by the keyword `return`.
- Run the file, see nothing in the terminal

Functions don't do anything at all until we tell them run. Telling a function to run is called an invocation, or invoking the function.
- Show the invocation, run the file, see nothing

```javascript
const makeCoffee = () => {
  return "Coffee is made!"
}
makeCoffee()
```

We still need to log our outcome to see anything in the terminal.
- Log the invocation
- Log the invocation many times

```javascript
const makeCoffee = () => {
  return "Coffee is made!"
}
console.log(makeCoffee())

// second part:
console.log(makeCoffee())
console.log(makeCoffee())
console.log(makeCoffee())
```


#### Parameters and Arguments
Functions are designed to be reusable and dynamic.
- Functions can take inputs
- Functions are encapsulated so the only outside influence in a function should be through the designated inputs
    Encapsulation - code should only have access to information that the developer decides, predictable behavior
    Functions should only have data that have been passed into the code via the argument 
- The inputs are special variables called parameters
- The parameters should be relatively neutral

        const myFunction = (parameter) => {
          return "output"
        }
        myFunction(argument)

```javascript
const makeCoffee = (coffeeType) => {
 return `Enjoy your ${coffeeType}.`
}
```

- The value of a parameter gets defined in the function invocation called an argument
```javascript
console.log(makeCoffee()) // will return undefined since the parameter is a variable without an assignment
console.log(makeCoffee("latte"))
console.log(makeCoffee("espresso"))
console.log(makeCoffee("chai"))
```



```javascript
// create a function called makeCoffee
// input: coffeeType(string) and size(string)
// output: string - "Your (size) (coffeeType) is $amount"
	// Determine set prices: small - $3, medium - $4, large - $5
// use conditional statement to make an evaluation on the size
// if the size evaluates to large, it will cost $5
// if the size evaluates to medium, it will cost $4
// if the size evaluates to small, it will cost $3
// if none of the above are true, return an error message

const orderCoffee = (coffeeType, size) => {
  if(size === "large") {
    return `Your ${size} ${coffeeType} is $5`
  } else if(size === "medium") {
    return `Your ${size} ${coffeeType} is $4`
  } else if(size === "small") {
    return `Your ${size} ${coffeeType} is $3`
  } else {
    return "Sorry that is not on the menu."
  }
}

console.log(orderCoffee("latte", "small")
console.log(orderCoffee("mocha", "medium")
console.log(orderCoffee("chai", "large")
console.log(orderCoffee("regular", "extra large")
```



### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `javascript-intro-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)