class Animals{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    feed(){
        return `${this.name} feeds`;
    }

    walk(){
        return `${this.name} walks`;
    }
}

let dog = new Animals('Pancho', 1);
let cat = new Animals('Paco', 3);

// particular methods

dog.bark = function(){
    return 'woof, woof'
}

cat.meow = function(){
    return 'meeoow';
}

console.log(dog.feed());
console.log(cat.walk());
console.log(cat.meow());
console.log(dog.bark());
