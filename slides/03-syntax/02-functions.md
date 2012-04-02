!SLIDE
#Functions
    @@@ coffeescript
    ->
---
    (function() {});

!SLIDE
#Functions
    @@@ coffeescript
    (x, y) ->
---
    (function(x, y) {});

!SLIDE
#Functions
    @@@ coffeescript
    -> alert("Hello”)
---
    (function() {
      return alert("Hello");
    });

!SLIDE
#Functions
    @@@ coffeescript
    ->
      msg = "Hello"
      alert(msg)
---
    (function() {
      var msg;
      msg = "Hello";
      return alert(msg);
    });

!SLIDE
#Default Arguments
    @@@ coffeescript
    (msg = "Hello") ->
      alert(msg)
---
    (function(msg) {
      if(msg == null) msg="Hello";
      return alert(msg);
    });

!SLIDE
#Function Invocation
    @@@ coffeescript
    alert("with parentheses")
---
    alert("with parentheses");

!SLIDE
#Function Invocation
    @@@ coffeescript
    alert "without parentheses"
---
    alert("without parentheses");

!SLIDE
#Function Invocation
    @@@ coffeescript
    $("#foo").on "click", ->
      alert "clicked"
---
    $("#foo").on("click", function() {
      return alert("clicked");
    });

!SLIDE
#Self Invoking Functions
    @@@ coffeescript
    (-> alert("I’m safe!"))()
---
    (function() {
      return alert("I’m safe!");
    })();

!SLIDE
#Self Invoking Functions
    @@@ coffeescript
    do -> alert("I'm safe too!")
---
    (function() {
      return alert("I’m safe too!");
    })();
