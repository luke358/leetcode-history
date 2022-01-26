/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 一次只能购买一个
 */
var maxProfit = function (prices, fee) {
	let res = 0;
	let minPrice = prices[0];
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i]
		}

		if (prices[i] > minPrice + fee) {
			res += prices[i] - minPrice - fee;
			// 这个时候后面可能比当前利润大，所以扣掉手续费
			minPrice = prices[i] - fee;
		}
	}
	return res;
};