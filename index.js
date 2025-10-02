function isPalindrome(word) {
  // 1. Reverse the input string.
  // The easiest way to do this in JavaScript is to:
  //  - split the string into an array of characters
  //  - reverse the array
  //  - join the array back into a string
  const reversedWord = word.split("").reverse().join("");

  // 2. Compare the original string with the reversed string.
  // The `===` operator will return `true` if they are the same, and `false` if not.
  return word === reversedWord;
}

/* 
  PSEUDOCODE:

  1. Take the input string.
  2. Create a reversed version of the input string.
  3. Compare the original string to the reversed string.
  4. If they are identical, return true.
  5. Otherwise, return false.
*/

/*
  WRITTEN EXPLANATION:

  This solution determines if a word is a palindrome by comparing it to its reverse.
  Since JavaScript strings don't have a built-in `.reverse()` method, we first convert the string into an array of characters using `.split('')`. Then, we use the array's `.reverse()` method. Finally, we join the reversed array back into a string with `.join('')`.
  The final step is a simple comparison (`===`) between the original `word` and the `reversedWord`. The boolean result of this comparison is returned directly.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
