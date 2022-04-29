const {
	NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let result = '';

	const repeat = options.repeatTimes || 1;
	const sepSample = options.separator || '+';
	let addSamp;
	if(options.addition !== undefined) {
		addSamp = String(options.addition);
	}
	
	const addRep = options.additionRepeatTimes || 1;
	const addSepSample = options.additionSeparator || '|';

	let addition = '';
	//addSamp = addSamp.;
	str = str+'';
	if (addSamp) {
		for (let i = 0; i < addRep; i++) {
			let addSep = i != addRep - 1 ? addSepSample : '';
			addition += `${addSamp}${addSep}`;
		}
	}

	for (let i = 0; i < repeat; i++) {
		let sep = i != repeat - 1 ? sepSample : '';
		result += `${str}${addition}${sep}`;
	}
	return result;
}

module.exports = {
	repeater
};