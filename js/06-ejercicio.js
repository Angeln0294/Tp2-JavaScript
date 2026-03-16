// Bucle externo para las filas (del 1 al 30)
for (let i = 1; i <= 30; i++) {
    let linea = "";
    
    // Bucle interno para repetir el número 'i' la cantidad de veces que indique 'i'
    for (let j = 1; j <= i; j++) {
        linea += i;
    }
    
    // Imprimimos la línea en el documento con un salto de línea
    document.write(linea + "<br>");
}
