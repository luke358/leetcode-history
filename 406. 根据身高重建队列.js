const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];

var reconstructQueue = function (people) {
	// 先排序， 身高搞得在前面， 如果一样 k小的在前面
	people.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1] > b[1]
		}
		return a[0] < b[0]
	})
	let que = []
	for (let i = 0; i < people.length; i++) {
		const position = people[i][1];
		que.splice(position, 0, people[i])
	}
	return que
};

console.log(reconstructQueue(people));