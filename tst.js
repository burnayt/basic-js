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

// const chainMaker = {
// 	chain: [],
// 	getLength() {


// 	},
// 	addLink(value) {
// 		this.chain.push(value);
// 		return this;

// 	},
// 	removeLink(position) {
// 		if(position <= 0 || position > this.chain.length || isNaN(position)){
// 			throw new Error("You can\'t remove incorrect link!");
// 		}
// 		this.chain.splice(position-1, 1);
// 		return this;

// 	},
// 	reverseChain() {
// 		this.chain.reverse();
// 		return this;

// 	},
// 	finishChain() {
// 		result = '';
// 		for (let i = 0; i < this.chain.length; i++) {
// 			result +=`( ${this.chain[i]} )` 
// 			if(i != this.chain.length-1){
// 				result += '~~';
// 			}
// 		}
// 		return result;
// 	}
// };
// arr = [
// 	chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
//     chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
//     chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
//     chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
// ];
// console.log(arr[3]);

// class DepthCalculator {
// 	constructor(){
// 		this.maxLevel = 0;
// 	}
// 	checkMaxLevel(level){
// 		if(this.maxLevel< level){
// 			this.maxLevel = level;
// 		}
// 	}
// 	calculateDepth(arr, level) {

// 		if(arr === undefined ){
// 			return 1;
// 		}

// 		if (level === undefined) {				
// 			level = 1;
// 		}

// 		this.checkMaxLevel(level);

// 		for (let i = 0; i < arr.length; i++) {
// 			if(Array.isArray(arr[i])) {
// 				this.calculateDepth(arr[i], level+1)
// 			}
// 		}
// 		return this.maxLevel;
// 	}
// }

// let a =[
//  [1, 2, 3, [1], 4, 5, [1]],
//  [1, 2, 3, [8, [2]], 4, 5, []],
//  [1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]],
//  [1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]],
//  [[[[[[[[[[]]]]]]]]]], 
//  [1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]

// ]
// const d = new DepthCalculator();
// console.log(d.calculateDepth(a[5]))

// function repeater(str, options) {
// 	let result = '';

// 	const repeat = options.repeatTimes || 1;
// 	const sepSample = options.separator || '+';
// 	let addSamp;
// 	if(options.addition !== undefined) {
// 		addSamp = String(options.addition);
// 	}

// 	const addRep = options.additionRepeatTimes || 1;
// 	const addSepSample = options.additionSeparator || '|';

// 	let addition = '';
// 	//addSamp = addSamp.;
// 	str = str+'';
// 	if (addSamp) {
// 		for (let i = 0; i < addRep; i++) {
// 			let addSep = i != addRep - 1 ? addSepSample : '';
// 			addition += `${addSamp}${addSep}`;
// 		}
// 	}

// 	for (let i = 0; i < repeat; i++) {
// 		let sep = i != repeat - 1 ? sepSample : '';
// 		result += `${str}${addition}${sep}`;
// 	}
// 	return result;
// }
// const a = [
// 	// repeater('la', {
// 	// 	repeatTimes: 3
// 	// }),
// 	// repeater('la', {
// 	// 	repeatTimes: 3,
// 	// 	separator: 's',
// 	// 	addition: '+',
// 	// 	additionRepeatTimes: 1
// 	// }),
// 	// repeater('TESTstr', {
// 	// 	separator: 'ds',
// 	// 	addition: 'ADD!',
// 	// 	additionSeparator: ')))000'
// 	// }),
// 	repeater(true, {
// 		repeatTimes: 3,
// 		separator: '??? ',
// 		addition: false,
// 		additionRepeatTimes: 2,
// 		additionSeparator: '!!!'
// 	})
// ]
// console.log(a[0]);
function getChar(index) {
	//console.log(65+index);
	return String.fromCharCode(65 + index);
}

function getNum(alpha) {
	return alpha.charCodeAt(0) - 64;
}

function alphaShift(i, j) {
	i--;
	j--;
	let result = i + j;
	if (result >= 26) {
		result -= 26;
	}
	//console.log(getChar(result))
	return getChar(result);
}

function encryptSymbol(symbol1, symbol2) {
	return alphaShift(getNum(symbol1), getNum(symbol2));
}


let msg1 = 'Z';
let key1 = 'J'; //5
//let cipher1 = 'G' // 7

function alphaShiftReverse(keySymbol, cipherSymbol) {
	let tempResult = 0;
	let result = 0;
	for (let k = 0; k < 26; k++) {
		if (keySymbol + k + 65 <= 90) {
			tempResult = getChar(keySymbol + k);
		} else {
			tempResult = getChar(keySymbol + k - 26);
		}
		if (tempResult == getChar(cipherSymbol - 1)) {
			result = getChar(k + 1);
		}
	}
	return result;
}
console.log(alphaShiftReverse(getNum('N'), getNum('N')))

//console.log(alphaShift ( getNum(a1), getNum(a2) ) ) ;
//console.log('encrypt', encryptSymbol(msg1,key1)) ;
//console.log('decrypt', alphaShiftReverse(getNum(key1), getNum(cipher1)))
// let cipher1 = encryptSymbol(msg1, key1);
// if (alphaShiftReverse(getNum(key1), getNum(cipher1)) == msg1) {
// 	console.log('ok');
// }
// let key = 'abc'
// let j = 0;
// result = '';
// for (let i = 0; i < 'somestring'.length; i++) {
// 	result += key[j];
// 	j++;
// 	if (j >= key.length) {
// 		j = 0;
// 	}
// }
// console.log(result.length, 'somestring'.length);


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
		return getChar(result);
	}

	alphaShiftReverse(keySymbol, cipherSymbol) {
		if (keySymbol == cipherSymbol) return 'A';
		let tempResult = 0;
		let result = 0;
		for (let k = 0; k < 26; k++) {
			if (keySymbol + k + 65 <= 90) {
				tempResult = getChar(keySymbol + k);
			} else {
				tempResult = getChar(keySymbol + k - 26);
			}
			if (tempResult == getChar(cipherSymbol - 1)) {
				result = getChar(k + 1);
			}
		}
		return result;
	}

	getEncryptSymbol(msgSymbol, keySymbol) {
		return this.alphaShift(getNum(msgSymbol), getNum(keySymbol));
	}

	getDecryptSymbol(keySymbol, cipherSymbol) {
		return this.alphaShiftReverse(getNum(keySymbol), getNum(cipherSymbol));
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}
		//message = message.toUpperCase();
		let result = [];
		let j = 0;
		for (let i = 0; i < message.length; i++) {
			if ((message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) ||
				(message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122))

			{
				const cipherSymbol = this.getEncryptSymbol(
					message[i].toUpperCase(),
					key[j].toUpperCase());
				result.push(cipherSymbol)
				j++;
			} else {
				result.push(message[i]);
			}

			//j++;
			if (j >= key.length) {
				j = 0;
			}
		}
		if (this.reverse) {
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
			if (message[i].charCodeAt[0] >= 65 && message[i].charCodeAt[0] <= 90 &&
				message[i].charCodeAt[0] >= 97 && message[i].charCodeAt[0] <= 122) {
				const cipherSymbol = this.getDecryptSymbol(
					key[j].toUpperCase(),
					message[i].toUpperCase());
				result.push(cipherSymbol)
				j++;
			} else {
				result.push(message[i]);
			}

			//j++;
			if (j >= key.length) {
				j = 0;
			}
		}
		if (this.reverse) {
			return result.reverse().join('');
		}
		return result.join('');
	}
}
/*
message[i] != ' ' && message[i] != '!' &&
				message[i] != ':' && message[i] != ',' &&
				message[i] != '.' && message[i] != '(' &&
        message[i] != ')' && message[i] != '/' &&
        message[i] != '%' && message[i] != '+' && 
        message[i] != '-' && message[i] != '*' && 
        message[i] != '#'
        && isNaN(message[i]
*/
//const machine = new VigenereCipheringMachine()
// function getCommonCharacterCount(s1, s2) {
// 	if(!s1 || ! s2) return 0;
// 	let used = [];
// 	let result = 0;
// 	for (let i = 0; i < s1.length; i++) {
// 		let number = s2.indexOf(s1[i]);
// 		if( number != -1 && !used.includes(number) ) {
// 			result ++;
// 			used.push(number);
// 		}		
// 	}  
// 	return result;
// }
function getDNSStats(domains) {
	if (domains.length === 0) return {};
	let result = {};
	for (let i = 0; i < domains.length; i++) {
		let strings = domains[i].split('.');
		for (let j = strings.length - 1; j >= 0; j--) {
			let c = strings.slice(j, strings.length);
			if (c.length == 1) {
				let key = '.' + c[0];
				if (result[key] == undefined) {
					result[key] = 1;
				} else {
					result[key] += 1
				}
			} else {
				c = c.reverse().join('.');
				c = '.' + c;
				if (result[c] == undefined) {
					result[c] = 1;
				} else {
					result[c] += 1
				}
			}
		}
	}

	return result;

}

// function encodeLine(str) {
// 	const lst = str.split('');
// 	let els = []
// 	let lastEl = null;
// 	let result = '';
// 	for (let i = 0; i < lst.length; i++) {
// 		if(lastEl == null){
// 			lastEl = lst[i];
// 			els.push(lst[i]);
// 		}
// 		else if (lastEl == lst[i]){
// 			els.push(lst[i]);
// 		}
// 		else if (lastEl != lst[i]){
// 			result += `${els.length>1?els.length:''}${lastEl}`;
// 			lastEl = lst[i];
// 			els = [];
// 			els.push(lst[i]);
// 		}

// 	}
// 	result += `${els.length>1?els.length:''}${lastEl}`;
// 	return result;
// }
// function renameFiles( names ) {
// 	const repeats = {};
// 	const result = [];
// 	for (let i = 0; i < names.length; i++) {
// 		if (names[i] in repeats) {
// 			repeats[names[i]] += 1;
// 		}
// 		else{
// 			repeats[names[i]] = 0;
// 		}
// 		let counts = repeats[names[i]]>0? `(${repeats[names[i]]})` : ''; 
// 		result.push(`${names[i]}${counts}`);
// 		repeats[`${names[i]}${counts}`] = 0;
// 	}
//   return result;
// }
// function getEmailDomain( email ) {
//   let dogIndex = email.lastIndexOf('@');
//   let domain = email.slice(dogIndex, email.length);
//   return domain;
// }
// function isMAC48Address(n ) {
// 	let pairs = n.split('-');
// 	if(pairs.length !=6) return false;
// 	for(let i = 0; i < pairs.length; i++){
// 		let symbol1 = (pairs[i][0].charCodeAt(0) >= 65 && pairs[i][0].charCodeAt(0) <=70) ||
// 		(pairs[i][0].charCodeAt(0)>=48 && pairs[i][0].charCodeAt(0)<=57)
// 		if (!symbol1) return false;
// 		let symbol2 = (pairs[i][1].charCodeAt(0) >= 65 && pairs[i][1].charCodeAt(0) <=70) ||
// 		(pairs[i][1].charCodeAt(0)>=48 && pairs[i][1].charCodeAt(0)<=57)
// 		 if(!symbol2) return false;
// 	}
// 	return true;
//   }
// function getMatrixElementsSum(matrix) {
// 	let colPass = [];
// 	let result = 0;
// 	for (let i = 0; i < matrix.length; i++) {
// 		for (let j = 0; j < matrix[i].length;j++) {
// 			if (matrix[i][j] == 0 || colPass.includes(j) ) {
// 				if(!colPass.includes(j)){
// 					colPass.push(j);
// 				}
// 				continue;
// 			}
// 			result += matrix[i][j];

// 		}

// 	}
// 	return result;
// }

function minesweeper(matrix) {
	result = [];
	for (let i = 0; i < matrix.length; i++) {
		result.push(matrix[i].slice());
		for (let j = 0; j < matrix[i].length; j++) {
			let mines = 0;
			result[i][j] = 0;
			for (let z = -1; z < 2; z++) {
				for (let k = -1; k < 2; k++){
					if(z==0 && k==0) continue;
					if(i+z<0 || i+z>=matrix.length) continue;
					if(j+k<0 || j+k>=matrix[i].length) continue;   //matrix[i][j].length) continue;
					console.log(i+z,j+k);
					if(matrix[i+z][j+k] == true){
						result[i][j] += 1;
					}

				}
				
			}
		}
		
	}
	return result;
}
tests = [
	minesweeper([
		[true, false, false],
		[false, true, false],
		[false, false, false],
	]),
	minesweeper([
        [false, false, false],
        [false, false, false],
      ]),
]
console.log(tests);