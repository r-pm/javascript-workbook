'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {
  word = word.toLowerCase().trim();
  const vowel = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;

  if (vowel.includes(word[0])) {
    // If first letter is a vowel
    return word + "yay";
  } 
  else {
    for (let char of word) {
      // Loop through until the first vowel is found
      if (vowel.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = word.indexOf(char);
        break;
      }
    }
    // Compose final string
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
  }
}



const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
