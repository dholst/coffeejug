!SLIDE
#Existential Operator
    @@@ coffeescript
    alert("wtf") if debugging?
---
    if (typeof debugging !== "undefined" &&
        debugging !== null) alert("wtf");

!SLIDE
#Existential Operator
    @@@ coffeescript
    speed ?= 65
---
    if (typeof speed === "undefined" ||
        speed === null) speed = 65;

!SLIDE
#Existential Operator
    @@@ coffeescript
    speed = maxSpeed ? 65
---
    var speed;

    speed = typeof maxSpeed !== "undefined" &&
    maxSpeed !== null ? maxSpeed : 65;

!SLIDE
#Existential Operator
    @@@ coffeescript
    zip = lottery.winner?().address?.zipcode
---
    var zip, _ref;

    zip =
      typeof lottery.winner === "function" ?
      (_ref = lottery.winner().address) != null ?
      _ref.zipcode : void 0 : void 0;
