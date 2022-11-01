# Lecture Notes

### Overview
- Testing creates automated quality assurance for your code
- Jest is a JavaScript testing framework to verify the accuracy of any JavaScript codebase

### Goals
- Modeling git workflow
- Instilling good indentation habits
- Anatomy of a Jest test
- Philosophy of test driven development
- Practicing red-green refactor development
- Pseudocode

### Major Takeaways
- Extensions for test suite
- Good failure and passing criteria
- Pseudocode
- Searching techniques
- Vocabulary

## Lecture
- Create a branch
- Create a folder called javascript-foundations-jest
- Create a Testing file with a `javascript-jest.test.js` extension and no spaces in the name

#### Jest
Jest is a JavaScript testing framework. The framework is a collection of files that are managed by yarn.

#### yarn
- Code is shared through something called a package. A package contains all the code being shared. Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don't ever have to worry. Yarn allows you to use other developers' solutions to different problems, making it easier for you to develop your software.

** for notes: A package manager for javascript that contains code being shared from other developers **


To install dependencies that make up the framework of jest:
- $ yarn add jest

- node_modules is thousands of folders and files that make up the the framework we are using
- package.json holds metadata about a project, contains information about dependencies
- yarn. lock is the main source of information about the current versions of dependencies in a project.


#### TDD
We use jest to write tests for our Javascript code

- (Test Driven Development)
Breaking the code into a series of tests helps us break the big problem down into much smaller ones, and smaller problems are easier to solve, so we write dramatically better code because of it. If you have solid tests, and decide that you want to refactor some part of your application because either the requirements of the application changed, or you have realized a better way, you are free to do so with confidence.

#### red-green refactor _Process_
- 1: Write the test first!
- 2: Run your testing suit to see a failing test
- 3: Write the code
- 4: Run your testing suit to see your test pass $ yarn jest
- 5: Refactor if necessary

One of the fastest ways to prove to future employers that you care about your code, and know what you are doing, is to write good tests. When we write our tests first, then write the code required to make them pass, we as developers, are thinking about our code in a different, more logical way.
Your tests speak volumes about you as a developer, as much or more than the actual code.

***
- Better, cleaner code
- Less bugs
- Forces the developer to think about the input and output before beginning to code
- Stay focused on essential piece of the program
- Communicates to other developers the intent of the function
- Allows for "safe" and confident refactoring of code
***


### Process
1: Write the test first! 

Prompt:  Create a function called greeter that returns a string that says Hi, <Cohort> 2022!!!

Before writing a test, I like to determine any inputs and my expected output
Input: none
Output: "Hi, <Cohort> 2022!!!"

#### Explanation of Testing Syntax with Jest (use this explanation while pseudocoding in the text editor)
Jest uses a method called describe() that runs other nested methods. First we invoke the describe method, providing the argument of "greeter" which is our function name, followed by a comma, a set of parentheses, arrow syntax and an opening curly brace to allow us to nest more code within its block scope. (place pseudocode above the describe method)

```javascript
// a describe method that lists the name of the function OR naming of the particular test.
describe("greeter", () => {
```

  Second we invoke the it method, providing it an argument that in plain words explains what the function does, followed by a comma, a set of parentheses, arrow syntax and its own opening curly brace allowing us to nest more code within its block scope. 

  ```javascript
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns a string that says Hi, Cohort 2022!!!", () => {
  ```

    Third we then invoke the expect method, providing it an argument of the function call, and then chain a matcher to the end of it, in this case we use toEqual(), which will check that the return of the function to be a string that says hi.
  
    ```javascript  
    // expect will invoke the function and compare the result to a predetermined expected output using .toEqual matcher
    expect(greeter()).toEqual("Hi, Cohort 2022!!!")
  })
})
    ```

2: Run your testing suite to see a failing test. 

 Run `$ yarn jest` in the terminal to run the test. We can expect that the test will fail since we haven't created the function yet (the red part of red-green refactor). 

Yay! A good failure! The test points to exactly where the issue is in the code through an error message and an arrow `^` at the point it failed. The test is looking for a function called greeter and cannot find one. We can tell this is the case, because of the `ReferenceError: greeter is not defined` part of the fail message. This tells us that our test is written correctly, but it failed because when our expect method tried to invoke the function greeter(), it couldn't find it.


It's important that we read our fail/error messages thoroughly, as it won't always be a ReferenceError. We may have messed up our syntax, or something else, but Jest will give us a good indication as to where it went wrong. In this case, it failed where we expected it to.


3: Write the code

```javascript
const greeter = () => {
  return "Hi, Cohort 2022!!!"
}
```
Notice: There is no console.log() or function call. Jest handles all of that in the expect method. Our function name AND the return must exactly match what we provided our expect and matcher methods.
Now our test should pass (green).

4: Run your testing suite to see your test pass
>PASS  ./jest.test.js

>  hello

>    ✓ returns a string that says hi (6ms)

> Test Suites: 1 passed, 1 total

> Tests:       1 passed, 1 total

5: Refactor if necessary
Our test passes and we can now move on to creating more tests.

```javascript
// Write a test for a function that logs "help others" if you do understand or "ask questions" if you do not understand

// Input: "yes"
// Output: "help others"

// Input: "no"
// Output: "ask questions"

describe("doYouUnderstand", () => {
  it("returns help others or ask questions based on input", () => {
    expect(doYouUnderstand("yes")).toEqual("help others")
    expect(doYouUnderstand("no")).toEqual("ask questions")
  })
})

// Pseudocode
// Create a function called doYouUnderstand that takes in a string as an arguement
  // One parameter: string
  // Write a conditional to evaluate if string equals "yes"
    // return "help others"
  // Otherwise evaluate if string equals "no"
    // return "ask questions"

const doYouUnderstand = (string) => {
  if(string === "yes"){
    return "help others"
  } else if(string === "no") {
    return "ask questions"
  }
}
```

Notice: We don't comment out the old tests and function. We leave those there, as the purpose of having tests is so that they are AUTOMATED. We simply keep the original code and tests and keep writing new ones below those.

Sometimes it can be useful to create variables within our test method for use later on in our expect methods.
Note: These variables are only available within the scope of the specific test it has been created in.



Prompt: Create a function that takes in an array and a string and appends the string to the end of the array

```javascript

// Prompt: Create a function that takes in an array and a string and appends the string to the end of the array

// Input: ["take notes", "pay attention", "practice", "take breaks"], "ask questions"
// Output: ["take notes", "pay attention", "practice", "take breaks", "ask questions"]

describe("becomeADeveloper", () => {
    it("adds ask questions to the end of an array", () => {
      let developerList = ["take notes", "pay attention", "practice", "take breaks"]
      let developerString = "ask questions"
      let result = ["take notes", "pay attention", "practice", "take breaks", "ask questions"]
      expect(becomeADeveloper(developerList, developerString)).toEqual(result)
    })
  })

//   ReferenceError: addGranola is not defined

const becomeADeveloper = (array, string) => {
    return array.concat(string)
  }
```

We can see here, utilizing variables for our arrays, that it keeps our code cleaner and easier to understand and read, versus having to put these huge arrays into the argument parentheses.


```javascript
// Prompt: // Create a function that allows a customer to filter the cost of an item dynamically by selecting the cost range



describe("priceFilter", () => {
  it("filter the cost of an item dynamically by selecting the cost range", () => {
    const prices = [10, 22, 33, 94, 46, 55, 27, 37]
    expect(priceFilter(prices, 20, 40)).toEqual([22, 33, 27, 37])
  })
})

const priceFilter = (array, num1, num2) => {
  return array.filter(value => {
    return value > num1 && value < num2
  })
}

```


```javascript
describe("filterNames", () => {
  it("filter the names based on search", () => {
    const names = ["Elyse", "Trish", "Sarah", "Austin", "Charlean"]
    const letterS = "s"
    const letterE = "E"
    expect(priceFilter(names, letterS)).toEqual([ 'Elyse', 'Trish', 'Sarah', 'Austin' ])
    expect(priceFilter(names, letterE)).toEqual([ 'Elyse', 'Charlean' ])
  })
})

const filterNames = (array, search) => {
  return array.filter(value => {
    return value.toLowerCase().includes(search.toLowerCase())
  })
}

```

## Review
- What is the extension to make a test suite?
- How do you know if you have good failure?
- What is the red-green refactor process?
- True/False We comment out old tests or functions before making more tests in the suite. Explain your answer. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.
Write the test FIRST, see it fail, then write the code to make it PASS.
- Pseudocode your solution
- Make sure the function name and expected output match in the test and solution.
- Console.log is not needed for the test suite.