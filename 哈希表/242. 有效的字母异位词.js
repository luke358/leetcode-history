/*
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

输入: s = "anagram", t = "nagaram"
输出: true

输入: s = "rat", t = "car"
输出: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  for (let c of t) {
    let count = map.get(c)
    if (!count || count <= 0) return false
    map.set(c, count - 1)
  }
  return true

  // if (s.length !== t.length) return false;
  // const resSet = new Array(26).fill(0);
  // const base = "a".charCodeAt();
  // for (const i of s) {
  //   resSet[i.charCodeAt() - base]++;
  // }
  // for (const i of t) {
  //   if (!resSet[i.charCodeAt() - base]) return false;
  //   resSet[i.charCodeAt() - base]--;
  // }
  // return true;
};