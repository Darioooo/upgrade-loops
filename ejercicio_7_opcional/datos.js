/* EJERCICIO 7: (OPCIONALES)
Completa los datos de la tabla en index.html utilizando los valores del siguiente mapa.*/

let toysMap = new Map();
let newToysArray = new Array();

let toy1 = 	{id: 23, name: 'Barbie Man'}; // 15
let toy2 = {id: 40, name: 'El gato con Guantes'}; // 8
let toy3 = {id: 40, name: 'El gato felix'}; // 35 

toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);

let rowAcolA = toysMap.get(toy1);  
let rowAcolB = toy1.id; 
let rowAcolC = toy2.name; 

let rowBcolA = toysMap.get(toy2);  
let rowBcolB = toy2.id; 
let rowBcolC = toy2.name;

let rowCcolA = toysMap.get(toy3);  
let rowCcolB = toy3.id; 
let rowCcolC = toy3.name;

