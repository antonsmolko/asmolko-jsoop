class Set {
    /**
     * Создает сет, опционально принимая элементы для добавления
     * @param {...*} [items]
     */
    constructor() {
        this._store = {};
        this._key = 1;
    }

    /**
     * Возвращает размер сета
     */
    get size() {
        let size = 0;
        for(let key in this._store) {
            if(this._store.hasOwnProperty(key)) size++;
        }
        return size;
    }

    /**
     * Возвращает элементы сета
     */
    get values() {
        return this._store;
    }

    /**
     * Добавляет элемент в сет
     * @param {*} item
     */
    add(item) {
        if(!this.has(item)) {
            this._store[this._key] = item;
            this._key += 1;
            return this;            
        }
    }

    /**
     * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
     * @param {*} item
     * @returns {boolean}
     */
    remove(item) {
        let store = this._store;
        for(let key in store) {
            if(store[key] == item) {
                delete store[key];

                return true;
            }
        }

        return false;
    }

    /**
     * Проверяет наличие элемента в сете
     * @param {*} item
     * @returns {boolean}
     */
    has(item) {
        let store = this._store;
        for(let key in store) {
            if(store[key] == item) {
                return true;
            }
        }
        return false;
    }

    /**
     * Очищает сет
     */
    clear() {
        this._store = {};
    }

    /**
     * Возращает сет состоящий из элементов двух сетов
     * @param {Set} set
     * @returns {Set}
     */
    union(set) {
        let setStore = set._store;
        for(let key in setStore) {
            if(!this.has(setStore[key])) {
                this._store[this._key] = setStore[key];
                this._key += 1;
            }
        }
        return this;
    }

    /**
     * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
     * @param {Set} set
     * @returns {Set}
     */
    intersection(set) {
        let setStore = set._store;
        let interSet = new Set();
        for(let key in setStore) {
            if(this.has(setStore[key])) {
                interSet.add(setStore[key]);
            }
        }

        return interSet;
    }

    /**
     * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
     * @param {Set} set
     * @returns {Set}
     */
    difference(set) {
        let thisStore = this._store;
        let diffSet = new Set();
        for(let key in thisStore) {
            if(!set.has(thisStore[key])) {
                diffSet.add(thisStore[key]);
            }
        }
        
        return diffSet;
    }

    /**
     * Возвращает `true` если сет содержит в себе все элементы из друого сета
     * @param {Set} set
     * @returns {boolean}
     */
    isSubset(set) {
        let setStore = set._store;
        for(let key in setStore) {
            if(!this.has(setStore[key])) {
                return false;
            }
        }

        return true;
    }
}


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