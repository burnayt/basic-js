const {
	NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	constructor(){
		this.maxLevel = 0;
	}
	checkMaxLevel(level){
		if(this.maxLevel< level){
			this.maxLevel = level;
		}
	}
	calculateDepth(arr, level) {
		
		if(arr === undefined ){
			return 1;
		}

		if (level === undefined) {				
			level = 1;
			this.maxLevel = 0;
		}

		this.checkMaxLevel(level);

		for (let i = 0; i < arr.length; i++) {
			if(Array.isArray(arr[i])) {
				this.calculateDepth(arr[i], level+1)
			}
		}
		return this.maxLevel;
	}
}

module.exports = {
	DepthCalculator
};