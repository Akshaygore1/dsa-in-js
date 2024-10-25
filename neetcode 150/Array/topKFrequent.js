// Top K Elements in List

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

function topKFrequent(nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map((item) => item[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 3));
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 1));
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 4));
console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 6, 6, 7, 7], 5));
