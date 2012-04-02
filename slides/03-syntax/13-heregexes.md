!SLIDE
#heregexes
<table style="width: 100%; font-size: 70%;">
  <tr>
    <td class="content">
      <pre class="sh_coffeescript sh_sourceCode">
        <code>
OPERATOR = /// ^ (
  ?: [-=]>
   | [-+*/%<>&|^!?=]=
   | >>>=?
   | ([-+:])\1
   | ([&|<>])\2=?
   | \?\.     # some
   | \.{2,3}  # comments
) ///
        </code>
      </pre>
    </td>
    <td class="content">
      <pre>
        <code>
var OPERATOR;
OPERATOR = /^(?:[-=]>|[-+*\/%<>&|
^!?=]=|>>>=?|([-+:])\1|([&|<>])\2
=?|\?\.|\.{2,3})/;
        </code>
      </pre>
    </td>
  </tr>
</table>
