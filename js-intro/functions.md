
### Lecture
 - Reusable blocks of code, think of it as a container or tupperware that holds your code and can be reused over and over
 - Their main job is to take in an input, do something and produce an output.  

There are many ways to define a function. The way we use functions at LEARN is using the arrow syntax.

    
### Process
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
        return this code block
    }

    To call the function: myFunction()


```javascript
const makeCoffee
```

Functions are used for action in our code.
- Equal sign for variable declaration
- Parentheses
- Arrow syntax
- Executable block of code


```javascript
const makeCoffee = () => {

}
```

#### Output and Invocation
Every function must output something. The output is defined by the keyword `return`.
- Run the file, see nothing in the terminal

```javascript
const makeCoffee = () => {
  return "Coffee is made!"
}
```

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
- The inputs are special variables called parameters
- The parameters should be relatively neutral
- The value of a parameter gets defined in the function invocation called an argument

```javascript
const makeCoffee = (coffeeType) => {
 return `Enjoy your ${coffeeType}.`
}
console.log(makeCoffee()) // will return undefined since the parameter is a variable without an assignment
console.log(makeCoffee("latte"))
console.log(makeCoffee("espresso"))
console.log(makeCoffee("chai"))
```

#### Pseudo Code
As the code we are creating gets more complex, more work is required to break down the problem. Pseudo coding is the term for writing process notes in plain English. When pseudo coding functions it is important to think about the inputs and outputs.
- Build out a function that takes a coffeeType and a size and returns a statement with the appropriate price
- Functions have to return something
- Only one output in an conditional statement will ever be executed

```javascript
// create a function called makeCoffee
// input - coffeeType and size
// use conditional statement to make an evaluation on the size
// if the size evaluates to large, it will cost $5
// if the size evaluates to medium, it will cost $4
// if the size evaluates to small, it will cost $3
// if none of the above are true, return an error message

const makeCoffee = (coffeeType, size) => {
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
```



Encapsulation - code should only have access to information that the developer decides, predictable behavior
Functions should only have data that have been passed into the code via the argument 

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `javascript-intro-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)