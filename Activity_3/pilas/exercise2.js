/*

2.- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number, 
y dos valores también de tipo Number "nuevo" y "viejo", de forma que si el segundo valor aparece en algún 
lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más 
nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]

*/
class Stack{
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element);
        return element;
    }

    replace(newData, oldData){
        let findData = this.stack.indexOf(oldData);
        if(findData >= 0){
            this.stack[findData] = newData;
            for(let i = this.stack.length; i > findData +1; i--){
                this.stack.pop()
            }
        }else{
            console.log('No founded')
        }
        
    return this.stack
    }
}

let stack = new Stack();


stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4);
stack.push(5);
console.log(stack.replace(10,1));

/*
function replace(newData , oldData){
    let stack = [1,2,3,4,5,6,7,8];
    let findData = stack.indexOf(oldData);
    stack[findData] = newData;
    //console.log(findData)
    for(let i = stack.length; i > findData +1; i--){
        stack.pop()
    }
    return stack
}

console.log(replace(10,8));
*/