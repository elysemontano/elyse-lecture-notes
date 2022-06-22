# Javascript Higher Order Functions

## Process
  Ensure you are in the cohort-lecture-examples repo
  Ensure your local is up to date and there are no stale branches
  Create a new branch
  Create a JavaScript file with the naming convention language-topic.js
  Run the file with node

# Lecture

What is a built in method?  Premade functions made by javascript developers that are easily invokable.  Some take more info, some don't

Syntatical sugar - A piece of code created to make a language sweeter.  Developers love these because they make it easier for us to write our code.

## Higher Order Functions

Iteration - process of performing an action a certain number of times or until conditional is met

Last week we talked about loops, and the main purpose behind using for loops is being able to iterate over things.  Today though, we are going to talk about another way to iterate on arrays and that is called higher order functions.

Higher order functions is a function that takes a functin as an arguement (AKA functions within functions)

  - Higher order functions are only called on arrays
  - Replaces some for loops - uses less cpu


While there are many different higher order functions, we are going to go through three types of higher order functions that we are going to use often and those are .forEach, .map and .filter

# For Each
For each is great for if you want to do something to each element in an array

-all HOF's take anonymous functions as arguements (function that is not defined or set to a variable), this function also takes an arguement:

```javascript
[3, 4, 5, 6].forEach(() => {})
```

  The required arguement is value and the optional values are index and array.

  - value - is the current value in the iteration process (think array[i] in terms of a for loop)
  - index - is the current index in the iteration process (think i in terms of a for loop)
  - array - allows you to pass the array the higher order function was called on

Let's start my running forEach on an array

```javascript
[2, 3, 4, 5].forEach(value => {
  console.log(value)
})
```
We can access the value within array with very little work.  We also have 2 other optional arguements:

```javascript
[2, 3, 4, 5].forEach((value, index, array) => {
  console.log("value:", value)
  console.log("index:", index)
  console.log("array:", array)
})
```

The order of parameters will ALWAYS be value, index, array but they can be called anything:

```javascript
[2, 3, 4, 5].forEach((apple, banana, orange) => {
  console.log("apple:", apple)
  console.log("banana:", banana)
  console.log("orange:", orange)
})
```


## Map
Map will iterate over each element in an array and will return a new array that has the same length.

For each is similar to map in a sense, however it does not actually return anything.  There are certainly use cases for this but the important thing to note is that you will return undefined if you write it like .map

Map is great for modifying or displaying each of the values in an array


```javascript
const myArray = [3, 4, 5, 6]

const mappedArray = myArray.map(value => {
  return value * 2
})
console.log(mappedArray) // [ 6, 8, 10, 12 ]
```

  Must have the return inside the HOF, or you will get undefined.  If you see undefined, you should look if you are missing a return somewhere


We can rewrite this to be a little shorter as follows.  This is handy if you only have one line of code you need to return

```javascript
const myArray = [3, 4, 5, 6]

const mappedArray = myArray.map(value => value * 2)
console.log(mappedArray) // [ 6, 8, 10, 12 ]
```

If you have more logic you need to run in your map, you will want to use curlies:


Create a function that will take in an array of numbers and will display "even", if the number is even, and "odd" if the number is odd

```javascript
const evenOrOdd = (array) => {
  return array.map(value => {
    if(value % 2 === 0) {
      return "even"
    } else if(value % 2 !== 0) {
      return "odd"
    } else {
      return "Oops, something went wrong"
    }
  })
}

console.log(evenOrOdd(myArray)) // ["odd", "even", "odd", "even"]
```

As you can see, there are multiple layers in this block of code.  Each layer is seperated by some curly braces and has a level of indentation to help show the level we are working in within a block of code.

** Look at github to show all repos in organization
** Use search to filter repos in organization

## Filter
Sometimes we are going to want to iterate over an array and narrow down what is returned and this is where filter comes in.  Just as it sounds, filter will filter out what we don't want and only keep what we do want.

To do this, we will need to provide some kind of a condition like we did above and we will return only the things that meet that criteria

Filter has a built in if statement

Returns a subset of the array

```javascript
  let myFilteredArray = myArray.filter(value => {
    return value % 2 !== 0
  })

console.log(myFilteredArray)
```
Let's make this a reusable function:

```javascript
const onlyEvens = (array) => {
  return array.filter(value => value % 2 === 0)
}

console.log(onlyEvens(myArray)) // [4, 6]
```

As we can see, this will return a subset of the array.  


## Extra Examples

Create the code that acts on an array of mixed data and return only the given data type based on user input

```javascript
const mixedData1 = [3, "hi", true, 50, 4, null, "Delta"]
const mixedData2 = ["awesome", false, 32, 94, null, true, "string"]

// create a function
// parameter - array, dataType
// make decision about every item in the array - filter
// typeof to evaluate

const showMyData = (array, dataType) => {
  return array.filter(value => {
    return typeof value === dataType
  })
}

console.log(showMyData(mixedData1, "string"))
```

## Other Higher Order Functions
Some other higher order functions to possibly explore in your own time are sort and reduce.

<!-- Difference between .forEach and .map: -->

<!-- 
```javascript
const myArray = [3, 4, 5, 6]

const forEachArray = myArray.forEach(value => value * 2)
console.log(forEachArray) // undefined
```

We will need to console log instead if we need to see what is happening:

```javascript
const forEachArray = myArray.forEach(value => console.log(value * 2))
console.log(forEachArray)
``` -->