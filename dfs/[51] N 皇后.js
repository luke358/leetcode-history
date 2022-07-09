/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function (n) {
  let result = [];
  var dfs = (row, chessBoard) => {
    if (row === n) {
      result.push(transformChessBoard(chessBoard))
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = 'Q'
        dfs(row + 1, chessBoard)
        chessBoard[row][col] = '.'
      }
    }
  }
  let res = Array(n).fill().map(_ => Array(n).fill('.'));

  dfs(0, res);
  return result;
};

function isValid(row, col, chessBoard, n) {
  for (let i = 0; i < row; i++) {
    if (chessBoard[i][col] === 'Q') return false;
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chessBoard[i][j] === 'Q') return false;
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (chessBoard[i][j] === 'Q') return false;
  }
  return true
}

function transformChessBoard(chessBoard) {
  let chessBoardBack = []
  chessBoard.forEach(row => {
    let rowStr = ''
    row.forEach(value => {
      rowStr += value
    })
    chessBoardBack.push(rowStr)
  })

  return chessBoardBack
}