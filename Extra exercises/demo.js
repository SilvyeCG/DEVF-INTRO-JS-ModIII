// Write a function:

// class Solution { public int solution(int[] A); }

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


class Solution {
    constructor(array){
        this.array = array;
    }

    solution(array) {
        array = array.filter(element => element >= 1).sort((a,b) => a - b);

        let element = 1;

        for(let i = 0; i < array.length; i++){
            if(element < array[i]){
                return element
            }
            element = array[i] + 1;
        }

        return element
    }

     element = 1;
}

let array =  new Solution()

console.log(array.solution([1, 3, 6, 4, 1, 2]));
console.log(array.solution([1, 2, 3]));
console.log(array.solution([-1, -3]));


 function solution(A) {
    // only positive values, sorted
    A = A.filter(element => element >= 1).sort((a, b) => a - b)

    let element = 1

    for(let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if(element < A[i]) {
            return element
        }
        element = A[i] + 1
    }

    return element

}
console.log(solution([1, 3, 6, 4, 1, 2]));