function createPhoneNumber(numbers) {
  if (numbers.length !== 10 || !numbers.every(num => Number.isInteger(num))) {
    return "Invalid input. Please provide an array of exactly 10 integers.";
  }

  const areaCode = numbers.slice(0, 3).join('');
  const firstPart = numbers.slice(3, 6).join('');
  const secondPart = numbers.slice(6).join('');

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

const phoneNumberArray = [0, 8, 1, 9, 9, 9, 3, 0, 0, 0];
const phoneNumberString = createPhoneNumber(phoneNumberArray);
console.log(phoneNumberString); // Output: (081) 999-3000
