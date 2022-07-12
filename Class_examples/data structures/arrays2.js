const array =[1,6,4,9,5,2,8,3,7];
let result = []
let res = ['a', 'b'];

// array.push(999)
// console.log(array)

// //array.pop()
// console.log(array.pop())

// array.forEach(el => console.log(el));

// result = array.map(el =>el*2)
// console.log(result)

// console.log(array.filter(el => el%2 == 0));
// console.log(array.filter(el => el%2 != 0));


// console.log(result = array.find(el => el == 2));

// console.log(result = array.indexOf(9));

// const result2 = array.concat(res);
// console.log(result2)

//console.log(result = array.every(el => el>2)) //comprueba si TODOS cumplen la condicion (tipo boolean)
//console.log(result = array.some(el => el>2)) //comprueba si ALGUNO cumple la condicion (boolean)

//console.log(result = array.includes(2)) //busca si el array incluye ese valor

//console.log(result = array.join('-')) // result: 1-6-4-9-5-2-8-7

// let result3 = array.slice(1,4)
// console.log(result3)

// console.log(result = array.splice(2,3,'a','b'));

// console.log(result = array.reverse())

// console.log(result = array.sort())
console.log(result = array.sort((a,b) => b-a))
// console.log(result = array.reduce((acc, el) => acc + el, 0))

// console.log(result = array.fill(0,2,5)) //coloca 0 a partir del 2 index, hasta el anterior al 5
// console.log(result = array.fill(0,2))
// console.log(result = array.fill(0))

// array.shift()
// array.unshift(1,2)