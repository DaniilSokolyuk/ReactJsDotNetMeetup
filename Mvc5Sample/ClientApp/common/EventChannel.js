export default class EventChannel {

  handlers = {};

  history = [];

  subscribe(event, handler) {
    if (!this.handlers[event]) this.handlers[event] = new Set();
    this.handlers[event].add(handler);

    return this.unsubscribe.bind(this, event, handler);
  }

  unsubscribe(event, handler) {
    this.handlers[event] && this.handlers[event].delete(handler);
  }

  publish(event, payload) {

    this.history.push({ name: event, payload });

    const handlers = this.handlers[event];
    handlers && handlers.forEach(handler => handler(payload));
  }

  getAll() { return this.history.slice(0); }
}
