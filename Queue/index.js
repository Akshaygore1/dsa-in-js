class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.items.length; i++) {
      queueString += this.items[i] + " ";
    }
    return queueString;
  }
}
// usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.printQueue());

queue.dequeue();
queue.dequeue();

console.log(queue.printQueue());
