var Stack = function (capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
};
Stack.prototype.push = function (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};
Stack.prototype.pop = function () {
  if (this._count === 0) {
    return 'No element inside the stack. Add element before poping.'
  }
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if(this._count < 0 ){
    this._count = 0;
  }
  return value;
};
Stack.prototype.peek = function () {
  return this._storage[this._count-1];
};
Stack.prototype.size = function () {
  return this._count;
};
var stack = new Stack(5);
console.log(stack.push('Hello'));
console.log(stack.push('world'));
console.log(stack.push('new'));
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack._storage);
