# Valdiations 

Let's start by taking a look at our Trello card to see what is expected on this branch.  

A few weeks ago, we wrote some Rspec tests for validations inside our spec/model folder.  If you remember, this was kind of the backwards thinking that we had to check that Rails is truly validating data that is being inputed by seeing if it throws an error.  In other words, we are checking that Rails is rejecting invalid data.  

We are going to set up some validations for our cats, but also practice test driven development, which means we need to write our test first.  

## Model Specs

/spec/model/cat_spec.rb
```Ruby
RSpec.describe Cat, type: :model do
  it "should validate name" do
    cat = Cat.create(age: 5, enjoys: 'snuggles and teasing the dog')
    # If cat's name field is empty throw an error
    expect(cat.errors[:name]).to_not be_empty
  end
end
```

Watch it fail in the ways we need it too.

Then we will write the validation that checks for the presence of the symbol we are passing

```Ruby
class Cat < ApplicationRecord
  validates :name, presence: true
end
```

Cool, let's continue doing this for all the columns in our table

/spec/model/cat_spec.rb
```Ruby
  it "should have an age" do
    cat = Cat.create(name: 'Tobey', enjoys: 'snuggles and teasing the dog')
    # If cat's name field is empty throw an error
    expect(cat.errors[:age]).to_not be_empty
  end
end
```

```Ruby
class Cat < ApplicationRecord
  validates :name, :age, presence: true
end
```

And one more:

/spec/model/cat_spec.rb
```Ruby
  it "should have an age" do
    cat = Cat.create(name: 'Tobey', age: 5)
    # If cat's name field is empty throw an error
    expect(cat.errors[:enjoys]).to_not be_empty
  end
end
```

```Ruby
class Cat < ApplicationRecord
  validates :name, :age, :enjoys, presence: true
end
```

      {** Deeper dive **
        `$ rails c`
        ```ruby
        > Cat.create(age: 5, enjoys: 'snuggles', image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80')

        > cat.errors
        > cat.errors[:name]
        ```
      }

Our Trello card has us checking for length of enjoys, but I will leave that one up to you all.  Let's move on to the request specs.

## Request Specs

 Trello tells us that we should write a request spec that will return a 422 error if validations are not met.  

So we set this up so now we have a validation, and errors will be thrown if we are missing information.  Now we need to be able to have some way for our front end to be communicated that the request is being rejected.  So instead of just ensuring that the data can't be created in this instance, we are thinking about what happens on the request when the data isn't created. So let's switch gears and go back over to our request specs.

Before we wrote some request specs for our controller to make sure they work properly, but now we want to write specs that make sure we get back an error if things don't go through properly.

```Ruby
describe "cannot create a cat without valid attributes" do
    it "doesn't create a cat without a name" do
        cat_params = {
            cat: {
            age: 5,
            enjoys: 'snuggles and teasing the dog',
            image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
            }
        }
        # Send the request to the  server
        post '/cats', params: cat_params
        # expect an error if the cat_params does not have a name
        expect(response.status).to eq 422
        # Convert the JSON response into a Ruby Hash
        cat = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.

        # The error that comes out of the box with presence validation is "can't be blank", so we will utilize that error.  
        expect(cat['name']).to include "can't be blank"
    end
end
```

This fails, which makes sense because there is nothing currently in our controller that will provide a different action.  So let's handle that.  We can use a conditional in our controller to allow us to only render cat if it is valid, otherwise we will want some errors and provide an status of 422.

```Ruby
def create
  cat = Cat.create(cat_params)
  if cat.valid?
    render json: cat
   else
     render json: cat.errors, status: 422
   end
end
```

This passes our test!  Let's write another test for age.

```Ruby
    it 'cannot create a cat without an age' do
      cat_params = {
        cat: {
          name: 'Boo',
          enjoys: 'cuddles and belly rubs'
        }
      }
      post '/cats', params: cat_params
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(cat['age']).to include "can't be blank"
    end
```

The rest is just following the process for the enjoys and then all of these attributes for our update controllers as well.  


```Ruby
    it 'cannot create a cat without an enjoys' do
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2
        }
      }
      post '/cats', params: cat_params
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(cat['enjoys']).to include "can't be blank"
    end
    it 'cannot create a cat without an enjoys that is at least 10 characters' do
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: 'cuddles'
        }
      }
      post '/cats', params: cat_params
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(cat['enjoys']).to include "is too short (minimum is 10 characters)"
    end
  end

  describe "cannot update a cat without valid attributes" do
    it 'cannot update a cat without a name' do
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: 'cuddles and belly rubs'
        }
      }
      post '/cats', params: cat_params
      cat = Cat.first
      cat_params = {
        cat: {
          name: '',
          age: 2,
          enjoys: 'cuddles and belly rubs'
        }
      }
      patch "/cats/#{cat.id}", params: cat_params
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(cat['name']).to include "can't be blank"
    end
    it 'cannot update a cat without a age' do
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: 'cuddles and belly rubs'
        }
      }
      post '/cats', params: cat_params
      cat = Cat.first
      cat_params = {
        cat: {
          name: 'Boo',
          age: '',
          enjoys: 'cuddles and belly rubs'
        }
      }
      patch "/cats/#{cat.id}", params: cat_params
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(cat['age']).to include "can't be blank"
    end
    it 'cannot update a cat without an enjoys' do
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: 'cuddles and belly rubs'
        }
      }
      post '/cats', params: cat_params
      cat = Cat.first
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: '',
        }
      }
      patch "/cats/#{cat.id}", params: cat_params
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(cat['enjoys']).to include "can't be blank"
    end
    it 'cannot update a cat without an enjoys that is at least 10 characters' do
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: 'cuddles and belly rubs'
        }
      }
      post '/cats', params: cat_params
      cat = Cat.first
      cat_params = {
        cat: {
          name: 'Boo',
          age: 2,
          enjoys: 'cuddles'
        }
      }
      patch "/cats/#{cat.id}", params: cat_params
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(422)
      expect(cat['enjoys']).to include "is too short (minimum is 10 characters)"
    end
  end
end
```