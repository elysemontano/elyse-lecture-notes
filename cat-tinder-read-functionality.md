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

      We want to be able to pass our data from state to our index page as props, but currently we can't because we can only pass it through a component call.  Currently we have a bunch of static routes, meaning they will all look the same.  No information is being passed to change it in some way.


``` javascript
  <Route path="/catindex" component={CatIndex}>
```

  We need to refactor this so that this is a dynamic route that allows us to pass data to our child components.  Instead of using the component attribute, we will use the render attribute that will take an anonymous function.  The return value of the anonymous function will be the component.

  ```javascript
  <Route path="/catindex" render={(props) => <CatIndex /> } />
  ```

  We can now pass information into this component call:

    ```javascript
  <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} /> } />
  ```

  Now that we have our cats being passed to our cat index page as props, we can go to our cat index page and work on displaying all of the cats.

  - First let's check that things are being passed correctly.  We can console.log in our render section this.props.cats

  - Now we need to iterate over this.props.cats and display all cats.  We can go into javascript land in JSX by using curly braces where we can map over this.props.cats

  ```javascript
  <h2>Find your purrfect match</h2>
  {this.props.cats.map(cat => {
    return <p key={cat.id}>{cat.name}</p>
  })}
  ```


## Testing Cat Index

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
    // Shallow that we bring in from enzyme will mount the component CatIndex
    const catIndex = shallow(<CatIndex />)
    const indexHeader = catIndex.find("h2")
    expect(indexHeader.text()).toEqual("Find your purrfect match")
  })
})
```

This is giving us a failing test...

We are getting back undefined method for map because our component is not rendering correctly.  In this case, what does it mean if we get this error?
- We get undefined method for map if there is something wrong with the array we are trying to iterate upon.  While it may seem like things are moving through our pages instantaneously, they are not and so what is happening is our test is trying to mount CatIndex before our props have been passed completely to our component.
- We need our user to not see a broken page if cats have not been passed just yet, because they will get cats.  So let's add some conditional rendering on our CatIndex component to tell our component to not render until cats are fully ready to be displayed.

```javascript
import React,  Component } from 'react'

class CatIndex extends Component {
  render() {
    return(
      <>
        <h2>Find your purrfect match</h2>
        // this.props.cats will be undefined at first making it a falsy value, and then will become defined which will be truthy and will toggle between the two.

        {this.props.cats && this.props.cats.map(cat => {
          return <p key={cat.id}>{cat.name}</p>
        })}
      </>
    )
  }
}
export default CatIndex
```

This now makes our test pass.

The && is basically writing:
```javascript
if(undefined && true)
```
The code block will not run until it becomes:
```javascript
if(true && true)
```



## Cat Show App.js

We have some refactoring on App.js to do because we have the same dilema as before where currently cannot pass information to our component.

- First, we know that our show page is going to need some kind of param because we are only displaying one cat and need to know which cat is showing.  We will add this to our path:

    ```javascript
  <Route path="/catshow/:id" render={(props) => <CatIndex cats={this.state.cats} /> } />
  ```

- We also need to pass in data, so lets make this dynamic.  We need to write in some logic that is going to allow us to look up which cat we want to display.  Because we are not going to be using implicit return we will need to add in some curlies for our anonymous function and return something.

    ```javascript
  <Route 
    path="/catshow/:id" 
    render={(props) => {
      // match.params.id is in the documentation and the syllabus but is some built in functionality that is giving us access to the id being passed in our path where we are not assigning it to a variable called id.  I want to console log it to see what is happening.
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
        <h2>Cat Show</h2>
        <p>{cat.name}</p>
        <p>{cat.age}</p>
        <p>{cat.enjoys}</p>
        <img src={cat.image} width="200px">
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
import React,  Component } from 'react'
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


## Cat Show Testing

```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter()})

describe("When CatShow renders", () => {
  let cat = {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
  it("displays a header", () => {
    const catShow = shallow(<CatShow cat={cat} />)
    const showHeading = catShow.find("h2")
    expect(showHeading.text()).toEqual("Cat Show")
  })
  it("displays a card", () => {
    const catShow = shallow(<CatShow cat={cat}/>)
    const card = catShow.find("Card")
    expect(card.length).toEqual(1)
    const cardTitle = catShow.find("CardTitle")
    expect(cardTitle.length).toEqual(1)
    const cardText = catShow.find("CardText")
    expect(cardText.length).toEqual(2)
    const showImage = catShow.find("img")
    expect(showImage.length).toEqual(1)
  })
})
```