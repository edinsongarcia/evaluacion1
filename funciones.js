var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#publicidad");
  x.click(presionPublicidad)
  x=$("#encabezado");
  x.click(presionencabezado)
}

function presionPublicidad()
{
  var x;
  x=$(this);
  x.css("background","#fff");
}
function presionencabezado()
{
  var x;
  x=$(this);
  x.css("color","#fff");
  x.css("font-family","arial");
}

