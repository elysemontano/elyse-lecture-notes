# Terminal Commands

We are going to be working with something called the terminal.  Oftentimes when we interact with something on a computer, we are using something called a Graphical User Interface (GUI).  But before there was a beautiful GUI for us to work with when talking with our computers, there was the terminal or the command line.  The terminal is that cool looking box that you see in the movies when people are typing ferociously commands to their computer.  Ultimately though, this is where we can provide commands directly to the computer providing us as developers more control and sometimes even access to interact with things we otherwise may not have access to via a GUI.  

## Opening the Terminal

There are a few different ways for us to open the terminal.  

- You can go to Finder >> Applications >> Utilities >> Terminal
- The easier way is using the Spotlight Search on Mac.  This can be found by either clicking the search up at the top right corner or using the key binding cmd + space bar.

Once you have this open, you can then type terminal and a box should appear.

This box is our wonderful terminal who we are going to become very good friends with over the next few months.  So let's start with some basic commands that are going to be essential in your everyday lives going forward.

### Commands
`$ pwd` 
  - Present working directory.  This essentially shows the path to the current directory you are in.  Directory can also be called folder and you will find we use those words interchangeably.

`$ ls`
  - List is one of my favorite commands. This command will tell you all the files available in the current directory.

`$ cd`
  - Change directory allows you to navigate to a folder/directory within your current directory.  You must be very exact with what you type.  This is case and space sensitive

  - Using tab will auto complete the name

`$ cd ..`
  - To move one level out of the directory you are in, you will add two dots after cd.  The first dot is to express this is where I am currently, and the next dot is the next level out.

`$ mkdir <directory_name>`
  - This command will make a new directory wherever you currently are with the file name.  Make sure to either use an underscore or a dash to separate words.  The terminal recognizes spaces as a new command and not a second word.

`$ rmdir <directory_filename>`
  - This will remove the directory

`$ touch <file_name>`
  - Touch will create a file.

- There are ways to remove files through the terminal, some of which can be slightly dangerous and so for now I would recommend using the GUI and just move files you wish to remove to the trash can.

`$ open .`
  - Will open the folder you are currently in the finder


When writing code, we will be using text editors.  Many of you became familiar with VS Code in Jumpstart, but the text editor is where we will store and work on code.  To open the text editor in the terminal:
`$ code <filename>` - opens just that file
`$ atom .` - opens that folder
`$ code .` - opens folder

`$ history`
  - This will give me a log of commands I have ran

- Up arrow will cycle through the commands you have ran
- Down arrow will cycle down through the commands you have run to the most recent
- Right and left will allow you to modify command that is written but not executed yet.

(option click will allow you to select a location on the command to type)

`$ clear`
  - Clears the content currently being displayed on terminal.  (Does not clear history)

### Syllabus
Discuss where to find the challenges for terminal section.

### Customizing


### Troubleshooting
Ctrl + c 
- will stop whatever is processing in your terminal
