// JAVASCRIPT

//  First let's open a new file in our text editor.  We can name the file something descriptive.  Since we are going to be writing javascript, we need to use the extension .js on our file name.



// -CONSOLE
//   Next, we are going to expore a really valuable developer tool to run javascript code provided by google chrome.  How many of you have chrome installed?  If you don't, please take a minute to install it.  If you do have it installed, please open up a browswer.
//  Chrome browswer -> right click -> inspect -> console
//  Inside the console, we can type javascript directly into here.  This will be our way of talking to the computer for today.



// -DATA TYPES:  Data storage format
//  NUMBERS: Javascript recognizes numbers and can perform evaluations 
//  Ex:
    5 + 5 
    8 - 2
    10 * 4
    100 / 2

//  STRING: Collection of characters wrapped in quotation marks.  Strings can include any type of characters including letters, numbers, and symbols however they evaluate to a collection of characters
//  Ex: 
"hello world"
"5"
    // Numbers that are used as strings mean something different to javascript and will not evaluate the same way.
    "5" + "5"  // => "55" This is joining the strings together not adding the numbers

//  BOOLEAN: Represent value of true of false.  A result of a query or comparison
//  Ex:
//    My name is Elyse is a true statement
//    My name is Charlean is a false statement


// -EQUALITY OPERATOR
//  We will explore strict comparison also known as an equality operator which is done by using three equal signs. Returns boolean value.  
//  Ex: 
    true === false // => false
    42 === 42 // => true


// -VARIABLES
//  A storage container or tuperware for information that we can define a name to and access information from. 

//  DECLARE: Several ways to declare a variable, one of which is using the javascript keyword var.  This is telling javascript, I want to store a variable.
//  ex: var

//          MENTION CAMELCASE!!!!

//  NAME: Next we need to name the variable.  When naming a variable, we want to be descriptive and use what is called camelCase.  CamelCase has one word, first letter lowercase, secondary words are still connected and Capitalized
//  ex:
    var needsCoffee 

//  ASSIGN: Now we need to assign a value to the variable by using a single equal sign
//  DATA: Following the equal sign will be the data in which we want the variable to store.  This can be any data type
    var needsCoffee = true
    var coffeeSize = "large"
    var dice = 2 




// -CONDITIONAL STATEMENTS

//  If else statements allows Javascript to evaluate a condition and return a response.  
// if(condition is true) {
//   do this action
// } else if(this condition is true) {
//   do this action
// } else {
//   do this action as a catch all
// }

//  Let's explore this in a more practical application.  For our dice game, we will need to evaluate whether the number we rolled is a one to see if we lost the game.  To do this, we will write our most specific condition as our first condition since javascript runs from top to bottom.  

if(dice === 1) {
  // We want to see a result in our console and so we will use a console.log() which displays our response
  console.log("Game over")
}

//  But what if we roll a number between 2 - 6?  We want to evaluate those conditions as well and return a response as well.  We can write this by else if:

if(dice === 1) {
  console.log("Game over")
} else if(dice === 2) {
  console.log("2")
} else if(dice === 3) {
  console.log("3")
} else if(dice === 4) {
  console.log("4")
} else if(dice === 5) {
  console.log("5")
} else if(dice === 6) {
  console.log("6")
}
// We close our if else statement with a catch all "else".  This means that if everything above this point evaluates as false, we will do this action for all other insances.  For instance if we rolled an 8 somehow.  
else {
  console.log("Oops, the dice fell off the table!")
}


// -FUNCTIONS
//   Reusable blocks of code, think of it as a container or tupperware that holds your code and can be reused over and over
//   Executes when ran and will always return an output
//   Declare function as a variable, this time with the keyword const

//   const myFunction = () => {
//      run this code block
//   }

//  The parenthases are a call to action
//  The curly braces are an execution
//   To call the function: myFunction()

//  Let's use a function for our block of code we have built for our dice game so we do not need to copy and past the entire code block each time.

const diceRoll = () => {
  // We also want to include our variable inside this function
  var dice = 2
  if(dice === 1) {
    console.log("Game over")
  } else if(dice === 2) {
    console.log("2")
  } else if(dice === 3) {
    console.log("3")
  } else if(dice === 4) {
    console.log("4")
  } else if(dice === 5) {
    console.log("5")
  } else if(dice === 6) {
    console.log("6")
  } else {
    console.log("Oops, the dice fell off the table!")
  }
}

// We can now call this function 
diceRoll()


//  -BUILT IN METHODS
//  For our dice game, we will not want to hard code the number each time as we currently have.  We want a dynamic number that is randomly generated.  We can do this using some built in methods: 

//  Math.ceil() =>  Rounds UP to the nearest whole number
// Ex: 
  Math.ceil(5.5) // => 6
  Math.ceil(5.1)  // => 6
//  Math.random() * 6 =>  Generates a number between 0 and specified number (can create numbers with decimals)
//  Combined: 
Math.ceil(Math.random() * 6) //  =>  Generates a random number between 1 and 6

//  We can now set our dice variable to have this code block and place our variable inside our function so a new random number is generated every time the function is ran.
var dice = Math.ceil(Math.random() * 6)

//  Another built in method is called an alert which generates a pop up on a page and displays what is called inside the parenthesis
alert() // => pops up with an alert on page to notify user

//  We can use this to alert our user that they lost the game, and to notify them something went wrong as well:

const diceRoll = () => {
  var dice = Math.ceil(Math.random() * 6)
  if(dice === 1) {
    alert("Game over")
  } else if(dice === 2) {
    console.log("2")
  } else if(dice === 3) {
    console.log("3")
  } else if(dice === 4) {
    console.log("4")
  } else if(dice === 5) {
    console.log("5")
  } else if(dice === 6) {
    console.log("6")
  } else {
    alert("Oops, the dice fell off the table!")
  }
}

//  -CONNECTING HTML to Javascript
//  We need to add some things to our html page so that our javascript file and html files are connected and working properly.
//  Setup script tag with src and type attributes
{<script type="text/javascript" src="name.js"></script>}

//  Set up an alert in Javascript to show page is connected
alert("I am connected!")
//  Add onclick attribute to button
{<button onclick="functionName()">Roll the Dice</button>}
//  Check button is calling alert

//  Add id to tags
{<h2 id="output"></h2>}

//  ADD DISPLAY TO JAVASCRIPT


// Refactor means making modifications to the code


const rollDice = () => {
  var dice = Math.ceil(Math.random() * 6)
  if(dice === 1) {
    document.getElementById("dice").innerHTML = dice
    alert("Game over")
  } else if(dice === 2) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 3) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 4) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 5) {
    document.getElementById("dice").innerHTML = dice
  } else if(dice === 6) {
    document.getElementById("dice").innerHTML = "You get an extra life because you rolled a six!"
  } else {
    alert("Ooops, the dice fell off the table!")
  }
}

rollDice()




// STRETCH
//  Let's track the amount of rolls the user makes

var rolls = 0
const rollDice = () => {
  var dice = Math.ceil(Math.random() * 6)
  if(dice === 1) {
    document.getElementById("rolls").innerHTML = rolls
    document.getElementById("dice").innerHTML = dice
    alert("You lost your points!  Start over")
    rolls = 0
  } else if(dice === 2) {
    rolls ++
    document.getElementById("dice").innerHTML = dice
    document.getElementById("rolls").innerHTML = rolls
  } else if(dice === 3) {
    rolls ++
    document.getElementById("dice").innerHTML = dice
    document.getElementById("rolls").innerHTML = rolls
  } else if(dice === 4) {
    rolls ++
    document.getElementById("dice").innerHTML = dice
    document.getElementById("rolls").innerHTML = rolls
  } else if(dice === 5) {
    rolls ++
    document.getElementById("dice").innerHTML = dice
    document.getElementById("rolls").innerHTML = rolls
  } else if(dice === 6) {
    rolls ++
    document.getElementById("dice").innerHTML = dice
    document.getElementById("rolls").innerHTML = rolls
  } else {
    alert("Ooops, the dice fell off the table. Please try again")
  }
}

rollDice()




// -"Pig" Dice Game
// Even though the directions make this game sound easy, unless you are good at throwing 1s, this game may be hard for to play. The game is called "Pig" because the first player "hogs" the dice in an effort to win the game.

// Object of the game: To score 100 points or more

// Have the players throw the die to determine order of play. The lowest roll goes first.
// The first player rolls the die and adds up the numbers after each roll. They may stop rolling at any time and end the turn
// The player loses all points for the turn when a 1 is rolled.
// If the first player gets to 100 points on their first turn, the other player(s) may take their turn to try to achieve a better score.

// -Pig

// - Roll Dice
// - Add number after each roll to current score
// - You lose all points if you roll 1

