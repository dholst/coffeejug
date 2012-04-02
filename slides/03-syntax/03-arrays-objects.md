!SLIDE
#Array Literals
    @@@ coffeescript
    ["ford", "chevy", "toyota"]
---
    ["ford", "chevy", "toyota"];

!SLIDE
#Array Literals
    @@@ coffeescript
    [
      "ford"
      "chevy"
      "toyota"
    ]
---
    ["ford", "chevy", "toyota"];

!SLIDE
#Object Literals
    @@@ coffeescript
    {name: "Joe", age: 32}
---
    ({
      name: "Joe",
      age: 32
    });

!SLIDE
#Object Literals
    @@@ coffeescript
    joe =
      name: "Joe"
      sibling:
        name: "Jane"
---
    var joe;
    joe = {
      name: "Joe",
      sibling: {
        name: "Jane"
      }
    };
