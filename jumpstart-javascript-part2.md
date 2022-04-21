# Javascript Part Two

# Magic 8 ball Code along  -- Encourage everyone to open up a file and code this

## FUNCTIONS
- Reusable blocks of code, think of it as a container or tupperware that holds your code and can be reused over and over
    
- Executes when ran and will always return an output
    
### Process
- Const
  - Variable declaration
- Arrow Syntax
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


- Let's make a function that acts as a magic 8 ball
    - First let's set up our function:

    const magic8 = () => {
        
    }

To make a magic 8 ball, let's think about how a magic 8 ball works.  When you shake the ball, a random answer is spit out.  We can mimic this by displaying random messages. 
    
To display random messages, we are going to approach this with a few steps.  We first need to find a way to randomly generate something.  
    
Javascript has some built in methods that can help us out here.  

## Math.Random()
Generates a random number between 0 and 0.9
** First show it by itself **
```javascript
console.log(Math.random())
```
** Then with * 3 **
```javascript
console.log(Math.random() * 3)
```

## Math.floor()
Rounds down to the nearest whole number
```javascript
console.log(Math.floor())
console.log(Math.floor(5.8)) // Output: 5
```

- combined we get:
```javascript
console.log(Math.floor(Math.Random() * 3))
```


Now that we have a random number that we can use to randomize something, we will need to evaluate this number and return an outcome based on the number.  This sounds like a great place for a conditional statement

```javascript
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

// We need to call the function using function invocation
magic8()
// ^ this will call on the function and will run the entire function block
```




        /*  Challenge Refactor World Domination into Function (expected time 20 mins) */
                //  post current notes in jumpstart slack using code block


# Connecting JS to HTML

  - Script tag, add an alert to make sure they're connected

```html  
<script type="text/javascript" src="recipe.js"></script>
  ```
  - onclick with getElementById(‘string’)
      - Html element
          - id=”html-container”
          - Html element getting updated


Javascript side…
  - Parameters in function
      - Add conditional to the function
      - Pass the params from the HTML page 
          - onclick=”functionName(‘string passing through’)”
          - Clarify single quotes inside double quotes when introducing passing strings into the function


I am not going to share this js file I am working in but your student notes and the previous javascript notes have  

Encourage students to think through the logic and needs of the treasure hunt function

 /*Challenge Treasure Hunt*/



# FEEDBACK:

    const myFunction =
    this is a variable declarion 

    the function is the parenthesis and arrow function

    The arrow function is the actual arrow (makes it a machine)

