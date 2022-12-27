# Rails Generate Resource / Postman / Intro to Wildlife Tracker

As we know, Rails follows the MVC architecture.  We have now worked with all three making a full stack application. 

It is not uncommon to build the backend, or the Model and Controllers in Rails and then utilize a different framework for the View which is an approach we will be taking for the rest of our projects.  For the next day, we are going to be working on building our own API, which will only make use of the Model and Controller side of Rails.

API (Application Programming Interface) - responsible for transmitting information across the internet as JSON 

JSON (Javascript Object Notation) - data structure that is supported by most programming languages and modeled off of JavaScript.  We will take a look at what this is shortly, but it will look pretty familiar. 

## Getting started
Each person will get a github classroom link where we will be building a Wildlife Tracker API.  This project will be built individually, so no pairs this time around.  

We are going to start the project by clicking on the wildlife tracker assignment.  

  - Accept assignment
    - We are given an empty repo

  - Create new Rails app
    - `$ rails new rails-api -d postgresql -T`
    - `$ cd rails-api`
    - `$ rails db:create`

  - Now I need to connect my rails app to my GitHub repo
    - Follow steps for push an existing repository from command line
      - `$ git remote add origin https://github.com...`
      -
      - `$ git branch -M main`
      - git add, commit, push 

  - Next, I need to add Rspec
    - `$ bundle add rspec-rails`
    - `$ rails generate rspec:install`

  - Check server
    - `$ rails s`


## Student Tracker
While you will be building a wildlife tracker, I am going to be building a student tracker that has the name of the student and the cohort they are in.

In the past, we have used several rails generate commands to create our models and controllers.  Today we are going to use a magical command that is going to create files for our model, controller, views, routes, and respective rspec files as well. 

We are going to write it very similar to how we would write our generate model command, providing the model name and the columns with their data types.

  - `$ rails g resource Student name:string cohort:string`

  - This gives us:
    - Migration file
    - Model
    - Rspec folder
    - Controllers
    - Views
    - Helpers
    - Resources route

Since we are making an API and have no need for the views, lets go ahead and delete the view that was just created

 - `$ rm -r app/views/students`

Most of what we just created, we are pretty familiar with at this point, we have just used separate commands to create them, however there is one thing that was generated that we haven't seen before and that is Resources Route.  So let's explore what this is.

  - Open text editor
  - /config/routes/rb

  `resources :students` - This sets all of our RESTful routes for us!  

First, let's run our migration
  - `$ rails db:migrate`

Next let's take a look at the routes that resource gave us
  - `$ rails routes`
  This is an informational command that will tell us the routes that exist in our application.  We have all of our GET, POST, PATCH, PUT, DELETE already setup which saves us a ton of work!


### Create Some Data
Since we have our Model setup, our Controller created, and the routes already written, we can start adding in some data.

  - `$ rails c`
  > Student.create(name:"student", cohort:"cohort")

  - Make several instances
  > Student.all

### RESTful Routes
Now that we have some data in our database, we need to think about our RESTful Routes

- Index: get's all instances
- New: form
- Show: shows one thing
- Update: updates existing data on one instance
- Create: adds new instance to database
- Edit: form
- Destroy: deletes instance from database

Since we are not including a view, we don't need the forms so we only need:

- Index
- Show
- Create
- Update
- Destroy


### Index

```ruby
  def index
    students = Student.all
    render json: students
  end
```

No need for instance variable since we are not using a view. We can just use a regular variable.

While I am pretty sure this method will work, how can I be sure if I don't have a view?  Cue our new friend Postman!

### Postman
Postman is a GUI that allows us to be able to display the data we want to interact with.  Essentially a view for our API.

- You may need to login or create an account.
- Create new
- We want an HTTP Request

We can see at the top that we have our HTTP verbs, a place to write a url, and a send button.

- Run server `$ rails s`
- URL: localhost:3000/students
- Make sure you have it set to JSON
- Send shows us all the instances as JSON!
- We can also see our progress in our terminal


### Show
```ruby
  def show
    student = Student.find(params[:id])
    render json: student
  end
```

Postman: 
- URL: localhost:3000/students/1
- Send shows us all the instances as JSON!


### Create
```ruby
  def create
    student = Student.create(student_params)
    if student.valid?
      render json: student
    else
      render json: student.errors
    end
  end

  private
  # strong params
  def student_params
    params.require(:student).permit(:name, :cohort)
  end
```

Postman:
- Change request to POST
- URL: localhost:3000/students
- Select: Body, Raw, Text -> JSON
- Setup params:
  ```json
  {
    "name": "Frank",
    "cohort": "Golf"
  }
  ```

Looks like I am getting an error.  When I see html show up instead of JSON, it means there is a problem.  I can click on Preview to see the error.  Looks like I need to disable my authenticity token.  For that, I will head to my syllabus.

/app/controllers/application_controller.rb
```ruby
skip_before_action :verify_authenticity_token
```

Currently our Rails app has some trust issues, understandably so in this day and age.  So while we are in development, we can disable it's trust issues so that we can interact with Postman.


### Update
```ruby
  def update
    student = Student.find(params[:id])
    student.update(student_params)
    if student.valid?
      render json: student
    else
      render json: student.errors
    end
  end
```

Postman:
  - Set URL: localhost:3000/students/2
  - Set to PATCH request
  - Update params
  - Send

### Destroy
```ruby
  def destroy
    student = Student.find(params[:id])
    if student.destroy
      # While in postman, so we can see some kind of response, we can render student.  You would not want to do this when keeping in mind user experience down the road.  
      render json: student
    else
      render json: student.errors
    end
  end
```

Postman: 
  - Change request to delete
  - Change URL: localhost:3000/students/2
  - We can see the student that was just removed show up
  - To double check that this request was successfully, let's do a get request to see all students