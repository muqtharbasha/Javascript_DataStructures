
//Note:  Singly-linked list is a data structure that holds a sequence of linked nodes. 
//Each node, in turn, contains data and a pointer, which can point to another node.
// Forward direction only.

//https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript

//Implementing Stack using LinkedList.

var Stack = function () {
    this.top = null;
    this.size = 0;
}

var Node = function (data) {
    this.data = data;
    this.next = null;
}

Stack.prototype.push = function (data) {

    var node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
}

Stack.prototype.pop = function () {
    temp = this.top;
    this.top = this.top.next;
    this.size -= 1;
    return temp;
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack;