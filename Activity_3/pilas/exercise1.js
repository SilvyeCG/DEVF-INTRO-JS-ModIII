/*

1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
Salida: ['Manzana','Cebolla','Apio','Naranja']

*/

class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
        return element;
    }

    print(number){
        for(let i = 0; i < number; i++){
            var newStack = this.stack.slice(number);
        }
        return newStack
    }
}

let stack = new Stack();


stack.push('Blue');
stack.push('Esmeralda');
stack.push('Green');
stack.push('Yellow');
stack.push('Red');
console.log(stack.print(2));

/* 

//myFunction

function myFunction(array, number){
    for(let i = 0; i < number; i++){
        newArray = array.slice(0, number);
    }
    console.log(newArray);
}

array = ['a', 'b','c','d','e','f','g'];
number = 4

console.log(myFunction(array, number));

*/