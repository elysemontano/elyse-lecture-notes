# Protected Index
As a signed in user, we may want to be able to see only the listings that we have created as well.  This page will be protected so that only a logged in user can access this page.

For this, we need to consider what information is needed here.  We will need apartments of course, but we will also want to check that our current user is the same as the one who created the apartments.  

When setting up our backend, we created a has_many belongs_to association, so apartment belongs to user.  If we look at our schema, we see that apartment has a foreign key of user_id.  This is helpful information that we can use to perform an evaluation of whether or not our current user's id is the same as the one on the foreign key.  (current_user.id === apartment.user_id)

To set this up, let's start off in App.js and update our route.  We will certainly need apartments from state along with the current user.

We also will want to make it so this particular route can only be accessed if a user is signed in.  For this, we will conditionally render the route.

```javascript
{currentUser && (
  <Route
    path="/myapartments"
    element={
      <ApartmentProtectedIndex
        currentUser={currentUser}
        apartments={apartments}
      />
    }
  />
)}
```

Now that we are passing these to ApartmentProtectedIndex.js, let's check that we have access to those props.

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

