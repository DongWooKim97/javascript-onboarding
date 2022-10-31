function problem7(user, friends, visitors) {

  if(!checkInputValid()) {
    return 'error'
  }
  
}

function checkInputValid() {
  if(!userLengthInRange()) return false;
  if(!friendsLengthInRange()) return false;
  if(!idLengthInRange()) return false;
  if(!visitorsLengthInRange()) return false;
  if(!userIdValueCase()) return false;
  if(!duplicateFriendship()) return false;
  return true;
}

module.exports = problem7;

console.log(
  problem7("mrko",
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"]
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]));