!SLIDE
#Destructuring Assignment
<table style="width: 100%; font-size: 70%;">
  <tr>
    <td class="content">
      <pre class="sh_coffeescript sh_sourceCode">
        <code>
weather = ->
  [50039, 72]

[zip, temp] = weather()
        </code>
      </pre>
    </td>
    <td class="content">
      <pre>
        <code>
var temp, weather, zip, _ref;

weather = function() {
  return [50039, 72];
};

_ref = weather(),
zip = _ref[0],
temp = _ref[1];
        </code>
      </pre>
    </td>
  </tr>
</table>

!SLIDE
#Destructuring Assignment
<table style="width: 100%; font-size: 70%;">
  <tr>
    <td class="content">
      <pre class="sh_coffeescript sh_sourceCode">
        <code>
user = ->
  name: "Darrin"
  address: [
    "123 Main St."
    "Suite 100"
  ]

{
  name,
  address: [line1]
} = user()
        </code>
      </pre>
    </td>
    <td class="content">
      <pre>
        <code>
var line1, name, user, _ref, _ref2;

user = function() {
  return {
    name: "Darrin",
    address: [
      "123 Main St.",
      "Suite 100"
    ]
  };
};

_ref = user(),
name = _ref.name,
(_ref2 = _ref.address, line1 = _ref2[0]);
        </code>
      </pre>
    </td>
  </tr>
</table>
