
# Lecture Notes

### Overview
- Iteration is the process of repeating a task until a condition is met
- Iteration is a fundamental concept in programming
- There are many ways to iterate, one of which is a for loop

### Process
- Ensure you are in the cohort-lecture-examples repo
- Ensure your local is up to date and there are no stale branches
- Create a new branch
- Create a JavaScript file with the naming convention `language-topic.js`
- Run the file with `node`

### Additional Notes and Goals
- For loops don't innately interact with arrays, for loops are just good at counting
- For loops are one way to create iteration, but definitely not the only way

### Major Takeaways
- For loops take three pieces of information: where to start, where to stop, and how to there
- For loops have an associated executable block of code that will run once for every iteration
- Logic can be passed into the executable block of code to modify the outcome of the iteration

### Lecture
One of the most fundamental concepts in coding is being able to repeat a process over and over again. This is called iteration. Computers are really great at iteration. There are many ways to create iteration. Today we will look specifically at how for loops can interact with arrays. The array data type is basically a list. Developers use arrays to group data. We will often need to look each item in an array or make a decision about each item in the array.

Before we dive into for loops though, I want to talk briefly about the different types of variables and their different purposes as understanding the types and when to use them will be important moving forward.

## Var
  - var is available anywhere (function scoped).  Can be defined in a block (if/else, loops) and accessed outside of the block
  - let is available only inside the block it is defined in
  - var can be reasigned and overwrite variables whereas let and const will not allow this.  Also allows hoisting
  - const does not allow you to redclare or reasign variable


```javascript
// Why we use let:
  if(true) {
    var myName = "Elyse"
  }
  console.log(myName) // This will work

  if(true) {
    let yourName = "Trish"
  }
  console.log(yourName)// This will throw an error

// Why const is not reassingable:
let myCat = "Tobey"
myCat = "Nala"

console.log(myName)

const myDog = "Bruno"
myDog = "Kodi"

console.log(myDog) // Will throw an error
```

#### Anatomy of a Loop
For loops don't innately connect to arrays. But they are really good at counting. And we can match up the counting action of a for loop to match to the indexes of an array.  We are going to need to use a variable to keep track of our count

To create a for loop we need three pieces of information.
- Where to start counting
- Where to stop counting
- How to get from the start to the stop



Since we often use for loops on arrays, it is a convention to use the variable name `index` to store the current count. This is often shorted to `i`. This is the longhand way to write the three pieces.

```javascript
for(let index = 0; index < 10; index++)
```

Shorthand version of the same code.
```javascript
for(let i = 0; i < 10; i++)
```

Adding the executable block of code. The code inside the curly braces will run every time the loop runs.
```javascript
for(let i = 0; i < 10; i++) {
  console.log(i)
}
```

#### Connecting Loops to Arrays
Loops don't innately connect to arrays but we can set the starting and stopping values to match the indexes of an array.
- All arrays start with the index of zero
- All arrays have a length property
- Once we have an index we can extract the value

```javascript
const numsArray = [5, 6, 7, 8, 9]
for(let i = 0; i < numsArray.length; i++) {
  console.log("index:", i)
  console.log("value:", numsArray[i])
}
```

#### Creating Logic in the Loop
We can create code logic in the loop by adding things like conditional statements to the executable block of code.
- Return only the odd numbers

```javascript
const numsArray = [5, 6, 7, 8, 9]
for(let i = 0; i < numsArray.length; i++) {
  if(numsArray[i] % 2 !== 0){
    console.log(`${numsArray[i]} is an odd number!`)
  }
}


// Strings and Arrays have some similarities.  Both are are zero indexed and have a length property.  So we can also iterate on a string with a for loop.
const myString = "Hey there <Cohort>!"
let count = 0
for(let i = 0; i < myString.length; i++) {
  if(myString[i].toLowerCase() === "e") {
    count ++
  }
}
console.log(count)
```


### Review
- For loops are really great at creating a series of numbers
- For loops can be used to iterate through arrays by lining up the numbers with the array's indexes
- For loops have an executable block of code that can perform logic

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `javascript-intro-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room


## Extra Examples:

```javascript
const instructors = ["Sarah", "Trish", "Elyse", "Austin", "Charlean"]
for(let i = 0; i < numsArray.length; i++) {
  console.log(`${instructors[i]} is on the instruction team at LEARN`)
}




