/*EJERCICIO 8: FIBONACCI (OPCIONALES)
La sucesión de fibonacci consiste en una serie de numeros los cuales cada uno es la suma de los dos anteriores, de la siguiente manera:
[0, 1, 1, 2, 3, 5, 8, 13, 21...]
https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci

Se pide:

- Crear un codigo que almacene en un array los n primeros números de la sucesion (n se definirá como let n = algo).
- Definir con palabras (o pseudocodigo) como vamos a afrontar la solución del problema (que requsitos tiene nuestro programa y como queremos resolverlos).
- Implementar esa estrategia utilizando código.
- testear usando los valores para n: 8, 15, 16. (imprimir el resultado con console.log);*/

/* Planteamiento: para la resolución del ejercicio, crearemos el array Fibonacci, con un mínimo de los 2-3 primeros datos, y crearemos un bucle que haga push en el array de "i", para que la suma sea de (array[i-1])+(array[i-2]). Para ello, necesitaremos un bucle incremental y que se ejecute dicha suma y realizar array.push() en cada bucle.*/

let n = 15;
let numeros = new Array();
numeros = [0,1]
let suma = 0;
let i;
for(i = 2; i <= n; i++){

    suma = (numeros[i-2]) + (numeros[i-1]);
    numeros.push(suma);
}

console.log('Los números de Fibonacci son: ',numeros);