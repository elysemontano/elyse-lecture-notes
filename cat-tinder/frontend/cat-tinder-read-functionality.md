# Cat Tinder Read Functionality

## Setup

  - $ git clone project-name
  - $ cd project-name
  - $ git fetch --all

  - Check trello!  

  - $ git checkout -b cat-tinder-read-functionality

  - Install node modules:
    - $ yarn

  - Take a quick look: 
    - src
    - components
    - pages

    - App.js
      - Remove any UI tags such as <h1>
      - App.js will handle the big picture, routing and how data is being handled and passed around.
      - console.log(this.state.cats) to see what data we are working with when server is running
      - Check tests by going to package.json and checking script for how we run tests: $ yarn test
        - Test should show console log.

    - App.css
      - This is where you can handle all of your styling for your app.


## Restful Routes

  - Notes in markdown file:
    - Restful Routes 
      - For the data side of the app:
        - index (read / get) - all cats
        - show (read / get) - one cat - will need a id param (which cat?)
        - create
        - destroy
        - update
       - For the user side of the app:
        - edit
        - new


# Index

  - App.js

      We want to be able to pass our data from state to our index page as props.  To do this, we need to look at our route for catindex where we are calling on that component.  If we remember, we can pass props into our component call.


``` javascript
  <Route path="/catindex" element={<CatIndex cats={mockCats}/>}>
```

  Now that we have our cats being passed to our cat index page as props, we can go to our cat index page and work on displaying all of the cats.

  - First let's check that things are being passed correctly.  Let's destructure cats and then console log to make sure we are passing it properly

```javascript
const CatIndex = ({cats}) => {
  console.log(cats)
  return (
    <>
      <h1>Meet the cats!</h1>
    </>
  )
}
```

  - Now we need to iterate over cats and display all cats.  We can go into javascript land in JSX by using curly braces where we can map over this.  

```javascript
  import React from 'react';
  import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

  const CatIndex = ({cats}) => {
  return (
    <>
      <h1>Meet the cats!</h1>
      {cats.map((cat, index) => {
        return (
          <h3 key={index}>{cat.name}</h3>
        )
      })}
    </>
  )
}
export default CatIndex
```

  -I also want to use reactstrap for some styling.  Let's use the Card components to help make this look nice.

```javascript
    {cats.map((cat, index) => {
      return (
        <Card
          color="light"
          style={{
            width: "18rem",
          }}
          key={index}
        >
          <img alt="Cute cat" src={cat.image} />
          <CardBody>
            <CardTitle tag="h5">{cat.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {cat.age}
            </CardSubtitle>
          </CardBody>
        </Card>
      )
    })}
```


## Cat Index Testing
This looks great, now let's write a test for it.  We need to make a file for it called CatIndex.test.js
I can copy some of the syntax over from another test we have made earlier and then modify as needed.

- I am going to setup the content inside my index test a little differently.  In React testing library, you will see several different ways to render a component and check for specific information.  When we display something in React, it all boils down to a div to start off with.  So in our test, we are going to createElement("div") so that it will attach the application code to this div.

```javascript
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import CatIndex from './CatIndex'
import mockCats from '../mockCats'

describe("<CatIndex />", () => {
  it("renders cat cards", () => {
    const div = document.createElement("div")
    render(<CatIndex cats={mockCats} />, div)
    mockCats.forEach(cat => {
      const catName = screen.getByText(cat.name)
      expect(catName).toBeInTheDocument()
    })
  })
})
```

Great!

## Cat Show
Next up on Trello is handling our show page.  If we think back to RESTful routes, we know that show requires url params so we know which cat we want to show.  

The first thing that I need to handle in that case is my route in App.js.  We can also pass our cats to our show component as props

```javascript
<Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
```

Let's double check 

```javascript
const CatShow = ({ cats }) => {
  console.log(cats)
  return (
    <>
      <h1>Cat Show</h1>
    </>
  )
}

```


There is a hook that we can use to help us be able to grab the param.  We will set the variable to whatever we want and useParams()

In this case, we want the id, so we can ask for the id from the url here.

```javascript
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {
  const {id} = useParams()
  console.log("id", id)
  return (
    <>
      <h1>Cat Show</h1>
    </>
  )
}

```

Great so now, that we know what the id of the cat is from our url, we can use a higher order function called .find.  This is a little different than .find in Ruby, since we need to give it a function that will help us decide which instance to find in the array.

```javascript
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {
  const {id} = useParams()
  let selectedCat = cat.find(cat => cat.id === id)

  return (
    <>
      <h1>Cat Show</h1>
    </>
  )
}
```

Here is the dilema with this current setup.  All url params are given to us as strings, and so we will not be able to perform an accurate evaluation in .find when comparing a string to a number.  There is a handy operator we can use to help us here, and that is the unary operator which is a simple plus sign before the string.  Essentially, it is using Javascript type coersion to change it to an integer.

```javascript
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {
  const {id} = useParams()
  let selectedCat = cat.find(cat => cat.id === +id)
  console.log(selectedCat)

  return (
    <>
      <h1>Cat Show</h1>
    </>
  )
}
```

Now that we know which cat we want to show, let's update our page information to display specific attributes on the cat.

```javascript
import React from 'react'
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {

  const { id } = useParams()
  let selectedCat = cats.find(cat => cat.id === +id)

  return(
      <>
        {selectedCat (
          <>
            <img
              alt={` ${selectedCat.name}'s profile`}
              src={selectedCat.image}
            />
            <h3>{selectedCat.enjoys}</h3>
          </>
        )}
      </>
    )
}

export default CatShow;
```

While this may work, sometimes our browser may be a little to slow and will throw an error as a result because it does not have the information to display.  

To help with this, we are going to do some conditional rendering that tells react to not render the content until selectedCat is not null

```javascript
import React from 'react'
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {

  const { id } = useParams()
  let selectedCat = cats.find(cat => cat.id === +id)

  return(
      <>
        {selectedCat && (
          <>
            <img
              alt={` ${selectedCat.name}'s profile`}
              src={selectedCat.image}
            />
            <h3>{selectedCat.enjoys}</h3>
          </>
        )}
      </>
    )
}

export default CatShow;
```

## Cat Show Testing
Let's start by creating a file called CatShow.test.js.  I am going to copy my index test and modify as needed to help get me started.

- Since we are only displaying one cat, we don't need to do forEach.
- Instead of using BrowserRouter like we did for App, we are going to use something called MemoryRouter and our Routes.  Essentially this is simulating the path to get to our show page.  (Only used in testing)

- MemoryRouter takes one attribute which is called initialEntries where we will tell it what is the starting route.  Here we are going to hard code a specific instance so we have a solid location for it to go to.

```javascript
import React from "react";
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CatShow from './CatShow'
import mockCats from '../mockCats'

const renderShow = () => {
  render(
  <MemoryRouter initialEntries={["/catshow/1"]}>
    <Routes>
    <Route path="catshow/:id" element={<CatShow cats={mockCats}/>} />
    </Routes>
  </MemoryRouter>
  )
}

describe("<CatShow />", () => {
  it("renders cat cards with enjoys", () => {
    renderShow()
    expect(screen.getByText(`${mockCats[0].enjoys}`)).toBeInTheDocument()
    })
  })
```

## Navigation
Last thing to do is to setup our button in our CatIndex to navigate to the show page.  An important thing to note, and something that has stumped myself and many students is that there is both NavLink from react-router-dom and NavLink from reactstrap.  Make sure to ALWAYS use NavLink from react-router-dom so that we are not restarting the request/response cycle.

- NavLink has an attribute of to, and then we will pass it the path that we have in App.js.  Since we need a specific id though, we need to do some string interpolation to go to the correct cat.


```javascript
import React from "react"
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <main className="index-cards">
      {cats.map((cat, index) => {
        return (
          <Card
            color="light"
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img alt="Cute cat" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>

              <NavLink to={`/catshow/${cat.id}`} class-name="nav-link">
                More About Me
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default CatIndex
```