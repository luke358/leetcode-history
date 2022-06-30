/*
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

输入：ransomNote = "a", magazine = "b"
输出：false

输入：ransomNote = "aa", magazine = "ab"
输出：false

输入：ransomNote = "aa", magazine = "aab"
输出：true
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  let map = new Map();
  for(let c of magazine) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for(let c of ransomNote) {
    let n = map.get(c);
    if(!n || n <= 0) return false;
    map.set(c, n - 1);
  }
  return true;
};