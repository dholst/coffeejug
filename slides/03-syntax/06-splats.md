!SLIDE
#Splats
    @@@ coffeescript
    (first, second, rest...) ->
---
    var __slice = Array.prototype.slice;

    (function() {
      var first, rest, second;
      first = arguments[0],
      second = arguments[1],
      rest = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    });

!SLIDE
#Splats
    @@@ coffeescript
    fn = (x, y, z) ->
    args = [1, 2, 3]
    fn(args...)
---
    var args, fn;
    fn = function(x, y, z) {};
    args = [1, 2, 3];
    fn.apply(null, args);

