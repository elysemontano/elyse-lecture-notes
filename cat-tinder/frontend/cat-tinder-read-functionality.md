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


## Testing Cat Index
We are going to start with our CatIndex page, however let's practice some TDD.  We are going to start by writing our tests and we have to think about all of what we want out of this particular action, so in a sense we are pseudocoding with our test.

- Check/update trello - see we need to test our cat index page.

- Create a new file called CatIndex.test.js in pages
- Copy the tests from Footer and refactor
- First let's write a test checking if we are displaying a heading.  This may seem weird at first because why would we care about the heading?  But realistically, we are trying to test something or basically does the component render to the page?  If the component is rendering properly, we can now go and pick out something in jsx to test.


```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CatIndex from './CatIndex.js'

Enzyme.configure({ adapter: new Adapter() })


describe("When CatIndex renders", () => {
  it("displays a heading", () => {
    const catIndex = shallow(<CatIndex />)
    const indexHeader = catIndex.find("h2")
    expect(catIndexHeading.length).toEqual(1)
    expect(indexHeader.text()).toEqual("Find your purrfect match")
  })
})
```

This fails successfully!  Let's go in and add a heading

```javascript
  <h2>Find your purrfect match</h2>
```

And it passes!  Let's write another test that is going to be a little more specific though, because we know that we want to display all of the cats, even if it is just one, but ultimately my data is not going to be handled in my index page, but all of my data is going to be stored in state on App.js.  This means, I need to pass my data down to this component as props and then display my content.  

So how do I write a test for this?  Since I know I am passing props to my component, I need to setup my test to have props that is going to look like a state object.

I am also going to borrow the syntax we used yesterday to setup our shallow render before each test (App.test.js).  Since I need to pass props, I will use the spread operator to pass in the props. 

```javascript
describe("When CatIndex renders", () => {
  const props = {
    cats: [
      {
        id: 1,
        name: "Mittens",
        age: 5,
        enjoys: "sunshine and warm spots",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }
    ]
  }
  let catIndexRender
  beforeEach(() => {
    // Shallow that we bring in from enzyme will mount the component CatIndex
    catIndex = shallow(<CatIndex {...props} />)
  })
  it("displays a heading", () => {
    const catIndex = shallow(<CatIndex />)
    const indexHeader = catIndex.find("h2")
    expect(catIndexHeading.length).toEqual(1)
    expect(indexHeader.text()).toEqual("Find your purrfect match")
  })
  it("displays a cat", () => {
    // I want each cat to appear on a single card and that way I can check the proper amount of cats is displaying.
    // I am going to use Reactstrap's card and since I am only passing one cat, I should have a length of 1
    const catIndexCard = catIndex.find("Card")
    expect(catIndexCard.length).toEqual(1)
  })
})
```

This is giving us a failing test...

So let's go ahead and make this test pass now.

# Index

  - App.js

      We want to be able to pass our data from state to our index page as props, but currently we can't because we can only pass it through a component call.  Currently we have a bunch of static routes, meaning they will all look the same.  No information is being passed to change it in some way.


``` javascript
  <Route path="/catindex" component={CatIndex}>
```

  We need to refactor this so that this is a dynamic route that allows us to pass data to our child components.  Instead of using the component attribute, we will use the render attribute that will take an anonymous function.  The return value of the anonymous function will be the component.

  ```javascript
  <Route path="/catindex" render={() => <CatIndex /> } />
  ```

  We can now pass information into this component call:

    ```javascript
  <Route path="/catindex" render={() => <CatIndex cats={this.state.cats} /> } />
  ```

  Now that we have our cats being passed to our cat index page as props, we can go to our cat index page and work on displaying all of the cats.

  - First let's check that things are being passed correctly.  We can console.log in our render section this.props.cats

  - Now we need to iterate over this.props.cats and display all cats.  We can go into javascript land in JSX by using curly braces where we can map over this.props.cats

  ```javascript
  import React from 'react';
  import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

  class CatIndex extends Component {

  render() {
    const { cats } = this.props
    return(  
    <>
      <h2>Find your purrfect match</h2>
      <div>
      // this.props.cats will be undefined at first making it a falsy value, and then will become defined which will be truthy and will toggle between the two.
        {cats && cats.map(cat => {
          return(
            <Card key={cat.id}>
              <CardImg top width="100%" src={cat.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>Hi, my name is {cat.name}</CardTitle>
                <CardSubtitle>{cat.age}</CardSubtitle>
                  <Button>More info here</Button>
              </CardBody>
            </Card>
          )
        })}
        </div> 
      )}
    }
  export default CatIndex
  ```

## Conditional Rendering
this.props.cats &&
The && is basically writing:
```javascript
if(undefined && true)
```
The code block will not run until it becomes:
```javascript
if(true && true)
```

This now makes our test pass.

## Cat Show Test

If we look at Trello, we also need to cover our CatShow page in our Read functionality.  Let's start by writing some tests.

I am going to create a file called CatShow.test.js and copy my tests from CatIndex.test.js and refactor some of this.

Since I only will be passing a single cat (hence why it's on Tinder), I can refactor it so I am only passing cat into the component shallow render and no longer need props, I can simply set a variable of a single cat.

```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow.js'
Enzyme.configure({ adapter: new Adapter() })

describe("When CatShow Renders", () => {
  const cat = {
        id: 1,
        name: "Mittens",
        age: 5,
        enjoys: "sunshine and warm spots",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }
  
  let catShowRender
  beforeEach(() => {
    catShowRender = shallow(<CatShow cat={cat} />)
  })
  it("Displays a profile for the cat being passed it", ()=>{
    const cardRender = catShowRender.find("Card")
    expect(cardRender.length).toEqual(1)
  })
})
```

## Cat Show App.js

We have some refactoring on App.js to do because we have the same dilema as before where currently cannot pass information to our component.

- First, we know that our show page is going to need some kind of param because we are only displaying one cat and need to know which cat is showing.  We will add this to our path:

    ```javascript
  <Route path="/catshow/:id"} />
  ```

- We also need to pass in data, so lets make this dynamic.  We need to write in some logic that is going to allow us to look up which cat we want to display.  Because we are not going to be using implicit return we will need to add in some curlies for our anonymous function and return something.

    ```javascript
  <Route 
    path="/catshow/:id" 
    render={(props) => {
      // match.params.id is in the documentation and the syllabus but is some built in functionality that is giving us access to the id being passed in our path where we are assigning it to a variable called id.  I want to console log it to see what is happening.
      let id = props.match.params.id
      console.log(id)
      return <CatShow />
     } } 
  />
  ```

  I can see that I will get back in my console log the id passed in the url.

- Let's look at the data type of our id by adding typeof in our console log.  It looks like it's a string because params are always strings.

Now that we have this param available to us, we can find the appropriate cat.

```javascript
  <Route 
    path="/catshow/:id" 
    render={(props) => {
      let id = props.match.params.id
      console.log(id)
      // find() is an array method that is a higher order function that takes an evaluation and returns the first instance of that evaluation.  Google and go to documentation
      // So I will be iterating over cats and my value is actually a cat object where I want to find the first instance where my cat object id equals my variable id.
      let cat = this.state.cats.find(catObject => catObject.id === id)
      return <CatShow />
     } } 
  />
  ```

  One problem we have currently is that the data type of catObject.id is a number and id is a string.  We need to convert id to be a number and a really cool way to do this is using the Unary operator (+)

``` javascript
  let id = +props.match.params.id
```

Now lets console log just cat to make sure that we are getting back only one cat:

``` javascript
      let cat = this.state.cats.find(catObject => catObject.id === id)
      console.log(cat)
      return <CatShow />
```

Let's now pass cat to our cat show component:

``` javascript
      return <CatShow  cat={cat}/>
```

## Cat Show Page

Let's start by console logging cat to make sure it is being passed properly

Now that we have a cat, we can start displaying the cats information.  Let's start by destructuring props because we are going to be writing this a bunch of times:

```javascript
import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    let { cat } = this.props
    return(
      <>
        {cat && 
            <Card body className="card-show">
              <CardImg top width="100%" src={cat.image} />
              <CardBody>
                <CardTitle>Hi, my name is {cat.name}</CardTitle>
                <CardSubtitle>{cat.age}</CardSubtitle>
                <CardText>{cat.enjoys}</CardText>
                <br />
                <NavLink to="/catindex">
              </CardBody>
            </Card>
          }
      </>
    )
  }
}
export default CatShow
```

## Navigation

Check trello! We still don't have routing to this page setup.

- Let's head over to CatIndex and make each iteration on the cat a link.  We will use an import from react router called NavLink that will allow us to navigate to our catShow page without a page reload.

- NavLink ultimately is an a tag

```javascript
import { React,  Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    return(
      <>
        <h2>Find your purrfect match</h2>
        // this.props.cats will be undefined at first making it a falsy value, and then will become defined which will be truthy and will toggle between the two.

        {this.props.cats && this.props.cats.map(cat => {
          // replace <p> with NavLink and give an attribute of to={`/catshow/${cat.id}`}
          return(
            <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
              {cat.name}
            </NavLink>
          )
        })}
      </>
    )
  }
}
export default CatIndex
```


<!-- If NavLink stops working, add replace code in index.js: 


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); -->
