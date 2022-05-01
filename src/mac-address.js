const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n ) {
  let pairs = n.split('-');
	if(pairs.length !=6) return false;
	for(let i = 0; i < pairs.length; i++){
		let symbol1 = (pairs[i][0].charCodeAt(0) >= 65 && pairs[i][0].charCodeAt(0) <=70) ||
		(pairs[i][0].charCodeAt(0)>=48 && pairs[i][0].charCodeAt(0)<=57)
		if (!symbol1) return false;
		let symbol2 = (pairs[i][1].charCodeAt(0) >= 65 && pairs[i][1].charCodeAt(0) <=70) ||
		(pairs[i][1].charCodeAt(0)>=48 && pairs[i][1].charCodeAt(0)<=57)
		 if(!symbol2) return false;
	}
	return true;
 
}
module.exports = {
  isMAC48Address
};
