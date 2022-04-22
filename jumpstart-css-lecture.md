# CSS - Part one 

## What is CSS?
  - CSS (Cascading Style Sheets) is a styling language that describes how elements should be rendered in the browser, the dressup of coding languages
  - The CSS code is for describing how content is presented (e.g. colors, fonts, font-sizing, shapes).
  - The current version of CSS we'll be using is CSS3
  <!-- CSS3 improvements involve responsive-support or mobile-friendly support. -->

**Yes Screen Share**

### Creating a CSS file
  - Just like we did with the other files we've made we are going to create a file in the project called styles.css
  - In atom -> in the project folder create a file named styles.css
  - The extension .css denotes that this page utilizes the css language and only that language.
  - While we will be making things that impact our HTML the syntax used in our CSS file is different. 


### Linking a CSS file
  - In order to link a css file we are going to create a link tag in the Head of our HTML file. This link tag will have two attributes 
  - rel - The rel attribute defines the relationship between a linked resource and the current document.
  - href - For <link> elements, the href attribute specifies the location (URL) of the external resource (most often a style sheet file)

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

### Css Objects
  - Object Name {} 
  - Key: value pairs
  - Target the key (what I want to change) :
      - You can think of the key as unlocking a certain attribute of the way something is displayed
      - If you want to change the color of some text you can use the key “color”
  - Set the value (what I want it changed to)
      - Choosing a value can be as simple as choosing a color or it can be a bit more complicated depending on which key I have unlocked 

EX: 
color: blue
  - So if we wanted to set the color of some text to blue we use the key color: and the value blue


### Tag selector - redefining the entire HTML tag
  - We are already familiar with the HTML tags, but what if we could change how they showed up on the web page 

<h1,2,3,4> ->  h1,2,3,4{}

- We’re already familiar with what the h1 looks like but what if we updated it a bit and changed its color?

      h1,2,3,4{
        color: #337eee; (a bluish- green color if you want it)
      }

- We could even go about changing something about the font like making it bold. 

      font-weight: bold;

_Make changes for the other h’s if you are displaying them_

<p> -> p{
  background-color: rgba(255, 250, 205, 0.7);
  text-align: center;
}

- When we use the body selector we are going to be targeting everything that displays to our user on the web page. 

<body> -> body{
  background-color: #fff88f;
}

<div>  -> div{} 


### Attribute Assignment 	
- We can also come up with custom css selectors and assign them to HTML elements as we like 

#### Class
- When we want to create a unique selector that can be reused a number of times we want to create a class

    class = “purple”  <—--->   .purple{}

- To connect a class from HTML to css we call on the same name the class was set to and use the “.” to denote this is a class item

#### ID
- When we want to create a unique selector that will only be used once we want to use the “id” selector just like we did with JS

      id = “blue” <-----> #blue{}

- To connect an id from HTML to css we call on the same name as the id was set to and use the “#” to denote this selector is attached to an id

### Font
https://fonts.google.com/
- Select the font
- Copy the html link
- Paste in the <head>
- Copy the css element

      Borders: 		
      Radius
      4px
      Width
      2px
      Style
      dotted
      Color
      red
      Width Style Color
      2px solid black

_BREAK_

# CSS - Part two

## Background image: url()

## Pseudo selectors
- A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user's pointer hovers over it.

    button:hover {
      color: blue;
    }

## Animations
- When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

- To get an animation to work, you must bind the animation to an element.

The following example binds the "example" animation to the <div> element. The animation will last for 4 seconds, and it will gradually change the background-color of the <div> element from "red" to "yellow":
@keyframes


        @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

          h1{
        animation: shake 1s infinite;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
          }
          
## Centering things is difficult
https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties
- The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kinds of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.


**Flexbox froggy:** Let all the students play flex box froggy for five minutes so they can get an idea of what to be looking for.

- Div tags 

          Display : flex
          Justify content : ____
          text-align: center
          align-items: center


_BREAK_



# GitHub 
TO DO (github):
- Set html file to index.html
- Create a github account (it’s free) at www.github.com. You will need to remember your github handle (username) and your password to deploy your application. 
- Together we will create a repository and use GitHub
- Pages
(https://pages.github.com/) to deploy our project

Steps to Deploy:
1. Create a repository using this specific naming convention`
for the repository name: {your username}.github.io
2. Public repository option is selected by default. You’ll want to keep the
repository public otherwise you won’t be able to see your Treasure Hunt Game when you visit the url
3. Ignore all other options and click the “Create repository” button
4. Ensure that your html document for your Treasure Hunt Game is named exactly as index.html
5. Click the “upload an existing file” link.
6. Upload all your files. Order of upload does not matter. You should be able to see the name of your files appear when the upload is complete.
7. Add a commit message. A “commit” is like a snapshot of your changes. A commit message is used to communicate information about your changes. There’s not much to say at the moment so we’ll just say that this is our “Initial commit”. Click the “Commit changes” button.
8. Visit your GitHub Page URL: https://{your username}.github.io
9. Enjoy and share the URL with friends and family

