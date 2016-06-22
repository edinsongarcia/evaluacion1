var x,c;
x=$(document);
c=$(document);
x.ready(inicializarEventos);
c.ready(cambiarcolor);

function inicializarEventos()
{
  var x;
  x=$("#publicidad");
  x.click(presionPublicidad)

}

function presionPublicidad()
{
  var x;
  x=$(this);
  x.css("background","#fff");
}
function  cambiarcolor() {
  var c;
  c= $("#encabezado");
  c.css("color","#fff");
}

