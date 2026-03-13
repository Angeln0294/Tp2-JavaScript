//  Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while (true) {
  const entrada = prompt("Ingrese un número (o pulse cancelar para finalizar):");
  if (entrada === null) {
    break;
  }
  const numero = parseFloat(entrada);
  if (isNaN(numero)) {
    alert("Lo siento, el valor ingresado no es un número válido.");
  } else {
    suma += numero;
  }
}
alert("La suma total de los números introducidos es: " + suma);