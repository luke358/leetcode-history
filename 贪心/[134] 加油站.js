/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function (gas, cost) {
  const gasLen = gas.length
  let start = 0
  let curSum = 0
  let totalSum = 0

  for (let i = 0; i < gasLen; i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    if (curSum < 0) {
      curSum = 0
      start = i + 1
    }
  }

  if (totalSum < 0) return -1

  return start
};