##cssLook

Einbinden in das eigene Script:

``` html
<head>
<script src="https://code.jquery.com/jquery-2.0.3.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquerykeyframes/0.0.9/jquery.keyframes.min.js"></script>
<script type="text/javascript" src="css_look.js"></script>
...
<script>
$(document).ready(function(){´

look.boRad("#feld","10");

});
</script>
...
</head>
<body>
<div id="feld">Hello World!</div>
...
```


**cssLook** ist ein Script, mit dem man leicht und einfach Elemente mit CSS3 Eigenschaften belegen kann, ohne selber zu wissen wie diese in CSS geschrieben werden.
Schreibweise und Aufruf steht in der Objekt_Referenz.txt
Zubeachten ist, dass "jquery" und "jquerykeyframes" mit in dem HTML-Script eingebunden werden.