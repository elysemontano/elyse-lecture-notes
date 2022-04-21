# Javascript Part One

# JavaScript background

- JavaScript was created in 1995 so it is another old, well documented programming language. Java and JavaScript are not the same language! Javascript was created as a collaboration between Brenden Eich and Netscape and during development it was called LiveScript. But Netscape changed the name of the language just before its release. Javascript was actually only named to ride the hype around this really highly anticipated language at the time called Java. It was pretty much a marketing ploy.

- JavaScript code is written into an HTML page so that when a user requests an HTML page with JavaScript in it, the script is sent to the browser (chrome) and it's up to the browser to execute that code

We will do lots of practice today if it’s not making sense quite yet what that means!

## Creating a Folder
- When we make projects as developers we keep our projects in folders. This helps us keep track of lots of pieces by staying organized.

** On Desktop Create a folder called jumpstart **

- We open up our folders in atom by dragging it and dropping it onto our atom application or by using the open folder option. Now we need to create a file called practice.js.  This file will be where we keep all our JS notes and practice challenges

** Go to practice.js **

## Code Commenting
 Double slash in js allows us to write anything and not have it interrupt our JS file
It also means our JS file won’t be able to see or work with it

# Primitive Data 
Every language is going to have data types of some sort. In computer science and computer programming, a data type is an attribute of data which tells your computer how the programmer intends to use the data.

## Types                                         
During jumpstart we are going to be dealing with three kinds of data

**Number**
Just as you would imagine Numbers and computers work really well together.
**String**
Anytime we would have anything like text that we are going to use it will be a string.
**Boolean**
True and false values that are super useful for making decisions. George Boole - boolean algebra - The father of the information age

### Numbers  
Javascript recognizes numbers.  Let's check this out.  To do so, we need a way to interact with our computer.


#### CONSOLE
** Inspect the page, console **

Before we get into syntax, etc. let’s look at the JS console in chrome.
Chrome is a really valuable developer tool to run javascript code.

If you don't have chrome installed, please take a minute to install it.  If you do have it installed, please open up a browswer.


** Chrome browswer -> right click -> inspect -> console **

Inside the console, we can type javascript directly into here.  This will be our way of talking to the computer for today.

Inside our chrome console, we can do basic math, for instance:

#### Basic math!
``` javascript
4
9.3
-10
5 + 5
8 - 2
10 * 4
100 / 2
```                                                  
You can type a number, number is spit back out
basic math

- JS follows the order of operations
```javascript
7 * (8 + 11) - 3
```

- This is all valid javascript


### STRINGS - A single piece of text data
- Anytime we would have anything like text that we are going to use, it will be a string.

```javascript                                                  
"Salt and Pepper Kettle Chips"
"Hello world"
"100"
```
single or double quotes
```javascript
"Double"
'Single'
```
We can use the different quote styles to allow for special situations

### BOOLEANS
True and false values that are super useful for making decisions. 
- A result of a query or comparison, etc.

```javascript
    True
    False
```
                                                                                                                                                            
## VARIABLES
Variables are like a piece of tupperware

Variables come with four parts
    - DECLARATION
    - NAME
        - descriptive with naming convention in camelCase
    - ASSIGNMENT OPERATOR  =
    - DATA
 
```javascript
    var catName = "Raisins"
    var age = 3
    var isCute = true
```

## STRING INTERPOLATION
String interpolation allows variables to be embedded in a string. 

```javascript
    `Have you met ${catName}?`
    `In 5 years, she will be ${ age + 5 }`

```


## BUILT IN METHODS  
 Parentheses tell javascript to perform an action ()
-  A lot of things can be executed in your code with a single method

```javascript
    alert("Hi!")
    prompt("how old are you?")
    // set prompt as variable: 
    var age = prompt("How old are you?")
    age
```

## Remind to practice pair programming!!!!!!

            /* CHALLENGES up to and including MADLIBS (expected time 30 mins) */
                    post current notes in jumpstart slack using code block

     


# STRICT EQUALITY OPERATOR
This performs a strict comparison
- Javascript allows us to make these comparisons work as questions for our program. 
- Essentially these comparisons ask the questions “are these things the same?”

    ```javascript
    3 ===  4  // false
    15 === 15  // true
    ```

    - The way javascript answers these questions is by giving us a boolean, a true or false value
    - We use three equal signs to evaluate equality because we use a single equal sign to assign variables


## RELATIONAL OPERATORS
Like the equality operator the relational operator also asks a question that gives us a true or false value
- Is this greater or less than that?

```javascript
    3 > 4  // Output: false
    3 < 4  // Output: true
```

## CONDITIONAL STATEMENTS  - if/else
If else statements allows Javascript to evaluate a condition and return a response. 
- IF is a keyword built into Javascript language 
- As a tool IF exists to help us set up a conditional statement
- A conditional statement describes something we want to happen under a certain condition
- If has two friend keywords called
  - else - Which works as a catch all 
  - else if - which allows for extra conditional statements 

        if(condition is true) {
           do this action
         } else if(this condition is true) {
           do this action
         } else {
           do this action as a catch all
         }

    Let's explore this in a more practical application. We will make an age checker

```javascript
    var myAge = 20

    if(myAge > 20) {
     alert("You can drink and vote!")
    } else if(myAge > 17) {
     alert("You can vote!")
    } else {
     alert("You're too young for it all")
    }
```
## Console.log
- Console log is great for bug fixing!
```javascript
console.log("Hello, I am great for displaying things!")
```

## Remind proper pair programming!!!  Switch drivers!!!

                /* Challenge World Domination (expected time 25 mins) */
                 post current notes in jumpstart slack using code block


