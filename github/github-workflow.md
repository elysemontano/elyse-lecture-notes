# GitHub Workflow
First off, in understanding the workflow we are going to utilize in class, it is important for us to distiguish the difference between Git and GitHub.  

** Git Workflow slide **

Git:
- Version control software
- Lives on your individual machine

** space ** 
GitHub:
- Cloud service where we store git repositories

It is going to be a very common thing for us to want to be able to send some information from our machine, which you will hear commonly refered to as your local machine, to our cloud based service called GitHub, which we can refer to as the remote repo.  This allows us to be able to save our work in the event that something happens to our computer, we haven't lost all of our code base.  It also allows us to work with others on our code.

To send code from our local machine to the remote, we will push our code.  Pushing up our code is storing it to the cloud.

We can also access changes that our coworkers have made by bringing those changes down onto our computer.  In this case, we will pull changes from GitHub onto our local machine.

We have already explored the idea of having a folder in GitHub (repo) and made a copy of it (cloning) onto our local machine.  Taking a folder/repo from remote to local is cloning.

Inside that folder is where we will create our code.  So I can add some content, but when I do this, git is recognizing that there is a diff.  I have changes that I have made, but GitHub does not know about those changes yet.  To reconcile that diff, I need to push up my changes and anyone who wants to contribute would need to pull my changes to their local.  Push and pull is reconciling a diff.

** Stop Slideshow **


## Pushing Code to GitHub
So earlier when we were working in our first repo, I made some changes in a markdown file which can be viewed in my text editor.  But if I go over to GitHub, I don't see anything in there yet.  So right now, there is a diff between these two.  To update this, we are going to go through a 3 step process to push up my changes.  I like to call this the git trio.

Before going through that 3 step process, I ALWAYS like to use an informational command to see what files or folders GitHub is unaware of.  This command is one of the most important commands that we will learn and will potentially save you from lots of headaches if you pay attention to the details it provides.

`$ git status`
Git status tells us several different things.  For right now, what I am looking at is this red file which is telling me that there are changes on this file that GitHub is not aware of yet.  Once I know the status of the difference between my local and my remote, I can go through the git trio to reconcile that diff.

First we need to stage the files that we want to send up to GitHub using
`$ git add <filename>`

While it doesn't look like it does anything when I do this, if I run git status again, I can see that I went from having an untracked file, to having git recognize that this is going to be part of this process.

Next, we need to commit our changes.  Git commit is what actually creates version control.  Committing our changes is creating a label in GitHub for our changes.  Since we are creating a label, our commit is going to take a message (-m).  Our message will be placed inside of quotes that will communicate to yourself or other developers about the intent of the changes made on this commit.
`$ git commit -m "message"`

You can write anything you want in this message, but since this becomes part of your version history so it should communicate intent.

When I push enter, I see some things come back.  My commit message is now part of my version history and is displayed here, along with a combination of letters and numbers which is an id for this commit.


If I run git status again, I can see that all my changes are being tracked and there is nothing left to commit, so they are in version control.  But, I still am missing one more step to make GitHub actually recieve this version.  This is where I finally will push my code to GitHub.
`$ git push origin main`

Once I refresh my page, I can see my changes on GitHub.

** Repeat process by adding vocab to markdown **

Vocabulary List
- git
- GitHub
- local
- remote
- diff
- repo
- push
- pull
- reconcile
- GUI

`$ ls`
`$ git status`
`$ git add <filename>`
`$ git commit -m "message"`
`$ git push origin main`

** Repeat process one more time with git command cheat sheet **

Git Commands
- `$ git status`
- `$ git add <filename>`
- `$ git commit -m "message"`
- `$ git push origin <branch>`

Other Commands
- `$ ls`

I can also see on GitHub my history of each commit I have made.

** Give some time to practice ** 

## Collaborating on GitHub with Branches
** Create a blank google doc and share with class **

I would like everyone to write what you learned about GitHub.

If we all try to push to GitHub at the same time, this is exactly what is going to happen.  To help solve this problem, we are going to talk about branching.

** Slide show starting **

Everytime we push and pull on GitHub, we are doing it on a specific pathway.  That pathway is called a branch.  A branch connects the remote to local.

Branch - connection between remote and local

The default branch is called main.  Main is considered the source of truth.  Main should always be the best version of the code.  In development, the main branch is ultimately what will be in production and what users will use on the internet.

But if we all try to push to main, we are going to run into the same problem as the google doc.  Along with that, if your main branch is the source of truth and in production, and you need to work on code, how do you do that safely without potentially damaging your main branch?

So you are always on a branch, and by default you are on main, but we can create other branches or additional pathways that allow us to push and pull and it won't interfere with main.  We can create as many of those as we need to.  

** End Slideshow **

Let's go through this process together.  On GitHub, I have created a repo called <cohort-first-repo> on our shared organization that we are going to collaborate on.  Inside here, I currently have a README file that has a lot of the commands that we have just learned and/or are going to be learning about shortly.  

To get started, I need to clone this repo down onto my local.
`$ git clone <cohort-first-repo>`
`$ cd <cohort-first-repo>`

So now if I want to create a file and start working, if I am still on main and everyone does the same thing, we would run into that google doc situation.  So I am going to create a branch to create that alternate pathway for me to work on.

To create a branch, we will use the command
`$ git checkout -b <branchname>`

It is important to note that this is not creating any files so there is no extension needed on the branch.  This is creating an additional pathway between git and GitHub for me to work on.

When I checkout a new branch, it will atomatically take me onto that branch with a duplicate copy of my current main on my local computer.

I can then add a file on this branch
`$ touch github-practice.md`

If I run `$ ls`, I can see I have this file here and I can also see that I have untracked changes when running `$ git status`.  This file I just created only exists on this branch.  So if I hop back over to main, the file will no longer be there.

`$ git checkout main`
`$ ls`

But if I hop back over to my branch, the file comes back.
`$ git checkout <branchname>`
`$ ls`

** Navigate between branch and main a few times **

I can also use an informational command to find out all the branches I have available on my local machine.
`$ git branch`

** Make some updates on branch **
`$ git status`
When using git status, it not only shows me what files are untracked currently, but it also is showing me what branch I am on as well.  

Now to send these changes up to GitHub, I can do the git trio
`$ git add <filename>`
`$ git commit -m "adds markdown file"`
`$ git push origin <branchname>`
This time around since I am on a different branch than main, I want to push up to the branch and NOT to main.


Now if I head to GitHub, I don't see my changes because I am only showing main currently.  There is a drop down menu that I can view the different branches, and also I see this banner that shows I just pushed some work to a branch.  Let's follow this banner to *compare and pull request*, I am prompted to submit a pull request.  We are going to hold off on that step for right now.  

## Switching Drivers
So now that I have made these changes, but I am pair programming and it is time for us to switch roles.  My partner is going to need accesss to this code I just wrote.

** Get a volunteer to drive **
** Make sure they have cloned the repo and check branch, navigate to main **

Create a new branch
`$ git checkout -b <branching-initials>`
`$ touch <branching-first-names.md>`

Git trio

Now if we are to switch and I want to work on this code, I first need to head to the main branch.  From here I can check the branches I have available. `$ git branch` and currrently I don't see the branch that was just created. 

To do that, I need to fetch the branch
`$ git fetch origin <branchname>`

This now opens the door to access this branch, but has not put me into that branch just yet.  I need to navigate to that branch using `$ git checkout <branchname>`

** Make modifications to file and push **

** Switch back to volunteer **

Both myself and my partner are on the same branch, however their branch is not up to date with the changes I just made.  To bring in those changes, we need to pull them from GitHub.
`$ git pull origin <branchname>`

** Repeat process and have students practice this process for a while **

## Pull requests
So far, we have successfully cloned a repo, worked on code, pushed it up to GitHub, collaborated on the code with a partner and have been able to switch back and forth as drivers.  This is going to be our daily workflow when working on challenges after lectures.  There is one last step however that we will want to cover.

** Slide show **

Up to now, we have been working on a branch that is not main to collaborate.  Eventually when we have completed our work on that task, we are going to want to have the changes on our branch to become part of the source of truth (main).

To do this, we are going to need to submit a pull request (pr).  A pull request is a way to submit contributions to the main branch and update main.  When submitting a pull request, we are asking for GitHub to compare the changes between main and my branch and allow my changes to become a part of this.  Part of this process will include a review of the code prior to merging, or updating main with your code.  This is a very standard practice in development where you will have other developers review code to keep each other accountable.  In class, myself and Gene will review your pull requests and upon approval you can than merge your work to main.

** End Slide show **

** Submit a PR for branch **

Once your branch is merged to main, you will want to delete the branch since that task is complete.  To delete the branch, we are going to have to do this process in two places, on GitHub and our local machine.

Once we have merged our changes on GitHub, we need to let our local machine know that main has been updated.
`$ git checkout main`
`$ git pull origin main`

Now we can delete our stale branch
`$ git branch -d <branchname>`



