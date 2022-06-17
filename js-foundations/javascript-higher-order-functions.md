# Javascript Higher Order Functions

## Process
  Ensure you are in the cohort-lecture-examples repo
  Ensure your local is up to date and there are no stale branches
  Create a new branch
  Create a JavaScript file with the naming convention language-topic.js
  Run the file with node

# Lecture

Last week we talked about loops, and the main purpose behind using for loops is being able to iterate over things.  Today though, we are going to talk about another way to iterate and that is called higher order functions.

Higher order functions is a function that takes a functin as an arguement

  - Higher order functions are only called on arrays
  - Replaces some for loops - uses less cpu


While there are many different higher order functions, we are going to go through two types of higher order functions that we are going to use often and those are .map and .filter

## Map
Let's start with .map.  Map will iterate over each element in an array and will return a new array that has the same length.

Higher order functions takes at least one arguement, but has other optional arguements avaialable as well.  The required arguement is value and the optional values are index and array.

  - value - is the current value in the iteration process (think array[i] in terms of a for loop)
  - index - is the current index in the iteration process (think i in terms of a for loop)
  - array - allows you to pass the array the higher order function was called on


Map is great for modifying or displaying each of the values in an array

```javascript
const myArray = [3, 4, 5, 6]

const mappedArray = myArray.map(value => value * 2)
console.log(mappedArray) // [ 6, 8, 10, 12 ]
```

There are other ways to write this out that is a little longer, but is handy if you have multiple things you need to do inside the higher order function (aka, you are not returning on the same line)

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

## Filter
Sometimes we are going to want to iterate over an array and narrow down what is returned and this is where filter comes in.  Just as it sounds, filter will filter out what we don't want and only keep what we do want.

To do this, we will need to provide some kind of a condition like we did above and we will return only the things that meet that criteria

Filter has a built in if statement

```javascript
const onlyEvens = (array) => {
  return array.filter(value => value % 2 === 0)
}

console.log(onlyEvens(myArray)) // [4, 6]
```

As we can see, this will return a subset of the array.  


# For Each
For each is similar to map in a sense, however it does not actually return anything.  There are certainly use cases for this but the important thing to note is that you will return undefined if you write it like .map

```javascript
const myArray = [3, 4, 5, 6]

const forEachArray = myArray.forEach(value => value * 2)
console.log(forEachArray) // undefined
```

We will need to console log instead if we need to see what is happening:

```javascript
const forEachArray = myArray.forEach(value => console.log(value * 2))
console.log(forEachArray)
```



## Other Higher Order Functions
Some other higher order functions to possibly explore in your own time are sort and reduce.