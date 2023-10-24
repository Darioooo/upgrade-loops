/* EJERCICIO 2: (NOTION)
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log */



const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];

let isApproved;
let alumnosAprobados = new Array;

for (let i=0; i<alumns.length; i++){
    isApproved = false;
    if(((alumns[i].T1 && alumns[1].T2) || (alumns[i].T1 && alumns[1].T3) || (alumns[i].T2 && alumns[1].T3)) === true){
        isApproved = true;
    }
    if(isApproved === true){
        console.log(alumns[i].name, ': Está aprobado?', isApproved);
        alumnosAprobados.push(alumns[i]);
    } else {
        console.log(alumns[i].name, ': Está aprobado?', isApproved);
    }  
}
 console.log('Los alumnos que están aprobados son: ',alumnosAprobados);
