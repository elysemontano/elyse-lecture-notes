# Objects
A really important concept in Javascript that whenever we are working with information, it has to be a data type that Javascript understands. Initially we explored Primitive data types

Primitive:
- String
- Number
- Undefined
- Null
- Symbol
- Boolean

Then we talked about arrays, which is a collection of data types.  This collection of data types according to Javascript evaluates to something known as an object.

We can verify this by using the typeof operator on an array

```javascript
typeof [1, 5, true] // object
```

Object - data type that is a collection of things:
  - Arrays - [1, 2, 3] values can be located by index
  - Objects - Another way to store a collection of data, but instead of using an index for a location, we match up a name {key: value}
    - Stored inside of curly braces
    - Key value pairs

```javascript
h1 {
  color: "purple"
}
```

I am going to create a variable that will hold an object so we can play around with it a bit.

```javascript
let myObject = {key1: "value1", key2: "value2", key3: "value3"}
console.log(myObject)
```

Symbol data type - unique identifier, often used as keys in objects
  Essentially acts as a little variable inside of an object
  The key holds the value
  Value is any valid javascript datatype

For better readibility as the object gets larger you can drop each key value pair onto a new line

```javascript
let myObject = {
  key1: "value1", 
  key2: "value2", 
  key3: "value3",
  key4: 7,
  key5: true
}
console.log(myObject)
```

Oftentimes we will want to be able to access specific information from within the set.  So if I want a specific value from this set, I can use my key to reference it using dot notation.

```javascript
console.log(myObject.key2) // "value2"
console.log(myObject.key4) // 7
```


# Nested Objects
```javascript
let breakfast = {
  item1: "cereal",
  item2: "muffin",
  item3: "oatmeal",
  item4: {
    beverage1: "coffee",
    beverage2: "chai tea",
    beverage3: "orange juice",
    beverage4: {
      smoothie1: "berries",
      smoothie2: "greens",
      smoothie3: "herbal"
    }
  }
}
```

As we can see here, we set the value to our first few keys to be strings, but then we started nesting our object and so we have an object assigned to our item4 key, and nested even further with beverage4.  Because objects are so good at helping us organize large amounts of data, this is actually a very common situation that you will run into.

Just like before, we can log the entire object, or get a specific value from within the object.

```javascript
console.log(breakfast)
console.log(breakfast.item1) // cereal
console.log(breakfast.item4) // gives me the entire object
console.log(breakfast.smoothie1) // undefined
```

I can't call on smoothie because breakfast is only aware of items 1-4, but we skipped a layer.
To access smoothie1, I need to enter the layer that smoothe lives on.

```javascript
console.log(breakfast.item4.beverage4.smoothie1) // "berries
console.log(breakfast.item4.beverage3)
```

If I want to get back all of my smoothies, I can console log that pathway for each one.

```javascript
console.log(breakfast.item4.beverage4.smoothie1)
console.log(breakfast.item4.beverage4.smoothie2)
console.log(breakfast.item4.beverage4.smoothie3)
```

# Object Destructuring
This is great an everything, but what if I had 50 smoothies that I want to display.  The pathway I am taking to all of my smoothies is kind of long, and will become super repetitive after a while.  We can create a shortcut that will get us to smoothie without having to type the super long pathway over and over again.  And this tool for the shortcut is called destructuring.

Essentially, destructuring is defining a pathway.  So I can use the key of the specific smoothie as a special type of variable where I can define the pathway to it.

Destructuring - creating a defined pathway through a nested object

```javascript
let { smoothie1 } = breakfast.item4.beverage4
console.log(smoothie1) // berries
console.log(smoothie1) // berries
console.log(smoothie1) // berries
console.log(smoothie1) // berries
```

Doing this makes it so I can reuse smoothie1 as many times as needed and don't need to write out that long pathway.

However, if I call on smoothie3, I will get an error.  But since all of my smoothies have the same pathway, I can add to my variable the smoothies I wish to access in that pathway.

```javascript
let { smoothie1, smoothie3 } = breakfast.item4.beverage4
console.log(smoothie1) // berries
console.log(smoothie3) // herbal
```


# Methods
Methods are functions or behavior that belongs to an object.

```javascript
let numbers = {
  num1: 5,
  num2: 10,
  num3: 15
}

// I can access a specific value like before
console.log(numbers.num2)
```

So far, we have only created static data, but I want to add some behavior to this object.  The action that I want this method to do is to add all of my numbers up and give me an output.   To do this, I am going to add another key, but instead of the value being a data type recognized by javascript, it's going to be a behavior recognized by javascript.

Because my behavior will be adding the numbers inside my numbers variable, but I will already be within the numbers object while doing this, I am kind of in a weird inception situation.  How do I call on numbers while I am in numbers?  There is a keyword called "this" which refers to the object you are currently inside.  

this - referencing the object name when you are inside the object
objects can have static data (any data type) and behavior

```javascript
let numbers = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function() {
    return this.num1 + this.num2 + this.num3
  }
}

console.log(numbers.addUp()) // 30
```

To make the function execute, you have to add parenthesis, otherwise javascript will just recognize that there is a function at this key.