# RSPEC
    Domain specific language

## Ruby Gems
    Package manager for Ruby.  Like yarn for javascript

## TDD
    - TDD can prevent issues from happening in larger code bases. 
    - Example story: Person is tasked with writing a method, decides to write a test first and finds the test passes prior to writing the code.  Turns out someone has already written a method called the same thing.  Seeing this can prevent days of extra work down the line

## RSPEC Tests
    - mkdir folder-name
    - gem install rspec
    - touch file.rb
    - touch file_spec.rb

    * AAA - Standard philosophy for writing tests 
        - Arrange - inputs, targets
            - does it create object or special setting?

        - Act - focused on behavior
            - calling function, login, interactions

        - Assert - outcomes
            - goodness or badness of responses

    - Some tests won't have all of these attributes

### RSPEC Setup
    - must have in rspec file to run rspec:
        require 'rspec'
        require_relative 'rubyfilename'

```ruby
# Spec file:
# Describe has a callback function in jest, so in ruby we will use a do block
describe 'Car' do # reference
    it 'when a car is instantiated' do
        # to_not and raise_error are both methods given to us by rspec
        # Assert is expect
        # Act is instantiating the car
        expect{ Car.new }.to_not raise_error # functional code
    end
end
```
    - Run test: rspec car_spec.rb
        - For more details, run rspec car_spec.rb -f d
            - f stands for format, d stands for documentation
    - Above should fail since no code has been written.

    Write code to pass:

```ruby
# Ruby file:
class Car
end
```

    - Passed!  A car is instantiated

    Let's write some more tests

```ruby
# Spec File:
# Describe has a callback function in jest, so in ruby we will use a do block
describe 'Car' do # reference
    it 'when a car is instantiated' do
        # to_not and raise_error are both methods given to us by rspec
        # Assert is expect
        # Act is instantiating the car
        expect{ Car.new }.to_not raise_error # functional code
    end
    it 'has a make' do
        # Arrange
        my_car = Car.new
        # Act
        my_car.make = 'Toyota'
        # Assertion 
            # Checking data type
        expect(my_car.make).to be_a String
            # Checking specific data
        expect(my_car.make).to eq 'Toyota'
    end
end
```
    - 2 examples, 1 failure (we have 2 it's)

    - Specific tests allow us to track something very specific if something goes wrong.  
        - Is it the data type(checking type Class) or the data itself?
    
    - Rspec has a lot of syntax.  
        - Syllabus has a lot of resources and links to documentation to refer to.

    Let's make the tests pass:

```ruby
# Ruby file:
class Car
    # Sets a make
    def make = car_make
        @make = car_make
    end
    # Get make
    def make
        @make
    end
end
```
    - Tests passed

    - Refactor for simplicity:

```ruby
# Ruby file:
class Car
    attr_accessor :make
end
```
    - Tests passed
    - This is called the red-green-refactor

    Let's make another test

```ruby
# Spec File:
# Describe has a callback function in jest, so in ruby we will use a do block
describe 'Car' do # reference
    it 'when a car is instantiated' do
        # to_not and raise_error are both methods given to us by rspec
        # Assert is expect
        # Act is instantiating the car
        expect{ Car.new }.to_not raise_error # functional code
    end
    it 'has a make' do
        # Arrange
        my_car = Car.new
        # Act
        my_car.make = 'Toyota'
        # Assertion 
            # Checking data type
        expect(my_car.make).to be_a String
            # Checking specific data
        expect(my_car.make).to eq 'Toyota'
    end
    it 'can be unpainted by default' do
        # Arrange
        my_car = Car.new
        # Assertion
        expect(my_car.color).to eq 'Unpainted'
        expect(my_car.color).to be_a String
    end
end
```
    - Fails

```ruby
# Ruby file:
class Car
    attr_accessor :make
    # Setter
    def initialize colors = 'Unpainted'
        @color = color
    end
    # Getter
    def color
        @color
    end
end
```

    - Passed!
    - Refactor:

```ruby
# Ruby file:
class Car
    # getter and setter
    attr_accessor :make
    # only getter
    attr_reader :color
    # Setter
    def initialize colors = 'Unpainted'
        @color = color
    end
end
```

    - Passed

    - Numeric stands for an integer or float

- How does what I set up in one place affect another place?

    - Keep building inside the same test:

```ruby
it 'can be painted' do
    my_car = Car.new 'Red'
    expect(my_car.color).to eq 'Red'
    expect(my_car.color).to be_a String
end
```

```ruby
it 'has an intial speed of 0' do
    my_car = Car.new
    expect(my_car.speed).to eq 0
end
```

```ruby
# Ruby file:
class Car
    attr_accessor :make, :color

    def initialize colors = 'Unpainted', speed = 0
        @color = color
        @speed = speed
    end

    def speed
        @speed
    end
end
```