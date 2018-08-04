## Stacks

In computer science, a stack is an abstract data type that serves as a collection of elements, its alternative name is **LIFO(Last In, First Out)**.

**LIFO:** The **L**ast item added **I**nto the stack will be **F**irst item taken **O**ut of the stack. It has two principles operations.

**push**, which adds an element to the collection, and

**pop**, which removes the most recently added element.

Simple representation of a stack runtime with push and pop operations.

![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

#### Example in Javascript

Interface: Stacks
1. Constructor Function
   - Storage
2. Methods
   - push(value) // adds value to the front,   returns size of stack    
   - pop()  // remove value from front, return value
   - peek() // returns the front element
   - size() // returns the size of stack as integer

#### es5 Interface
 ```js
 var Stack = function(){  // Constructor Function

 }
 Stack.prototype.push = function(value){ // adds value to the front and return size of stack

 }
 Stack.prototype.pop = function(){ // remove value from front, return value
 }
 Stack.prototype.peek = function () { // return front element

 };
 Stack.prototype.size = function(){ // return size of stack as integer

 }
 
 var stack = new Stack(); // create an instance for Stack
 stack.push("Hello");
 ```  
#### es6 Interface

```js
class Stack{

  constructor(){ // Constructor Function

  }
  push(value){ // adds value to the front and return size of stack

  }
  pop(){ // return size of stack as integer

  }
  peek(){ // return front element

  }
  size(){ // return size of stack as integer

  }
}

var stack = new Stack(5); // create an instance for Stack
 stack.push("Hello");
```


