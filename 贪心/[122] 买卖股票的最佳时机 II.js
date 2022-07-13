/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
  let result = 0
  for (let i = 1; i < prices.length; i++) {
    result += Math.max(prices[i] - prices[i - 1], 0)
  }
  return result
};