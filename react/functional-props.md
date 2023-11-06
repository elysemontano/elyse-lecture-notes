# Functional Props
So far we have talked about how we can store information temporarily in React using state, and then if we want to send that information from state to another component we can do so with props.  But one problem with props is that they can only go in one direction.  So we can pass something from state to a component, but that component cannot send information back.  This can pose a problem when we have functionality on a nested component that we need to send back to the main component.  So today we are going to talk about how we can extract the information needed from a nested component component using functional props.

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
      <p>{props.item.name}</p>
    </>
  )
}
```

## Conditional Rendering
Now that I am displaying my menu items, let's say if I were to order something, I want to display that I have ordered it.  To do this, I am going to conditionally render based on the ordered status in state.

```javascript
// component/MenuItem.js
const MenuItem = (props) => {
  return (
    <>
      <p key={props.key}>{props.item.name}</p>
      {/* Conditional rendering allows us to render something based on a condition being true
      If item ordered is true (props.item.ordered === true), display "ordered" */}
      {props.item.ordered &&
        <p>Ordered</p>
      }
      <button>Order</button>
    </>
  )
}
```

Currently my button is not going to do anything because I have not setup an onClick.  So let's do this next so when I click on my ordered button, I am updating the status of my item to ordered.  

But here is the dilema, my state is being managed in App.js, but my button is on my MenuItem component.  So I need a way to send the information from my component back up to App.js or up the river so to speak.

To do this, I am going to head back over to App.js and create a function that I can pass down as props to my MenuItem component and will take an argument of which item I am clicking on and update state for that item to ordered.

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

  // Create a function with an argument of which item I clicked on that I can pass to MenuItem and be called when the button is clicked
  const orderItem = (selectedItem) => {
    console.log('clicked')
  }

  return (
    <>
      <h1>Cohort BBQ</h1>
      <h2>Menu</h2>
      {menu.map((item, index) => {
        return (
        <MenuItem 
          item={item} 
          key={index} 
          orderItem={orderItem} 
          index={index} 
        />)
      })}
    </>
  )
} 
```

So I am passing my orderItem function as props, along with index so I can know which item I am clicking in MenuItem.

Now let's setup the onClick in MenuItem

```javascript
// component/MenuItem.js
const MenuItem = (props) => {
  return (
    <>
      <p key={props.key}>{props.item.name}</p>
      {// when the item ordered is true (ordered === true) display "ordered"}
      {props.item.ordered &&
        <p>Ordered</p>
      }
      <button onClick={props.orderItem}>Order</button>
    </>
  )
}
```

So currently, we are invoking the function, but when we setup an onclick on a button like this, React will immediately invoke the function which can be problematic down the line and has the potential to create a stack overflow.

To resolve this issue, we are going to use an anonymous function in here to control when the function is invoked.

```javascript
// component/MenuItem.js
      <button onClick={() => props.orderItem}>Order</button>
```

The anonymous function is basically saying don't run the function until I click on it.

Now, I need to pass some information when this function is invoked.


```javascript
// component/MenuItem.js
<button onClick={() => props.orderItem(props.index)}>Order</button>
```

And I can update my function in App.js to display the selected item as well.

```javascript
// App.js

  const orderItem = (selectedItem) => {
    console.log(selectedItem)
  }

```

So now we are seeing in the console which item is selected!  Awesome!  

Next we need to update that item to have a status of ordered.  For this, we need to first extract the item from menu and then reasign the value for ordered to be true.

```javascript
// App.js

  const orderItem = (selectedItem) => {
    console.log(selectedItem)
    // finding the item by index[selectedItem] in the menu array, then accessing the ordered property and reassigning the value to true
    menu[selectedItem].ordered = true
  }

```

What we have though is not changing state yet, it is just setting us up so we know what we want state to change to.  To update state, we need to use setMenu.  When setting menu though, we want to essentially make a copy of menu with this selected item being changed to ordered.  So we are going to use the spread operator to make a copy of menu.  This takes all the values of menu, duplicates it, and with the changes made right before.

```javascript
// App.js

  const orderItem = (selectedItem) => {
    console.log(selectedItem)
    // finding the item by index[selectedItem] in the menu array, then accessing the ordered property and reassigning the value to true
    menu[selectedItem].ordered = true
    // Spread operator makes a copy of menu with the updated value
    setMenu([...menu])
  }

```

