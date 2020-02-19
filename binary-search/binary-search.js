"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length < 1) return false;
  if (array.length === 1) return array[0] === target;
  let mid = Math.floor(array.length / 2);
  if (target < array[mid]) {
    return binarySearch(array.slice(0, mid), target);
  } else {
    if (array[mid] === target) return true;
    return binarySearch(array.slice(mid), target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
