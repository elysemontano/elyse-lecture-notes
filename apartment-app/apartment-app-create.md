# Create Functionality

To work on our create functionality, let's take a look at trello on what may be needed.

- Controller method
- Request specs for method
- Form
- Fetch call to send info from form to database
- Styling
- Jest tests

Let's start in our controller

```ruby
    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end
```

We also need strong params

```ruby
private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :user_id)
    end
```

Now that we have our controller setup, let's work on our testing

```ruby
describe "POST/create" do
    it "creates an apartment" do
      apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post '/apartments', params: apartment_params

      expect(response).to have_http_status(200)
      apartment = Apartment.first
      expect(apartment.street).to eq "4 Privet Drive"
      expect(apartment.city).to eq "Little Whinging"
      expect(apartment.state).to eq "Surrey"
      expect(apartment.manager).to eq "Mr. Potter"
      expect(apartment.email).to eq "potter@example.com"
      expect(apartment.price).to eq "2000"
      expect(apartment.bedrooms).to eq 3
      expect(apartment.bathrooms).to eq 2
      expect(apartment.pets).to eq "yes"
      expect(apartment.image).to eq "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg"
    end
  end

 # ---- Validation Request Specs ----

  it "does not create an apartment without a street" do
    apartment_params = {
        apartment: {
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['street']).to include "can't be blank"
  end

  it "does not create an apartment without a city" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['city']).to include "can't be blank"
  end

  it "does not create an apartment without a state" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['state']).to include "can't be blank"
  end
  it "does not create an apartment without a manager" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['manager']).to include "can't be blank"
  end
  it "does not create an apartment without a email" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['email']).to include "can't be blank"
  end

  it "does not create an apartment without a price" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['price']).to include "can't be blank"
  end

  it "does not create an apartment without a bedrooms" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['bedrooms']).to include "can't be blank"
  end

  it "does not create an apartment without a bathrooms" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['bathrooms']).to include "can't be blank"
  end

  it "does not create an apartment without a pets" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['pets']).to include "can't be blank"
  end

  it "does not create an apartment without a image" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        user_id: user.id
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['image']).to include "can't be blank"
  end

  it "does not create an apartment without a user" do
    apartment_params = {
        apartment: {
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        }
      }

      post "/apartments", params: apartment_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['user_id']).to include "can't be blank"
  end
```

## Frontend Create
Now let's switch gears to the frontend.  Let's start in App.js and see what we have.  For create, I only want registered users to be able to create an apartment, we originally setup our database to enforce that as well using the has_many belongs_to association.  To create an apartment, we have to have a user_id.  With that, I will need to pass our current_user to our new component.

```javascript
<Route path="/apartmentnew" element={<ApartmentNew current_user={props.current_user} />} />
```

If we go over to ApartmentNew, we can verify that we are getting current_user.

```javascript
const ApartmentNew = ({current_user}) => {
  console.log(current_user)
  return (
    <>
      <h1>Create an apartment</h1>
    </>
  )
}
```

Let's setup our form next.  We do need a place to store the information provided in our form, so we will need state that has all the key value pairs needed to create a successful instance.

```javascript
import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({current_user}) => {
  const [myApartment, setMyApartment] = useState({
    street: "",
    city: "",
    state: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    manager: "",
    email: "",
    user_id: current_user.id
  })
return (
   <>
    <h1>Create an apartment</h1>
   </>
  )
}

export default ApartmentNew
```

Let's now implement the form using reactstrap.  I will need a Form, FormGroup, Label, Input, and Button then update each one to pertain to the key I want to focus on.  We will also need to add an onChange so that we can use our event listener to grab the input values.

```javascript
return (
    <>
      <div className="new-body">
        <h1>New Listing</h1>
          <Form className="form">
            <FormGroup className="form-group street">
                <Label for="street">Street: </Label>
                <Input type="text" name="street" onChange={handleChange} value={myApartment.street} />
              </FormGroup>
              <FormGroup className="form-group group city">
                <Label for="city">City: </Label>
                <Input type="text" name="city" onChange={handleChange} value={myApartment.city} />
              </FormGroup>
              <FormGroup className="form-group state">
                <Label for="state">State: </Label>
                <Input type="text" name="state" onChange={handleChange} value={myApartment.state} />
              </FormGroup>
              <FormGroup className="form-group price">
                <Label for="price">Price per month: </Label>
                <Input type="text" name="price" onChange={handleChange} value={myApartment.price} />
              </FormGroup>
              <FormGroup className="form-group bedrooms">
                <Label for="bedrooms">Bedrooms: </Label>
                <Input type="number" name="bedrooms" onChange={handleChange} value={myApartment.bedrooms} />
              </FormGroup>
              <FormGroup className="form-group bathrooms">
                <Label for="bathrooms">Bathrooms: </Label>
                <Input type="number" name="bathrooms" onChange={handleChange} value={myApartment.bathrooms} />
              </FormGroup>
              <FormGroup className="form-group pets">
                <Label for="petss">Pets: </Label>
                <Input type="text" name="pets" onChange={handleChange} value={myApartment.pets} />
              </FormGroup>
              <FormGroup className="form-group image">
                <Label for="image">Image URL: </Label>
                <Input type="text" name="image" onChange={handleChange} value={myApartment.image} />
              </FormGroup>
              <FormGroup className="form-group manager">
                <Label for="manager">Manager: </Label>
                <Input type="text" name="manager" onChange={handleChange} value={myApartment.manager} />
              </FormGroup>
              <FormGroup className="form-group email">
                <Label for="email">Email: </Label>
                <Input type="email" name="email" onChange={handleChange} value={myApartment.email} />
              </FormGroup>
              <div className="submit">
                <Button onClick={handleSubmit} className="new-button">Submit</Button>
              </div>
          </Form>
      </div>
    </>
  )
```

Since we are calling on a method called handlechange, let's set this up to do something.

```javascript
  const handleChange = (e) => {
    setMyApartment({ ...myApartment, [e.target.name]: e.target.value})
  }
```

We also want our button to do something.  We want this to send the data on this page upstream to App.js and also navigate to our index page.

```javascript
  const handleSubmit = () => {
    createApartment(myApartment)
    navigate("/myapartments")
  }
```

We also need to setup our createApartment function in App.js to now do the fetch call.

```javascript
  const createApartment = (apartment) => {
    fetch('/apartments', {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readApartments())
    .catch((errors) => console.log("Apartment create errors:", errors))
  }
```

We also need to pass this function down to NewApartment

```javascript
<Route path="/apartmentnew" element={<ApartmentNew current_user={props.current_user} createApartment={createApartment} />} />
```

Let's add in some basic styling to this page as well:

```css
// _________Apartment New/Update________

.new-body {
   background-color: #A19581;
   text-align: center;
   padding: 30px;
}

.form {
   background-color: #EAE2D4;
   color:#2D2726;
   padding: 30px;
   border-radius: 8px;
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: 20px;
   align-items: center;
   margin: 20px;
}

.new-button {
   background-color: #584e4dbc;
   width: 150px;
}

.form-group {
   display: table;
   width: 100%
}

.street {
   grid-column:  1/3;
   grid-row: 1/1;
}

.city {
   grid-column: 3/5;
   grid-row: 1/1;
}

.state {
   grid-column: 5/7;
   grid-row: 1/1;
}

.price {
   grid-column: 1/3;
   grid-row: 2/2;
}

.bedrooms {
   grid-column: 3/5;
   grid-row: 2/2;
}

.bathrooms {
   grid-column: 5/7;
   grid-row: 2/2;
}

.pets {
   grid-column: 1/3;
   grid-row: 3/3;
}

.image {
   grid-column: 3/7;
   grid-row: 3/3;
}

.manager {
   grid-column: 1/4;
   grid-row: 4/4;
}

.email {
   grid-column: 4/7;
   grid-row: 4/4;
}

.submit {
   grid-column: 1/7;
   grid-row: 5/5;
   display: flex;
   justify-content: center;
}


label {
   text-align: right;
   clear: both;
   float:left;
   margin-right:15px;
}

input {
   width: 70%;
}
```

Last on the list, is our frontend testing

```javascript
import { render, screen } from '@testing-library/react';
import ApartmentNew from './ApartmentNew';
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentNew />", () => {
  beforeEach(() => {
        const current_user = {
          email: "test@test.com",
          password: "testing123",
          id: 1
        }
        const userApartments = [
          {
              street: "ABC Sesame Street",
              city: "Sesame",
              state: "Isle",
              manager: "Cookie Monster",
              email: "monstermanager@cookies.com",
              price: 15000,
              bedrooms: 1,
              bathrooms: 1,
              pets: "puppets only",
              image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Sesame_Street_buildings_%28193090534%29.jpg",
              user_id: 1
          }
        ]
    render(
      <BrowserRouter>
        <ApartmentNew current_user={current_user} apartments={userApartments}/>
      </BrowserRouter>
    )
  })
  it("renders the ApartmentNew page for the user", () => {
    const inputTitle = screen.getByText("Street:")
    expect(inputTitle).toBeInTheDocument()
  })

  it("has a form with entries for street, city, state, manager, email, price, bedrooms, bathrooms, pets, image, and user_id", () => {
    const formName = screen.getByText(/street/i)
    expect(formName.getAttribute("for")).toEqual("street")
    const formImage = screen.getByText(/image url/i)
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})
```

** Push to GitHub **

Last note: now that we have our create functionality, we want to make sure we have setup validations properly as well so that we cannot submit invalid data.  Make sure to write your rspec tests for model validations and also request specs for an error being thrown if you do not create a valid apartment.