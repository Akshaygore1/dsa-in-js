// Is Anagram

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

// let isAnagramOptimised = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let obj = {};
//   for (const string of s) {
//     if (obj[string]) {
//       obj[string] = obj[string] + 1;
//     } else {
//       obj[string] = 1;
//     }
//   }

//   for (const str of t) {
//     if (!obj[str]) {
//       return false;
//     }
//     obj[str]--;
//   }

//   return true;
// };
let isAnagramOptimised = function (s, t) {
  const str = s.split("").sort().join("");
  const str1 = t.split("").sort().join("");

  return str === str1;
};

console.log(isAnagramOptimised("racecar", "carrace"));
console.log(isAnagramOptimised("jar", "jam"));
