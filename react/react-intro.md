# React Intro 

React is a JavaScript library for building user interfaces invented by Facebook around 2011.
So, what is considered a UI (user interface)?
  - A UI is how you would interact with an application.  Slack is a UI, something like a maps app on your phone is a UI.  
  - A UI is different than something like an API which stands for Application Programming Interface.  An API transmits data but does not have an actual view that we can interact with.

So, what do I mean when I said React is a Javascript library?
- Library - collection of code snippets for developers to use in specific ways
- JavaScript library - code snippets are node modules
- Package manager - yarn, organizes and manages the node modules

** Possible side note: Frameworks provide a structure (like a skeleton, or a scaffolding…or a framework) to base your entire project around. This structure is created through page templates (provided by the framework) with specific areas set aside for inserting framework code (versus the library format, where the developer decides where to implement library code). **

Applications using React as their UI library:
- [react](https://reactjs.org/)
  - Meta (Facebook)
  - Netflix
  - Uber
  - Yahoo!
  - Airbnb
  - Atlassian
  - Dropbox
  - NYT
  - Zendesk
  - Asana
  

### React
- Component based - built from little pieces like a tile mosaic
- Scalable - components make it so you can scale easily from 4 users to 4000
- Reusable
- User interactions focused

### Scalable
- think about how your app will grow
- create code that will work under many conditions
- React was created so Facebook could scale from only holding students for ivy league schools to colleges around and eventually the whole world

### Reusable
- Components
  - functions are reusable
  - functions return data including objects 
    - objects have data (some kind of data type) and behavior (method)
    - Objects can hold JSX (Javascript XML(extensible markup language)) 
        - JSX is JavaScript flavored markdown that behaves very similarly to HTML 


### User Interactions
Let's talk about some vocabulary that is important to note that makes React different than just an HTML file and why it is such a great tool to use.

- DOM - document object model, visual representation of your code.  Let's the browser know where things are at structurally and what can be interacted with.  The DOM uses an HTML document as a tree of nodes.
- Node - Each node, represents a single HTML element.  
- REACT uses Virtual DOM - Listens to the individual nodes in the DOM, compares the change and refreshes only the affected elements.(For example: I can reply to a thread, or respond with an emoji and only that is changing instead of refreshing the entire page which would be really irritating).  

### Getting Started
Lets take a look at the syllabus, and look at the code block in getting started.  This is good old fashioned HTML.  I am going to copy this over to an HTML file.

I want to focus into what is showing in the middle of the page:

```javascript
const App = () => {
  return <h1>Hello World!</h1>
}
```

We are looking at a function with PascalCasing.  Interestingly enough, our function is returning some HTML.  This is ultimately the most basic React component that you can have.


### React Components
- Made up of functions
- Must have a return
- inside the return is markup - JSX (JavaScript XML) combo of HTML and JavaScript
- Component Call/ Invocation: <HelloReact />


### Adding More
Let's go ahead and add another function into my HTML:

```javascript
const App = () => {
  return <h1>Hello World!</h1>
}

const Cohort = () -> {
  return <h2>Hey Cohort</h2>
}
```

Currently Cohort is not being called.  So I can call on this function in my App function.  An important note though, we can only return ONE thing.  So having an h1 followed by a component call is trying to return two different things.  

To fix this, we need to wrap around this something called a JSX fragment.  Fragments are empty opening and closing tags that don't create an additional node in the DOM.

```javascript
const App = () => {
  return(
    <h1>Hello World!</h1>
    <Cohort />
    <Cohort />
    <Cohort />
    <Cohort />
  )
}

const Cohort = () -> {
  return <h2>Hey Cohort</h2>
}
```

## Challenges
Give a half an hour solo time to tinker around with this.  Do not push to GitHub!


### Create React App
- yarn create react-app folder-name
- yarn start - fires up the server at localhost:3000
- control + c - stops the server
- files we care about:
  - public/index.html
  - src/index.js
- file we will work in:
  - src/App.js
  - src/App.css

