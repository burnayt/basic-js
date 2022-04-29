const {
	NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


function transform(arr) {
	
	let discN = '--discard-next';
	let discP = '--discard-prev'
	let doubleN = '--double-next';
	let doubleP = '--double-prev';

	let discard = 0; // предыдущий элемент был удален

	if (!Array.isArray(arr)) {
		throw new Error("\'arr\' parameter must be an instance of the Array!");
	}

	let result = [];

	let i = 0;
	if (arr[i] == discP || arr[i] == doubleP) {
		i++
	}
	while (arr[i] != undefined) {
		if (i == arr.length - 1 && (arr[i] == doubleN || arr[i] == discN)) {
			i++;
			continue;
		}
		// if(arr[i] == discN && arr[i+2] ==doubleP){						
		// 	i+=3;
		// 	continue;			
		// }
		// NEXT	
		if (arr[i] == discN) {
			i++;
			i++;
			if(arr[i] == doubleP || arr[i]==discP) {
				i++;
			}
			continue;
		}

		if (arr[i] == doubleN) {
			result.push(arr[i + 1]);
			i++;
			continue;
		}
		
		// PREV

		if (arr[i + 1] == discP) {
			i++;
			i++;
			continue;
		} else if (arr[i + 1] == doubleP) {
			result.push(arr[i]);
			result.push(arr[i]);
			i++;
			i++;
			continue;
		}
		
		result.push(arr[i]);
		i++;
	}
	return result;

}

module.exports = {
	transform
};