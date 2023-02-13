// let fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });
// console.log("hi");

// WITH PROMISE
//PROMISE CODE KO READABLE BNATE HAIN
// PROMISES SE CALLBACK K ANDR CALLBACK NH DALNA PARHTA

// let fs = require("fs/promises");
// let a = fs.readFile("file.txt", "utf-8");
// a.then((data) => {
//   console.log(data);
// });
// console.log("hi");

//asynch ka mtlb he k fn bg me cglega lkn await ko follow krega
//await sequence se chlayga
// asynch await non blocking ko blocking bnayga
let fs = require("fs/promises");
const readThree = async (file1, file2) => {
  let a1 = fs.readFile(file1, "utf-8");
  let a2 = fs.readFile(file2, "utf-8");
  let c2 = await a2;
  console.log(c2);
  let c1 = await a1;
  console.log(c1);
};
readThree("file1.txt", "file2.txt");
