!SLIDE
#Lexical Scoping
<table style="width: 100%; font-size: 70%;">
  <tr>
    <td class="content" style="width: 50%;">
      <pre class="sh_coffeescript sh_sourceCode">
        <code>
foo = 1

helperFunction = ->
  foo = -1
  bar = -2

bar = 2
helperFunction()

alert("#{foo}, #{bar}")
        </code>
      </pre>
    </td>
    <td class="content" style="width: 50%;">
      <pre>
        <code>
var bar, foo, helperFunction;

foo = 1;

helperFunction = function() {
  var bar;
  foo = -1;
  return bar = -2;
};

bar = 2;

helperFunction();

alert("" + foo + ", " + bar);
        </code>
      </pre>
    </td>
  </tr>
</table>