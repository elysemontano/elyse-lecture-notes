# Intro to Databases


## Classes
I first want to revisit what we learned yesterday about classes.
Let's say I want to setup a class that helps me keep track of students and what cohort they are in.

I would need to set up the class, use the initialize method and create some instance variables like name, cohort, and year.

```ruby
class Student
  def initialize(name, cohort, year)
    @name = name
    @cohort = cohort
    @year = year
  end
```

And then I will want to instantiate a new instance of the class


```ruby
Student.new("Blake", "Golf", 2022)
Student.new("Shannon", "Golf", 2022)
Student.new("Elyse", "Alpha", 2021)
```

So here, when I create a new instance, I am creating a new piece of data.  
Let's now think about how we can take this concept and apply it to a database.

Databases is a place where we can store data. When we are using databases, first we have to decide what is the structure I want to put data in, and then go and create the data


  Lets create a quick sheets document where we create some rows and collect some data about our learn students


## Models
  Just like we had a Student class, Student will become our model.  The model is the class or the structure of the data.  In this case, it will be a table where we have name, cohort and year as columns inside our table.  (Model defines the data)

  Once we have defined our model, we can add instances of that model (our rows).
   
   names       | cohort      | year
   _______________________________
    Austin     | Bravo       | 2020
    Elyse      | Alpha       | 2021
    Student    | Cohort      | 2022
    Student    | Cohort      | 2022


## Primary Keys
In here, each one of these instances are unique.  However, what would happen if we have two students in the same cohort with the same name?  Their information in the object would look the same, but they are two separate people that should be tracked independently.

So how do I keep track of each of these instances uniquely? 

In the past, we handled this by just assigning it to a variable when we would create the instance, but in a database table, we don't have the luxury of setting variables to each instance in a model.  We need another way to make these instances unique.  To do this, we are going to need another column that will help us keep each instance in our database uniquely tracked.  This column is called a PRIMARY KEY.

- A Primary Key is a unique identifier.
- Most of the time will just be a number

  primary key |    names     | cohort      | year
   _______________________________
            1  |  Austin     | Bravo       | 2020
            2  |  Elyse      | Alpha       | 2021
            3  |  Student    | Cohort      | 2022
            4  |  Student    | Cohort      | 2022


# SQL
General purpose programming languages - Javascript, Ruby
Domain specific languages - HTML, RSPEC, Postgres
Postgres:
  - is a domain specific language who's entire job is to talk to databases
  - Open source object relational database management system
  - flavor of SQL that has an oop approach
  since ruby is is very OOP 
  postgres is a very common pair for OOP languages
    - netflix
    - reddit
    - instagram
    - spotify
    - nasa space station

(Postgres is second most popular, following MySql)


  Storing data is one of the first things computers we designed to be good at.
  the punch cards your parents talk about were the data and program storage themselves
  Postgres was created at the university of CA Berkley as part of a government contract for creating large scalable relational data storage. The issue being that relational databases up to that point had a lot of bugs that hadn't been resolved. The project was released to the public in 1986 and by 1994 had taken the form that we are mostly familiar with today. 

# Version
Check the version of PostgreSQL on your machine:

 $ psql --version
 $ psql
 $ \l - lists all the dbs
q and exit to get back to file structure

In React, we would could fire up a server that is hosted only on your computer during development, with databases we are going to be doing the same thing.  We are going to be using databases that are stored directly on your computer and not available anywhere else yet.  So in other words, the databases that I have on my computer are unique and will not be the same ones that you have on your computer.

You can interact directly with you database through the console, however it is pretty clunky so we are going to use a GUI to help us interact with our database.

# PGAdmin - user interface for making queries to a PostgreSQL db

Any password - SDlearn123
Click into the side menu until you get to countries
Tool >> Query Tool

# Queries 
So today we are going to ask some questions to our database and retrieve the data as a result to those questions or queries.
  - A query can either be a request for data results from your database or for action on the data, or for both.

## Select From
So let's start by writing a query that will get us back all of the instances in the database.
Just like all other languages, there are specific keywords that we can use that more often than not we don't need to memorize, but know what we are looking for in documentation. It is best practice to write the Postgres keywords in uppercase, but the Postgres program is not case sensitive. It is also convention to allow each section of the query its own line.

The most basic query keywords are SELECT and from. 

SELECT takes an argument of what column headers we want to return. If we want all of the column headers to start with, we can use a shortcut where we will use the asterisk or splat *. 

FROM tells the database which table/ model/ class we are looking at. So today it will be country

```sql
SELECT *       <-- means all columns
FROM country;
```

- Go through the different columns and explain data.
- Point out Primary Key is not a number this time around


I want to talk about the philosophy of specific quires really quick. When we are in class most of our databases are not very large and don't have huge amounts of data. The point of queries are to be able to request specific data from a database and nothing extra. SOme databases can be huge, like for instance the billion users on Facebook and all of their posts from forever. I do not want to try to download all of that data every single time a user uses my application I want just the few users and posts that my user should be seeing at anytime. 

part of being a good developer is creating requests that only get the data we are looking for.

So to start the process of being more specific in our queries we can select different column_headers to return so that we are not looking at data that we don't need. 
A column header is the name of the column of data back in our excel or google sheet file. 

```sql
SELECT name, region, continent
FROM country;
```

## Limit 
 Limit only gives us the first selected instances in the database according the the query we have created
```sql
SELECT name, region, continent
FROM country
LIMIT 10;
```

Since I am limiting only the first 10 instances in the database, I need to be thoughtful of how I want to organize the data I am given as well so I see my desired results.

## Where 
  WHERE allows us to make decisions about the query.  In a sense, we are creating an evaluation that is true or false.  If it is true, we will see it show up, if it is false it won't appear in our result.

  ### =, !=, >, <, >=, <=, BETWEEN, LIKE, and IN, NOT, AND, OR.


    ```sql
    SELECT name, continent, population
    FROM country
    WHERE continent = 'North America'


    SELECT name, continent, population
    FROM country
    WHERE continent != 'North America'


    SELECT name, continent, population
    FROM country
    WHERE population < 1000000
    

    SELECT name, continent, population
    FROM country
    WHERE population < 1e6
    AND continent = 'North America'


    SELECT name, continent, population
    FROM country
    WHERE population < 1e6
    OR continent = 'North America'
    ```

  ### Like
  - Like will make an evaluation but instead of looking for a hard match, I can look for a variation of a string.  LIKE is a string matcher

  - LIKE will often be used in conjunction with a Wildcard operator '%' to represent any string character that might come before it. 

    ```sql
    SELECT name, continent, population
    FROM country
    WHERE continent LIKE '%America'
    ```

If at any point, I want to limit my results I can just tack on a LIMIT

    ```sql
    SELECT name, continent, population
    FROM country
    WHERE continent LIKE '%America'
    LIMIT 10
    ```

Doing this may not give us the exact order that we are looking for though and as a result will cut off some of the instances we wanted.  So now we want to look at how to ORDER our data.


## Order By
You can order the result set of a query by adding an ORDER BY clause. It will organize our data based on a particular order.

```sql
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
```

This will come back with it organized by the indepyear from least to greatest.

And now using a LIMIT can really help us here.  We can determine what the 10 countries with the earliest dependent year.


```sql
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 10
```

Or if I want to reverse this and find the most recent dependent year.


```sql
SELECT name, region, indepyear
FROM country
ORDER BY indepyear DESC
LIMIT 10
```

But it looks like I am getting back a bunch of NULL values which isn't super helpful.  This can unfortunately be a common thing that happens where we need to filter out any null values first.

```sql
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10
```


### As
- AS creates an alias or temporary column header that can be used for other queries.  Essentially we are creating a new column or creating a new set of data to work with.

```sql
SELECT name, surfacearea, population,
population / surfacearea AS population_density
FROM country
WHERE population != 0
```

Focus on getting the right data from your database and then work on displaying it is really important.

## Other items
There are a few other concepts that I did not cover in here.  This is where the syllabus can help you.