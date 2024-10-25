// Contains Duplicate

function isContainsDuplicates(nums) {
  // const numSet = new Set();
  // for (const num of nums) {
  //   if (numSet.has(num)) {
  //     return true;
  //   }
  //   numSet.add(num);
  // }

  // return false;
  const numSet = {};
  for (let num of nums) {
    if (numSet[num]) {
      return true;
    }
    numSet[num] = num;
  }
  return false;
}

console.log(isContainsDuplicates([1, 2, 3, 4, 4, 5, 5, 6]));
console.log(isContainsDuplicates([1, 2, 3, 4]));
