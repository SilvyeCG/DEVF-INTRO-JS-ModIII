/*
let names = ['Juan', 'Ana', 'Pedro'];
let names2 = names;
console.log(names);
console.log(names2);

names2[1] = 'rosa';

console.log(names);
console.log(names2);

// due to names2 = names, rosa se va a guardar en both arrays, memory space, solo se copia la ref de a donde apunta (apuntador)
*/

//PART 2: como copiar sin referenciar al 1er array?
//usar el method map
let names = ['Juan', 'Ana', 'Pedro'];
let names2 = names.map(el => el)

console.log(names);
console.log(names2);

names2[1] = 'rosa';

console.log(names);
console.log(names2);


/* ---pause----ARROW FUNCTIONS VS FUNCTIONS 

function sum (n1, n2){
    return n1+n2
}


const sum = (n1, n2 => {
    return n1+n2
})
console.log(sum(1,2))
const square = num => num * num   //cuando recibe solo 1 parametro se puede obviar, quitando el () y las {}
*/