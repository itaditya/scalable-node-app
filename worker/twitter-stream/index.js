const pubnub = require('../../services/pubnub');

console.log('twitter-stream-worker started');

const startProcessing = (data) => {
  console.log('processing started');
  setTimeout(() => {
    console.log('processing completed');
    console.log('data', data);
    const result = data * 3;
    var publishConfig = {
      channel: "twitter-stream-worker",
      message: {
        method: 'finished-processing',
        data: result
      }
    }

    pubnub.publish(publishConfig, function(status, response) {
      console.log(status, response);
    })
  }, 600)
}

pubnub.addListener({
  message(res) {
    if(res.channel === 'twitter-stream-worker') {
      if(res.message.method === 'start-processing') {
        startProcessing(res.message.data);
      }
    }
  }
})

pubnub.subscribe({
  channels: ['twitter-stream-worker']
});
