const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2); // redondea hacia abajo p obtener la mitad
    let left = mergeSort(arr.slice(0,mid)); //se hace cargo de dividir el array en 2 1ra mitad
    let right = mergeSort(arr.slice(mid)); // toma la 2da mitad

    function merge(left, right){
        let result = []; //coloca el array ordenado

        while(left.length && right.length){ //mientras left y right tengan elementos:
            if(left[0] <= right[0]){ //si menor lo coloca en el left
                result.push(left.shift())
            }else{
                result.push(right.shift()) // si mayor lo coloca en right
            }
        }

        return result.concat(left, right);
    }

    return merge(left, right)
}

arr = [5,8,4,3,2,1,10,9,6,7]

console.log(mergeSort(arr));
