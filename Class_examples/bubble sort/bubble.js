const bubbleSort = (arr) => {
    let accumulator = 0 //cuantas vueltas acomuladas ha dado

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
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

console.log(bubbleSort(arr)); //100 vueltas