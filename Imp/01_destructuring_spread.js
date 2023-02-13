//spread operator
// ye array k elements ko kholta hai
let arr = [1, 2, 3, 4];

function avg(a, b, c) {
  return (a + b + c) / 3;
}
console.log(avg(...arr));
// concat
let a = [2, 4, 6, ...arr];
console.log(a);

let a1 = [...a, ...arr];
console.log(a);
// spread operator with objects

let obj1 = {
  name: "hi",
  class: "2",
};
let obj2 = {};
obj2.name = obj1.name;
obj2.class = obj1.class;
console.log(obj2);
//or
// it can be done by spread
let obj3 = { ...obj1, name: "hello" };
console.log(obj3);

let name1 = obj1.name;
let class1 = obj1.class;

console.log(name1, class1);
// OR
let { name2, class2 } = obj3; //destructuring
console.log(name2, class2);
