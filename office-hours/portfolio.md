# Portfolio

## Figma - wireframe
A wireframe is a layout or visualization of how you intend for a webpage to look like.  There are many different tools that can be used, the most simple and basic is a pen and paper and draw it out.  There are also more advanced tools, one of which is what I am here to talk to you about, and that is Figma.

- Figma is going to feel very similar to photoshop and illustrator.  Your going to have layers, and windows that allow us to modify certain aspects of what we are designing.

- For starters, we are going to need something to work off of.  This currently is not nessessarily a piece of paper for us to draw on yet, we need to tell it that we need something here.

### Create a Frame
- Top tool bar click on the frame tool
  - We have options to choose any variety of frames.  In this case, I am going to start with a desktop version and since I am working on a MackBook Pro, I will use the 16" frame.  

- I can scroll out using the trackpad or CMD - 

### Page Setup
Let's think about for a second on what a page looks like when we scroll through it.  This current view might be what the actual page will look like when you first land on it, but you're going to need to be scrolling through it, so as a result I want to accound for all the things that are going to be present on this page unless I make seperate pages.  In that case, you would want to create seperate frames for each page you are making.  For today's example, I am just going to make a static page, one single page where I can see all the content by scrolling down.

To make this frame mimic this effect, I can make this frame longer by dragging the bottom and expanding it.  

Now I have some space to work with and I've got almost like a blank piece of paper that I can now seperate into sections.

### Creating Sections
If you break down your portfolio into sections, you know certain things that you are definately going to want on there, like some kind of a welcome that has your name, and what kind of job you are looking for.  For most of you, that will probably be full stack web developer, or software developer.  You can have an about section, or that can live in the welcome as well.  
- Ultimately, trust you gut on how ou want to design this!  There is not a right way or wrong way.  This is simply meant to be a guide to help get you started, but ultimately this is your creativity, your portfolio that needs to display you in how you see fit.  Build it how you envision it, not how I envision it!

- We are going to start with this welcome section.  The entire frame that we are looking at, we can think of as the body in my html.  But then we are going to break this up into different sections, and we can think of each section as it's own div.  So we want them seperated in some way.  This makes it easier down the line to style specific things.  

  ** Click on box at top to create a box and drag it across the first quarter of page **

- This box will represent my welcom section.  I can also add a border so that it has a little more seperation if need be.  Once again, trust your design gut.

  ** Add border - click stroke and change size as needed **

- Now I am going to create another box to represent my next section or div.  I can simply copy my first box and paste it in.  I can also change the fill color of the box. 

- If I begin to run out of room and still want to add more sections, I can add more space by clicking on the layer on the left side where it says Mackbook Pro 16".  This once again essentially represents the body of my code.  All other pieces are just underneath that and I can highlight any of those as well.

- For this example, I am going to setup 4 sections - Welcome, About Me, Projects, Contact.  Some people like to add a skills section, a work history section, or fill in the blank, that is up to you and what you want to display.

- Now I have 4 sections, each one of these will be their own div.  I want to stress this, you will want to spend quite a bit more time on design than I am going to spend, I am just giving you some tools to help understand how to utilize figma.

#### Welcome Section
- Create a heading by clicking the T on the tool bar and drawing a text box.  Then add name and adjust font to a larger size like 96.
- Create another text box for a subheader that has your title.  Adjust font

#### Nav
- Navbars notoriously take a long time to style when you are coding.  For starters, it is it's own div, so we can create another box but this time it will be long and narrow.
- We can also add some icons as you may typically see on a navbar.  Figma allows alot of different plugins including libraries that alot of developers utilize in their build.  A popular one that I really like is called Font Awesome.  We can simply install the plugin.
  - Right click in box -> plugins -> font awesome icons
  - Pop up box appears with all of the icons and you can search for specific ones.
  -  Look for GitHub.
    - Icon will be very small -> click on icon in left toolbar to find it.  Holding shift and dragging the arrows will keep the ratio size consistent.
  - Add LinkedIn Icon
  - Add Hamburger Menu Icon

#### About Me
- Create a header that says "About Me"
- Create a larger text box and fill with lorem ipsum.
  - Top right icon in tool bar -> click on plugins -> find more plugins -> search for lorem ipsum
  - Right click in large text box -> choose plugins -> Lorem Ipsum
    - This gives a pop up box where you can choose how many sentances you want to add. 
    - Add 7 sentances and make a larger font

#### Projects
- Copy and paste header "Projects"
- Create project cards
  - Add box and duplicate 3 times
  - You can get more in depth by providing a picture and text, and links.  Once again, get creative and spend some time on this.

#### Contact
- Copy and paste header "Contact"
- Create two boxes to mimic a form

#### Add Some Flare
- Figma is extremely advanced and we can play around and modify to meet any design decisions we want to make in here.  

- We can change background color, bring in background images, change font, etc

- Color codes in figma are the same ones used in CSS and across many other color picker websites like canva color pallette.

- We can even click on inspect in the right corner and see the styling rules to achieve the current styling decisions when you start writing your code.  Copy and pasting this will certainly have some limitations, but it will help when you want to reference things like font and color choices.