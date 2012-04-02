!SLIDE
#If, Else, Unless
    @@@ coffeescript
    if foo
      bar
    else
      baz
---
    if (foo) {
      bar;
    } else {
      baz;
    }

!SLIDE
#If, Else, Unless
    @@@ coffeescript
    if foo then bar
---
    if (foo) bar;

!SLIDE
#If, Else, Unless
    @@@ coffeescript
    if foo then bar else baz
---
    if (foo) {
      bar;
    } else {
      baz;
    }

!SLIDE
#If, Else, Unless
    @@@ coffeescript
    alert("wtf") if debugging
---
    if (debugging) alert("wtf");

!SLIDE
#If, Else, Unless
    @@@ coffeescript
    doIt() unless debugging
---
    if (!debugging) doIt();
