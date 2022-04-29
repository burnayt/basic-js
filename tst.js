// list = [
// 	[0, 1, '^^'],
// 	[0, '^^', 2],
// 	['^^', 1, 2]
// ]

// function countCats(backYard) {
// 	let catsNumber = 0;
// 	for (let i = 0; i < backYard.length; i++) {
// 		for (let j = 0; j < backYard[i].length; j++) {
// 			if (backYard[i][j] == '^^') {
// 				catsNumber++;
// 			}
// 		}

// 	}
// 	return catsNumber;

// }


// const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD = 5730;

// function dateSample(sampleActivity) {
// 	if (typeof sampleActivity !== 'string' || sampleActivity == undefined) return false;

// 	let b = parseInt(sampleActivity);

// 	if (!Number.isInteger(b) || b <= 0 || b >= 15) return false;

// 	let a = Math.log(MODERN_ACTIVITY / b);
// 	let k = 0.693 / HALF_LIFE_PERIOD;
// 	return Math.ceil(a / k);
// }

// function dateSample2(sampleActivity) {
// 	if (typeof sampleActivity !== 'string' || sampleActivity == undefined) return false;

// 	let b = parseFloat(sampleActivity);

// 	if (isNaN(b) || b <= 0 || b >= 15) return false;

// 	let a = Math.log(MODERN_ACTIVITY / b);
// 	let k = 0.693 / HALF_LIFE_PERIOD;
// 	return Math.ceil(a / k);
// }

// function createDreamTeam(members) {
// 	if (!Array.isArray(members)) return false;

// 	let team = members.filter(function (e) {
// 		if (e && typeof e == 'string') {
// 			return true;
// 		}
// 		return false;
// 	})
// 	team = team.map(function (e) {

// 		return e.trim()[0].toUpperCase();
// 	})
// 	return team.sort((a, b) => {
// 		if (a >= b) return 1;
// 		return -1;
// 	}).join('');

// }
// r = createDreamTeam([
// 	'amelia',
// 	'ruby',
// 	'lily',
// 	'grace',
// 	'millie',
// 	'daisy',
// 	'freya',
// 	'erin',
// 	'megan',
// 	'jasmine',
// 	'brooke',
// ])

// function getSeason(date) {

// 	console.debug('before', date);


// 	if (!date) return 'Unable to determine the time of year!';
// 	if (!(date instanceof Date)) return 'Invalid date!';
// 	//'Unable to determine the time of year!'
// 	console.debug('afte', date);

// 	let month = date.getMonth();
// 	if (month < 2 || month == 11) return 'winter';
// 	if (month < 5) return 'spring';
// 	if (month < 8) return 'summer';
// 	if (month < 11) return 'autumn';
// }
// //   function getSeason(date ) {  

// //     try{
// //       console.log(date)
// //       if(!date) return 'Unable to determine the time of year!';
// //       if(!(date instanceof Date) ) return 'Invalid date!';
// //     //'Unable to determine the time of year!'


// //       let month = date.getMonth();
// //       if(month < 2 || month == 11) return 'winter';
// //       if(month < 5 ) return 'spring';
// //       if(month < 8 ) return 'summer';
// //       if(month < 11 ) return 'autumn';
// //     }
// //     catch{
// //       throw 'Invalid date!';
// //     }

// //   }
// function fakeDateDestroyer(d) {

// 	let date = new Date(1456, 0, 2, 1, 50, 9, 238);
// 	for (const e in d) {

// 	}
// 	for (const e of date) {

// 	}
// }
// const fakeDate = {
// 	toString() {
// 		return Date.prototype.toString.call(new Date());
// 	},
// 	[Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// function calculateHanoi(disksNumber, turnsSpeed) {
// 	let turns = 2 ** disksNumber - 1;
// 	let seconds = turns / (turnsSpeed / 3600);
// 	return {
// 		turns: turns,
// 		seconds: seconds
// 	};

// }

// function transform(arr) {

// 	let discN = '--discard-next';
// 	let discP = '--discard-prev'
// 	let doubleN = '--double-next';
// 	let doubleP = '--double-prev';

// 	let discard = 0; // предыдущий элемент был удален

// 	if (!Array.isArray(arr)) {
// 		throw new Error("\'arr\' parameter must be an instance of the Array!");
// 	}

// 	let result = [];

// 	let i = 0;
// 	if (arr[i] == discP || arr[i] == doubleP) {
// 		i++
// 	}
// 	while (arr[i] != undefined) {
// 		if (i == arr.length - 1 && (arr[i] == doubleN || arr[i] == discN)) {
// 			i++;
// 			continue;
// 		}
// 		// if(arr[i] == discN && arr[i+2] ==doubleP){						
// 		// 	i+=3;
// 		// 	continue;			
// 		// }
// 		// NEXT	
// 		if (arr[i] == discN) {
// 			i++;
// 			i++;
// 			if(arr[i] == doubleP || arr[i]==discP) {
// 				i++;
// 			}
// 			continue;
// 		}

// 		if (arr[i] == doubleN) {
// 			result.push(arr[i + 1]);
// 			i++;
// 			continue;
// 		}

// 		// PREV

// 		if (arr[i + 1] == discP) {
// 			i++;
// 			i++;
// 			continue;
// 		} else if (arr[i + 1] == doubleP) {
// 			result.push(arr[i]);
// 			result.push(arr[i]);
// 			i++;
// 			i++;
// 			continue;
// 		}

// 		result.push(arr[i]);
// 		i++;
// 	}
// 	return result;

// }
// cases = [
// 	[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
// 	[1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
// 	[1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
// 	[1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],


// ]

const chainMaker = {
	chain: [],
	getLength() {


	},
	addLink(value) {
		this.chain.push(value);
		return this;

	},
	removeLink(position) {
		if(position <= 0 || position > this.chain.length || isNaN(position)){
			throw new Error("You can\'t remove incorrect link!");
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
		return result;
	}
};
arr = [
	chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
    chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
    chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
    chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
];
console.log(arr[3]);