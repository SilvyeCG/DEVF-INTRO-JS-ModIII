const bubbleSort = (arr) => {
    let accumulator = 0 //cuantas vueltas acomuladas ha dado
    let change = true //bandera o centinella: da una salida si hace o no cambios

    for(let i = 0; change && i < arr.length -1; i++){
        change = false; // se cambia a false para no hacer un bucle infinito
        for(let j = 0; j < arr.length -1 -i; j++){
            accumulator ++
            if(arr[j] > arr[j+1]){
                arr[j], arr[j +1] = [arr[j+1], arr[j]];
                change = true;
            }
        }
    }
    console.log(accumulator)
}


//let arr = [5,8,4,3,2,1,10,9,6,7];
let arr = [10,9,8,7,6,5,4,3,2,1];

console.log(bubbleSort(arr)); 