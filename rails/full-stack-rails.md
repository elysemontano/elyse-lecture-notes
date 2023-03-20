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