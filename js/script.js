// Sum of Digits / Digital Root (6 kyu)

/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n.If that value has more than one digit, 
continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer. */

function digitalRoot(n) {
	const str = n.toString();

	const array = str.split('').map((item => parseInt(item, 10))).reduce((accum, item) => accum + item, 0);

	if (array.toString().length === 1) {
		return array;
	} else {
		return digitalRoot(array);
	}
}

console.log(digitalRoot(16));//7
console.log(digitalRoot(456));//6


// Count characters in your string (6 kyu)

/* The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count(string) {
	const obj = {};
	if (string.length === 0) {
		return obj;
	} else {
		const array = string
			.split('')
			.map(item => obj[item] = obj[item] + 1 || 1);

		return obj;
	}
}

console.log(count('aba'));
console.log(count(''));

// Split Strings (6 kyu)

/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_').
*/

function solution(str) {
	const array = str.split('');
	const newArray = [];

	if (str.length === 0) {
		return [];
	} else {

		for (let i = 0; i < array.length; i += 2) {
			if (i === array.length - 1) {
				newArray.push(array[i] + '_');
			} else {
				newArray.push(array[i] + array[i + 1]);
			}
		}
		return newArray;
	}
}

console.log(solution('abcdef'));
console.log(solution('abcdefg'));
console.log(solution(''));

// Bit Counting (6 kyu)

/*
Write a function that takes an integer as input,
and returns the number of bits that are equal to one in the binary representation of that number.
ou can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

let countBits = function (n) {
	let count = 0;
	n.toString(2)
		.split('')
		.forEach(item => {
			if (item === '1') {
				count++;
			}
		});
	return count;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));

// WeIrD StRiNg CaSe (6 kuy)

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
and returns the same string with all even indexed characters in each word upper cased,
and all odd indexed characters in each word lower cased.
The indexing just explained is zero based, so the zero-ith index is even,
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
*/

function toWeirdCase(string) {
	return string
		.split(' ')
		.map(item => item
			.split('')
			.map((item, index) => {
				return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
			})
			.join(''))
		.join(' ');
}

console.log(toWeirdCase('This'));
console.log(toWeirdCase('is'));
console.log(toWeirdCase('This is a test'));

// Does my number look big in this? (6 kyu)

/*
A Narcissistic Number is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base.
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
*/

function narcissistic(value) {
	const exponent = value.toString().length;
	const newValue = value.toString()
		.split('')
		.reduce((accum, item) => accum + Math.pow(item, exponent), 0);
	return value === newValue;
}

console.log(narcissistic(7));
console.log(narcissistic(371));
console.log(narcissistic(1652));

// Encrypt this! (6 kyu)

/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
*/

let encryptThis = function (text) {
	return text.split(' ')
		.map(item => {
			if (item.length === 1) {
				return item.charCodeAt().toString();
			} else if (item.length === 2) {
				return item.charCodeAt() + item[1];
			} else {
				return item.charCodeAt() + item[item.length - 1] + item.substring(2, item.length - 1) + item[1];
			}
		})
		.join(' ');

};

console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));
console.log(encryptThis("The more he saw the less he spoke"));
console.log(encryptThis("The less he spoke the more he heard"));
console.log(encryptThis("Why can we not all be like that wise old bird"));
console.log(encryptThis("Thank you Piotr for all your help"));

// Square Every Digit (7 kyu)

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {

	return parseInt(num.toString().split('').map((item) => item * item).join(''), 10);

}

console.log(squareDigits(3212));//9414
console.log(squareDigits(2112));//4114
console.log(squareDigits(0));//0

// Get the integers between two numbers (7 kyu)

/*
Build a function that can get all the integers between two given numbers.
Example: (2,9)

Should give you this output back: [ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.
*/

function range(startNum, endNum) {
	const array = [];

	if (startNum === endNum) {
		return array;
	}
	for (let i = ++startNum; i < endNum; i++) {
		array.push(i);
	}
	return array;

}

console.log(range(2, 9));
console.log(range(6, 8));
console.log(range(2, 2));

// Convert an array of strings to array of numbers (7 kyu)

/*
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers
represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

function toNumberArray(stringarray) {
	return stringarray.map(item => parseFloat(item));
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));

// Factorial (7kyu)

// Your task is to write function factorial.

function factorial(n) {

	return n === 0 || n === 1 ? 1 : n * factorial(n - 1);

}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(17));
console.log(factorial(18));

// JavaScript Array Filter (7 kyu)

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6).
Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(numbersArray) {

	return numbersArray.filter(item => item % 2 === 0);

}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
console.log(getEvenNumbers([1, 2]));
console.log(getEvenNumbers([12, 14, 15]));
console.log(getEvenNumbers([13, 15]));
console.log(getEvenNumbers([1, 3, 9]));

// Descending Order (7 kyu)

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {

	return parseFloat(n.toString().split('').map(Number).sort((a, b) => b - a).join(''));

}



console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
console.log(descendingOrder(865974));

// Simple Pig Latin (5 kyu)

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {

	return str
		.split(' ')
		.map(item => {
			return item === '!' || item === '?' ? item : item.substring(1) + item[0] + 'ay';
		})
		.join(' ');

}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));

// Sum of two lowest positive integers (7 kyu)

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
	const sortArray = numbers.sort((a, b) => a - b);
	return sortArray[0] + sortArray[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

// Categorize New Member (7 kyu)

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
They would like your help with an application form that will tell prospective
members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member.
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating
whether the respective member is to be placed in the senior or open category.
*/

function openOrSenior(data) {
	const array = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i][0] < 55 || data[i][1] < 8) {
			array.push('Open');
		} else {
			array.push('Senior');
		}
	}
	return array;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]));
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));

// RGB To Hex Conversion (5 kyu)

/*
The rgb function is incomplete.
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255.
Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

function rgb(r, g, b) {

	function conversionColor(value) {
		if (value >= 255) {
			return 'FF';
		}
		if (value <= 0) {
			return '00';
		}
		return value > 15 ? value.toString(16).toUpperCase() : '0' + value.toString(16).toUpperCase();

	}

	return conversionColor(r) + conversionColor(g) + conversionColor(b);
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));

// Persistent Bugger (6kyu)

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
	let count = 0;

	function recursivePersistence(numPers) {
		if (numPers.toString().length === 1) {
			return count;
		} else {
			count++;
			const number = numPers
				.toString()
				.split('')
				.reduce((accum, item) => accum.toString(10) * item.toString(10));
			if (number.toString().length === 1) {
				return count;
			} else {
				return recursivePersistence(number);
			}
		}
	}

	return recursivePersistence(num);
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));

// Shortest Word (7 kyu)

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {

	const array = s.split(' ').map(item => item.length);

	return Math.min(...array);

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findShort("Let's travel abroad shall we"));