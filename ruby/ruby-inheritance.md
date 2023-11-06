# Ruby Inheritance

## Review of Classes and Objects
- Object-oriented programming (OOP): Everything in Ruby is an object
- Everything is an instance of a class


* Enter IRB * 
`$ irb`
```ruby
> String.class
> Integer.class
> Boolean.class
> Hash.class
```

So we know that everything belongs to a class, and when we know what that class is, we can find out the methods associated with that class by running .methods

```ruby
> String.methods
```

So this is pretty cool to see all the possible methods we can use for a String.  Most of these, I have never worked with and would likely need to look up, but this can be really helpful in the instance that you just need a refresher on the name of a specific method you want to use.

Let's play around with one of these like include

```ruby
> str = 'Hello'
> str.include? 'He'
```
`$ exit`

So with all of this, everything is described in a hierarchy of objects that belong to classes, so any rule I write is governed by rules. As we saw in IRB, these methods were all the rules for the String class.


As you may recall, Ruby also has a method for declaring new instances of classes that have unique data.  In Javascript it was called Constructor, but in Ruby we have initialize.

I am going to make a quick rebuild of the class lecture
- initialize method: declares new instances of classes that have unique data
  - takes as many parameters as we want

```ruby
class Hulu
  # attr_accessor creates a getter and setter method for the instance variables it gets passed
  attr_accessor :title, :run_time, :watch
  # setter method:
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @watch = false
  end

  # getter method:
  def get_show_data
    if @watch
      "You have watched the show #{@title} is #{run_time} long."
    else
      "You have not watched the show #{@title} is #{run_time} long.
    end
  end
end
```

So this is a quick rebuild of what we covered last week with classes.  

## Inheritance
Now let's think about this a little further.  There are many different streaming applications like YouTube, Spotify, Netflix, Peacock, Disney+, etc.  The different content or objects that we interact with on each streaming application all have certain things in common like title and run time.  

But there may be some things that are unique to the streaming application, for instance YouTube has the option to like and add comments, some may have a save for later option, playlists and so on. Each streaming application has some of their own features that makes them stand out in a market that is flooded with other streaming services.  But at the end of the day, there are still those things that are maintained across all applications when working with the content.  There are same attributes, and also unique attributes.  This is where inheritance comes into play.

- Inheritance: allows classes to have relationships with each other

In other words, we can put common behaviors and attributes into a shared class, which is known as a SuperClass

- Superclass: common behaviors in a shared class
  - has attributes that are common to all possible children 
  - Sometimes referred to as Parent Class
  - Superclass passes info to the subclasses

- Subclass - has attributes specific to the child and NOT the other children
  - Sometimes referred to as Child Class

Let's take a look first at the Superclass.  To do this, I am essentially going to copy over what we did for Hulu into a class called StreamingApp. 

```ruby
class StreamingApp
  attr_accessor :title, :run_time, :consumed_media
  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @consumed_media = false
  end
    def get_show_data
    if @consumed_media
      "You have consumed the media #{@title} is #{run_time} long."
    else
      "You have not consumed the media #{@title} is #{run_time} long.
    end
  end
end
```

Now that we have built out our superclass, we can setup another class that is unique to a specific streaming application that will inherit these attributes from our StreamingApp class, but then also have some unique attributes of their own.

For this example, let's create a class for YouTube.  Some of the unique features that YouTube has a creator for the content.

- Initialize method in the subclass class invokes the super() method
- Subclasses use super() which calls on the superclass' initialize method and borrows the parameters in the initialize method.

```ruby
# < is marking that this is inheriting from a superclass and then states what the superclass is
class YouTube < StreamingApp
  
  # Initialize method in the subclass invokes the super method
  def initialize(title_parameter, run_time_parameter, creator_parameter)
    # super() which calls on the superclass' initialize method and borrows the parameters in the initialize method.
    super(title_parameter, run_time_parameter)
    # create instance variable for ONLY unique attributes
    @creator = creator_parameter
  end
end

# create instances based on class participation 
react_props = YouTube.new('2023 - a - React Props', '90 minutes', 'LEARN Academy')
p react_props
```

Great!  I can also access any method from my parent class.  So let's say I had a method called consumed media that will change watched to true in my parent class, I can still run that 

```ruby
# StreamingApp class

  def consumed_media
    @watched = true
  end
```

```ruby
react_props.consumed_media 
p react_props
```

Alright, let's build another example of a child class that still belongs to our StreamingApp parent class.

```ruby
class Spotify < StreamingApp
  def initialize(title_parameter, run_time_parameter, artist_parameter, album_parameter)
    super(title_parameter, run_time_parameter)
    @artist = artist_parameter
    @album = album_parameter
  end

  def get_spotify_info
    content_data + "This song was created by #{@artist} and is part of the #{@album} album"
  end
end

frozen = Spotify.new("Let it go", "3:47", "Idina Menzel", "Frozen Movie Soundtrack")
p frozen
p frozen.get_spotify_info
```