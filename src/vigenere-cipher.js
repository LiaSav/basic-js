const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(plaintext, key) {
    if (!plaintext || !key) throw new Error('Incorrect arguments!');

    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];

      if (alphabet.includes(char)) {
        const shift = alphabet.indexOf(key[keyIndex % key.length]);
        const encryptedChar = alphabet[(alphabet.indexOf(char) + shift) % alphabet.length];

        result += encryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(ciphertext, key) {
    if (!ciphertext || !key) throw new Error('Incorrect arguments!');

    ciphertext = ciphertext.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];

      if (alphabet.includes(char)) {
        const shift = alphabet.indexOf(key[keyIndex % key.length]);
        const decryptedChar = alphabet[(alphabet.indexOf(char) - shift + alphabet.length) % alphabet.length];

        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
