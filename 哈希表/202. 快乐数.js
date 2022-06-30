/*
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
*/
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let set = new Set();
  // var getHappy = function(n) {
  //   if(n === 1) {
  //     console.log('tttttt', n)
  //     return true;
  //   };
  //   if(set.has(n)) return false;
  //   set.add(n)
  //   const t = String(n).split('').reduce((acc, cur) => {
  //     return acc + cur * cur
  //   }, 0)
  //   getHappy(t)
  // }
  // return getHappy(n)

  while(true) {
    if(n === 1) return true;
    if(set.has(n)) return false;
    set.add(n)
    n = String(n).split('').reduce((acc, cur) => {
      return acc + cur * cur
    }, 0)
  }
};

console.log(isHappy(19))