if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env' });
}

module.exports = {
  pubnubSubscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY,
  pubnubPublishKey: process.env.PUBNUB_PUBLISH_KEY,
  pubnubSecretKey: process.env.PUBNUB_SECRET_KEY
}
