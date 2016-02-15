

var palabra = "caminar";
var contador = 0;
palabra = palabra.toLowerCase();
for (var i = 0; i < palabra.length ; i++) {
  if ((palabra.charAt(i)==='a') || (palabra.charAt(i)==='e') || (palabra.charAt(i)==='i') || (palabra.charAt(i)==='o') || (palabra.charAt(i)==='u')){
  contador++;
}
}
console.log("la palabra " + palabra + " contiene " + contador + " vocales");
