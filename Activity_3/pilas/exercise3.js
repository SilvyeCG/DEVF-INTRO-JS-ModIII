/*

3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta. 
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

*/

class Stack{
    constructor(){
        this.stack = []
        
    }

    push(departure, stop1, stop2, arrival){

        this.stack.push(departure, stop1, stop2, arrival);
        return stack;
    }

    route(){
        if(stack){
            return 'Route: '+ this.stack;
        }
    }

    back2home(){
        if(!this.stack){
            console.log('Route does not have a trip information');
        }else{
            stack = this.stack.reverse()
        }
        return 'Route back to home: '+ stack
    }
}

let stack = new Stack;
//stack.push('Mexico City' , 'Guadalajara', 'New York', 'Toronto');
stack.push('Aguascalientes' , 'Mexico City', 'Vancouver', 'Prince George');
console.log(stack.route());
console.log(stack.back2home());
