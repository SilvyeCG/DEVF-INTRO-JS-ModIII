const numbers1 = [1,2,3,4,5]
const numbers2 = [1,2,3,4,5,6]

function printArrays(arr1,arr2){
    for(let i = 0; i < arr1.length; i++){
        console.log(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
        console.log(arr2[i])
    }
}

printArrays(numbers1, numbers2)