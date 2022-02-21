// Functions, Loops, and Arrays

// Up to this point we have used functions to perform if else logic, but we want to be able to create more complex functions.  So today we are going to discuss tying together functions, loops and arrays to allow complex, reusable, and dynamic code.

// We are going to start with an array of numbers and then multiply each number in the array by 5.
// EX:
// Multiply each number in an array of numbers by 5.
var myArrayOfNums = [2, 3, 4, 5, 6]

// When you are faced with a problem that states "I need to do something to each item" or make a decision about each item, think iteration.
// ITERATION is the process of performing an action over and over until a condition is met.  
// With my variable, I want to be able to perform an action on each number in the array.  However I don't want to limit this logic to only this array, instead I want to also be able to utilize this logic for any other array that contains numbers.  Doing this makes my code reusable and generic.  

// const mult5 = () => {

// }

// When setting up the array, I will want to accept an array as a parameter.  To keep this reusable and generic though, I can pass a placeholder for the array.  To be clear and descriptive, I am using the word array as my placeholder so I know what data type I am working with

// const mult5 = (array) => {

// }

// If I want to multiply all the numbers by 5, can I just do this?

// const mult5 = (array) => {
// 	return array * 5
// }

// console.log(mult5(myArrayOfNums))
// Output: NaN
// No, because arrays can't be multiplied, only numbers can.  So this means we need to get into the array and gain access to each individual number, or iterate over each number.  Since we are using iteration, for loop seems like a good choice

// Let's set up this for loop by first finding where we want to start, where we need to end our iteration and how we will increment.

// While for loops don't inately connect with arrays, we can match up our for loop to our index so the index is iterated much like we did last week.  If we have the index of the element in the array, we also have the ability to extract the value.  So let's just console log our index or i for this for loop:
const mult5 = (array) => {
  for(let i=0; i<array.length; i++){
    console.log(i)
  }
}
console.log(mult5(myArrayOfNums))
// Output:
// 0
// 1
// 2
// 3
// 4
// undefined

// We get back undefined on the last line because we are not returning anything from the function, only console logging values as we iterate.  We can see that our iteration is logging a start value of 0 and taking us through the length of the array.
// By using the word array as our placeholder, we are not hardcoding a specific array, so we can also run this same function on another array:
console.log(mult5([3, 4, 5]))
// We are still getting undefined because we are still not returning something from the function, but our console log now only shows 3 iterations.


// Now that we have a series of index, lets use those to get the values of the array.  How do we access a value at a particular index in an array?
// array[0]
// But since we want this to be in parallel with our for loop we can have i be our index value.
// array[i] will give us the value of each iteration

const mult5 = (array) => {
  for(let i=0; i<array.length; i++){
    console.log(array[i])
  }
}
console.log(mult5(myArrayOfNums))
// Output:
// 2
// 3
// 4
// 5
// 6
// undefined

// Now that we know we are accessing each value of the array, we can use * 5 to multiply each value by 5

const mult5 = (array) => {
  for(let i=0; i<array.length; i++){
    console.log(array[i] * 5)
  }
}
console.log(mult5(myArrayOfNums))
// Output: 
// 10
// 15
// 20
// 25
// 30
// undefined

// To make this so we are not getting undefined from our function, we will do a little refactor so that we return our value multiplied by 5:

const mult5 = (array) => {
  for(let i=0; i<array.length; i++){
    return array[i] * 5
  }
}
console.log(mult5(myArrayOfNums))
// --> 10

// So we got back a value that is not undefined, but we only have one value and we wanted to return each number multiplied.  Return is the output of the function, however once the function returns something, it's work is finished and it will not continue.  

// We can't return in the loop since that will end our iteration, so we need to store these values somewhere and return that once we have finished our for loop.

// We will create a variable, however we just want this to be a place to store things that have not been given value just yet, so we will set it to be an empty array, since we want to return an array with our modified values.

const mult5 = (array) => {
  let newArray = []
  for(let i=0; i<array.length; i++){
    array[i] * 5
  }
  return newArray
}
console.log(mult5(myArrayOfNums))
// Output: []

// Cool, so we returned an array this time, but it's still empty.  We will need to add the modified value to the empty array.  Is there a built in method we can use to do this?
// Let's use push
const mult5 = (array) => {
  let newArray = []
  for(let i=0; i<array.length; i++){
    newArray.push(array[i] * 5)
  }
  return newArray
}
console.log(mult5(myArrayOfNums))
// Output: [ 10, 15, 20, 25, 30 ]

//There we go!  We were able to take in an array, manipulate it, and return a new array.  We can continue using this dynamicallt as well by passing a different array:
console.log(mult5([30, 40, 50]))
// Output: [150, 200, 250]



// Let's try another example.  In this case, let's break this problem down using psuedocode:

// Start with input and output
	// What happens on either side of our function
	// What will I put in, what data type?
	// What do I want from it?

// Create a function that takes a set of data and adds each item to a sentance

var coffees = ["black coffee", "latte", "mocha", "cappaccino"]
var teas = ["chai", "earl gray", "green", "herbal"]

// input: array, array of strings
// output: set of strings as an output, specifically an array with each sentance in a string

// create a function that takes in an array
// access each item in the array
// modify the string of each item
// return a new array

// By taking an arguement and specifying a placeholder to access inside our function, we make this dynamic and we can use it for multiple different variables with arrays (keep it generic without specifying the variable, just descriptive to the data type)

const coffeeOrder = (array) => {
	let orders = [] // ----> ADD THIS AFTER PROMPT!
// to do something to each item in the array, we will use iteration
// Since we want to iterate, a for loop should do the trick
// we will be referencing the array variable when checking length

	for (let i = 0; i < array.length; i++) {

		// PROMPT!  --- we need to collect the values of the iteration and keep in mind the output.  As a result, we will create another array inside the for loop to store the values

		// I will then push my string interpolation into the orders and later return specifically just the variable
		orders.push(`I would like a ${array[i]}.`)
	}
	return orders
}

// will console log my function but will pass the variable name into the function
console.log(coffeeOrder(coffees))
// Output: [
//   'I would like a black coffee.',
//   'I would like a latte.',
//   'I would like a mocha.',
//   'I would like a cappaccino.'
// ]
console.log(coffeeOrder(teas))
// Output: [
//   'I would like a chai.',
//   'I would like a earl gray.',
//   'I would like a green.',
//   'I would like a herbal.'
// ]


// The big picture takeaway is learning the process of manipulating data.  Taking a data set, manipulating it and returning a result in a controlled and expected way.  Can you rearrange the input to get the desired output