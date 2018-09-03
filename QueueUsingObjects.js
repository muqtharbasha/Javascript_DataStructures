//Queue using Objects

var Queue = function () {
    this.count = 0;
    this.storage = {};
}

Queue.prototype.enqueue = function (data) {
    this.storage[this.count] = data;
    this.count++;
    return this.storage;
}

Queue.prototype.dequeue = function () {
    for (let res in this.storage) {
        delete this.storage[res];
        break;
    }
}

Queue.prototype.print = function () {
    var str = '';
     for (let res in this.storage) {
        str += this.storage[res] + " ";
    }
    return str;
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(100);
queue.enqueue(1000);

queue.print();

queue.dequeue();

queue.print();