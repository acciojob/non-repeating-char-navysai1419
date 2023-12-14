function firstNonRepeatedChar(str) {
	function firstNonRepeatedChar(str) {
  const charCountMap = new Map();

  for (const char of str) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charCountMap.get(char) === 1) {  
      return char; 
    }
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
