const env = require('./.env')
const twit = require('twit');
// da prezidents twitter id
const follow_ID = '25073877';
const parser = require('./parse-tweet');


const config = {
 consumer_key: process.env.consumer_key,
 consumer_secret: process.env.consumer_secret,
 access_token: process.env.access_token,
 access_token_secret: process.env.access_token_secret
};

const Twitter = new twit(config);


// create a stream that follow trumps account

const stream = Twitter.stream('statuses/filter', {follow: [follow_ID]});

// when trump tweets, check the tweet, if it passes the paramaters, pass the tweet id to the retweet function

stream.on('tweet', function(tweet) {
  if (parser.main(tweet.text) && tweet.user.id_str == follow_ID){
    console.log("this is the tweet:", tweet.text);
    retweet(tweet.id_str)
  }
});

function retweet(tweetID) {
  Twitter.post('statuses/retweet/:id', {id: tweetID}, function(err, res) {
    if (res) {
      console.log('SUCCESS');
    } else {
      console.log(error.message);
    }
  })
};

setInterval(() => {console.log("running...")}, 700000)
