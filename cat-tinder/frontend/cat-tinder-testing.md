# Cat Tinder Testing
At this point, we have done our basic setup for our frontend application.  While there are a lot of things that are very different from frontend to backend, one thing that will persist across all coding principles is TESTING!  

Testing can oftentimes help us pinpoint and locate problems that otherwise may take us a long time to find by just poking around our application.

Let's start off by checking Trello which tells me to call this branch test-coverage and my acceptance criteria.

To write our tests, we are going to be writing our tests using our old friend Jest, but this time we are going to be using a utility called React Testing Library that will allow us to test our React components while writing in Jest.  We can find the docs to Testing Library in the syllabus, and I highly recommend spending some time looking through this to get familiar.  Testing Library specifically has lots of testing components not limited to just React, but also to many other popular technologies.  That being said, since we are building our frontend using React, we will be using Testing Libraries React tests.
<!-- 
TDD - gives us confidence in the functionality of our code
Red Green Refactor
- Write test
- See it fail
- Write code
- See it pass
- Refactor- less lines, more efficient code -->

Before we start writing our tests, I want to talk about some of the different types of testing we may run into as developers.

- Static: Consists of peer reviews and inspecting pages looking for syntax mistakes.  Essentially, we are poking around our application or asking others to check that our code looks efficient. 
- Unit: Looks at one portion of the code and verifies it giving an expected result.
- Integration: Tests how our code is working together in our application
- End-to-end: Automates the user going through the whole application.  We won't touch on end-to-end testing in class, but it is certainly worth digging into if you are interested in testing.


## Test Setup
When we created our React app, yarn actually snuck in both Jest and React Testing Library in there for us.  

- Jest: javascript testing framework
- React Testing Library: provides methods to write the test scripts, works with the DOM nodes
    - React testing library is going to focus on the end user side of how users will experience your webpage which is a really practical way to test for the frontend side of our application.

With React Testing Library, we do have to think about testing in a bit of a different way than we have with Jest and Rspec.  Our goal is to ensure that what you are expecting when you are building this application for the user, you're user will be getting that result.  So it is very user event focused rather than our traditional input/output focus.

We can go to our package.json and take a look at this as well.  We see that jest is a dependency, and down where it says scripts, we can see that the test command will run the react-scripts test. Let's try that

`$ yarn test`

When I do this, I am prompted with a few different options.  I want to run all tests, so I will type 'a'.

Currently, I have a failing test because the test that lives in my App.test.js is trying to find stuff that no longer exists since I got rid of my boiler plate code.  Let's get rid of the current test that lives in here, and we will setup our own.  Before we set up our own test though, I do want to go over some of the imports in this file.

At the top, we can see that we are importing several things.  We are bringing in render and screen from testing-library/react.

imports:
- render: allows me to call upon that component
- screen: allows me to actually see the whole node tree that gets sent to the user
- Since we are testing the App component, we need to import it as well

Alright, so with any other jest and even RSPEC test, we have three key parts to our setup.  Describe, it and expect.

```javascript
describe("<App />", () => {
  it("renders a greeting", () => {
  })
})
```

Great, now inside of our it, there are also three stages we need to consider. Arrange, Act, and Assert. 
- Arrange: what is needed to setup the environment that I am testing.  In this case, I need to render my component that I want to test (App.js)

```javascript
    it("renders a greeting", () => {
      // arrange
      render(<App />)
```

  I can use screen which I have imported up at the top to be able to check specific information on the page, but I can also run a method on it called debug() to get a visualization of what is happening in App from my testing library's perspective.

  ```javascript
      render(<App />)
      screen.debug()
    })
```

I can see this is telling me that I need BrowserRouter, which makes sense since our App component has BrowserRouter wrapped around it in index.js.  With that, let's do the same here:

```javascript
import { BrowserRouter } from "react-router-dom"

describe("<App />", () => {
  it("renders a greeting", () => {
    // arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    screen.debug()
  })
})
```

Now I can see all of the stuff rendering on my page.  I can call on these things to make sure my App page is rendering something specific.

- Act: getting the method I need to pull this information.  Here I know I want to see a greeting, so I can store it in a variable

There are some specific React Testing Library methods we are going to frequent:
- getByText(): finds an element by it's text value
- getByRole(): finds an element by it's attributes (google html roles to see the different varieties)


```javascript
import { BrowserRouter } from "react-router-dom"

describe("<App />", () => {
  it("renders a greeting", () => {
    // arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // act 
    const greeting = screen.getByText("Home")
  })
})
```

- Assert:  Now I want to use this information, to assert or expect that my greeting variable is in the document by using that matcher.

```javascript
describe("<App />", () => {
  it("renders a greeting", () => {
    // arrange
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // act 
    const greeting = screen.getByText("Home")
    // assert
    expect(greeting).toBeInTheDocument()
  })
})
```

There is another really cool developer tool similar to screen.debug() called screen.logTestingPlaygroundURL() which when I run my test, it will give me a url.  When I go to this URL, it will show me the nodes that are on the page, how it should be rendering and if I highlight a specific node, it will tell me what code I need to add to my test to target that node.  Pretty cool tool to play around with.


Let's go ahead and start writing another test where we are checking that it has a heading.  For each it block, I need to follow those same principles of arrange, act, and assert.  

Each time I create a new it block, I will have to render my App component.  There is a way to write this so that you only have to write it once, but I will leave that to you when you are going back and DRYing up your code.

When calling on screen, this time I want to use my testing playground to help write out the syntax to get by a specific role.  Each element has a specific role that helps screen readers making your code more accessible.  Inside, it is calling on an object where the key is name and the value is what is displayed on the page with a regex (string matcher).

```javascript
it("has a heading", () => {
  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  const heading = screen.getByRole('heading', {
    name: /home/i
  })
  expect(heading).toBeInTheDocument()
})
```

Debugging tools:
- screen.debug()
- screen.logTestingPlaygroundURL()


## Header Test
So in Trello, we are asked to create tests for our Header.  So let's do that next.  We first need to create a test file with the extension test.js.

I am going to copy the imports from App.test.js into this file and just modify as needed.

Looking at the syllabus, there is another matcher we can use to check for images, let's use toHaveAttribute this time around.

```javascript
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from "react-router-dom"

describe("<Header />", () => {
  it("has an image", () => {
    // arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debug
    screen.logTestingPlaygroundURL()
    // act
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", link)
  })
})
```

Make sure I have an image in my Header component:

```javascript
import React from 'react'

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="cute cat"/>
    </>
  )
}

export default Header
```


## Footer Test

```javascript
// src/components/Footer.test.js
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
  it("has a copyright", () => {
    // arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // debug
    screen.logTestingPlaygroundURL()
    // act
    const footer = screen.getByText(/&copy; LEARN | Elyse and Gene/i)
    expect(footer).toBeInTheDocument()
  })
})
```



```javascript
// src/components/Footer.js
import React from 'react'

const Footer = () => {
  return (
    <>
      <p>&copy; LEARN | Elyse and Gene</p>
    </>
  )
}

export default Footer
```