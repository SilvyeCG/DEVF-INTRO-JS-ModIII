/*

5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]

*/

class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(element){
        this.queue.push(element);
        return this.queue
    }

    split(){
        let queue1 = []
        let queue2 = []
        for(let i = 0; i < this.queue.length; i++){
            if(i % 2 == 0){
                queue1.push(this.queue[i]);
            }else if(i % 2 != 0){
                queue2.push(this.queue[i]);
            }
        }
        console.log(queue1);
        return queue2;
    }
}

let queue = new Queue();

//console.log(queue.isEmpty())
queue.enqueue('blue')
queue.enqueue('Esmeralda')
queue.enqueue('Green')
queue.enqueue('Yellow')
queue.enqueue('red')
console.log(queue.split());