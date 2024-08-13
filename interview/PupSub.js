class PubSub {
    constructor() {
      this.events = {};
    }
  
    subscribe(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    unsubscribe(event, listenerToRemove) {
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }
  
    publish(event, data) {
      if (!this.events[event]) return;
  
      this.events[event].forEach(listener => listener(data));
    }
  }
  
  // Usage
  const pubSub = new PubSub();
  
  const onMessageReceived = (data) => {
    console.log(`Received: ${data}`);
  };
  
  pubSub.subscribe('message', onMessageReceived);
  pubSub.publish('message', 'Hello, World!');
  
  pubSub.unsubscribe('message', onMessageReceived);
  