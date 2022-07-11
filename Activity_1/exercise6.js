// 6. Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
// para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
// Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
// repitiendo 36.000 veces esta operación.

var sums = [];
let repeats = {};77
var sum = 0; 
var i = 0;

function dados(){

    while(i < 36000){
        var dado1 = parseInt(6*Math.random()+1);
        var dado2 = parseInt(6*Math.random()+1);
        sum = dado1 + dado2;
        sums.push(sum);
        i++
    }

    sums.forEach((number) => {
        repeats[number] = (repeats[number] || 0) + 1;
    }); 
    return repeats;

}

console.log(dados());