const {
	NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	if(str=='') return '';
	
	const lst = str.split('');
	let els = []
	let lastEl = null;
	let result = '';
	for (let i = 0; i < lst.length; i++) {
		if(lastEl == null){
			lastEl = lst[i];
			els.push(lst[i]);
		}
		else if (lastEl == lst[i]){
			els.push(lst[i]);
		}
		else if (lastEl != lst[i]){
			result += `${els.length>1?els.length:''}${lastEl}`;
			lastEl = lst[i];
			els = [];
			els.push(lst[i]);
		}
		
	}
	result += `${els.length>1?els.length:''}${lastEl}`;
	return result;

}

module.exports = {
	encodeLine
};