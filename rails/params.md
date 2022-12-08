# Params

Quick recap from this morning:
The controller is what directs our application.  
- They can collect information from the database
- Have local variables inside the method
- Will be in charge of displaying the view

Ultimately, the URL triggers the Route.  The Route calls on the Controller method.  The Controller method says which view should be displayed and the content to show.

We can also navigate to different pages by changing the URL.  When navigating through an application, you will often need additional information that may not be available inside your controller.  In other words, we may need information from an external source to allow more dynamic results.  The URL is a place that we can pass some information, much like passing an argument to a function.  These are known as URL parameters (params for short) or query strings.  This allows us to pass additional information into a controller method so we can either query the database or dynamically modify the view.


## Getting Started
Let's create a new app so we can take a closer look at this

```
$ rails new params -d postgresql -T
$ cd params
$ rails db:create
$ rails g controller Home
```

First, let's start with a method
```ruby
    def food
    end
```

Let's create a new file that follows the naming convention in our controller.
/app/views/home/food.html.erb

```ruby
<h1> We like food!</h1>
```

Start rails server:
```
$ rails s
```

To see the view that says I like eating food, how do I view this?  I would want to navigate to localhost:3000/food

But I am getting a Routing Error.  Rails is really great at telling me if I am missing a key step and I certainly am!  I have not created a route for food.


/config/routes.rb

```
get '/food' => 'home#food'
```

I now can see my beautiful view!  In the terminal, I can actually see the process that is happening where it runs a get request, calls on the controller and then renders the view creating a 200 status.  Wonderful!

Now that this is working, let's change this up a little bit.  In the controller, let's create an instance variable so we can display it in the view


```ruby
    def food
        @my_food = "Smoked mac and cheese"
    end
```

I can then display this on my page using embedded Ruby syntax

/app/views/home/food.html.erb
```
<h1> We like food!</h1>
<h3> My current favorite food is <%= @my_food %> </h3>
```

Here's the thing, my current favorite food may change.  So what if I want to display something different without having to hardcode a variable in my controller?

So let's head back to our controller and instead of hard coding our variable, we can accept information in our method as a param and name it as a symbol.


Refactor to Using Params:
```ruby
def food
  @my_food = params[:fav_food]
end 
```

So essentially, I want my controller to look for this value to be coming in from the URL and save it as an instance variable.

To pass this information in the URL, we can use a question mark which is kind of like WHERE.  It sets up a param query.

Parameter query: we can change the value of the param `:fav_food`
url: http://localhost:3000/food?fav_food=spagetti



## Update Routes

While this is working, currently we are not really telling our routes that we will be expecting additional information so as a result we were having to write that we were expecting information directly into the URL.  We can modify our Route to simplify this and allow the route to handle grabbing the information for us.


  Refactor to Ensure We Get Params:
```ruby
Rails.application.routes.draw do
  get '/food/:fav_food' => 'home#food'
end
```
url: http://localhost:3000/food/spagetti



When we look in the terminal, we can break this down and to see what is happening.
We have our information passing into our program as a HASH.  An important note, is that params will always be passed as strings since it is an easy way to wrap up information and pass it.  This will be important later on when we are working with these params and perhaps will need to modify the datatype to a number.

    Started GET "/food/spagetti" for ::1 at 2022-01-18 19:40:07 -0800
    Processing by Home#food as HTML
      Parameters: {"my_fav"=>"spagetti"}


In fact, let's try passing numbers and do something with them!

### Numbers as Params
I am going to make a new method that will allow me to order some food.  I will first need to start with the quantity

```ruby
def order
  @food_order_quantity = params[:number]
end
```
I need to set up a view that will connect to this method

/app/views/home/order.html.erb
```
<h1>My Food Order</h1>
```

We also need to setup a route
```
get '/order' => 'home#order'
```
url: http://localhost:3000/order

Great!  This displays something, but now let's update so that we can pass information in our param.

```ruby
get '/order/:number/' => 'home#order'
```

Let's say we want to display our quantity differently if the amount is over 100.  We can use a conditional statement to change our output and store that in an instance variable we can call on in our view.

```ruby
def order
  @food_order_quantity = params[:number]
  if @food_order_quantity > 100
    @quantity = 'a ton of food'
  else
    @quantity = @food_order_quantity
  end
end
```

```
<h3>I have <%= @quantity %> orders in my cart</h3>
```
url: http://localhost:3000/order/8

Parameters: {"number"=>"8"}


This throws an error because we are trying to use a mathematical operation on a string.  So we need to convert @food_order_quantity to an integer using .to_i

```ruby
def order
  @food_order_quantity = params[:number]
  if @food_order_quantity.to_i > 100
    @quantity = 'a ton of food'
  else
    @quantity = @food_order_quantity
  end
end
```


Let's expand this a little further by adding additional parameters to this method.

```ruby
def order
        @food_order_quantity = params[:number]
        @food_item = params[:item]
    end
```

We need to update our routes so we can accept all of these parameters
```
get '/order/:number/:item' => 'home#order'
```

Now we can display these instance variables
```ruby
<h3> order for <%= @quantity%> <%= @food_item%> in my cart</h3>
```

Parameters: {"number"=>"5", "item"=>"steaks", "shop"=>"longhorns"}

# Overview 3
So to recap so far we have
1. Create Rails app
2. Created db
3. Generated controller
4. Create method in controller
5. Create view
6. Create Route 
7. Mapped our controller to our views
8. Set up instance variables in method that calls on view
9. Set up params to define a variable and display it
10. Did some logic with our params (remembering that params always come to us as a string)
11. Create multiple params by listing them all out in our routes and controllers
12. Create params which are keys to a hash and the value of the key value pair comes from the URL