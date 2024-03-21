# FULL STACK!
Hooray!  We are looking at combining all of the knowledge we have from the Model, the View and the Controllers (MVC) to now bring them together into one Full Stack application!!  This is really exciting and a very big deal!

## Setup
Alright, so for challenges you will be building a blog application, but I am going to be creating a different application for this demonstration.  I will start by creating a new rails app on my computer:

`$ rails new full-stack -d postgresql -T`
`$ cd full-stack`
`$ rails db:create`

I also need to connect it to a GitHub repo, so let's do that next.  I need to accept my assignment.  Now I am given an empty repo on GitHub with some instructions.  We will follow the second instructions, mainly we just need the git remote add command since that will connect our repo that is on our local to this particular repo on our GitHub.

`$ git remote add origin <url>`
`$ git branch -M main`
git Trio to push the initial commit


Now that we are connected to GitHub, let's now take a look at the syllabus to help us out on what dependencies we need next.  We need to add in our friend Rspec into our application.

`$ bundle add rspec-rails`

This brings in all of the dependencies of the gem Rspec that we will need.  But we also want to create some files the rails way that pertain to Rspec.  For this we will use the generate command

`$ rails generate rspec:install`

Now that we have Rspec all dialed in here, we now need to create a model for us to work with in our application, so now we need to think about what we are going to build and the structure of the database.  We are going to build a book tracker where I can keep track of books I have, and books that I want, along with if I have read them or not. With this, I will only need 2 columns for now, name and read.

`$ rails generate model Book name:string read:boolean`
`$ rails db:migrate`

My next step in the syllabus since we have the model all setup, is to generate the controller.  Just remember that the name of the controller has to match the name of the model.

`$ rails generate controller Book`

Let's also check that everything is working just fine since we have done quite a few steps without running our server.

`$ rails s`

## Add some data
Now that our setup is complete, let's add some data for us to work with.

`$ rails c`

```ruby
> Book.all
> Book.create(name: 'The Da Vinci Code', read: true)
> Book.create(name: 'Dad Jokes', read: true)
> Book.create(name: 'Cracking the Coding Interview', read: false)
```

Great!  So now we have some data that we can interact with.  If we are thinking about the Rails architecture, we know that there are 3 key parts.  The model, the view, and the controller.  For this application, we pretty much just handled the model part.  Now let's focus on the controllers.

## Index
Let's start off with our index method. 

** Checkout index branch **

 Our index method is going to get a list of all the things in the model we are calling, in this case Book.  This will be a GET request if we are thinking back to our relative HTTP verbs, and would be part of the READ CRUD actions.

- lists all the things
- GET request
- read CRUD action

I like to start by writing my controller method, then write in the route and lastly setup the view.  So let's do that:

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
    end
end
```

Now that we have our index method, we need to think about how we would get all instances from the database, because that is the goal of this method.  When we would be in IRB, and wanted to get all instances we would write `Book.all`.  So that we have access to this result accross our application, we can assign this to an instance variable.

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end
end
```

That's it for the index controller method!  Now let's take a look at our route

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index'
    # root "article#index"
end
```

This route looks good, and I can try it out on my server as well.  However, when I go to localhost:3000/books I am getting a "No Template" error.  This is actually really helpful because it's telling us that we are missing the last step...our view!

So with that, let's create our view.  First thing we need to do is go to our views folder and we see a folder called book.  Inside this folder, we need to create a new file based on the name of the controller method we are working with, in this case index.html.erb.

```ruby
# app/views/book/index.html.erb

<%= @books %>
```

But currently this is displaying an active record relation, but we want to see each individual instance displayed of all the books.  Since that Active record relation contains an array, we can iterate on the array to display each instance on our page using some Ruby code.

```ruby
# app/views/book/index.html.erb

<h2>My Reading Tracker</h2>
<ul>
    <% @books.each do |book|%>
        <li><%= book %> </li>
    <% end %>
</ul>
```

Alright, this is bringing us a little closer, because now we are seeing each instance of the book, but it's still not useful information to the user.  What we want is the data that is inside these active record instances.  Ultimately, I only really want to display the name for now.  I can use dot notation to get a specific attribute to display.

```ruby
# app/views/book/index.html.erb

<h2>My Reading Tracker</h2>
<ul>
    <% @books.each do |book|%>
        <li><%= book.name %> </li>
    <% end %>
</ul>
```

Sweet!!  We just pulled information from our database and were able to display it on the page.

### Quick recap so far
- Controller method: holds active record query (Book.all)
- Route: defines the url ('books') and calls the index method
- View: 
    - iterated over Active Record array
    - added HTML for markup structure
    - Used dot notation to access the attribute to display
    - Displayed info!

** Push up to github **

## Show
Next up is our show method which will display only one item from our database.

** Checkout show branch **

- displays one item from database
- GET request
- read CRUD action

To call on one instance in the database in IRB, we often would use .find, but we are going to need to gather the id from our params passed in on the url.

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end
end
```

Next comes our routes:

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index'
    get 'books/:id' => 'book#show'
    # root "article#index"
end
```

And lastly, we need to take care of the view:
- Create a file called show.html.erb in views/book
- I also want to display all of the information on this particular page, including whether or not I have read the book.  Because I setup my read column to be a boolean, I can use some Ruby code to create a conditional statement and display "I have read <book name>" or "I have not read <book name>".

```ruby
# app/views/book/show.html.erb

<% if @book.read? %>
    <h3>I have read <%= @book.name %></h3>
<% else %>
    <h3>I have not read <%= @book.name %></h3>
<% end %>
```

Nice!!  This looks great!  We can take a look at each instance real quick to make sure our conditional statement works for each instance by modifying the url param.  

One thing to note, is currently the way I am navigating between the different instances isn't very user friendly.  A user wouldnt know to modify the param to view something specific, so we need to provide some kind of a navigation for our user.

Rails has the link_to helper method, but before we use that, we want to make sure that Rails is in charge of our navigation, so we need to change the route using something called an alias.

- The alias is almost like a variable that we can reference.

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index'
    get 'books/:id' => 'book#show', as: 'book'
    # root "article#index"
end
```

Now that we have our show route setup to have an alias of book, we can go back to our index.html.erb to make it so each instance shown is clickable bringing us to that instance's show page.

We can add link_to on our list item, which takes in two arguments, what you are linking to, and the path.  Since we setup the route to be called book, we can write the path book_path (the underscore path tells us that this is a route, specifically the show route).

```ruby
<h2>My Reading Tracker</h2>
<ul>
    <% @books.each do |book|%>
        <li><%= link_to book.name, book_path %> </li>
    <% end %>
</ul>
```

We are still missing something here though, because our show route requires a little more information.  We have to know which book we want to display, so we are going to need to pass the id to the path as well.  We can do this by taking the current instance of book, and use dot notation to access it's id.

```ruby
<h2>My Reading Tracker</h2>
<ul>
    <% @books.each do |book|%>
        <li><%= link_to book.name, book_path(book.id) %> </li>
    <% end %>
</ul>
```

Great!  Each instance has a link and brings us to our show pages.  But to make this a really good user experience, we also want a way for our user to navigate off of the show page and back to our index page.

Let's head back to our routes and create an alias for our index route and we can call it books.

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/:id' => 'book#show', as: 'book'
    # root "article#index"
end
```

Now we can go to the show page and add a paragraph tag with the link to method.

```ruby
# app/views/book/show.html.erb

<% if @book.read? %>
    <h3>I have read <%= @book.name %></h3>
<% else %>
    <h3>I have not read <%= @book.name %></h3>
<% end %>

<p><%= link_to 'All the Books', books_path %></p>
```

Awesome!  Now we have some user friendly navigation.  We can also see the process of what we did in action on our terminal as the server is running.

** Push up to github **

## New
Next up on our list is New which is a form for our user to add a new book.

** Checkout 'new' branch **

- displays a form
- GET request
- read CRUD

So let's start with the controller:

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end
end
```

Book.new is going to setup us up for our form.

Next up is routes:

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/:id' => 'book#show', as: 'book'
    get 'books/new' => 'book#new'
    # root "article#index"
end
```

Lastly, our view:
- Create a file called new.html.erb

```ruby
# app/views/book/new.html.erb

<h2>Add a new book</h2>
```

Let's check this out on the server before we move forward.  If I go to localhost:3000/books/new we are getting an error.  This is a really common error, but also a very important error.  It is showing us that it is looking for book with an id, but new doesn't need an id param.  This is where order matters in our routes.  So Rails will run top to bottom and will look for the route line by line till it finds something that matches.  However, just above our new route, we have one that is calling on dynamic params, and so anything following that Rails is going to think that that is the new norm.  How we fix this is by switching these two routes so new is before show.

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/new' => 'book#new'
    get 'books/:id' => 'book#show', as: 'book'
    # root "article#index"
end
```

Now if I reload, we are rendering our header! So now we can add in a form.  I oftentimes feel that writing forms from scratch can be pretty daunting, but Rails has some basic forms we can use in their docs.  Google: Rails forms (https://guides.rubyonrails.org/form_helpers.html)

Let's head back to our view and add in the form helper method:

```ruby
# app/views/book/new.html.erb

<h2>Add a new book</h2>

<%= form_with do |form| %>
  Form contents
<% end %>
```

I don't want form contents inside this, but if I scroll down in the Rails docs, I can find a form that has all the stuff I need, so I will replace Form contents with this and then modify the fields from query and search to name and submit.

```ruby
# app/views/book/new.html.erb

<h2>Add a new book</h2>

<%= form_with do |form| %>
  <%= form.label :name %>
  <%= form.text_field :name %>
  <%= form.label :read %>
  <%= form.check_box :read %>
  <%= form.submit "Add Book" %>
<% end %>
```

This right here is Rails doing some of the work for us.  We are just saying, these are the things I need, so create a form for me.

There is one more thing that we will need.  Currently, we haven't set this form up to send to any place in particular.  The form will appear, and I can interact with the form, but when I submit, the information doesn't have a place to go. 

So, on the Rails documentation, there is a section called 'Dealing with Model Objects' on the right hand side.  This has some forms that say form_with model: @article which is saying that it wants to send the information to a particular model.

```ruby
# app/views/book/new.html.erb

<h2>Add a new book</h2>

<%= form_with model: @book do |form| %>
  <%= form.label :name %>
  <%= form.text_field :name %>
  <%= form.label :read %>
  <%= form.check_box :read %>
  <%= form.submit "Add Book" %>
<% end %>
```

So we can see the form, but we still won't be adding it to our database just yet because we need the create method to handle that side of things.  

Lastly, let's add some navigation to this page from our index page.  I need to add an alias to my route.

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/new' => 'book#new', as: 'new_book'
    get 'books/:id' => 'book#show', as: 'book'
    # root "article#index"
end
```

Then I can create a link on my index page.

```ruby
<h2>My Reading Tracker</h2>
<ul>
    <% @books.each do |book|%>
        <li><%= link_to book.name, book_path(book.id) %> </li>
    <% end %>
</ul>
<p><%= link_to 'Add New Book', new_book_path %></p>
```

** Push to GitHub **

## Create
Let's work on create now.

** Checkout create branch **

- Adds content from the form to the database
- POST request
- create CRUD action

Let's take a look at our controller first. 

We want to allow our user to be able to add information to our database, but we have to protect what is being put into our database.  Validations is certainly one layer of protection that we can setup, but Rails requires us to add an additional protection for any content handed to our database by a user. What we want to do in the controller is make sure that the user can only interact with the model they are contributing to, and can only provide information to the set collumns we have setup for that model.

To do this, we need something called strong params.  Strong params is a method with the naming convention of the model_params, in this case book_params.  Inside the method, we will put params.require(:book).permit(:name, :read)

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create()
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
``` 

Now that we have setup our strong params, we need to invoke this method somewhere.  So if we look at our create method, we want to create a new Book, so inside the parenthesis we can pass our strong params.


```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create(book_params)
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
``` 

Now that we have our controller setup, let's look at our routes:

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/new' => 'book#new'
    get 'books/:id' => 'book#show', as: 'book'
    post 'books' => 'book#create'
    # root "article#index"
end
```

And this should make it so we are actually adding content into the database, however, we still dont have any navigation happening once we submit a new book.  Oftentimes when submiting a form, as a user you will be redirected to the index page. We can use a conditional in our controller that can help us redirect our user if they successfully submitted a book.

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create(book_params)
        if @book.valid?
          redirect_to books_path
        end
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
```

There is one last thing I want to add in my controller.  Our method book_params is currently available everywhere in my application, however, the only time I ever want this to be invoked is in my create and later update methods.  To create this extra layer of protection and lock this particular method from being used anywhere outside this file, I need to add private just above this method.

```ruby
# app/controllers/book_controller.rb

private
    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
```

It is important to make sure that only strong params are placed under private, because any method after this keyword cannot be invoked outside of this file.

** Push up code to GitHub **

## Destroy
With destroy, we do need to know which instance in our database we want to remove, so we will need to set this up in a similar way to show in our controller.


```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create(book_params)
        if @book.valid?
          redirect_to books_path
        end
    end

    def destroy
      @book = Book.find(params[:id])
      @book.destroy
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
```

Let's setup our route next.  In this, I am also going to give this route an alias so that I know what route to call on my view.

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/new' => 'book#new'
    get 'books/:id' => 'book#show', as: 'book'
    post 'books' => 'book#create'
    delete 'books/:id' => 'book#destroy', as: 'delete_book'
    # root "article#index"
end
```

Since destroy won't need it's own view, we do need a place that we can delete an item.  When we are on the show page, we already know the id of the instance we are on, and so adding a delete button on this view sounds like a good user experience.

Once again, Rails has a helper for a button as well that we can use called button_to.  One thing to keep in mind is that most web browsers will default to get and post requests, so in our button, we need to specify that we will be doing a delete request.

```ruby
# app/views/book/show.html.erb

<% if @book.read? %>
    <h3>I have read <%= @book.name %></h3>
<% else %>
    <h3>I have not read <%= @book.name %></h3>
<% end %>

<p><%= link_to 'All the Books', books_path %></p>
<p><%= button_to 'Remove Book', delete_book_path, method: :delete %></p>
```

As of right now, this works when I go back to my index page, but as a user, it is really helpful to have some kind of an action to show that I have successfully done the action.  Let's head back to our controller and add a redirect.

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create(book_params)
        if @book.valid?
          redirect_to books_path
        end
    end

    def destroy
      @book = Book.find(params[:id])
      if @book.destroy
        redirect_to books_path
      end
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
```

# Edit
Next up is edit, which is a form much like new, but this time we need to know which instance we are updating, so like show and destroy I will need params.

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create(book_params)
        if @book.valid?
          redirect_to books_path
        end
    end

    def destroy
      @book = Book.find(params[:id])
      if @book.destroy
        redirect_to books_path
      end
    end

    def edit
      @book = Book.find(params[:id])
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
```

Next, let's update our routes.  Edit is a get request, since it is only getting a form.

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/new' => 'book#new', as: 'new_book'
    get 'books/:id' => 'book#show', as: 'book'
    post 'books' => 'book#create'
    get 'books/:id/edit' => 'book#edit', as: 'edit_book'
    delete 'books/:id' => 'book#destroy', as: 'delete_book'
    # root "article#index"
end
```

Since we need params to know which instance we want to setup a form for, a good place to add this button is on the show page.

```ruby
# app/views/book/show.html.erb

<% if @book.read? %>
    <h3>I have read <%= @book.name %></h3>
<% else %>
    <h3>I have not read <%= @book.name %></h3>
<% end %>

<p><%= link_to 'All the Books', books_path %></p>
<p><%= link_to 'Edit Book', edit_book_path %></p>
<p><%= button_to 'Remove Book', delete_book_path, method: :delete %></p>
```

So we have our navigation setup to get there, but we need a view.  So we need to create a new file in our views/book folder called edit.html.erb and can copy over the content from our new form.

```ruby
# app/views/book/edit.html.erb

<h2>Edit book</h2>

<%= form_with model: @book do |form| %>
  <%= form.label :name %>
  <%= form.text_field :name %>
  <%= form.label :read %>
  <%= form.check_box :read %>
  <%= form.submit "Add Book" %>
<% end %>
```

We do need to update that we are doing something other than the default requests of get or post.  So we will specify that this method will be a patch request.

```ruby
# app/views/book/edit.html.erb

<h2>Edit book</h2>

<%= form_with model: @book, method: :patch do |form| %>
  <%= form.label :name %>
  <%= form.text_field :name %>
  <%= form.label :read %>
  <%= form.check_box :read %>
  <%= form.submit "Update Book" %>
<% end %>

<p><%= link_to 'All the Books', books_path %></p>
```

And when we go to edit a book, it is actually showing the content in the inputs.  Because this is exisiting data, Rails knows the flow of information and will display it for us.  Pretty cool!

If we make a change and try to submit though, we still aren't seeing the changes being reflected.  This is because we have one more thing to cover and that is update.

** Push up code to GitHub **

## Update
Last step to being FULL STACKERS officially!!

In our controller, we are once again going to need to get the id, but we are also sending information to the database like we did for create, so we need to pass in some book params.

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create(book_params)
        if @book.valid?
          redirect_to books_path
        end
    end

    def destroy
      @book = Book.find(params[:id])
      if @book.destroy
        redirect_to books_path
      end
    end

    def edit
      @book = Book.find(params[:id])
    end

    def update
      @book = Book.find(params[:id])
      @book.update(book_params)
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
```

Let's work on our route.  We can set this up as a patch or a put request. 

```ruby
# config/routes.rb

Rails.application.routes.draw do
    # HTTP verb, url (location),  hashrocket,  controller, methods 
    get 'books' => 'book#index', as: 'books'
    get 'books/new' => 'book#new', as: 'new_book'
    get 'books/:id' => 'book#show', as: 'book'
    post 'books' => 'book#create'
    get 'books/:id/edit' => 'book#edit', as: 'edit_book'
    patch 'books/:id' => 'book#update'
    delete 'books/:id' => 'book#destroy', as: 'delete_book'
    # root "article#index"
end
```

Lastly, we can add a redirect so that when we update successfully, we are brought back to our show page.

```ruby
# app/controllers/book_controller.rb

class BookController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def create
        @book = Book.create(book_params)
        if @book.valid?
          redirect_to books_path
        end
    end

    def destroy
      @book = Book.find(params[:id])
      if @book.destroy
        redirect_to books_path
      end
    end

    def edit
      @book = Book.find(params[:id])
    end

    def update
      @book = Book.find(params[:id])
      @book.update(book_params)
      if @book.valid?
        redirect_to book_path(@book.id)
      end
    end

    # strong params
    def book_params
      params.require(:book).permit(:name, :read)
    end
end
```

And that's FULL STACK!!!