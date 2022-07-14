let obj = {
    Gil: '12345',
    Serch: '1414'
}

obj.hasOwnProperty('Gil'); //return true

const collection = new Map();
collection.set('Gil', 12121)
collection.set('Serch', 121212)
console.log(collection)
collection.size //result 2
collection.get("Gil")
// result: 12121

//ITERAR DENTRO DEL MAP CON CICLO FOR

for(let [key, value] of collection){
    console.log(`${key}: ${value}`)

}


// SE PUEDE HACER PERO OBTENEMOS ERRORES:
//crear un nuevo value
collection[size] = 67676
collection.get('size')
//undefined
collection.size
//2 ---> porque aunque creamos un value size, 67676, no está dentro del map

