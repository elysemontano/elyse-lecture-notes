# Ruby Blocks and Iterables
As the name iterables suggests, we are going to be talking about how we can iterate in Ruby.  The great thing as we have already ran into with Ruby, the concepts are going to be really familiar, we are just simply transfering our understanding into new syntax.

## Process
Let's start by getting setup. I am going to create a Ruby file in my lecture notes repo.  

```
$ git checkout -b ruby-blocks
$ touch ruby-blocks.rb
```

# Iteration
- Iteration is the process of repeating something until a condition is met
    - for loops
    - map

Ruby is much more human friendly than Javascript. We have some of our friends from Javascript available to us in Ruby like map. However, we are going to start with a while loop.

## While
    - set a start point and end point
    - condition starts true and will stop once the condition is false

```ruby
num = 1
while num  <= 10
  p num
  # if we leave out this last line, we will have a stack overflow
  num += 1
end
```

## Methods
  There are many different methods that we can use for iteration.
  - methods can take an anonymous function, which is a BLOCK
  - Blocks can be defined two ways:
    - keywords do and end
    - {}

## Times
- Executes a block a certain number of times (hence the name)

Attaches to the number you want to use.

```ruby
5.times do
  p 'hello world'
end

5.times { p 'hello world' }
```
The main reason why you would want to use the brackets instead of a do block is if it can fit into one line

We can also use variables assigned to a number for this

```ruby
num = 10
num.times do
  p 'hello cohort'
end
```

## Each
- Works on a list of items such as an array or object(similar to forEach in JS)

When iterating with each, we will need a parameter.  In JS we used parenthesis, but in Ruby we use PIPES.
  - value stands for the current value in the iteration
```ruby
nums = [3, 4, 5, 6]

nums.each do |value|
  p value
end
```

Let's try another example that allows us to modify the data.

```ruby
nums = [3, 4, 5, 6]

nums.each do |value|
  p value * 3
end
```

Something to keep in mind, this does not mutate the original array.  We will talk about how we can mutate the array in a bit, but we currently are only printing the new value.


## Ranges
List of values that has a start and end points that are seperated by 2 dots and it fills the content for you.

```ruby
p 1..10
```

This essentially is iterable because this is a list.  So we can use each on this

```ruby
my_range = 1..10

my_range.each do |value|
  p value + 5
end
```

Ranges also work on letters

```ruby
letter_range = 'a'..'f'

letter_range.each do |value|
  p value
end
```

We can also take this list and turn it into an array.

```ruby
p my_range.to_a
```

## Map
Iterator that returns an array of the same length of the array you are acting on

```ruby
nums = 1..10

mapped = nums.map do |num|
  num * 3
end

p mapped
```

One of the reasons why we love Ruby so much is because of it's amazing built in methods available.  Let's try this with map

```ruby
whats_even = nums.map do |num|
  if num.even?
    'even'
  else
    num
  end
end

p whats_even
```

Also, pay close attention to your ends!

Currently this setup is not very dynamic since we are only using this on the range we setup before.  Let's fix this so that we are utilizing this logic within a method.

```ruby
def even_or_odd(array)
  array.map do |num|
    if num.even?
      'even'
    elsif num.odd?
      'odd'
    else
      'huh?'
    end
  end
end

p even_or_odd(1..10)
```

## Select
Essentially is the Ruby version of filter
- built in if statement
- returns subset

```ruby
def only_evens array
  array.select do |value|
    value.even?
  end
end

p only_evens(1..10)
```

## Make it Mutate
Lastly, if you are really eager to modify your original data set, you can change map to be a mutator by adding the bang operator

```ruby
names = ['Elyse', 'Gene', 'Sarah']

names.map! do |name|
  name.upcase
end

p names
```