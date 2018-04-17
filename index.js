class Set {
    constructor() {
        this._store = [];
    }

    get size() {
        return this._store.length;
    }

    get entries() {
        let entries = [];
        let store = this._store;
        store.forEach((item, i, store) => {
            entries.push([i, item]);
        });

        return entries;
    }

    add(item) {
        if(!this.has(item)) {
            this._store.push(item);

            return this;            
        }
    }

    has(item) {
        return this._store.indexOf(item) != -1;
    }

    delete(item) {
        let key = this._store.indexOf(item);        
        if(key != -1) {
            this._store.splice(key, 1);

            return true;
        }

        return false;
    }

    clear() {
        this._store = [];
    }

    value(key) {
        return this._store[key];
    }

    forEach(callback) {
        let store = this._store
        store.forEach((item, i, store) => {
            callback(item, i, this);
        });
    }
}

// let sett = new Set();

// sett.add('asd')
//     .add(143)
//     .add({key: 'value'});

// sett.forEach((value, key, sett) => {
//     console.log(`${key}: ${value}`);
// })

// sett.forEach((value, key, sett) => {
//     console.log(`${key}: ${value}`)
// });


class Stack {
    /**
     * Создает стек
     * @param {...*} [items] Элементы добавляемые в стек
     */
    constructor() {
        this._store = [];
    }

    /**
     * Возвращает количество элементов
     * @returns {number}
     */
    get size() {
        return this._store.length;
    }

    /**
     * Возвращает `true` если стек пустой, в противном случае возвращается `false`
     * @returns {boolean}
     */
    get isEmpty() {
        return this._store == 0;
    }

    /**
     * Добавляет элемент
     * @param {*} item
     */
    push(item) {
        this._store.push(item);
    }

    /**
     * Удаляет и возвращает последний элемент
     * @returns {*}
     */
    pop() {
        return this._store.pop();
    }

    /**
     * Возвращает последний элемент
     * @returns {*}
     */
    peek() {
        return this._store[this._store.length - 1];
    }
}

// let stack = new Stack();

// stack.push(1345);
// stack.push('sf');
// stack.push('fsdgh');

// console.log(stack.peek());

class Queue {
    /**
     * Создает стек
     * @param {...*} [items] Элементы добавляемые в стек
     */
    constructor() {
        this._store = [];
    }

    /**
     * Возвращает количество элементов
     * @returns {number}
     */
    get size() {
        return this._store.length;
    }

    /**
     * Возвращает `true` если очередь пустая, в противном случае возвращается `false`
     * @returns {boolean}
     */
    get isEmpty() {
        return this._store == 0;
    }

    /**
     * Возвращает первый элемент
     * @returns {*}
     */
    get front() {
        return this._store[0];
    }

    /**
     * Возвращает последний элемент
     * @returns {*}
     */
    get back() {
        return this._store[this._store.length - 1];
    }

    /**
     * Добавляет элемент
     * @param {*} item 
     */
    enqueue(item) {
        this._store.push(item);
    }

    /**
     * Удаляет последний элемент
     */
    dequeue () {
        return this._store.pop();
    }
}

// let queuee = new Queue();

// queuee.enqueue(1143);
// queuee.enqueue('adfgd');
// queuee.enqueue('dfgh');
// queuee.enqueue(345);

// console.log(queuee.dequeue());
// console.log(queuee.back);