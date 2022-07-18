/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;

  for(let i = 0; i < bills.length; i++) {
    if(bills[i] === 5) {
      five++;
    }
    if(bills[i] === 10) {
      five -= 1;
      ten += 1;
      if(five < 0) return false;
    }
    if(bills[i] === 20) {
      if(ten > 0) {
        ten-=1;
        five -=1
      } else {
        five -=3
      }
      if(five < 0) return false;
    }
  }
  return true;
};