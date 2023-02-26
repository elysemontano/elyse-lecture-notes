# Lecture Notes

### Overview
- Deep dive into the fundamentals of JavaScript
- Establishing expectations for challenges

### Process
- Ensure you are in the cohort-lecture-examples repo
- Create a new branch
- Create a JavaScript file with the naming convention `language-topic.js`
- Run the file with `node`

### Additional Notes and Goals
- Setting the tone for all lectures
- Modeling git workflow
- Establishing JavaScript and terminal workflow
- Be declarative and deliberate with the terminal commands

### Major Takeaways
- Primitive data types
- Variable creation
- Built-in methods

### Lecture
- Create a branch
- Create a JavaScript file with a `.js` extension and no spaces in the name
- Run the file with `node`
- Explain `console.log()`

Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. If you are a web developer it is almost a given that you are going to need to know JavaScript no matter what stack you are working in.

- JavaScript provides interaction with the user
- JavaScript is dynamically-typed - data types can be changed while they are being used
- JavaScript is an interpreted language - read at runtime
- JavaScript is a scripting language - logic can be read and understood by the computer.  

#### Data Types
Because JavaScript manipulates data, it is very particular about how it processes that data. JavaScript has categories of information that it will work with. These are called data types. There are 6 primitive data types in JavaScript. Primitive data types mean they cannot be broken down into a simpler form.

6 Primitive Data Types:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol

**Numbers**
- The number data types allow us to perform mathematical functions and compare values
- Numbers can either be integers or floats
   - integers: whole number
    8
  - float: decimal
    8.9
- JavaScript can perform basic mathematical functions - addition, subtraction, multiplication and division
- You can multiply exponents with two asterisks
- Modulo will return the remainder of a division operation

**Strings**
- Strings are characters stored inside quotation marks
- Strings have particular properties, things like length, and ability to identify the location of a character
- Indexing, zero-indexing
    Zero-indexed: number designated to the specific location starting at 0
      "hello" h is at 0 index

**Booleans**
- Booleans are true false values
- They are represented by the words true and false but they are not strings
- Boolean values can be used for comparisons

**Undefined**
- Undefined is the value of a variable that has been declared, but not yet assigned

**Null**
- Null is equal to nothing else, the lack of value. It is not false, it is not 0, it is just null

**Symbols**
- Symbols are unique keys
- We will revisit symbols more in depth when we get to JavaScript objects


#### Variables
- Store information by creating variables
- Anything saved in a variable needs to be a data type
- To create a variable in JavaScript you must declare it: var, let, const
- Name the variable in camelCase

```javascript
const myName
console.log(myName) // undefined
```
Use the terminal to see the console log output by running `$ node <filename>`

- At this point our variable has been declared but not assigned meaning right now our variable has the data type of undefined
- Single equal sign to assign a variable
- The declarations let and var allows variables to be reassigned
- The declarations const protects a variable from being reassigned

```javascript
var myName = "Elyse"
console.log(myName)
myName = "Nicole"
console.log(myName)

const myName = "Elyse"
console.log(myName)
myName = "Nicole"
console.log(myName)
// Output: error
```

#### String Methods and Properties
Strings are a collection of characters. Because of the structure of this data type, strings have certain properties. For example, strings have a length property.
```javascript
console.log("alpha".length) // 5
console.log("alpha cohort".length) // 12
```

Each character in the string can be accounted for by its placement called an index. Strings are zero indexed meaning the counting of the characters starts at 0 and moves forward.

To extract a valur at a given index, I can use bracket notation to state the index I want the value of.
```javascript
console.log("hello"[0])
"hello"[1]
```

#### Built in Methods
There are lots of actions that take place in code that people do over and over. If there is an action that is done over and over, it is likely that someone has made a shortcut. JavaScript has lots of these shortcuts referred to as built-in methods. They are bits of code functionality wrapped up and given to us out of the box when you make a file with the extension .js. All build-in methods are designed for a particular action on a particular data type.

  - Built in methods are shortcuts to do a specific action
  - Is written with dot notation and has parenthesis after that can provide additional information if necessary

```javascript
var greeting = "hello"

// upcase all the letters in a string
console.log(greeting.toUpperCase())
// Output: "HELLO"

// returns the character that is at a particular index
console.log(greeting.charAt(1))
// Output: "e"

// returns the index of a particular character
console.log(greeting.indexOf("e"))
/// Output: 1

// returns a Boolean value if a subset of characters exists within the string
console.log(greeting.includes("he"))
// Output: true

// returns a subset of a string based on a starting and ending index
console.log(greeting.slice(1, 3))
// Output: "el"
```

### Review
- What is the file extension for JavaScript?
- What does console.log() do?
- How do you run a JS file?
- What is camel case?
- What are the three variable declarations?
- What are the six primitive data types?

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `javascript-intro-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)


Removed from lecture to put in conditionals:

**Evaluations**
These evaluations return Boolean values.

**Equality Operator**
- Strict equality `===` vs loose equality `==`
- Strict equality is the best practice

```javascript
var myFavNum = 7
console.log(myFavNum === 7)

var myName = "Elyse"
console.log("Elyse" === myName)
```

**Relational Operators**
- < > <= >=
```javascript
var greeting = "hello"
var num = 6
console.log(num > 2 + 2)
console.log(greeting.length <= num)
```

**Logical Operators**
- Logical and `&&`
- Logical or `||`

```javascript
var greeting = "hello"
var num = 6

console.log(num > 2 + 2  && "hello" === greeting)

console.log(num > 2 + 2 || num === greeting)
```

**Negation**
- Logical opposite
- Bang operator `!`
- Relational operators are design to compare numerical values < > <= >=
- Equality operators == ===
- Type coersion
- Logical operators are used to evaluate two complete clauses &&, ||, !
