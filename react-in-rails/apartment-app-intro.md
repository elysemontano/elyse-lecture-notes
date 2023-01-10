# Apartment App Intro (Mock Dev)

- Apartment App is a full stack monolithic application with devise that is meant to imitate a relatively realistic experience you may face in the development world.  We will have 4 teams (4 apartment apps) where each team will be split off into pairs or groups of 3 to work on a feature.  

Austin and myself will be the project managers where we will assign each pair or group to a task.  Each Trello card is crucial to the entire build, so EVERY person's contribution is vital to the end goal.  Each card will have acceptance criteria that we will look for when we are approving your PR's.  If you are implementing a feature in your code that you were not tasked with, we will ask you to remove it.  The expectation in the real world is that each feature has a specific expectation and that other cool feature you really want to add in is a separate task to be handled at a time that the project manager has deemed is appropriate for the build.

As project managers, we are going to do our very best to keep the flow of work fluid and consistent so there is no overlap, however, it does happen that you may be assigned a task that requires the code that lives on a branch another coworker is tasked with currently.  If you are stuck because you are waiting for some implementation from another coworker, check in with them to see if you can help and/or reach out to your project manager letting them know that there are prerequisites that you are waiting for and you may be reassigned.

# Trello
Let's take a look at our Trello board

- We have several swim lanes that resemble what you did in Cat Tinder.  We will follow this process again.  

- As mentioned before, you will be assigned a card to work on.  This DOES NOT MEAN YOU CAN WORK ON SOMETHING ELSE!!!  Your team is counting on you completing the task that you have been given, especially since some of these tasks cannot be completed until another card has been merged to main.

- Pay close attention to the details inside the card you have been assigned.  Do not veer from it.  Follow proper git management as well.  Branch names are at the top of the card and will be what we look for when you submit a PR along with all items from the checklist.  

- Once you merge a branch, you should checkout main, pull from main to update your local and checkout a your next branch.

After branch is merged:
`$ git checkout main`
`$ git pull origin main`
`$ git branch -d <old-branch>`
`$ git checkout -b <branch-name>`

- Your next task will be assigned when a PR is approved by your project manager.  This means, you may run into times that you are waiting on us.  This happens in the industry!  There are a few things that can be done during this time.  
  - First: take a 10 minute break
  - Second: Check your git hygiene (stale branches are deleted)
  - Third: Check in with your team mates


- When we get to styling (ONLY AFTER MVP IS REACHED!), you will be following the wire frame provided.  It will be common practice that you will be provided a wire frame from a designer that you will then need to build it to resemble it.  Often times, the wire frame has been approved by the client and the client is expecting exactly that product.  Deviations from the wire frame will need to be approved by the designer.

# Setup
- To get started, I am going to send 4 of you the link to the github classroom.  You will create the team name (the name of your room), and let me know when you have done that.

- Once the team is generated, everyone can click on the github classroom link and join the team.

- We will now ALL go through the first Trello card together as this will ensure everyone is up and running and ready to work.  This is the time to work through any blockers.

- Once every person has initial environment setup running, send everyone off into breakout rooms to work on the second card.  The second card will be assigned, so look for which card you have been tasked with and begin working with your partner





<!-- # Standup

- We will meet as a group twice a day and talk about what you are working on and if you have any blockers.  We will meet at the beginning of the day and after lunch as a team. -->