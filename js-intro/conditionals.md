
# Lecture Notes

### Overview
- Conditional statements create logic through evaluations that return a Boolean value
- There is only one outcome per conditional statement

### Process
- Ensure you are in the cohort-lecture-examples repo
- Ensure your local is up to date and there are no stale branches
- Create a new branch
- Create a JavaScript file with the naming convention `javascript-conditionals.js`
- Run the file with `node`

### Additional Notes and Goals
- Modeling git workflow
- Instilling good indentation habits

### Major Takeaways
- Vocab - if, else if, else
- Evaluations that return a Boolean value

### Lecture
- Create a branch
- Create a JavaScript file with a `.js` extension and no spaces in the name
- Run the file with `node`

One of the most powerful things we can have our program do is perform logic. Within that logic we want our program to be able to take a given input make a decision about that input and give us an appropriate output. Conditionals, decision trees, or just if/else statements are all the same thing. To create conditionals, we have to create evaluations. We have to create a situation where we can determine if the outcome of that evaluation is true or false.

#### Evaluations
These evaluations return Boolean values.

**Equality Operator**
- Strict equality `===` 
    - Checks data type and value

  
```javascript
var myName = "Elyse"
console.log("Elyse" === myName) // True

var myFavNum = 7
console.log(myFavNum === 7) // True
console.log(myFavNum === '7') // False
```

- Loose equality `==`
    - Checks only value (uses type coercion if nessesary)
    - Type coercion is the process of converting value from one type to another

```javascript
    var myFavNum = 7
    console.log(myFavNum == 7) // True
    console.log(myFavNum == '7') // True
```

- Strict equality is the best practice



**Relational Operators**
  Like the equality operator the relational operator also asks a question that gives us a true or false value
   - Is this greater or less than that?

- < > <= >=

```javascript
3 > 4  // False
3 < 4  // True
3 <= 3 // True
```

**Logical Operators**
  We also have a way to be able to evaluate mutliple statements in one condition.
  - First we have the logical and `&&`

    ```javascript
    var greeting = "hello"
    var num = 6

    console.log(num > 2 && "hello" === greeting) // true + true = true
    console.log(num < 2 && "hello" === greeting) // false + true = false
    ```

  - We also have the logical or `||`

    ```javascript
    console.log(num > 2 || num === greeting) // true
    ```

**Negation**
- We can also negate a statement by using the Logical oposite
    - Bang operator `!`

    ```javascript
    console.log(num !== greeting) // True
    ```

#### If/Else
- Create code that will execute an output based on an evaluation
- `if` is a keyword in JavaScript, it is built into the language

```javascript
if
```

- The job of an if statement is to make a decision
- Need to pass an evaluation to the if
- To pass more info, we need parentheses

```javascript
if()
```

- Inside the parentheses we need to pass information that can be evaluated to a Boolean value of true or false
- If this information evaluates to `true` we want a response to occur
- The response is wrapped in curly braces known as a block of code
- What is inside the curly braces is the executable code, the action

```javascript
if(condition is true){
  do this action
}


if(true) {
  console.log("I'm true")
}
```

There may be times where we may want more than two possible outcomes. So let's add some code to execute if our "if" is false. If the `if` statement is false we want something to happen. That requires another key word `else`. Else is also a protected word in JavaScript. Unlike "if," "else" does not take a statement. It only runs if nothing else is true. It is the catch all.

```javascript
if(false){
  console.log("You can't see me cause I am false")
} else {
  console.log("Here is the else")
}
```

#### Proper Indentation
The most amateur thing you can do while you are learning code is be lazy about your formatting. Having messy indentation will make your code look bad and more importantly, it makes it really hard to find mistakes.

#### Passing Evaluations
Rather than passing a Boolean value directly we can create a statement to be evaluated.

```javascript
var myName = "Elyse"
if(myName === "Elyse"){
  console.log("Hey Elyse!")
} else {
  console.log("Hey!")
}
```

- This is a very small computer program!  Let's make something a little bigger.

#### Else If
Sometimes we will need more than two possible outcomes.  We can still use conditionals, but we just need to use a new friend called 'else if'

 - Talk about string interpolation

```javascript
var num1 = 3
var num2 = 6

if(num1 > num2) {
  console.log(`${num1} is greater than ${num2}`)
} else if(num1 < num2) {
  console.log(`${num1} is less than ${num2}`)
} else if(num1 === num2) {
  console.log(`${num1} and ${num2} are the same`)
} else {
  console.log("Invalid entry")
}
```

JavaScript is read line by line. So our little program is just waiting or looking for a condition to be true, or for the else, with no qualifications. As soon as one of the evaluations returns true, the block is executed successfully and JavaScript is done. So set your logic accordingly, and test all outcomes. You could have two true statements but the one that is read first by your program is going to run. The second one will not.

- Play around and change things, add variables

### Review
- What are the three main types of evaluations?
- What data type do the evaluations return?
- Always need an if
- Can have as many else ifs as you want
- Else is a catch all and does not take an evaluation
- Only one outcome will ever be true at a time

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `javascript-intro-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room


### Other Examples:

```javascript
var color1 = "green"
var color2 = "blue"

if(color1.length === color2.length) {

}
```