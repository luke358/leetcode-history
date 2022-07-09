/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function (board) {
  var dfs = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== '.') continue;
        for (let val = 1; val <= 9; val++) {
          if (isValid(i, j, `${val}`, board)) {
            board[i][j] = `${val}`;
            if (dfs()) return true;
            board[i][j] = `.`;
          }
        }
        return false
      }
    }
    return true;
  }
  dfs();

  function isValid(row, col, val, board) {
    const len = board.length;
    // 行
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val) return false;
    }

    // 列
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val) return false;
    }

    // 九宫格  向下取整
    // 0 / 3 = 0
    // 2 / 3 = 0
    // 3 / 3 = 1
    // 5 / 3 = 1
    // 6 / 3 = 2
    // 8 / 3 = 2
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) return false;
      }
    }
    return true;
  }
};