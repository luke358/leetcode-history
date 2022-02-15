
var DetectSquares = function() {
    this.cnt = new Map();
};

DetectSquares.prototype.add = function(point) {
    const x = point[0], y = point[1];
    // y 不存在则初始化
    if (!this.cnt.has(y)) {
        this.cnt.set(y, new Map());
    }
    // 取出 y 坐标对应的 哈希表
    const yCnt = this.cnt.get(y);
    // y 坐标对应的 x 数量
    /**
     * 例: 
     *  (2,1)
     *  (3,1)
     *  (3,1)
     * 结构为：
     *  (y:1, hash[{ x:2, 数量: 1 }, { x:3, 数量： 2 }])
     */
    yCnt.set(x, (yCnt.get(x) || 0) + 1);
};

DetectSquares.prototype.count = function(point) {
    let res = 0;
    let x = point[0], y = point[1];
    // 正方形在垂直方向上一定有另外一个坐标，如果没有肯定找不到满足条件的正方形
    if (!this.cnt.has(y)) {
        return 0;
    }
    // 把 y 的取出来
    const yCnt = this.cnt.get(y);
    const entries = this.cnt.entries();
    /**
     * x:11, y:10
     * 10, 3->1
     * d=0
     * 2, 11->1, 3->1
     * d:-8
     */
    for (const [col, colCnt] of entries) {
        // col代表的是y轴，找一个和当前输入的 y 不相同的点
        if (col !== y) {
            // 根据对称性，这里可以不用取绝对值
            let d = col - y;
            /**
             * colCnt.get(x) 不同 y 不同 x， 对角点
             * yCnt.get(x+d) 相同 y 不同 x, 平行点
             * colCnt.get(x+d) 不同 y 相同 x， 垂直点
             * 三点存在，根据数量进行排列组合，相乘得出答案
             */
            res += (colCnt.get(x) || 0) * (yCnt.get(x + d) || 0) * (colCnt.get(x + d) || 0);
            res += (colCnt.get(x) || 0) * (yCnt.get(x - d) || 0) * (colCnt.get(x - d) || 0);
        }
    }
    return res;
};

// 测试：
let condition = ["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
let data = [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]

var obj = new DetectSquares()
let res = [null]

for(let key in condition) {
    switch(condition[key]) {
        case 'add':
            obj.add(data[key][0])
            res.push(null)
            break;
        case 'count':
            res.push(obj.count(data[key][0]))
            break;
    }
}
console.log(res);
