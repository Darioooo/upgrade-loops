/* 
EJERCICIO 4: (NOTION)
Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
*/
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
console.log('Ejercicio 4:')
for (let datoAlien in alien){
    console.log(datoAlien, alien[datoAlien]);
}