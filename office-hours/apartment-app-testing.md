```javascript
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow, mount } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentEdit from './ApartmentEdit'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

import mockApartments from '../../mockApartments.js'
import {screen} from '@testing-library/react' 

describe("When ApartmentEdit renders", () => {

  let apartmentEditRender
  beforeEach(() => {
    apartmentEditRender = shallow(<ApartmentEdit apartment={mockApartments[1]} />)
  })


  it("displays a heading", () => {
    const apartmentEditHeading = apartmentEditRender.find("h2")
    expect(apartmentEditHeading.text()).toEqual("Update the treehouse")
  })
  it("displays a form", ()=>{
    const apartmentEditForm = apartmentEditRender.find("Form")
    expect(apartmentEditForm.length).toEqual(1)
  }) 

  it("has a button with a submit attribute", () => {
    const fn = jest.fn()
    const wrapper = shallow(<ApartmentEdit apartment={mockApartments[1]} updateTreeHouse={fn}/>)
    // gives the display of button wrapper
    // const buttWrapper = wrapper.find("Button").dive()
    console.log("Wrapper before click", wrapper.state().submitted)
    
    expect(wrapper.state().submitted).toBe(false)
    wrapper.find("Button").simulate("click")
    //.state() will show state object
    console.log("Wrapper", wrapper.state().submitted)
    
    // TypeError: this.props.updateTreeHouse is not a function --- corrected with mock function

    // received AptEdit [Function (anonymous)]
    // const buttWrapper = wrapper.find('Button').props()
   

    // gave AptEdit [Function: props]
    // console.log("Button", buttWrapper)
    // console.log("AptEdit", wrapper)

    // const buttWrapper = wrapper.find('Button')

    // // gave AptEdit [Function: props]
    // console.log("AptEdit", buttWrapper)

  
    expect(fn.mock.calls.length).toEqual(1)
    expect(wrapper.state().submitted).toBe(true)
  })

  
  // it('should call onChange when text input changes', () => {
    
  //   jest.mock('react-router-dom', () => {
  //     return {
  //       Redirect: jest.fn(({ to }) => `Redirect to ${to}`),
  //     }
  //   })
  //   expect(screen.getByText('Redirect to /')).toBeInTheDocument()
  // })
})

```