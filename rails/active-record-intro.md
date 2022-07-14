# Active Record Intro

## Setup
    - Check repo is up to date
    - Check for stale branches
    - Checkout branch active-record
    - Create markdown file for documentation `$ touch active-record.md`
    - Have syllabus open
    - Create rails app `$ rails new active-record-intro -d postresql -T

## Lecture
  - Rails uses gems to peice the application together.  One of the gems we are going to take a deeper look at today is Active Record.
  - Active Record is an ORM (object relational mapping)
    - Translator (taking two things that can't talk to each other and making the communication happen)
  - Active Record is translating Ruby and SQL (or database languages)

  Ruby is very object oriented, and postgres also takes a very object oriented approach as well
  - We can think of the database as a collection of tables.
    - Database is a stoarage room, where I can place data
    - Define individual tables or filing cabinet inside the storage room.  
        - Objects and classes will describe the structure of the filing cabinet provide a label on where things are stored and then put stuff in there when we are creating an instance of the class.

## Create a database
So now I want to be able to work with a database, which means I need to create one.  
`$ rails db:create`

I can see this created two databases and if I go to see what databases currently exist on my local machine I can see these new databases
`$ psql`
`\l`

The part that can be hard for some people is that this exists, but you can't really see it in a more visual sense.
I can see the file structure in the rails app, however my actual database lives on my hard drive.
The two are connected and interact, but they are seperate.

- I can push my rails app that contains the structure for the database onto github where someone else can look at the code and interact with it, BUT the database will not be available.  This only lives and exists on my personal computer.


- During development - Database lives on your machine
- Rails app - collection of folders and files that can be accessed on GitHub
- During production - Database will exist on a seperate server

## Model
MVC - Model View Controller

The model is working with the database

The model class defines the structure of the db
Model will allow us to store data in the form of a table

We won't make this on our own because we want Rails to handle some of that background work and connecting those hidden dots for us.  So we are going to use some new rails commands to create the model.

** Quickly take a look at the model section in rails app and db section before running generate **

## Rails Generate Commands
We are going to be using a new command in rails to generate some things.  
  - Generate will create files and folders in a rails app the rails way
  - Utilizes Active Record Datatypes (go to rails docs on dev.to)
    Since we are dealing with data, we will have some specific datatypes we will need to work with that are specific to Active Record.
  - We need to decide now the structure the database and what type of data will be stored


Generate command takes arguements
  - Class name will be in Pascal case and singular (Rails is very particular here!)
  - Name of columns and datatype

`$ rails generate model Schedule day:string date:date event:string`
invoked active record and created 2 files

### Model 
If we look inside our models folder, we now have a file called Schuedule.rb that is inheriting ApplicationRecord.  I did not create myself, I let rails create it when I used the generate command.

### Migration
The second thing that we got is in the db folder, with a migrate folder that has a file in it that has a really long name which is actually a timestamp of when I ran the command.  This is the file that is going to allow us to ultimately create the table.  A migration is how we interact with the database or the middle person so to speak between us and the computer's database. 

So if look closely, we should recognize some of this code.  We can see that this is a class that inherits ActiveRecord, we have a method that is defined as change, so it is going to do something.  We have a helper method called create_table, and a Ruby block.

When we run this, a table in our databse will be created.

To do this, we run `$ rails db:migrate`

We now have a table called schedules.

### Schema
Now that we ran our migration file, we can see that a new file has been created called schema.rb.

This file is a representation of our database. This is not the database itself, so we can't go in here if we make a mistake and try to change something, this is a read only file that shows you how your databse is setup.  To modify the database, you would need to create another migration which we will get into tomorrow.  So, you don't edit this file directly, but it is great to reference and check to make sure your database is setup correctly.

## Interacting With Data
So now that we have our database setup, we now want to be able to add data into our database.

To do this, we need to interact with our database directly.  Since we have the structure of our database setup in rails, we won't be needing to interact with the application itself anymore for today, but we will be interacting with our terminal for here on out.

Similar to going into ruby console or postgres consoles, we are going to use something called rails console to interact with our database.

`$ rails c`

Looks just like irb consoles, but I can make queries using active record and interact with my database.

To start, I have the class Schedule and I want to check all of my instances:

```ruby
> Schedule.all
```
What this is actually doing and we can see here that it is translating into a sequel query, which should look pretty familiar.  So Active Record is doing the sequel translation and we can interact using just Ruby code.

Currently it returns an empty array.

## Adding Data
```ruby

> Schedule.create(day: 'Thursday', date: '2022-07-14', event: 'Office hours')

```
Since all of our instances in the database needs to be unique, Active Record automatically creates an id for free or primary key.  Rails also provides created and updated at time stamps out of the box.  Don't need to worry about those or modify them ever, this is something Rails handles and can come in handy at times when we want the most recent updated instances.

Let's add a few more things:

```ruby

> Schedule.create(day: 'Thursday', date: '2022-07-14', event: 'White board practice')

> Schedule.create(day: 'Friday', date: '2022-07-15', event: 'Week 5 assessment')

> Schedule.all
# Shows all of the instances!
```

## CRUD
So when working with data, we always want to keep in mind CRUD

Create: create method and passing key value pairs

Read: 
   - .all method returns all instances in the database
   - .first gives us the first instance in the database
   - .second
   - .last
   - .find(1) returns an instance based on the primary key
   - .where(event: 'Office hours') will find based on the key value pair that is passed in and returns a set and returns all of the instances that match it.

  ** Update and delete are a little different in that they need to know exactly which instance we are working with **

Update: 
  - First I need to create a variable to store the instance that I plan on modifying.  

```ruby
> assessments = Schedule.last
> assessments.update(event: 'Assessment')
> assessments # returns the modified instance
```
  - The variable is only available until we exit out of the console.  Any modifications to the data itself though will persist.

  ** The syllabus has a different approach to update that will also work! ** 
```ruby
> office_hours = Schedule.find 1
> office_hours.event = 'Super awesome office hours!'
> office_hours.save
> office_hours
```


Delete: 
  - Once again I need to set this up in the same way I just did then call on the Ruby method destroy.  

```ruby
> assessments = Schedule.last
> assessments.destroy
> Schedule.all # shows the last entry is gone
```

