# Arrays:

** RECORD LECTURE! **
** SLIDE SHOW **

    JOKE:
        Why did the programmer quit their job?  Because they didn’t get arrays!

## WHAT ARE ARRAYS?
    - Arrays are a non-primitive data type that store collections of ordered data. 
    - Arrays contain any type of information as long as it is a valid data type
    - An array consists of the elements inside of brackets [ ] called bracket notation
    - Each element has a value that is separated by a comma.  
    - Each element is also indexed to track it’s placement inside the array starting with 0.  This is called zero indexed which means the first element in the array has an index of 0, the second element in the array has an index of 1 and so on.


** Change to editor ***

 ## Process 
    - Set up environment with git 
      - $ git status
      - $ git branch
      - remove stale branches
      - $ git pull origin main
      - $ git checkout -b javascript-arrays
    - $ touch javascript-arrays.js
 
    ** Run file with node **


 ## ACCESSING SPECIFIC VALUES INSIDE ARRAY:
     While storing data in arrays is important, it is even more important that we are capable of accessing specific values within the array.  Because we have a value that has a specific index it is attached to, we can retrieve a specific value by calling on it's index

 EX: 
```javascript
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

console.log(learnStaff[0])
// Output: "Sarah"
```
    - Accesses the first value in the array by wrapping the index with a bracket to let javascript know I am accessing an index
       
```javascript
console.log(learnStaff[1])
// Output: "Chelsea"
```

    - Accesses second value in array

    If index does not exist, output is undefined


## CHANGING ELEMENTS
     You can change a value inside an array by accessing it by it's index and reassigning the value

Ex:    
```javascript 
var learnStaff = ["Sarah", "Chelsea", "Beau", "Else"]

console.log(learnStaff)
// Output: ["Sarah", "Chelsea", "Beau", "Else"]
```

      We want to change the third index because my name is spelled wrong

```javascript
learnStaff[3] = "Elyse"
console.log(learnStaff)
// Output: ["Sarah", "Chelsea", "Beau", "Elyse"]
```
      
      Access the third index and reassign it's value


## LENGTH PROPERTY
    We can tell how many elements are in an array by using the length property.  Since the array is zero-indexed, the length will always equate to the last index of the array plus one.

Ex: 
```javascript
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]
console.log(learnStaff.length)
// Output: 4
```
     - To find length we access the variable name and add .length which will return a number

** Take Break **

## BUILT-IN METHODS:
    Built in methods are pieces of functionality that the programming language has available to perform common tasks to either access or modify our data stored in the variable

    - Often times a built in method will need more information to perform it's task.  We can pass this needed information in parathesis after the method name which is an arguement.

    - There are two catagories of built in methods: Mutators and Accessors

    - MUTATORS: also known as "setter methods" will change the array in some way

    - ACCESSORS: also known as "getter methods" retrieve a portion of the data and do not modify the array


### MUTATORS:
    When using mutators, sometimes the output of the method action is not going to be the array.



#### .push(value)
     - Adds a value onto end of an array
     - Value is added by being passed as an arguement
     - Output of this method is the length of the new array

EX: 
```javascript
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

console.log(learnStaff.push("Kumba"))
// Output: 5
```
     Our output is 5 since this is the return of the method itself.

    - To get the array, we can now call on the array which was mutated with the .push built in method

```javascript
console.log(learnStaff)
// Output: ["Sarah", "Chelsea", "Beau", "Elyse", "Kumba"]
```
   
   
   
#### .pop()
     - Removes the last value in an array and returns the value that was just removed
     - Nothing needs to be passed as an argument

```javascript
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

console.log(learnStaff.pop())
// Output: "Elyse"
```

     Our output is "Elyse" since this is the value that was just removed

     - To get the array, we call on the mutated array

```javascript
console.log(learnStaff)
// Output: ["Sarah", "Chelsea", "Beau"]
```



#### .reverse()
     Reverses the array and does not take an arguement

```javascript
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

console.log(learnStaff.reverse())
// Output: ["Elyse", "Beau", "Chelsea", Sarah"]
```



#### .sort()
     Alphabetizes strings
     

```javascript
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

console.log(learnStaff.sort())
// Output: ["Beau", "Chelsea", "Elyse", "Sarah"]
```
     There are alot more mutator built in methods to explore, alot of which are in the syllabus.

<!-- ```javascript
Numbers are sorted based on additional information passed as an arguement
var numArray = [58, 93, 405, 20]
console.log(numArray.sort())
// Output: [ 20, 405, 58, 93 ]
```
  
     the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

```javascript
console.log(numArray.sort((a, b) => a - b))
// Output: [ 20, 58, 93, 405 ]
``` -->


## ACCESSORS:
    Once again accessor methods do not change the array.  To keep the output, it will need to be stored seperately as a variable


#### .indexOf(value)
       - Returns the index number of the first instance of the value.
       - Return will be -1 if the value does not exist in the array

```javascript      
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse"]

console.log(learnStaff.indexOf("Sarah"))
// Output: 0

console.log(learnStaff.indexOf("Elyse"))
// Output: 3

console.log(learnStaff.indexOf("Joe"))
// Output: -1
```


#### .slice(index)
       - Creates a subset of the array
       - Takes the arguement of the index that starts the subset and an optional arguement to end subset

```javascript
var learnStaff = ["Sarah", "Chelsea", "Beau", "Elyse", "Charlean", "Austin"]

console.log(learnStaff.slice(2))
// Output: ["Beau", "Elyse", "Charlean", "Austin"]

console.log(learnStaff.slice(2, 4))
// Output: ["Beau", "Elyse"]
```


#### .concat()
       - Merges two arrays together
       - Can also be used to add value to array without mutating

```javascript
var alphaTeam = ["Sarah", "Austin", "Charlean"]
var bravoTeam = ["Sarah", "Beau", "Elyse"]

console.log(alphaTeam.concat(bravoTeam))
// Output: ["Sarah", "Austin", "Charlean", "Sarah", "Beau", "Elyse"]
```




## Strings to Arrays and Back Again
    In JavaScript, arrays and strings have a lot of similar properties. They both are a collection of items, both have a length property, both are zero-indexed. But strings and arrays have many differences. It is often convenient to convert string into arrays and vice-versa.


### String to Array

#### .split()
      - Takes an arguement of where to split the string determining what it is at each index in the array

```javascript
var hello = "Hello Bravo class!"

console.log(hello.split())
// Output: ['Hello Bravo class!']

console.log(hello.split(""))
// Output: ['H', 'e', 'l', 'l', 'o', ' ', 'B', 'r', 'a', 'v', 'o', ' ', 'c', 'l', 'a', 's', 's', '!']

console.log(hello.split(" "))
// Output: ['Hello', 'Bravo', 'class!']
```



### Array to string


#### .join() 
        - Takes an arguement that determine what is in between each character in the string

```javascript
var hello = ["Hello", "Bravo", "class"]

console.log(hello.join(""))
// Output: "HelloBravoclass"

console.log(hello.join(" "))
// Output: "Hello Bravo class"
```


## Array Destructuring
    Destructing allows for individual assignment of array values to variables

```javascript
var [firstName, lastName] = ["Bruce", "Wayne"]

console.log(firstName)
// Output: "Bruce"
console.log(lastName)
// Output: "Wayne"
```


# Review
- What is an array?
- What is the value?
- What is the index?
- What is the difference between value and index?
- What is a built-in method?
- What is an accessor?
- What is a mutator?

# Closer

    - Go over the syllabus section and challenges
    - Announce we are using javascript-intro-challenges


# REFLECTION NOTES:
 Work in a break -- This lecture takes approx 1 hr 45 minutes with questions