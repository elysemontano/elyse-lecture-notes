#  Create React App

We just looked at react as a JavaScript component that allows for us as developers to invoke functions as individual components and display them as many time as we like. 
Each of these components can be thought of as legos or building blocks that we can use to build robust websites. React is a lot more than just simple JavaScript components rendering HTML-- React has an entire eco system of libraries and modules that can be brought in from other developers. In fact Facebook built React with as little extra features as possible to encourage developers to create their own additions and modification to the platform. 

So how do we gain access to all this wonderful magic made by computer wizards around the world? Thats where I am going to reintroduce you to yarn. Yarn or "Yet another resource negotiator" is a JavaScript package manager also built by Facebook that optimizes build and download times of the packages. 

Using yarn and a special command called create react app -- we can have the yarn software build us a new website that can be run locally in a less than a minute. 

## Process to Create React App
The process looks like this
1. First I navigate to where I want to build my new project
2. I run the command $ yarn create react-app <name of app goes here>
    - Make sure name of app is kebab-case
3. next I cd into the app that has been created
4. from here I run $ yarn start
5. Boom! Just like that we have a running app that I can update and modify to my hearts content.


## React Tour
I want to take you on a little tour of the app

- public/ - (we often won't need to modify things in here)
  - index.html
      - Everything in React breaks down into html, as that is ultimately what everything on the internet that we see breaks down to.  This file here is where all of the application gets funneled into and this is what is displayed.
      - div id=root connects to src/index.js - we won't need to interact with this, but this is just to help connect some of the dots of how things move through React.

- src/ - (where most of our coding will be placed)
  - /App.css
      - Just like you can style any HTML page with some CSS, all styles for the application can be placed in here.
  - /App.js
      - App.js is basically the nerve center of the app.  

Currently our App.js is a functional component. Which is great, but I like to modify it just a little bit to my preferred syntax.

```javascript
const App = () => {
  return(
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
```

## Using Components
Next up we need to build some of our building blocks so that we can use them
  - In the src folder we need to create a folder called components.  These components will be pieces we can use over and again throughout our app if we want.  Remember, these are simply functions, and what is so wonderful about functions?  We can reuse them dynamically, and the same goes for these components.  Each Component is just a small piece of logic thats combined with all the other small pieces of logic that will create a working and scalable application.

### Header Component
The first component we are going to make is the Header component
  - in components I create a new file and call it Header.js
  - inside that file I create a function called Header that returns some jsx

```javascript
const Header = () => {
    return(
      <>
        <h1>This is the header</h1>
      </>
    )
}

export default Header
```
now that this is built I want to make it available to my SINGLE PAGE APP in App.js.  Ultimately, React will help us build a single page application, also known as SPA

-  So in App.js, I need to import this particular file into App.js AND call the component.

```javascript
import Header from './component/Header'

const App = () => {
  return(
    <>
       <Header />
    //     ^ can anyone tell me what this is called right here
    </>
  )
}

export default App
```

### Books Component
Next up we are going to make a list of favorite books

```javascript
const Books = () => {
    return(
      <>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
        </ul>
      </>
    )
}

export default Books
```

Same as before I am going to import that new building block into my app 

```javascript 
import Header from './component/Header'
import Books from './component/Book'

const App = () => {
  return(
    <>
      <Header />
      <Books />
    </>
  )
}

export default App
```

### Footer Component

```javascript 
const Footer = () => {
    return(
      <>
        <p> Learn Academy | Cohort Year </p>
      </>
    )
}

export default Footer
```


```javascript 
import Header from './component/Header'
import Books from './component/Book'
import Footer from './components/Footer'

const App = () => {
  return(
    <>
      <Header />
      <Books />
      <Footer />
    </>
  )
}

export default App
```

## Recap: 
1. We used yarn(yet another resource manager) as our package manager
2. React is an SPA(single page application) based on components
3. Generally one component per file
4. Component and file use PascalCase
5. Command to create a React app:
    $ yarn create react-app <app-name>
6. React components bring info from other files using import
7. Components require an export
8. React components are invoked/called using <ComponentName />
9. Can see changes by running local server 
    $ yarn start
    To close server CTR + C
10. Errors can be seen in browser console
