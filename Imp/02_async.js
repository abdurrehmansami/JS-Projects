console.log("before");

setTimeout(() => {
  console.log("timeout");
}, 1000);
console.log("after");
//js is asynchronous //next line can execute before the previous
//async await se asynchronous js ko synchronous js bna skte hain
