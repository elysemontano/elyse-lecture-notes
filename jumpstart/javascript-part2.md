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
Update the function to have a variable assigned to the random number

```javascript
const magic8 = () => {
    var randomNum = Math.floor(Math.random() * 3)
    console.log(randomNum)
}

magic8()
```

Now that we have a random number that we can use to randomize something, we will need to evaluate this number and return an outcome based on the number.  Because we need to make an evaluation, we can use something called a conditional statement.

If else statements allows Javascript to evaluate a condition and return a response. 
- IF is a keyword built into the Javascript language 
- As a tool IF exists to help us set up a conditional statement
- A conditional statement describes something we want to happen under a certain condition

if(condition is true) {
  do this action
}

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

- We need to add some things to our html page so that our javascript file and html files are connected and working properly.
- Setup script tag with src and type attributes just before the closing body tag

```html
  </footer>
  <script type="text/javascript" src="logic.js"></script>
</body>
```

- Set up an alert in Javascript to show page is connected:
```javascript
alert("I am connected!")
```
- Let's make this alert appear only when we click somewhere on the page instead of when the page loads.  To do this, let's place our alert inside a function so we have control on when the alert appears

```javascript
  const easterEgg = () => {
    alert("I am connected!")
  }
```

- Now we need to add an onclick attribute to where we want there to be a javascript action
{<td onclick="easterEgg()"></td}
- Check button is calling alert


- Now that we have our function being called when we click on a specific location, let's have it do something other than an alert.  I want to change the text in this particular box to an emoji.
- Let's start by adding an id to the tag I want to change so I can tell Javascript that this is my target.
```html
<td id="granny" onclick="easterEgg()"> Granny Smith </td>
```

Now we need to update our javascript function to do the actual action.

```javascript
const easterEgg = () => {
    document.getElementById("granny").innerHTML = "🍏"
}
```

- And our easter egg works beautifully!

- I want to add in a few more things.  I want each one of these apples to change to an emoji so I will need to refactor again.

- Let's start with adding id's to each of our elements that I want to change

- I also want to pass into my function invocation a value which is called an arguement, so I can tell which box has been clicked over in javascript

```html
    <tr>
      <td id="granny" onclick="easterEgg('granny')"> Granny Smith </td>
      <td id="honeycrisp" onclick="easterEgg('honeycrisp')"> Honeycrisp </td>
      <td id="golden" onclick="easterEgg('golden')"> Golden Delicious </td>
    </tr>
```

- Now I can add something into the parenthesis of my function at the top and this is called a parameter.  This is basically assigning a new name to the arguement being passed in.  

- Now I can use this param in a conditional.
```javascript
const easterEgg = (apple) => {
  if(apple === "granny") {
    document.getElementById(apple).innerHTML = "🍏"
  } else if(apple === "honeycrisp") {
    document.getElementById(apple).innerHTML = "🍎"
  } else if(apple === "golden") {
    document.getElementById(apple).innerHTML = "🥧"
  }
}
```

- There we go!  We now have our easter eggs in here and can click any of these three boxes to change the text to an emoji.



Encourage students to think through the logic and needs of the treasure hunt function

 /*Challenge Treasure Hunt*/
