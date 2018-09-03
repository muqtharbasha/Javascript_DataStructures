
//Queue using Arrays.

var Queue = function () {
    this.item = [];
}

Queue.prototype.enqueue = function (data) {
    this.item.push(data);
}

Queue.prototype.dequeue = function () {
    this.item.shift();
}

Queue.prototype.printElements = function () {
    var res = "";
    for (var i = 0; i < this.item.length; i++)
        res += this.item[i] + " ";
    return res;
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.printElements();

queue.dequeue();

queue.printElements();