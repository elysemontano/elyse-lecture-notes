# Ruby Intro

## Setup
- Checkout branch
- Create a ruby file ruby-intro.rb (talk about ruby files)
- Talk briefly about commenting out in Ruby

## Ruby
Ruby is a dynamic, interpreted, open-source, object-oriented scripting language.  Ruby was released in 1995 by a computer scientist named Yukihiro Matsumoto, but in the Ruby community is commonly known as Matz.  He is a very benevolent and respected leader in the Ruby world and has a very pleasand and kind demeanor so much so that there is a saying in the Ruby community "Matz is nice and so we are nice" or MINASWAN.

Matz looked at all the pros and cons of popular programming languges at the time and realized that alot of programming langueges were all based around the needs and focus was on the computer, which he thought was silly because a computer doesn't care about the languages, but humans are the ones who are doing all of the work and they are the ones that are putting all the effort and emotion into creating the code.  So he set out with the idea to create a programming lanugage that focused on the needs of the human programmer instead of the computer.  Because he put the programmer happiness first and foremost over the computer, Ruby is known as a very human friendly launguage.

## Vocab
Now that we have some of the history, let's talk about some of the vocab.

### Dynamic
I mentioned that Ruby is dynamic, which means that Ruby just like Javascript is dynamically typed.  A dynamically typed programming language means that when you create a variable, you can give it whatever data type you want and then later on if you want to change that variables data type, you can. 

In contrast, if a language is not dynamic, it is known as statically typed where when you set a variable to a data type like a string, that is the only thing that it can hold.

But out of the box, Ruby is a dynamically typed language

### Interpreted
I also mentioned that Ruby is an interpreted language, which means that your code is read line by line and interpreted throu a translator that then takes your code and processes it down into a machine code that can then be read by the computer.  Simply put, it is read line by line through an interpreter.

The opposite of an interpreted language would be one that is compiled.  In this case, you would take your entire program and as a whole compile it down and then pass it into machine code.


### Open-Source
Ruby is also open-source, which means that the entire source code for Ruby is online for free so that anybody can take it and modify it.  This is really cool, because as developers, you can go and contribute to the Ruby source code if there is a feature that you would like to see implemented or if you want to help someone else implment a feature.  To do this, you would follow the same process we do in class and open up a pull request.


### Scripting Language
Ruby is also a scripting language just like Javascript, which means that we are executing logical operations.  Just like Javascript, Ruby doesn't inherently have a user interface, so out of the box there is no markup or styling attached to Ruby.  It just simply makes evaluations and executes logical operations.

### Object Oriented Programming
Lastly, Ruby is an object oriented language which you will often see it shortened to OOP.  Ruby is very object oriented, meaning that everything you interact with in Ruby is an object.  Another way of saying that is that everything is an instance of a class.

The class describes the blueprint of what we want to build, the object is the actual thing we interact with.

This idea of object oriented programming became very popular in the 90s. One of the reasons OOP became so popular is that it truly mimics the way we think about and reason about the world around us. 

This idea of thinking about the world in terms of classes and objects actually dates back to the ancient Greek philosophers. Plato's theory of forms actually describes the fundamentals of OOP.

Plato says that forms are representations or templates of an actual thing. The form is the ideal, the perfect version of a thing. Then there is the actual thing. The thing in the physical world. So we can think about the form of a triangle. A triangle can be described by mathematics to have three straight lines that intersect to create three angles that add up to 180 degrees. We can all generally agree on the idea of a triangle.

I could draw a triangle and we would probably all understand that I am drawing a triangle. And it would not be as perfect as the form, since my lines are not straight and that will make the angles slightly incorrect, but we can all still agree that this is a triangle. There is the form, the ideal of the triangle and then there is the actual implementation of the form, which is my drawing. And that is how our brains work. We have an idea of a thing and that allows us to recognize all the various interpretations of that thing that we see in the world. It helps us build categories so that we can process information more quickly. I have in my brain the form of a dog. So that form allows me to recognize all the different types of dogs I see. And even little kids will understand all these different sizes, colors, breeds, with different faces, and tails, and ears, all of those things are dogs. Because we understand the form of a dog.

So in object-oriented programming, everything is an object. And objects are instances of classes. So the class is the ideal or form. Then the object is the implementation of the form. Object is the actual thing.


## Ruby Code
There are two ways to execute Ruby code. You can run Ruby in the terminal or from a file. We are going to look at both.

Let's start in the terminal.

All Macs come with Ruby. You don't have to add anything to begin coding with Ruby on a Mac.

There is something called a Ruby version manager on all of your computers so that we can control which version of Ruby we are running at any given time but Ruby was already there.

So to see the current version of Ruby that is running on your computer, we can check that by doing $ ruby -v

The current version of Ruby is 3.2.1. The official 3.2 release just happened on Christmas day. Matz tends to give the community big point releases as Christmas presents. Most of us will be running Ruby version 3.0.0. This is a great place to be. You'll notice that we are only on version 3 of Ruby even though Ruby has been around for well over 20 years. That is because the Ruby community is very thoughtful about their releases.

In the terminal we can run Ruby code. This is very similar to running JavaScript code in the Chrome browser. It doesn't save as a file but it is a place to play around with Ruby code. To get into this space, type `irb` in the terminal. It doesn't matter where you are in the file tree, `irb` will drop into a Ruby console. IRB stands for Interactive Ruby.

You will notice the file path is gone, replaced with a note about the version of Ruby we are running. You cannot access your files from here. This is only a place to run Ruby code in a sandbox environment. This type of environment is called a REPL which is an acronym for read–evaluate–print-loop, also called a language shell. It is an interactive environment that takes single user inputs, executes them, and returns the result to the user. I am going to code in here just for this first little bit then, I will switch over to a file.

irb is how you get into this environment and exit will get you back out.

Control+l - clears irb

## Ruby Data Types

### Integers
- In Ruby numbers are referred to as integers
- With Integers we can perform mathematical operations that should feel pretty familiar
- Add, subtract, multiply, divide, exponents, modulo

### Floats
- In Ruby, a float is actually a separate data type or a separate class since everything is Ruby is a class
- So if you want a float you must introduce a float to your program
- Divide by a float
4 / 3    
7.0 / 2

Divide by zero
4 / 0
4.0 / 0

### String
Strings - the Ruby style guide says to use single quotes around stings with the exception of needing to pass punctuation

'hello!'
"Hey y'all"

- It always takes me a little bit to remember to change the quotes syntax as I move into Ruby, so let's help each other out if we see the wrong quotes

### Boolean
True
False

#### Relational operators 
7 < 9
7 > 9
5.0 <= 5
6 >= 9

#### Equality operators
So there are a lot of similarities between Ruby and JavaScript, but, a big difference is that Ruby does not support type coercion. So you won't see as much of the really aggressive evaluation of everything as either truthy and falsey values that we saw in JavaScript.

== note there is only two equal signs, that is because Ruby doesn't have type coercion so there is no need to distinguish between a strict and a loose equality
3 == 3 true
3 == '3' false

#### Negation
5 != 8


### Logical operators
'hi' == 'hi' && 6 > 4
'hi' == 'hi' || 6 <= 4

Nil is the Ruby version of null
Symbol - is the unique key to a value which, just like JavaScript, we will talk more about in the future
Undefined


### Data Types have Classes
As I mentioned earlier, Ruby is very object oriented.  All of the data types we just talked about are actually part of their very own class.  So we have a class of integer and then the object we interact with are the integers or whole numbers.


### Variables
Variables - variable don't require a declaration, so there is no var, let or const in Ruby, you just make a variable and assign it with a single equal sign

The casing convention for Ruby is snake_case.

my_name = 'Elyse'

I can reassign the variable as well, and like we talked about earlier with Ruby being dynamically typed, we can change it to any data type

my_name = 7


### String interpolation 
Ruby uses double quotes and a # symbol, and this is why we need to be using single quotes in Ruby. Because double quotes means something specific.
"Hey there, #{my_name}!"

### Built In Methods
Earlier I talked a bit how Matz created Ruby because he saw that many of the popular languages were not very human friendly, and one of the ways that Ruby stands out in it's human focused approach is the ridiculous amount of built-in methods available.  This can sometimes be a little bit of an overload on how many built-in methods are available, but on the flip side, there is a built-in method for just about everything...and they are always convieniently and appropriately named!

Since everything in Ruby is an object, all methods are chained to the expression using dot notation.

Let's look a few examples of methods we can call on the class String. If there is no argument to be passed we don't need parentheses after the method name.

```ruby
'Hey cohort!'.length 
my_name.length
my_name.upcase # ELYSE
my_name.capitalize # Elyse
my_name.reverse # esylE
```

One thing that is really cool about Ruby, is that Ruby is less concerned about having methods be really specific to the data type within reason.  So of course, I can't go in and up case a number because that doesn't make sense, but something that does make sense and Ruby allows is running a method like reverse can be done on a string or an array, versus Javascript where you can ONLY run it on an array and have to first turn the string into an array to be able to modify it with that method.  Not with Ruby. Ruby says, if it makes sense to run that method, let's do it in most cases.


Some method will take arguments, just like in JavaScript.
In Ruby, you often don't need parentheses.

```ruby
my_name.delete'y'
```
Technically this works, but it is very clunky to read.
So it is a better practice to use parentheses
```ruby
my_name.delete('y')
```


Some Ruby methods can take a ? as an argument and they will return a Boolean value.

my_name.include?('s')
- include is a string method, so it must take an argument of a string
my_name.include?('e' && 's')
my_name.include?('E' && 's')


Checking the type of a data type
3.class
4.0.class
my_name.class

Modifying the datatype
4.to_s
'9'.to_i

Ruby doesn't permanently modify if saved as a variable, but you can reassign the variable
num = 4
num.to_s
num is still the same as the original variable
num = num.to_s

Almost all methods in Ruby are not permanent, they are accessors. Which is really great because usually you don't want to mutate your original piece of data.  However, Ruby does have a way to allow you to turn most built-in methods into a mutator, and that is just by adding the bang operator to the end of it.  I like to think of it as you are shouting at the built in method to really mean it.

my_name.upcase!

Just like in JavaScript there are a lots and lots of methods in Ruby. Ruby is meant to read much more like English than other programming languages.


### Arrays
my_nums = [2, 3, 4, 5, 6, 7]
my_nums.length
my_nums[4]
my_nums
my_nums[-1]
my_nums.first
my_nums.last
my_nums.reverse

Nothing is permanently changed.
my_nums

And can be chained together.  The chain will execute in order, so be mindful of the order you set this up, because it can matter.
my_nums.reverse.first


To make the methods mutators add the bang!
does not work with chained methods  ---  my_nums.reverse.last!
my_nums.reverse!
my_nums

Mutators
To permanently change the array reassign a value
my_nums[4] = 9

Shovel operator - mutator that acts like push
my_nums << 99


## Running Ruby File
So we saw how to code in the Ruby console. Next we want to see how to make a Ruby file and run it in the terminal. First we need to create a file with the extension .rb

Now that we have a file, we need to look at how to run the file and see the output in the terminal. There are three ways to create output in the terminal for the code. Each has its use case.

puts - short for 'put string' so it displays the content as a stringified version of your output

```ruby
puts 'hello'
puts 'hi'
```

So puts is really good for creating nice output in the terminal that doesn't have all the code syntax. However, sometimes we do want to be able to see just the raw data of the code we are creating, so to do that we will just use the letter p.  p shows a more raw version of the output, good for debugging and for lazy people who only want to type a single character

p 'hello'
p 'hi' 