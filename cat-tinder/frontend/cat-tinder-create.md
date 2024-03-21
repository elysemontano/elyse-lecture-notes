# Cat Tinder Create Functionality

## Overview
- Adding the CRUD "create" functionality to the frontend of Cat Tinder using mock data
- Adding a form to the project
- Creating a method that will log the form data

## Learning Objectives
- Applying the concept of RESTful routes to a React application
- Connecting the data from a form input and passing it to `App.js`

## Additional Resources
- [ Reactstrap Form Components ](https://reactstrap.github.io/components/form/)
- [ React-router Redirect ](https://reactrouter.com/web/api/Redirect)


# Lecture
Today we will be working on our create functionality.  To see what our task requirements are for this, we will start by heading over to trello and bringing the card over to in progress.
<!-- 
I also want to head to the syllabus and bring in the developer stories and place them in my notes so I can keep track of what I am doing. -->

We can see that we will need to store information in state, then pass it on back to App.js so later we can submit our cat to the database.
We will also need test coverage for this.

We have 7 RESTful routes:
index, show, create, new, update, edit, destroy

Only 2 of these are simply a form, which is React's job this time around: 

New - RESTful route that displays a form
Edit - RESTful route that displays a form

We are focusing on New for now.

## Create Form
Currently, our `CatNew.js` file doesn't have much in it.  So let's start by adding a form.  To do this, I am going to head over to Reactstrap and borrow some code they have written for me.

I don't need all of it, so I will only take one FormGroup, the opening and closing Form and the button.

```javascript
<Form>
  <FormGroup>
    <Label for="name">
      Name
    </Label>
    <Input
      name="name"
      // Placeholder is just what is visible until a user starts entering info
      placeholder="What is your name?"
      // type is the input type which can be found in reactstrap docs.
      type="text"
    />
  </FormGroup>
</Form>
```

I also need to import all of these from Reactstrap

`import { Form, FormGroup, Label, Input, Button } from "reactstrap"`

We now need to modify this so that it reflects the structure our database has been built as.  In this case, we will need name, age, enjoys, and image.

I will just copy the FormGroup and modify it a little bit

```javascript
  <FormGroup>
    <Label for="age">
      Age
    </Label>
    <Input
      name="age"
      // Placeholder is just what is visible until a user starts entering info
      placeholder="What is your age?"
      // type is the input type which can be found in reactstrap docs.
      type="number"
    />
  </FormGroup>
    <FormGroup>
    <Label for="enjoys">
      Enjoys
    </Label>
    <Input
      name="enjoys"
      // Placeholder is just what is visible until a user starts entering info
      placeholder="What do you enjoy?"
      // type is the input type which can be found in reactstrap docs.
      type="text"
    />
  </FormGroup>
    <FormGroup>
    <Label for="image">
      Image
    </Label>
    <Input
      name="image"
      // Placeholder is just what is visible until a user starts entering info
      placeholder="Share an image"
      // type is the input type which can be found in reactstrap docs.
      type="url"
    />
  </FormGroup>
```

## Create State

Now that we have a form, we need a place to store the information provided from this form.  State seems like a great place to store this info, which in this case we will store it in this particular component and later pass the information to App.js.

```javascript
import React, {useState } from "react"

const CatNew = () => {

  // Since we are waiting for information from our user, we will set up state to look like how our database is structured but set the keys in the object to be empty strings temporarily.  This will later get updated, but for now, we just need to give state some structure to follow.

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })

  // ** handleChange will go here

  return (
    <>
      // Form
    </>
  )
}
```

Next we need a way to extract the values from our inputs.  We can use event listeners to help us here.

e.target.value will extract the value from the input as a user is typing into it.  Then we will want to overwrite the state value with our input value.

```javascript
const handleChange = (e) => {
  // Spread operator makes a copy of our state object
  // e.target.name will be telling us which key we are updating based on the name in input
  // e.target.value will be telling us what value you are setting to that key
  setNewCat({...newCat, [e.target.name]: e.target.value})
}
```

To invoke this method, we need to add an onChange to our inputs along with the current value in state for that key.

```javascript
  <Input
    name="name"
    placeholder="What is your name?"
    type="text"
    onChange={handleChange}
    value={newCat.name}
  />
  // update all other Inputs
```

## Pass State from CatNew to App.js
Now that we have our form and state setup, we need to pass this information upstream to App.js as this is our main hub for information and logic.  

An important note is that our cat will not show up on our index currently since our index is connected to mockCats which is not attached to our database.  So currently we are scaffolding this logic so later today we can start to tie everything together when we connect the backend to the frontend.

To do this, we will need to create a function in `App.js` called createCat

```javascript
// App.js
const createCat = (cat) => {
  console.log("Created cat", cat)
}
```

Since my submit button is on CatNew, I need to pass this function down to the component as props so I can call on this function

```javascript
// App.js
<Route path="/catnew" element={<CatNew createCat={createCat}/>}>
```

Now I need to call on this function in my CatNew component.  We will need to create another function called handleSubmit that will invoke our createCat function.

```javascript
// CatNew.js
const CatNew = ({createCat}) => {
  // ... state and handleChange

  const handleSubmit = () => {
    createCat(newCat)
  }

  return (
    // ...
  )
}
```

Now we will need to invoke our handleSubmit with an onClick

```javascript
<Button onClick={handleSubmit} name="submit">
  Submit
</Button>
```

## Redirect to CatIndex
Now that we have information being passed to App.js, how can we show our user that their submission was successful?

We can redirect our user to our index page so they can see their new cat on the list of cats.

First we need to import useNavigate which is a React hook that helps us to navigate programmatically (such as a redirect on a form)

`import { useNavigate } from "react-router-dom"`

```javascript
const CatNew = ({createCat}) => {

  // store useNavigate in a variable called navigate
  const navigate = useNavigate()

  //... state
  // handleChange

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }
}
```



## Create Testing
- Create a test file called `CatNew.test.js`
- Copy test over from `CatIndex.test.js` and refactor to have CatNew

Let's write two different tests, one to check that the page renders like normal, but also one for the form entries.

```javascript
describe("<CatNew/>", () => {
  // Arrange
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )
  })
  test("renders the CatNew page for the user", () => {
    // Act - 
      // Can be interactions like clicking
      // can be passive actions like seeing something
    const element = screen.getByText(/catnew/i)
    // Assert
    expect(element).toBeInTheDocument()
  })
})
```

There is another matcher we can use instead of toBeInTheDocument.  Both will be checking that something is there, .toHaveTextContent is a little more specific though.
```javascript
    expect(element).toHaveTextContent("CatNew")
```

We can also use `screen.debug(element)` to see what the test is recognizing.

```javascript
test("has a form with entries for name, age, enjoys and image", () => {
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("For")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("For")).toEqual("age")

    const formEnjoys = screen.getByText(/enjoys/i)
    expect(formEnjoys.getAttribute("For")).toEqual("enjoys")

    const formImage = screen.getByText(/image/i)
    expect(formImage.getAttribute("For")).toEqual("image")
})

```

Testing it exists and that the content matches