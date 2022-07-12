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

    pop(){
        this.count--
        const result = this.stack[this.count]
        delete this.stack[this.count]
        return result
    }

    peek(){
        return this.stack[this.count-1]
    }

    size(){
        return this.count
    }

    print(){
        console.log(Object.values(this.stack))
    }

    isEmpty(){
        return this.count == 0
    }

    clear(){
        this.stack = {}
        this.count = 0
    }
}

let stack = new Stack();

console.log(stack.isEmpty())
console.log(stack.push('Blue'))
console.log(stack.push('Esmeralda'))
console.log(stack.push('Green'))
console.log(stack.push('Yellow'))
console.log(stack.push('Red'))
stack.print();
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
stack.print();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());