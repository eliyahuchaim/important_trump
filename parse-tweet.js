class ParseTweet{

  static main(tweet) {
    const t = tweet.split(" ");

    for (var i = 0; i < t.length; i++) {
      if (this.isExclamated(t[i]) || this.isCaps(t[i])){
        if (this.isNotNumber(t[i]) && this.isNotAcronym(t[i])) {
          return true;
        }
      }
    }
    return false;
  }


  static isExclamated(word) {
    if (word.includes("!")) {
      return true;
    }
    return false;
  };

  static isCaps(word) {
    if (word.toUpperCase() == word) {
      return true;
    }
    return false;
  };

  static isNotAcronym(word) {
    if (!word.substring(0, word.length - 1).includes(".")) {
      return true;
    }
    return false;
  };

  static isNotNumber(word) {
    for (var i = 0; i < word.length; i++) {
      if (!isNaN(parseInt(word[i]))){
        return false;
      }
    }
    return true;
  };
};

module.exports = ParseTweet;

// original version

// class ParseTweet {
//   constructor() {
//   }
//
//   static checkForUpperCase(tweet){
//     const t = tweet.split(" ");
//     for (var i = 0; i < t.length; i++) {
//       if (t[i] == t[i].toUpperCase()) {
//         return true;
//       };
//     };
//     return false;
//   };
//
//   static checkForExclamation(tweet){
//     const t = tweet.split(" ");
//     for (var i = 0; i < t.length; i++) {
//       if (t[i].includes("!")) {
//         return true;
//       }
//     };
//     return false;
//   };
//
//   static checkTweet(tweet){
//     if (this.checkForUpperCase(tweet) || this.checkForExclamation(tweet)) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//
// };
//
// module.exports = ParseTweet;
