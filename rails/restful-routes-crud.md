# Restful Routes and CRUD
Today we are going to be building a FULL STACK APPLICATION, where we will combine the model layer, the user views, and the controller methods into a single application where the user can perform all CRUD actions on data that is stored in the database.

To start, let's revisit the how the internet works process.  We remember that the request was a location and action, and the response is a status code along with a payload, which then we can see the result as a user.  We have also gone through routes, views, controllers, and params. In our routes, we had to specify the routes from the URL in order to trigger a particular controller action.  We also had to define the HTTP verb that the route will be using.

As a full stack developer, you are going to define your location and define your action, you then make that request, then your status code is going to come back as a success or an error, and lastly we get a payload that is loaded to the page for the user to see.

To add to this further, we need to talk about something called RESTful Routes

## RESTful Routes
RESTful routes are the routes that map CRUD actions and the corresponding HTTP verbs into how we construct the controller for a full stack application.  

Rails really like to follow the RESTful route architecture, so it is going to follow these ideas and naming conventions exactly.

** Show slide show **

  - To talk about RESTful routes, I first need to start with CRUD.  
  
  - We know that CRUD stands for Create, Read, Update, and Delete.  CRUD is a methodology in development to say how we are going to interact with our data.  We can't actually code this methodology, but we use CRUD as a philosophy that a user can see information, they can create information, they can update some data, and can also delete something as well

  - This maps over to our HTTP verbs.  We do actually code these HTTP verbs.  We have GET, POST, PUT, PATCH, DELETE

  - So let's take a look at how these map over (click until complete)
      * Side note: The difference between Put and Patch is that Put will replace the entire instance and Patch will modify only a part of it.  These are often used interchangeably and is not a big deal which you use, but you may run into a situation where you only want to use a specific verb.


So the next step if we want to create a full stack application, is that we are going to need certain controller actions that map over our HTTP verbs.  Remember that the controller actions decides everything that goes on in our app.  

When we think about the MVC architecture, we have the Model which we have worked with that is the structure of our database.  We have also worked with a view when we were working with React.  Our controller is that control center that really tells us how we plan to interact with our model and then says ok now show the view.  

With our RESTful routes, we have certain controller actions that are going to get us to this basic CRUD functionality.

  - There are 7 controller actions that we are going to need to accomplish full CRUD.  Those actions are index, show, new, create, edit, update, and destroy.  Let's take a closer look at these actions.

  - When we think of index, we can think of a list of all of the information relevant to something.  So with our controller, index will get a list of all of our instances related to that specific model.  So think of GitHub how we have a list of all of our repos for the Alpha organization displayed initially.  This would be GitHub calling on an index method to get an array of all the repos correlated to the Alpha organization model.  * Side note: GitHub was built on Ruby on Rails

  - Next we have show, which if our landing page for GitHub shows all the repos, if I click on a repo that will show me the information of that single instance.  So show will show information about a single instance in the database.

I am going to skip new for just a second

  - Create allows us to add new content to our database

Also going to skip edit for just a second

  - Update allows us to replace or change existing data

  - Destroy is where we are going to remove data or an instance from the database.

So far, we have worked with all of these in the Rails console.  For instance, to get all of an instance we can run Animal.all to get an array of all of the instances.  For show, we have use Animal.find(id), we have also used .create and .update as well. 

These are all the actions we have used on the data side and now we are going to present to the user, to be able to do that from the view perspective.

The controller is going to be what helps us get between the data and the view.

Now let's take a look at new and edit. The reason why I skipped those is because we haven't needed to use these just yet in terms of performing CRUD because this is actually setting up a view form for our user.  Our create and update methods are only interacting with the database and is equivalent to running commands in the Rails console.  But new and edit allow us to call on a form so the user can then enter the information they wish to submit, and then create and update runs.

  - So new is going to give us a form 

  - And so will edit

Filling out a form does not equal creating the instance in the database.  Because creating an instance in the database would require us to use the POST method, but to display something, we would need a GET method.

  - So because new and edit are GETTING a form, they can be mapped over to our GET request HTTP verb.

  - We also have index and show that map over to our GET requests

  - When we want to create a new instance in the database, this would be a post request

  - To update an instance in the database, we can use either Put or Patch

  - Lastly, if we want to remove an instance in our database, we would use aDELETE request

This is the format that we are going to follow today as we are working through these controller actions.

Just remember as we are doing these steps:

  - CRUD is our big picture philosophy that says our app can perform these important actions for our users.

  - HTTP verbs help us make successful request and response cycles, where we have to specify which type of action we are taking.

  - Then we have the actual controller methods that we will code to collect whatever data we need from the database and then display whatever appropriate views are needed to the user.