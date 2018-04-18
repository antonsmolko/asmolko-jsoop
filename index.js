class Set {
    /**
     * Создает сет, опционально принимая элементы для добавления
     * @param {...*} [items]
     */
    constructor() {
        this._store = [];
    }

    /**
     * Возвращает размер сета
     */
    get size() {
        return this._store.length;
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
            this._store.push(item);

            return this;            
        }
    }

    /**
     * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
     * @param {*} item
     * @returns {boolean}
     */
    remove(item) {
        let key = this._store.indexOf(item);        
        if(key != -1) {
            this._store.splice(key, 1);

            return true;
        }

        return false;
    }

    /**
     * Проверяет наличие элемента в сете
     * @param {*} item
     * @returns {boolean}
     */
    has(item) {
        return this._store.indexOf(item) != -1;
    }

    /**
     * Очищает сет
     */
    clear() {
        this._store = [];
    }

    /**
     * Возращает сет состоящий из элементов двух сетов
     * @param {Set} set
     * @returns {Set}
     */
    union(set) {
        return this._store.concat(set._store);
    }

    /**
     * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
     * @param {Set} set
     * @returns {Set}
     */
    intersection(set) {
        return this._store.filter((item) => {
            return !set._store.indexOf(item) == -1;
        })
    }

    /**
     * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
     * @param {Set} set
     * @returns {Set}
     */
    difference(set) {
        return this._store.filter((item) => {
            return set._store.indexOf(item) == -1;
        })
    }

    /**
     * Возвращает `true` если сет содержит в себе все элементы из друого сета
     * @param {Set} set
     * @returns {boolean}
     */
    isSubset(set) {
        let missing = set._store.filter((item) => {
            return this._store.indexOf(item) == -1;
        })

        if(!missing.length) {
            return true;
        }

        return false;
    }

    /**
     * Отсебятина
     */

    get entries() {
        let entries = [];
        let store = this._store;
        store.forEach((item, i, store) => {
            entries.push([i, item]);
        });

        return entries;
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