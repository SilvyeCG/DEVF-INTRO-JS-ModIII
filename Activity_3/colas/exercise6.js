/*
6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención.  Sin embargo, llegada 
la hora de inicio hay muchos "colados", es por esto que se le  ordena al vigilante que retire a todos 
aquellos que no tienen ticket. Muestra la cola  inicial, qué elementos fueron retirados de la cola y la 
cola final. 
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
 
Cola: [
{ user:'User1', ticket:true },
{ user:'User2', ticket:true },
{ user:'User3', ticket:false },
{ user:'User4', ticket:true },
{ user:'User5', ticket:false },
{ user:'User6', ticket:false },
{ user:'User7', ticket:true },
{ user:'User8', ticket:true },
{ user:'User9', ticket:true },
{ user:'User10', ticket:false },
{ user:'User11', ticket:true },
];
*/

class Queue{
    constructor(){
        this.queue=[]
    }

    // enqueue(element){
    //     this.queue.push(element);
    //     return this.queue
    // }

    verifyTicket(){
        let queue2 = [];
        for(var i = 0; i < queue.length; i++){
            if(queue[i].ticket == true){
                queue2.push(queue[i]);
            }
        }
        return queue2
    }

}

var queue= [
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
    ];

queue = new Queue();

console.log(queue.verifyTicket())
