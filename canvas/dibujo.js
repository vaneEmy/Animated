var botoncito = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var colorcito = "#FAA";

function dibujarLinea(color, xInicial, yInicial, xFinal,yFinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
  lienzo.clearRect(0, 0, d.width, d.height);
	var lines = document.getElementById("lines");
  var lineas = parseInt(lines.value);
  var xi, xf;
  var espacio = ancho / lineas;

  for(var l = 0;l < lineas; l++){
    xi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, xi, xf, 300);
  }

  for(var l = lineas; l > 0; l--){
    xi = l * espacio;
    xf = (l - 1) * espacio;
    dibujarLinea(colorcito, 300, xi, xf, 0);
  }

}
