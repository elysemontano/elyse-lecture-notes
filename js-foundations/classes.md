# Lecture Notes
Objects are a way to store collections of data and methods. Objects are a really common data structure in all of development. The problem with how we created objects is that all the values are hard-coded.
- Hard-coded values vs dynamic values

We need a way to be able to make objects reusable. To make objects dynamic. So enter classes.

Classes are a blueprint for an object.  

** Demonstrate Book example**

#### Class Anatomy
- Class declaration - just like functions and variables, classes have a declaration using the word `class` which is a protected word in JavaScript
- Class name - naming syntax for classes uses a casing convention called PascalCase
- Curly braces to define the scope of the class

```javascript
class Book {
}
```

#### Static Data
Just like an object, a class can have both static information or data in the form of JavaScript data types and methods or behavior. So let's start with the data.
- Need to establish variables that belong to the class
- The `constructor()` method is a built in JavaScript method that is used to instantiate class variables, it "constructs" the values for the class - first method declared in class


```javascript
class Book {
  constructor() {

  }
}
```

- We can create special variables that belong to the object we are making within this class.  We need to use our friend `this` to refer to the special variable in an object

```javascript
class Book {
  constructor() {
    this.author = "Gayle Mcdowell",
    this.title = "Cracking the Coding Interview",
    this.pages = 696
  }
}
```

#### Methods
We can also add in some behavior versus the static data that we have been working with so far.
```javascript
class Book {
  constructor() {
    this.author = "Gayle Mcdowell",
    this.title = "Cracking the Coding Interview",
    this.pages = 696
  }
  showBook() {
    return `I am reading ${this.title} by ${this.author} which is ${this.pages} pages long`
  }
}
```

#### Instantiating a Class
AKA creating an object. Just like a function, the class is not doing anything at all right now. It is just describing the idea of variables that contain information and a method that displays some information about my book. To make the class useful it must be instantiated, meaning that we need to use the class to create an object.
- JavaScript keyword `new` instantiates a class, another way of saying this is it creates an object from the template of the class

```javascript
console.log(new Book)
```

- The log will display an object with key:values pairs
- This can be saved into a variable

```javascript
const myBook = new Book
console.log(myBook)
```

#### Accessing Data and Methods
Now that we have a variable containing an object we can use dot notation and access the data and the methods.

```javascript
console.log(myBook.author)
console.log(myBook.showBook())
```

#### Making Multiple Classes
This same class can be instantiated as many times as we want, creating as many objects as we want.

```javascript
const book1 = new Book
console.log(book1)

const book2 = new Book
console.log(book2)
```

#### Making the Class Dynamic
We talked about the power of having dynamic values vs hard-coded values. Right now every object we make is exactly identical.  This is great if I am the distribution plant for that one book, but what if I am the publisher for all of the Harry Potter books?  I need a way to have a more flexible blue print so I can say who the author is, the title and how many pages it will have.  Each book will still have all of these same attributes or keys, but the values will vary depending on which book I am working with.

To create dynamic values for my book, we can remove the hard-coded values and have our constructor take these values as parameters.

- The keyword `new` calls the constructor method
- If the constructor method has parameters, that means we need to pass it arguments of actual data
- Now every object can have different values for the number variables

```javascript
class Book {
  constructor(author, title, pages) {
    this.author = author,
    this.title = title,
    this.pages = pages
  }
  showBook() {
    return `I am reading ${this.title} by ${this.author} which is ${this.pages} pages long`
  }
}

const book1 = new Book("J.K Rowling", "HP and the Socerer's Stone", 336)
console.log(book1)
console.log(book1.showBook())

const book2 = new Book("J.R.R. Tolkien", "LOTR Fellowship of the Ring", 479)
console.log(book2)
console.log(book2.showBook())
```

#### Mix and Match
Sometimes you will want a mix of hard-coded data and dynamic data.
- Parameters just have to match the name that is assigned to the variable
- It is convention for the class variable names and the parameters to be the same

```javascript
class Book {
  constructor(title, pages) {
    this.author = author,
    this.title = title,
    this.pages = pages
    this.currentPage = 1
  }
  showBook() {
    return `I am reading ${this.title} by ${this.author} which is ${this.pages} pages long`
  }
}

const book1 = new Book("J.K Rowling", "HP and the Socerer's Stone", 336)
console.log(book1)
console.log(book1.showBook())
```

#### Adding Another Method
Can add as many methods as needed.
- Create a method that returns the largest number.
- Google "javascript method largest number" (or equivalent) and use MDN Math.max documentation to model the logic in the method

```javascript
class Book {
  constructor(title, pages) {
    this.author = author,
    this.title = title,
    this.pages = pages
    this.currentPage = 1
  }
  showBook() {
    return `I am reading ${this.title} by ${this.author} which is ${this.pages} pages long`
  }
  readPages(pagesRead) {
    // return this.currentPage = this.currentPage + pagesRead
    return this.currentPage += pagesRead
  }
}

const book1 = new Book("J.K Rowling", "HP and the Socerer's Stone", 336)
console.log(book1)
console.log(book1.showBook())
console.log(book1.readPage(9))
console.log(book1.readPage(20))
```

### Review
- What is a class?
- What is the naming convention for a class?
- What is the difference between hard-coded and dynamic values?
- What does the keyword `new` do?
- What is the constructor?
- What is the difference between an object and a class?
- What is the difference between a function and a method?
- What does it mean to instantiate a class?
- What is an instance of a class?

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `javascript-foundations-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room

---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)