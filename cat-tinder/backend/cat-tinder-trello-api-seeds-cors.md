# Intro to Trello, Cat Tinder API, Seeds, CORS

We will be working on a full stack application called Cat Tinder.  For those of you who are not familiar with what Tinder is, it is a dating website, where we have converted it to a cat (or your choice of animal or object) "dating" website, where you can see a list of cats, view their information, create, update or delete a cat.  

We will be building the backend of this application first as an API in Rails and later write the frontend in REACT.  We will then connect the frontend and backend together.  This is known as a decoupled application (frontend and backend are built as two separate applications and then linked together).


## Trello
Since this is a week long project where you will be working in mostly pairs but some will be in a team of 3, and there are a lot of parts to this we are going to be using a project management website commonly used in the industry called Trello.  Each group will have their own Trello board and will be responsible for keeping track of their tasks and updating their Trello board.

- Open Cat Tinder Instructors
- Each column is known as swim lanes
  - Backlog 
  - MVP - Minimum Viable Product
  - Doing - Tasks currently working on
  - PR Review - In Review
  - Done

- Click on card for more information
  - Add team members onto card
  - Card is complete ONLY when you have completed the task on the card. 
  - Stick to what the card asks for, check boxes as you complete them
  - Each card has a branch name
  - Move to doing if you are working on task
  - Move to PR review once you have completed the task and you are waiting for review.
    - When requesting a review:
      - Submit PR
      - Post in slack: @Elyse, @Gene Please review my PR for ____ 
          PR: ---Link to PR---   
          Trello: ---Link to Trello Card---
      - When one of us is reviewing, we will place the 👀 emoji.
      - When we approve the PR, we will place the ✅ emoji
      - Once you merge and delete the branch, you will add the github parrot emoji
      - If there are requested changes, we will leave a comment saying to take a look at our feedback in GitHub.

(No PR needed for initial commit, but you will ask for Branch Protections)


So that we can add you to your cat tinder board, please reply in thread with your email.  After this lecture, you will be receiving an email invite to the board.  You will need to accept the invitation and this should take you to your board.


## Setup
  - Git hub classroom link
  - `$ rails new cat_tinder_backend_instructors -d postgresql -T `
  - `$ cd cat_tinder_backend`
  - `$ git add remote ...`
  - `$ git checkout -b main`
  - `$ rails db:create`
  - git add, commit, push as initial commit (move trello card)


## Backend Structure
(Check Trello)
  - `$ bundle add rspec-rails`
  - `$ rails generate rspec:install`
  - `$ rails server`

  - Do Github Work here

  - `$ rails generate resource Cat name:string age:integer enjoys:text`
  - `$ rails db:migrate`
  - `$ rspec spec`
  % just to make sure things didn't break 

# Rails Seed
Bring in data in an array

- When you made the wildlife tracker you had to insert all of the data manually. with seeds you can get up and running with starter data quite quickly

```ruby
cats = [
  {
    name: 'Felix',
    age: 2,
    enjoys: 'Long naps on the couch, and a warm fire.'
  },
  {
    name: 'Homer',
    age: 12,
    enjoys: 'Food mostly, really just food.'
  },
  {
    name: 'Jack',
    age: 5,
    enjoys: 'Furrrrociously hunting bugs.'
  }
]

cats.each do |attributes|
  Cat.create attributes
  puts "creating cat #{attributes}"
end
```

    $ rails db:seed

    - Each time we run rails db:seed we will end up adding the mock data to our data base. SO if we ran it three times we would have 3 of each cat in our database.


## Trouble Shooting
    $ rails db:drop 
    $ rails db:create 
    $ rails db:migrate 
    $ rails db:seed



# API CORS

Before we continue with cors we are going to want to make our lives a bit easier by bypassing some built in security in rails. 

Normally this before_action command would verify that information was coming from within the rails app and would not allow us to pass in information from outside. We want to skip that before_action.

```ruby
app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
end
```

- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading of resources.

- Adding this line of code to the Gemfile:

```ruby
gem 'rack-cors', :require => 'rack/cors'
```


config/initializers/cors.rb

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

    $ bundle install

- When you take your app to production, you'll want to change the wildcard * to the URL that your frontend app is served from.