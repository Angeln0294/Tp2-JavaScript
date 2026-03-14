// let numero = parseInt(prompt("Ingrese un numero entre 1 y 50"));

// if (isNaN(numero) || numero < 1 || numero > 50) {
//   alert("Por favor, ingrese un numero valido entre 1 y 50");
// } else {
//   for (let i = numero; i >= 1; i--) {
//     let linea = "";

//     for (let j = 1; j <= i; j++) {
//       linea += i;
//     }
//     document.writeln(linea + "<br>");
//   }
// }

let numero = parseInt(prompt("Introduce un número (entre 1 y 50):"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  alert("Por favor, introduce un número válido entre 1 y 50.");
} else {
  for (let i = numero; i >= 1; i--) {
    let linea = "";

    for (let j = 1; j <= i; j++) {
      linea += i;
    }

    document.writeln(linea + "<br>");
  }
}
