/*

4.-  Un almacén tiene capacidad para apilar "n" contenedores. Cada contenedor tiene un 
número de identificación. Cuando se desea retirar un contenedor específico, 
deben retirarse primero los contenedores que están encima de él y colocarlos en otra 
pila, efectuar el retiro y regresarlos a su respectivo lugar.

*/

class Stack{
    constructor(){
        this.stack = {}
        this.count = 0 //este funciona como key del obj

    }

    push(element){
        this.stack[this.count] = element
        this.count++
        return this.stack
        
    }

    sort(object){
       
       
    }

}

let stack = new Stack();

stack.push('Blue')
stack.push('Esmeralda')
stack.push('Green')
stack.push('Yellow')
console.log(stack.push('Red'))
