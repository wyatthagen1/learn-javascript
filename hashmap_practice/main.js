class HashMap{
    constructor(loadFactor){
        this.__currentLoadFactor = 0;
        this.__targetLoadFactor = loadFactor;
        this.hashArr = [...Array(16)];
        this.bucketSize = 16;
        this.__bucketPrime = 2;  
    }
    static _hash(key) {
        let hashCode = 0;    
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode; 
    }
    insert(key, value, external=true){
        //insert into hashmap
        const newValue = {'key':key, 'value':value};
        const hash =  HashMap._hash(key) % this.bucketSize;

        // check if the bucket is empty
        if(this.hashArr[hash] ===undefined){
            this.hashArr[hash] = [];
        }
        const bucket = this.hashArr[hash];

        for(let i=0;i<bucket.length;i++){
            if(key === bucket[i].key){
                bucket[i].value = value
                return 
            }
        }

        bucket.push(newValue);

        //update load factor
        if(external){
            this._updateLoadFactor('increment');
        }

    }
    get(key) {
        const hash = HashMap._hash(key) % this.bucketSize;
        return (this.hashArr[hash] === undefined) ? null : 
               this.hashArr[hash].find(item => item.key === key)?.value ?? null;
    }
    has(key){
        // same as get but use .includes()
        const hash =HashMap._hash(key) % this.bucketSize;
        return (this.hashArr[hash] === undefined) ? false : 
                this.hashArr[hash].some(item => item.key === key);
    }
    remove(key){
        const hash = HashMap._hash(key) % this.bucketSize;

        if(this.has(key)){
            // get the index of the element to remove in the hash arr 
            const index = this.hashArr[hash].findIndex(item => item.key === key)
            if(index !== -1){
                this.hashArr[hash].splice(index,1); // splice the hash arr to remove the key
                this._updateLoadFactor('decrement');
            }
            return true
        }
        return false  
    }
    length(){
        return this.hashArr.length;
    }
    clear(){
        this._updateLoadFactor('clear');
    }
    keys() {
        return this.hashArr.reduce((keyArr, bucket) => {
            if (bucket !== undefined) {
                bucket.forEach(entry => keyArr.push(entry.key));
            }
            return keyArr;
        }, []);
    }
    values() {
        return this.hashArr.reduce((valArr, bucket) => {
            if (bucket !== undefined) {
                bucket.forEach(entry => valArr.push(entry.value));
            }
            return valArr;
        }, []);
    }
    entries() {
        return this.hashArr.reduce((entryArr, bucket) => {
            if (bucket !== undefined) {
                bucket.forEach(entry => entryArr.push([entry.key, entry.value]));
            }
            return entryArr;
        }, []);
    }
    _updateLoadFactor(instruction){
        switch(instruction){
            case 'decrement':{
                const curLoad = this.__currentLoadFactor; 
                this.__currentLoadFactor = (curLoad * this.bucketSize - 1)/this.bucketSize; 
                break;
            }
            case 'increment':{
                const curLoad = this.__currentLoadFactor; 
                this.__currentLoadFactor = (curLoad * this.bucketSize + 1)/this.bucketSize; 

                if(this.__currentLoadFactor > this.__targetLoadFactor){
                    console.log(`Resizing HashMap array to ${this.bucketSize * this.__bucketPrime} cells`)
                    const entries = this.entries();
                    this.bucketSize = this.bucketSize * this.__bucketPrime;
                    this.hashArr = [...Array(this.bucketSize)];
                    this.__currentLoadFactor = entries.length / this.bucketSize;
                    console.log(this.__currentLoadFactor)

                    for(let i=0; i<entries.length; i++){
                        let [key,value] = entries[i];
                        this.insert(key, value, false);
                    }

                }
                break;
            }
            case 'clear':{
                this.__currentLoadFactor = 0;
                this.hashArr = [...Array(16)];
                break;
            }
            default:
                throw new Error(`invalid instruction: ${instruction} (update load factor cases)`); 
        } 
    }
}



const test = new HashMap(.75) // or HashMap() if using a factory
test.insert('apple', 'red')
test.insert('banana', 'yellow')
test.insert('carrot', 'orange')
test.insert('dog', 'brown')
test.insert('elephant', 'gray')
test.insert('frog', 'green')
test.insert('grape', 'purple')
test.insert('hat', 'black')
test.insert('ice cream', 'white')
test.insert('jacket', 'blue')
test.insert('kite', 'pink')
test.insert('lion', 'golden')
test.insert('lion', 'aubergine')
console.log(test)
test.insert('moon', 'silver')
console.log(test)
test.insert('moon', 'full')
console.log(test.get('frog'))
console.log(test.has('lion'))
console.log(test.remove('lion'))
console.log(test.has('lion'))
//test.clear();
console.log(test)
console.log(test.entries())


// need to update insert, remove, clear, 
// update load factor needs to take current load factor --> compare againt new load factor --> 
// if it exceeds the allowable value, then need to take all the entries, create a new BIGGER hashArr, and then re-insert all the key-value pairs
// how do you decide the size of the new hash arr? --> step up or down by factor of 2 