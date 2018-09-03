
//Creation of Stack using Objects 
var Stack = function () {
    this.count = 0;
    this.storage = {};
}

Stack.prototype.push = function (data) {
    this.storage[this.count] = data;
    this.count++;
    return this.storage;
}

Stack.prototype.pop = function () {
    
    this.count--;
    console.log(this.count);
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

var stackObj = new Stack();
stackObj.push(10);
stackObj.push(20);
stackObj.push(200);
stackObj.push(120);

stackObj.pop();
stackObj.pop();
