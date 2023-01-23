const EventBusFactory = () => {
  const listeners = {};

  const fire = (event, payload) => {
    // publish message here

    if (listeners[event] === undefined) {
      return;
    }

    listeners[event].forEach((listener) => listener(payload));

    return listeners[event].map((listener) => listener(payload));
  };

  const listen = (event, listener) => {
    // subscribe a message
    if (listeners[event] === undefined) {
      listeners[event] = [];
    }

    listeners[event].push(listener);
  };

  const unsubscribe = (event, removeListener) => {
    // unsubscribe from event
    if (listeners[event] === undefined) {
      return;
    }
    listeners[event] = [];
  };

  return {
    fire,
    listen,
    unsubscribe,
  };
};

module.exports = EventBusFactory;
