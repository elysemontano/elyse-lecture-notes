# Active Record Validations and Specs

# Setup
Create a new Rails app in the appropriate folder: $ rails new validations -d postgresql -T

# Lecture
Validations are Active Record statements that are added to the model class and will run each time you create or update the instance to validate or check the data is being given is what you want. 

When working with the Countries database last week, we ran into some instances where we were dealing with a lot of null values, which behaves differently than 0.  This ultimately is not a good practice to setup your database to have multiple null values in a column.

When creating data and the database, we want to be thoughtful of the structure we are providing and also thoughtful of the actual data that is being provided.  We want to be cautious to prevent a user from accidently adding incorrect data, or in some cases can be malicous.

Validations ensure that the data that gets passed in are what we are expecting.

$ cd validations
Create a database: $ rails db:create

## Adding RSpec

So far, when we pass the flag -T when we create a new rails app, we haven't done anything else with it. Since that flag drops the testing library rails comes with, we are going to now want to install RSpec so we can write some tests for our Rails application.

For this, I am going to reference my syllabus as this is going to provide me the proper steps to install it.

Add the dependencies for RSpec:
$ bundle add rspec-rails

Bundle is an indication that I am interacting with the gem file

$ rails generate rspec:install

When running generate here, we know that we are going to have some files and folders created in the rails way that is specific to what we are passing it, in this case, RSpec.

We can now see that we have a new folder in here labeled spec and this is where our RSpec tests will live.


### Now we need some data

Generate the model with appropriate columns and data types
$ rails g model Veteranarian name:string patients:integer

Because we setup RSpec before generating our model, Rails automatically generates a spec file for us.  If we generate RSpec after we generate the model, we will have to go in and create the files ourself.  So in this case, order does matter as it will save us time.

We can also see that we have a new folder in our spec folder called models which has a spec file in there.  Let's take a look.  

We can see that there is already a test in here.  There is a describe and a block.

Let's start by just checking if it is running correctly.

$ Run rspec spec/models/veneranarian_spec.rb

This shows me a few useful things.  First I need to migrate my database, but it also shows that it is finding the file.

$ rails db:migrate
$ Run rspec spec/models/veneranarian_spec.rb
It shows I have a pending test, which is what is out of the box.

We can get rid of the line with pending and write some real tests from here.

# Tests
My first test is going to be pretty vague but will check that I can make instances in my database.

```ruby
RSpec.describe Veteranarian, type: :model do

  it 'is valid with valid attributes' do
  # I will need to run a create for active record and store it as a variable
  veteranarian = Veteranarian.create(name: 'Dr. Doolitle', patients: 100)
  # Now I want to assert against it
  expect(veteranarian).to be_valid
  end

end
```

This is essentially going into my rails console, creating veteranarian.  Being able to see the instance and I can also run .valid? to make sure it is valid

$ rails c
> veteranarian = Veteranarian.create(name: 'Dr. Doolitle', patients: 100)
> veteranarian
> veteranarian 
=> true $

This is a great start, but what if I just type in my console Veteranarian.create?  My columns will have nil values, and that is not really what I want.  Currently, there is nothing in my application that says I can't do this.

So we want to start putting some protections on the columns that specifies that we have to have some data provided or it will be rejected.

This will be the next test that we are going to write.  And this is where we will practice red-green-refactor.  

Each column has to have data, so our next expect statement will be checking that it is not valid without a name.  Which means, I am checking that if I create an instance that is missing name, I will be throwing an error.


```ruby
spec/models/veteranarian_spec.rb

# still inside the describe block
  it 'is not valid without a name' do
   # create an instance without the vets name
    veteranarian = Veteranarian.create patients:5
    # We want to check for errors on this instance, specifically on the name column
    expect(veteranarian.errors[:name]).to_not be_empty
  end
```

Currently this fails because my application is not setup to create an error if I don't pass anything.  Basically, my app is saying, anything goes.  So this is a good failure.

Now let's tell our app that no really, I don't want that to be allowed.  My user has to provide some data or I want you to throw an error.

So now we need to setup some validations.  This will happen inside of our model class.  This is the same place where you will set up associations as well.

We will add a line that is going to validate the presence of a particular column.

```ruby
app/models/veteranarian.rb

class Veteranarian < ApplicationRecord
  validates :name, presence: true
end

```

And now we are passing. 
Let's take a closer look at this.
I am going to comment out the validation for just a second
$ rails c
> veteranarian = Veteranarian.create patients:5
> veteranarian
      Has a nil value because there is nothing saying that it can't
> veteranarian.errors
      Will show an array of any errors that may exist. Currently this array is empty.  Our test is telling us that we want to see this array to not be empty, meaning it will have an error.  That is why the test failed $ exit

No I am going to comment back in my validation

$ rails c
> veteranarian = Veteranarian.create patients:5
> veteranarian
      This time around, veteranarian never got created since my id is nil.
> veteranarian.errors
      I can also see that there are errors in my array this time around.
      We can also pull out errors specifically tied to the name column
> veteranarain.errors[:name]
      This is how you access a single item from a hash.  By using the square brackets and passing in the key of the hash
      We get back an error message in the array "can't be blank"  $







# Challenges:

Setup
Create a new rails application called 'validations'
$ rails new validations -d postgresql -T
$ cd validations

Create the database
  $ rails db:create

Add RSpec $ bundle add rspec-rails
  $ rails generate rspec:install

```ruby
# You have been tasked to set up an Account model for a your company. The application must be secure and tested.

## As a developer, I need to generate a model called Account that has a username, a password, and an email.
$ rails generate model Account username:string password:string email:string
$ rails db:migrate

## As a developer, I need username, password, and email to be required.
spec/models/account_spec.rb

RSpec.describe Account, type: :model do
  it 'is valid with valid attributes' do
    account = Account.create username: 'someone', password: 'mypassword123', email: 'someone@somewhere.com'
    expect(account).to be_valid
  end
  it 'is not valid without a username' do
    account = Account.create password: 'mypassword123', email: 'someone@somewhere.com'
    expect(account.errors[:username]).to_not be_empty
  end
  it 'is not valid without a password' do
    account = Account.create username: 'someone', email: 'someone@somewhere.com'
    expect(account.errors[:password]).to_not be_empty
  end
  it 'is not valid without a email' do
    account = Account.create username: 'someone', password: 'mypassword123'
    expect(account.errors[:email]).to_not be_empty
  end
end
app/models/account.rb

class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
end


## As a developer, I need every username to be at least 5 characters long.
spec/models/account_spec.rb

it 'username is not valid if less than 5 characters' do
  account = Account.create username: 'so', password: 'mypassword123', email: 'someone@somewhere.com'
  expect(account.errors[:username]).not_to be_empty
end
app/models/account.rb

class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
end


## As a developer, I need each username to be unique.
spec/models/account_spec.rb

it 'username must be unique' do
  Account.create username: 'someone', password: 'mypassword123', email: 'someone@somewhere.com'
  account = Account.create username: 'someone', password: 'mypassword123', email: 'someone@somewhere.com'
  expect(account.errors[:username]).not_to be_empty
end
app/models/account.rb

class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
end


## As a developer, I need each password to be at least 6 characters long.
spec/models/account_spec.rb

it 'password is not valid if less than 6 characters' do
  account = Account.create username: 'someone', password: 'my', email: 'someone@somewhere.com'
  expect(account.errors[:password]).not_to be_empty
end
app/models/account.rb

class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }
end


## As a developer, I need each password to be unique.
spec/models/account_spec.rb

it 'password must be unique' do
  Account.create username: 'someone', password: 'mypassword123', email: 'someone@somewhere.com'
  account = Account.create username: 'someone', password: 'mypassword123', email: 'someone@somewhere.com'
  expect(account.errors[:password]).not_to be_empty
end
app/models/account.rb

class Account < ApplicationRecord
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }
  validates :password, uniqueness: true
end


## As a developer, I want my Account model to have many associated Addresses. I want Address to have street_number, street_name, city, state, and zip attributes.
$ rails generate model Address street_number:integer street_name:string city:string state:string zip:integer account_id:integer $ rails db:migrate

app/models/address.rb

class Address < ApplicationRecord
  belongs_to :account
end
app/models/account.rb

class Account < ApplicationRecord
  has_many :addresses
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }
  validates :password, uniqueness: true
end


## As a developer, I want to validate the presence of all fields on Address.
spec/models/address_spec.rb

RSpec.describe Address, type: :model do
  let(:account) { Account.create username: 'someone', password: 'mypassword123', email: 'someone@somewhere.com' }
  it 'is valid with valid attributes' do
    address = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
    expect(address).to be_valid
  end
  it 'must have a valid account' do
    invalid_account = Account.create
    address = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: invalid_account.id
    expect(address).to_not be_valid
  end
  it 'is not valid without a street_number' do
    address = Address.create street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
    expect(address.errors[:street_number]).to_not be_empty
  end
  it 'is not valid without a street_name' do
    address = Address.create street_number: 1234, city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
    expect(address.errors[:street_name]).to_not be_empty
  end
  it 'is not valid without a city' do
    address = Address.create street_number: 1234, street_name: 'Somewhere Over', state: 'CA', zip: 92603, account_id: account.id
    expect(address.errors[:city]).to_not be_empty
  end
  it 'is not valid without a state' do
    address = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', zip: 92603, account_id: account.id
    expect(address.errors[:state]).to_not be_empty
  end
  it 'is not valid without a zip' do
    address = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', account_id: account.id
    expect(address.errors[:zip]).to_not be_empty
  end
end
app/models/address.rb

class Address < ApplicationRecord
  belongs_to :account
  validates :street_number, :street_name, :city, :state, :zip, presence: true
end


# Stretch Challenges
## As a developer, I need each Account password to have at least one number.
spec/models/account_spec.rb

it 'password must have at least one number' do
  account = Account.create username: 'someone', password: 'mypassword123', email: 'someone@somewhere.com'
  expect(account.errors[:password]).not_to be_empty
end
app/models/account.rb

class Account < ApplicationRecord
  has_many :addresses
  validates :username, :password, :email, presence: true
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }
  validates :password, uniqueness: true
  validate :password_must_exist_and_contain_a_number

  def password_must_exist_and_contain_a_number
    if password.nil?
      errors.add(:password, 'must be present')
    else
      errors.add(:password, 'must contain at least one digit') unless password.match(/[0-9]/)
    end
  end
end


## As a developer, I want to validate that Address street_number, street_name, zip are unique for within an account. Hint: Read about :scope in the Rails validation docs.
spec/models/address_spec.rb

it 'must be unique within an account' do
  address1 = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
  address2 = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
  expect(address2).to_not be_valid
  expect(address2.errors[:street_name].first).to eq 'account data must be unique'
  expect(address2.errors[:street_number].first).to eq 'account data must be unique'
  expect(address2.errors[:city].first).to eq 'account data must be unique'
  expect(address2.errors[:state].first).to eq 'account data must be unique'
  expect(address2.errors[:zip].first).to eq 'account data must be unique'
end
end
it 'addresses can be repeated in unique accounts' do
  address1 = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
  address2 = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: second_account.id
  expect(address2).to be_valid
end
app/models/address.rb

class Address < ApplicationRecord
  belongs_to :account
  validates :street_number, :street_name, :city, :state, :zip, presence: true
  validates :street_number, :street_name, :city, :state, :zip, uniqueness: { scope: :account, message: 'account data must be unique' }
end


## As a developer, I want to validate that the Address street_number and zip are numbers. Hint: Read about Numericality in the Rails validation docs.
spec/models/address_spec.rb

it 'street number must be a number' do
  address = Address.create street_number: 'Number', street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
  expect(address.errors[:street_number].first).to eq 'is not a number'
end
it 'zip must be a number' do
  address = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 'Zip', account_id: account.id
  p address
  expect(address.errors[:zip].first).to eq 'is not a number'
end
app/models/address.rb

class Address < ApplicationRecord
  belongs_to :account
  validates :street_number, :street_name, :city, :state, :zip, presence: true
  validates :street_number, :street_name, :city, :state, :zip, uniqueness: { scope: :account, message: 'account data must be unique' }
  validates :street_number, :zip, numericality: true
end


## As a developer, I want to see a custom error message that says "Please, input numbers only" if street_number or zip code are not numbers. Hint: Read about message in the Rails validation docs.
spec/models/address_spec.rb

it 'street number must be a number' do
  address = Address.create street_number: 'Street Number', street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 92603, account_id: account.id
  expect(address.errors[:street_number].first).to eq 'Please, input numbers only'
end
it 'zip must be a number' do
  address = Address.create street_number: 1234, street_name: 'Somewhere Over', city: 'The Rainbow', state: 'CA', zip: 'Zip', account_id: account.id
  p address
  expect(address.errors[:zip].first).to eq 'Please, input numbers only'
end
app/models/address.rb

class Address < ApplicationRecord
  belongs_to :account
  validates :street_number, :street_name, :city, :state, :zip, presence: true
  validates :street_number, :street_name, :city, :state, :zip, uniqueness: { scope: :account, message: 'account data must be unique' }
  validates :street_number, :zip, numericality: { message: 'Please, input numbers only' }
end

```