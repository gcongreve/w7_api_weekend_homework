const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    console.log(`channel ${channel} is publishing : ${payload}`);
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
    console.log(`channel ${channel} is subscribing`);
  }

};

module.exports = PubSub;
