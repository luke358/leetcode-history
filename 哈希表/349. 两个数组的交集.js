/*
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
   let set1 = new Set(nums1);
   let set2 = new Set(nums2);

    let arr = [];
    set1.forEach(function(num) {
      if(set2.has(num)) arr.push(num)
    })
    return arr;
};