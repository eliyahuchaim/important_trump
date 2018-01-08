class ParseTweet {
  constructor() {

  }

  static checkForUpperCase(tweet){
    const t = tweet.split(" ");
    for (var i = 0; i < t.length; i++) {
      if (t[i] == t[i].toUpperCase()) {
        return true;
      };
    };
    return false;
  };

  static checkForExclamation(tweet){
    const t = tweet.split(" ");
    for (var i = 0; i < t.length; i++) {
      if (t[i].includes("!")) {
        return true;
      }
    };
    return false;
  };

  static checkTweet(tweet){
    if (this.checkForUpperCase(tweet) || this.checkForExclamation(tweet)) {
      return true;
    } else {
      return false;
    }
  };

};



module.exports = ParseTweet;
