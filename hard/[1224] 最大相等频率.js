/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  let count = new Map()
  let freq = new Map()
  let res = 0, maxFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 0);
    }

    if (count.get(nums[i] > 0)) {
      freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) - 1)
    }

    count.set(nums[i], count.get(nums[i]) + 1)
    maxFreq = Math.max(maxFreq, count.get(nums[i]))

    if (!freq.has(count.get(nums[i]))) {
      freq.set(count.get(nums[i]), 0)
    }
    freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) + 1)

    const ok = maxFreq === 1 ||
      freq.get(maxFreq) * maxFreq + freq.get(maxFreq - 1) * (maxFreq - 1) === i + 1 && freq.get(maxFreq) === 1 ||
      freq.get(maxFreq) * maxFreq + 1 === i + 1 && freq.get(1) === 1

    if (ok) {
      res = Math.max(res, i + 1)
    }
  }
  return res
};

var maxEqualFreq = function (nums) {
  let count = new Map()
  let freq = new Map()
  let res = 0, maxFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 0);
    }
    // nums[i]出现次数改变 +1，当前的减少
    if (count.get(nums[i]) > 0) {
      freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) - 1);
    }

    count.set(nums[i], count.get(nums[i]) + 1);

    maxFreq = Math.max(maxFreq, count.get(nums[i]));
    if (!freq.has(count.get(nums[i]))) {
      freq.set(count.get(nums[i]), 0);
    }
    freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) + 1);

    const ok = maxFreq === 1 ||
      // 出现次数全为为 maxFreq 或者 maxFreq 且 maxFreq 只存在一个数，把这个数去掉一次
      freq.get(maxFreq) * maxFreq + freq.get(maxFreq - 1) * (maxFreq - 1) === i + 1 && freq.get(maxFreq) === 1 ||
      // 全为 maxFreq，只有一个数出现的次数为 1 ，把这个数删掉就可以
      freq.get(maxFreq) * maxFreq + 1 === i + 1 && freq.get(1) === 1
    if (ok) {
      res = Math.max(res, i + 1)
    }
  }
  return res
};