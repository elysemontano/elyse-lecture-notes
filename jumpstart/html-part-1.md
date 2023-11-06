# HTML - Part One

 **  no screen share  ** 

<!-- History of HTML

- Hyper Text Markup Language: structure and content of a page. Not the styling, not the functionality. Basically the skeleton.  Whenever you have looked at the internet and read something on a web page you have been looking at HTML. 

- In the early days of the internet, there was no standardized way of sending information and documents. The Internet was mostly used for communication between colleges and universities as well as the military. People wanted standard formatting to happen. Thus, HTML was made to handle it around 1989/1990.

- Some of the most basic formatting added included:  Headers, bold text or important italicized, bullet points, bigger and smaller text, etc

- Eventually, HTML moved onto more broad uses. Remember myspace? Probably used HTML/CSS to edit your page -->
 

<!-- What is a tag
- Just a wrapper that tells our browser how to display content in a certain way. That means, generally, it has a starting tag that happens before our content and a closing tag, after the content.  
- I want to mention that sometimes, some tags do NOT need a closing tag, but don’t worry about that for right now, we’ll get to that later. 


 **  Send in slack  **  
```
GENERAL RULE
   <tagname> Some Content </tagname>
      ^		                		^                                  
 Opening tag			      Closing tag 
```


 ** yes screen share ** 
- Look at W3 schools or MDN for all types of elements/tags

    https://www.w3schools.com/tags/default.asp
    https://developer.mozilla.org/en-US/docs/Web/HTML
    
    


Create a folder on desktop called jumpstart

Code Editors and File Naming

 ** Open up Atom and create a new file called index.html ** 

In order to create a file in Atom we need to go to the top of our screen where it says file and scroll down to where it says “Save As” and we want to name this file index.html.


  - "Index" is a specific word that the browser understands to mean "the first page". We can use different words to create an html file, but for starters we'll stick with index.

  - .html (dot html) is to signify the extension or type of file. Similar to how you might have worked with Word documents that end with .doc.  It basically says what this file is all about

- It's important to indicate the extension of a file because not all programs can process all kinds of files. Your web browser knows how to process an html file.


## Boilerplate 
- Let’s put some HTML into a new document and actually open it in the browser

 ** Use “html” shortcut ** 

- This is the underlying structure that every HTML document will always have.

```html
<!DOCTYPE html> 
<html lang="en" dir="ltr"> 
   ( lang="en" stands for the language is in english
    dir="ltr" stands for direction runs from left to right)

<head> One Head / Metadata and info / Things you don’t see on the screen

   <title>LEARN's Apple Pie</title> Shows up in tab / Helps with SEO / Everything You write goes between HTML tags
</head> 
<body>
  	Everything we can see on the page
</body>
</html>
```
## Atom Blue Dot
- This is a good moment for us to stop and talk about saving our files. Up at the top we can see Atom has a small blue dot. This is letting us know that this file currently is not saved.

- It is very important to save frequently as developers. 

- We can save by going through the same process as before where we go up to file on the top of the screen and hit save from the drop down menu.

- Or we can use the key binding of cmd + s for mac and ctrl + s for windows. 

## Displaying the File in Chrome

- In order to display the changes we are going to make we are going to need to connect our file to our chrome browser. 

- At the top of Atom we’ll see a small google chrome symbol inside of a white document. If we drag and drop this chrome symbol into chrome our page will display.

- You have to be careful to grab the chrome symbol or else it won’t work. 


** start here **
-->

## Headings
- h1-h6

 ** 1 is biggest 6 is smallest - use Hello World to demonstrate each of the h’s ** 

  “In order to get the changes we’ve made to display we have to save our file and refresh the screen”

- Finish demo with an h1 that says “Apple Pie”
- And an h2 that says “LEARN's Delicous Apple Pie Recipe”


## Planning
- Let’s plan out what we want our page to look like. Pieces of the page… 

 ** look at a recipe online either google or use this link) (https://littlespoonfarm.com/apple-pie-recipe/ ** 

- While looking over the recipe, explain each of the basic parts that we will want to bring into our site. 
```html
  - Header <header></header>
  - Br, hr <br> & <hr>
  - Paragraph <p></p>
  - Image <img src="..." alt="...">
```

## Setting up the tags
```html
<div>
  A div creates a division in our body and works really well as a container for other html elements. 
  We are going to use our div to contain our <p> tag.

  Add some lorem to the p tag

  Lorem Ipsum is a kind of fake latin that developers use to hold as a placeholder until something more permanent can be created. It was created in the 1500s as a way to test printing presses
```

```html
  <body>
    <h1> LEARN's Apple Pie </h1>
    <h2> A spoonful or forkful will make your worries go bye! </h2>
    <hr> -- Creates a line
    <div>
      <p> Go to your kitchen and grab your utensils. Let them know they are about to do something spectacular. Tell your tastebuds to get ready for a splendid occurence because you are about to bake some Learn Apple Pie! </p>

      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>
  </body>
```

## List
```html
<ul>:
ingredients
    A UL tag creates an unordered list which is perfect for setting out a list of ingredients 

<li>:
for each ingredient.
      <li> Large Granny Smith apples (1/2 inch slices) </li>
      <li> Large Honeycrisp apples (1/2 inch slices) </li>
      <li> Large Golden Delicious apples (1/2 inch slices) </li>
      <li> Pie crusts </li>
      <li> White sugar </li>
      <li> Brown sugar </li>
      <li> Cinnamon </li>
      <li> Nutmeg </li>
      <li> Lemon (zested and juiced) </li>
      <li> Large Egg (lightly beaten for egg wash) </li>
<ul>

<ol>:
preparation steps
    An OL tag creates a ordered list this will be useful for something like our steps to make the pie

<li>:
for different steps of the cooking process.

    <li> Preheat oven to 400F </li>
    <li> Prebake pie crust inside a deep dish pie pan </li>
    <li> Mix all the ingredients except egg wash in a mixing bowl </li>
    <li> Spoon the apple filling over the bottom crust and discard juices </li>
    <li> Lay a pie crust over the apple filling </li>
    <li> Trim the dough along the outside edge of the pie pan </li>
    <li> Cut 4 slits in the top of the dough to allow steam to vent </li>
    <li> Cover the edges with a strip of foil to keep from over browning </li>
    <li>
    Bake them!
    <ul>
        <li> 400 degrees for 25 minutes </li>
        <li> Remove aluminum foil </li>
        <li> 375 degrees for an additional 30 minutes or until the top is golden brown and the juices are bubbly </li>
    </ul>
    </li>
    <li> Let them sit for a bit </li>
</ol>
```


## Image
  - Image for small picture
  - add height attributes (not height and width)
  - Non-commercial use pictures
    - Google image search -> tools -> Creative Commons

```html
 **  <img src="" height="300px">tag and introduce the src attribute ** 
 ```

## Attributes
  - What is an attribute?
    - HTML attributes are a modifier of an HTML element type
    ```
      - <img src="img_girl.jpg">
      - <p style="color:red">This is a paragraph.</p>
      ```

   ** Be sure to fill out the src attribute on the image tag and the alt attribute ** 


# Add Footer
    - A footer is a standard section of any web page and generally hold some information regarding the authors of the site where more information can be found and possibly a link to some external resource
    - To create a footer we simply make a tag with the word footer
```html
<footer> </footer>
```

    - In this tag I can put a copyright logo © which is &copy with no space between and add the names in my team
      
```html
 <footer>
    &copy LEARN Instructors and TA's | Jumpstart |
</footer>
 ```

# Anchor Tags and Navigation
    - What would make this footer even better would be a link to take me back to the top of the page
    - Let's make a navigation link in footer to the top of the page so people don’t have to scroll all the way up. 
    - The anchor tag is how we create those famous blue links in HTML
    - The Anchor tag is simply an HTML tag made with the letter “a”

```html
<footer>
  &copy LEARN Instructors and TA's | Jumpstart |
  <a></a>
</footer>
```

    - The Anchor tag takes an attribute of href and then the place we want the link to go
    - href stands for "hypertext reference"

```html
<footer>
  &copy LEARN Instructors and TA's | Jumpstart |

  <a href =’#top’>Back to the top</a>

</footer>
```

    - We will also need to add an id=’top’ to the first element in our <body> tag
    - An id is an attribute we can use to identify a specific tag

```html
<h1 id="top"> Learn's Apple Pie </h1>
```

    - Let's also add a link to an external website
    - An <a> tag with link to where I got the recipe from <myrecipelink>

```html
<footer>
  &copy LEARN Instructors and TA's | Jumpstart |

  <a href =’#top’>Back to the top</a>
  <a href="https://littlespoonfarm.com/apple-pie-recipe/" target="_blank"> A Similar Apple Pie Recipe </a>
</footer>
```



# Table
    - This next section is something you will likely need in your treasure hunt game board, but doesn’t quite fit neatly into the recipe page, however, it is important to know.

    - We will set up a table which will need multiple nested HTML elements

```html
<table> <!-- You will need to set up a table tag -->
  <tr> <!-- Set up table row -->
    <td> Data goes here </td><!-- Set up table data which there can be as many as needed in a single row.  This will look like a column -->
    <td> Some more data </td>
  </tr>
  <tr> <!-- Repeat as needed -->
    <td> Even more data </td><
    <td> And then some more </td>
  </tr>
</table>
```
    - 3 rows of 3 table data
    - And if we want to add some temporary style to our table we can use the attribute <table border = 1>

```html
<table border=1>
  <tr>
    <td> Granny Smith </td>
    <td> Honeycrisp </td>
    <td> Golden Delicious </td>
  </tr>
  <tr>
    <td> Super tart and very firm </td>
    <td> Super crisp, tart, sweet </td>
    <td> Little softer than the others </td>
  </tr>
  <tr>
    <td> Holds up the best </td>
    <td> Holds up great </td>
    <td> Holds up well </td>
  </tr>
</table>
```

# Favicon
    - A favicon is a small image that sits on the chrome tab.
    - Back in the head tag we need to add a special tag called link

```html
<link rel="icon" type="image/x-icon" href="some-link-here">
```

    - Link takes three attributes
        * rel="icon" = relation
        * type="image/x-icon"
        * href=""
            - The href will link to an image address of something 


# Button
    - Lastly Let’s make a button on the top of the page to take our user to the recipe if they just want the information.
    - First we’ll set up an id at my h2 where the recipe starts and set it to recipe

<h3 id=’recipe’>Recipe Instructions</h3>

    - Next we’ll create an anchor tag at the top of the page that will send us to the recipe

<a href=’#recipe’></a>

    - And then inside that a tag we’ll create a button tag that will show the words take me to the recipe

```html
    <a href="#recipe">
      <button> Take me to the recipe </button>
    </a> 
```

**Stop screen share**

    Okay let's break into our pairs again and finish up the section on HTML in the ‘Jumpstart Weekend Student Notes’ 

    We’ll come back together for checkout at 8:40pm



** SHOW TREASURE HUNT DEMO HERE **
_________________________________________________________________________________________
 ** TREASURE HUNT ** 

Let’s stop here for now and start work on our Treasure Hunt projects 

We’ll come back together in (30 minutes) for a break and then learn some more HTML
You will find the instructions for the Treasure Hunt project in the ‘Jumpstart Weekend Student Notes’ 

We’ll work down to the part where it says “Add an image tag with a picture to decorate your page.”
