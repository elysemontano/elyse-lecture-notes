# HTML Part 2

# Set Up From Part 1
    - Copy code from Sarah on slack
    - Create a file called index.html
    - Paste code
    - Possibly make markdown file for notes?

# Add Footer
    - A footer is a standard section of any web page and generally hold some information regarding the authors of the site where more information can be found and possibly a link to some external resource
    - To create a footer we simply make a tag with the word footer
```html
<footer> </footer>
```

    - In this tag I can put a copyright logo © which is "& copy" with no space between and add the names in my team
      
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
