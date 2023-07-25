# API Endpoints and Validations
Most of what we will go through in this lecture will be review, so we will roll through this pretty fast.  Based on the order of Trello, let's start with our endpoints.

## Endpoints
We are going to follow TDD once again, so let's start by writing out some request specs for our index method.

```ruby
require 'rails_helper'

RSpec.describe "Apartments", type: :request do
# So that we can create a user for all of our tests in this file
  let(:user) { User.create(
    email: 'test@example.com',
    password: 'password',
    password_confirmation: 'password'
    )
  }

  describe "GET /index" do
    it 'gets a list of apartments' do
      apartment = user.apartments.create(
        street: '4 Privet Drive',
        unit: '2A',
        city: 'Little Whinging',
        state: 'Surrey',
        square_footage: 2000,
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
      )
      get '/apartments'

      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.first['street']).to eq('4 Privet Drive')
    end
  end

  # test for creating a new apartment will live here
end
```

This looks like a good fail, let's go ahead and write our method

```ruby
# /controllers/apartments_controller.rb

class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end


# I am going to write our create method for right now as we are going to need this in a bit, but I will leave it to you all to make sure you write your request spec 
  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors, status: 422
    end
  end

  private
  def apartment_params
    params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :user_id)
  end
end
```


## Validations
Now that we have our controller methods, let's add some validations so that we can't create an apartment with invalid attributes.  That being said, let's once again practice TDD.  Here we will write specs in models/apartment_spec.rb

```ruby
RSpec.describe Apartment, type: :model do
  let(:user) { User.create(
    email: 'test@example.com',
    password: 'password',
    password_confirmation: 'password'
    )
  }

  it 'should validate street' do
    apartment = user.apartments.create(
      unit: '2A',
      city: 'Little Whinging',
      state: 'Surrey',
      square_footage: 2000,
      price: '2000',
      bedrooms: 3,
      bathrooms: 2,
      pets: 'yes',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
    )
    expect(apartment.errors[:street]).to include("can't be blank")
  end

  # Continue with each attribute
end
```

Lastly, let's make this pass 

```ruby
class Apartment < ApplicationRecord
  belongs_to :user
  validates :street, presence: true
end
```