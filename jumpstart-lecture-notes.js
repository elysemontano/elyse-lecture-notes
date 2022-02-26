          /*       JavaScript background     */

// JavaScript was created in 1995 so it is another old, well documented programming language. Java and JavaScript are not the same language! Javascript was created as a collaboration between Brenden Eich and Netscape and during development it was called LiveScript. But Netscape changed the name of the language just before its release. Javascript was actually only named to ride the hype around this really highly anticipated language at the time called Java. It was pretty much a marketing ploy.

// JavaScript code is written into an HTML page so that when a user requests an HTML page with JavaScript in it, the script is sent to the browser (chrome) and it's up to the browser to execute that code

// We will do lots of practice today if it’s not making sense quite yet what that means!

// -CONSOLE

// Inspect the page, console
// Before we get into syntax, etc. let’s look at the JS console in chrome.
//   Chrome is a really valuable developer tool to run javascript code.

//  If you don't have chrom installed, please take a minute to install it.  If you do have it installed, please open up a browswer.
//  Chrome browswer -> right click -> inspect -> console
//  Inside the console, we can type javascript directly into here.  This will be our way of talking to the computer for today.

// Inside our chrome console, we can do basic math, for instance:
5 + 5
8 - 2
10 * 4
100 / 2

// Every language is going to have data types of some sort. In computer science and computer programming, a data type is an attribute of data which tells your computer how the programmer intends to use the data.


            /* *Create practice.js* */

// PRIMITIVE DATA TYPES

// During jumpstart we are going to be dealing with three kinds of data


// NUMBERS - Just as you would imagine Numbers and computers work really well together.
    4
    9.3
    -10
    // type a number, number is spit back out

    // basic math
    4 + 100
    40 - 6
    76 * 2
    9 / 3

    // JS follows the order of operations
    7 * (8 + 11) - 3


// STRINGS - - Anytime we would have anything like text that we are going to use it will be a string.
    "Salt and Pepper Kettle Chips"
    "Hello world"
    "100"

    // single or double quotes
    "Double"
    'Single'


    // String concatenation (returns a single string)
        "I made" + " a sentence!"

        // escaping out of the quotes in a string
        // "My mother said "do you want meatloaf?""
        //  ^ this will not work properly
        //  Need to use a back slash to use double quotes inside
        "My mother said \"do you want meatloaf?\" "


// BOOLEANS - - True and false values that are super useful for making decisions. 
    True
    False
    // result of a query or comparison, etc.
                                                                                                                                                            
// VARIABLES - Variables are like a piece of tupperware
  // variables come with four parts
        // DECLARATION
        // NAME
            // descriptive and in camelCase
        // ASSIGNMENT OPERATOR  =
        // DATA

        var catName = "Raisins"
        var age = 3
        var isCute = true

        // Let's combine a sentance with our variable using concatenation
        "Have you met " + catName + "?"


// STRING INTERPOLATION
    // Same end result of concatenation. Both can be used but String Interpolation can be easier when working with lots of different variables. 

    `Have you met ${catName}?`
    `In 5 years, she will be ${( age + 5 )}`
      // Rather than…
    "In 5 years, she will be " + (age + 5)



// BUILT IN METHODS  
    // Parentheses are a call to action ()
    // lots of things can be executed in your code with a single call to action

    alert("Hi!")
    prompt("how old are you?")
    "Raisins".charAt(5)   // Output: "n"
    "Raisins".length()   // Output: 7
    "Raisins".includes("sins")  // Output: true






            /* CHALLENGES up to and including MADLIBS (expected time 30 mins) */
                // post current notes in jumpstart slack using code block

     





//  STRICT EQUALITY OPERATOR
        // This performs a strict comparison
        // Javascript allows us to make comparisons and these comparisons work as questions for our program. 
        // Essentially these comparisons ask the questions “are these things the same?”
        3 ===  4  // false
        15 === 15  // true
        
        // The way javascript answers these questions is by giving us a boolean, a true or false value
        //  We use three equal signs to evaluate equality because we use a single equal sign to assign variables


// RELATIONAL OPERATORS
    // Like the equality operator the relational operator also asks a question that gives us a true or false value
    // Is this greater or less than that
         3 > 4  // Output: false
        3 < 4  // Output: true


// CONDITIONAL STATEMENTS  - if/else
    //  If else statements allows Javascript to evaluate a condition and return a response.  

        // if(condition is true) {
        //   do this action
        // } else if(this condition is true) {
        //   do this action
        // } else {
        //   do this action as a catch all
        // }

    //  Let's explore this in a more practical application. We will make an age checker

    var myAge = 20

    if(myAge > 22) {
     alert("You can drink and vote!")
    } else if(myAge > 19) {
     alert("You can vote!")
    } else {
     alert("You're too young for it all")
    }

    // console.log() for bug - fixing





                /* Challenge World Domination (expected time 25 mins) */
                // post current notes in jumpstart slack using code block






// Magic 8 ball Code along  -- Encourage everyone to open up a file and code this

// -FUNCTIONS
//   Reusable blocks of code, think of it as a container or tupperware that holds your code and can be reused over and over
//   Executes when ran and will always return an output
//   Declare function as a variable, this time with the keyword const
//   Parenthesis are a call to action where you can pass an arguement
//   We will then use what is called arrow syntax
//   Curly braces are an execution
//   Every function must have a return

//   const myFunction = () => {
//      return this code block
//   }

//   To call the function: myFunction()



//  Let's make a function that acts as a magic 8 ball

// First let's set up our function

// const magic8 = () => {
//     
// }


//  To make a magic 8 ball, let's think about how a magic 8 ball works.  When you shake the ball, a random answer is spit out.  We can mimic this by displaying random messages. 
// To display random messages, we are going to approach this with a few steps.  We first need to find a way to randomly generate something.  Javascript has some built in methods that can help us out here.  

//  Math.floor() =>  Rounds down to the nearest whole number
// Ex: 
Math.floor(5.5) // => 5
Math.floor(5.1)  // => 5

Math.random() * 3   //=>  Generates a number between 0 and specified number (can create numbers with decimals)
//  Combined: 
Math.floor(Math.random() * 3) //  =>  Generates a random number between 1 and 6


// Now that we have a random number that we can use to randomize something, we will need to evaluate this number and return an outcome based on the number.  This sounds like a great place for a conditional statement


// var randomNum = Math.floor(Math.random() * 3)

// if(randomNum === 0) {
//     return "It is decidedly so"
// } else if(randomNum === 1) {
//     return "Ask again tomorrow"
// } else if(randomNum === 2) {
//     return "Looks promising"
// } else {
//     return "Ooops, something went wrong"
// }


// Let's wrap this with our function

const magic8 = () => {
    var randomNum = Math.floor(Math.random() * 3)
    console.log(randomNum)
    if(randomNum === 0) {
        return "It is decidedly so"
    } else if(randomNum === 1) {
        return "Ask again tomorrow"
    } else if(randomNum === 2) {
        return "Looks promising"
    } else {
        return "Ooops, something went wrong"
    }
}



        /*  Challenge Refactor World Domination into Function (expected time 20 mins) */
                //  post current notes in jumpstart slack using code block