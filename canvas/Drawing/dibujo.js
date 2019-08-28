document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("areaDibujo");
var lienzo = cuadrito.getContext("2d");
var x = 100;
var y = 100;
dibujarLinea("red", x-1, y - 1, x + 1, y + 1, lienzo);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


function dibujarLinea(color, xInicial, yInicial, xFinal,yFinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	lienzo.stroke();
	lienzo.closePath();
}


function dibujarTeclado(event){
  var color = "blue";
  var movimiento = 5;
 switch(event.keyCode){
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, lienzo);
      y -= movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, lienzo);
      y += movimiento;
    break;
    case teclas.LEFT:
     dibujarLinea(color, x, y, x - movimiento, y, lienzo);
     x -= movimiento;
    break;
    case teclas.RIGHT:
     dibujarLinea(color, x, y, x + movimiento, y, lienzo);
     x += movimiento;
    break;
    default:
     console.log("Otras teclas");
    break;

  }

}
