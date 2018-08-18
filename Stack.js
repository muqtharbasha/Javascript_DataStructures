function Stack(){
	this.item = [];
    Stack.prototype.push = function(data){
    	this.item.push(data);
    }
    Stack.prototype.pop = function(){
	 if(this.item.length > 0){
     	return this.item.pop();
     } else{
     	return "Under Flow";
     }
    }
  Stack.prototype.peek = function(){
  	return this.item[this.item.length -1];
  }
  
  Stack.prototype.printStack = function(){
  	var str="";
    for(var i=0; i < this.item.length; i++)
    	str += this.item[i] + ",";
        return str;
  }
}
var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());