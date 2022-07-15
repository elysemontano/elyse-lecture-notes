# RSPEC
    Domain specific language

## Ruby Gems
    Package manager for Ruby.  Like yarn for javascript

## RSPEC Setup
- Ensure you are in the cohort-lecture-examples repo
- Ensure your local is up to date and there are no stale branches
- Create a new branch ruby-rspec
- `$ mkdir ruby-rspec`
- `$ cd ruby-rspec`
- `$ touch rspec.rb`
- `$ touch rspec_spec.rb`
- Run the tests with `rspec rspec_spec.rb`

We are going to have two files. One is going to have the Ruby code and one is going to have the tests.

## TDD
RSpec is a Domain Specific Language which is a language that has been specialized for a particular task. In this case RSpec is specialized for testing Ruby code.

Rspec is a Ruby gem and gems are a package manager for Ruby.  You can think of it like yarn for javascript.

TDD which stands for test-driven development, is a developer philosophy of writing tests (or specs, short for specifications) first and then creating the code that will make the tests pass. 

- TDD is closely associated with the phrase `red-green-refactor`. Which means we will write our tests first and see them fail (red), the write the code to make it pass (green), then if we need to do any refactor or make any edits on the code, then we can do so with confidence.

    - Example story: Person is tasked with writing a method, decides to write a test first and finds the test passes prior to writing the code.  Turns out someone has already written a method called the same thing.  Seeing this can prevent days of extra work down the line

### RSPEC Setup
- Google: ruby gem rspec and look at the https://rubygems.org/gems/rspec/versions/3.4.0 documentation for the number of downloads for RSpec

- $ `gem install rspec`
- Set imports (inside rspec_spec file)
    - require 'rspec'
    - require_relative 'rubyfilename'

```ruby
# rspec_spec.rb
# require the rspec tools
require 'rspec'
# require the file that contains the code
require_relative 'rspec.rb'
```

For this example we are going to create a class for Book. Book is going to be a template from which we can create many instances of books. The Book class will have both data and behavior. A book can have a title, an author, and pages which are all data. We can also read a book and change the current page we are on. That is an action, or a behavior, which in development we call them methods.

- Add `describe` block with a do/end block
- Add `it` block with a do/end block

```ruby
describe 'Book' do # reference
  it 'has to be real' do
  end
end


#     * AAA - Standard philosophy for writing tests 
# - Arrange - inputs, targets
#     - does it create object or special setting?

# - Act - focused on behavior
#     - calling function, login, interactions

# - Assert - outcomes
#     - goodness or badness of responses

# - Some tests won't have all of these attributes
```

- Add expect statement that will run the new method and expect the creation of a class
  - google Ruby matchers and click on Relish
  - show different built in matchers

- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test


```ruby
# rspec_spec.rb
# require the rspec tools
require 'rspec'
# require the file that contains the code
require_relative 'rspec_book.rb'


describe 'Book' do # reference
  it 'has to be real' do
    # to_not and raise_error are both methods given to us by rspec
    # Assert is expect
    # Act is instantiating the book
    expect{ Book.new }.to_not raise_error
  end
end
```

- Add the code that will make the test pass

- For more details, run rspec rspec_spec.rb -f d
    - f stands for format, d stands for documentation

    Write code to pass:

```ruby
# Ruby file:
class Book
end
```

- Passed!  A book is instantiated
Let's write some more tests

#### Book Should Have a Title
Now we want to be able to have our Book class have some static data.
- Add an additional `it` block to the test
- Create an instance of Book
- Call a setter method to give Book a title
- Expect the outcome
- This expect has parentheses because the outcome is data, curly braces are used when the outcome is behavior
- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test

```ruby
# Spec File:
    it 'has a title' do
        # Arrange
        my_book = Book.new
        # Act
        my_book.title = 'Catch-22'
        # Assertion 
            # Checking data type
        expect(my_book.title).to be_a String
            # Checking specific data
        expect(my_book.title).to eq 'Catch-22'
    end
```
- 2 examples, 1 failure (we have 2 it's)

- Specific tests allow us to track something very specific if something goes wrong.  
    - Is it the data type(checking type Class) or the data itself?

- Rspec has a lot of syntax.  
    - Syllabus has a lot of resources and links to documentation to refer to.

Let's make the tests pass:
- Add the code that will make the test pass
- Can use an initializer to create the variable on instantiation
- `attr_accessor` will give us getter and setter methods

```ruby
# rspec_book.rb
class Book
  attr_accessor :title
  def initialize
    @title = title
  end
end
```
    - Tests passed

#### Book Should Have an Author
If there is no author we can have a default value of anonymous.
- Add an additional `it` block to the test
- Create an instance of Book
- Book should have a default author of anonymous
- Expect the outcome
- This expect has parentheses because the outcome is data, curly braces are used when the outcome is behavior
- Update Book to have an author
- Expect the outcome
- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test

```ruby
# Spec File:
    it 'has an author' do
        # Arrange
        my_book = Book.new
        # Assertion
        expect(my_book.author).to eq 'anonymous'
        expect(my_book.author).to be_a String
        catch22 = Book.new 'Joseph Heller'
        expect(catch22.author).to eq 'Joseph Heller'
    end
end
```
- Add the code that will make the test pass

```ruby
# rspec_book.rb
class Book
  attr_accessor :title, :author
  def initialize author='anonymous'
    @author = author
    @title = title
  end
end
```

- Passed
 
 #### Book Should Have a Current Page
A new instance of book will always start with the page at 1.
- Add an additional `it` block to the test
- Create an instance of Book
- Expect the outcome
- This expect has parentheses because the outcome is data
- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test

```ruby
# rspec_spec.rb
it 'can report the current page' do
  my_book = Book.new
  expect(my_book.page).to eq 1
  expect(my_book.page).to be_a Integer
end
```

- Add the code that will make the test pass

```ruby
# rspec_book.rb
class Book
  attr_accessor :title, :author, :page
  def initialize author='anonymous'
    @author = author
    @title = title
    @page = 1
  end
end
```

#### Reading the Book
We can add a method that will move the pages forward, we are back to looking for a behavior rather than a static output so we need different expect statements in the test.
- Google rspec change matchers: https://relishapp.com/rspec/rspec-expectations/docs/built-in-matchers/change-matcher
- Counter example in the relish docs has the syntax we are looking for
- Add an additional `it` block to the test
- Create an instance of Book
- Expect the outcome
- This expect has curly braces because the outcome is a behavior
- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test

```ruby
# rspec_spec.rb
it 'can read pages' do
  my_book = Book.new
  expect{ my_book.read 10 }.to change{ my_book.page }.from(1).to(11)
end
```

- Add the method that will make the test pass

```ruby
# rspec_book.rb
class Book
  attr_accessor :title, :author, :page
  def initialize author='anonymous'
    @author = author
    @title = title
    @page = 1
  end
  def read pages_read
    @page += pages_read
  end
end
```







// Extra Examples
#### Add a Library
So now let's look at creating a collection of books. We can make another class that will handle our collection.
- Create another file called rspec_library.rb
- Need to import library in the testing file and create another describe block
- Add an `it` block to the test
- Expect the outcome
- This expect has curly braces because the outcome is a behavior
- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test

```ruby
# rspec_spec.rb
require 'rspec'
require_relative 'rspec_book'
require_relative 'rspec_library'
# Other code here ...
describe 'Library' do
  it 'has to be real' do
    expect{ Library.new }.to_not raise_error
  end
end
```

- Add the code that will make the test pass

```ruby
# rspec_library.rb
class Library
end
```

#### Create a Collection of Books
We can create a collection that is a data type of Array.
- Add an additional `it` block to the test
- Create an instance of Book
- Expect the outcome
- This expect has parentheses because the outcome is a data
- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test

```ruby
# rspec_spec.rb
it 'has an array of books' do
  my_library = Library.new
  expect(my_library.book_collection).to be_a Array
end
```

- Add the code that will make the test pass

```ruby
# rspec_library.rb
class Library
  attr_accessor :book_collection
  def initialize
    @book_collection = []
  end
end
```

#### Add Books
Add books to the books array.
- Add an additional `it` block to the test
- Create an instance of Library
- Create a couple instances of Book
- Expect the outcome
- This expect has parentheses because the outcome is a data
- Run the tests with `rspec rspec_spec.rb`
- Look at the failing test

```ruby
# rspec_spec.rb
it 'has an array of books' do
  catch22 = Book.new
  sherlock = Book.new
  my_library = Library.new
  my_library.add_books catch22
  my_library.add_books sherlock
  expect(my_library.book_collection).not_to be_empty
  expect(my_library.book_collection).to contain_exactly(catch22, sherlock)
end
```

- Add the code that will make the test pass

```ruby
# rspec_spec.rb
class Library
  attr_accessor :book_collection
  def initialize
    @book_collection = []
  end
  def add_books book
    @book_collection << book
  end
end
```

### Review
- What is RSpec?
- What is TDD?
- What imports are required to run RSpec?
- In which file do the imports belong?
- What is the difference between expect statements with curly braces vs parentheses?

### Next Steps
- Open the syllabus section and briefly run through the challenges and expectations
- Remind the student to use the `ruby-challenges` repo
- Remind the students of the appropriate naming conventions for their folder, branch, and file
- Post pairs in Slack
- Open breakout rooms with ability for participants to choose their room