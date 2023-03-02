# Functional Props
So far we have talked about how we can store information temporarily in React using state, and then if we want to send that information from state to another component we can do so with props.  But one problem with props is that they can only go in one direction.  So we can pass something from state to a component, but that component cannot send information back.  This can pose a problem when we have functionality on this "child" component that we need to send back to the "parent".  So today we are going to talk about how we can extract the information needed from a "child" component using functional props.

## Setup
- Checkout branch `$ git checkout -b react-functional-props` in lecture-examples repo
- Create new app `$ yarn create react-app react-functional-props`
- `$ cd react-functional-props`
- `$ yarn start` to run server
- Open new terminal window and text editor
- Convert App.js to ES6 syntax and remove boiler plate CSS

## BBQ App
For today's example, we are going to build a BBQ app for our cohort.

App.js
```javascript
import './App.css'

const App = () => {
  return (
    <>
      <h1>Cohort BBQ</h1>
      <h2>Menu</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  )
}
```

The goal is to have a menu that is going to list all of the different items much like this.  But currently this is not very DRY and not utilizing the awesomness of React.  So let's get rid of the list, and let's think of how we can make this cleaner and more efficient.

So first we want to store our data.  Let's store our menu items in state as an array of objects.  The object will be the name of the item, and whether or not it has been ordered.

App.js
```javascript
import './App.css'
import React, { useState } from 'react'

const App = () => {

  const [menu, setMenu] = useState([
    { name: "item1", ordered: false},
    { name: "item2", ordered: false},
    { name: "item3", ordered: false},
    { name: "item4", ordered: false},
  ])

  return (
    <>
      <h1>Cohort BBQ</h1>
      <h2>Menu</h2>
    </>
  )
}
```

Now that we have our state set up, let's create a component to display each menu item.  I am going to call it MenuItem.js


```javascript
// component/MenuItem.js
const MenuItem = () => {
  return (
    <>
      <p>Menu Item</p>
    </>
  )
}


// App.js
import './App.css'
import React, { useState } from 'react'
import MenuItem from './component/MenuItem'

const App = () => {

  const [menu, setMenu] = useState([
    { name: "item1", ordered: false},
    { name: "item2", ordered: false},
    { name: "item3", ordered: false},
    { name: "item4", ordered: false},
  ])

  return (
    <>
      <h1>Cohort BBQ</h1>
      <h2>Menu</h2>
      <MenuItem />
    </>
  )
}
```

I can now map over menu on App.js and do my component call on the return of the map for each iteration of the menu items.  I will still need to pass the information I need on my component as props, but in this case, it will be item

```javascript
// App.js
import './App.css'
import React, { useState } from 'react'
import MenuItem from './component/MenuItem'

const App = () => {

  const [menu, setMenu] = useState([
    { name: "item1", ordered: false},
    { name: "item2", ordered: false},
    { name: "item3", ordered: false},
    { name: "item4", ordered: false},
  ])

  return (
    <>
      <h1>Cohort BBQ</h1>
      <h2>Menu</h2>
      {menu.map((item, index) => {
        return (<MenuItem item={item} key={index} />)
      })}
    </>
  )
}
```

We now are displaying MenuItem for each object in my menu state variable, but instead of saying menu item, I want to say the name for each item.  To do this, I first need to accept the props into this component so then I can access values from it.

```javascript
// component/MenuItem.js
const MenuItem = (props) => {
  return (
    <>
      <p key={props.key}>{props.item.name}</p>
    </>
  )
}
```

## Conditional Rendering
Now that I am displaying my menu items, let's say if I were to order something, I want to display that I have.  To do this, I am going to conditionally render based on the ordered status in state.

```javascript
// component/MenuItem.js
const MenuItem = (props) => {
  return (
    <>
      <p key={props.key}>{props.item.name}</p>
    </>
  )
}
```