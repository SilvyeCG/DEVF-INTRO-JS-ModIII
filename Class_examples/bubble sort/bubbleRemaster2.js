const bubbleSort = (arr) => {
    let accumulator = 0 //cuantas vueltas acomuladas ha dado

    for(let i = 0; i < arr.length -1; i++){
        for(let j = 0; j < arr.length -1 - i; j++){ //se agrego el -i
            accumulator ++
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(accumulator)
}

let arr = [5,8,4,3,2,1,10,9,6,7];

console.log(bubbleSort(arr)); //45 vueltas