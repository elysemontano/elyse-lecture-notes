# Views Routes Controllers 


# Learning Objectives - the code
- Understanding the anatomy of a Rails route
    - Identifying the 
        - url
        - the controller
        - the method

- Using generate to create a controller
    Creating methods in the controller

- Creating a view with html.erb

- Linking between views
 link_to

# Vocabulary
controller
view
routes
erb


Sarah: https://www.youtube.com/watch?v=XGQr2PnKgJU

# Lecture
Today were going to be talking about Views and Controllers.  Last week and yesterday we were working primarily with the Model, but now we want to explore the other 2 parts of the MVC architecture.

1. Views - What can be seen by our user 
2. Controllers - Coordinates the interaction between the user, the views, and the model.
3. Routes - How our user gets somewhere where they can see something

We have already worked with the view before in React, which just boils down to what the user sees.  Today though we are going to think of the view as a bi-product of the controller methods and routes, so they are going to be kind of ugly for today.

# Controller 
The controller is what directs our application.  So it is going to collect data from the database and then tells our application what view to render on the page. The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.

A controller is going to be a class that will have multiple methods called by the route, and then the route is the path that is given in the url

So when you access a website, you will have a url.
This is basically an address for us to send and receive data to an application.

    - Let's go to a website we all know pretty well, github.com

    - This address for github is a URL : Uniform Resource Locater. When I send a GET request to the server of github it sends me back a 200 code and some html to display

    - A controller is handling this action for giving me the 200 code and html

So the flow is: Route calls the controller method that then pulls the correct data and displays the right view.

# Getting Started
As always we are going ot need a to make a rails app
```
    $ rails new controllers_routes_views -d postgresql -T
    $ cd controllers_routes_views
    $ rails db:create
```
I want to spin up my server today since we will be working with this side of things today and kind of leave the model out of it for today.
``` $ rails s```

We have used generate commands so far, primarily to generate migration files and a model, but we are going to use generate to create our controller file.

This generate command makes a number of item for us but the two we need today are our view folder and our newly built controller. We can delete the stylesheet and the helper file for now. 

We will name it the same way as the model since it is a class.  

``` $ rails g controller Home ```
        
      create  app/controllers/home_controller.rb
      invoke  erb
      create    app/views/home
      invoke  helper
      create    app/helpers/home_helper.rb
      invoke  assets
      invoke    scss
      create      app/assets/stylesheets/home.scss
      
### Review the files
 $ code .

Let's keep a tidy application - for today I am going to delete the scss file and the helper file as I won't be needing them

 > delete app/assets/stylesheets/home.scss
 > delete app/helpers/home_helper.rb


Let's add some content in our controller:

The file we will add controller methods in is:
/controllers/home_controller.rb
```ruby
def greeter
    render html: 'HI!'
end
```
Currently the only job of this method is to render html that says "HI!"

So we've made and named a method now we need to call our method somewhere, but we need to be particular where because ultimately we want this to render on the page for our user to see.  So we need to connect our method to the URL 

# The Routes
In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A routes.rb file in the config folder is created when you run rails new. This file is intended to house all valid urls in your application.

config/routes.rb
```ruby
 # HTTP verb, url (location),  hashrocket,  controller, methods 
get '/name_of_route' => 'name_of_controller#name_of_method'

get '/greeter' => 'home#greeter'
```

- Now if I navigate to my url and add /greeter, I will see HI! render on the page.

- Adding /greeter to the url is a request, which means if it exists in my routes, it will run the controller and go through all the motions.
In fact, I can see that motion happening in my terminal that has my server running.


** WHAT IF WE ADDED ANOTHER ROUTE TO OUR FILE WHAT WOULD WE NEED TO DO?

 ### Let's go back to the controller and add the necessary method in the controller. 
```ruby
def joke
    render html: 'Two SQL tables are sitting at a bar. A query walks and and asks, may I join you?'
end
```

Now we need to make a route for this:

config/routes.rb
```ruby
 # HTTP verb, url (location),  hashrocket,  controller, methods 
get '/joke' => 'home#joke'
```

Obviously, having a method display a single line of html is going to be very limiting down the line, so let's make anohter method in a different way that leads to a more dynamic setup.

This time around, instead of rendering html, we are going to render a view.  We already have a view that has been created when we ran the controller method that is setup automatically to communicate with this particular controller.

```ruby
def current_cohort
end
```
Currently in the view/home folder, there is nothing that lives in here just yet, because I can create a file that will correlate directly to the controller method that I am creating.  So in this case, I have a method called current_cohort, which means I can create a file in this folder called current_cohort.html.erb
This references the name of the method in the controller

ERB - Embedded Ruby: views can have Ruby values in them and even evaluate some Ruby logic!
> view/home/current_cohort.html.erb

```html
<h1>Hello!</h1>

<h2>Cohort is a pretty awesome group!</h2>
<ul>
  <li>Student 1</li>
  <li>Student 1</li>
  <li>Student 1</li>
</ul>
```

Since we named our view files the same as the controller method, this makes it so that Ruby will automatically look to render that file when the method is called.

Rails is making some assumptions here because of how we have setup our naming and will automatically render that view if we set this up correctly.  This is some of that Rails magic I was talking about last week.  If you follow the naming conventions closely, Rails will do some of the stuff for us.

Now we need a route. If I don't make a route and I try to navigate to a page called current_cohort, I will get a routing error.  This will likely not be the last time you see this, and so it is good to know what this error looks like and why it comes up.

config/routes.rb
```ruby
 # HTTP verb, url (location),  hashrocket,  controller, methods 
get '/current' => 'home#current_cohort'
```

# Recap 1
So to recap so far we have
- made an app
- created a db
- generated a controller
- set up our controller that displays html
- set up some routes
- bounced back and fourth a bit making methods and routes

 #### -- 10 min break --

# The View
Inside the file we are going to have new syntax to learn which is how we embed our ruby.  Before we jump in there, let's give our method something that our view would like to display that is in Ruby.

Let's add an instance variable to our controller method current_cohort
```ruby
def current_cohort
  @current = "The amazing people of current cohort 2022!"
end
```

/views/food/current_cohort.html.erb

```ruby
<p> <%= @current %> </p>
```

We can call on this instance variable now in our new ruby tags inside the html.erb associated with this method.

This syntax allows us to drop Ruby code directly into html.  You can think of it almost like entering Javascript land in JSX.

## What if we have some data that we want to display to our user in a meaningful way?


```ruby
def current_cohort
  @students = ["list", "of", "students"]
end
```

## "each do" in HTML ERB
app/views/ControllerName/method_name.html.erb
```ruby
<ul>  
<% @students.each do |value|%>
    <li> <%= value %></li>
<% end %>
</ul>
```


# Landing Page

Since we don't want to have to type the url as a user, cause that does not give towards a really good user experience, lets make some links for our user to follow on a landing page.

```ruby
def landing
end
```

## Root_to

In routes I want to make a landing page for my user so they see what they want as soon as they navigate to my site so in my routes I am going to add my root
```
get '/landing' => 'home#landing'
root to: 'home#landing'
```

# Landing View
There is a Ruby helper method called link_to that will take 2 arguments (an anchor, and a path)

/views/food/landing.html.erb
```html
<h1>Welcome to this App!</h1>
<%= link_to "Greeter", "/greeter" %>
<br/> 
<%= link_to "Joke", "/joke" %>
<br/>
<%= link_to "current Cohort", "/current" %>
```


# Recap 2
So to recap so far we have
1. made an app
2. created a db
3. generated a controller
4. set up our controller
5. set up some routes
6. bounced back and fourth a bit making methods and routes
7. rooted one of our routes
8. made a couple of views
9. mapped our controller to our views
10. we set up instance variables in our methods that our views can call on
11. we linked our views together
