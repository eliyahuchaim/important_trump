const env = require('../.env')
const twit = require('twit');
const Twitter = new twit(env);
// da prezidents twitter id
const follow_ID = '25073877';
const parser = require('./parse-tweet');

// create a stream that follow trumps account

const stream = Twitter.stream('statuses/filter', {follow: [follow_ID]});

// when trump tweets, check the tweet, if it passes the paramaters, pass the tweet id to the retweet function

stream.on('tweet', function(tweet) {
  if (parser.checkTweet(tweet.text)){
    retweet(tweet.id_str)
  }
});

function retweet(tweetID) {
  Twitter.post('statuses/retweet/:id', {id: tweetID}, function(err, res) {
    if (res) {
      console.log('success');
    } else {
      console.log(error.message);
    }
  })
};

// let tweets = function(){
//   let params = {
//     q: "@realDonaldTrump",
//     lang: 'en',
//     result_type: 'mixed',
//     count: '1',
//     tweet_mode: 'extended'
//   };
//
//   Twitter.get('search/tweets', params, function(err, data){
//     if (data) {
//       console.log("this is the tweet", data.statuses[0].full_text);
//       // debugger;
//       if (parser.checkTweet(data.statuses[0].full_text)) {
//         retweet(data.statuses[0].id_str)
//       } else {
//         console.log("tweet did not match");
//       }
//     }
//   })
// };
// tweets()
