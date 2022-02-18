// Functions, Loops, and Arrays

// Instead of taking in a single item we will be taking in a set of data


// Explain Psuedocode!

// Start with input and output
	// What happens on either side of our function
	// What will I put in, what data type?
	// What do I want from it?

// Create a function that takes a set of data and add each item to a sentance

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
		// array[i] represents the value at each iteration
		// dynamic way of writing coffee[0], coffee[1], etc without hardcoding

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



var myNums = [2, 3, 4, 5, 6, 7]

// create a function that takes in an array of numbers
// return an array with all the numbers multiplied by two

// input: array [2, 3, 4, 5, 6, 7]
// output: array [4, 6, 8, 10, 12, 14]

const doubler = (array) => {
	// set a variable to an empty array
	let storageArray = []
	for(let i = 0; i < array.length; i++){
		// we need to be able to save array[i] * 2 by storing it somewhere. 
		// we will push into storageArray
		storageArray.push(array[i] * 2)
	}
	// we need to return our variable with the new stored value because that is the data we are looking for
	return storageArray
}

console.log(myNums)
// Output: [ 2, 3, 4, 5, 6, 7 ]
console.log([3, 4, 5])
// Output: [ 3, 4, 5 ]
console.log([8, 9, 10, 30, 50])
// Output: [ 8, 9, 10, 30, 50 ]


// return odd numbers
const doubler = (array) => {
	// set a variable to an empty array
	let storageArray = []
	for(let i = 0; i < array.length; i++){
		// We can also use an if statement to conditionaly store data
		if(array[i] % 2 !== 0){
			storageArray.push(array[i])
		}
	}
	return storageArray
}

console.log(myNums)
// Output: [ 2, 3, 4, 5, 6, 7 ]
console.log([3, 4, 5])
// Output: [ 3, 4, 5 ]
console.log([8, 9, 10, 30, 50])
// Output: [ 8, 9, 10, 30, 50 ]

// The big picture takeaway is learning the process of manipulating data.  Taking a data set, manipulating it and returning a result in a controlled and expected way.  Can you rearrange the input to get the desired output