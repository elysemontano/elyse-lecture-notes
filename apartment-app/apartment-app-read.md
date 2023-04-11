# Apartment App Read

For our read functionality, we are going to need to cover several cards to complete all of the read functionality.  

** Possibly optional lectures **
- Backend index
- Unprotected index
- Show

** Required lecture **
- Protected index


## Backend Index
Let's start with some testing for our index method in our controller.

```ruby
# spec/requests/apartments_spec.rb

require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let (:user) {User.create email: 'elyse@test.com', password: 'test123', password_confirmation: 'test123'}

  # ---- Endpoint Request Specs ----
  describe "GET /index" do
    it "gets a list of apartments" do
      user.apartments.create(street: "4 Privet Drive",
      city: "Little Whinging",
      state: "Surrey",
      manager: "Mr. Potter",
      email: "potter@example.com",
      price: 2000,
      bedrooms: 3,
      bathrooms: 2,
      pets: "yes",
      image:
        "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg")

        get '/apartments'

        apartment = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(apartment.length).to eq 1
    end
  end
end
```

Let's now write our method to make the test pass:

```ruby
class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end
end
```

This looks like it meets the criteria for this branch.  

** Push to backend-index **

## Unprotected Index
Now let's switch gears over to our frontend and focus on showing all of our apartments.  This will be a page that any person, whether they are logged in or not has access to.

The first thing we need to do is take a look at App.js. We need a place to store our apartments, so let's go ahead and add state here.

```javascript
import React, { useState } from "react"
const App = (props) => {
  const [apartments, setApartments] = useState([])
  return()
}
```

Next, we are going to want to pass all of our apartments in state down to our index page using props.

```javascript
<Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
```

Right now we don't have any apartments stored to state, so let's also cover our fetch call here so we can grab them from the database.

```javascript
  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }
```

One difference from cat tinder in our fetch call is that this time around we don't need localhost:3000 since we are on the same port.


Now that we have apartments stored, let's setup our index page.

```javascript
import React from "react"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({apartments}) => {
  return (
    <>
      <div className='apartments-body'>
        <h1>Recent Listings</h1>
        <div className='flex-apartments'>
          {apartments?.map((apartment, index) => {
            return(
                <Card key={index} className='apartment-cards'>
                  <CardImg top width="100%" src={apartment.image} alt="" className="apartment-picture"/>
                  <CardBody>
                    <div className="apartment-text">
                      <CardTitle><b>${apartment.price}/month</b></CardTitle>
                      <CardSubtitle>{apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                      <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, Bath</CardSubtitle>
                    </div>
                    <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link">
                      <Button className='apartment-button'>More Details</Button>
                    </NavLink>
                  </CardBody>
                </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ApartmentIndex
```

Add some css:

```css
// ____Apartment Index_________
 .apartments-body {
   background-color: #A19581;
   text-align: center;
   padding: 30px;
 }

 .flex-apartments {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 1em;
   grid-row-gap: 3em;
   justify-items: center;
   padding-top: 20px;
   padding-bottom: 20px;
 }

 .apartment-cards {
   width: 270px;
   // margin: 20px;
   color:#2D2726;
   padding: 20px;
   background-color: #EAE2D4;
 }

 .apartment-button {
   margin-top: 25px;
   background-color: #A19581;
   color: #2D2726;
   padding: 10px 30px 10px 30px;
   border-radius: 8px;
   width: 200px;
 }

 .apartment-text {
   text-align: left;
 }

 .apartment-picture {
   border: 5px solid #fff;
   text-shadow: 2px 2px 5px #2D2726;
   // height: 30vh;
   object-fit: cover;
   width: 100%;
   height: 150px;
 }
```

Last on the list is testing:

```javascript
import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    )
  })

  test("renders without crashing", () => {
    const element = screen.getByText("Recent Listings")
    expect(element).toBeInTheDocument()
  })
  
  test("renders apartment cards", () => {
    mockApartments.forEach(apartment => {
      const apartmentStreet = screen.getByText(`${apartment.street}, ${apartment.city}, ${apartment.state}`)
      expect(apartmentStreet).toBeInTheDocument()
    })

    const apartmentImage = screen.getAllByRole("img")
    expect(apartmentImage[0]).toBeVisible()
  })
})
```


## Show
Now that we have all the apartments, let's setup our show page so we can view an individual instance.

Let's start in App.js and pass all apartments to our show page

```javascript
<Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
```

Now let's head on over to our show page.  First, we need to isolate which apartment we wish to show on this page.  We can use our url params to help us find that apartment.

```javascript
import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ApartmentShow = (props) => {

  let {id} = useParams()
  const currentApartment = props.apartments?.find((apartment) => apartment.id === +id)

  return (
    <>
    <div className="apartments-body">
      {currentApartment &&      
        <Card className='apartment-card'>
          <CardImg top width="100%" src={currentApartment.image} alt="" />
          <CardBody className="apartment-text apartment-font-size">
            <div className="grid-row">
              <div className="show-apartment-info">
                <CardTitle><b>${currentApartment.price}/month</b></CardTitle>
                <CardSubtitle>{currentApartment.street}, {currentApartment.city}, {currentApartment.state}</CardSubtitle>
                <CardSubtitle>{currentApartment.bedrooms} Bedroom {currentApartment.bathrooms}, Bath</CardSubtitle>
                <CardSubtitle>Pets: {currentApartment.pets}</CardSubtitle>
              </div>
              <div className="show-contact-info">
                <CardSubtitle><b>Contact Us!</b></CardSubtitle>
                <CardSubtitle>Manager: {currentApartment.manager}</CardSubtitle>
                <CardSubtitle>Email: {currentApartment.email}</CardSubtitle>
              </div>
              <NavLink to={`/apartmentindex`} className="nav-link">
              </NavLink>   
            </div>
          </CardBody>
        </Card>
      }
    </div>
    </>
  )
}

export default ApartmentShow
```

Now that we have everything displaying, lets add some styling:

```css
.apartment-card {
   color:#2D2726;
   padding: 20px;
   background-color: #EAE2D4;
 }

 .apartment-font-size {
   font-size: xx-large;
 }

 .grid-row {
   display: grid;
   grid-template-rows: repeat(2, 1fr);
   grid-template-columns: 3fr, 1fr;
   grid-auto-rows: minmax(20px, auto);
 }

 .show-cost {
   grid-column: 1/3;
   grid-row: 1/1;
   max-height: 20px;
 }

 .show-apartment-info {
   margin-bottom: 20px;
   grid-column: 1/3;
   grid-row: 1/1;
   max-height: fit-content;
 }

 .show-contact-info {
   margin-bottom: 20px;
   font-size: x-large;
   grid-column: 1/3;
   grid-row: 2/2;
   max-height: fit-content;
   align-self: end;
 }
```

Last on the list for show is testing:

```javascript
import { render, screen } from '@testing-library/react';
import ApartmentShow from './ApartmentShow';
import { MemoryRouter, Routes, Route } from "react-router-dom"
import apartments from '../mockApartments'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<ApartmentShow />", () => {
  it("renders apartment price attribute", () => {
    renderShow()
    const price = screen.getByText(`${Apartments[0].price}/month`)
    expect(price).toBeInTheDocument()
  })
})

```


## Protected Index (Read Part 2)
Now that we have a list of all of our apartments rendering, as a signed in user, we may want to be able to see only the listings that we have created as well.  This page will be protected so that only a logged in user can access this page.

For this, we need to consider what information is needed here.  We will need apartments of course, but we will also want to check that our current user is the same as the one who created the apartments.  

When setting up our backend, we created a has_many belongs_to association, so apartment belongs to user.  If we look at our schema, we see that apartment has a foreign key of user_id.  This is helpful information that we can use to perform an evaluation of whether or not our current user's id is the same as the one on the foreign key.  (current_user.id === apartment.user_id)

To set this up, let's start off in App.js and update our route.  We will certainly need apartments from state, but we are also going to need information on what the current user is

```javascript
 <Route path="/myapartments" element={<MyApartments current_user={props.current_user} apartments={apartments} />} />
```

Now that we are passing these to MyApartments.js, let's check that we have access to those props.

```javascript
const MyApartments = ({apartments, current_user}) => {
  console.log("apartments", apartments)
  console.log("current_user", current_user)
  return (
    <>
      <h1>My Apartments</h1>
    </>
  )
}
```

Since we have access to props, now we need to sift through the apartments and search for only the apartments that have a user_id of current_user.id.  For this, let's use filter.

```javascript
const MyApartments = ({current_user, apartments}) => {

  const myApartments = apartments?.filter(apartment => current_user.id === apartment.user_id)

  return (
    <>
      <h1>My Listings</h1>
    </>
  )
}

export default MyApartments

```

Since we are storing the array of filtered apartments to a variable, we can now iterate on our filtered apartments and display the content.

I want this page to look just like our index page, just with only the user's listings, I can use the same structure we did in index and reuse the styling as well.

```javascript
import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from "react-router-dom"

const MyApartments = ({current_user, apartments}) => {

  const myApartments = apartments?.filter(apartment => current_user.id === apartment.user_id)

  return (
    <>
      <div className='apartments-body'>
        <h1>My Listings</h1>
        <div className='flex-apartments'>
          {myApartments?.map((apartment, index) => {
            return(
                <Card key={index} className='apartment-cards'>
                  <CardImg top width="100%" src={apartment.image} alt="" className='apartment-picture'/>
                  <CardBody>
                    <div className="apartment-text">
                      <CardTitle><b>${apartment.price}/month</b></CardTitle>
                      <CardSubtitle>{apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                      <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, Bath</CardSubtitle>
                    </div>
                    <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link">
                      <Button className='apartment-button'>More Details</Button>
                    </NavLink>
                  </CardBody>
                </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MyApartments
```

Now let's work on testing.  As we have in the past, we have to make sure that any information that is being called on in the component is also being passed to our test when we render the component.  In this case, we need apartments, that we can use mockApartments for, and also create an object that will be current user for us to use.

```javascript
import React from "react"
import { render, screen } from "@testing-library/react"
import MyApartments from "./MyApartments"
import { BrowserRouter, useParams } from "react-router-dom"
import mockApartments from "../mockApartments"

describe("<MyApartments />", () => {
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
                <MyApartments current_user={current_user} myApartments={userApartments}/>
            </BrowserRouter>
        )
    })

    it("renders without crashing", () => {
        const element = screen.getByText("My Listings")
        expect(element).toBeInTheDocument()
    })
})
```

