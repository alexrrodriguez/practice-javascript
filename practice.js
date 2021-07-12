// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();

// Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// Write a method that prints out every number from 1 to 100.

// function print() {
//   var num = 1;
//   while (num < 101) {
//     console.log(num);
//     num += 1;
//   }
// }
// print();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function print() {
//   var num = 1;
//   while (num < 100) {
//     console.log(num);
//     num += 2;
//   }
// }
// print();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function numberOf55(number) {
//   var count = 0;
//   number.forEach(function (num) {
//     if (num === 55) {
//       count += 1;
//     }
//   });
//   console.log(count);
// }
// numberOf55([1, 55, 23, 31, 55, 1002, 55, 2]);

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function sauce(array) {
//   var newArray = [];
//   var index = 0;
//   while (index < array.length) {
//     newArray.push(array[index]);
//     newArray.push("awesomesauce");
//     index += 1;
//   }
//   console.log(newArray);
// }
// sauce(["dog", "cat", "mouse", "lion"]);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// var items_amounts = { chair: 5, table: 2 };
// items_amounts["chair"] = 3;

// console.log(items_amounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}

// var items_amounts = { chair: 5, table: 2 };
// items_amounts["desk"] = 7;
// console.log(items_amounts);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function fact(num) {
//   var product = 1;
//   while (num > 0) {
//     product *= num;
//     num -= 1;
//   }
//   console.log(product);
// }
// fact(5);

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index = index + 1;
//   });
//   console.log(result);
// }
// selectEvenItems(["a", "b", "c", "d", "e", "f"]);

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function (number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   console.log(currentMax);
// }

// max([5, 4, 8, 1, 2]);

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var result = number;
//   while (number > 1) {
//     number -= 1;
//     result = result * number;
//   }
//   console.log(result);
// }

// factorial(5);

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// function descending(numbers) {
//   var newArray = [];
//   var length = numbers.length;
//   for (var i = 0; i < length; i++) {
//     newArray.push(numbers.pop());
//   }
//   console.log(newArray);
// }

// descending([1, 3, 5, 7]);

// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function sum_combos(num1, num2) {
//   var result = [];
//   num1.forEach(function (number1) {
//     num2.forEach(function (number2) {
//       result.push(number1 + number2);
//     });
//   });
//   console.log(result);
// }

// sum_combos([1, 5, 10], [100, 500, 1000]);

// # Write a function that takes in an array of numbers and returns its sum.

// function sum(num) {
//   var sum = 0;
//   num.forEach(function (number) {
//     sum += number;
//   });
//   console.log(sum);
// }
// sum([1, 2, 3, 4, 5]);

// # Write a function that takes in an array of strings and returns the smallest string.

// function smallest(array) {
//   var small = array[0];
//   var i = 0;
//   while (i < array.length) {
//     if (small.length > array[i].length) {
//       small = array[i];
//     }
//     i += 1;
//   }
//   console.log(small);
// }

// smallest(["cat", "bird", "llama", "horse"]);

// Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// function rev(array) {
//   var newArray = [];
//   var i = 0;
//   while (i < array.length) {
//     newArray.push(array.pop());
//   }
//   i += 1;
//   console.log(newArray);
// }
// rev([5, 9, 8, 3, 2]);

// # Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// function aWords(array) {
//   var i = 0;
//   var count = 0;
//   while (i < array.length) {
//     if (array[i][0] === "a") {
//       count += 1;
//     }
//     i += 1;
//   }
//   console.log(count);
// }

// aWords(["alligator", "dog", "fox", "armadillo"]);

// Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// function combine(array) {
//   var i = 0;
//   var str = "";
//   while (i < array.length - 1) {
//     str += array[i] + ",";
//     i += 1;
//   }
//   str += array[array.length - 1];
//   console.log(str);
// }

// combine(["cat", "dog", "snake", "mouse"]);

// # Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

function product(array) {
  var pro = 1;
  var i = 0;
  while (i < array.length) {
    pro = pro * array[i];
    i += 1;
  }
  console.log(pro);
}

product([2, 3, 4, 5]);

// Write a function that takes in an array of numbers and returns the two smallest numbers.
