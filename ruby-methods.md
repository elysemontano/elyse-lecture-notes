# Lecture Notes

### Overview
- Ruby methods are custom logic that can take inputs and will always produce outputs

### Process
- Ensure you are in the cohort-lecture-examples repo
- Ensure your local is up to date and there are no stale branches
- Create a new branch
- Create a Ruby file with the naming convention `language-topic.rb`
- Run the file with `ruby`

### Additional Notes and Goals
- The `puts` or `p` should always be on the invocation not on the inner working of the method

### Major Takeaways
- Every `def` needs a corresponding `end`
- Ruby has an implicit return
- Methods must be invoked




### Process
    - Ensure you are in the cohort-lecture-examples repo
    - Ensure your local is up to date and there are no stale branches
    - Create a new branch
    - Create a Ruby file `ruby-methods.rb`
    - Run the file with `ruby`

### Lecture
    - Everything in Ruby is an object which is an instance of a class. If everything is an object, that means that all functions are technically methods.

    - Talking about custom methods is basically the same thing we talk about when we say "creating a function to do this thing in JavaScript.

    - Just like in JavaScript we need to be able to define custom methods that take an input and produce an output.

    - When you create a method in Ruby, you define it
    - `def` is a keyword in Ruby short for define
    - Every `def` needs a corresponding `end`

#### Method Syntax
    - Give the method a name
    - end the method with the word end
        - end is like the closing curly in javascript
    - Indention is super important because we are not reliant on curly braces to show us the start and end places, our indentation is really going help us see if something is missing.
    - The most simple method we can create will just return a line of code. 

```ruby
def greeter
    'Hello World!'
end
```

    * In terminal run: $ ruby filename.rb

    - This won't do anything because the method is currently is not being invoked. 

    - So lets try that again by invoking the function

    - To call a method in ruby, just reference it's name and add p before it so it prints to the console.

    - The `puts` or `p` should always be on the invocation not on the inner working of the method

    ```ruby
def greeter  # step one - define the method
end
def greeter  # step two - add a string
  'Hello World!'
end
p greeter  # step three - invoke the method
```
    - Note that there isn't a return. In JavaScript if we didn't use the keyword return, we would get back undefined. While there is a `return` keyword in Ruby, we don't have to use it. Ruby will automatically return the last line of every method unless we say otherwise. That is called an implicit return.






#### Methods with Arguments
    - The last example is pretty basic, but we want to utilize the benefits of creating a method for it's reusability.
    - We can refactor this to take in a parameter and use some string interpolation to greet the person.
    - Interestingly enough, we do not need parenthesis on either the arguement or parameter.

```ruby
def greeter name
  "Hello #{name}!"
end
p greeter
```

    - This will throw an error showing wrong number of arguements.  This is a super helpful error because it points us exactly to where the problem is. 
    - If we have a parameter set inside our method, what is needed when we invoke the method?  We will need an arguement!


```ruby
def greeter name
  "Hello #{name}!"
end
p greeter "Person"
```


### Multiple Arguements
    - While we don't need parenthesis for a parameter, it is definitely good practice to use parentheses if there are multiple parameters. So let's try that!
    - Let's create a method that takes in two numbers
    - Return the numbers multiplied

```ruby
def multiply(num1, num2)
  num1 * num2
end
p multiply(3, 7)
```

    - Ruby will be happy with either way, however, using parenthesis can make your code more readable such as when passing multiple arguements.

    - Also, methods are reusable so we can call them over and over again

```ruby
def multiply(num1, num2)
  num1 * num2
end
p multiply(3, 7)
p multiply(6, 10)
p multiply(4, 9)
p multiply(2, 8)
```


#### Methods with Conditional Logic
    - Oftentimes we need to add more logic into a method. We can create a method that decides which number is greater.
        - Every `def` needs an `end`
        - Every `if` needs an `end`
        - Two different ends means two different execution layers of code
        
    -  This is where indentation is super important so we know which end is going to which scope.

```ruby
def greater_num(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end
p greater_num(27, 22)
p greater_num(6, 27)
p greater_num(42, 42)
```

#### Getting User Input
    - So as a final step, let's get the user input from the terminal rather than from our program. We can create a method that asks a user for their name and age. Then it will give a customized answer to whether the user is old enough to vote.
    - Content from the terminal is always going to be a string
    - Need to modify the the age to be a number using .to_i

```ruby
puts 'Enter Your Name'
user_name = gets.chomp
p user_name
puts 'Enter your Age'
user_age = gets.chomp
p user_age


def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}. #{age} is old enough to vote"
  else
    "Hi #{name}. #{age} is not old enough to vote"
  end
end
p can_you_vote(user_name, user_age)

p user_age.class
user_age = gets.chomp.to_i
```

### Review
- What is def?
- What is implicit return?
- Where does the `p` and the `puts` belong in the method?
- What data type will the `gets` method return?

# Takeaways
    * Define a method with def and end
    * Name is in snake case
    * Implicit return - last line of function
    * Pass arguements - as many as make sense
    * Perform logic inside methods
        - match ends for conditionals
        - match ends for method

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `ruby-challenges` repo
- Remind the students of the appropriate naming conventions for their branch and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room



--------------------------------------------------------

# Extra Conditional Problems

   ### Adding Logic Into Method
``` ruby
    def is_even number
        if number % 2 == 0
            "#{number} is even"
        else
            "#{number} is not even"
        end
    end

    p is_even 10
    p is_even 7
    p is_even 4.9
```

   ### Method Shortcuts

    * We can rewrite the above code using a fun shortcut that ruby gives us
```ruby
    if number % 2 == 0
    # returns a boolean value
    # can be written with shortcut specifically for data type of integer:
    number.even?
```

``` ruby
    def is_even number
        if number.even?
            "#{number} is even"
        else
            "#{number} is not even"
        end
    end

    p is_even 10
    p is_even 7
    # float will throw an error since .even? works only on integers
    p is_even 4.9
```




