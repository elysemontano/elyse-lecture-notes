# Cat Tinder API Endpoints

Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service.

If I want to get a list of all the cats or objects off of my table I need to create a specific endpoint for index. The end point is where the request turns into the response. 

The end result of our request response cycle is a page that our user can see- where as the end result of the API is the JSON package being delivered to us via our API
The routes that get us the right controller method and the controller method that preform the right action to interact with our API.


## Informational command
$ rails routes



We need to create endpoints for the actions in our React application. For the time being we can stub these routes.

stub: A method stub or simply stub[1] in software development is a piece of code used to stand in for some other programming functionality. A stub may simulate the behavior of existing code (such as a procedure on a remote machine; such methods are often called mocks) or be a temporary substitute for yet-to-be-developed code. Stubs are therefore most useful in porting, distributed computing as well as general software development and testing.



**app/controllers/cats_controller.rb**
```ruby
class CatsController < ApplicationController

  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

end
```


## Index Route
We start with the index route. In this endpoint, we want to return all of the cats that the application knows about.



**Create a Spec**  
We're going to practice Test Driven Development, so let's start with a test. We'll add our test to the `cats_request_spec.rb` file:

**/spec/requests/cats_request_spec.rb**
```ruby
require 'rails_helper'

RSpec.describe "Cats", type: :request do
  describe "GET /index" do
    it "gets a list of cats" do
    # ---------------------------
# Pause here for a second 
# ---------------------------
```
## Our different databases
    back when we ran rails db:create you'll remember that it made for us two databases. one called 
        cat-tinder-development
        and another called 
        cat-tinder-test
    $ psql
    $ \l

```ruby
      Cat.create name: 'Mosey', age: 5, enjoys: 'showing up in odd places randomly'
      # create an active record query to the database
      # Make a request
      get '/cats'

      cat = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(cat.length).to eq 1
    end
  end
end
```

When we run that spec, it fails of course, because we don't have any code in the controller to respond to the request correctly. Yay failure!

Now we can write the controller code to make it pass:

```ruby
def index
  cats = Cat.all
  render json: cats
end
```

## Create
Next we'll tackle the 'create' route.  Let's start with adding a new test:

```ruby
describe "POST /create" do
  it "creates a cat" do
    # The params we are going to send with the request
    cat_params = {
      cat: {
          name: 'Mosey',
          age: 5,
          enjoys: 'showing up in odd places randomly'
        }
    }

    # Send the request to the server
    post '/cats', params: cat_params

    # Assure that we get a success back
    expect(response).to have_http_status(200)

    # Look up the cat we expect to be created in the db
    cat = Cat.first

    # Assure that the created cat has the correct attributes
    expect(cat.name).to eq 'Mosey'
    expect(new_cat.age).to eq 5
    expect(new_cat.enjoys).to eq 'showing up in odd places randomly'
  end
end
```

And once again, this fails because we have no code in the controller to make it pass. Good! Adding the controller code for this spec is as follows:

```ruby
  def create
    # Create a new cat
    cat = Cat.create(cat_params)
    render json: cat
  end

  # Handle strong parameters, so we are secure
  private
  def cat_params
    #              Table        Columns
    #              v                v
    params.require(:cat).permit(:name, :age, :enjoys)
  end
```
Alright, We've created and tested the functionality of two endpoints in our API
            GET /Index 
            and 
            POST /Create
Something to note as we get into our third endpoint is that every test we run our database is clearing itself out and deleting whatever was created for that test. The oddity here is that it wont use the same id twice. SO while we might only have 1 object in our DB it might be id= 100 if its the 100th object we've put in that testing db. 

```ruby

def update
end
# ___________________________

  describe "PATCH /update" do
    it 'updates a cat' do
      # create the cat
      cat_params = {
        cat: {
          name: 'Mosey',
          age: 5,
          enjoys: 'showing up in odd places randomly'
        }
      }
      post '/cats', params: cat_params

      cat = Cat.first
      # update the cat
      updated_cat_params = {
        cat: {
          name: 'Mosey',
          age: 8,
          enjoys: 'showing up in odd places randomly'
        }
      }
        #   While cat is the only item in our databse we dont know its id. It's id will be dynamic to each time we run our tests. so we will have to use some string interporlation to call on it's id and pass it the updated params 
#   p cat
      patch "/cats/#{cat.id}", params: updated_cat_params
   
   # cat = Cat.first
      updated_cat = Cat.find(cat.id)
      expect(response).to have_http_status(200)
    # expect(cat.age).to eq 8
      expect(updated_cat.age).to eq 8
    end
  end

# _______________________________
def update
    cat = Cat.find(params[:id])
    cat.update(cat_params)
    render json: cat
end

# _______________________________
def destroy
end
# _______________________________
  describe "DELETE /destroy" do
    it 'deletes a cat' do
      # create the cat
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: 'cuddles and belly rubs'
        }
      }
      post '/cats', params: cat_params
      cat = Cat.first
      delete "/cats/#{cat.id}"
      expect(response).to have_http_status(200)
      cats = Cat.all
      expect(cats).to be_empty
    end
  end



# _______________________________

  def destroy
    cat = Cat.find(params[:id])
    cat.destroy
    render json: cat
  end
# _______________________________








  