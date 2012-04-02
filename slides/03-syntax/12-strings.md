!SLIDE
#Strings
    @@@ coffeescript
    who = "World"
    alert "Hello #{who}"
---
    var who;
    who = "World";
    alert("Hello " + who);

!SLIDE
#Strings
    "Multi
     Line
     String"
---
    "Multi Line String";

!SLIDE
#Strings
    """
      This is a heredoc
      it can have "'s
    """
---
    "This is a heredoc\nit can have \"'s";
