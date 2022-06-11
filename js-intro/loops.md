
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
One of the most fundamental concepts in coding is being able to repeat a process over and over again. This is called iteration. Computers are really great at iteration. There are many ways to create iteration. Today we will look specifically at how for loops can interact with arrays. The array data type is basically a list. Developers use arrays to group data. Two very common actions are wanting to look at each item in an array or make a decision about each item in the array.

#### Anatomy of a Loop
For loops don't innately connect to arrays. But they are really good at counting. And we can match up the counting action of a for loop to match to the indexes of an array.

To create a for loop we need three pieces of information.
- Where to start counting
- Where to stop counting
- How to get from the start to the stop

Since we often use for loops on arrays, it is a convention to use the variable name `index` to store the current count. This is often shorted to `i`. This is the longhand way to write the three pieces.
```javascript
for(let index = 0; index < 10; index = index + 1)
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

