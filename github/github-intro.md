# GitHub
Git and GitHub can be a bit confusing at first but it is essential to the workflow as developers, so for that reason, we are spending the entire day today to work through how we are going to code together using these technologies.

With the complexity that we are going to be diving into today, we are likely going to be spending some time bug fixing.  During this process, please be patient with yourself and your classmates.  It will also be really important to pay close attention to detail.  Spaces, capitlization, spelling all are extremely important.

## Git
Yesterday we talked about git which is a version control software that allows us to essentially mark each save we make to our code so that we have a history of those sets of changes.  Each new version we save has an id that we can look at.

## GitHub
GitHub is an online platform that uses git technology.  GitHub allows developers to store their code and collaborate on their projects.  

Some fun facts about GitHub:
- Largest host of source code in the world
- Written in Ruby on Rails

GitHub is essentially a GUI (Graphical User Interface) for Git

There are several different ways to interact with GitHub, however in this class we are mainly going to be interacting with GitHub through our terminal as this gives us the foundational knowledge on how things operate under the hood.  Learning this way makes it easier down the road if you wish to learn a different GUI.

Because we are using this in the terminal though, the terminal is very sensitive to the commands we enter, so this is why we need to be very attentive to detail.

## GitHub Setup
Yesterday we created GitHub accounts and should have been added to the cohort's shared organization.  This will be the place where not only can we find our syllabus for the class, but also where we will store all of our code.

Initially we started off working on our personal accounts and talked briefly about creating repositories.  A repository is just a folder, a specially named folder that is stored on GitHub.

We are able to take this repository or repo for short and clone(copy) it down onto our computer.  This folder will automatically have a connection to git.

So let's practice the process of cloning our repo down onto our computers, but then we are also going to make modifications and then send those changes back up to GitHub.  The first time we do this is going to require some setup to be done.  Because we are using our GitHub account to transmit information, we need to set up our command line to be signed into our GitHub account as well.

Let's start with cloning down a repo.  If you haven't already created a repo on your account, go ahead and do so.  We will then use the link at the top and copy it.  In the terminal we will run:
`$ git clone <url>`

From here, if I want to interact with this folder, I need to cd into the folder.
`$ cd <folder-name>`

`$ ls` Shows there is nothing in here, but if I run `$ ls -a` I can see all hidden files which shows that we have a git connection in here.

Let's add a file to this repo
`$ touch exploring-github.md`

Since I need to use an extension to say what kind of file I am working with, I am using .md which stands for MarkDown.  Mark down is a text language that is used for documentation.  In fact, the entire syllabus is written in markdown.  It essentially feels very similar to a word document but has a little development flavor to it.

I can now open this folder in my text editor to modify this file. `$ code .`

## Markdown
To start off in this file, I want to write in here a header or a bold text.  Headers are measured by a hash (#) mark.  They can vary in size by adding extra hash marks.

** Write some headers in file **

## Configurations
To do this next step, let's have our syllabus open and head to the section that sats Git and GitHub Intro and Configurations.

`$ git --version` - Informational command that tells us what version we are on.
`$ git config --global user.name "Your name"` - Won't give an output, but make sure you don't get an error.
`$ git config --global user.email "youremail@email.com"`
`$ git config --global credential.helper osxkeychain` - How we want to save our credentials on the computer.  In this case, we are using osx key chain.

** Get a volunteer student to do the following steps **
`$ git config -l` - Informational command that shows us what we just entered.  Make sure everything is correct.

- Head to GitHub > Settings > Developer Settings > Personal Access Tokens
- Generate new token
  - Note: LEARN Github Token
  - Change expiration date to 6 months out
  - Select: Repo, AdminOrg, Notifications, User
  - DON'T NAVIGATE FROM PAGE UNTIL WE HAVE USED THIS KEY!

Next we need GitHub to prompt us for this key. To do this we need to try to send something up to GitHub.  
`$ git status`
`$ git add <filename>`
`$ git commit -m "message"`
`$ git push`
This will prompt us to enter some info.  
  - Enter your GitHub handle for username.
  - Password will be the access token we just made.  NOTE: The terminal will automatically hide any password typed and it will look like you have not typed anything.  Do not repeat the password, make sure you type it only once.
  
