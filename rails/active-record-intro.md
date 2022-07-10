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

## Rails Generate Commands
  - Creates files and folders in a rails app the rails way
  - Active Record Datatypes (go to rails docs on dev.to)
    Since we are dealing with data, we will have some specific datatypes we will need to work with that are specific to Active Record.
  - We need to decide now the structure the database and what type of data will be stored


Generate command takes arguements
  - Class name will be in Pascal case and singular (Rails is very particular here!)
  - Name of columns and datatype

`$ rails generate model Schedule day:string date:date event:string`
invoked active record and created 2 files



Bravo 22:43