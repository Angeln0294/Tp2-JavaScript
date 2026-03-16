let numero = parseInt(prompt("Ingresa un numero del 1 al 50"))

if (isNaN(numero) || numero < 1 || numero > 50) {
   alert("Por favor, ingrese un numero valido entre 1 y 50"); }

   else{
    for (let i = 1; i <= numero; i++) {
        let linea = "";

    for (let j = 1; j <= i; j++) {
        linea += j;
    }
    document.writeln(linea + "<br>")
   }
}