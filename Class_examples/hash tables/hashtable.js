class HashTable{
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }
    
    _hash(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){ 
            hash = hash += key.charCodeAt(i); //retorna el valor de cada caracter en ascii
        }

        return hash % this.table.length
    }

    set(key, value){
        const index = this._hash(key);

        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0] === key){
                    this.table[index][i] = value
                    return
                }
            }
            this.table[index].push([key, value]);
        }else{
            this.table[index] = []
            this.table[index].push([key,value]);
        }

        //this.table[index] = value;
        this.size++
    }

    get(key){
        const index = this._hash(key);
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0]===key){
                    return this.table[index][i][1];
                }
            }
        }

        return undefined

        // return this.table[index];
    }

    remove(key){
        const index = this._hash(key);


        if(this.table[index] && this.table[index].length){
            for(let i = 0; i<this.table[index].length; i++){
                if(this.table[index][i][0] ===key){
                    this.table[index].splice(i,1)
                    this.size --
                    return true
                }
            }
            // this.table[index] = undefined;
            // this.size--
            // return true
        }else{
            return false
        }
    }

    show(){
        this.table.forEach((values, index) =>{
            const addValues = values.map((key, value) => `[${key}: ${value}]`)
            console.log(`${index}: ${addValues}`)
        })
    }
}

let ht = new HashTable()

ht.set('Serch', 1234);
ht.set('Gil', 4321);

ht.get('Serch')