var letra = "f";

var letraUsuario = prompt("Dime una letra");

//var numero1=Math.floor((Math.random() * 100) +1);;

while (letraUsuario!=letra) {
  alert("Fallaste, sigue probando");
  var letraUsuario = prompt("Dime otra letra");
}

if (letraUsuario=letra) {
  alert("Acertaste");
}
