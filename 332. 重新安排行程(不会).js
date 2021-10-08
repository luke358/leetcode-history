// 等我会了再来战斗
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
	let result = ['JFK']
	let map = {}
	for (const ticket of tickets) {
		const [from, to] = ticket;
		if (!map[from]) {
			map[from] = []
		}
		map[from].push(to);
	}
	for (let city in map) {
		map[city].sort();
	}
	function backtracking() {
		if (result.length === tickets.length + 1) {
			return true
		}
		if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
			return false
		}
		for (let i = 0; i < map[result[result.length - 1]].length; i++) {
			let city = map[result[result.length - 1]][i]
			// 删除走过的航线
			map[result[result.length - 1]].splice(i, 1)
			result.push(city)
			if (backtracking()) {
				return true;
			}
			result.pop()
			map[result[result.length - 1]].splice(i, 0, city);
		}
	}
	backtracking();
	return result;
};