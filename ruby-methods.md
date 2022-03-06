# Ruby Methods
    * Every custom code snippit or function we write in ruby belongs to a class making it a method

    * Custom functions are still called methods because it is still acting on a class

    - When creating a method in ruby, you define it with the keyword def (short for define)
        * def is the declaration of a custom method
    - Give the method a name
    - end the method with the word end
        * end is like the closing curly in javascript
    - Indention is super important because we are not reliant on curly braces to show us the start and end places, our indentation is really going to know if something is missing.

    ```ruby
    def greeter
        'Hello World!'
    end
    ```

    - This won't do anything because currently is not being invoked
    - to call a method in ruby, just reference it's name and add p before it so it prints to the console.

    ``` ruby
    def greeter
        'Hello World!'
    end

    p greeter
    ```

    * In terminal run: $ ruby filename.rb

    - Ruby uses implicit return which means the last line of the code will be what is returned.
    - Return is a valid keyword in ruby and will return the result, however with ruby it is not neccessary like in javascript functions.

# Adding Parameters to Methods

    * This last example is pretty basic, but we want to utilize the benefits of creating a method for it's reusability.
    * We can refactor this to take in a parameter and use some string interpolation to greet the person.

``` ruby
    def greeter(name)
        "Hello #{name}!"
    end

    p greeter
```
    - This will throw an error showing wrong number of arguements.  This is a super helpful error because it points us exactly to where the problem is. 
    - If we have a parameter set inside our method, what is needed when we invoke the method?

    ``` ruby
    def greeter(name)
        "Hello #{name}!"
    end

    p greeter('Alpha')
```

    * Interestingly enough, we do not need parenthesis on either the arguement or parameter.  So we can rewrite the above like this:

``` ruby
    def greeter name
        "Hello #{name}!"
    end

    p greeter 'Alpha'
```

    * Ruby will be happy with either way, however sometimes using parenthesis can make your code more readable such as when passing multiple arguements.

``` ruby
    def greeter(name, cohort)
        "Hello #{name} from the #{cohort} cohort!"
    end

    p greeter('person1', 'Alpha')
    p greeter('person2', 'Alpha')
    p greeter('person3', 'Alpha')
    p greeter('person4', 'Alpha')
```

    * Methods are reusable so we can call them over and over again


# Adding Some More Logic Into Methods
    * Create a method that determines whether a number is even or odd

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

    * When writing conditionals, each conditional statement will have it's own end as well as the method itself will have it's own end. This is where indentation is super important so we know which end is going to which scope.
    - Two different ends means two different execution layers of code

# Method Shortcuts

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

```ruby
    def can_you_vote(age)
        if age >= 18 # <- Relational operator returning boolean
            'You can vote'
        else
            'Nope, not yet'
        end
    end

    # need info from user
    puts 'Enter your age:'
    # get back information stored as a variable
    user_age = gets.chomp

    # call my method and pass the user input
    can_you_vote(user_age)

    # Throws an error because we are working with a string
    # print user_age.class

```

``` ruby
    def can_you_vote(age)
        if age >= 18 # <- Relational operator returning boolean
            'You can vote'
        else
            'Nope, not yet'
        end
    end

    puts 'Enter your age:'
    p user_age.class # <- String

    # We need to convert from string to integer using to_i

    user_age = gets.chomp.to_i

    p can_you_vot(uer_age)

```

# Takeaways
    * Define a method with def and end
    * Name is in snake case
    * Implicit return - last line of function
    * Pass arguements - as many as make sense
    * Perform logic inside methods
        - match ends for conditionals
        - match ends for method

# Challenges
