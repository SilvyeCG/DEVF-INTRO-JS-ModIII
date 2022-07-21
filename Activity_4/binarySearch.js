function binarySearch(array, number){
    let steps = 0;
    let start = 0
    let end = array.length - 1

    while(start <= end){
        steps++
        let middle =Math.floor((start + end)/2);
        if(array[middle] == number){
            return `Encontré el valor ${number} en la posición ${middle} en ${steps} pasos`
        }else if(array[middle] < number){
            start = middle+1;
        }else{
            end = middle-1;
        }

    }
    return 'value not found'
}

myArray = [1,2,2,3,5,6,7,9,12,12,13,14,16,30,33,35,40,42,65,66,66,88,89];
console.log(binarySearch(myArray,88))