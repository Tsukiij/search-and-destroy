"use strict";

//Complete this algo
// const isLoop = linkedlist => {
//   let i = 1;
//   let cache = [];
//   while (linkedlist.getNthNode(i).next) {
//     if (cache.includes(linkedlist.getNthNode(i).value)) return true;
//     cache.push(linkedlist.getNthNode(i).value);
//     i++;
//   }
//   return false;
// };

const isLoop = linkedlist => {
  let i = 1;
  let cache = {};
  while (linkedlist.getNthNode(i).next) {
    
    if (cacheArr.includes(i)) {
      return true;
    // } else {
    cache[i] = linkedlist.getNthNode(i).value;
    console.log(cache);
    i++;
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
