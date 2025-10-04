function indexOfIgnoreCase(str, subStr) {
  // Edge case: if subStr is empty, return 0 (like normal indexOf behavior)
  if (subStr.length === 0) return 0;

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find first occurrence
  return lowerStr.indexOf(lowerSubStr);
}

// ✅ Test cases
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // 2
console.log(indexOfIgnoreCase("test", "aaa"));          // -1
console.log(indexOfIgnoreCase("JavaScript", "SCRIPT")); // 4
console.log(indexOfIgnoreCase("", ""));                 // 0
console.log(indexOfIgnoreCase("abc", ""));              // 0

