const PubNub = require('pubnub');

const { pubnubSubscribeKey, pubnubPublishKey, pubnubSecretKey } = require('../config');

const pubnub = new PubNub({
  subscribeKey: pubnubSubscribeKey,
  publishKey: pubnubPublishKey,
  secretKey: pubnubSecretKey,
  ssl: true
})

module.exports = pubnub
