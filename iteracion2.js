/* EJERCICIO 2: (NOTION)
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log */

console.log('Ejercicio 2:');
let isApproved = false;

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];


let sumaTrimestresAprobado = 0;
for (let i=0; i<alumns.length; i++){
    if(alumns[i].T1 == true){
        sumaTrimestresAprobado += 1;
    }
    if(alumns[i].T2== true){
        sumaTrimestresAprobado += 1;
    }
    if(alumns[i].T3== true){
        sumaTrimestresAprobado += 1;
    }
    if(sumaTrimestresAprobado >= 2){
        isApproved == true;
        console.log(alumns[i].name, ': Está aprobado');
    } else {
        console.log(alumns[i].name, ': Está suspenso');
    }
    sumaTrimestresAprobado = 0;
}
