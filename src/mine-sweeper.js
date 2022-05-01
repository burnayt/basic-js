const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
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

module.exports = {
  minesweeper
};
