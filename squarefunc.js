function reverseNumber(num) {
    // Convert the number to a string
    let str = num.toString();
  
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
  
    // Convert the reversed string back to a number
    let reversedNum = parseFloat(reversedStr) * Math.sign(num);
  
    return reversedNum;
  }
  
  // Example usage:
  console.log(reverseNumber(12345));    // Output: 54321
  console.log(reverseNumber(-6789));    // Output: -9876
  console.log(reverseNumber(1200));     // Output: 21
  console.log(reverseNumber(-4500));    // Output: -54
  