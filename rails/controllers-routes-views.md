# Views Routes Controllers 
### Alright in this talk we have a lot of moving parts and they all need to work in harmony for our goals to be accomplished. By the end of the day y'all will be maestro's 

Today were gonna be dealing with One idea that comes to us in four parts. What do our user's see when we are working in a rails app? 


1. Views - What can be seen by our user 
2. Routes - How our user gets somewhere where they can see something
3. Controllers - What our user will end up seeing or doing with what they see
4. Params - How our user can see different things and interact with different things
 

# Getting Started
As always we are going ot need a to make a rails app
```
    $ rails new food_app -d postgresql -T

    $ rails db:create

    $ rails g controller Food
```
- The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.
        
      create  app/controllers/food_controller.rb
      invoke  erb
      create    app/views/food
      invoke  helper
      create    app/helpers/food_helper.rb
      invoke  assets
      invoke    scss
      create      app/assets/stylesheets/food.scss
      
### Review the files
 $ code .

Let's keep a tidy application - for today I am going to delete the scss file and the helper file as I won't be needing them

 > delete app/assets/stylesheets/food.scss
 > delete app/helpers/food_helper.rb
 
# Overview - Goals
- Generating a view for the user

- Navigating between views

- Understanding the basics of creating a request response cycle in Rails

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

# Rails Response 
In order to respond to a server request Rails has three tools that work together like an orchestra

The Controller
The Routes
The Views

We are going to look at each of these and set them up to work together. 



# The Controller
The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.

```
    $ rails g controller Food
```

This generate command makes a number of item for us but the two we need today are our view folder and our newly built controller. We can delete the stylesheet and the helper file for now. 


### The controller:
 - is responsible for routing external requests to internal actions. It handles people-friendly URL's extremely well

    - You might be familar with the URL already but if you aren't you may want to take a moment to navigate to your favortie website

    - most days of the week mine is the economist.com

    - This address for the economist is a URL : Uniform Resource Locater. When I send a GET request to the server of the economist it sends me back a 200 code and some html to display

    - A controller is handling this action fo giving me the 200 code and html

 - manages caching
 - manages helper modules, which extend the capabilities of the view templates without bulking up their code
 - manages sessions, giving users the impression of an ongoing interaction with our applications

but the file we are going to be working today is

/controllers/food_controller.rb
```ruby
def tacos
        render html: "Austin's favorite food is Torchy's Tacos and Green Chili Queso"
    end
```
So we've made and named a method now we need to connect our method to the URL 

# The Routes
In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A routes.rb file in the config folder is created when you run rails new. This file is intended to house all valid urls in your application.

config/routes.rb
```ruby
get '/name_of_route' => 'name_of_controller#name_of_method'

  get '/best_food_ever' => 'food#tacos'
 #verb,   url,  hashrocket,  controller, methods 
  # get '/name_of_route' => 'name_of_controller#name_of_method'
```

SPEND EXTRA TIME SHOWING THIS AND HOW IT CONNECTS THE CONTROLLER TO THE URL
 - HTTP VERB  get, put, post, delete
 - URL
 - Name of Controller
 - Name of Method in Controller

    ### WHAT IF WE ADDED ANOTHER ROUTE TO OUR FILE WHAT WOULD WE NEED TO DO?

 ### Let's go back to the controller and add the necessary method in the controller. 
```ruby
def new_food
    render html: "____s favorite food is _____"
end
```
So we've bounced back once lets bounce again over to routes 

##  ~~~~~~~~
##  ~~~~~~~~ DOWN HERE
## Root_to

In routes I want to make a landing page for my user so they see what they want as soon as they navigate to my site so in my routes I am going to add my root
```
root'food#nachos'
```

# Recap 1
So to recap so far we have
- made an app
- created a db
- generated a controller
- set up our controller to maps to some html
- set up some routes
- bounced back and fourth a bit making methods and routes
- rooted one of our routes

 #### -- 10 min break --

# The View
So far our routes and controllers are only returning a basic string from the controller method. But, we probably want to make more complex views.

The generate command creates a directory in the app/views named after our controller. 


So we go into app/views/the_name_of_our_controller
and we create a file called... 


...views/food/tacos.html.erb 


Please be careful here as some text editors will combine the folders layouts and (in this case food).

This references the name of the method in the controller
 - erb extension stands for embedded ruby. It means
 - that these views can have Ruby values in them and even evaluate some Ruby logic!


inside the file we are going to have new syntax to learn which is how we embed our ruby

this file also takes html tags so all you html wizards can have fun in here

```ruby
<%= Ruby code goes here %>

<h1> I LOVE NACHOS SO MUCH </h1>
```
But Austin, I hear you saying, How do we get these html.erb files to show up? How does rails know which one is which? Great question

We need to bounce back over to our controller and tell our controller that these views exist

```ruby
## add the render to controller 
    def tacos
       'tacos.html.erb'
    end
```
## We while we're here lets add an instance variable
```ruby
    def tacos
        @our_tacos = "ingredients: ..."
       'tacos.html.erb'
    end
```

/views/food/tacos.html.erb

```ruby
<%= @our_tacos %>
```

We can call on this instance variable now in our new ruby tags inside the html.erb associated with this method.


## What if we have some data that we want to display to our user in a meaningful way?


```ruby
    def tacos
        @our_tacos = ['carne asada', 'peppers']
        render 'tacos.html.erb'
    end
```
## "each do" in HTML ERB
app/views/ControllerName/method_name.html.erb
```ruby
<ul>  
<% @our_tacos.each do |value|%>
    <li> <%= value %></li>
<% end %>
</ul>
```


typing into the url the different pages is wack-- lets make some links for our user to follow.
bounce back to our ERB files and inside them we 
can put 


/views/food/home.html.erb
> <%= link_to "Tacos", "/best_food_ever" %>
> <%= link_to "other food", "/other_food" %>

/views/food/nachos.html.erb
> <%= link_to "Home", "/" %>


/views/food/other_food.html.erb
> <%= link_to "Home", "/" %>



boom we have an app that has links and different pages and even could use a db if we wanted 
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

ROUTES VIEWS AND CONTROLLERS have a lot of little parts. They all work harmoniously. If you run write down the step you are taking and as you run into issues trouble shoot by checking the pathways of the flow of information

# ~~~~~~~ BREAK ~~~~~~~~~~~~

Started with hard coded string
```ruby
    def random_food
        render html: "____'s favorite food is random_food"
    end
```

Let's create a new file that follows the naming convention in our controller.
/app/views/banana.html.erb

```ruby
<h3> I like eating random_food <%= @random_food_style %></h3>
```

```ruby
    def random_food
        @random_food_style = "banana's foster"
    end
```

So the problem with this set up is that it's hard coded. We don't have an ability to dynamically render something our user may want to give us. 

Refactor to Using Params:
```ruby
def random_food
  @random_food = params[:style]
end 
```
Parameter query: we can change the value of the param `:style`
url: http://localhost:3000//random_food?style=foster


  Refactor to Ensure We Get Params:
```ruby
Rails.application.routes.draw do
  get '/banana/:style' => 'food#random_food'
end
```
url: http://localhost:3000/random_food/foster

Param hash in console:

Started GET "/random_food/giberish" for ::1 at 2022-01-18 19:40:07 -0800
Processing by FoodController#bananas as HTML
  Parameters: {"style"=>"giberish"}


### Number of Food Items


quantity route
quantity view

```ruby
get '/order/:number/' => 'food#order'

def order
  @food_order_quantity = params[:number]
end
url: http://localhost:3000/order/8
```
Parameters: {"number"=>"8"}


Params are always the data type string. It doesn't matter what we want to define the value as the param will always be a string. 


```ruby
get '/order/:number/' => 'food#order'

def order
  @food_order_quantity = params[:number]
  if @food_order_quantity > 100
    @output = 'a ton of food'
  else
    @output = @food_order_quantity
  end
end
<h3>I have <%= @output %> orders.</h3>
```


```ruby
def order
        @food_order_quantity = params[:number]
        @food_item = params[:item]
        @shop = params[:shop]
    end

<h3> order for <%= @food_order_quantity%> <%= @food_item%> from <%= @shop%></h3>

get '/order/:number/:item/:shop' => 'food#order'
```

Parameters: {"number"=>"5", "item"=>"steaks", "shop"=>"longhorns"}

# Overview 3
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
12. we set up params to define a variable and display it
13. we did some logic with our params 
    13.a remebering that params are always come to us as a string
14. we can create multiple params by listing them all out in our routes and controllers
15. we create params which are keys to a hash and the value of the key value pair comes from the URL


# Routes, Views, Controllers

1. Views
2. Routes
3. Controllers
4. Params 

# Overview
- Understanding the anatomy of a Rails route
  -  Identifying:
       - url
       - the controller
       - the method

- Using the Generate command to create Controller
    - creating methods in the Controller

- Creating Views
    - linking the views to the controller

- Passing Params into the url and having them show up on the screen


# Terminal commands in order
```
$ rails new food_app -d postgresql -T -G
$ rails db:create
$ rails g controller Food
$ rails s
```

### HTTP Verbs 
- Post 
- Get
- Put
- Patch
- Delete

# The Controller
Takes class methods with a specific  naming convention. 

```
    def name_of_method
        Stuff method should know 
        stuff method should do
    end
```

```ruby
    def tacos
        render html: "Austin & Nicole love Torchy's Tacos"
    end
```

# The Route
```ruby
  http_verb '/name_of_route' => 'name_of_controller#name_of_method'
```
```ruby
  http_verb '/tacos' => 'food#tacos'
```

# Overview #1
- made an app
- created a db
- generated a controller
- set up our controller
- methods
- render keyword
- setup our routes
- using HTTP verbs 
- route in single quotes
- hash rocket
- name of controller
- and #
- name of method 

# The View

The generate command has created a folder/ directory in our app/views named after the name of our controller

app/views/food

in here we are going to make a new file with the extension "html.erb"

> app/views/food/method_name.html.erb

> app/views/food/tacos.html.erb

erb stands for "Embedded RuBy". A .html.erb or .erb.html file is HTML with Ruby code embedded in; Rails will evaluate the Ruby to add content to the file dynamically, and will output a "pure" HTML file for rendering.

## ERB tag
this one does not show up
```ruby
<% ruby code goes here %>
<%= ruby code you want to show up %>
```
also takes all HTML tags ever
```
<h1></h1> 
<h2></h2>
<ol></ol>
<p></p>
```

## link_to
/views/controller/home.html.erb
```ruby
<%= link_to "Tacos", "/tacos" %>
<%= link_to "Other method", "/other_method" %>
```
/views/food/tacos.html.erb
```ruby
<%= link_to "Home", "/" %> 
```
## Instance Variables in the Controller

```ruby
class ControllerName < OtherThing
    def method_name
        @instance_variable = ["Data","I", "Want", "Later", ]
    end
end
```

## "each do" in HTML ERB
app/views/ControllerName/method_name.html.erb
```ruby
<ul>  
<li>
<% @instance_variable.each do |value|%>
    <li> <%= value %></li>
<% end %>
</ul>
```

# Overview 2
1. Made an app
2. created a db
3. generated a controller
4. set up routes
5. set up the controller
6. made views - new file /app/views/controller_name/method_name.html.erb
7. controller, view, routes sync'd up
8. Set up instance variables in the controller that we can call on in the views
9. linked our views together
10. mapped over an array variable and displayed its contents


Started with hard coded string
```ruby
def random_food
  @random_food = 'random_food with extra sparkles'
end
```

Refactor to Using Params:
```ruby
def random_food
  @random_food = params[:style]
end

```
> get '/random_food' => 'food#random_food'
Parameter query: we can change the value of the param `:style`
url: http://localhost:3000/random_food?style=bananasfoster


  Refactor to Ensure We Get Params:
```ruby
Rails.application.routes.draw do
  get '/random_food/:style' => 'food#random_food'
end
```
url: http://localhost:3000/random_food/foster

Param hash in console:
Parameters: {"style"=>"foster"}


### Number of Sweaters
```ruby
def quantity
  @random_food_sweater_quantity = params[:number]
end
url: http://localhost:3000/quantity/8
```
Parameters: {"number"=>"8"}
Params are always the data type string


```ruby
def order
  @food_order_quantity = params[:number]
  if @food_order_quantity > 100
    @output = 'a ton of food'
  else
    @output = @food_order_quantity
  end
end
<h3>I have <%= @output %> orders.</h3>
```

Parameters: {"sweaters"=>"snowman", "hoodies"=>"roudolph", "mittens"=>"snowflake"}

# Overview 3
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
12. we set up params to define a variable and display it
13. we did some logic with our params 
    13.a remebering that params are always come to us as a string
14. we can create multiple params by listing them all out in our routes and controllers
15. we create params which are keys to a hash and the value of the key value pair comes from the URL