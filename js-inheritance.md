# JS Inheritance Lecture Notes

### Overview
- Inheritance is one of the pillars of object-oriented programming
- Inheritance helps solve the problem of redundancy in creating code

### Process
- Ensure you are in the cohort-lecture-examples repo
- Ensure your local is up to date and there are no stale branches
- Create a new branch $ git checkout -b javascript-class-inheritance
- Create a JavaScript file with the naming convention `javascript-class-inheritance.js`
- Run the file with `node`

### Additional Notes and Goals
- Revisiting the concept of classes, constructor, this, methods

### Major Takeaways
- Parent Class
- Child Class
- extends
- `super` is the method that calls the constructor of the parent class


    - As developers, we try to avoid repeating ourselves.  We even have an acronymn for it calld DRY (don't repeat yourself)


### Lecture
- Inheritance is one of the pillars of object-oriented programming
- Inheritance helps solve the problem of redundancy in creating code
- Object oriented programming is a very common programming concept that is much more difficult to learn initially which is why we spend so much time teaching this.

- Objects are a data structure that help us organize information and behavior. A class helps us to make multiple instances of objects with specific properties. Classes are like a template to built a bunch of different objects.

- While classes are great for making reusable objects they can become redundant if we have multiple classes with the same properties. Inheritance is a way of creating relationships between classes to create more reusable data.

- Just as a child will inherit specific properties in their genetic makeup, classes also allow a parent class to pass properties down to a child or rather, the child inherits these properties from the parent.
 
- A class relationship is defined as parent-child.

- It is best to have the parent class be more generic and the child class more specific.

#### Keywords for Inheritance
- A child class `extends` a parent class

- `super` calls the constructor in the parent class or initializes the properties in the parent class to the child class

- A new instance of the child class will have access to the property of the parent class

- super must be called in a child class or it will throw a reference error


Let's start with our parent class as an example.
I want to create a parent class of animal.

```javascript
class Animal {
  constructor(animalName) {
    this.name = animalName
  }
}
```

I also want to set up another class of Dog that has the same properties as the Animal class, but I don't want to repeat my code and I want some unique properties to the Dog class that is more specific to Dogs than Animals.  I can make my Dog class inherit from the Animal class all of it's properties by using the keyword extends

```javascript
class Dog extends Animal {
  constructor(animalNameInChild) {
    //   - `super` calls the constructor in the parent class or initializes the properties in the parent class to the child class
    super(animalNameInChild)
    this.playsFetch = true
  }
}

let bruno = new Dog("Yellow Lab")

console.log(bruno)
// Output: Dog { name: "Yellow Lab", playsFetch: true }
```

#### Passing Methods
Methods can also be passed down from parent to child.

```javascript
class Animal {
  constructor(animalName) {
    this.name = animalName
    this.sleeping = false
  }
  sleep() {
      this.sleeping = true
  }
}

class Dog extends Animal {
  constructor(animalNameInChild) {
    super(animalNameInChild)
    this.playsFetch = true
  }
}

let bruno = new Dog("Yellow Lab")

console.log(bruno)
// Output: Dog { name: "Yellow Lab", sleeping: false, playsFetch: true }

bruno.sleep()
console.log(bruno)
// Output: Dog { name: "Yellow Lab", sleeping: true, playsFetch: true }
```

#### Methods in Child Classes
A child class can inherit methods from the parent class as well as have methods of their own.

```javascript
class Animal {
  constructor(animalName) {
    this.name = animalName
    this.sleeping = false
  }
  isSleeping() {
      this.sleeping = true
  }
}

class Dog extends Animal {
  constructor(animalNameInChild) {
    super(animalNameInChild)
    this.playsFetch = true
    this.barks = 0
  }
    bark(number) {
        this.barks = number
  }
}

let bruno = new Dog("yellow lab")
console.log(bruno)
// Output: Dog { name: "yellow lab", sleeping: false, playsFetch: true, barks: 0 }
bruno.bark(10)
console.log(bruno)
// Output: Dog { name: "yellow lab", sleeping: false, playsFetch: true, barks: 10 }
```


#### Multiple Child Classes
The power of inheritance is the ability pass the information from a parent class to many child classes.
- Both child classes inherit the data and behavior from their parent class
- Both child classes have unique data from their own class

```javascript
class Animal {
  constructor(animalName) {
    this.name = animalName
    this.sleeping = false
  }
  isSleeping() {
      this.sleeping = true
  }
}

class Dog extends Animal {
  constructor(animalNameInChild) {
    super(animalNameInChild)
    this.playsFetch = true
    this.barks = 0
  }
}

let bruno = new Dog("Yellow Lab")
console.log(bruno)

class Bird extends Animal {
  constructor(animalNameInChild) {
    super(animalNameInChild)
    this.hasWings = true
    this.flying = false
  }
  fly() {
      this.flying = true
  }
}

let donald = new Bird("duck")
console.log(donald)
// Output: Bird { name: "duck", sleeping: false, hasWings: true, flying: false }

donald.isSleeping()
donald.fly()
console.log(donald)
// Output: Tree { name: "duck", sleeping: true, hasWings: true, flying: true }
```


### Review
- Creating relationships in classes helps reduce duplicate code
- Parent classes are more general and child classes are more specific
- A child class extends the parent class
- Calling super in the child class will call the constructor(which is initializing the object) in the parent class

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `javascript-foundations-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room
---
[Back to Syllabus](../README.md#unit-one-javascript-foundations)