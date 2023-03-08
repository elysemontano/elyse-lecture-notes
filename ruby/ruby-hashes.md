# Ruby Hashes
So far when talking about Ruby, we have discussed a few different data types.

- Boolean
- Integers
- Floats
- Nil
- String
- Undefined
- Symbol

And a data structure that we have not covered yet is something called Ruby Hashes.  In Javascript, we have this thing called key value pairs that we see in objects.  In Ruby, a custom key value pair is called a hash.  Objects still exist in Ruby since Ruby is an object oriented programming language, just a hash is a specific kind of object.

So a hash has a custom key value pair, and the key is a symbol which is that data type that we brushed over very quickly yesterday.  The value that will be associated with that symbol can be any data type recognized by Ruby.  To access the value of a hash, you can call on the key.

## Writing Hashes
There are two ways to write hashes.  The first way is to create key:value pairs in curlies.

```ruby
{ first_name: "Elyse", last_name: "Montano", title: "Lead Instructor"}
```

So we set up key value pairs, alot like how we setup objects in Javascript.

Now let's take a look at how we can access the data in here.  To start, let's assign this hash to a variable, then we can print out the variable.

```ruby
cohort = { first_name: "Elyse", last_name: "Montano", title: "Lead Instructor"}

p cohort # {:first_name=>"Elyse", :last_name=>"Montano", :title=>"Lead Instructor"}
```

So what I get back is a bit different than what I wrote, but still the same data, just different syntax.  This is showing an older syntax of Ruby hashes.  This older syntax will have the symbol or key with a colon prior to it and the value is seperated with what looks like a fat arrow, but it is known in Ruby as a hash rocket.  Both are exactly the same thing, just a different syntax.

The other way to create a Ruby hash is to write Hash.new

```ruby
people = Hash.new
p people
```

Currently this hash is showing an empty object.  Essentially, I can create a hash that I want to later add to.

## Manipulating Hashes
Generally speaking, there are four actions taht a developer would want to perform on a single piece of data.  
- The first is to return the data, or read the piece of information.  
- The second is that we want to create content or add something
- The third is to update existing content
- Last is to delete or remove existing content

These four things come together to what is known as CRUD (Create, Read, Update, Delete).  This acronym is a very important vocab to hold onto as we will be refering to this alot in the coming weeks and is foundational as a developer.

### Read
Read returns all of the data in the hash

```ruby
p cohort 
```

I can also return a specific value in the hash.  In Javascript objects, we would use dot notation to access a value, but in Ruby hashes, we need to use bracket notation and call on the symbol which will have a colon before the key name.

```ruby
p cohort[:first_name]
```

So with Read, the goal is to not make any modifications, we are only accessing information.

### Create
We already kind of talked about creating a new hash, but I am just going to move this down into this section as well.

```ruby
people = Hash.new
p people
```

### Update
We can add content in the hash

```ruby
cohort[:cohort]="Alpha"

p cohort # {:first_name=>"Elyse", :last_name=>"Montano", :title=>"Lead Instructor", :cohort=>"Alpha"}

cohort[:year]=2021
p cohort # {:first_name=>"Elyse", :last_name=>"Montano", :title=>"Lead Instructor", :cohort=>"Alpha", :year=>2021}
```

I can also use this same syntax to update content or value in the hash as well

```ruby
cohort[:title]="Instructor"
p cohort # {:first_name=>"Elyse", :last_name=>"Montano", :title=>"Instructor", :cohort=>"Alpha", :year=>2021}
```

But what if I want to update the key because I realize that my key is not doing a great job describing the data inside, I can.

```ruby
cohort[:position] = cohort.delete(:title)
p cohort # {:first_name=>"Elyse", :last_name=>"Montano", :position=>"Instructor", :cohort=>"Alpha", :year=>2021}
```

### Delete
So lastly, we can delete content

```ruby
cohort.delete(:last_name)
p cohort # {:first_name=>"Elyse", :position=>"Instructor", :cohort=>"Alpha", :year=>2021}
```

## Enumerables and Duck Typing
So the last thing I want to talk about is enumerables and duck typing.  

    - Enumerables are anything that you can iterate over

    - Duck typing has to do with this concept that Ruby has so many methods, which is why we all love it so much.  There are methods we can call on a hash to help manipulate and return information.  In Ruby this is called modules.

    - Modules are a way of grouping together things that have similar properties.  One of the main modules in Ruby is Enumerables

The enumerable module is a grouping of things that are iterable like hashes, arrays, and ranges all belong to this module called enumerables.

So this is worth noting, because in Javascript, all built-in methods had to be called on a particular data type.  For instance, map can only work on arrays, toUpperCase only works on strings and so on.  But Ruby takes a different approach.  In Ruby, instead of limiting a method to a single data type, the developers decide to look at the behavior of a method, and define it by it's action rather than strictly by the data type it has to apply to.  

We have worked with this already a few times with some of the built in methods.  So this concept of defining by action and behavior in Ruby is called duck typing.  It is essentially, if it walks like a duck, and quacks like a duck, then you can call it a duck.

So we can call a reverse method on a string, or on an array because the behavior of reversing characters in a string and reversing indexes in an array are basically the same thing, they both quack like ducks so we can run the method like a duck.  This adds a lot of simplicity to our code because we don't need to go through a ton of work to do something simple anymore.  Like we talked about yesterday, if it makes sense to Ruby, run it.


This brings me back to enumerables, and why we are grouping arrays, hashes, and ranges together under this category.  Because we are grouping these together, we can run alot of the same methods to all of them, including .each and .map on hashes.

### Each

```ruby
bbq = {entree: 'brisket', appetizer: 'salad', side: 'potato salad', dessert: 'cheesecake' }

bbq.each do |key, value|
    p "#{value} is a #{key}"
end
```

### Map
This time around for our map, let's turn this into a method as well

```ruby
bbq = {entree: 'brisket', appetizer: 'salad', side: 'potato salad', dessert: 'cheesecake' }

def bbq_menu hash
    hash.map do |key, value|
        "#{value} is a #{key}."
    end
end

p bbq_menu(bbq)
```

