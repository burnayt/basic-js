const {
	NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
	getLength() {
		return chain.length;

	},
	addLink(value) {
		this.chain.push(value);
		return this;

	},
	removeLink(position) {
		if(position <= 0 || position > this.chain.length || isNaN(position)){
			this.chain = [];
			throw new Error( "You can\'t remove incorrect link!");
		}
		this.chain.splice(position-1, 1);
		return this;

	},
	reverseChain() {
		this.chain.reverse();
		return this;

	},
	finishChain() {
		result = '';
		for (let i = 0; i < this.chain.length; i++) {
			result +=`( ${this.chain[i]} )` 
			if(i != this.chain.length-1){
				result += '~~';
			}
		}
		this.chain = [];
		return result;
	}
};

module.exports = {
	chainMaker
};