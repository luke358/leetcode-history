/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let result = ['JFK']
  let map = {}
  for (const ticket of tickets) {
    const [from, to] = ticket;
    if (!map[from]) map[from] = [];
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }

  function dfs() {
    if (result.length === tickets.length + 1) return true;
    if (result.length === tickets.length + 1) {
      return true
    }
    if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) return false;
    for (let i = 0; i < map[result[result.length - 1]].length; i++) {
      let city = map[result[result.length - 1]][i]
      map[result[result.length - 1]].splice(i, 1)
      result.push(city)
      if (dfs()) return true
      result.pop()
      map[result[result.length - 1]].splice(i, 0, city)
    }
  }
  dfs()
  return result
};