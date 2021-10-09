/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	backtracking(board);
	return board;

	function backtracking(board) {
		for (let i = 0; i < board.length; i++) {  // 遍历行
			for (let j = 0; j < board[0].length; j++) { // 遍历列
				if (board[i][j] != '.') continue;   // 当前位置有数字
				for (let k = 1; k <= 9; k++) {  // (i, j) 放在这个位置是否合适
					if (isValid(i, j, `${k}`, board)) {
						board[i][j] = `${k}`;   // 放置 k
						if (backtracking(board)) return true;
						board[i][j] = '.';
					}
				}
				return false;   // 9 个数都试完了，都不行就返回 false
			}
		}
		return true;    // 遍历完没有返回false，说明找到了合适棋盘位置了
	}
	function isValid(row, col, val, board) {
		for (let i = 0; i < 9; i++) {    // 判断行是否重复
			if (board[row][i] === val) return false;
		}
		for (let j = 0; j < 9; j++) {  // 判断列是否重复
			if (board[j][col] === val) return false;
		}

		let startRow = Math.floor(row / 3) * 3
		let startCol = Math.floor(col / 3) * 3

		for (let i = startRow; i < startRow + 3; i++) {
			for (let j = startCol; j < startCol + 3; j++) {
				if (board[i][j] === val) {
					return false
				}
			}
		}

		return true
	}
};
let board = [
	['8', '.', '.', '.', '.', '5', '2', '.', '.'],
	['.', '.', '.', '.', '6', '.', '.', '3', '.'],
	['9', '.', '.', '.', '.', '.', '5', '.', '.'],
	['.', '7', '3', '.', '.', '.', '.', '6', '.'],
	['.', '.', '.', '.', '2', '8', '.', '.', '5'],
	['.', '5', '.', '6', '.', '.', '.', '.', '.'],
	['.', '2', '.', '.', '.', '.', '.', '.', '9'],
	['4', '.', '.', '.', '.', '.', '.', '.', '8'],
	['.', '.', '6', '7', '3', '.', '.', '2', '.']
]
console.log(solveSudoku(board));