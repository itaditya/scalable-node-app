const pubnub = require('../services/pubnub');

console.log('api started');

var publishConfig = {
  channel: "twitter-stream-worker",
  message: {
    method: 'start-processing',
    data: '24'
  }
}

pubnub.addListener({
  message(res) {
    if(res.channel === 'twitter-stream-worker') {
      if(res.message.method === 'finished-processing') {
        console.log(res.message.data);
      }
    }
  }
})

pubnub.publish(publishConfig, function(status, response) {
  console.log(status, response);
})

pubnub.subscribe({
  channels: ['twitter-stream-worker']
});
