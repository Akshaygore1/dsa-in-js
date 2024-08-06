class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    let stackString = "";
    for (let i = 0; i < this.items.length; i++) {
      stackString += this.items[i] + " ";
    }
    return stackString;
  }
}

// usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.printStack());

stack.pop();
stack.pop();

console.log(stack.printStack());
