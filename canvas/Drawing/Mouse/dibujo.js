var papel = document.getElementById("areaDibujo");
var lienzo = papel.getContext("2d");

papel.addEventListener("mousedown", presionarMouse);
papel.addEventListener("mouseup", detenerMouse);
papel.addEventListener("mousemove", dibujarMouse);

var color = "pink";
var x = 0, y = 0, xf = 0, yf = 0;
var estado= false;

function presionarMouse(event){
  x = event.clientX;
  y = event.clientY;
  estado = true;
}

function detenerMouse(event){
  xf = event.clientX;
  yf = event.clientY;
  estado = false;
  dibujarLinea(color, x, y, xf, yf, lienzo);
}
function dibujarMouse(event){
  if(estado){
      dibujarLinea(color, x, y, event.clientX, event.clientY, lienzo);
      x = event.clientX;
      y = event.clientY;
  }
}

function dibujarLinea(color, xInicial, yInicial, xFinal,yFinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	lienzo.stroke();
	lienzo.closePath();
}

