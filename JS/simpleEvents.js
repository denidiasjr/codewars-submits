
// My Solution
class EventA {
  constructor() {
    this.handlers = [];
  }

  subscribe(f) {
    this.handlers.push(f);
  }

  unsubscribe(f) {
    const functionIndex = this.handlers.findIndex(currentFunction => currentFunction === f);
    this.handlers.splice(functionIndex, 1);
  }

  emit() {
    this.handlers.forEach(handler => {
      handler.call(this, ...arguments);
    })
  }
}

// Best Solution
class EventA {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }
  
  unsubscribe(func) {
    this.subscribers.delete(func);
  }
  
  emit(...args) {
    this.subscribers.forEach(s => s(...args));
  }
}

function testeA () {
  testeA.calls = (testeA.calls || 0) + 1;
  testeA.args = Array.prototype.slice.call(arguments);
};

function testeB () {
  testeB.calls = (testeB.calls || 0) + 1;
  testeB.args = Array.prototype.slice.call(arguments);
};

function testeC () {
  testeC.calls = (testeC.calls || 0) + 1;
  testeC.args = Array.prototype.slice.call(arguments);
};

const eventA = new EventA();
eventA.subscribe(testeA);
eventA.subscribe(testeB);
eventA.subscribe(testeC);
eventA.emit(1, 'foo', true);
eventA.unsubscribe(testeB);
eventA.emit(2, 'call', true);
console.log(testeA.calls);
console.log(testeB.calls);
console.log(testeC.calls);
console.log(testeA.args);
console.log(testeB.args);
console.log(testeC.args);
