# Rails Associations
Up to this point, we have been working with databases that have a structure of rows and columns, like an excel spreadsheet.  There will always be an id for one of the columns that Rails automatically generates for us when we create our models. Otherwise, all other columns we setup needs to be given a name and we define the data type for that specific column.  

In Rails, we can also define the relationship between related tables by something called Associations.  Let's take a look at how his works.

** Use Slideshow **

In here I have the basic structure of a postgres database, with columns and rows.  So let's say I want to build a table that helps me keep track of cohorts and the students associated with the cohorts. 

- Let's just call my table or model Cohort.

- I can have a cohort_name column and have several instances of cohorts like Golf, Alpha, and Bravo.

- Rails also automatically gives us a primary key called id to uniquly identify each row in our database.

Here is where we run into a dilema though. 
-  To add all the student names to a cohort, currently I am limited to adding extra columns

The problem with this is that if I have 20 students in Alpha, but only 18 in Golf, I will end up with null values in some of my cohorts because I have created 20 columns for names, but only 18 are being used for Golf.  As we discovered when we were working with SQL queries the other day, null values are not really fun to work with in a database.  They can also be pretty inefficent.  If I wanted to add more information, like a student's email or phone number, I am now running into a pretty unorganized database.  Which the beauty of databases is that they are great for keeping data organized and easy to query.

To solve this problem 
- We can create a second table where we can seperate the data into two tables where we can have information about the cohort on one table, and information about the students in another table. My cohorts will have their own primary keys

- My student model will also have their own primary keys and each individual student.  

But how do I connect these tables together?  Enter associations!

We know that Aaron and Brandon are in Alpha
- so I want to tie these two instances to the Alpha cohort in the Cohort model.  

- I also want to tie Blake and Garrett to the Golf cohort

- To do this, we can link link the students to their cohorts using something called a foreign key. Just like how we have a primary key as a unique identifier for each instance, we have a foreign key to setup the connection.  

The naming convention of the foreign key is the model you are referring to, an underscore, and id.  Unlike primary keys, Rails will not automatically name this column for you.  The foreign key will be the primary key of the instance you are connecting to.  In this case, Aaron and Brandon will have a foreign key of 2 since that is the primary key for the Alpha cohort instance.

- This relationship in Rails is known as has_many belongs_to relationship.  The cohort has_many students and students belongs_to a cohort.  The foreign key is always on the belongs_to model and it's data will be the primary key of the has_many model you are referencing.


# Has_many / Belongs_to in Active Record
** Pull up Active Record Associations documentation and mention that there are many and to explore some of them at some point **

## Concepts
- has_many belongs_to relationship
- foriegn key connects the two tables
- foriegn key lives on the belongs_to side
- foreign key data is primary key of table you are connecting

## Setup
So let's explore a practical application of this.  To do this, I am going to spin up a rails app.

`$ rails new associations -d postgresql -T`
`$ cd associations`
`$ rails db:create`

Now I need to create the structure in which I want my data to be in inside my database.  In this example, we are going to revisit the cohort example and generate a model for both cohort and student.

`$ rails g model Cohort name:string year:string`

Doing this created 2 files, one in our model and the other in our migration folder, but the change hasn't taken just yet.  There is one more step.

`$ rails db:migrate`

Now that I have the cohort table, I need something else based on what we did earlier.  I need a student table.  When creating this table, it is important for me to understand the relationship between the tables because this will affect how we structure our model. For instance, because we drew out these tables, I know that I need name and also cohort_id for the foreign key, because Rails does NOT do that for us.

`$ rails g model Student name:string cohort_id:integer`
`$ rails db:migrate`

** Check schema **

## Setting Up Relationship in Models
So now we need to tell our Rails app that there is a relationship between these two tables, and what that relationship is.  

- app/models
In the models folder, I have two files that pertain to my two different models.   

Let's start in cohort.rb where we have this class that inherits from ApplicationRecord already setup for us.  Cohort has_many Students, so we need to write this into this file.


In this case, we write has_many followed by the symbol of the other model we are referring to in plural.

```ruby
class Cohort < ApplicationRecord
  has_many :students
end
```

Now let's setup our Student file

```ruby
class Student < ApplicationRecord
  belongs_to :cohort
end
```

Now that we have our relationship setup, let's head on into our Rails console and add some data.

`$ rails c`

```ruby
> Cohort.create(name:'Alpha', year:'2021')
> Cohort.create(name:'Delta', year:'2022')
> Cohort.create(name:'Alpha', year:'2023')
```

Alright, so now we have to add some students, but I also need to consider the foreign key as well, or how I intend to associate the student to a cohort.

If I create a student without the cohort_id, I will be creating a nil value, which causes problems and defeats the purpose of having this association setup.  We also don't want to hardcode the number either.  Rails gets pretty upset when we start to manipulate primary keys and foreign keys, because Rails wants to handle it for us.


So first, let's set a cohort to a variable so that I can use this information to attach it to the student creation.
```ruby
alpha21 = Cohort.find(1)
```

I can now access this particular variable, but let's try something real quick. Interestingly enough, I get back an empty array when I run alpha21.students

```ruby
alpha21.students
```

Rails is not yelling at me because this is valid and accessing that table.  Since I don't have any students, I will have an empty array.

So let's try using this to create an instance for student.

```ruby
alpha21.students.create(name: 'Elyse')
```

Nice!  This worked!  We can see that it automatically connected the appropriate foreign key to this.

Let's do a few more:

```ruby
delta = Cohort.find(2)
delta.students.create(name: 'Nicole')
delta.students.create(name: 'Gene')

alpha23 =  Cohort.find(3)
alpha23.students.create(name: 'Aaron')
alpha23.students.create(name: 'Brandon')
```