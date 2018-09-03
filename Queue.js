class Queue {
    constructor() {
        this.item = [];
    }

    enqueue(data) {
        this.item.push(data);
    }

    dequeue() {
        if (this.isEmpty())
            return "Under flow";
        return this.item.shift();
    }

    printQueue() {
        var str;
        for (var i = 0; i < this.item.length; i++)
            str += this.item[i] + " ";
        return str;
    }

    isEmpty() {
        return this.item.length == 0;
    }

    frontElement() {
        return this.item[0];
    }

}

var queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.frontElement());

console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.printQueue());
