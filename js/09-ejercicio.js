// let contadorLineas = 0;

// for (let i = 1; i <= 500; i++) {
//   let texto = i;

//   if (i % 4 === 0) {
//     texto += " (Múltiplo de 4)";
//   }
//   if (i % 9 === 0) {
//     texto += " (Múltiplo de 9)";
//   }

//   if (i % 5 === 0) {
//     texto += "<br>--------------------------------------";
//   }

//   document.writeln(texto + "<br>");
//   contadorLineas++;
// }

 let contadorLineas = 0;

for (let i = 1; i <= 500; i++) {
  let texto = i;

  if (i % 4 === 0) {
    texto += " (Multiplo de 4)";
  }

  if (i % 9 === 0) {
    texto += " (Multiplo de 9)";
  }

  if (i % 5 === 0) texto += "<br>-------------------";

  document.writeln(texto + "<br>");
  contadorLineas++;
}
