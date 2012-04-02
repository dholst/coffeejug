!SLIDE
#Loops
    @@@ coffeescript
    for i in [1..9]
      alert(i)
---
    var i;

    for (i = 1; i <= 9; i++) {
      alert(i);
    }

!SLIDE
#Loops
    @@@ coffeescript
    alert(i) for i in [1..9]
---
    var i;

    for (i = 1; i <= 9; i++) {
      alert(i);
    }

!SLIDE
#Loops
    @@@ coffeescript
    alert(i) for i in [1..9] when i % 2
---
    var i;

    for (i = 1; i <= 9; i++) {
      if (i % 2) alert(i);
    }

!SLIDE
#Loops
    @@@ coffeescript
    odds = i for i in [1..9] when i % 2
---
    var i, odds;

    for (i = 1; i <= 9; i++) {
      if (i % 2) odds = i;
    }

!SLIDE
#Loops
    @@@ coffeescript
    odds = (i for i in [1..9] when i % 2)
---
    var i, odds;

    odds = (function() {
      var _results;
      _results = [];
      for (i = 1; i <= 9; i++) {
        if (i % 2) _results.push(i);
      }
      return _results;
    })();


!SLIDE
#Loops (Objects)
    @@@ coffeescript
    kids = {tom: 9, joe: 10, sally: 11}
    oddKids =
      (name for name, age of kids when age % 2)
---
    var age, kids, name, oddKids;
    kids = {tom: 9, joe: 10, sally: 11};

    oddKids = (function() {
      var _results = [];
      for (name in kids) {
        age = kids[name];
        if (age % 2) _results.push(name);
      }
      return _results;
    })();

!SLIDE
#Loops (Objects)
    @@@ coffeescript
    kids = {tom: 9, joe: 10, sally: 11}
    alert(name) for own name of kids
---
    var kids, name,
      __hasProp = Object.prototype.hasOwnProperty;

    kids = {tom: 9, joe: 10, sally: 11};

    for (name in kids) {
      if (!__hasProp.call(kids, name)) continue;
      alert(name);
    }

