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
class VigenereCipheringMachine {
  constructor(type) {
		if (type == true || type == undefined) {
			this.reverse = false;
		} else {
			this.reverse = true;
		}
	}
	getChar(index) {
		//console.log(65+index);
		return String.fromCharCode(65 + index);
	}
	
	getNum(alpha) {
		return alpha.charCodeAt(0) - 64;
	}
	

	alphaShift(msgSymbol, keySymbol) {
		msgSymbol--;
		keySymbol--;
		let result = msgSymbol + keySymbol;
		if (result >= 26) {
			result -= 26;
		}
		//console.log(getChar(result))
		return this.getChar(result);
	}

	alphaShiftReverse(keySymbol, cipherSymbol) {
		if(keySymbol == cipherSymbol) return 'A';
		let tempResult = 0;
		let result = 0;
		for (let k = 0; k < 26; k++) {
			if (keySymbol + k + 65 <= 90) {
				tempResult = this.getChar(keySymbol + k);
			} else {
				tempResult = this.getChar(keySymbol + k - 26);
			}
			if (tempResult == this.getChar(cipherSymbol - 1)) {
				result = this.getChar(k + 1);
			}
		}
		return result;
	}

	getEncryptSymbol(msgSymbol, keySymbol) {
		return this.alphaShift(this.getNum(msgSymbol), this.getNum(keySymbol));
	}

	getDecryptSymbol(keySymbol, cipherSymbol) {
		return this.alphaShiftReverse(this.getNum(keySymbol), this.getNum(cipherSymbol));
	}

	encrypt(message, key) {    
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}
		//message = message.toUpperCase();
		let result = [];
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			if( (message[i].charCodeAt(0)>= 65 && message[i].charCodeAt(0) <=90) ||
        (message[i].charCodeAt(0)>=97 && message[i].charCodeAt(0) <=122)) 			
			{
				const cipherSymbol = this.getEncryptSymbol(
					message[i].toUpperCase(), 
					key[j].toUpperCase());
				result.push(cipherSymbol)
				j++;
			}
			else{
				result.push(message[i]);
			}
			
			//j++;
			if (j >= key.length) {
				j = 0;
			}
		}
		if(this.reverse){
			return result.reverse().join('');
		}
		return result.join('');
	}
	decrypt(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}

		let result = [];
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			if((message[i].charCodeAt(0)>= 65 && message[i].charCodeAt(0) <=90) ||
      (message[i].charCodeAt(0)>=97 && message[i].charCodeAt(0) <=122)) 
			
			{
				const cipherSymbol = this.getDecryptSymbol(
					key[j].toUpperCase(),
					 message[i].toUpperCase());
				result.push(cipherSymbol)
				j++;
			}
			else{
				result.push(message[i]);
			}
			
			//j++;
			if (j >= key.length) {
				j = 0;
			}
		}
		if(this.reverse){
			return result.reverse().join('');
		}
		return result.join('');
	}
}

module.exports = {
  VigenereCipheringMachine
};
