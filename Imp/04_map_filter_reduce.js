//Map
let a = [1, 2, 3, 4, 5];

let a2 = a.map((value) => {
  return value + 4;
});
console.log(a, a2);
//Filter

let a3 = a.filter((value) => {
  return value > 3;
});
console.log(a, a3);
//Reduce

let a4 = a.reduce((val1, val2) => {
  return val1 + val2;
});
console.log(a4);
