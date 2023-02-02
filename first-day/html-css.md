# HTML and CSS
In Jumpstart we explored HTML and CSS and were able to build a website and even a treasure hunt game.  Since at this point you have a working knowledge of these concepts, we are going to do a quick review of HTML and CSS.

- HTML stands for hypertext markup language
    - HTML is going to be the content that displays on a page
- CSS stands for cascading style sheets
    - CSS modifies or prettifies the appearance of the content being displayed

To build a great website, the two things that you fundamentally need is HTML and CSS.  You can add a little more complexity of course with Javascript, but at the root of it HTML and CSS is all you need for a really nice looking website.

## How do we write HTML?
HTML consists of a collection of tags.  There are many different types of tags that tell us how we want the content to appear on the page.

What are some tags we have explored?

** Next slide **

Typically a tag consist of an opening tag and a closing tag, and between the opening and closing tag is the inner HTML, or the content that we want to be displayed on the page.

We can display headers, paragraphs, tables, lists

** Next slide **

We can also provide links to other websites or locations on the page with an a tag.

With an a tag, we need to provide a path to the destination we want our user to go to using the attribute href (hyperlink reference).

** Next slide **

We can also have self closing tags where we don't have any inner html content that we want to be displayed such as the img tag.  With the img tag, we are using the src attribute to display an image on the screen.

** Next slide **

Here is a list of some of the common tags you will likely run into and utilize as a developer.

We have our Headings which there are 6 levels of, with h1 being the largest and h6 being the smallest.

There are also several different containers.  The first few, html, head, and body are required for all html files and should automatically appear using the html shortcut on your text editor.
Div is a way to section off a tag or collection of tags on a page.  We also have a paragraph tag that we can put a block of text in.

Lastly, we have several other tags such as strong which will make the text bold, em which will italicize the text, we talked about image and a tags.  There is also lists, the title which lives in the head tag that will show the title of your page on the tab, br will give you a line break, table which will create a spreadsheet type of layout, and you can also add comments into your html files that is to communicate to developers and will not display any content on the page.

** Next slide **

Here is the basic layout of an html page.  We can see the entire thing is wrapped with an html tag, we then have the head which is not displayed directly on the page, but contains meta data and links to stylesheets.  We then have a body where we have some headers, paragraph tags, an image, and a list.

** Next slide **

Back in the 90's alot of websites looked like this.  Really neat back then, but lacks pizaz.

** Next slide **

## CSS
Enter CSS, to add the pizaz into our internet lives.

 So how do we write CSS?

** Next slide **

With CSS we can target specific parts of a page using selectors and modify either a tag, or use classes or id's to define a specific tag or tags.  We then can apply the styling of our choosing using a key for a set rule we wish to modify, and the value we want to change it to.  

** Next slide ** 

Here we have an example using a class to change the color and font size of Hello world.

The main difference between targeting an element, vs a class, vs an id is that you will want to target an element when you want ALL of that particular element to follow that styling rule.  Ex: all paragraphs are purple.  Classes allow you to reuse a styling rule where ever you want.  So in this case, I can have this paragraph be 100px and blue, but I could also make a header, or list item have that same style rule by adding this class onto those elements as well.  Id's are used if you only want the rule to apply to one particular item and only that.

** Next slide **

Here is an example of what a CSS file could look like.  We can provide multiple style rules to the element, class or ID we are targeting as we see here.

There is a certain amount of uniformity to this code, we can see that there is a space sperating each selector and the rules are indented over for the sake of readibility as the developer.

** Next slide **

Here are some of the main CSS attributes to pay attention to.  You will likely explore a lot of other attributes over your career, but these are some very standard ones that you will run into early on.

We have font and color where we can modify the color of text, the size, and if it is bold or italicize.  Alignment and spacing is something that takes time, patience and practice.  Play around with the difference between padding and margin, and how to move the content to one side of the page or center.  We also have background, where you can set a specific background color or set a background image.

And now that we have added CSS to our html page...

** Next slide **

Our page now has some pizaz!  Isn't this beautiful?
