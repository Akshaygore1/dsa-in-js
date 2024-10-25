// Two Integer Sum
// Solved
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

function twoSum(arr, target) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const diff = target - element;
    if (seen[diff]) {
      return [seen[diff], i];
    }
    seen[i] = element;
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 7));
