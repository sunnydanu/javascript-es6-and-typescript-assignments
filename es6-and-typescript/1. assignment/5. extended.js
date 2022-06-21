// 1. add()

const add = (a = 5, b = 5) => a + b;
console.log("case a: default param.  ", add());

const userFriends = (username, ...friendList) => [username, ...friendList];
console.log(
  "case b: userFriends.   ",
  ...userFriends("sheldon", ["rajesh", "penny"])
);

const printCapitalNames = (p1, p2, p3) => [
  p1.toUpperCase(),
  p2.toUpperCase(),
  p3.toUpperCase(),
];

const args = ["Tony Stark", "steve roger", "banner"];
console.log("case c: printCapitalNames.   ", printCapitalNames(...args));
