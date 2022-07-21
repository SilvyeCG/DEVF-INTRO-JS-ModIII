//busqueda secuencial
// [1,2,2,3,5,6,7,9,12,12,13,14,16,30,33,35,40,42,65,66,66,88,89]
// Encontre el numero en … pasos
//

function findNumber(array, number){
    for(let i = 0; i < array.length; i++){
        if(array[i] == number){
            console.log(`Encontre el numero en ${i} pasos`)
        }
    }
}

myArray = [1,2,2,3,5,6,7,9,12,12,13,14,16,30,33,35,40,42,65,66,66,88,89];
console.log(findNumber(myArray, 12))