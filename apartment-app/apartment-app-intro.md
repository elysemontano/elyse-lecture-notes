# Apartment App
Apartment app is a full stack application that we will be building in small groups, essentially as dev teams.  In this project, you will build the application, work through CRUD actions on both front and back end, test your work using React testing library and Rspec, style the components as you work through them, and work together as a team to complete this task.  We will be utilizing Trello as a project management software to help keep track of what is in progress and the tasks that are needed to be completed.  

Since we will be working in groups of fours, there will be a little different dynamic when it comes to our project management.  Each team will be responsible for communication and be in agreement with each other on who is working on what tasks.  While you it is up to you on how you want to work in your teams, many groups find that splitting off into two pairs is helpful, just make sure each pair is still communicating with the other half of the team on blockers or progress made.  

As instructors, we will be around to help wherever and whenever possible and will also be reviewing PR's as they come through.  We will periodically check on your Trello board and will ask questions if something seems out of place.

We are going to go through a few of the initial steps together, starting with our Trello cards.

## Trello
We used Trello with Cat Tinder, where you were provided cards with specific tasks.  This time, together we are going to collectively think about the content that we are going to need as a class, and prioritize these items accordingly.

(Each first dash - is a trello cards, the following dashes are checklists inside the trello card)  

- Initial Setup (Located in apartment-app section in syllabus)
    - Installs
    - Devise
    - React in Rails
    - Reactstrap
    - Add jest

- Application Structure    
    - Apartment Resource
        - Associations (User has_many Apartments, Apartment belongs_to User)
    - React setup
        - Devise props
        - Components, Pages, Test Files
        - Routes setup on App.js for each page
    - Seeds

- Navigation 
    As an unregistered user, I can see the navigation options for a page with all the apartment listings, a page where I can create an account, and always get back to the home page. 
    As a registered user, I can see the navigation options for a page to add an apartment, a page with all apartments user has added, a page with all the apartment listings, and always get back to the home page.

    - Props passed through Header to Navigation
    - Link to Home (both for logged in and logged out user)
    - Link to all apartments (both for logged in and logged out user)
    - Link to my apartments when logged in
    - Link to create an apartment when logged in
    - Jest test for NavLink, Header, and Footer
    - Basic styling for Header and Footer
    
- Home Page
    - Welcome and description of application is displayed
    - Jest test to confirm page is rendering
    - Basic styling

- Backend Index
    - Rspec test for index method
    - Controller method for index exists

- Unprotected Index
    - Refactor route to dynamically pass all apartments
    - Render list of cards with each apartment displaying information for price, location, bath, bed, and image.
    - Jest test for the index page
    - Fetch call is created for index method to pull from database
    - Basic styling

- Protected Index
    - Refactor route to dynamically pass only current users apartments
    - ProtectedApartmentIndex only displays all apartments created by the current user
    - Jest test for ProtectedApartmentIndex
    - Basic styling

- Show
    - Refactor route to dynamically pass apartment
    - Render page that shows all that apartment's details
    - Provide link to show page on individual card
    - Link back to index
    - Jest test for Show page
    - Basic styling

- Create
    Rails:
    - Controller method for create exists
    - Strong params have been created in controller
    - Rspec request spec for create method
    React:
    - Form is added to ApartmentNew and inputs are setting state on component
    - createApartment method console logs the state object that will be sent to the database.
    - Jest test for ApartmentNew page
    - Fetch call is created for create method to pull from database
    - Basic styling

- Validations
    - Model specs ensure an incomplete apartment throws an error
    - Appropriate model validations are set to ensure the user submits all columns
    - 422 error is thrown if validations are not met
    
- Update
    Rails:
    - Controller method for update exists
    - Rspec test for update method
    React:
    - Form is added to ApartmentUpdate and inputs are setting state on component
    - updateApartment method console logs apartment id and state object that will be sent to the database.
    - Link to update page from show
    - Jest test for ApartmentUpdate page
    - Fetch call is created for update method to pull from database
    - Basic styling

- Delete
    Rails:
    - Controller method for destroy exists
    - Rspec test for destroy method
    React:
    - deleteApartment method is created in App.js and console logs the apartment id that will be removed
    - deleteApartment method is passed to protected index
    - Button on card allows user to delete only apartments they have created
    - Fetch call is created for delete method to pull from database
    - Basic styling

- Not Found
    - Basic Styling
    - Jest testing for Not Found page

- Additional Styling
    - Devise styling


** Duplicate Trello board after completing the cards for each group **




