// Anagram Groups
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

function groupAnagram(arr) {
  const group = {};
  for (const str of arr) {
    const sortedKey = str.split("").sort().join("");
    console.log(sortedKey);
    if (group[sortedKey]) {
      group[sortedKey].push(str);
    } else {
      group[sortedKey] = [str];
    }
  }
  return Object.values(group);
}

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));
