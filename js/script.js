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

// Your order, please (6 kyu)

/*
Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
	return words
		.split(' ')
		.sort(function (first, second) {
			return first.match(/\d/) - second.match(/\d/);
		})
		.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));

// Credit Card Mask (7kyu)

/*
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder,
you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify,
which changes all but the last four characters into '#'.
*/

function maskify(cc) {
	if (cc.length < 5) {
		return cc;
	}

	const newArray = [];
	for (let i = 0; i < cc.length - 4; i++) {
		newArray.push('#');
	}

	const subString = cc.substring(cc.length - 4).split('');
	return newArray.concat(subString).join('');

}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));

// The Hashtag Generator (5 kyu)

/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {

	if (str.trim() === '') {
		return false;
	}

	const newStr = str
		.split(' ')
		.reduce((accum, item) => {
			if (item.trim() === '') {
				return accum + '';
			} else {
				return accum + item[0].toUpperCase() + item.slice(1);
			}
		}, '#');

	if (newStr.length > 140) {
		return false;
	}

	return newStr;
}

console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("a".repeat(139)));
console.log(generateHashtag("a".repeat(140)));

// Number of Decimal Digits (7 kyu)

/*
Determine the total number of digits in the integer (n>=0) given as input to the function.
For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.
Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

function digits(n) {
	return n.toString().length;
}

console.log(digits(5));
console.log(digits(12345));
console.log(digits(9876543210));

// Is a number prime? (6 kyu)

/* 
Define a function that takes one integer argument
and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number
greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive.
You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required,
but still the most trivial solutions might time out.
Numbers go up to 2^31 (or similar, depends on language version).
Looping all the way up to n, or n/2, will be too slow.
*/

function isPrime(num) {
	if (num < 2) {
		return false;
	}
	if (num % 2 == 0) {
		return (num === 2);
	}
	if (num % 3 == 0) {
		return (num == 3);
	}
	let m = Math.sqrt(num);
	for (let i = 5; i <= m; i += 6) {
		if (num % i == 0) {
			return false;
		}
		if (num % (i + 2) == 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(75));
console.log(isPrime(-1));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(41));
console.log(isPrime(5099));
console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(45));
console.log(isPrime(-5));
console.log(isPrime(-8));
console.log(isPrime(-41));

// IP Validation (6 kyu)

/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
Ps should be considered valid if they consist of four octets,
with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

function isValidIP(str) {
	let array = str.split('.');
	if (str === '0.0.0.0') {
		return true;
	}
	if (array.length !== 4) {
		return false;
	} else {
		for (var i = 0; i < array.length; i++) {
			if (isNaN(Number(array[i]))) {
				return false;
			}
			if (Number(array[i]).toString(10) > 255 || Number(array[i]).toString(10) < 0) {
				return false;
			}
			const newArray = array[i].split('');
			if (newArray[0] === '0' && newArray.length !== 0) {
				return false;
			}
			if (array[i].length > 3 || array[i].length === 0) {
				return false;
			}
			if (newArray[0] === '\n' || newArray[1] === '\n' || newArray[2] === '\n') {
				return false;
			}
			if (newArray[0] === ' ' || newArray[1] === ' ' || newArray[2] === ' ') {
				return false;
			}
			if ((/\d\D\d/gi).test(array[i])) {
				return false;
			}
		}
	}

	return true;
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("137.255.156.100"));

console.log(isValidIP(''));
console.log(isValidIP('abc.def.ghi.jkl'));
console.log(isValidIP('123.456.789.0'));
console.log(isValidIP('12.34.56'));
console.log(isValidIP('01.02.03.04'));
console.log(isValidIP('256.1.2.3'));
console.log(isValidIP('1.2.3.4.5'));
console.log(isValidIP('123,45,67,89'));
console.log(isValidIP('1e0.1e1.1e2.2e2'));
console.log(isValidIP(' 1.2.3.4'));
console.log(isValidIP('1.2.3.4 '));
console.log(isValidIP('12.34.56.-7'));
console.log(isValidIP('1.2.3.4\n'));
console.log(isValidIP('\n1.2.3.4'));

// Swap items in a dictionary (7 kyu)

/* 
In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys,
and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}

Notes:
The dictionary given will only contain strings
The dictionary given will not be empty
You do not have to sort the items in the lists
*/

function switchDict(dic) {

	const newObj = {};

	for (let key in dic) {

		if (!newObj.hasOwnProperty(dic[key])) {
			newObj[dic[key]] = [key];
		} else {
			newObj[dic[key]].push(key);
		}

	}

	return newObj;
}

console.log(switchDict({ 'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream' }));
console.log(switchDict({ 'Ice': 'Cream', 'Heavy': 'Cream', 'Light': 'Cream', 'Double': 'Cream' }));

// Ones and Zeros (7 kyu)

/* 
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = arr => {
	return parseInt(arr.join(''), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);

// getNames() (7 kyu)

/* 
The following code is not giving the expected results. Can you debug what the issue is?

The following is an example of data that would be passed in to the function.

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // should return ['Joe', 'Bill', 'Kate']
*/

function getNames(data) {
	return data.map(item => item.name);
}

console.log(getNames([
	{ name: 'Joe', age: 20 },
	{ name: 'Bill', age: 30 },
	{ name: 'Kate', age: 23 }
]));

// Sum of a Sequence [Hard-Core Version] (6 kyu)

/*
As the title suggests, this is the hard-core version of another neat kata.

The task is simple to explain: simply sum all the numbers from the first parameter
being the beginning to the second parameter being the upper limit (possibly included),
going in steps expressed by the third parameter:

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4
If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around),
just return 0. See the provided test cases for further examples :)

Note: differing from the other base kata, much larger ranges are going to be tested,
so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.
*/

function sequenceSum(begin, end, step) {
	//your code here
	let count = 0;
	if (step > 0) {
		for (let i = begin; i <= end; i += step) {
			count += i;
		}
	}

	if (step <= 0) {
		for (let i = begin; i >= end; i += step) {
			count += i;
		}
	}

	return count;
}

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
console.log(sequenceSum(-1, -5, -3), -5);
console.log(sequenceSum(16, 15, 3), 0);
console.log(sequenceSum(-24, -2, 22), -26);
console.log(sequenceSum(-2, 4, 658), -2);
console.log(sequenceSum(780, 68515438, 5), 469436517521190);
console.log(sequenceSum(9383, 71418, 2), 1253127200);
console.log(sequenceSum(20, 67338879, 5), 453452442295970);

// SumFibs (6 kyu)

/*
Create a function that takes an argument n and sums even Fibonacci
numbers up to n's index in the Fibonacci sequence.

Example:

sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number
in the sequence and doesn't have another number in the sequence to
get added to in the indexed Fibonacci sequence.
Example:

sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// 2 + 8 + 34 = 44;
*/

function sumFibs(n) {
	// you are the golden ratio.
	const array = [0, 1];
	let count = 0;

	for (let i = 0; i < n - 1; i++) {
		const number = array[i] + array[i + 1];
		array.push(number);
		if (number % 2 === 0) {
			count += number;
		}
	}

	return count;

}

console.log(sumFibs(5), 2);
console.log(sumFibs(9), 44);
console.log(sumFibs(10), 44);
console.log(sumFibs(11), 44);

// Coprime Validator (7 kyu)

/*
Write a program to determine if the two given numbers are coprime.
A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes
*/

function isCoprime(x, y) {
	const upeerValue = x > y ? x : y;
	const lowerValue = x < y ? x : y;

	if (upeerValue % lowerValue === 0) {
		return false;
	}

	const arr1 = getDeviders(upeerValue);
	const arr2 = getDeviders(lowerValue);

	const simpleMap = {};

	arr1.forEach((item) => {
		simpleMap[item] = true;
	});

	const result = arr2.reduce((acc, val) => {
		return simpleMap[val] ? ++acc : acc;
	}, 0);

	return result < 2;
}

function getDeviders(x) {
	const result = [];
	for (let i = 1; i <= x; i++) {
		if (x % i === 0) {
			result.push(i);
		}
	}

	return result;
}

console.log(isCoprime(20, 27));
console.log(isCoprime(12, 39));
console.log(isCoprime(35, 10));
console.log(isCoprime(12, 7));

// Calculate number of inversions in array (6 kyu)

/* 
Array inversion indicates how far the array is from being sorted.
Inversions are pairs of elements in array that are out of order.

Examples
[1, 2, 3, 4]  =>  0 inversions
[1, 3, 2, 4]  =>  1 inversion: 2 and 3
[4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
[4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1
Goal
The goal is to come up with a function that can calculate inversions for any arbitrary array
*/

function countInversions(array) {
	let count = 0;
	const arrayLength = array.length;

	for (let i = 0; i < arrayLength; i++) {
		for (let k = 1; k < arrayLength - i; k++) {
			if (array[i] > array[i + k]) {
				count++;
			}
		}
	}
	return count;
}

console.log(countInversions([]), 0);
console.log(countInversions([1, 2, 3]), 0);
console.log(countInversions([2, 1, 3]), 1);
console.log(countInversions([6, 5, 4, 3, 2, 1]), 15);
console.log(countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1]), 30);

// Consecutive strings (6 kyu)

/* 
You are given an array(list) strarr of strings and an integer k.
Your task is to return the first longest string consisting of k
consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
--> "abigailtheta"
*/

function longestConsec(strarr, k) {
	let result = '';

	if (strarr.length >= k && k > 0) {
		let cicleResult = '';
		for (let i = 0; i <= strarr.length - k; i++) {
			cicleResult = strarr.slice(i, i + k).join('');
			if (cicleResult.length > result.length) {
				result = cicleResult;
			}
		}
	}

	return result;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsec([], 3), "");
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2));
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0));

// Josephus Permutation (5 kyu)

/*
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 josephus(7,3) should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
For more info, browse the Josephus Permutation page on wikipedia; related kata: Josephus Survivor.

Also, live game demo by OmniZoetrope.
*/

/*
Эта проблема получила свое название от, пожалуй, самого важного события в жизни древнего историка Иосифа Флавия: согласно его рассказу, он и его 40 солдат были пойманы в пещере римлянами во время осады.

Отказавшись сдаться врагу, они вместо этого сделали выбор в пользу массового самоубийства с изюминкой: они образовали круг и продолжали убивать одного человека каждые три, пока не остался один последний человек (и предполагалось, что он должен убить себя, чтобы закончить акт). ) .

Итак, Джозефус и еще один мужчина были последними двумя, и, поскольку мы теперь знаем каждую деталь этой истории, вы, возможно, правильно догадались, что они не полностью следовали первоначальной идее.

Теперь вы должны создать функцию, которая возвращает перестановку Иосифа Флавия, принимая в качестве параметров исходный массив / список элементов, которые должны быть переставлены, как если бы они были в круге, и отсчитывали каждые k мест, пока не осталось ни одного.

Подсказки и примечания: помогает начать счет от 1 до n вместо обычного диапазона 0..n-1; k всегда будет> = 1.

Например, при n = 7 и k = 3 josephus(7,3)должно действовать именно так.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
Итак, наш окончательный результат:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
Для получения дополнительной информации просмотрите страницу перестановки Иосифа Флавия в википедии; связанное ката: Иосиф Флавий, оставшийся в живых .

А также живая демо-версия игры от OmniZoetrope .
*/

/*
function josephus(items,k){
  //your code here
}

function returnedArray(array, startposition, shift) {
  return array.filter((item, index) => {
	 if (index > startposition) {
		return true;
	 }

	 return (index % (startposition + shift) === 0);
  });
}

function changedStartArray(array, startposition, shift) {
  return array.filter((item, index) => {
	 if (index < startposition) {
		return true;
	 }

	 return (index % (startposition + shift) !== 0);
  })
}

function work(array, startposition, shift) {
  let startItems = array;
  let result = [];
  if(startposition + shift > startItems.length) {
	 return startItems;
  } else {
	 const firstPart = changedStartArray(startItems, startposition, shift);
	 const secondPart = returnedArray(startItems, startposition, shift);
	 return work([...firstPart, ...secondPart], firstPart.length, shift);
  }
}
*/

/* function josephus(items, k) {
	//your code here
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]);
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4), ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']);
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3), [3, 6, 2, 7, 5, 1, 4]);
console.log(josephus([], 3), []); */

// Bumps in the Road (7 kyu)

/* 
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle
about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy!
Given a string showing either flat road ("_") or bumps ("n"),work out if you make it home safely. 
15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/

function bump(x) {
	let count = 15;

	for (let i = 0; i < x.length; i++) {
		if (x[i] === 'n') {
			count--;
		}
	}

	if (count < 0) {
		return 'Car Dead';
	}

	return 'Woohoo!';

}

console.log(bump('n'), 'Woohoo!');
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'), 'Car Dead');
console.log(bump('______n___n_'), 'Woohoo!');

// Power of two (7 kyu)

/* 
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language)
that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer,
i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/


function isPowerOfTwo(n) {
	return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(2), true);
console.log(isPowerOfTwo(4096), true);
console.log(isPowerOfTwo(5), false);

// Reverse a Number (7 kyu)

/* 
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
*/

function reverseNumber(n) {

	function toStrings(num) {
		return n.toString().split('').reverse().join('');
	}

	if (n < 0) {
		return -parseInt(toStrings(n.toString().match(/\d/g)), 10);
	}

	return parseInt(toStrings(n), 10);

}

console.log(reverseNumber(123), 321);
console.log(reverseNumber(-123), -321, 'Negative Numbers should be preserved');
console.log(reverseNumber(1000), 1, 'Should handle numbers ending with "0"');
console.log(reverseNumber(4321234), 4321234);
console.log(reverseNumber(5), 5);
console.log(reverseNumber(0), 0);
console.log(reverseNumber(98989898), 89898989);

// Single digit (7 kyu)

/* 
The goal of this Kata is to reduce the passed integer to a single digit (if not already)
by converting the number to binary, taking the sum of the binary digits,
and if that sum is not a single digit then repeat the process.

If the passed integer is already a single digit there is no need to reduce
n will be an integer such that 0 < n < 10⁹
For example given 5665 the function should return 5:

5665 --> (binary) 1011000100001
1011000100001 --> (sum of binary digits) 5
Given 123456789 the function should return 1:

123456789 --> (binary) 111010110111100110100010101
111010110111100110100010101 --> (sum of binary digits) 16
16 --> (binary) 10000
10000 --> (sum of binary digits) 1
*/

function singleDigit(n) {
	if (n < 10) {
		return n;
	}

	const binaryNumber = n.toString(2)
		.split('')
		.reduce((acc, item) => parseInt(acc, 10) + parseInt(item, 10));

	return singleDigit(binaryNumber);
}

console.log(singleDigit(5), 5);
console.log(singleDigit(999), 8);
console.log(singleDigit(1234444123), 1);
console.log(singleDigit(443566), 2);
console.log(singleDigit(565656565), 3);
console.log(singleDigit(4868872), 8);
console.log(singleDigit(234234235), 2);
console.log(singleDigit(567448), 7);
console.log(singleDigit(1000000000), 3);

// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced? (6 kyu)

/* 
Each exclamation mark's weight is 2; each question mark's weight is 3.
Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left";
if the right side is more heavy, return "Right";
if they are balanced, return "Balance".
*/

function balance(left, right) {
	return (weightCalculation(left) > weightCalculation(right)) ? 'Left' : (weightCalculation(left) < weightCalculation(right)) ? 'Right' : 'Balance';

}

function weightCalculation(side) {
	let count = 0;
	side.split('').forEach(symbol => {

		return (symbol === '!') ? count += 2 : count += 3;

	});

	return count;
}

console.log(balance("!!", "??"), "Right");
console.log(balance("!??", "?!!"), "Left");
console.log(balance("!?!!", "?!?"), "Left");
console.log(balance("!!???!????", "??!!?!!!!!!!"), "Balance");

// Are they the "same"? (6 kyu)

/* 
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
that checks whether the two arrays have the "same" elements,
with the same multiplicities (the multiplicity of a member is the number of times it appears).
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121,
20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.

It gets obvious if we write b's elements in terms of squares:
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, Crystal, D, Dart, Elixir,
Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.
*/

function comp(array1, array2) {
	if (array1 === null || array2 === null) {
		return false;
	}
	const newArray2 = array2.map(item => Math.sqrt(item));
	const sortArray1 = array1.sort((a, b) => a - b).toString();
	const sortNewArray2 = newArray2.sort((a, b) => a - b).toString();
	return sortArray1 === sortNewArray2;
}

console.log(
	comp([121, 144, 19, 161, 19, 144, 19, 11],
		[121, 14641, 20736, 361, 25921, 361, 20736, 361])
);

console.log(
	comp([121, 144, 19, 161, 19, 144, 19, 11],
		[132, 14641, 20736, 361, 25921, 361, 20736, 361])
);

// All Star Code Challenge #15 (6 kyu)

/* 
This Kata is intended as a small challenge for my students

Your family runs a shop and have just brought a Scrolling Text Machine 
(http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg)
to help get some more business.

The scroller works by replacing the current text string with a similar text string,
but with the first letter shifted to the end; this simulates movement.

You're father is far too busy with the business to worry about such details,
so, naturally, he's making you come up with the text strings.

Create a function named rotate() that accepts a string argument and returns an array
of strings with each letter from the input string being rotated to the end.

rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
Note: The original string should be included in the output array The order matters.
Each element of the output array should be the rotated version of the previous element.
The output array SHOULD be the same length as the input string The function should
	return an emptry array with a 0 length string, '', as input
*/

function rotate(str) {
	const array = [];
	const strLength = str.length;

	if (str === '') {
		return array;
	}

	recursive(str);

	for (let i = 0; i < strLength - 1; i++) {
		recursive(array[array.length - 1]);
	}

	return array;

	function recursive(string) {
		const subStr = string.substring(1) + string[0];
		array.push(subStr);
	}
}

console.log(rotate('Hello'));
console.log(rotate('Job'));
console.log(rotate('Zhaliazniak'));
console.log(rotate(''));

// Two Oldest Ages (7 kyu)

/* 
The two oldest ages function/method needs to be completed.
It should take an array of numbers as its argument and return the two highest
numbers within the array. The returned value should be an array in the format
[second oldest age, oldest age].

The order of the numbers passed in could be any order. 
The array will always include at least 2 items. If there are two or more oldest age,
then return both of them in array format.
*/

function twoOldestAges(ages) {
	return ages.sort((a, b) => a - b).slice(-2);
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));

// Count all the sheep on farm in the heights of New Zealand (7 kyu)

/* 
Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm
(sheep returned on Friday stay and don't leave for a weekend).

Sheep return in groups each of the days -> you will be given two arrays with these numbers 
(one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

Farmer knows the total amount of sheep, this is a third parameter.
You need to return the amount of sheep lost (not returned to the farm)
after final sheep counting on Saturday.

Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

Good luck! :-)
*/

function lostSheep(friday, saturday, total) {
	return total - friday.reduce((acc, item) => acc + item, 0) - saturday.reduce((acc, item) => acc + item, 0);
}

console.log(lostSheep([1, 2], [3, 4], 15), 5);
console.log(lostSheep([3, 1, 2], [4, 5], 21), 6);
console.log(lostSheep([5, 1, 4], [5, 4], 29), 10);
console.log(lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300), 178);
console.log(lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1,], 255), 77);
console.log(lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355), 156);
console.log(lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30), 13);
console.log(lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89), 3);
console.log(lostSheep([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44), 2);
console.log(lostSheep([], [], 15), 15);

// Count the smiley faces! (6 kyu)

/* 
Given an array (arr) as an argument complete the function 
countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array).
Order of the face (eyes, nose, mouth) elements will always be the same.
*/

function countSmileys(arr) {
	return arr.filter(item => {
		switch (item) {
			case ':D':
			case ':~D':
			case ':-D':
			case ';D':
			case ';~D':
			case ';-D':
			case ':)':
			case ':~)':
			case ':-)':
			case ';)':
			case ';~)':
			case ';-)':

				return item;
				break;

		}
	}).length
}

function countSmileys(arr) {
	return arr.filter(item => /^[:;][-~]?[)D]$/.test(item)).length;
}

console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
console.log(countSmileys([';->', ';>', ';->', ':o)', ':~>', ';~(', ';(']), 0);

// Who likes it? (6 kyu)

/* 
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
	if (names.length < 1) {
		return 'no one likes this';
	} else if (names.length === 1) {
		return `${names[0]} likes this`;
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Pavel', 'Max']), 'Alex, Jacob and 4 others like this');

// Highest Scoring Word (6 kyu)

/* 
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet:
a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
	const ScoreTable = {
		'a': 1,
		'c': 3,
		'b': 2,
		'd': 4,
		'e': 5,
		'f': 6,
		'g': 7,
		'h': 8,
		'i': 9,
		'j': 10,
		'k': 11,
		'l': 12,
		'm': 13,
		'n': 14,
		'o': 15,
		'p': 16,
		'q': 17,
		'r': 18,
		's': 19,
		't': 20,
		'u': 21,
		'v': 22,
		'w': 23,
		'x': 24,
		'y': 25,
		'z': 26
	};

	const arrayWords = x.split(' ');
	const arrayNumber = [];

	for (let i = 0; i < arrayWords.length; i++) {
		arrayNumber.push(scoreCalculation(arrayWords[i]));

	}

	function scoreCalculation(word) {
		let count = 0;
		for (let i = 0; i < word.length; i++) {
			if (word[i] in ScoreTable) {
				count += ScoreTable[word[i]];
			}
		}

		return count;
	}

	const indexMax = arrayNumber.indexOf(Math.max(...arrayNumber));

	return arrayWords[indexMax];
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');

// Rearrange Number to Get its Maximum (7 kyu)

/* 
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return -1 if the argument is not valid
Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

maxRedigit(123); // returns 321
*/

const maxRedigit = function (num) {
	if (num <= 0 || num.toString().length > 3 || num.toString().length < 3) {
		return null;
	}

	return parseInt(num.toString().split('').sort((a, b) => b - a).join(''), 10);
};

console.log(maxRedigit(123), 321, "123 => 321");
console.log(maxRedigit(278), 872, "278 => 872");
console.log(maxRedigit(-1), null, "-1 => null");
console.log(maxRedigit(0), null, "0 => null");
console.log(maxRedigit(99), null, "99 => null");
console.log(maxRedigit(18), null, "18 => null");

// Digitize (7 kyu)

/* 
Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
*/

function digitize(n) {
	return n.toString().split('').map(Number);
}

console.log(digitize(123), [1, 2, 3])
console.log(digitize(1), [1])
console.log(digitize(0), [0])
console.log(digitize(1230), [1, 2, 3, 0])
console.log(digitize(8675309), [8, 6, 7, 5, 3, 0, 9])

// Find the Missing Number (7 kyu)

/* 
The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?
*/

function missingNo(nums) {
	for (let i = 0; i < + 100; i++) {
		if (!nums.includes(i)) {
			return i;
		}
	}
}

const arr1 = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16] // 26
const arr2 = [26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25, 1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2, 86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8, 80, 72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91, 30, 76, 12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57, 67, 20, 94] // 40
const arr3 = [15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62, 57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9, 56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14, 52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50, 64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32, 19, 44, 20, 43] // 80
console.log(missingNo(arr1), 26)
console.log(missingNo(arr2), 40)
console.log(missingNo(arr3), 80)

// Printer Errors (7 kyu)

/* 
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s) {
	let count = 0;
	const strLength = s.length;

	for (let i = 0; i < s.length; i++) {
		const element = s[i];
		switch (element) {
			case 'n':
			case 'o':
			case 'p':
			case 'q':
			case 'r':
			case 's':
			case 't':
			case 'u':
			case 'v':
			case 'w':
			case 'x':
			case 'y':
			case 'z':
				count++;
				break;

		}
	}

	return `${count}/${strLength}`
}

const str1 = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmtttttttxyzz";
const str2 = "aaaaaaaabbbbbbbbmmmmmmmmmmuuuuuuuuxxxxxxxxxxyzzzzzzzz";
console.log(printerError(str1), "11/56");
console.log(printerError(str2), "27/56");

// Char Code Calculation (7 kyu)

/* 
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
				  ^
total2 = 656661
				  ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
							  6
*/

function calc(x) {
	const charCodeArray = x.split('').map(item => item.charCodeAt()).join('').split('');

	const unitReplacement = charCodeArray.map(item => {
		if (item === '7') {
			return '1';
		}
		return item;
	});

	function summCharCode(arr) {
		return arr.reduce((acc, item) => parseInt(acc, 10) + parseInt(item, 10));
	}

	return summCharCode(charCodeArray) - summCharCode(unitReplacement)
}

console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6);
console.log(calc('aaaaaddddr'), 30);
console.log(calc('jfmgklf8hglbe'), 6);
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);

// Maximum Product (7 kyu)

/* 
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/

function adjacentElementsProduct(array) {
	const newArray = [];

	array.forEach((item, index, array) => {
		if (index !== array.length - 1) {
			newArray.push(item * array[index + 1])
		}
	})

	return Math.max(...newArray)
}

console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
console.log(adjacentElementsProduct([1, 2, 3, 0]), 6);

// Special Number (Special Numbers Series #5) (7 kyu)

/* 
Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

Notes
The number passed will be positive (N > 0) .

All single-digit numbers within the interval [1:5] are considered as special number.
*/

function specialNumber(n) {
	const array = n.toString().split('').filter(item => parseInt(item, 10) > 5);

	if (array.length > 0) {
		return "NOT!!";
	}

	return "Special!!";
}

console.log(specialNumber(2), "Special!!");
console.log(specialNumber(3), "Special!!");
console.log(specialNumber(6), "NOT!!");
console.log(specialNumber(9), "NOT!!");
console.log(specialNumber(11), "Special!!");
console.log(specialNumber(55), "Special!!");
console.log(specialNumber(26), "NOT!!");
console.log(specialNumber(92), "NOT!!");
console.log(specialNumber(25432), "Special!!");
console.log(specialNumber(2783), "NOT!!");

// Halving Sum (7 kyu)

/* 
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) {
	if (n <= 1) {
		return 1;
	}
	return n + halvingSum(Math.floor(n / 2))
}

console.log(halvingSum(25));
console.log(halvingSum(127));

// last digits of a number ( 7 kyu )

/* 
Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

function lastDigit(n, d) {
	return d <= 0 ? [] : n.toString().split('').map(Number).slice(-d);
}

console.log(lastDigit(1, 1), [1]);
console.log(lastDigit(123767, 4), [3, 7, 6, 7]);
console.log(lastDigit(0, 1), [0]);
console.log(lastDigit(34625647867585, 10), [5, 6, 4, 7, 8, 6, 7, 5, 8, 5]);
console.log(lastDigit(1234, 0), []);
console.log(lastDigit(24134, -4), []);
console.log(lastDigit(1343, 5), [1, 3, 4, 3]);

// All Star Code Challenge #3 (7 kyu)

/* 
This Kata is intended as a small challenge for my students

Create a function, called removeVowels (or remove_vowels), 
that takes a string argument and returns that same string 
with all vowels removed (vowels are "a", "e", "i", "o", "u").
*/

var removeVowels = function (str) {
	const newStr = str.match(/[^aeiou]/gi);
	if (newStr === null) {
		return '';
	}
	return newStr.join('');
}

console.log(removeVowels("drake"), "drk");
console.log(removeVowels("aeiou"), "");

// Build a square (7kyu)

/* 
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

function generateShape(integer) {
	let str = '';
	const arr = [];

	for (let i = 0; i < integer; i++) {
		str += '+';
	}
	for (let i = 0; i < integer; i++) {
		arr.push(str);
	}

	return arr.join('\n');
}


console.log(generateShape(5));

// Multiplication table (6 kyu)

/* 
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

*/

const multiplicationTable = function (size) {
	const arr = [];
	for (let i = 1; i <= size; i++) {
		const newArray = [];

		for (let k = 1; k <= size; k++) {
			newArray.push(k * i);
		}
		arr.push(newArray);
	}
	return arr;
}

console.log(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
console.log(multiplicationTable(5));

// Zero-plentiful Array (6 kyu)

/* 
An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. 
Your task is to return the number of zero sequences if the given array
is zero-plentiful else 0.
*/

function zeroPlentiful(arr) {
	if ((arr.join('').match(/0+/g)) === null || (arr.join('').match(/0+/g).filter(item => item.length < 4).length) > 0) {
		return 0;
	}

	return arr.join('').match(/0+/g).filter(item => item.length >= 4).length;
}

console.log(zeroPlentiful([]), 0);
console.log(zeroPlentiful([3]), 0);
console.log(zeroPlentiful([0, 0, 0, 0, 0, 0]), 1);
console.log(zeroPlentiful([0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0]), 2);
console.log(zeroPlentiful([1, 0, 0, 0, 0, 1, 0, 0, 0]), 1);

// Pyramid Array (6 kyu)

/* 
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
	const arr = [];

	for (let i = 0; i < n; i++) {
		const newArr = [];

		for (let k = 0; k <= i; k++) {
			newArr.push(1);
		}
		arr.push(newArr)
	}

	return arr;
}

console.log(pyramid(0), []);
console.log(pyramid(1), [[1]]);
console.log(pyramid(2), [[1], [1, 1]]);
console.log(pyramid(3), [[1], [1, 1], [1, 1, 1]]);

// Greatest Common Factor of an ArrayGreatest Common Factor of an Array (6 kyu)

/* 
Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2
*/

function greatestCommonFactor(array) {
	const newArr = [];
	const leastDivisor = Math.min(...array);
	for (let i = 1; i < leastDivisor; i++) {
		array.forEach(item => {
			if (item % i === 0) { }
		})

	}

	return leastDivisor;
}

console.log(greatestCommonFactor([1, 8]), 1, "Should return 1");
console.log(greatestCommonFactor([16, 4, 8]), 4, "Should return 4");
console.log(greatestCommonFactor([46, 14, 20, 88]), 2, "Should return 2");
console.log(greatestCommonFactor([468, 156, 806, 312, 442]), 26, "Should return 26");
console.log(greatestCommonFactor([48, 99, 18]), 3, "Should return 3");
console.log(greatestCommonFactor([32, 96, 120, 80]), 8, "Should return 8");
console.log(greatestCommonFactor([91, 143, 234, 52]), 13, "Should return 13");
console.log(greatestCommonFactor([171, 45, 297, 342]), 9, "Should return 9");

// Vowel Count (7 kyu)

/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
	const arr = str.split('');
	let count = 0;
	const vowelLetters = {
		'a': 'a',
		'e': 'e',
		'i': 'i',
		'o': 'o',
		'u': 'u'
	}
	arr.forEach(item => {
		if (item in vowelLetters) {
			count++;
		}
	})
	return count;
}

console.log(getCount("aberacadabra"), 6);

// Sort the number sequence (6 kyu)

/* 
Description:
You are given a number sequence(an array) that contains some positive integer and zero.

[3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
It can be split to some zero-terminated sub sequence, such as [3,2,1,0],[5,6,4,0]...

Your task is: First, sort each sub sequence according to the ascending order(don't sort the zero, it always at the end); Second, sort all sub sequence according to their sum value(ascending order too).

Arguments:
sequence: The number sequence.
Results & Note:
The result is the sorted number sequence.
If some sub sequences have the same sum value, sort them according to their original order.
*/

function sortSequence(sequence) {
	//coding and coding..
	const arr = sequence.join('')
		.match(/[1-9]+/g)
		.map(item => item
			.split('')
			.sort((a, b) => a - b))
		.sort((a, b) => (a.
			reduce((acc, item) => parseInt(acc, 10) + parseInt(item, 10), 0)) - (b.
				reduce((acc, item) => parseInt(acc, 10) + parseInt(item, 10), 0)))

	const newArr = arr.map(item => item.join('')).join('0').split('').map(Number);
	newArr.push(0);
	return newArr;

	//.split('')
}

console.log(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0]),
	[1, 2, 3, 0, 1, 3, 5, 0, 2, 4, 8, 0, 4, 5, 6, 0])

console.log(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 2, 2, 2, 0]),
	[1, 2, 3, 0, 2, 2, 2, 0, 1, 3, 5, 0, 4, 5, 6, 0])

console.log(sortSequence([2, 2, 2, 0, 5, 6, 4, 0, 1, 5, 3, 0, 3, 2, 1, 0]),
	[2, 2, 2, 0, 1, 2, 3, 0, 1, 3, 5, 0, 4, 5, 6, 0])

// Exes and Ohs (7 kyu)

/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/


//code here
function XO(str) {
	const arr = str.toLowerCase().split('');

	return arr.filter(item => item === 'x').length === arr.filter(element => element === 'o').length;
}


console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);

// Friend or Foe? (7 kyu)

/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

function friend(friends) {
	return friends.filter(item => item.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

// Reverse words (7 kyu)

/* 
Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.
*/

function reverseWords(str) {
	return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

// Testing 1-2-3 (7 kyu)

/* 
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/

const number = function (array) {
	return array.map((item, index) => `${index + 1}: ${item}`);
}

console.log(numberSum([]), [], 'Empty array should return empty array');
console.log(numberSum(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

// String ends with? (7 kyu)

/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
	return str.endsWith(ending);
}

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);

// Arabian String (6 kyu)

/* 
You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
*/

function camelize(str) {
	if (str === '') {
		return '';
	}

	const regExp = /[a-z0-9]+/gi;
	return str.match(regExp).map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join('');
}

console.log(camelize("java script"), "JavaScript");
console.log(camelize("cODE warS"), "CodeWars");
console.log(camelize("example name"), "ExampleName");
console.log(camelize("your-NaMe-here"), "YourNameHere");
console.log(camelize("testing ABC"), "TestingAbc");

// Don't give me five! (7 kyu)

/* 
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.
The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

function dontGiveMeFive(start, end) {
	let count = 0;
	for (let i = start; i <= end; i++) {
		if (!/5/.test(i)) {
			count++
		}
	}
	return count;
}

console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);

// Remove duplicate words (7 kyu)

/* 
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords(s) {
	const array = s.split(' ');
	return [...new Set(array)].join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');

// Find the stray number (7 kyu)

/* 
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
	const obj = {}

	for (let value of numbers) {
		if (value in obj) {
			obj[value]++;
		} else {
			obj[value] = 1;
		}
	}
	for (let value in obj) {
		if (obj[value] === 1) {
			return +value;
		}
	}
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);

// Sort Numbers (7 kyu)

/* 
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solutions(nums) {
	if (nums === null || nums.length === 0) {
		return [];
	}
	return nums.sort((a, b) => a - b);
}

console.log(solutions([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10]);
console.log(solutions(null), []);
console.log(solutions([]), []);
console.log(solutions([20, 2, 10]), [2, 10, 20]);
console.log(solutions([2, 20, 10]), [2, 10, 20]);

// Pair of gloves (6 kyu)

/* 
Pair of gloves
Winter is coming, you must prepare your ski holidays. 
The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, 
return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
	const obj = {};
	let count = 0;
	gloves.forEach(item => {
		if (obj.hasOwnProperty(item)) {
			obj[item]++;
		} else {
			obj[item] = 1;
		}
	})
	for (let color in obj) {
		const numberOfPairsColor = obj[color] / 2;
		count += Math.floor(numberOfPairsColor);
	}
	return count;
}

console.log(numberOfPairs(['red', 'red']), 1);
console.log(numberOfPairs(['red', 'green', 'blue']), 0);
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']), 3);

// Sum of Minimums! (7 kyu)

/* 
Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values.
*/

function sumOfMinimums(arr) {
	return arr.reduce((acc, item) => acc + Math.min(...item), 0);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76);

// Flatten and sort an array (7 kyu)

/* 
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

function flattenAndSort(array) {
	return array.flat().sort((a, b) => a - b);
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

// No oddities here (7kyu)

/* 
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds(values) {
	return values.filter(item => item % 2 === 0);
}

console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);

// Love vs friendship (7 kyu)

/* 
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string) {
	const scoreTable = {
		'a': 1,
		'c': 3,
		'b': 2,
		'd': 4,
		'e': 5,
		'f': 6,
		'g': 7,
		'h': 8,
		'i': 9,
		'j': 10,
		'k': 11,
		'l': 12,
		'm': 13,
		'n': 14,
		'o': 15,
		'p': 16,
		'q': 17,
		'r': 18,
		's': 19,
		't': 20,
		'u': 21,
		'v': 22,
		'w': 23,
		'x': 24,
		'y': 25,
		'z': 26
	};

	return string.split('').reduce((acc, item) => acc + scoreTable[item], 0)
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);

// Greet Me (7kyu)

/* 
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

const greet = function (name) {
	const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	return `Hello ${newName}!`;
};

console.log(greet('riley'), 'Hello Riley!');
console.log(greet('JACK'), 'Hello Jack!');

// Leap Years (7 kyu)

/* 
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.
 */

function isLeapYear(year) {
	return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

console.log(isLeapYear(1234), false, 'Year 1234');
console.log(isLeapYear(1984), true, 'Year 1984');
console.log(isLeapYear(2000), true, 'Year 2000');
console.log(isLeapYear(2010), false, 'Year 2010');
console.log(isLeapYear(2013), false, 'Year 2013');

// Counting Array Elements (7 kyu)

/* 
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

function count(array) {
	const obj = {};
	for (let i = 0; i < array.length; i++) {
		if (obj.hasOwnProperty(array[i])) {
			obj[array[i]]++;
		} else {
			obj[array[i]] = 1;
		}
	}
	return obj;
}

console.log(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 });

// Switcheroo (7 kyu)

/* 
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x) {
	let newStr = '';
	for (let i = 0; i < x.length; i++) {
		if (x[i] === 'a') {
			newStr += 'b'
		} else if (x[i] === 'b') {
			newStr += 'a'
		} else {
			newStr += x[i];
		}
	}
	return newStr;
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');

// FIXME: Get Full Name (7 kyu)

/* 
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/

class Dinglemouse {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		if (!this.firstName) {
			return this.lastName
		}
		if (!this.lastName) {
			return this.firstName
		} else {
			return this.firstName + " " + this.lastName
		}
	}
}

console.log(new Dinglemouse("Clint", "Eastwood").getFullName(), "Clint Eastwood");

// Array element parity (7 kyu)

/* In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck! 
*/

function solve(arr) {
	return arr.find(elem => !arr.includes(-elem));
};

console.log(solve([1, -1, 2, -2, 3]), 3);
console.log(solve([-3, 1, 2, 3, -1, -4, -2]), -4);
console.log(solve([1, -1, 2, -2, 3, 3]), 3);
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
console.log(solve([-9, -105, -9, -9, -9, -9, 105]), -9);

// Functional Addition (7 kyu)

/* 
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/

function add(n) {
	return function (i) {
		return n + i;
	}
}

console.log(add(1)(3), 4, 'add one to three equals four')

// Going backwards: Number from every possible sum of two digits (6 kyu)

/* 
Every possible sum of two digits
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

function numberSum(sums) {

	const arr = [];
	sums = sums.toString();
	for (let i = 0; i < sums.length; i++) {
		for (let k = i + 1; k < sums.length; k++) {
			arr.push(parseInt(sums[i]) + parseInt(sums[k]));
		}
	}
	return arr;
}

console.log(number([6, 7, 11]), 156);
console.log(number([9, 13, 17, 14, 6, 10, 7, 14, 11, 15]), 81596);
console.log(number([11, 8, 5, 13, 10, 7]), 3852);
console.log(number([5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]), 3264128);
console.log(number([18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]), 999999);

// Currying functions: multiply all elements in an array (7 kyu)

/* 
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.
*/

function multiplyAll(arr) {
	return function (n) {
		return arr.map(item => item * n);
	}
}

console.log(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
console.log(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
console.log(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
console.log(multiplyAll([])(10), [], "should return an empty array");

// Every possible sum of two digits (7 kyu)

/* 
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

function digits(num) {
	const arr = [];
	num = num.toString();
	for (let i = 0; i < num.length; i++) {
		for (let k = i + 1; k < num.length; k++) {
			arr.push(parseInt(num[i]) + parseInt(num[k]));
		}
	}
	return arr;
}

console.log(digits(156), [6, 7, 11]);
console.log(digits(81596), [9, 13, 17, 14, 6, 10, 7, 14, 11, 15]);
console.log(digits(3852), [11, 8, 5, 13, 10, 7]);
console.log(digits(3264128), [5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]);
console.log(digits(999999), [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]);

// Multiples of 3 and 5 redux (6 kyu)

/* 
The galactic games have begun!
It's the galactic games! Beings of all worlds come together to compete in several interesting sports, like nroogring, fredling and buzzing (the beefolks love the last one). However, there's also the traditional marathon run.

Unfortunately, there have been cheaters in the last years, and the committee decided to place sensors on the track. Committees being committees, they've come up with the following rule:

A sensor should be placed every 3 and 5 meters from the start, e.g. at 3m, 5m, 6m, 9m, 10m, 12m, 15m, 18m….

Since you're responsible for the track, you need to buy those sensors. Even worse, you don't know how long the track will be! And since there might be more than a single track, and you can't be bothered to do all of this by hand, you decide to write a program instead.

Task
Return the sum of the multiples of 3 and 5 below a number. Being the galactic games, the tracks can get rather large, so your solution should work for really large numbers (greater than 1,000,000).

Examples
solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
*/

function solution(number) {
	const numberThree = Math.floor(--number / 3);
	const numberFive = Math.floor(number / 5);
	const numberFifteen = Math.floor(number / 15);
	return (3 * numberThree * (numberThree + 1) + 5 * numberFive * (numberFive + 1) - 15 * numberFifteen * (numberFifteen + 1)) / 2;
}

console.log(solution(10), 23);
console.log(solution(20), 78);
console.log(solution(100), 2318);
console.log(solution(200), 9168)
console.log(solution(1000), 233168);
console.log(solution(10000), 23331668);
console.log(solution(1000000), 233333166668);

// Mumbling (7 kyu)

/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	return s.split('').map((item, index) => item.toUpperCase() + item.repeat(index).toLowerCase()).join('-');
}

console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

// Change it up (6 kyu)

/* 
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note: the alphabet should wrap around, so Z becomes A

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

function changer(str) {
	str = str.toLowerCase();

	return str.split(' ').map(word =>

		word.split('').map(letter => {
			switch (letter) {
				case 'z':
					return 'A';
				case '0':
					return '0';
			}
			let x = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
			const regExp = /([aeiou])/g;
			if (regExp.test(x)) {
				return x.toUpperCase();
			}
			return x;
		}).join('')
	).join(' ');
}

console.log(changer('Cat30'), 'dbU30');
console.log(changer('Alice'), 'bmjdf');
console.log(changer('sponge1'), 'tqpOhf1');
console.log(changer('Hello World'), 'Ifmmp xpsmE');
console.log(changer('dogs'), 'Epht');
console.log(changer('z'), 'A');

// You're a square! (7 kyu)

/* 
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

const isSquare = function (n) {
	return Math.sqrt(n) % 1 === 0;
	//return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");
console.log(isSquare(90), false, "90 is not a square number");

// Complementary DNA (7 kyu)

/* 
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna) {
	return dna.split('')
		.map(item => {
			switch (item) {
				case 'A':
					return 'T';
				case 'T':
					return 'A';
				case 'G':
					return 'C';
				case 'C':
					return 'G';
				default:
					return '';
			}
		})
		.join('');
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is")
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is")
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is")

// Growth of a Population (7 kyu)

/* 
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

function nbYear(p0, percent, aug, p) {
	let countYear = 0;

	while (p0 < p) {
		p0 = p0 * (1 + percent / 100) + aug;
		countYear++;
	}
	return countYear;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);

// Which are in? (6 kyu)

/* 
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/

function inArray(array1, array2) {
	const newArr = [];
	for (let i = 0; i < array1.length; i++) {
		for (let k = 0; k < array2.length; k++) {
			if (array2[k].includes(array1[i])) {
				newArr.push(array1[i]);
				k = array2.length;
			}
		}
	}
	return newArr.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2), ["live", "strong"]);
a1 = ["live", "strong", "arp"];
console.log(inArray(a1, a2), ["arp", "live", "strong"]);
a1 = ["tarp", "mice", "bull"];
console.log(inArray(a1, a2), []);

// Is this a triangle? (7 kyu)

/* 
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a, b, c) {
	if (a + b > c && a + c > b && c + b > a) {
		return true;
	}
	return false;
}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);

// Regex validate PIN code (7 kyu)

/* 

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false*/

function validatePIN(pin) {
	if ((pin.length === 4 || pin.length === 6) && pin[0] !== '-') {
		return pin.match(/\d/gm).length === 4 || pin.match(/\d/gm).length === 6;
	}
	return false;

	// return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("1"), false, "Wrong output for '1'");
console.log(validatePIN("12"), false, "Wrong output for '12'");
console.log(validatePIN("123"), false, "Wrong output for '123'");
console.log(validatePIN("12345"), false, "Wrong output for '12345'");
console.log(validatePIN("1234567"), false, "Wrong output for '1234567'");
console.log(validatePIN("-1234"), false, "Wrong output for '-1234'");
console.log(validatePIN("1.234"), false, "Wrong output for '1.234'");
console.log(validatePIN("-1.234"), false, "Wrong output for '-1.234'");
console.log(validatePIN("00000000"), false, "Wrong output for '00000000'");
console.log(validatePIN("a234"), false, "Wrong output for 'a234'");
console.log(validatePIN(".234"), false, "Wrong output for '.234'");
console.log(validatePIN("1234"), true, "Wrong output for '1234'");
console.log(validatePIN("0000"), true, "Wrong output for '0000'");
console.log(validatePIN("1111"), true, "Wrong output for '1111'");
console.log(validatePIN("123456"), true, "Wrong output for '123456'");
console.log(validatePIN("098765"), true, "Wrong output for '098765'");
console.log(validatePIN("000000"), true, "Wrong output for '000000'");
console.log(validatePIN("123456"), true, "Wrong output for '123456'");
console.log(validatePIN("090909"), true, "Wrong output for '090909'");

// Remove the minimum (7 kyu)

/* 
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

function removeSmallest(numbers) {
	const numbersCopy = [...numbers];
	const indexNumMin = numbersCopy.indexOf(Math.min(...numbersCopy));
	numbersCopy.splice(indexNumMin, 1);
	return numbersCopy;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([]), [], "Wrong result for []");

// The highest profit wins! (7 kyu)

/* 
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]), [1, 5]);
console.log(minMax([2334454, 5]), [5, 2334454]);
console.log(minMax([1]), [1, 1]);

// Stop gninnipS My sdroW! (6 kyu)

/* 
Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter words
reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string) {
	return string.split(' ')
		.map(item => item.length > 4 ? item.split('').reverse().join('') : item)
		.join(' ');
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");

// Two to One (7 kyu)

/* 
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
	let a = [... new Set(s1.split(""))];
	let b = [... new Set(s2.split(""))];

	for (let i = 0; i < b.length; i++) {
		a.push(b[i]);
	}
	let initCombo = [... new Set(a)];
	let combo = initCombo.sort().join("");
	return combo;
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

// Binary Addition (7 kyu)

/* Implement a function that adds two numbers together and returns their sum in binary.The conversion can be done before, or after the addition.

The binary number returned should be a string.

	Examples: (Input1, Input2-- > Output(explanation)))

1, 1 -- > "10"(1 + 1 = 2 in decimal or 10 in binary)
5, 9 -- > "1110"(5 + 9 = 14 in decimal or 1110 in binary) */

function addBinary(a, b) {
	return (a + b).toString(2)
}

console.log(addBinary(1, 2))
console.log(addBinary(2, 3))
console.log(addBinary(3, 4))

//Sum of a sequence (7 kyu)

/*Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)*/

const sequenceSumm = (begin, end, step) => {
	let count = 0;
	if (end < begin) {
		return 0;
	}
	for (let i = begin; i <= end; i += step) {
		count += i;
	}
	return count;
};

console.log(sequenceSumm(2, 6, 2), 12)
console.log(sequenceSumm(1, 5, 1), 15)
console.log(sequenceSumm(1, 5, 3), 5)

// Make a function that does arithmetic! (7 kyu)

/* 
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!
*/

function arithmetic(a, b, operator) {
	switch (operator) {
		case "add":
			return a + b;
		case "subtract":
			return a - b;
		case "multiply":
			return a * b;
		case "divide":
			return a / b;
	}
}

console.log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
console.log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");

// Sort array by string length (7 kyu)

/* 
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

function sortByLength(array) {
	return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), ["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);

// Counting Duplicates (6 kyu)

/* 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
	const str = text.toLowerCase();
	const obj = {};
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (obj.hasOwnProperty(str[i])) {
			obj[str[i]]++;
		} else {
			obj[str[i]] = 1;
		}
	}
	for (let key in obj) {
		if (obj[key] > 1) {
			count++;
		}
	}
	return count;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

// Duplicate Encoder (6 kyu)

/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split('')
		.map(function (item, index, laters) {
			return laters.indexOf(item) === laters.lastIndexOf(item) ? '(' : ')'
		})
		.join('');
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");

// Round up to the next multiple of 5 (7 kyu)

/* 
Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

function roundToNext5(n) {
	return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(1));
console.log(roundToNext5(7));
console.log(roundToNext5(12));

// Take a Ten Minute Walk (6 kyu)

/* 
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
	const countingDirections = (direction) => walk.filter(item => item === direction).length;
	if (walk.length === 10) {
		return countingDirections('w') === countingDirections('e') && countingDirections('n') === countingDirections('s');
	}
	return false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(!isValidWalk(['w']), 'should return false');
console.log(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');

// Unique In Order (6 kyu)

/* 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const uniqueInOrder = function (iterable) {
	const newArr = [...iterable];
	return newArr.filter((item, index) => item !== newArr[index + 1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);

// Maximum Multiple (7 kyu)

/* 
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
*/

function maxMultiple(divisor, bound) {
	return bound - (bound % divisor)
}

console.log(maxMultiple(2, 7), 6);
console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(7, 17), 14);
console.log(maxMultiple(10, 50), 50);
console.log(maxMultiple(37, 200), 185);
console.log(maxMultiple(7, 100), 98);

// Largest 5 digit number in a series (7 kyu)

/* 
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.
The number will be passed in as a string of only digits.
It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

function solution123(digits) {
	let number = 0;
	for (let i = 0; i < digits.length - 4; i++) {
		let numberSlice = digits.slice(i, i + 5)
		if (parseInt(numberSlice, 10) > number) {
			number = parseInt(numberSlice, 10);
		}
	}
	return number;
}

let number123 = "7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"
console.log(solution123(number123), 99890, 'solution did not return correct value')
console.log(solution123('1234567898765'), 98765, 'Failed when max 5 digits is at end of number')
console.log(solution123("731674765"), 74765, 'Failed in overlapping test')

// Factorial (7 kyu)

/* 
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. 
If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#)
or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript)
or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/

function factorial123(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else if (n < 0 || n > 12) {
		throw new RangeError('Параметр должен быть между ' + 0 + ' и ' + 12);
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial123(0), 1, "factorial for 0 is 1");
console.log(factorial123(1), 1, "factorial for 1 is 1");
console.log(factorial123(2), 2, "factorial for 2 is 2");
console.log(factorial123(3), 6, "factorial for 3 is 6");

// Anagram Detection (7 kyu)

/* 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

const isAnagram = (test, original) => {
	const transformation = (word) => word.toLowerCase().split('').sort().join('');
	return transformation(original) === transformation(test);
}

console.log(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee');
console.log(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK');
console.log(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an aconsole.log');
console.log(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble');
console.log(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round');
console.log(isAnagram("apple", "pale"), false, 'Same letters, but different count');

// Find the missing letter (6 kyu)

/* 
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function findMissingLetter(array) {
	for (let i = 1; i < array.length; i++) {
		const prevLetterCode = array[i - 1].charCodeAt();
		const nextLetterCode = array[i].charCodeAt();

		if (nextLetterCode - prevLetterCode !== 1) {
			return String.fromCharCode(prevLetterCode + 1);
		}
	}
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');

// Sort the odd (6 kyu)

/* 
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
	const oddNumbers = array.filter(item => item % 2 !== 0).sort((a, b) => a - b);
	return array.map((item) => {
		if (item % 2 !== 0) {
			return oddNumbers.shift();
		} else {
			return item;
		}
	});
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
console.log(sortArray([7, 1]), [1, 7]);

// Simple Fun #176: Reverse Letter (7 kyu)

/* 
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const reverseLetter = str => str.split('')
	.reverse()
	.filter(item => alphabet.indexOf(item) !== -1)
	.join('');

console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("ultr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")

// Summing a number's digits (7 kyu)

/* 
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
	return Math.abs(number)
		.toString()
		.split('').
		reduce((acc, item) => parseFloat(acc, 10) + parseFloat(item, 10), 0);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);

// Build Tower (6 kyu)

/* 
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

const towerBuilder = (nFloors) => {
	const array = [];
	for (let i = 0; i < nFloors; i++) {
		array.push(' '.repeat(nFloors - i - 1) + '*'.repeat((i * 2) + 1) + ' '.repeat(nFloors - i - 1));
	}
	return array;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);

// Thinkful - String Drills: Repeater (7 kyu)

/* 
Write a function named repeater() that takes two arguments (a string and a number),
and returns a new string where the input string is repeated that many times.
*/

const repeater = (string, n) => {
	return string.repeat(n);
}

console.log(repeater('a', 5), 'aaaaa')
console.log(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa')
console.log(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ')

// Delete occurrences of an element if it occurs more than n times(6 kyu)

/* 
Enough is enough!
Alice and Bob were on a holiday.
Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. 
However, Charlie doesn't like these sessions, since the motive usually repeats. 
He isn't fond of seeing the Eiffel tower 40 times. 
He tells them that he will only sit during the session if they show the same motive at most N times. 
Luckily, Alice and Bob are able to encode the motive as a number. 
Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. 
For example if N = 2, and the input is [1,2,3,1,2,1,2,3], 
you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, 
and then take 3, which leads to [1,2,3,1,2,3].

Example
  deleteNth ([1,1,1,1],2) // return [1,1]
  
  deleteNth ([20,37,20,21],1) // return [20,37,21]
*/

const deleteNth = (arr, n) => {
	const objNumbers = {};
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (objNumbers.hasOwnProperty(element)) {
			objNumbers[element]++;
			if (objNumbers[element] <= n) {
				newArr.push(element);
			}
		} else {
			objNumbers[element] = 1;
			newArr.push(element);
		}
	}
	return newArr;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

// Check the exam (7 kyu)

/* 
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

const checkExam = (array1, array2) => {
	let count = 0;
	array1.forEach((item, index) => {
		array2[index] === item ? count += 4 : array2[index] === '' ? count += 0 : count -= 1;
	});
	return count > 0 ? count : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);

// Small enough? - Beginner (7 kyu)

/* 
You will be given an array and a limit value. You must check that 
all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

const smallEnough = (a, limit) => {
	return a.every(item => item <= limit);
}

console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

// Form The Minimum (7 kyu)

/* 
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
*/

const minValue = (values) => {
	return parseInt([...new Set(values)].sort((a, b) => a - b).join(''), 10);
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);

// Alternate capitalization (7 kyu)

/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

const capitalize = (s) => {
	const evenLettersUppercase = s.split('')
		.map((item, index) => {
			return index % 2 === 0 ? item.toUpperCase() : item;
		})
		.join('');
	const oddLettersUppercase = s.split('')
		.map((item, index) => {
			return index % 2 !== 0 ? item.toUpperCase() : item;
		})
		.join('');
	return [evenLettersUppercase, oddLettersUppercase];
};

console.log(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);

// Maximum Length Difference (7 kyu)

/* 
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. 
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

const mxdiflg = (a1, a2) => {
	if (a1.length === 0 || a2.length === 0) {
		return -1;
	}
	const wordLength1 = a1.map(word => word.length);
	const wordLength2 = a2.map(word => word.length);
	return Math.max(Math.max(...wordLength1) - Math.min(...wordLength2), Math.max(...wordLength2) - Math.min(...wordLength1));
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);

// Are the numbers in order? (7 kyu)

/* 
Are the numbers in order?
In this Kata, your function receives an array of integers as input. 
Your task is to determine whether the numbers are in ascending order. 
An array is said to be in ascending order if there are no two adjacent 
integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, 
i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted 
in ascending order since all (zero) adjacent pairs of integers satisfy the 
condition that the left integer does not exceed the right integer in value. 
An empty list is considered a degenerate case and therefore will not be 
tested in this Kata - feel free to raise an Issue if you see such a list being tested.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/

const inAscOrder = (arr) => {
	return arr.join('') === arr.sort((a, b) => a - b).join('');
}

console.log(inAscOrder([1, 2, 4, 7, 19]), 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
console.log(inAscOrder([1, 2, 3, 4, 5]), 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
console.log(!inAscOrder([1, 6, 10, 18, 2, 4, 20]), 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
console.log(!inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');

// Find the capitals (7 kyu)

/* 
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

const capitals = (word) => {
	return word.split('')
		.map((letter, index) => letter === letter.toUpperCase() ? index : null)
		.filter(indexLetter => indexLetter !== null);
};

console.log(capitals('AodEWaRs'), [0, 3, 4, 6]);

// Valid Braces (6 kyu)

/* 
Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, 
but introduces new characters: brackets [], and curly braces {}. 
Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

const validBraces = (braces) => {
	const arrayStack = [];

	for (let i = 0; i < braces.length; i += 1) {
		const first = arrayStack[arrayStack.length - 1];
		if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
			arrayStack.push(braces[i]);
		} else if (braces[i] === ')' && first === '(' && arrayStack.length !== 0 || braces[i] === ']' && first === '[' && arrayStack.length !== 0 || braces[i] === '}' && first === '{' && arrayStack.length !== 0) {
			arrayStack.pop();
		} else {
			return false;
		}
	}

	return arrayStack.length === 0;
}

console.log(validBraces("()))", false));
console.log(validBraces("()", true));
console.log(validBraces("[]", true));
console.log(validBraces("{}", true));
console.log(validBraces("(){}[]", true));
console.log(validBraces("([{}])", true));
console.log(validBraces("(}", false));
console.log(validBraces("[(])", false));
console.log(validBraces("({})[({})]", true));
console.log(validBraces("(})", false));
console.log(validBraces("(({{[[]]}}))", true));
console.log(validBraces("{}({})[]", true));
console.log(validBraces(")(}{][", false));
console.log(validBraces("())({}}{()][][", false));
console.log(validBraces("(((({{", false));
console.log(validBraces("}}]]))}])", false));

// Write Number in Expanded Form (6 kyu)

/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

const expandedForm = (num) => {
	return num.toString()
		.split('')
		.reverse()
		.map((item, index) => item * Math.pow(10, index))
		.filter(item => item > 0)
		.reverse()
		.join(' + ');
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');

// Find The Parity Outlier (6 kyu)

/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

const findOutlier = (integers) => {
	const odd = [];
	const even = [];
	integers.forEach(item => {
		if (item % 2 === 0) {
			even.push(item);
		} else {
			odd.push(item);
		}
	});

	return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);

// Tribonacci Sequence (6 kyu)

/* 
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, 
but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 
And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), 
we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] 
instead of [1, 1] basically shifts the common Fibonacci sequence by once place, 
you may be tempted to think that we would get the same sequence shifted by 2 places,
but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: 
you need to create a fibonacci function that given a signature array/list, 
returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; 
n will always be a non-negative number; if n == 0, then return an empty array 
(except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/

const tribonacci = (signature, n) => {
	if (n === 0) {
		return [];
	}
	for (let i = 1; i < n - 2; i++) {
		let nextNumber = signature[i - 1] + signature[i] + signature[i + 1];
		signature.push(nextNumber);
	}
	signature.length = n;
	return signature;
}

console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
console.log(tribonacci([0, 0, 1], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
console.log(tribonacci([0, 1, 1], 10), [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
console.log(tribonacci([1, 0, 0], 10), [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
console.log(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(tribonacci([1, 2, 3], 10), [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
console.log(tribonacci([3, 2, 1], 10), [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
console.log(tribonacci([1, 1, 1], 1), [1]);
console.log(tribonacci([300, 200, 100], 0), []);
console.log(tribonacci([0.5, 0.5, 0.5], 30), [0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5]);

// Equal Sides Of An Array (6 kyu)

/* 
You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers 
to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, 
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, 
the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. 
If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/

const findEvenIndex = (arr) => {
	const arrayIndex = [];
	for (let i = 0; i < arr.length; i++) {
		let sumLeftSide = arr.slice(0, i).reduce((acc, item) => acc + item, 0);
		let sumRightSide = arr.slice(i + 1, arr.length).reduce((acc, item) => acc + item, 0);
		if (sumLeftSide === sumRightSide) {
			arrayIndex.push(i);
		}
	}
	return arrayIndex.length === 0 ? -1 : arrayIndex[0];
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");

// Where my anagrams at? (5 kyu)

/* 
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none.
*/

const anagrams = (word, words) => {
	const wordSort = word.split('').sort().join('');
	const newWords = [];
	for (let i = 0; i < words.length; i++) {
		if (words[i].length === wordSort.length) {
			const itemWordsSort = words[i].split('').sort().join('');
			if (wordSort === itemWordsSort) {
				newWords.push(words[i]);
			}
		}
	}
	return newWords;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']), []);

// Calculating with Functions (5 kyu)

/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

const expressions = (number, operation) => {
	if (!operation)
		return number;
	return operation(number);
}

const zero = (operation) => expressions(0, operation);
const one = (operation) => expressions(1, operation);
const two = (operation) => expressions(2, operation);
const three = (operation) => expressions(3, operation);
const four = (operation) => expressions(4, operation);
const five = (operation) => expressions(5, operation);
const six = (operation) => expressions(6, operation);
const seven = (operation) => expressions(7, operation);
const eight = (operation) => expressions(8, operation);
const nine = (operation) => expressions(9, operation);

const plus = (x) => (y) => y + x;
const minus = (x) => (y) => y - x;
const times = (x) => (y) => y * x;
const dividedBy = (x) => (y) => Math.floor(y / x);

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);

// Rot13 (5 kyu)

/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

const rot13 = (message) => {
	const originalAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const cypher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

	const newArrayMessage = [];
	message.split('').forEach(item => {
		const indexItem = originalAlpha.indexOf(item);
		indexItem !== -1 ? newArrayMessage.push(cypher[indexItem]) : newArrayMessage.push(item)
	})
	return newArrayMessage.join('');
}

console.log(rot13('grfg'));
console.log(rot13('Grfg'));

// First non-repeating character (5 kyu)

/* 
Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. 
For example, the input 'sTreSS' should return 'T'.
*/

const firstNonRepeatingLetter = (s) => {
	for (let item of s) {
		if (s.match(new RegExp(item, "gi")).length === 1) {
			return item;
		}
	}
	return '';

	/* 
		let strLowerCase = s.toLowerCase();
		for (let i = 0; i < t.length; i++)
			if (strLowerCase.indexOf(strLowerCase[i]) === strLowerCase.lastIndexOf(strLowerCase[i]))
				return s[i];
		return '';
	 */
}

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');

// Find the capitals (7 kyu)

/* 
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

const capitalss = (word) => {
	return word.split('').map((item, index) => {
		if (item === item.toUpperCase()) {
			return index;
		}
	})
		.filter(item => typeof (item) === 'number')
};

console.log(capitalss('CodEWaRs'), [0, 3, 4, 6]);

// Mexican Wave (6 kyu)

/* 
Introduction
The wave (known as the Mexican wave in the English-speaking world outside North America)
is an example of metachronal rhythm achieved in a packed stadium when successive groups 
of spectators briefly stand, yell, and raise their arms. 
Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, 
even though individual spectators never move away from their seats. 
In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, 
and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, 
the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, 
the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, 
although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
1.  The input string will always be lower case but maybe empty.

2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

const wave = (str) => {
	let wordsArray = [];
	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		if (letter === ' ') {
			continue;
		} else {
			wordsArray.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
		}

	}

	return wordsArray;
}

const string1 = "two words"
const string2 = "Hello words"
console.log(wave(string1));
console.log(wave(string2));

// Break camelCase (6 kyu)

/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const solutionss = (string) => {
	const newString = [];
	string.split('').forEach(item => {
		item === item.toUpperCase() ? newString.push(` ${item}`) : newString.push(item);
	});
	return newString.join('')
}

console.log(solutionss('camelCasing'), 'camel Casing', 'Unexpected result');
console.log(solutionss('camelCasingTest'), 'camel Casing Test', 'Unexpected result');

// Two Sum (6 kyu)

/* 
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; 
any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, 
	and all of the items will be numbers; 
	target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)
*/

const twoSum = (numbers, total) => {
	const previousValues = {};
	for (let i = 0; i < numbers.length; i++) {
		const complement = total - numbers[i];
		if (previousValues[complement]) {
			return [numbers.indexOf(complement), i];
		}
		previousValues[numbers[i]] = true;
	}
};

console.log(twoSum([1, 2, 3], 4), [0, 2]);
console.log(twoSum([3, 9, 12, 20], 21), [1, 2]);

// Scramblies (5 kyu)

/* 
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, 
otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

const scramble = (str1, str2) => {
	const letterObj = {};
	for (let letter of str1) {
		if (letterObj[letter]) {
			letterObj[letter]++;
		}
		else {
			letterObj[letter] = 1;
		}
	}

	for (let letter of str2) {
		if (!letterObj[letter]) {
			return false;
		}
		else {
			letterObj[letter]--;
		}
	}
	return true;
}

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjavx', 'javascript'), false);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('javscripts', 'javascript'), false);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
console.log(scramble('commas', 'commas'), true);
console.log(scramble('sammoc', 'commas'), true);

// Extract the domain name from a URL (5 kyu)

/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

For example:
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url) {
	const domain = url.replace('http://', '').replace('www.', '').replace('https://', '').split('.')[0];
	return domain;
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");

// PaginationHelper (5 kyu)

/* 
For this exercise you will be strengthening your page-fu mastery. 
You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. 
The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
*/

function PaginationHelper(collection, itemsPerPage) {
	this.collection = collection, this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
	return this.collection.length;
}

PaginationHelper.prototype.pageCount = function () {
	return Math.ceil(this.itemCount() / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
	return pageIndex < this.pageCount()
		? Math.min(this.itemsPerPage, this.itemCount() - pageIndex * this.itemsPerPage)
		: -1;
}

PaginationHelper.prototype.pageIndex = function (itemIndex) {
	return itemIndex < this.itemCount() && itemIndex >= 0
		? Math.floor(itemIndex / this.itemsPerPage)
		: -1;
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount());
console.log(helper.pageIndex());

// CamelCase Method (6 kyu)

/* 
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function () {
	return this.trim()
		.split(' ')
		.map(item => {
			return item !== '' ? item[0].toUpperCase() + item.slice(1) : '';
		})
		.join('');
}

console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");

// Give me a Diamond (6 kyu)

/* 
Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, 
as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

const diamond = (n) => {
	if (n % 2 === 0 || n <= 0) {
		return null;
	}

	let numSpace = 0;
	let diam = '*'.repeat(n) + '\n';

	for (let i = n - 2; i >= 1; i -= 2) {
		let nextRow = ' '.repeat(++numSpace) + '*'.repeat(i) + `\n`;
		diam = nextRow + diam + nextRow;
	}
	return diam;
}

console.log(diamond(1), "*\n");
console.log(diamond(3), " *\n***\n *\n");
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(2), null);
console.log(diamond(-3), null);
console.log(diamond(0), null);

// Remove anchor from URL (7 kyu)

/* 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

const removeUrlAnchor = (url) => {
	const arrUrl = url.split('');
	let newUrl = '';
	for (let i = 0; i < arrUrl.length; i++) {
		if (arrUrl[i] === '#') {
			break;
		}
		newUrl += arrUrl[i];
	}
	return newUrl;
	// return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1');
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/');

// Row Weights (7 kyu)

/* 
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, 
where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
*/

const rowWeights = (array) => {
	let sumFirstTeam = 0;
	let sumSSecondTeam = 0;

	for (let i = 0; i < array.length; i++) {
		i % 2 === 0 ? sumFirstTeam += array[i] : sumSSecondTeam += array[i];
	}
	return [sumFirstTeam, sumSSecondTeam];
}

console.log(rowWeights([80]), [80, 0]);
console.log(rowWeights([100, 50]), [100, 50]);
console.log(rowWeights([50, 60, 70, 80]), [120, 140]);
console.log(rowWeights([13, 27, 49]), [62, 27]);
console.log(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
console.log(rowWeights([0]), [0, 0]);
console.log(rowWeights([100, 51, 50, 100]), [150, 151]);
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
console.log(rowWeights([0, 1, 0]), [0, 1]);

// Title Case (6 kyu)

/* 
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, 
only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely
into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each word separated by a space. 
Your function should ignore the case of the minor words string -- it should behave in the same way even 
if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. 
The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

const titleCase = (title, minorWords) => {
	const arrMinorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
	return title.toLowerCase()
		.split(' ')
		.map(function (item, index) {
			if (item != "" && ((arrMinorWords.indexOf(item) === -1) || index == 0)) {
				item = item.split('');
				item[0] = item[0].toUpperCase();
				item = item.join('');
			}
			return item;
		})
		.join(' ');
}

console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')

// Reverse or rotate? (6 kyu)

/* 
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

const revrot = (str, sz) => {
	const arr = [];
	if (str.length === 0 || sz <= 0) {
		return '';
	}
	for (let i = 0; i < str.length; i += sz) {
		if (!(str.slice(i, i + sz).length < sz)) {
			const substr = str.slice(i, i + sz).split('');
			const sumSubstr = substr.reduce((acc, item) => acc + Math.pow(item, 3), 0);
			sumSubstr % 2 === 0 ? arr.push(substr.reverse().join('')) : arr.push(substr.slice(1).join(''), substr[0]);
		}
	}
	return arr.join('');
}

console.log(revrot("123456987654", 6), "234561876549");
console.log(revrot("123456987653", 6), "234561356789");
console.log(revrot("66443875", 4), "44668753");
console.log(revrot("66443875", 8), "64438756");
console.log(revrot("664438769", 8), "67834466");
console.log(revrot("123456779", 8), "23456771");
console.log(revrot("", 8), "");
console.log(revrot("123456779", 0), "");
console.log(revrot("563000655734469485", 4), "0365065073456944");

// Help the bookseller ! (6 kyu)

/* 
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. 
Each book has a code c of 3, 4, 5 or more characters. 
The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer 
n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to 
each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 
114 the sum corresponding to "BKWRK" and "BTSQZ", 
50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

Note:
In the result codes and their values are in the same order as in M.
*/

const stockList = (listOfArt, listOfCat) => {
	if (listOfArt.length === 0 || listOfCat.length === 0) {
		return ''
	}
	let resultStr = '';
	for (let i = 0; i < listOfCat.length; i++) {
		const elem1 = listOfCat[i];
		let sum = 0;
		for (let k = 0; k < listOfArt.length; k++) {
			const elem2 = listOfArt[k];
			if (elem1 === elem2[0]) {
				sum += parseInt(elem2.match(/\d/g).join(''), 10)
			}
		}
		elem1 === listOfCat[listOfCat.length - 1] ? resultStr += `(${elem1} : ${sum})` : resultStr += `(${elem1} : ${sum}) - `;
	}
	return resultStr;
}

b1 = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
c1 = ["A", "B"];
console.log(stockList(b1, c1), "(A : 200) - (B : 1140)");

b2 = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c2 = ["A", "B", "C", "W"]
console.log(stockList(b2, c2), "(A : 0) - (B : 114) - (C : 70) - (W : 0)")

// Good vs Evil (6 kyu)

/* 
Description
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, 
if you add up the worth of the side of good and compare it with the worth of the side of evil, 
the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, 
followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. 
Each parameter will be a string of multiple integers separated by a single space. 
Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, 
"Battle Result: Evil eradicates all trace of Good" if evil wins, 
or "Battle Result: No victor on this battle field" if it ends in a tie.
*/

const goodWorth = [
	1, // Hobbits
	2, // Men
	3, // Elves
	3, // Dwarves
	4, // Eagles
	10, // Wizards
]

const evilWorth = [
	1, // Orcs
	2, // Men
	2, // Wargs
	2, // Goblins
	3, // Uruk Hai
	5, // Trolls
	10, // Wizards
]

const calculateWorth = (points, force) =>
	points
		.split(' ')
		.reduce(
			(total, value, index) =>
				force === 'good'
					? Number(total) + goodWorth[index] * Number(value)
					: Number(total) + evilWorth[index] * Number(value),
			0
		)

const goodVsEvil = (good, evil) => {
	const goodTotalWorth = calculateWorth(good, 'good')
	const evilTotalWorth = calculateWorth(evil, 'evil')

	if (evilTotalWorth > goodTotalWorth)
		return 'Battle Result: Evil eradicates all trace of Good'
	else if (goodTotalWorth > evilTotalWorth)
		return 'Battle Result: Good triumphs over Evil'
	else return 'Battle Result: No victor on this battle field'
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');

// Make the Deadfish Swim (6 kyu)

/* 
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ] */

const parse = (data) => {
	let value = 0;
	const result = [];
	for (let i = 0; i < data.length; i++) {
		const letter = data[i];

		switch (letter) {
			case 'i':
				value++;
				break;
			case 'd':
				value--;
				break;
			case 's':
				value = value ** 2;
				break;
			case 'o':
				result.push(value);
				break;

			default:
				break;
		}
	}
	return result;
}

console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64]);

// Sums of Parts (6 kyu)

/* 
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter 
a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Notes
Take a look at performance: some lists have thousands of elements.
Please ask before translating.
*/

const partsSums = (ls) => {
	let sum = ls.reduce((acc, item) => acc + item, 0);
	const newArr = [];
	newArr.push(sum);
	for (let val of ls) {
		sum = sum - val;
		newArr.push(sum);
	}
	return newArr;
}

console.log(partsSums([], [0]));
console.log(partsSums([0, 1, 3, 6, 10], [20, 20, 19, 16, 10, 0]));
console.log(partsSums([1, 2, 3, 4, 5, 6], [21, 20, 18, 15, 11, 6, 0]));
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358],
	[10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]));

// Data Reverse (6 kyu)

/* 
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/

const dataReverse = (data) => {
	const newData = [];
	for (let i = 0; i < data.length; i += 8) {
		newData.unshift(...data.slice(i, i + 8));
	}
	return newData;
}

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(dataReverse(data1), data2);
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
console.log(dataReverse(data3), data4);

// Backspaces in string (6 kyu)

/* 
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

const cleanString = (s) => {
	const result = [];
	for (const symbol of s) {
		if (symbol === "#") {
			result.pop();
		} else {
			result.push(symbol);
		}
	}
	return result.join("");
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');

// Strip Comments (4 kyu)

/* 
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

const solution1 = (input, markers) => {
	const inputArr = input.split('\n');
	for (let i in markers) {
		for (let j in inputArr) {
			const index = inputArr[j].indexOf(markers[i]);
			if (index >= 0) {
				inputArr[j] = inputArr[j].substring(0, index).trim();
			}
		}
	}
	return inputArr.join('\n');
};

console.log(solution1("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]), "apples, plums\npears\noranges");
console.log(solution1("Q @b\nu\ne -e f g", ["@", "-"]), "Q\nu\ne");

// Valid Phone Number (6 kyu)

/* 
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/

const validPhoneNumber = (phoneNumber) => {
	// return phoneNumber[0] === "(" &&
	// 	phoneNumber[4] === ")" &&
	// 	phoneNumber[5] === " " &&
	// 	phoneNumber[9] === "-" &&
	// 	phoneNumber.substring(1, 4).length === 3 &&
	// 	phoneNumber.substring(6, 9).length === 3 &&
	// 	phoneNumber.substring(10).length === 4;

	const regExp = /^\(\d{3}\) \d{3}-\d{4}$/gm;
	return regExp.test(phoneNumber);
}

console.log(validPhoneNumber("(123) 456-7890"), true);
console.log(validPhoneNumber("(1111)555 2345"), false);
console.log(validPhoneNumber("(098) 123 4567"), false);

// Fix string case (7 kyu)

/* 
In this Kata, you will be given a string that may have mixed uppercase and 
lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

const solve1 = (s) => {
	const upper = s.split('').filter(item => item.match(/[A-Z]/)).length;
	const lower = s.split('').filter(item => item.match(/[a-z]/)).length;

	return lower >= upper ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve1("code"), "code");
console.log(solve1("CODe"), "CODE");
console.log(solve1("COde"), "code");
console.log(solve1("Code"), "code");

// Count the Digit (7 kyu)

/* 
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.
*/

const nbDig = (n, d) => {
	let res = 0;

	for (let i = 0; i <= n; i++) {
		(i ** 2).toString()
			.split('')
			.forEach(item => parseInt(item, 10) === d ? res += 1 : null);
	}

	return res;
}

console.log(nbDig(5750, 0), 4700, "n = 5750, d = 0");
console.log(nbDig(11011, 2), 9481, "n = 11011, d = 2");
console.log(nbDig(12224, 8), 7733, "n = 12224, d = 8");
console.log(nbDig(11549, 1), 11905, "n = 11549, d = 1");

// Meeting (6 kyu)

/* 
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. 
Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
*/

const meeting = (s) => {
	let newString = '';

	const newS = s.split(';')
		.map(item => item.toUpperCase()
			.split(':')
			.reverse()
			.join(', '))
		.sort()
		.forEach(item => {
			const newStrSplit = item.split(', ');
			newString += `(${newStrSplit[0]}, ${newStrSplit[1]})`
		});

	return newString;
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"),
	"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
console.log(meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"),
	"(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
console.log(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"),
	"(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");

// Fold an array (6 kyu)

/* 
In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
							5/           5|         5\          
						  4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

const foldArray = (array, runs) => {
	const newArr = [...array];
	const resultArray = [];

	while (newArr.length) {
		resultArray.push(newArr.pop() + (newArr.shift() || 0));
	}

	return runs - 1 ? foldArray(resultArray, runs - 1) : resultArray;
}

console.log(foldArray([1, 2, 3, 4, 5], 3), [15]);
console.log(foldArray([-9, 9, -8, 8, 66, 23], 1), [14, 75, 0]);

// Flatten and sort an array (7 kyu)

/* 
Challenge:
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

const flattenAndSorts = (array) => [].concat(...array).sort((a, b) => a - b)

console.log(flattenAndSorts([]), []);
console.log(flattenAndSorts([[], []]), []);
console.log(flattenAndSorts([[], [1]]), [1]);
console.log(flattenAndSorts([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSorts([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

// Sum of angles (7 kyu)

/* 
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

const angle = (n) => {
	return (n - 2) * 180;
}

console.log(angle(3), 180);
console.log(angle(4), 360);

// +1 Array (6 kyu)

/* 
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

const upArray = (arr) => {
	if (!arr.length) return null;

	const newArr = [...arr];
	let carry = 1;

	for (let i = newArr.length - 1; i > -1; --i) {
		if (newArr[i] < 0 || newArr[i] > 9) return null;

		if (newArr[i] + carry === 10) {
			newArr[i] = 0;
			continue;
		}
		if (carry === 1) {
			newArr[i] += carry;
			carry--;
		}
	}

	if (carry) newArr.unshift(carry)
	return newArr;
}

console.log(upArray([2, 3, 9]), [2, 4, 0]);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([1, -9]), null);

// Highest Rank Number in an Array (6 kyu)

/* 
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

const highestRank = (arr) => {
	const obj = {};

	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
	}

	let countMax = 0;
	let valueMax = 0;

	for (elem in obj) {
		if (countMax <= obj[elem]) {
			valueMax = Math.max(elem, valueMax)
			countMax = Math.max(obj[elem], countMax);
		}
	}

	return valueMax;
}

const arr123 = [12, 10, 8, 12, 7, 6, 4, 10, 12];
const arr234 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
const arr345 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
const arr456 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
console.log(highestRank(arr123), 12);
console.log(highestRank(arr234), 12);
console.log(highestRank(arr345), 3);
console.log(highestRank(arr456), 3);

// Array Helpers (6 kyu)

/* 
This kata is designed to test your ability to extend the functionality of built-in classes. 
In this case, we want you to extend the built-in Array class with the following methods: 
square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Array.prototype.square = function () {
	const newArr = [];
	for (let i = 0; i < this.length; i++) {
		const elem = this[i];
		newArr.push(elem ** 2)
	}

	return newArr;
}

Array.prototype.cube = function () {
	const newArr = [];
	for (let i = 0; i < this.length; i++) {
		const elem = this[i];
		newArr.push(elem ** 3)
	}

	return newArr;
}

Array.prototype.sum = function () {
	let resultSum = 0;
	for (let i = 0; i < this.length; i++) {
		const elem = this[i];
		resultSum += elem;
	}

	return resultSum;
}

Array.prototype.average = function () {
	let resultSum = 0;
	if (this.length === 0) {
		return NaN;
	}
	for (let i = 0; i < this.length; i++) {
		const elem = this[i];
		resultSum += elem;
	}

	return resultSum / this.length;
}

Array.prototype.even = function () {
	const newArr = [];

	for (let i = 0; i < this.length; i++) {
		const elem = this[i];
		if (elem % 2 === 0) {
			newArr.push(elem);
		}
	}

	return newArr;
}

Array.prototype.odd = function () {
	const newArr = [];

	for (let i = 0; i < this.length; i++) {
		const elem = this[i];
		if (elem % 2 !== 0) {
			newArr.push(elem);
		}
	}

	return newArr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15, 'Wrong sum');
console.log(numbers.average(), 3, 'Wrong average');
console.log(numbers.even(), [2, 4], 'Wrong result for even()');
console.log(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');

// Reverse every other word in the string (6 kyu)

/* 
Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.
*/

const reverse = (str) => {
	return str.trim()
		.split(' ')
		.map((item, index) => index % 2 === 0 ? item : item.split('').reverse().join(''))
		.join(' ');
}

console.log(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp");
console.log(reverse("I really don't like reversing strings!"), "I yllaer don't ekil reversing !sgnirts");

// Length of missing array  (6 kyu)

/* 
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

const getLengthOfMissingArray = (arrayOfArrays) => {

	const lengthArrays = (arrayOfArrays || []).map(item => item ? item.length : 0).sort((a, b) => a - b)
	if (lengthArrays.includes(0)) {
		return 0;
	}

	for (let i = 0; i < lengthArrays.length; i++) {
		const elem = lengthArrays[i];
		if (elem + 1 !== lengthArrays[i + 1]) {
			return elem + 1;
		}
	}

	return 0;
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3);
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]), 5);
console.log(getLengthOfMissingArray([]), 0);

// Find the middle element (7 kyu)

/* 
As a part of this Kata, you need to create a function that when provided with a triplet, 
returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

const gimme = (triplet) => {
	const sorted = [...triplet].sort((a, b) => a - b);
	return triplet.indexOf(sorted[1]);
}

console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([2.1, 3.2, 1.4]), 0);
console.log(gimme([5.9, 10.4, 14.2]), 1);
console.log(gimme([-2, -3, -1]), 0);
console.log(gimme([-5, -10, -14]), 1);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(gimme([-5.2, -10.6, 14]), 0);

// Sorted? yes? no? how? (7 kyu)

/* 
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

const isSortedAndHow = (array) => {
	const arrSortAscending = [...array].sort((a, b) => a - b).toString();
	const arrSortDescending = [...array].sort((a, b) => b - a).toString();

	return array.toString() === arrSortAscending ? 'yes, ascending' :
		array.toString() === arrSortDescending ?
			'yes, descending' : 'no'

}

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');

// Thinkful - String Drills: Repeater (7 kyu)

/* 
Write a function named repeater() that takes two arguments (a string and a number), 
and returns a new string where the input string is repeated that many times.

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"
*/

const repeater1 = (string, n) => string.repeat(n);

console.log(repeater1('a', 5), 'aaaaa');
console.log(repeater1('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
console.log(repeater1('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ');

// Predict your age! (7 kyu)

/* 
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
	return Math.floor(Math.sqrt(age1 ** 2 + age2 ** 2 + age3 ** 2 + age4 ** 2 + age5 ** 2 + age6 ** 2 + age7 ** 2 + age8 ** 2) / 2)
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);

// Grouped by commas (6 kyu)

/* 
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal
representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647
*/

const groupByCommas = (n) => {
	let str = '';
	const arr = n.toString().split('').reverse().forEach((item, index) => {
		(index === 2 && n > 999) || (index === 5 && n > 999999) || (index === 8 && n > 999999999) ?
			str += item + ',' :
			str += item;
	})

	return str.split('').reverse().join('');
}

console.log(groupByCommas(1), '1');
console.log(groupByCommas(10), '10');
console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');
console.log(groupByCommas(10000), '10,000');
console.log(groupByCommas(100000), '100,000');
console.log(groupByCommas(1000000), '1,000,000');
console.log(groupByCommas(35235235), '35,235,235');

// New Cashier Does Not Know About Space or Shift (6 kyu)

/* 
All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/

const getOrder = (input) => {
	const menuItems = {
		1: 'Burger',
		2: 'Fries',
		3: 'Chicken',
		4: 'Pizza',
		5: 'Sandwich',
		6: 'Onionrings',
		7: 'Milkshake',
		8: 'Coke'
	}
	let resultMenu = '';

	for (let item in menuItems) {
		const regExp = new RegExp(menuItems[item], 'gi');
		const arrayItems = input.match(regExp);
		if (arrayItems !== null) {
			const resultSubstr = arrayItems.map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
			resultMenu += `${resultSubstr} `;
		}
	}

	return resultMenu.trim();
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
	"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
	"Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");

// Most digits (7 kyu)

/* 
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

const findLongest = (array) => array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));

console.log(findLongest([1, 10, 100]), 100)
console.log(findLongest([9000, 8, 800]), 9000)
console.log(findLongest([8, 900, 500]), 900)

// Two Joggers (6 kyu)

/* 
Description
Bob and Charles are meeting for their weekly jogging tour. 
They both start at the same spot called "Start" and they each run a different lap, 
which may (or may not) vary in length. 
Since they know each other for a long time already, they both run at the exact same speed.

Illustration
Example where Charles (dashed line) runs a shorter lap than Bob:

Example laps

Task
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, 
finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)

The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run

Examples:

nbrOfLaps(5, 3); // returns [3, 5]
nbrOfLaps(4, 6); // returns [3, 2]
*/

const nbrOfLaps = (x, y) => {
	if (x === y) {
		return [1, 1];
	}

	function gcd(n, m) {
		return m == 0 ? n : gcd(m, n % m);
	}

	function nok(n, m) {
		return n * m / gcd(n, m);
	}

	return [nok(x, y) / x, nok(x, y) / y]
}

console.log(nbrOfLaps(5, 3), [3, 5]);
console.log(nbrOfLaps(4, 6), [3, 2]);
console.log(nbrOfLaps(5, 5), [1, 1]);

// Unary function chainer (6 kyu)

/* 
Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))
*/

const chained = (functions) => (x) => functions.reduce((acc, item) => item(acc), x)

const f1 = (x) => x * 2;
const f2 = (x) => x + 2;
const f3 = (x) => Math.pow(x, 2);

const f4 = (x) => x.split("").concat().reverse().join("").split(" ");
const f5 = (xs) => xs.concat().reverse();
const f6 = (xs) => xs.join("_");

console.log(chained([f1, f2, f3])(0), 4);
console.log(chained([f1, f2, f3])(2), 36);
console.log(chained([f3, f2, f1])(2), 12);
console.log(chained([f4, f5, f6])("lorem ipsum"), "merol_muspi");

// Srot the inner ctonnet in dsnnieedcg oredr (6 kyu)

/* 
You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
Words are made up of lowercase letters.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

const sortTheInnerContent = (words) => words.split(' ')
	.map(item =>
		item.length !== 1 ?
			item[0] +
			item.slice(1, -1)
				.split('')
				.sort()
				.reverse()
				.join('') +
			item[item.length - 1] :
			item)
	.join(' ')

console.log(sortTheInnerContent("sort o the inner content in descending order"), "srot the inner ctonnet in dsnnieedcg oredr");
console.log(sortTheInnerContent("wait for me"), "wiat for me");
console.log(sortTheInnerContent("this kata is easy"), "tihs ktaa is esay");

// String array duplicates (6 kyu)

/* 
In this Kata, you will be given an array of strings and your task is to remove 
all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:
*/

const dup = (s) => {
	const word = [];
	const resultArr = [];

	s.map((item) => {
		item.split('')
			.map((value, index, arr) => {
				if (arr[index] !== arr[index + 1]) {
					word.push(arr[index]);
				}

				if (index === arr.length - 1) {
					resultArr.push(word.join(''));
					word.length = 0;
				}
			});
	});

	return resultArr;
};

// const dup = s => s.map(w => w.split('').filter((c, i, arr) => c !== arr[i - 1]).join(''));

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]), ['codewars', 'picaniny', 'hubububo']);
console.log(dup(["abracadabra", "allottee", "assessee"]), ['abracadabra', 'alote', 'asese']);
console.log(dup(["kelless", "keenness"]), ['keles', 'kenes']);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), ['Wolomolo', 'flodoromonlighters', 'chuchchi']);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), ['adanac', 'sones', 'toles', 'pele']);
console.log(dup(["callalloo", "feelless", "heelless"]), ['calalo', 'feles', 'heles']);
console.log(dup(["putteellinen", "keenness"]), ['putelinen', 'kenes']);
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]), ['keles', 'voradospulen', 'achcha']);

// String average (6 kyu)

/* 
You are given a string of numbers between 0-9. 
Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

const averageString = (str) => {
	const num = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }
	const word = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }
	if (!str.length) return 'n/a';
	let n = 0;
	const length = str.split(' ').length;
	const arr = str.split(' ')
		.map(item => num.hasOwnProperty(item) ? item = num[item] : n = 1)
		.reduce((a, b) => a + b, 0);

	return n === 0 ? word[Math.floor(arr / length)] : 'n/a';
}

console.log(averageString("zero nine five two"), "four");
console.log(averageString("four six two three"), "three");
console.log(averageString("one two three four five"), "three");
console.log(averageString("five four"), "four");
console.log(averageString("zero zero zero zero zero"), "zero");
console.log(averageString("one one eight one"), "two");
console.log(averageString(""), "n/a");

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer (6 kyu)

/* 
You will be given a sequence of objects representing data about developers who have 
signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. 
In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
*/

const findSenior = (list) => {
	const ageList = [];
	list.forEach(item => {
		ageList.push(item.age);
	});
	const maxAge = Math.max(...ageList);

	return list.filter(item => item.age === maxAge);
}

const list1 = [
	{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
	{ firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
	{ firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
	{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

const answer1 = [
	{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
	{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];


const list2 = [
	{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
	{ firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
	{ firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
];

const answer2 = [
	{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
];


const list3 = [
	{ firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
	{ firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 21, language: 'Clojure' },
	{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
	{ firstName: 'Nikola', lastName: 'H.', country: 'Serbia', continent: 'Europe', age: 29, language: 'Python' },
	{ firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Europe', age: 28, language: 'Java' },
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' },
	{ firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Europe', age: 29, language: 'Clojure' },
	{ firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
];

const answer3 = [
	{ firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' },
	{ firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
];


console.log(findSenior(list1), answer1);
console.log(findSenior(list2), answer2);
console.log(findSenior(list3), answer3);

// Kebabize (6 kyu)

/* 
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

const kebabize = (str) => {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		const elem = str[i];
		if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
			newStr += elem;
		}
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 && i === 0) {
			newStr += elem.toLowerCase();
		} else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			newStr += '-' + elem.toLowerCase();
		}
	}

	return newStr;
}

console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');

// Autocomplete! Yay! (6 kyu)

/* 
It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and 
return the values from the dictionary that start with the input string. 
If there are more than 5 matches, restrict your output to the first 5 results. 
If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
For this kata, the dictionary will always be a valid array of strings. 
Please return all results in the order given in the dictionary, even if they're not always alphabetical. 
The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. 
However, they should return as "Apple" and "airport" in their original cases.
*/

const autocomplete = (input, dictionary) => {
	const newDictionary = [];
	const resultInput = input.match(/[a-zA-Z]/g).join('');
	for (let i = 0; i < dictionary.length; i++) {
		const elem = dictionary[i];
		if (elem.toLowerCase().indexOf(resultInput.toLowerCase()) === 0) {
			if (newDictionary.length < 5)
				newDictionary.push(elem);
		}
	}

	return newDictionary;
}

console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']), ['airplane', 'airport'])
console.log(autocomplete('n~!@#$%^&*()_+1234567890ope', ['Nopesville', 'Green', 'Narnia']), ['Nopesville'])

// Format words into a sentence (6 kyu)

/* 
Complete the method so that it formats the words into a single comma separated value. 
The last word should be separated by the word 'and' instead of a comma. 
The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

const formatWords = (words) => {
	if (!words) return '';
	words = words.filter((word) => word.length);
	let stringWords = '';
	for (let i = 0; i < words.length; i++) {
		if (i === words.length - 1 && i > 0) {
			stringWords += ` and `;
		} else if (i > 0) {
			stringWords += `, `;
		}
		stringWords += words[i];
	}
	return stringWords;
}

console.log(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'");
console.log(formatWords(['one']), 'one', "formatWords(['one']) should return 'one'");
console.log(formatWords(['one', '', 'three']), 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'");
console.log(formatWords(['', '', 'three']), 'three', "formatWords(['', '', 'three']) should return 'three'");
console.log(formatWords(['one', 'two', '']), 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'");
console.log(formatWords([]), '', 'formatWords([]) should return ""');
console.log(formatWords(null), '', 'formatWords(null) should return ""');
console.log(formatWords(['']), '', 'formatWords([""]) should return ""');

// Lottery Ticket (6 kyu)

/* 
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. 
Each subarray has both a string and a number within it. 
If the character code of any of the characters in the string matches the number, you get a mini win. 
Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). 
If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

const bingo = (ticket, win) => {
	let count = 0;
	ticket.forEach(item => {
		let [lineCode, value] = item;
		lineCode = [...new Set(lineCode.split(''))].join('');

		for (let i = 0; i < lineCode.length; i++) {
			lineCode.charCodeAt(i) === value ? count++ : null;
		}
	})

	return count >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');

// Count letters in string (6 kyu)

/* 
In this kata, you've to count lowercase letters in a given string and 
return the letter count in a hash with 'letter' as key and count as 'value'. 
The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
*/

const letterCount = (s) => {
	const resultHash = {};
	s.split('').sort().map(item => resultHash[item] = resultHash[item] + 1 || 1);

	return resultHash;
}

console.log(letterCount("codewars"), { "a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1 });
console.log(letterCount("activity"), { "a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1 });
console.log(letterCount("arithmetics"), { "a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2 });
console.log(letterCount("traveller"), { "a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1 });
console.log(letterCount("daydreamer"), { "a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1 });

// Prefill an Array (6 kyu)

/* 
Create the function prefill that returns an array of n elements that all have the same value v. 
See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted 
string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, 
where you replace n for the actual value passed to the function.

Code Examples

prefill(3,1) --> [1,1,1]

prefill(2,"abc") --> ['abc','abc']

prefill("1", 1) --> [1]

prefill(3, prefill(2,'2d'))
--> [['2d','2d'],['2d','2d'],['2d','2d']]

prefill("xyz", 1)
--> throws TypeError with message "xyz is invalid"
*/

const prefill = (n, v) => {
	if (n === 0 || n === '0') return [];

	if (n < 0 || !Number.isInteger(n)) {
		let typeError = new TypeError();
		typeError.name = "TypeError";
		typeError.message = n + " is invalid";
		throw typeError
	}

	return new Array(n).fill(v);

	// if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
	// return +n ? Array(n).fill(v) : [];
}

console.log(prefill(3, 1), [1, 1, 1]);
console.log(prefill(2, 'abc'), ['abc', 'abc']);
//console.log(prefill('1', 1), [1]);
console.log(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
//console.log(prefill('xyz', 1));

// Twisted Sum (6 kyu)

/* 
Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/

const twistedSum = (n) => {
	let result = 0;
	for (let i = 1; i <= n; i++) {
		result += i.toString().split('').reduce((acc, item) => acc + parseInt(item, 10), 0)
	}

	return result;
}

console.log(twistedSum(3), 6, "n = 3");
console.log(twistedSum(10), 46, "n = 10");
console.log(twistedSum(11), 48, "n = 11");
console.log(twistedSum(12), 51, "n = 12");

// Where is my parent!?(cry) (6 kyu)

/* 
Mothers arranged a dance party for the children in school. 
At that party, there are only mothers and their children. 
All are having great fun on the dance floor when suddenly all the lights went out. 
It's a dark night and no one can see each other. 
But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. 
"A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, 
i.e. "aAbaBb" => "AaaBbb".
*/

const findChildren = (dancingBrigade) => {
	let newString = '';
	dancingBrigade = dancingBrigade.split('')
		.sort()
		.join('')
		.match(/[A-Z]/g)
		.forEach(item => {
			let regExp = new RegExp(item.toLowerCase(), 'g');
			newString += item + dancingBrigade.match(regExp).join('');
		})
	return newString;
};

console.log(findChildren("beeeEBb"), "BbbEeee");
console.log(findChildren("uwwWUueEe"), "EeeUuuWww");

// Sum two arrays (6 kyu)

/* 
Your task is to create a function called addArrays, 
which takes two arrays consisting of integers, 
and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, 
it would equal '3' + '2' + '9' converted to an integer for this kata, 
meaning it would equal 329. The output should be an array of the sum in a similar fashion to the input (for example, 
if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. 
In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
*/

const addArrays = (array1, array2) => {
	if (!array1.length && !array2.length) return [];
	if (!array1.length || !array2.length) return array1.length > array2.length ? array1 : array2;

	const num1 = parseInt(array1.join(''));
	const num2 = parseInt(array2.join(''));
	const result = num1 + num2;
	const sign = result > 0 ? 1 : -1;

	return `${Math.abs(result)}`.split('').map((char, idx) => idx ? char * 1 : char * sign);

}

console.log(addArrays([6, 7], [6, 7]), [1, 3, 4]);
console.log(addArrays([4, 7, 3], [1, 2, 3]), [5, 9, 6]);
console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]), [-3, 9, 6, 2]);

// zipWith (6 kyu)

/* 
Implement zipWith
zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.
Input validation
Assume all input is valid.
*/

const zipWith = (fn, a0, a1) => {
	const minLength = Math.min(a0.length, a1.length);
	const result = [];
	for (let i = 0; i < minLength; i += 1) {
		result.push(fn(a0[i], a1[i]));
	}

	return result;
}

const pluss = (a, b) => a + b;
console.log(zipWith(pluss, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1]), [6, 6, 6, 6, 6]);
console.log(zipWith(pluss, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]), [6, 6, 6, 6, 6, 6]);
console.log(zipWith(pluss, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2]), [6, 6, 6, 6, 6]);
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]), [1, 10, 100, 1000]);
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]), [4, 7, 7, 4, 7, 7]);
console.log(zipWith(function (a, b) { return a + b; }, [0, 1, 2, 3], [0, 1, 2, 3]), [0, 2, 4, 6]);
console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]), [0, 2, 4, 6]);

// Sort Arrays (Ignoring Case) (6 kyu)

/* 
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

const sortme = (names) => {
	names.sort(function (s1, s2) {
		const a = s1.toLowerCase();
		const b = s2.toLowerCase();
		return a === b ? 0 : a > b ? 1 : -1;
	})

	return names;
}

console.log(sortme(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"]);
console.log(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"]);
console.log(sortme(["CodeWars"]), ["CodeWars"]);
console.log(sortme([]), []);

// Lowest product of 4 consecutive numbers (6 kyu)

/* 
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

const lowestProduct = (input) => {
	if (input.length < 4) {
		return "Number is too small";
	}

	const resultArr = [];
	const inputArr = input.split('').map(Number);

	for (let i = 0; i < inputArr.length - 3; i++) {
		const sumSliceInput = inputArr.slice(i, i + 4).reduce((acc, item) => acc * item, 1);
		resultArr.push(sumSliceInput);

	}

	return Math.min(...resultArr);
}

console.log(lowestProduct("123456789"), 24);
console.log(lowestProduct("234567899"), 120);
console.log(lowestProduct("2345611117899"), 1);
console.log(lowestProduct("333"), "Number is too small");
console.log(lowestProduct("1234111"), 4, "Numbers should be consecutives");

// A Chain adding function (5 kyu)

/* 
We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.

A single call should be equal to the number passed in.

add(1); // == 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.
*/

const add123 = (n) => {
	const func = (x) => add123(n + x);
	func.valueOf = () => n;

	return func;
}

console.log(add123(1)(2), 3);
console.log(add123(1)(2)(3), 6);
console.log(add123(1)(2)(3)(4), 10);
console.log(add123(1)(2)(3)(4)(5), 15);
console.log(add123(1)(2) + 3, 6);

// Character frequency (6 kyu)

/* 
Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. 
This count excludes numbers, spaces and all punctuation marks. 
Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

The function should return a list of tuples (in Python and Haskell) 
or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:

letterFrequency('aaAabb dddDD hhcc')
will return

[['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
Letter frequency analysis is often used to analyse simple substitution cipher texts like those created by the Caesar cipher.
*/

const letterFrequency = (text) => {
	let newText = text.match(/[A-Z]/gi)
	if (newText === null) return []

	newText = newText.join('').toLowerCase();

	const objText = [...newText].reduce((acc, cur) => {
		acc[cur] = (acc[cur] || 0) + 1;
		return acc;
	}, {})


	return Object.entries(objText).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

}

console.log(letterFrequency('wklv lv d vhfuhw phvvdjh'), [['v', 5], ['h', 4], ['d', 2], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['p', 1], ['u', 1]]);
console.log(letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day."), [["i", 7], ["a", 5], ["e", 5], ["n", 5], ["g", 4], ["s", 4], ["m", 3], ["o", 3], ["t", 3], ["d", 2], ["l", 2], ["r", 2], ["c", 1], ["f", 1], ["h", 1], ["k", 1], ["u", 1], ["y", 1]]);
console.log(letterFrequency('IWT LDGAS XH HIXAA P LTXGS EAPRT, STHEXIT BN TUUDGIH ID BPZT RATPG PCS ETGUTRI HTCHT DU XI.'), [["t", 12], ["i", 7], ["h", 6], ["a", 5], ["g", 5], ["p", 5], ["x", 5], ["d", 4], ["s", 4], ["u", 4], ["e", 3], ["r", 3], ["b", 2], ["c", 2], ["l", 2], ["n", 1], ["w", 1], ["z", 1]]);

// Not very secure (5 kyu)

/* 
In this example you have to validate if a user input string is alphanumeric. 
The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

const alphanumeric = (string) => /^\w+$/gi.test(string);

console.log(alphanumeric("Mazinkaiser"), true)
console.log(alphanumeric("hello world_"), false)
console.log(alphanumeric("PassW0rd"), true)
console.log(alphanumeric("     "), false)

// Convert PascalCase string into snake_case (5 kyu)

/* 
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

const toUnderscore = (string) => {
	const letterUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let newStr = '';
	string = string.toString();
	for (let i = 0; i < string.length; i++) {
		const elem = string[i];
		i === 0 ? newStr += elem.toLowerCase() :
			letterUpperCase.includes(elem) ? newStr += `_${elem.toLowerCase()}` :
				newStr += elem;
	}

	return newStr;
}

console.log(toUnderscore("TestController"), "test_controller");
console.log(toUnderscore("MoviesAndBooks"), "movies_and_books");
console.log(toUnderscore("App7Test"), "app7_test");
console.log(toUnderscore(1), "1");

// Consonant value (6 kyu)

/* 
Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. 
The highest is 26.
solve("zodiacs") = 26
For the word "strength", solve("strength") = 57
-- The consonant substrings are:
"str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

const solvee = (s) => {
	const letterLowerCase = 'abcdefghijklmnopqrstuvwxyz';
	const consonantSubArr = s.match(/[^aeiou]+/g);
	const resultValue = [];

	consonantSubArr.forEach(item => {
		const sumSub = item.split('').reduce((acc, i) => acc + letterLowerCase.indexOf(i) + 1, 0);
		resultValue.push(sumSub);
	});

	return Math.max(...resultValue);
};

console.log(solvee("zodiac"), 26);
console.log(solvee("chruschtschov"), 80);
console.log(solvee("khrushchev"), 38);
console.log(solvee("strength"), 57);
console.log(solvee("catchphrase"), 73);
console.log(solvee("twelfthstreet"), 103);
console.log(solvee("mischtschenkoana"), 80);

// The Vowel Code (6 kyu)

/* 
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". 
There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];
const v4w2ls = ['1', '2', '3', '4', '5'];

const encode = str => [...str].map(e => vowels.includes(e) ? e = vowels.indexOf(e) + 1 : e).join('');
const decode = str => [...str].map(e => v4w2ls.includes(e) ? e = vowels[v4w2ls.indexOf(e)] : e).join('');

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');

// Dashatize it (6 kyu)

/* 
Given a variable n,
If n is an integer, Return a string with dash'-'marks before and after each odd integer, 
but do not begin or end the string with a dash mark. 
If n is negative, then the negative sign should be removed.
If n is not an integer, return an empty value.
Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

const dashatize = (num) => {
	if (isNaN(num)) return 'NaN';

	return (Math.abs(num).toString().split('').map((n, i, a) => {
		let isFirstLetter = i == 0;
		let isOdd = Boolean(+n % 2);
		let isPrevOdd = Boolean(+a[i - 1] % 2);
		return isFirstLetter ? n : (isOdd || isPrevOdd ? `-${n}` : `${n}`);
	}
	).join(''));

	// return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
}

console.log(dashatize(274), "2-7-4", "Should return 2-7-4");
console.log(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
console.log(dashatize(86320), "86-3-20", "Should return 86-3-20");
console.log(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
console.log(dashatize(NaN), "NaN", "Should return NaN");
console.log(dashatize(0), "0", "Should return 0");
console.log(dashatize(-1), "1", "Should return 1");
console.log(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");

// Decipher this! (6 kyu)

/* 
You are given a secret message you need to decipher. 
Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

const decipherThis = (str) => {
	return str = str.split(' ').map((item, index, array) => {
		const num = String.fromCharCode(parseInt(item, 10));
		const word = (item.match(/[a-zA-Z]/gi) || []).join('');
		const sliceWord = word.slice(1, word.length - 1);
		return word.length === 0 ? num :
			word.length === 1 ? num + word[0] :
				word.length === 2 ? num + word[1] + word[0] :
					num + word[word.length - 1] + sliceWord + word[0]
	}).join(' ');
};


console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
console.log(decipherThis('72olle 103doo 100ya'), 'Hello good day');
console.log(decipherThis('82yade 115te 103o'), 'Ready set go');

// extract file name (6 kyu)

/* 
You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end
Inputs:
1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2
Outputs
FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar
Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

The recommended way to solve it is using RegEx and specifically groups.
*/

class FileNameExtractor {
	static extractFileName(dirtyFileName) {
		dirtyFileName = dirtyFileName.split('_');
		dirtyFileName.shift();
		dirtyFileName = dirtyFileName.join('_');
		dirtyFileName = dirtyFileName.split('.');
		dirtyFileName.pop();
		dirtyFileName = dirtyFileName.join('.');
		return dirtyFileName
		// return dirtyFileName.slice(dirtyFileName.indexOf('_') + 1, dirtyFileName.lastIndexOf('.'));
	}
}

console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"), "FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"), "FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34"), "This_is_an_otherExample.mpg");
console.log(FileNameExtractor.extractFileName("1231231223123131_myFile.tar.gz2"), "myFile.tar");

// Sum consecutives (6 kyu)

/* 
You are given a list/array which contains only integers (positive and negative). 
Your job is to sum only the numbers that are the same and consecutive. 
The result should be one list.

Extra credit if you solve it in one line. 
You can assume there is never an empty list/array and there will always be an integer.
Same meaning: 1 == 1
1 != -1

#Examples:
[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""
[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/

const sumConsecutives = (s) => {
	const resArr = [];
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		count += s[i];
		if (s[i] !== s[i + 1]) {
			resArr.push(count);
			count = 0;
		}
	}

	return resArr;
}

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]), [1, 12, 0, 4, 6, 1], "on list [1,4,4,0,4,3,3,1] you get ")
console.log(sumConsecutives([1, 1, 7, 7, 3]), [2, 14, 3], "on list [1,1,7,7,3] you get ")
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]), [-10, 14, 12, 0], "on list [-5,-5,7,7,12,0] you get ")
console.log(sumConsecutives([3, 3, 3, 3, 1]), [12, 1], "on list [3,3,3,3,1] you get ")

// English beggars (6 kyu)

/*
Description:
Born a misinterpretation of this kata, your task here is pretty simple: 
given an array of values and an amount of beggars, 
you are supposed to return an array with the sum of what each beggar brings home, 
assuming they all take regular turns, from the first to the last.
For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], 
as the first one takes [1,3,5], the second collects [2,4].
The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], 
as they will respectively take [1,4], [2,5] and [3].
Also note that not all beggars have to take the same amount of "offers", 
meaning that the length of the array is not necessarily a multiple of n; 
length can be even shorter, in which case the last beggers will of course take nothing (0).
Note: in case you don't get why this kata is about English beggars, 
then you are not familiar on how religiously queues are taken in the kingdom ;)
*/

const beggars = (values, n) => {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr[i - 1] = 0;
		for (let j = i - 1; j < values.length;) {
			arr[i - 1] += values[j];
			j = j + n;
		}
	}
	return arr;
}

console.log(beggars([1, 2, 3, 4, 5], 1), [15]);
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
console.log(beggars([1, 2, 3, 4, 5], 0), []);

// Count the divisors of a number (7 kyu)

/* 
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

const getDivisorsCnt = (n) => {
	let output = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i == 0) {
			output += 1;
		}
	}
	return output;
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);

// String transformer (6 kyu)

/* 
Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

const stringTransformer = (str) => {
	const allLowerCase = 'abcdefghijklmnopqrstufvwxyz';

	return str.split('')
		.map(item => allLowerCase.indexOf(item) === -1 ? item.toLowerCase() : item.toUpperCase())
		.join('')
		.split(' ')
		.reverse()
		.join(' ')
}

console.log(stringTransformer('Example string'), 'STRING eXAMPLE');
console.log(stringTransformer('Gas Etp Myx   Ebxv   Ewtu'), 'STRING eXAMPLE');

// Arrh, grabscrab! (6 kyu)

/* 
Pirates have notorious difficulty with enunciating. 
They tend to blur all the letters together and scream at people.
At long last, we need a way to unscramble what these pirates are saying.
Write a function that will accept a jumble of letters as well as a dictionary, 
and output a list of words that the pirate might have meant.

For example:
grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.
Good luck!
*/

const sortStr = str => str.split('').sort().join('');
const grabscrab = (anagram, dictionary) => [...dictionary].filter(item => sortStr(item) === sortStr(anagram));

console.log(grabscrab("trisf", ["first"]), ["first"], "Should have found 'first'");
console.log(grabscrab("oob", ["bob", "baobab"]), [], "Should not have found anything");
console.log(grabscrab("ainstuomn", ["mountains", "hills", "mesa"]), ["mountains"], "Should have found 'mountains'");
console.log(grabscrab("oolp", ["donkey", "pool", "horse", "loop"]), ["pool", "loop"], "Should have found 'pool' and 'loop'");
console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]), ["sport", "ports"], "Should have found 'sport' and 'ports'");
console.log(grabscrab("ourf", ["one", "two", "three"]), [], "Should not have found anything");

// Sequences and Series (6 kyu)

/* 
Have a look at the following numbers.

 n | score
---+-------
 1 |  50
 2 |  150
 3 |  300
 4 |  500
 5 |  750
Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n) 
which returns the score for any positive number n.

Note Real test cases consists of 100 random cases where 1 <= n <= 10000
*/

const getScore = (n) => {
	let res = 0;
	for (let i = 0; i <= n; i++) {
		res += i * 50;
	}

	return res;
}

console.log(getScore(1), 50);
console.log(getScore(2), 150);
console.log(getScore(3), 300);
console.log(getScore(4), 500);
console.log(getScore(5), 750);
console.log(getScore(80), 162000);

// Numericals of a String (6 kyu)

/* 
You are given an input string.
For each symbol in the string if it's the first character occurrence, 
replace it with a '1', else replace it with the amount of times you've already seen it.
Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.
*/

const numericals = (s) => {
	const resAlf = {};
	let resStr = '';

	for (let i = 0; i < s.length; i++) {
		const elem = s[i];
		if (!resAlf.hasOwnProperty(elem)) {
			resAlf[elem] = 1;
			resStr += resAlf[elem];
		} else {
			resAlf[elem]++;
			resStr += resAlf[elem];
		}
	}

	return resStr;
}

console.log(numericals("Hello, World!"), "1112111121311");
console.log(numericals("Hello, World! It's me, JomoPipi!"), "11121111213112111131224132411122");
console.log(numericals("hello hello"), "11121122342");
console.log(numericals("Hello"), "11121");
console.log(numericals("aaaaaaaaaaaa"), "123456789101112");

// Validate Credit Card Number (6 kyu)

/* 
In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not
Here is the algorithm:
Double every other digit, scanning from right to left, starting from the second digit (from the right).
Another way to think about it is: if there are an even number of digits,
double every other digit starting with the first; if there are an odd number of digits, 
double every other digit starting with the second:
1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
891 ==> [8, 9*, 1] ==> [8, 18, 1]
If a resulting number is greater than 9, 
replace it with the sum of its own digits (which is the same as subtracting 9 from it):
[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

or:
[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
Sum all of the final digits:

[8, 9, 1] ==> 8 + 9 + 1 = 18
Finally, take that sum and divide it by 10. If the remainder equals zero, 
the original credit card number is valid.

18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
*/

const validate = (n) => {
	let sum = 0;

	while (n > 0) {
		const a = n % 10;
		n = Math.floor(n / 10);

		let b = (n % 10) * 2;
		n = Math.floor(n / 10);

		if (b > 9) {
			b -= 9;
		}

		sum += a + b;
	}

	return sum % 10 === 0;
}

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);

// Character with longest consecutive repetition (6 kyu)

/* 
For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition. 
If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
["", 0]

In JavaScript: If you use Array.sort in your solution, 
you might experience issues with the random tests as 
Array.sort is not stable in the Node.js version used by CodeWars. 
This is not a kata issue.

Happy coding! :)
*/

const longestRepetition = (s) => {
	const resArr = [];
	let resStr = s[0];

	if (s.length === 0) return ['', 0];

	for (let i = 1; i < s.length; i++) {
		const elem = s[i];
		if (i === s.length - 1 && elem === s[i - 1]) {
			resStr += elem;
			resArr.push(resStr);
		}
		else if (elem === s[i - 1]) {
			resStr += elem;
		} else if (elem !== s[i - 1]) {
			resArr.push(resStr);
			resStr = elem;

		}
	}
	const maxLength = Math.max(...resArr.map(item => item.length));
	return [resArr.filter(item => item.length === maxLength)[0][0], maxLength];
}

console.log(longestRepetition("aaaabb"), ["a", 4]);
console.log(longestRepetition("bbbaaabaaaa"), ["a", 4]);
console.log(longestRepetition("cbdeuuu900"), ["u", 3]);
console.log(longestRepetition("abbbbb"), ["b", 5]);
console.log(longestRepetition("aabb"), ["a", 2]);
console.log(longestRepetition(""), ["", 0]);
console.log(longestRepetition("ba"), ["b", 1]);

// Is Integer Array? (6 kyu)

/*
Description:
Write a function isIntArray with the below signature.
function isIntArray(arr) {
	 return true;
}
returns true if every element in an array is an integer. 
returns true if array is empty.
returns false for every other input.
*/

const isIntArray = (arr) => {
	return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

console.log(isIntArray([]), true, "Input: []");
console.log(isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");

// Are we alternate? (6 kyu)

/* 
Create a function isAlt() that accepts a string as an argument and 
validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/

const isAlt = (word) => {
	const vowelsWords = "aeiou";

	if (word.length === 1) return true;

	if (vowelsWords.includes(word[0])) {
		for (let i = 0; i < word.length; i += 2) {
			if (!vowelsWords.includes(word[i])) { return false; }
			else if (vowelsWords.includes(word[i + 1])) { return false; }
		}
		return true;
	} else if (word.length !== 1 && vowelsWords.includes(word[1])) {

		for (let i = 1; i < word.length; i += 2) {
			if (!vowelsWords.includes(word[i])) { return false; }
			else if (vowelsWords.includes(word[i + 1])) { return false; }
		}
		return true;
	}
	return false
}

console.log(isAlt("amazon"), true);
console.log(isAlt("apple"), false);
console.log(isAlt("banana"), true);

// Find the Mine! (6 kyu)

/* 
You've just discovered a square (NxN) field and you notice a warning sign. 
The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. 
The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, 
and the second element is the column index of the bomb location (both should be 0 based). 
All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
*/

const mineLocation = (f) => {
	let x = 0;
	let y = 0
	for (let i = 0; i < f.length; i++) {
		for (let j = 0; j < f[i].length; j++) {
			if (f[i][j] === 1) {
				x = i;
				y = j
			}
		}
	}
	return [x, y];
}

console.log(mineLocation([[1, 0], [0, 0]]), [0, 0]);
console.log(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]]), [0, 0]);
console.log(mineLocation([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]]), [2, 2]);

// Simple transposition (6 kyu)

/* 
Simple transposition is a basic and simple cryptography technique. 
We make 2 rows and put first a letter in the Row 1, the second in the Row 2, 
third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.

Complete the function that receives a string and encrypt it with this simple transposition.

Example
For example if the text to encrypt is: "Simple text", the 2 rows will be:

Row 1	S	m	l		e	t
Row 2	i	p	e	t	x	

So the result string will be: `"Sml etipetx"`
*/

const simpleTransposition = (text) => {
	const row1 = [];
	const row2 = [];

	for (let i = 0; i < text.length; i++) {
		const elem = text[i];
		i % 2 === 0 ? row1.push(elem) : row2.push(elem);
	}

	return [...row1, ...row2].join('');
}

console.log(simpleTransposition("Sample text"), "Sml etapetx");
console.log(simpleTransposition("Simple transposition"), "Sml rnpstoipetasoiin");
console.log(simpleTransposition("All that glitters is not gold"), "Alta ltesi o odl htgitr sntgl");
console.log(simpleTransposition("The better part of valor is discretion"), "Tebte ato ao sdsrtoh etrpr fvlri icein");
console.log(simpleTransposition("Conscience does make cowards of us all"), "Cncec osmk oad fu losinede aecwrso sal");
console.log(simpleTransposition("Imagination is more important than knowledge"), "Iaiaini oeipratta nwegmgnto smr motn hnkolde");

// Alphabetized (6 kyu)

/* 
The alphabetized kata
Re-order the characters of a string, so that they are concatenated into 
a new string in "case-insensitively-alphabetical-order-of-appearance" order. 
Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

const alphabetized = (s) => {
	const newS = s.match(/[a-zA-Z]/gi)
		.sort((a, b) => {
			a = a.toLowerCase();
			b = b.toLowerCase();
			return a === b ? 0 : a < b ? -1 : 1;
		})
		.join('');

	return newS;
}

console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy')

// Throwing Darts (6 kyu)

/* 
You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140
*/

const scoreThrows = (radii) => {
	let res = 0;

	if (radii.length === 0) return res;

	radii.forEach(item => {
		item < 5 ? res += 10 : (item >= 5 && item <= 10) ? res += 5 : res += 0;
	})

	if (radii.every(item => item < 5)) {
		res += 100;
	}

	return res
}

console.log(scoreThrows([1, 5, 11]), 15);
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100]), 0);
console.log(scoreThrows([1, 2, 3, 4]), 140);
console.log(scoreThrows([]), 0, 'Empty list');
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65);
console.log(scoreThrows([0, 5, 10, 10.5, 4.5]), 30);

// Coding Meetup #10 - Higher-Order Functions Series - Create usernames (6 kyu)

/* 
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
	 username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
	 username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. 
Please make sure that your function delivers the correct birth year irrespective of when it will be executed, 
for example it should also work correctly for a meetup organised in 10-years-time. 
The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.
*/

function addUsername(list) {
	const resultList = []
	list.forEach(item => {
		const firstName = item.firstName.toLowerCase();
		const lastName = item.lastName[0].toLowerCase();
		const year = (new Date().getFullYear() - item.age).toString();
		let username = `${firstName}${lastName}${year}`;
		item.username = username;
		resultList.push(item);
	})

	return resultList;
}

const list123 = [
	{ firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
	{ firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(addUsername(list123),
	[
		{ firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', username: 'emilyn1990' },
		{ firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', username: 'nore2000' }
	]);

// String Breakers (6 kyu)

/* 
I will give you an integer (N) and a string. Break the string up into as many 
substrings of N as you can without spaces. If there are leftover characters, include those as well.
Example: 
N = 5;
String = "This is an example string";
Return value:
Thisi
sanex
ample
strin
g
Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
*/

const stringBreakers = (n, string) => {
	string = string.replace(/\s/g, '');
	let arr = [];
	for (let i = 0; i < string.length; i += n) {
		arr.push(string.slice(i, i + n));
	}

	return arr.join('\n');
}

console.log(stringBreakers(5, 'This is an example string'), 'Thisi' + '\n' + 'sanex' + '\n' + 'ample' + '\n' + 'strin' + '\n' + 'g');

// More Zeros than Ones (6 kyu)

/* 
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) 
containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, 
so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
					True       True       False      True       False
						 
		  --> ['a','b','d']
	 
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

const moreZeros = (s) => {
	const newS = s.split('').filter((item, index) => {
		let zero = 0;
		let one = 0;
		s.charCodeAt(index).toString(2).split('').forEach(i => {
			i === '0' ? zero++ : one++;
		})
		return zero > one;
	});

	return [...new Set(newS)]
}

console.log(moreZeros('abcde'), ['a', 'b', 'd']);
console.log(moreZeros('Great job!'), ['a', ' ', 'b', '!']);
console.log(moreZeros('DIGEST'), ['D', 'I', 'E', 'T']);
console.log(moreZeros('abcdeabcde'), ['a', 'b', 'd'], 'Should not return duplicates values');

// Sorting on planet Twisted-3-7 (6 kyu)

/* 
There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference:
 #The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
There is no need for a precheck. The array will always be not null and will always contain at least one number.

You should not modify the input array!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

const sortTwisted37 = (array) => {
	const change = (val) => {
		let result = val.toString().split('');
		for (let i = 0; i < result.length; i++) {
			if (result[i] === '3') result[i] = '7';
			else if (result[i] === '7') result[i] = '3';
		}
		return Number(result.join(''));
	}

	const newArr = [...array].map(a => change(a));
	return newArr.sort((a, b) => a - b).map(a => change(a))
}

console.log(sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 7, 4, 5, 6, 3, 8, 9]);
console.log(sortTwisted37([12, 13, 14]), [12, 14, 13]);
console.log(sortTwisted37([9, 2, 4, 7, 3]), [2, 7, 4, 3, 9]);

// Largest pair sum in array (7 kyu)

/* 
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

const largestPairSum = (numbers) => {
	const newArr = numbers.sort((a, b) => b - a);
	return newArr[0] + newArr[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19], 42));
console.log(largestPairSum([-100, -29, -24, -19, 19], 0));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2], 10));

// Duplicate Arguments (6 kyu)

/* 
Complete the solution so that it returns true if it contains any duplicate argument values. 
Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/

const solution1234 = (...arguments) => {
	return [...new Set(arguments)].length != arguments.length
}

console.log(solution1234(1, 2, 3), false);
console.log(solution1234(1, 2, 3, 6, 5, 6), true);
console.log(solution1234('a', 'b', 'c', 'a'), true);
console.log(solution1234(1, 2, 3, 'a', 'b'), false);

// Number Format (6 kyu)

/* 
Format any integer provided into a string with "," (commas) in the correct places.

Example:

numberFormat(100000); // return '100,000'
numberFormat(5678545); // return '5,678,545'
numberFormat(-420902); // return '-420,902'
*/

const numberFormat = number => {
	const arrRes = []

	Math.abs(number).toString().split('').reverse().forEach((item, i) => {
		if (i % 3 === 0 && i === 0) {
			arrRes.push(item);
		} else if (i % 3 === 0) {
			arrRes.push(',');
			arrRes.push(item);
		} else {
			arrRes.push(item);
		}
	})
	return number < 0 ? '-' + arrRes.reverse().join('') : arrRes.reverse().join('')
};

console.log(numberFormat(100000), '100,000');
console.log(numberFormat(5678545), '5,678,545');
console.log(numberFormat(-420902), '-420,902');

// Single character palindromes (6 kyu)

/* 
You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. 
If the string is already a palindrome, return "OK". 
If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". 
The order of the characters should not be changed.

For example:

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
solve("abbaab") = "not possible". 
More examples in the test cases.

Good luck!
*/

const solve123 = (s) => {
	const palindrom = str => str.split('').reverse().join('');

	if (s === palindrom(s)) return "OK";

	for (let i = 0; i < s.length; i++) {
		const newStr = s.slice(0, i) + s.slice(i + 1, s.length)
		if (newStr === palindrom(newStr)) return "remove one";
	}

	return "not possible";
};

console.log(solve123("abba"), "OK");
console.log(solve123("abbaa"), "remove one");
console.log(solve123("abbaab"), "not possible");
console.log(solve123("madmam"), "remove one");
console.log(solve123("raydarm"), "not possible");
console.log(solve123("hannah"), "OK");

// Prime Factors (6 kyu)

/* 
Prime Factors
Inspired by one of Uncle Bob's TDD Kata

Write a function that generates factors for a given number.

The function takes an integer on the standard input and returns a list of integers (ObjC: 
array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

Examples
1  ==>  []
3  ==>  [3]
8  ==>  [2, 2, 2]
9  ==>  [3, 3]
12 ==>  [2, 2, 3]
*/

const prime_factors = n => {
	const factorsArr = [];

	for (let i = 2; i <= n; i++) {
		while (n % i === 0) {
			factorsArr.push(i);
			n /= i;
		}
	}

	return factorsArr;
}

console.log(prime_factors(1), []);
console.log(prime_factors(3), [3]);
console.log(prime_factors(8), [2, 2, 2]);
console.log(prime_factors(9), [3, 3]);
console.log(prime_factors(12), [2, 2, 3]);

// Find the nth Digit of a Number (7 kyu)

/* 
Complete the function that takes two numbers as input, 
num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1
*/

const findDigit = function (num, nth) {
	if (nth <= 0) return -1;
	let nums = ('' + Math.abs(num));
	return nums.slice(nums.length - nth, nums.length - nth + 1) * 1;
}

console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);

// Sum of prime-indexed elements (6 kyu)

/* 
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
The first element of the array is at index 0.
Good luck!
*/

const total = arr => {
	let count = 0;
	if (arr.length < 3) return 0;


	for (let i = 2; i < arr.length; i++) {
		let flag = true;

		for (let k = 2; k < i; k++) {
			if (i % k === 0) {
				flag = false;
			}
		}

		flag ? count += arr[i] : count += 0;
	}

	return count;
};

console.log(total([]), 0);
console.log(total([1, 2, 3, 4]), 7);
console.log(total([1, 2, 3, 4, 5, 6]), 13);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8]), 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 33);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 47);

// Adjacent repeated words in a string (6 kyu)

/* 
You know how sometimes you write the the same word twice in a sentence, 
but then don't notice that it happened? For example, you've been distracted for a second. 
Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, 
especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). 
The occurence of two or more equal words next after each other counts as one.

Examples
"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple apple dog cat"      -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3
*/

const countAdjacentPairs = searchString => {
	const arr = searchString.toLowerCase().split(' ');
	let count = 0;

	let i = 1;
	while (i < arr.length) {
		if (arr[i] === arr[i - 1]) {
			count++;
			i++;
			while (arr[i] === arr[i - 1]) {
				i++;
			}
		} else {
			i++;
		}
	}
	return count;
}

console.log(countAdjacentPairs(''), 0, 'An empty string should return 0.')
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple'), 1, "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')")
console.log(countAdjacentPairs('banana banana banana'), 1, "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')")
console.log(countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!'), 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')")
console.log(countAdjacentPairs('pineapple apple'), 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")

// Custom FizzBuzz Array (6 kyu)

/* 
Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

The function should be able to take up to 4 arguments:

The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
The 3rd and 4th arguments are integers, 3 and 5 by default.
Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

[ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
Examples
fizzBuzzCustom()[15]                         // returns 16
fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
fizzBuzzCustom('Hey', 'There')[25]         // returns 26
fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)
*/

const fizzBuzzCustom = (stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) => {
	const resArr = [];

	for (let i = 1; i <= 100; i++) {
		i % numOne === 0 & i % numTwo === 0 ? resArr.push(stringOne + stringTwo) :
			i % numOne === 0 ? resArr.push(stringOne) :
				i % numTwo === 0 ? resArr.push(stringTwo) :
					resArr.push(i);
	}

	return resArr;
};

console.log(fizzBuzzCustom('Hello', 'World', 2, 10));
console.log(fizzBuzzCustom('Hey', 'There'));
console.log(fizzBuzzCustom('Foo', 'Bar', 2, 3));

// Sorting by bits (6 kyu)

/* 
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.
E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2'
but the integer 10 is less than 12 so it comes first in sorted order.
Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.
Note: Your function should modify the input rather than creating a new array.
sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) // => [1, 8, 3, 3, 5, 6, 9, 7]
*/

const sortByBit = (arr) => {
	const coutingBit = (bit) => bit.toString(2).split('').filter(item => item === '1').length;

	return arr.sort((a, b) => coutingBit(a) === coutingBit(b) ? a - b : coutingBit(a) - coutingBit(b))
}

const a = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBit(a), [1, 8, 3, 3, 5, 6, 9, 7]);
const b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];
console.log(sortByBit(b), [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);

// N smallest elements in original order (6 kyu)

/* 
Your task is to write a function that does just what the title suggests 
(so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) 
with an array/list/vector of integers and the expected number n of smallest elements to return.

Also:
the number of elements to be returned cannot be higher than the array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
firstNSmallest([5,4,3,2,1],3) === [3,2,1]
firstNSmallest([1,2,3,4,1],3) === [1,2,1]
firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
firstNSmallest([1,2,3,4,5],0) === []
*/

const firstNSmallest = (array, n) => {
	const newSortArr = [...array].sort((a, b) => a - b);
	newSortArr.length = n;
	const resArr = [];

	for (let i = 0; i < array.length; i++) {
		if (newSortArr.includes(array[i])) {
			resArr.push(array[i]);
			const index = newSortArr.indexOf(array[i]);
			newSortArr.splice(index, 1)
		}
	}

	return resArr;
}

console.log(firstNSmallest([1, 2, 3, 4, 5], 3), [1, 2, 3]);
console.log(firstNSmallest([5, 4, 3, 2, 1], 3), [3, 2, 1]);
console.log(firstNSmallest([1, 2, 3, 1, 2], 3), [1, 2, 1]);
console.log(firstNSmallest([1, 2, 3, -4, 0], 3), [1, -4, 0]);//-4 0 1
console.log(firstNSmallest([1, 2, 3, 4, 5], 0), []);
console.log(firstNSmallest([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
console.log(firstNSmallest([1, 2, 3, 4, 2], 4), [1, 2, 3, 2]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 2), [2, 1]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 3), [2, 1, 2]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 4), [2, 1, 2, 2]);

// Sort the Gift Code (7 kyu)

/* 
Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. 
After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, 
but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, 
and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/

const sortGiftCode = (code) => code.split('').sort().join('');

console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');

// Simple Fun #152: Invite More Women? (7 kyu)

/* 
Task
King Arthur and his knights are having a New Years party. 
Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. 
He gave you a list of integers of all the party goers.

Arthur needs you to return true if he needs to invite more women or false if he is all set.

Input/Output
[input] integer array L ($a in PHP)
An array (guaranteed non-associative in PHP) representing the genders of the attendees, 
where -1 represents women and 1 represents men.

2 <= L.length <= 50

[output] a boolean value

true if Arthur need to invite more women, false otherwise.
*/

const inviteMoreWomen = (L) => L.filter(item => item === -1).length < L.filter(item => item === 1).length;
// const inviteMoreWomen = (L) => L.reduce((a,b) => a+b) > 0;


console.log(inviteMoreWomen([1, -1, 1]), true);
console.log(inviteMoreWomen([1, 1, 1]), true);
console.log(inviteMoreWomen([-1, -1, -1]), false);
console.log(inviteMoreWomen([1, -1]), false);

// Automorphic Number (Special Numbers Series #6) (7 kyu)

/* 
	Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .

autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .

autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .

autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .

autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .

autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .

autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6
*/

const automorphic = (n) => {
	const squareNumber = n ** 2;
	const newNumber = squareNumber.toString().slice(-n.toString().length);

	return n.toString() === newNumber ? "Automorphic" : "Not!!";
}

console.log(automorphic(1), "Automorphic");
console.log(automorphic(3), "Not!!");
console.log(automorphic(6), "Automorphic");
console.log(automorphic(9), "Not!!");
console.log(automorphic(25), "Automorphic");
console.log(automorphic(53), "Not!!");
console.log(automorphic(76), "Automorphic");
console.log(automorphic(95), "Not!!");
console.log(automorphic(625), "Automorphic");
console.log(automorphic(225), "Not!!");

// Simple remove duplicates (7 kyu)

/* 
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

const solve12 = (arr) => {
	let newArr = arr.slice().filter((item, i) => arr.indexOf(item) !== i)
	for (let i = 0; i < newArr.length; i++) {
		arr.splice(arr.indexOf(newArr[i]), 1)
	}
	return arr
}

console.log(solve12([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve12([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve12([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve12([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve12([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);

// max diff - easy (7 kyu)

/* 
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!
*/

const maxDiff = (list) => {
	if (list.length < 2) return 0;
	return Math.max(...list) - Math.min(...list);
};

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);

// Ordered Count of Characters (7 kyu)

/* 
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. 
For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = (text) => {
	const splitStr = text.split('');
	const str = [...new Set(splitStr)];
	let resArr = [];

	for (let i = 0; i < str.length; i += 1) {
		const count = splitStr.filter((item) => item === str[i]).length;
		resArr.push([str[i], count]);
	}

	return resArr;
}

console.log(orderedCount("abracadabra"), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
console.log(orderedCount("Code Wars"), [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]);
console.log(orderedCount("233312"), [['2', 2], ['3', 3], ['1', 1]]);

// *******************************

/* const roundRobin = (participants) => {
	const tournament = [];

	const half = Math.ceil(participants.length / 2);
	const groupA = participants.slice(0, half);
	const groupB = participants.slice(half, participants.length);
	groupB.reverse();

	tournament.push(getRound(groupA, groupB));


	for (let i = 1; i < participants.length - 1; i++) {
		groupA.splice(1, 0, groupB.shift());
		groupB.push(groupA.pop())
		tournament.push(getRound(groupA, groupB));
	}

	//console.log(tournament)
	//console.log("Number of Rounds:", tournament.length)
	return tournament;
}

const getRound = (groupA, groupB) => {
	const total = [];
	groupA.forEach((p, i) => {
		total.push([groupA[i], groupB[i]]);
	});
	return total;
}

console.log(roundRobin([1, 2, 3, 4, 5, 6, 7, 8]));

const randomInteger = (min, max) => {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
console.log(randomInteger(0, [1, 2, 3, 4, 5, 6, 7, 8].length)); */

// Lost number in number sequence (7 kyu)

/* 
An ordered sequence of numbers from 1 to N is given. 
One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

const findDeletedNumber = (arr, mixArr) => {
	if (mixArr.length === arr.length) {
		return 0
	} else {
		const newMixArr = mixArr.sort((a, b) => a - b);

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== newMixArr[i]) {
				return arr[i];
			}
		}
	}
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, 'Deletion');
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]), 5, 'Deletion');
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]), 0, 'No deletion');

// Sum even numbersSum even numbers (7 kyu)

/* 
Complete the function that takes a sequence of numbers as single parameter. 
Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/

const sumEvenNumbers = input => input.reduce((acc, item) => (item % 2 === 0 ? acc + item : acc), 0);

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// esreveR (7 kyu)

/* 
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

const reverse1 = (array) => array.reduce((acc, item) => [item].concat(acc), []);

console.log(reverse1([1, 2, 3]), [3, 2, 1]);
console.log(reverse1([1, null, 14, "two"]), ["two", 14, null, 1]);

// SevenAte9 (7 kyu)

/* 
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

const sevenAte9 = (str) => {
	const arr = str.split('');

	arr.forEach((item, index, arr) => {
		if (arr[index - 1] === '7' && arr[index + 1] === '7' && item === '9') {
			arr.splice(index, 1);
		}
	})

	return arr.join('');
}

console.log(sevenAte9('797'), '77');
console.log(sevenAte9('7979797'), '7777');
console.log(sevenAte9('165561786121789797'), '16556178612178977');

// Spacify (7 kyu)

/* 
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

const spacify = str => str.split('').join(' ');

console.log(spacify('hello world'), 'h e l l o   w o r l d');
console.log(spacify('12345'), '1 2 3 4 5');

// Divide and Conquer (7 kyu)

/* 
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
Return as a number.
*/

const divCon = x => x.filter(item => typeof item === 'number').reduce((acc, item) => acc + item, 0) -
	x.filter(item => typeof item === 'string').reduce((acc, item) => acc + Number(item), 0);

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);

// Disarium Number (Special Numbers Series #3) (7 kyu)

/* 
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

const disariumNumber = n => n === n.toString().split('').reduce((acc, item, index) => acc + parseInt(item, 10) ** (index + 1), 0) ?
	"Disarium !!" : "Not !!";


console.log(disariumNumber(89), "Disarium !!");
console.log(disariumNumber(564), "Not !!");
console.log(disariumNumber(1024), "Not !!");
console.log(disariumNumber(135), "Disarium !!");
console.log(disariumNumber(136586), "Not !!");

// Incrementer (7 kyu)

/* 
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
													#  9+3 = 12  -->  2
*/

const incrementer = num => num.map((item, index) => (item + index + 1) % 10);

console.log(incrementer([]), []);
console.log(incrementer([1, 2, 3]), [2, 4, 6]);
console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]);
console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]);

// Odd-Even String Sort (7 kyu)

/* 
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

Enjoy.
*/

const sortMyString = s => {
	let even = s.split('').filter((v, i) => i % 2 === 0).join('')
	let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
	return even + ' ' + odd
}

console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");


// ToLeetSpeak (7 kyu)

/* 
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"
*/

const toLeetSpeak = str => {
	const arr = str.split('');
	const alphabet = {
		A: '@',
		B: '8',
		C: '(',
		D: 'D',
		E: '3',
		F: 'F',
		G: '6',
		H: '#',
		I: '!',
		J: 'J',
		K: 'K',
		L: '1',
		M: 'M',
		N: 'N',
		O: '0',
		P: 'P',
		Q: 'Q',
		R: 'R',
		S: '$',
		T: '7',
		U: 'U',
		V: 'V',
		W: 'W',
		X: 'X',
		Y: 'Y',
		Z: '2'
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] === ' ' ? arr[i] === ' ' : arr[i] = alphabet[arr[i]];
	}

	return arr.join('');
}

console.log(toLeetSpeak("LEET"), "1337");
console.log(toLeetSpeak("CODEWARS"), "(0D3W@R$");
console.log(toLeetSpeak("HELLO WORLD"), "#3110 W0R1D");
console.log(toLeetSpeak("LOREM IPSUM DOLOR SIT AMET"), "10R3M !P$UM D010R $!7 @M37");
console.log(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"), "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06");

// Numbers in strings (7 kyu)

/* 
In this Kata, you will be given a string that has lowercase letters and numbers. 
Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
Good luck!
*/

const solve1234 = s => s.match(/\d+/g).map(item => Number(item)).sort((a, b) => b - a)[0];

console.log(solve1234('gh12cdy695m1'), 695);
console.log(solve1234('2ti9iei7qhr5'), 9);
console.log(solve1234('vih61w8oohj5'), 61);
console.log(solve1234('f7g42g16hcu5'), 42);
console.log(solve1234('lu1j8qbbb85'), 85);

// Count the Characters (7 kyu)

/* 
The goal of this kata is to write a function that takes two inputs: a string and a character. 
The function will count the number of times that character appears in the string. The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5
The character can be any alphanumeric character.
*/

const countChar = (string, char) => string.toLowerCase().split('').filter(item => item === char.toLowerCase()).length;

console.log(countChar("fizzbuzz", "z"), 4);

//	V A P O R C O D E (7 kyu)

/* 
ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, 
and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

const vaporcode = string => string.toUpperCase().split('').filter(item => item !== ' ').join('  ');

console.log(vaporcode("Lets go to the movies"), "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode("Why isnt my code working"), "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");

// Multiply characters (7 kyu)

/* 
Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

Expected results:

spam(1);  // hue
spam(6);  // huehuehuehuehuehue
spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue
*/

const spam = number => "hue".repeat(number);

console.log(spam(1), "hue", "spam(1) should return 'hue'");
console.log(spam(6), "huehuehuehuehuehue", "spam(6) should return 'huehuehuehuehuehue'");
console.log(spam(14), "huehuehuehuehuehuehuehuehuehuehuehuehuehue", "spam(14) should return 'huehuehuehuehuehuehuehuehuehuehuehuehuehue'");

// Difference Of Squares (7 kyu)

/* 
Recreation of Project Euler problem #6

Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
*/

const differenceOfSquares = n => {
	const arr = [];

	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	const squareSumNumbers = (arr.reduce((acc, item) => acc + item, 0)) ** 2;
	const sumSquareNumbers = arr.reduce((acc, item) => acc + item ** 2, 0);

	return squareSumNumbers - sumSquareNumbers;
}

console.log(differenceOfSquares(5), 170);
console.log(differenceOfSquares(10), 2640);
console.log(differenceOfSquares(100), 25164150);

// Filter the number (7 kyu)

/* 
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

const FilterString = value => parseInt(value.match(/\d+/g).join(''), 10);

console.log(FilterString("123"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');

// Product Of Maximums Of Array (Array Series #2) (7 kyu)

/* 
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
*/

const maxProduct = (numbers, size) => numbers.sort((a, b) => a - b).slice(-size).reduce((acc, item) => acc * item, 1);

console.log(maxProduct([4, 3, 5], 2), 20);
console.log(maxProduct([10, 8, 7, 9], 3), 720);
console.log(maxProduct([8, 6, 4, 6], 3), 288);
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5), 9600);
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5), 247895375);
console.log(maxProduct([-4, -27, -15, -6, -1], 2), 4);
console.log(maxProduct([-17, -8, -102, -309], 2), 136);
console.log(maxProduct([10, 3, -27, -1], 3), -30);
console.log(maxProduct([14, 29, -28, 39, -16, -48], 4), -253344);
console.log(maxProduct([1], 1), 1);

// Complete The Pattern #1 (7 kyu)

/* 
Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
*/

const pattern = n => {
	const res = [];
	for (let i = 1; i <= n; i++) {
		i = '' + i;
		res.push(i.repeat(i));
	}
	return res.join('\n');
}

console.log(pattern(1), "1");
console.log(pattern(2), "1\n22");
console.log(pattern(5), "1\n22\n333\n4444\n55555");

// Sort by Last Char (7 kyu)

/* 
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

const last = x => x.split(' ').sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : a[a.length - 1] > b[b.length - 1] ? 1 : 0);

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);

// Digits explosion (7 kyu)

/* 
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :
"333122"

explode("102269")
should return :
"12222666666999999999"
*/

const explode = s => s.split('').map(item => item.repeat(Number(item))).join('');

console.log(explode('12345'), '122333444455555');
console.log(explode('1347'), '133344447777777');

// Evens and Odds (7 kyu)

/* 
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/

const evensAndOdds = num => num % 2 === 0 ? num.toString(2) : num.toString(16);

console.log(evensAndOdds(2), '10');
console.log(evensAndOdds(13), 'd');
console.log(evensAndOdds(47), '2f');
console.log(evensAndOdds(0), '0');
console.log(evensAndOdds(12800), '11001000000000');
console.log(evensAndOdds(8172381723), '1e71ca61b')

// The old switcheroo (7 kyu)

/* 
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/

const vowel2index = str => str.split('').map((item, i) => {
	if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u' || item === 'A' || item === 'E' || item === 'I' || item === 'O' || item === 'U') {
		return ++i;
	}
	return item;

	// return str.replace(/[aeiou]/ig, (m, i) => i + 1);
}).join('');

console.log(vowel2index('this is my string'), 'th3s 6s my str15ng');
console.log(vowel2index('Codewars is the best site in the world'), 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
console.log(vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
console.log(vowel2index(''), '');

// Series of integers from m to n (7 kyu)

/* 
Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

Input
Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

Example
generateIntegers(2, 5) // --> [2, 3, 4, 5]
*/

const generateIntegers = (m, n) => {
	const arr = [];
	while (m <= n) {
		arr.push(m);
		m++;
	}
	return arr;
}

console.log(generateIntegers(2, 5), [2, 3, 4, 5]);

// Smallest value of an array (7 kyu)

/* 
Write a function that can return the smallest value of an array or the index of that value. 
The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. 
Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

const min = (arr, toReturn) => {
	const minVal = Math.min(...arr);
	switch (toReturn) {
		case 'value':
			return minVal;
		case 'index':
			return arr.indexOf(minVal)
	}
}

console.log(min([1, 2, 3, 4, 5], 'value'), 1);
console.log(min([1, 2, 3, 4, 5], 'index'), 0);

// Simple Fun #37: House Numbers Sum (7 kyu)

/* 
A boy is walking a long way from school to his home. 
To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. 
Unfortunately, not all of the houses have numbers written on them, 
and on top of that the boy is regularly taking turns to change streets, 
so the numbers don't appear to him in any particular order.

At some point during the walk the boy encounters a house with number 0 written on it, 
which surprises him so much that he stops adding numbers to his total right after seeing that house.

For the given sequence of houses determine the sum that the boy will get. 
It is guaranteed that there will always be at least one 0 house on the path.

Example
For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

The answer was obtained as 5 + 1 + 2 + 3 = 11.

Input/Output
[input] integer array inputArray

Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.

[output] an integer
*/

const houseNumbersSum = inputArray => inputArray.splice(0, inputArray.indexOf(0)).reduce((acc, item) => acc += item, 0);

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);
console.log(houseNumbersSum([4, 2, 1, 6, 0]), 13);
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10);
console.log(houseNumbersSum([0, 1, 2, 3, 4, 5]), 0);

// Sum of integers in string (7 kyu)

/* 
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 
For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

const sumOfIntegersInString = s => s.split(/([^0-9])/g).map(x => parseInt(x)).filter(Boolean).reduce((acc, el) => acc + el, 0);

console.log(sumOfIntegersInString("12.4"), 16);
console.log(sumOfIntegersInString("h3ll0w0rld"), 3);
console.log(sumOfIntegersInString("2 + 3 = "), 5);
console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."), 3868);
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."), 18);

// Find the lucky numbers (7 kyu)

/* 
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers.
*/

const filterLucky = x => x.filter(item => item.toString().split('').includes('7'));

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]), [7, 70, 17]);
console.log(filterLucky([71, 9907, 69]), [71, 9907]);

// Inspiring Strings (7 kyu)

/* 
When given a string of space separated words, return the word with the longest length. 
If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

const longestWord = stringOfWords => {
	let maxLengthStr = '';
	stringOfWords.split(' ').forEach(item => {
		if (item.length >= maxLengthStr.length) {
			maxLengthStr = item;
		}
	});
	return maxLengthStr;
}

console.log(longestWord('a b c d e fgh'), "fgh");
console.log(longestWord('one two three'), "three");
console.log(longestWord('red blue grey'), "grey");

// Maximum Gap (Array Series #4) (7 kyu)

/* 
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .
*/

const maxGap = numbers => {
	const numArr = [];
	numbers.sort((a, b) => a - b).forEach((item, i, arr) => {
		if (i !== numbers.length - 1) {
			numArr.push(Math.abs(item - numbers[i + 1]))
		}
	});
	return Math.max(...numArr);
}

console.log(maxGap([13, 10, 2, 9, 5]), 4);
console.log(maxGap([13, 3, 5]), 8);
console.log(maxGap([24, 299, 131, 14, 26, 25]), 168);
console.log(maxGap([-3, -27, -4, -2]), 23);
console.log(maxGap([-7, -42, -809, -14, -12]), 767);
console.log(maxGap([12, -5, -7, 0, 290]), 278);
console.log(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
console.log(maxGap([130, 30, 50]), 80);
console.log(maxGap([1, 1, 1]), 0);
console.log(maxGap([-1, -1, -1]), 0);

// Substituting Variables Into Strings: Padded Numbers (7 kyu)

/* 
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/

const solution12 = value => {
	const countZero = '0'.repeat(5 - value.toString().length);
	return `Value is ${countZero}${value.toString()}`
}

console.log(solution12(5), "Value is 00005");
console.log(solution12(1204), "Value is 01204");
console.log(solution12(109), "Value is 00109");
console.log(solution12(0), "Value is 00000");


// Last Survivor (7 kyu)

/* 
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
	 str = "bk", arr = [1]
	 str = "b", arr = []
	 return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
*/

const lastSurvivor = (letters, coords) => {
	let arr = letters.split('');
	while (coords.length > 0) {
		let tempPos = coords.shift();
		arr.splice(tempPos, 1);
	}
	return arr[0];
}

console.log(lastSurvivor('abc', [1, 1]), 'a');
console.log(lastSurvivor('kbc', [0, 1]), 'b');
console.log(lastSurvivor('zbk', [2, 1]), 'z');
console.log(lastSurvivor('c', []), 'c');
console.log(lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr',
	[8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1]), 'd');


// Say hello! (7 kyu)

/* 
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. 
Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

const greet1 = name => name ? `hello ${name}!` : null;

console.log(greet1("Niks"), "hello Niks!", "try again");
console.log(greet1(null), null, "try again");

// By 3, or not by 3? That is the question . . . (7 kyu)

/* 
A trick I learned in elementary school to determine whether or not a number was divisible 
by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator.
*/

const divisibleByThree = str => Number.isInteger((str.split('').reduce((acc, item) => Number(acc) + Number(item), 0)) / 3);

console.log(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.");
console.log(divisibleByThree('19254'), true, "Should return true if the sum of the given digits is divisible by 3.");
console.log(divisibleByThree('88'), false, "Should return false if the sum of the given digits is not divisible by 3.");
console.log(divisibleByThree('1'), false, "Should return false if the sum of the given digits is not divisible by 3.");

// Numerical Palindrome #1 (7 kyu)

/* 
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.
*/

const palindrome = num => {

	if (typeof num === 'number' && num > 0) {

		return ('' + num) === ('' + num).split('').reverse().join('');

	}

	return 'Not valid';

}

// Sum of numerous arguments (7 kyu)

/* 
After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

Example
findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0 
*/

function findSum() {
	const arr = [...arguments].sort((a, b) => a - b);
	return arr[0] < 0 ? -1 : arr.reduce((acc, item) => acc + item, 0)
}

console.log(findSum(1, 3, 5), 9, "1 + 3 + 5 = 9");
console.log(findSum(0, 3, 9, 2), 14, "0+3+9+2 = 14");
console.log(findSum(), 0, "If no arguments, function should return 0");
console.log(findSum(1, -2, 4), -1, "If negative arguments are passed, function should return -1");
console.log(findSum(0), 0, "The sum of 0 is 0");

// Filter Long Words (7 kyu)

/* 
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

const filterLongWords = (sentence, n) => sentence.split(' ').filter(item => item.length > n);

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps']);

// Find min and max (7 kyu)

/* 
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

const getMinMax = arr => [Math.min(...arr), Math.max(...arr)];

console.log(getMinMax([1]), [1, 1]);
console.log(getMinMax([1, 2]), [1, 2]);
console.log(getMinMax([2, 1]), [1, 2]);

// Insert dashes (7 kyu)

/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. 
For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/


const insertDash = num => {
	const result = [];
	num = num.toString().split('').map(Number);
	for (var i = 0; i < num.length; i++) {
		if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
			result.push(num[i]);
			result.push('-');
		} else {
			result.push(num[i])
		}
	}
	if (result[result.length - 1] === '-') {
		result.pop();
	}
	return result.join("");
}

console.log(insertDash(454793), '4547-9-3');
console.log(insertDash(123456), '123456');
console.log(insertDash(1003567), '1003-567');

// Building Strings From a Hash (7 kyu)

/* 
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

const solution1245 = pairs => {
	let str = '';
	for (let prop in pairs) {
		str += `${prop} = ${pairs[prop]},`;
	}

	return str.slice(0, -1);
}

console.log(solution1245({ a: 1, b: '2' }), "a = 1,b = 2");

// Summy (7 kyu)

/* 
Write a function that takes a string which has integers inside it separated by spaces, 
and your task is to convert each integer in the string into an integer and return their sum.

Example
summy("1 2 3")  ==> 6
*/

const summy = stringOfInts => stringOfInts.split(' ').reduce((acc, item) => Number(acc) + Number(item), 0);

console.log(summy("1 2 3"), 6);
console.log(summy("1 2 3 4"), 10);
console.log(summy("1 2 3 4 5"), 15);
console.log(summy("10 10"), 20);
console.log(summy("0 0"), 0);


// Find all occurrences of an element in an array (7 kyu)

/* 
Given an array (a list in Python) of integers and an integer n, find all occurrences of n 
in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/

const findAll = (array, n) => {
	const arrFind = [];
	array.map((item, index) => item === n ? arrFind.push(index) : null);
	return arrFind;
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3), [2, 4]);
console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16), [1, 9]);
console.log(findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20), [0, 1, 8]);

// Numbers with this digit inside (7 kyu)

/* 
You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]
*/

const numbersWithDigitInside = (x, d) => {
	let numbersWith = [];
	for (let i = 1; i <= x; i++) {
		d = d.toString();
		if (i.toString().includes(d)) {
			numbersWith.push(i);
		}
	}

	const countNumbersWith = numbersWith.length;
	const sumNumbersWith = numbersWith.reduce((acc, item) => acc + item, 0);
	const multNumbersWith = numbersWith.length ? numbersWith.reduce((acc, item) => acc * item, 1) : 0;

	return [countNumbersWith, sumNumbersWith, multNumbersWith];
}

console.log(numbersWithDigitInside(5, 5), [0, 0, 0]);
console.log(numbersWithDigitInside(1, 0), [0, 0, 0]);
console.log(numbersWithDigitInside(7, 6), [1, 6, 6]);
console.log(numbersWithDigitInside(11, 1), [3, 22, 110]);
console.log(numbersWithDigitInside(20, 0), [2, 30, 200]);
console.log(numbersWithDigitInside(44, 4), [9, 286, 5955146588160]);

// Simple string reversal (7 kyu)

/* 
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.
*/

const solve012 = str => {
	let result = "";
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] != " ") {
			result += str[i];
		}
		if (str[result.length] == " ") {
			result += " ";
		}
	}
	return result;
}

console.log(solve012("codewars"), "srawedoc");
console.log(solve012("your code"), "edoc ruoy");
console.log(solve012("your code rocks"), "skco redo cruoy");
console.log(solve012("i love codewars"), "s rawe docevoli");

// String matchup (7 kyu)

/* 
Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]
*/

const solve987 = (a, b) => {
	const resArr = [];
	for (let i = 0; i < b.length; i++) {
		const copyA = [...a];
		let count = 0;
		while (copyA.indexOf(b[i]) !== -1) {

			const index = copyA.indexOf(b[i]);
			copyA.splice(index, 1);
			count++;
		}
		resArr.push(count);
	}

	return resArr;
}

console.log(solve987(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
console.log(solve987(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
console.log(solve987(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);
console.log(solve987(['ef', 'fghij', 'fgh', 'fgh', 'ab', 'defg', 'cdefghi', 'ab', 'defghi', 'fg'], ['abc', 'abc', 'fgh', 'fghij', 'fgh']), [0, 0, 2, 1, 2]);

// Band name generator (7 kyu)

/* 
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, 
combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/

const bandNameGenerator = str => str[0].toLowerCase() === str[str.length - 1].toLowerCase() ?
	str[0].toUpperCase() + str.slice(1) + str.slice(1).toLowerCase() :
	`The ${str[0].toUpperCase()}${str.slice(1)}`;

console.log(bandNameGenerator('knife'), 'The Knife');
console.log(bandNameGenerator('tart'), 'Tartart');
console.log(bandNameGenerator('sandles'), 'Sandlesandles');
console.log(bandNameGenerator('bed'), 'The Bed');

// Formatting decimal places #1 (7 kyu)

/* 
Each floating-point number should be formatted that only the first two decimal places are returned. 
You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Don't round the numbers! Just cut them after two decimal places!

Right examples:  
32.8493 is 32.84  
14.3286 is 14.32

Incorrect examples (e.g. if you round the numbers):  
32.8493 is 32.85  
14.3286 is 14.33
*/

const twoDecimalPlaces = number => parseInt(number * 100) / 100;

console.log(twoDecimalPlaces(10.1289767789), 10.12, "didn't work for 10.1289767789");
console.log(twoDecimalPlaces(-7488.83485834983), -7488.83, "didn't work for -7488.83485834983");
console.log(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");

// Find Screen Size (7 kyu)

/* 
Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. 
He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. 
Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

The Challenge
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.
*/

const findScreenHeight = (width, ratio) => {
	const resolution = ratio.split(':');
	return `${width}x${width / resolution[0] * resolution[1]}`;
}

console.log(findScreenHeight(1024, "4:3"), "1024x768");
console.log(findScreenHeight(1280, "16:9"), "1280x720");
console.log(findScreenHeight(3840, "32:9"), "3840x1080");

// Number Of Occurrences (7 kyu)

/* 
Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

Array.prototype.numberOfOccurrences = function (num) {
	let count = 0;
	for (let i = 0; i < this.length; i++) {
		if (this[i] === num) {
			count++;
		}
	}
	return count;
}

const arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0), 1);
console.log(arr.numberOfOccurrences(4), 0);
console.log(arr.numberOfOccurrences(2), 2);
console.log(arr.numberOfOccurrences("a"), 0);

// Covfefe (7 kyu)

/* 
Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, 
if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.
*/

const covfefe = str => {
	if (str.includes("coverage")) {
		return str.replace(/coverage/g, "covfefe");
	}
	return str + " covfefe";
}

console.log(covfefe("coverage"), "covfefe");
console.log(covfefe("coverage coverage"), "covfefe covfefe");
console.log(covfefe("nothing"), "nothing covfefe");
console.log(covfefe("double space "), "double space  covfefe");
console.log(covfefe("covfefe"), "covfefe covfefe");

// Refactored Greeting (7 kyu)

/* 
The following code could use a bit of object-oriented artistry. 
While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. 
(Or, at least, something similar depending on your language)

Refactor the following code so that it belongs to a Person class/object. 
Each Person instance will have a greet method. The Person instance should be instantiated with 
a name so that it no longer has to be passed into each greet method call.

Here is how the final refactored code would be used:

var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe'
*/

class Person {
	constructor(name) {
		this.name = name
	}

	greet(yourName) {
		return `Hello ${yourName}, my name is ${this.name}`
	}
}

const joe = new Person('Joe');
console.log(joe.greet('Kate'), 'Hello Kate, my name is Joe');

// Who's Online? (7 kyu)

/* 
	 You have a group chat application, but who is online!?
	 You want to show your users which of their friends are online and available to chat!
	 Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
	 If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
	 The input data has the following structure:
	 [{
		username: 'David',
		status: 'online',
		lastActivity: 10
	 }, {
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22
	 }, {
		username: 'Bob',
		status: 'online',
		lastActivity: 104
	 }]
	 username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
	 Finally, if you have no friends in your chat application, the input will be an empty array [].
	 In this case you should return an empty object {} (empty Dictionary in C#).
*/

const whosOnline = friends =>
	friends.reduce((activities, { username, status, lastActivity }) => {
		const realStatus = status === 'online' && lastActivity > 10 ? 'away' : status
		return { ...activities, [realStatus]: activities[realStatus] ? [...activities.realStatus, username] : [username] }
	}, {})

console.log(whosOnline([{
	username: 'David',
	status: 'online',
	lastActivity: 10
}, {
	username: 'Lucy',
	status: 'offline',
	lastActivity: 22
}, {
	username: 'Bob',
	status: 'online',
	lastActivity: 104
}]))

// Flatten (7 kyu)

/* 
Write a function that flattens an Array of Array objects into a flat Array. 
Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

const flatten = array => [].concat(...array);
// const flatten = array => array.flat();

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);

// How many arguments (7 kyu)

/* 
Create a function called args_count that returns the number of arguments provided
*/

const args_count = (...arguments) => arguments.length;

console.log(args_count(1, 2), 2);
console.log(args_count(), 0);
console.log(args_count('A', 'B', 'C'), 3);
console.log(args_count(["foo", "bar"]), 1);

// Longest vowel chain (7 kyu)

/*
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. 
Vowels are any of aeiou.
*/

const solve12345 = x => Math.max(...x.split(/[^aoeiu]/i).map(x => x.length))

console.log(solve12345("codewarriors"), 2);
console.log(solve12345("suoidea"), 3);
console.log(solve12345("ultrarevolutionariees"), 3);
console.log(solve12345("strengthlessnesses"), 1);
console.log(solve12345("cuboideonavicuare"), 2);
console.log(solve12345("chrononhotonthuooaos"), 5);
console.log(solve12345("iiihoovaeaaaoougjyaw"), 8);

// Cat and Mouse - Easy Version (7 kyu)

/* 
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/

const catMouse = x => x.replace(/[\C\m]/gi, '').length < 4 ? "Caught!" : "Escaped!";

console.log(catMouse('C....m'), "Escaped!");
console.log(catMouse('C..m'), "Caught!");
console.log(catMouse('C.....m'), "Escaped!");

// Clean up after your dog (7 kyu)

/* 
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). 
If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'
*/

const crap = (x, bags, cap) => {
	const totalCapacity = bags * cap;
	const gardenElements = x.join('');

	if (gardenElements.includes('D')) {
		return 'Dog!!';
	}

	return (gardenElements.match(/@/g) || []).length <= totalCapacity ? 'Clean' : 'Cr@p';
}

console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2), "Clean");
console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 1, 1), "Cr@p");
console.log(crap([['_', '_'], ['_', '@'], ['D', '_']], 2, 2), "Dog!!");

// Debug Sum of Digits of a Number (7 kyu)

/* 
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/

const getSumOfDigits = integer => integer.toString().split('').reduce((acc, item) => acc + Number(item), 0);

console.log(getSumOfDigits(123), 6);
console.log(getSumOfDigits(223), 7);
console.log(getSumOfDigits(1337), 14);

// Product Array (Array Series #5) (7 kyu)

/* 
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the first element

The second element 12 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.

productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

const productArray = numbers => {
	const resArr = [];
	for (let i = 0; i < numbers.length; i++) {
		const newNumbers = [...numbers];
		newNumbers.splice(i, 1);
		resArr.push(newNumbers.reduce((acc, item) => acc * item, 1));
	}
	return resArr;
}

console.log(productArray([12, 20]), [20, 12]);
console.log(productArray([3, 27, 4, 2]), [216, 24, 162, 324]);
console.log(productArray([13, 10, 5, 2, 9]), [900, 1170, 2340, 5850, 1300]);
console.log(productArray([16, 17, 4, 3, 5, 2]), [2040, 1920, 8160, 10880, 6528, 16320]);

// Split In Parts (7 kyu)

/* 
Description:
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/

const splitInParts = (s, partLength) => {
	let arr = [];
	for (let i = 0; i < s.length; i += partLength) {
		arr.push(s.slice(i, i + partLength))
	}
	return arr.join(' ')
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s");
console.log(splitInParts("HelloKata", 1), "H e l l o K a t a");
console.log(splitInParts("HelloKata", 9), "HelloKata");

// Minimum Steps (Array Series #6) (7 kyu)

/* 
Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .

Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .

Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .

Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .

We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
*/

const minimumSteps = (numbers, value) => {
	numbers = numbers.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
		if (sum >= value) {
			return i;
		}
	}
}

console.log(minimumSteps([4, 6, 3], 7), 1);
console.log(minimumSteps([10, 9, 9, 8], 17), 1);
console.log(minimumSteps([8, 9, 10, 4, 2], 23), 3);
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8);
console.log(minimumSteps([4, 6, 3], 2), 0);

// Compare Strings by Sum of Chars (7 kyu)

/* 
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

const compare = (s1, s2) => {
	if (s1 === null && s2 === '') {
		return true;
	} else if (s1 === null && s2 === null) {
		return true;
	} else if (s1 === null || s2 === null) {
		return false;
	} else if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2)) {
		return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) ===
			s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
	}
	return true;
}

console.log(compare("AD", "BC"), true);
console.log(compare("AD", "DD"), false);
console.log(compare("gf", "FG",), true);
console.log(compare("Ad", "DD",), false);
console.log(compare("zz1", ""), true,);
console.log(compare("ZzZz", "ffPFF"), true);
console.log(compare("kl", "lz"), false);
console.log(compare("!!", "7476"), true);
console.log(compare("##", "1176"), true);
console.log(compare(null, "BC"), false);
console.log(compare(null, null), true);
console.log(compare(null, ""), true);
console.log(compare("", ""), true);

// Consecutive items (7 kyu)

/* 
You are given a list of unique integers arr, and two integers a and b. 
Your task is to find out whether or not a and b appear consecutively in arr, 
and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;

console.log(consecutive([1, 3, 5, 7], 3, 7), false);
console.log(consecutive([1, 3, 5, 7], 3, 1), true);
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);

// Remove All The Marked Elements of a List (7 kyu)

/* 
Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
Enjoy it!!
*/

Array.prototype.remove_ = (integer_list, values_list) => integer_list.filter(v => !values_list.includes(v));

l = new Array()
const integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
const values_list = [1, 3, 4, 2];
console.log(l.remove_(integer_list, values_list), [5, 6, 7, 8]);

// Alphabet symmetry (7 kyu)

/* 
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. 
Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!
*/

const solveAlphabet = arr => {
	const alphabeth = "abcdefghijklmnopqrstuvwxyz";
	return arr.map(word => word.toLowerCase().split('').filter((letter, i) => i === alphabeth.indexOf(letter)).length);
};

console.log(solveAlphabet(["abode", "ABc", "xyzD"]), [4, 3, 1]);
console.log(solveAlphabet(["abide", "ABc", "xyz"]), [4, 3, 0]);
console.log(solveAlphabet(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]), [6, 5, 7]);
console.log(solveAlphabet(["encode", "abc", "xyzD", "ABmD"]), [1, 3, 1, 3]);

// All unique (7 kyu)

/* 
Write a program to determine if a string contains only unique characters. 
Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. 
Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

const hasUniqueChars = str => new Set(str).size === str.length;

console.log(hasUniqueChars("  nAa"), false); // because there are two spaces ' '
console.log(hasUniqueChars("abcdef"), true);
console.log(hasUniqueChars("aA"), true); // case - sensitivity
console.log(hasUniqueChars("++-"), false); // because there are two '+'

// Boiled Eggs (7 kyu)

/* 
You are the greatest chef on earth. No one boils eggs like you! 
Your restaurant is always full of guests, who love your boiled eggs. 
But when there is a greater order of boiled eggs, you need some time, 
because you have only one pot for your job. How much time do you need?

Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. 
It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
*/

const cookingTime = eggs => 5 * Math.ceil(eggs / 8);

console.log(cookingTime(0), 0, '0 eggs');
console.log(cookingTime(5), 5, '5 eggs');
console.log(cookingTime(10), 10, '10 eggs');

// Sum of Cubes (7 kyu)

/* 
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

const sumCubes = n => {
	let count = 0;
	while (n > 0) {
		count += n ** 3;
		n--;
	}
	return count;
}

console.log(sumCubes(1), 1);
console.log(sumCubes(2), 9);
console.log(sumCubes(3), 36);
console.log(sumCubes(4), 100);

// Sum of Odd Cubed Numbers (7 kyu)

/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. 
The function should return undefined if any of the values aren't numbers.
*/

const cubeOdd = arr => arr.length === arr.filter(item => typeof item === 'number').length ?
	arr.filter(item => item % 2 !== 0).reduce((acc, item) => acc += item ** 3, 0) :
	undefined


console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);

// Basic Calculator (7 kyu)

/* 
Write a function called calculate that takes 3 values. 
The first and third values are numbers. 
The second value is a character. If the character is "+" , "-", "*", or "/", 
the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
*/

const calculate = (num1, operation, num2) => {
	const operations = ['+', '-', '*', '/']

	if (!operations.includes(operation)) return null;
	if (operation === '/' && num2 === 0) return null;
	if (eval(`${num1}${operation}${num2}`) === -0) return 0;
	return (eval(`${num1}${operation}${num2}`));
};

console.log(calculate(3.2, "+", 8), 11.2, "3.2 + 8 = 11.2");
console.log(calculate(3.2, "-", 8), -4.8, "3.2 - 8 = -4.8");
console.log(calculate(3.2, "/", 8), 0.4, "3.2 / 8 = .4");
console.log(calculate(3.2, "*", 8), 25.6, "3.2 * 8 = 25.6");
console.log(calculate(-3, "+", 0), -3, "-3 + 0 = -3");
console.log(calculate(-3, "-", 0), -3, "-3 - 0 = -3");
console.log(calculate(-3, "/", 0), null, "-3 / 0 = null");
console.log(calculate(-3, "*", 0), 0, "-3 * 0 = 0");
console.log(calculate(-3, "w", 0), null, "-3 w 0 = null");

// Find the vowels (7 kyu)

/* 
We want to know the index of the vowels in a given word, for example, 
there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

const vowelIndices = word => {
	const vowels = 'aeoiuy';
	const indicate = [];
	word.toLowerCase().split('').forEach((item, i) => { if (vowels.includes(item)) { indicate.push(i + 1) } });
	return indicate;
}

console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1, 5]);
console.log(vowelIndices("super"), [2, 4]);
console.log(vowelIndices("orange"), [1, 3, 6]);
console.log(vowelIndices("supercalifragilisticexpialidocious"), [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]);

// Parts of a list (7 kyu)

/* 
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
*/

const partlist = arr => arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);

console.log(partlist(["I", "wish", "I", "hadn't", "come"]),
	[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]),
	[["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]),
	[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);

// Palindrome chain length (7kyu)

/* 
Number is a palindrome if it is equal to the number with digits in reversed order. 
For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. 
The special step is: "reverse the digits, and add to the original number". 
If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
*/

const palindromeChainLength = n => {
	let count = 0;
	let palindrome = parseInt((n + '').split('').reverse().join(''));
	while (palindrome !== n) {
		n = parseInt(n) + parseInt(palindrome);
		palindrome = parseInt((n + '').split('').reverse().join(''));
		++count;
	}

	return count;
};

console.log(palindromeChainLength(1), 0);
console.log(palindromeChainLength(88), 0);
console.log(palindromeChainLength(87), 4);
console.log(palindromeChainLength(89), 24);
console.log(palindromeChainLength(10), 1);

// Sum of numbers from 0 to N (7 kyu)

/* 
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

let SequenceSum = (function () {
	function SequenceSum() { }

	SequenceSum.showSequence = function (count) {
		let arr = [];
		for (let i = 0; i <= count; i++) { arr.push(i) };
		let b = arr.reduce((total, next) => total + next, 0)
		let a = arr.join('+');
		if (count < 0) return `${count}<0`;
		if (count == 0) return `${count}=0`;
		return `${a} = ${b}`
	};

	return SequenceSum;

})();

console.log(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21");

// Sum of array singles (7 kyu)

/* 
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. 
Every other number occurs twice.
*/

const repeats = arr => arr
	.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
	.reduce((a, b) => a + b);

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer (7 kyu)

/* 
You will be given an array of objects (associative arrays in PHP) representing data about developers 
who have signed up to attend the next coding meetup that you are organising. 
The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
*/

const list12 = [
	{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
	{ firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
	{ firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

const getFirstPython = list => {
	const pithonDeveloper = list.filter(developer => developer.language === 'Python');
	return pithonDeveloper.length === 0 ? 'There will be no Python developers' : `${pithonDeveloper[0].firstName}, ${pithonDeveloper[0].country}`;
}

console.log(getFirstPython(list12), 'Victoria, Puerto Rico');


// Nth Smallest Element (Array Series #4) (7 kyu)

/* 
Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
*/

const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([-5, -1, -6, -18], 4), -1);
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5), -2);
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2);
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3), 2);

// Help the Fruit Guy (7 kyu)

/* 
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. 
He wants to replace all the rotten pieces of fruit with fresh ones. 
For example, given ["apple","rottenBanana","apple"] 
the replaced array should be ["apple","banana","apple"]. 
Your task is to implement a method that accepts an array of strings containing 
fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.
*/

const removeRotten = (bag) => bag ? bag.map(x => x.toLowerCase().replace(/rotten/ig, "")) : [];

console.log(removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"]), ["apple", "banana", "kiwi", "melone", "orange"]);
console.log(removeRotten([]), []);

// Alternate case (7 kyu)

/* 
Write function alternateCase which switch every letter in 
string from upper to lower and from lower to upper. 
E.g: Hello World -> hELLO wORLD
*/

const alternateCase = (s) => s.split('')
	.map((letter) => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
	.join('');

console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD");

// Numbers to Letters (7 kyu)

/* 
Given an array of numbers (in string format), you must return a string. 
The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

const switcher = (x) => {
	let word = '';
	let alphabet = {
		29: ' ',
		28: '?',
		27: '!',
		26: 'a',
		25: 'b',
		24: 'c',
		23: 'd',
		22: 'e',
		21: 'f',
		20: 'g',
		19: 'h',
		18: 'i',
		17: 'j',
		16: 'k',
		15: 'l',
		14: 'm',
		13: 'n',
		12: 'o',
		11: 'p',
		10: 'q',
		9: 'r',
		8: 's',
		7: 't',
		6: 'u',
		5: 'v',
		4: 'w',
		3: 'x',
		2: 'y',
		1: 'z',
	};
	for (let i = 0; i < x.length; i++) {
		word += alphabet[x[i]];
	}
	return word;
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']), 'btswmdsbd kkw');
console.log(switcher(['4', '24']), 'wc');

// Convert a linked list to a string (7 kyu)

/* 
Convert a linked list to a string
Related Kata
Although this Kata is not part of an official Series, you may 
also want to try out Parse a linked list from a string if you enjoyed this Kata.

Preloaded
Preloaded for you is a class, struct or derived data type Node 
( depending on the language ) used to construct linked lists in this Kata:

class Node {
  constructor(data, next = null) {
	 this.data = data;
	 this.next = next;
  }
}
Prerequisites
This Kata assumes that you are already familiar with the idea of a linked list. 
If you do not know what that is, you may want to read this article on Wikipedia. 
Specifically, the linked lists this Kata is referring to are singly linked lists, 
where the value of a specific node is stored in its data / $data / Data property, 
the reference to the next node is stored in its next / $next / Next / next_node 
property and the terminator for a list is null / NULL / None / nil / nullptr / null().

Task
Create a function stringify which accepts an argument list / $list and returns 
a string representation of the list. The string representation of the list 
starts with the value of the current Node, specified by its data / $data / 
Data property, followed by a whitespace character, an arrow and another 
whitespace character (" -> "), followed by the rest of the list. 
The end of the string representation of a list must always end with null 
/ NULL / None / nil / nullptr / null() ( all caps or all lowercase 
	depending on the language you are undertaking this Kata in ). 
	For example, given the following list:

new Node(1, new Node(2, new Node(3)))
... its string representation would be:

"1 -> 2 -> 3 -> null"
And given the following linked list:

new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
... its string representation would be:

"0 -> 1 -> 4 -> 9 -> 16 -> null"
Note that null / NULL / None / nil / nullptr / null() itself is also considered a valid linked list. 
In that case, its string representation would simply be "null" / "NULL" / "None" / "nil" 
/ "nullptr" / @"NULL" / "null()" ( again, depending on the language ).

For the simplicity of this Kata, you may assume that any Node in this Kata 
may only contain non-negative integer values. For example, you will not 
encounter a Node whose data / $data / Data property is "Hello World".

Enjoy, and don't forget to check out my other Kata Series :D
*/

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

const stringify = (list) => list === null ? "null" : `${list.data} -> ${stringify(list.next)}`;

console.log(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
console.log(stringify(null), "null");

// Valid Spacing (7 kyu)

/* 
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. 
The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. 
Words can be any consecutive sequence of non space characters.
*/

const validSpacing = s => s == '' ? true : s.split(' ').find(el => el == '') >= 0 ? false : true;

console.log(validSpacing('Hello world'), true);
console.log(validSpacing(' Hello world'), false);
console.log(validSpacing('Hello  world '), false);
console.log(validSpacing('Hello'), true);
console.log(validSpacing('Helloworld'), true);

// String Merge! (7 kyu)

/* 
Given two words and a letter, return a single word that's a combination of both words, 
merged at the point where the given letter first appears in each word. 
The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. 
You can assume both words will contain the dividing letter.
*/

const stringMerge = (string1, string2, letter) => {
	const index1 = string1.indexOf(letter);
	const index2 = string2.indexOf(letter);
	return string1.slice(0, index1) + string2.slice(index2)
}

console.log(stringMerge("person", "here", "e"), "pere");
console.log(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh");
console.log(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
console.log(stringMerge("12345654321", "123456789", "6"), "123456789");
console.log(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
console.log(stringMerge("incredible", "people", "e"), "increople");

// Letterbox Paint-Squad (7 kyu)

/* 
Since there are 10 of you in the group each person just concentrates on painting one digit! For example, 
somebody will paint only the 1's, somebody else will paint only the 2's and so on...

But at the end of the day you realise not everybody did the same amount of work.

To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

Kata Task
Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.
*/

const paintLetterboxes = (start, end) => {
	const defaultArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (let i = start; i <= end; i++) {
		i.toString().split('').forEach((item, index) => {
			defaultArr[parseInt(item, 10)]++;
		})
	}
	return defaultArr;
}

console.log(paintLetterboxes(125, 132), [1, 9, 6, 3, 0, 1, 1, 1, 1, 1]);

// Basic Math (Add or Subtract) (7 kyu)

/* 
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

const calculate12 = (str) => eval(str.replace(/(plus)/gi, '+').replace(/(minus)/gi, '-')).toString()

console.log(calculate12("1plus2plus3plus4"), '10');
console.log(calculate12('1minus2minus3minus4'), '-8');
console.log(calculate12('1plus2plus3minus4'), '2');
console.log(calculate12('719plus975minus248'), '1446');

// Find Count of Most Frequent Item in an Array (7 kyu)

/* 
Complete the function to find the count of the most frequent item of an array. 
You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.
*/

const mostFrequentItemCount = collection => {
	if (collection.length) {
		const collectionObj = collection.reduce((acc, item) => {
			acc[item] = (acc[item] || 0) + 1
			return acc
		}, {})
		const collCount = Object.values(collectionObj);
		return Math.max(...collCount);
	} else {
		return 0;
	}
}

console.log(mostFrequentItemCount([-14, -13, -13, -13, -13, -12, -11, -11, -10, -10, -9, -7, -6, -6, -6, -5, -4, -4, 1, 1, 7, 8, 9, 10, 13]), 4);
console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
console.log(mostFrequentItemCount([-14, -14, -14, -13, -12, -12, -12, -10, -6, -5, -1, -1, 0, 1, 2, 4, 4, 5, 7, 7, 7, 10, 10, 10, 13]), 3);

// Return String of First Characters (7 kyu)

/* 
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/

const makeString = s => s.split(' ').map(v => v.slice(0, 1)).join('');

console.log(makeString("sees eyes xray yoat"), "sexy", "Wrong result for 'sees eyes xray yoat'");
console.log(makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'");
console.log(makeString("cars are very nice"), "cavn", "Wrong result for 'cars are very nice'");
console.log(makeString("kaks de gan has a big head"), "kdghabh", "Wrong result for 'kaks de gan has a big head'");

// Remove consecutive duplicate words (7 kyu)

/* 
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.
*/

const removeConsecutiveDuplicates = s => s.split(' ').filter((item, i, arr) => item !== arr[i + 1]).join(' ');

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'),
	'alpha beta gamma delta alpha beta gamma delta');

// Check three and two (7 kyu)

/* 
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), 
check if the array contains three and two of the same values.
*/

const checkThreeAndTwo = array => {
	const a = array.filter(item => item === 'a').length;
	const b = array.filter(item => item === 'b').length;
	const c = array.filter(item => item === 'c').length;
	return (a === 3 || b === 3 || c === 3) && (a === 2 || b === 2 || c === 2)
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true);
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]), false);
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false);

// Double Sort (7 kyu)

/* 
Simple enough this one - you will be given an array. 
The values in the array will either be numbers or strings, or a mix of both. 
You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, 
followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/

const dbSort = a => {
	const num = [];
	const str = [];
	a.forEach(item => {
		typeof item === 'number' ? num.push(item) : str.push(item);
	})
	return num.sort((a, b) => a - b).concat(str.sort());
}

console.log(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
console.log(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
console.log(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0, 2, 2, "Apple", "Banana", "Mango", "Orange"]);
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0, 1, 2, "C", "W", "W", "W"]);
console.log(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'])

// Add property to every object in array (7 kyu)

/* 
Your task is to add a new property usersAnswer to every object in the array questions. 
The value of usersAnswer should be set to null. The solution should work for array of any length.
*/

const questions = [{
	question: "What's the currency of the USA?",
	choices: ["US dollar", "Ruble", "Horses", "Gold"],
	corAnswer: 0
}, {
	question: "Where was the American Declaration of Independence signed?",
	choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
	corAnswer: 0
}];

questions.forEach(item => {
	item.usersAnswer = null
});

console.log(questions[0].usersAnswer === null);

// Find all pairs (7 kyu)

/* 
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
*/

const duplicates = array => {
	array = [...array].sort((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			count++;
			array[i] = '';
			array[i + 1] = '';
		}
	}
	return count;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]), 2);
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4);
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]), 3);
console.log(duplicates([1000, 1000]), 1);
console.log(duplicates([]), 0);
console.log(duplicates([54]), 0);

// Find how many times did a team from a given country win the Champions League? (7 kyu)

/* 
Create a function that takes two arguments:

An array of objects which feature the season, the team and the country of the Champions League winner.

Country (as a string, for example, 'Portugal')

You function should then return the number which represents the number of times a team from a given country has won. 
Return 0 if there have been no wins.
*/

const winnerList1 = [
	{ season: '1996–97', team: 'Borussia Dortmund', country: 'Germany' },
	{ season: '1997–98', team: 'Real Madrid', country: 'Spain' },
	{ season: '1998–99', team: 'Manchester United', country: 'England' },
	{ season: '1999–00', team: 'Real Madrid', country: 'Spain' },
	{ season: '2000–01', team: 'Bayern Munich', country: 'Germany' },
	{ season: '2001–02', team: 'Real Madrid', country: 'Spain' },
	{ season: '2002–03', team: 'Milan', country: 'Italy' },
	{ season: '2003–04', team: 'Porto', country: 'Portugal' },
	{ season: '2004–05', team: 'Liverpool', country: 'England' },
	{ season: '2005–06', team: 'Barcelona', country: 'Spain' },
	{ season: '2006–07', team: 'Milan', country: 'Italy' },
	{ season: '2007–08', team: 'Manchester United', country: 'England' },
	{ season: '2008–09', team: 'Barcelona', country: 'Spain' },
	{ season: '2009–10', team: 'Internazionale', country: 'Italy' },
	{ season: '2010–11', team: 'Barcelona', country: 'Spain' },
	{ season: '2011–12', team: 'Chelsea', country: 'England' },
	{ season: '2012–13', team: 'Bayern', country: 'Germany' },
	{ season: '2013–14', team: 'Real Madrid', country: 'Spain' },
	{ season: '2014–15', team: 'Barcelona', country: 'Spain' },
	{ season: '2015–16', team: 'Real Madrid', country: 'Spain' }
];

const countWins = (winnerList, country) => {
	let countWinner = 0;
	for (let i = 0; i < winnerList.length; i++) {
		if (winnerList[i].country === country) {
			countWinner++;
		}
	}
	return countWinner;
}

console.log(countWins(winnerList1, 'Portugal'), 1);
console.log(countWins(winnerList1, 'FootLand'), 0);
console.log(countWins(winnerList1, 'Spain'), 9);

// Arithmetic progression (7 kyu)

/* 
In your class, you have started lessons about arithmetic progression. 
Since you are also a programmer, you have decided to write a function that will 
return the first n elements of the sequence with the given common difference d and first element a. 
Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.
*/

const arithmeticSequenceElements = (a, r, n) => {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(a + (r * i));
	}
	return arr.join(', ');
}

console.log(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
console.log(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
console.log(arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
console.log(arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");

// L2: Triple X (7 kyu)

/* 
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
*/

const tripleX = str => str.slice(str.indexOf('x') + 1, str.indexOf('x') + 3) === 'xx';

console.log(tripleX("abraxxxas"), true);
console.log(tripleX("xoxotrololololololoxxx"), false);
console.log(tripleX("soft kitty, warm kitty, xxxxx"), true);
console.log(tripleX("softx kitty, warm kitty, xxxxx"), false);

// Sum of all arguments (7 kyu)

/* 
Write a function that finds the sum of all its arguments.
*/

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

console.log(sum(1), 1)
console.log(sum(1, 2), 3)
console.log(sum(5, 7, 9), 21)
console.log(sum(12, 1, 1, 1, 1), 16)
console.log(sum(12, 1, 1, 1, 1, 1, 1), 18)

// Spoonerize Me (7 kyu)

/* 
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: 
words and returns a spoonerism of those words in a string, as in the above example. 
A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, 
and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written 
and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. 
For example, three-word phrases in which the first letters of the first and last words are swapped: 
"pack of lies" --> "lack of pies" or more than one letter from a word is swapped: 
"flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
*/

const spoonerize = words => {
	const wordsArr = words.split(' ');
	return `${wordsArr[1][0]}${wordsArr[0].slice(1)} ${wordsArr[0][0]}${wordsArr[1].slice(1)}`
}

console.log(spoonerize("nit picking"), "pit nicking");
console.log(spoonerize("wedding bells"), "bedding wells");
console.log(spoonerize("jelly beans"), "belly jeans");

// Initialize my name (7 kyu)

/* 
Some people just have a first name; some people have first and last names and some people have first,
middle and last names.

You task is to initialize the middle names (if there is any).
*/

const initializeNames = name => {
	const arr = name.split(' ');
	for (var i = 1; i < arr.length - 1; i++) {
		arr[i] = `${arr[i][0]}.`;
	}
	return arr.join(' ');
}

console.log(initializeNames('Jack Ryan'), 'Jack Ryan', '');
console.log(initializeNames('Lois Mary Lane'), 'Lois M. Lane', '');
console.log(initializeNames('Dimitri'), 'Dimitri', '');
console.log(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis', '');

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins (7 kyu)

/* 
You will be given an array of objects representing data about developers who have signed up 
to attend the next coding meetup that you are organising.

Notes:

The original order should be preserved.
If there are no GitHub admin developers in a given language then return an empty array [].
The input array will always be valid and formatted as in the example above.
The strings representing whether someone is a GitHub admin will 
always be formatted as 'yes' and 'no' (all lower-case).
The strings representing a given language will always be formatted in the same way 
(e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
*/

const findAdmin = (list, lang) => list.filter((item) => item.language === lang && item.githubAdmin === 'yes');

const list4 = [
	{ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
	{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
	{ firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

const answer12 = [
	{ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
	{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
];

console.log(findAdmin(list4, 'JavaScript'), answer12);
console.log(findAdmin(list4, 'Ruby'), []);
console.log(findAdmin(list4, 'Python'), []);

// Calculate Two People's Individual Ages (7 kyu)

/* 
Create a function that takes in the sum and age difference of two people, 
calculates their individual ages, and returns a pair of values (oldest age first) 
if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

const getAges = (sum, difference) => {
	if (sum > 0 && difference > 0) {
		const min = (sum - difference) / 2;
		const max = sum - min;
		if (min >= 0 && max >= 0)
			return [max, min];
	}
	return null;
};

console.log(getAges(24, 4), [14, 10]);
console.log(getAges(63, -14), null);
console.log(getAges(30, 6), [18, 12]);
console.log(getAges(70, 10), [40, 30]);

// Max-min arrays (7 kyu)

/* 
In this Kata, you will be given an array of unique elements, 
and your task is to rearrange the values so that the first max value is followed by the first minimum, 
followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/

const solve = (arr) => {
	const copyArr = [...arr];
	const newArr = [];
	while (newArr.length < arr.length) {
		if (copyArr.length !== 0) {
			const max = Math.max(...copyArr);
			const indexMax = copyArr.indexOf(max);
			newArr.push(max);
			copyArr.splice(indexMax, 1);
		}
		if (copyArr.length !== 0) {
			const min = Math.min(...copyArr);
			const indexMin = copyArr.indexOf(min);
			newArr.push(min);
			copyArr.splice(indexMin, 1);
		}
	}
	return newArr;
};

console.log(solve([15, 11, 10, 7, 12]), [15, 7, 12, 10, 11]);
console.log(solve([91, 75, 86, 14, 82]), [91, 14, 86, 75, 82]);
console.log(solve([84, 79, 76, 61, 78]), [84, 61, 79, 76, 78]);
console.log(solve([52, 77, 72, 44, 74, 76, 40]), [77, 40, 76, 44, 74, 52, 72]);
console.log(solve([1, 6, 9, 4, 3, 7, 8, 2]), [9, 1, 8, 2, 7, 3, 6, 4]);
console.log(solve([78, 79, 52, 87, 16, 74, 31, 63, 80]), [87, 16, 80, 31, 79, 52, 78, 63, 74]);

// Limit string length - 1 (7 kyu)

/* 
The function must return the truncated version of the given string up to the given limit followed by "..."
if the result is shorter than the original. Return the same string if nothing was truncated.
*/

const solution = (string, limit) => string.length > limit ? `${string.slice(0, limit)}...` : string;

console.log(solution('Testing String', 3), 'Tes...');
console.log(solution('Testing String', 8), 'Testing ...');
console.log(solution('Test', 8), 'Test');

// Move 10 (7 kyu)

/* 
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

const moveTen = s => {
	const str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
	const arr = s.split('').map(v => v = str.indexOf(v) + 10)
	return arr.map(v => v = str[v]).join('')
}

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");

// Sort arrays - 1 (7 kyu)

/* 
Just a simple sorting usage. 
Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/

sortme = function (names) {
	return names.sort();
}

console.log(sortme(['one', 'two', 'three']), ["one", "three", "two"]);

// We Have Liftoff (7 kyu)

/* 
You have an array of numbers 1 through n (where 1 <= n <= 10). 
The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

Unfortunately, the person reading the countdown only knows how to read strings. 
After the array is sorted correctly make sure it's in a format he can understand.

Between each number should be a space and after the final number (n) should be the word 'liftoff!'
*/

const liftoff = instructions => `${[...instructions].sort((a, b) => b - a).join(' ')} liftoff!`;

console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]), "10 9 8 7 6 5 4 3 2 1 liftoff!");

// Merge two arrays (7 kyu)

/* 
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

const mergeArrays = (a, b) => {
	const newArr = [];
	const maxLength = Math.max(a.length, b.length);
	for (let i = 0; i < maxLength; i++) {
		newArr.push(a[i]);
		newArr.push(b[i]);
	}

	return newArr.filter(item => item !== undefined);
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);

// How many are smaller than me? (7 kyu)

/* 
Write a function that given, an array arr, returns an array containing at each index i 
the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, 
head over to the much tougher version How many are smaller than me II?
*/

const smaller = nums => nums.map((n, i) => nums.slice(i).filter(v => v < n).length);

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);

// Filter unused digits (7 kyu)

/* 
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

const unusedDigits = (...arr) => {
	const digits = arr.join();

	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		.filter(x => !digits.includes(x))
		.join('');
};

console.log(unusedDigits(12, 34, 56, 78), "09");
console.log(unusedDigits(2015, 8, 26), "3479");

// The Office III - Broken Photocopier (7 kyu)

/* 
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
Given a string of binary, return the version the photocopier gives you as a string.
*/

const broken = x => x.split('').map(item => item === '1' ? '0' : '1').join('');

console.log(broken("1"), "0");
console.log(broken("10000000101101111110011001000"), "01111111010010000001100110111");
console.log(broken("100010"), "011101");

// "Very Even" Numbers. (7 kyu)

/* 
Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

Examples
number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even

number = 5 => returns false

number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
Note: The numbers will always be 0 or positive integers!
*/

const isVeryEvenNumber = n => n < 10 ?
	n % 2 === 0 :
	isVeryEvenNumber(n.toString().split('').reduce((acc, item) => acc + parseInt(item, 10), 0));

console.log(isVeryEvenNumber(0), true);
console.log(isVeryEvenNumber(4), true);
console.log(isVeryEvenNumber(12), false);
console.log(isVeryEvenNumber(222), true);
console.log(isVeryEvenNumber(400000220), true);
console.log(isVeryEvenNumber(5), false);
console.log(isVeryEvenNumber(88), false);
console.log(isVeryEvenNumber(45), false);

// Javascript filter - 1 (7 kyu)

/* 
While developing a website, you detect that some of the members have troubles logging in. 
Searching through the code you find that all logins ending with a "_" make problems. 
So you want to write a function that takes an array of pairs of login-names and e-mails, 
and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

If you have the input-array:

[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output

[ [ "bar_", "bar@bar.com" ] ]
You have to use the filter-method which returns each element of the array for which the filter-method returns true.
*/

const searchNames = logins => logins.filter(a => a[0][a[0].length - 1] === '_');
// const searchNames = logins => logins.filter(a => a[0].endsWith('_'));

console.log(searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]), [["bar_", "bar@bar.com"]]);

// Find The Duplicated Number in a Consecutive Unsorted List (7 kyu)

/* 
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. 
[1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/

const findDup = arr => {
	const max = Math.max(...arr);
	for (let i = 1; i <= max; i++) {
		if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
			return i;
		}
	}
}

console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]), 5);
console.log(findDup([1, 2, 2, 3]), 2);

// Exclamation marks series #5: Remove all exclamation marks from the end of words (7 kyu)

/* 
Remove all exclamation marks from the end of words. Words are separated by a single space. 
There are no exclamation marks within a word.
*/

const remove = string => {
	const result = [];
	const arr = string.split(' ');
	for (let i = 0; i < arr.length; i++) {
		const newArr = arr[i].split('').reverse();
		for (let j = 0; j < newArr.length; j++) {
			if (newArr[j] !== '!') {
				result.push(newArr.slice(j).reverse().join(''));
				break;
			}
		}
	}
	return result.join(' ');
}

console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi");
console.log(remove("!Hi"), "!Hi");
console.log(remove("!Hi!"), "!Hi");
console.log(remove("Hi! Hi!"), "Hi Hi");
console.log(remove("!!!Hi !!hi!!! !hi"), "!!!Hi !!hi !hi");

// How many consecutive numbers are needed? (7 kyu)

/* 
Create the function consecutive(arr) that takes an array of integers and return the minimum number 
of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to 
the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/

const consecutive12 = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) - arr.length + 1 : 0;

console.log(consecutive12([4, 8, 6]), 2);
console.log(consecutive12([1, 2, 3, 4]), 0);
console.log(consecutive12([]), 0);
console.log(consecutive12([1]), 0);

// Largest Elements (7 kyu)

/* 
Write a program that outputs the top n elements from a list.
*/

const largest = (n, xs) => xs.sort((a, b) => b - a).slice(0, n).reverse();

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 10]);
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]), [5, 5, 5]);
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]), [3, 5, 9, 13, 22, 50, 63]);
console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5]), []);

// filterEvenLengthWords (7 kyu)

/* 
Write a function called "filterEvenLengthWords".
Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements
of the given array whose length is an even number.
var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
*/

const filterEvenLengthWords = words => words.filter(wordele => wordele.length % 2 === 0);

console.log(filterEvenLengthWords(['Hello', 'World']));
console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']));

// Plus - minus - plus - plus - ... - Count (7 kyu)

/* 
Count how often sign changes in array.
*/

const catchSignChange = arr => {
	let count = 0;
	if (arr.length < 2) {
		return 0;
	} else {
		for (let i = 1; i < arr.length; i++) {
			if ((arr[i] < 0 && arr[i - 1] >= 0) || (arr[i] >= 0 && arr[i - 1] < 0)) {
				count++;
			}
		}
		return count;
	}
}

console.log(catchSignChange([1, 3, 4, 5]), 0);
console.log(catchSignChange([1, -3, -4, 0, 5]), 2);
console.log(catchSignChange([]), 0);
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77]), 3);

// Scrolling Text (7 kyu)

/* 
Let's create some scrolling text!
Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
*/

const scrollingText = text => {
	const result = [];
	for (let i = 0; i < text.length; i++) {
		result.push(text.toUpperCase().slice(i) + text.toUpperCase().slice(0, i));
	}
	return result;
}

console.log(scrollingText("abc"), ["ABC", "BCA", "CAB"]);
console.log(scrollingText("CODEWARS"), ["CODEWARS",
	"ODEWARSC",
	"DEWARSCO",
	"EWARSCOD",
	"WARSCODE",
	"ARSCODEW",
	"RSCODEWA",
	"SCODEWAR"]);

// Find the calculation type (7 kyu)

/*
	You have to create a function calcType, which receives 3 arguments: 
	2 numbers, and the result of an unknown operation performed on them (also a number).
Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
The possible return strings are: "addition", "subtraction", "multiplication", "division".
*/

const calcType = (a, b, res) => {
	switch (res) {
		case a + b:
			return 'addition';
		case a * b:
			return 'multiplication';
		case a - b:
			return 'subtraction';
		case a / b:
			return 'division';
	}
};

console.log(calcType(1, 2, 3), 'addition');
console.log(calcType(10, 4, 40), 'multiplication');
console.log(calcType(10, 5, 5), 'subtraction');
console.log(calcType(9, 5, 1.8), 'division');

// Number-Star ladder (7 kyu)

/* 
Using n as a parameter in the function pattern, where n should be a natural number, 
complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)

Examples
pattern(3) should return `"1\n12\n1*3", e.g. the following:

1
1*2
1**3
pattern(10): should return the following:

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10
Note that there shouldn't be any trailing newlines.
*/

const pattern1 = n => {
	let arr = [];
	for (let i = 1; i < n + 1; i++) {
		arr.push('1' + '*'.repeat(i - 1) + i)
	}
	return arr.join('\n').replace('1', '');
}

console.log(pattern1(3), "1\n1*2\n1**3");
console.log(pattern1(7), "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");


// Consecutive letters (7 kyu)

/* 
In this Kata, we will check if a string contains consecutive letters 
as they appear in the English alphabet and if each letter occurs only once.
*/

const solve = string =>
	string
		.split("")
		.sort()
		.map((i) => i.charCodeAt())
		.every(
			(_element, index, array) =>
				index === 0 || array[index] - array[index - 1] === 1
		);

console.log(solve("abc"), true);
console.log(solve("abd"), false);
console.log(solve("dabc"), true);
console.log(solve("abbc"), false);

// Is every value in the array an array? (7 kyu)

/* 
Is every value in the array an array?
This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
Examples:
[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

const arrCheck = value => value.every(Array.isArray);

console.log(arrCheck([]), true);
console.log(arrCheck([['string']]), true);
console.log(arrCheck([[], {}]), false);
console.log(arrCheck([[1], [2], [3]]), true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);

// Debug the functions EASY (7 kyu)

/* 
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
 */

const multi = arr => arr.reduce((acc, item) => acc * item);

const add = arr => arr.reduce((acc, item) => acc + item);

const reverse12 = str => str.split('').reverse().join('');

console.log(multi([5, 1, 5]), 25);
console.log(add([9, 8, 5]), 22);

// Debug Basic Calculator (7 kyu)

/* 
Debug a function called calculate that takes 3 values. The first and third values are numbers. 
The second value is a character. If the character is "+" , "-", "*", or "/", 
the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null.

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Kind of a fork (not steal :)) of Basic Calculator kata by TheDoctor.
*/

const calculate123 = (a, o, b) => {
	switch (o) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
			return b !== 0 ? a / b : null;

		default:
			return null;
	}
};

console.log(calculate123(2, "+", 4), 6);
console.log(calculate123(6, "-", 1.5), 4.5);
console.log(calculate123(-4, "*", 8), -32);
console.log(calculate123(49, "/", -7), -7);
console.log(calculate123(8, "m", 2), null);
console.log(calculate123(4, "/", 0), null);

// Show multiples of 2 numbers within a range (7 kyu)

/* 
Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation
*/

const multiples = (s1, s2, s3) => {
	const result = [];
	for (let i = s1; i < s3; i++) {
		if (i % s1 === 0 && i % s2 === 0) {
			result.push(i);
		}
	}
	return result;
}

console.log(multiples(2, 4, 40), [4, 8, 12, 16, 20, 24, 28, 32, 36]);
console.log(multiples(13, 5, 800), [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]);
console.log(multiples(13, 15, 800), [195, 390, 585, 780]);

// Calculate mean and concatenate string (7 kyu)

/* 
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. 
There will always be 10 integers and 10 characters. 
Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]
In C# and Java the mean return is a double.
*/

const mean = lst => {
	let a = lst.filter(value => value.match(/[a-z]/gi)).join('');
	let b = lst.filter(value => value.match(/[0-9]/gi)).reduce((acc, cur) => acc + parseFloat(cur), 0) / 10
	return [b, a]
}

console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]), [3.6, "udiwstagwo"]);
console.log(mean(["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]), [3.0, "cxwyvuhinu"]);

// Substring fun (7 kyu)

/* 
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, 
where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
*/

const nthChar = words => {
	let result = '';
	words.forEach((item, i, arr) => { result += item[i] });
	return result;
}

console.log(nthChar([]), '');
console.log(nthChar(['yoda', 'best', 'has']), 'yes');

// How many times should I go ? (7 kyu)

/* 
Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.

In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. 
The function take 2 arguments annual_price and individual_price.
*/

const howManyTimes = (annualPrice, individualPrice) => {
	let count = 0;
	let currentMany = 0;
	if (individualPrice === 0) return 0;
	while (currentMany < annualPrice) {
		currentMany += individualPrice;
		count++
	}
	return count;
}

console.log(howManyTimes(40, 15), 3);
console.log(howManyTimes(30, 10), 3);
console.log(howManyTimes(80, 15), 6);

// Password maker (7 kyu)

/* 
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make 
a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
*/

const makePassword = phrase => phrase.split(' ').map(item => {
	switch (item[0].toLowerCase()) {
		case 'i':
			return '1';
		case 'o':
			return '0';
		case 's':
			return '5';

		default:
			return item[0];
	}
}).join('');

console.log(makePassword("Give me liberty or give me death"), "Gml0gmd", "Wrong output for 'Give me liberty or give me death'");
console.log(makePassword("Keep Calm and Carry On"), "KCaC0", "Wrong output for 'Keep Calm and Carry On'");

// sPoNgEbOb MeMe (7 kyu)

/* 
You need to create a function that converts the input into this format, 
with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

const spongeMeme = sentence => sentence
	.split('')
	.map((item, i) => (i % 2) ? item.toLowerCase() : item.toUpperCase())
	.join('');

console.log(spongeMeme("stop Making spongebob Memes!"), 'StOp mAkInG SpOnGeBoB MeMeS!');

// Interactive Dictionary (7 kyu)

/* 
In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana
*/

class Dictionary {
	constructor() {
		this.diction = {};
	}

	newEntry(key, value) {
		this.diction[key] = value;
	}

	look(key) {
		return this.diction[key] || `Can\'t find entry for ${key}`;
	}
}

let d = new Dictionary();
d.newEntry('Apple', 'A fruit');
console.log(d.look('Apple'));
d.newEntry('Soccer', 'A sport');
console.log(d.look('Soccer'));
console.log(d.look('Ball'));

// Help Suzuki rake his garden! (7 kyu)

/* 
Help Suzuki rake his garden!

The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. 
Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be 
removed during the daily raking such as insects or moss.

You will be given a string representing the garden such as:

garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel 
gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel 
gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail 
slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel 
gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel 
snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel 
gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
Rake out any items that are not a rock or gravel and replace them with gravel such that:

garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
Returns a string with all items except a rock or gravel replaced with gravel:

garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'
*/

const rakeGarden = garden => garden.split(' ')
	.map(item => item === 'gravel' || item === 'rock' ? item : 'gravel')
	.join(' ');

const garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
console.log(rakeGarden(garden1), 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');

// Chain me (7 kyu)

/* 
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, 
	which takes the starting value as its input). Return the final value after execution is complete.
*/

const chain = (input, fs) => {
	let res = input;;

	for (let i = 0; i < fs.length; i++) {
		res = fs[i](res);
	}
	return res;
}

function add(x) {
	return x + 10;
}

function mult(x) {
	return x * 30;
}

console.log(chain(2, [add, mult]), 360, "Error: chain function does not work");

// Find the Capitals (7 kyu)

/* 
Complete the method that takes a sequence of objects with two keys each: country or state, and capital. 
Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.
*/

const capital = capitals => capitals.map(item => `The capital of ${item.country || item.state} is ${item.capital}`);

state_capitals = [{ state: 'Maine', capital: 'Augusta' }];
console.log(capital(state_capitals)[0], "The capital of Maine is Augusta");

country_capitals = [{ 'country': 'Spain', 'capital': 'Madrid' }];
console.log(capital(country_capitals)[0], "The capital of Spain is Madrid");

mixed_capitals = [{ "state": 'Maine', capital: 'Augusta' }, { country: 'Spain', "capital": "Madrid" }];
console.log(capital(mixed_capitals)[1], "The capital of Spain is Madrid");

// The Poet And The Pendulum (7 kyu)

/* 
Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

The Smallest element of the list of integers , must come in center position of array/list.

The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
*/

const pendulum = values => {
	values.sort((a, b) => a - b);
	const result = [values[0]];
	let right = true;

	for (let i = 1; i < values.length; i++) {
		if (right) {
			result.push(values[i]);
		} else {
			result.unshift(values[i]);
		}
		right = !right;
	}

	return result;
};

console.log(pendulum([33, 38, 38, 36, 43, 48, 32, 40, 47, 50, 33]), [50, 47, 40, 38, 33, 32, 33, 36, 38, 43, 48]);
console.log(pendulum([49, 40, 41, 41, 39, 43, 40, 46, 30, 47, 46, 40]), [47, 46, 41, 40, 40, 30, 39, 40, 41, 43, 46, 49]);
console.log(pendulum([48, 41, 38, 35, 50, 46, 38, 42, 37, 49, 44, 32, 37]), [50, 48, 44, 41, 38, 37, 32, 35, 37, 38, 42, 46, 49]);
console.log(pendulum([49, 30, 39, 30, 40, 44, 43, 48, 47, 50, 42, 48, 33]), [50, 48, 47, 43, 40, 33, 30, 30, 39, 42, 44, 48, 49]);
console.log(pendulum([48, 43, 35, 47, 39, 38, 38, 46, 49, 32, 42]), [49, 47, 43, 39, 38, 32, 35, 38, 42, 46, 48]);

// Return a string's even characters. (7 kyu)

/* 
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

const evenChars = x => x.length > 100 || x.length < 2 ? "invalid string" : [...x].filter((z, i) => 1 == i % 2);

console.log(evenChars("1234"), ["2", "4"]);
console.log(evenChars(";;;--"), [";", "-"]);
console.log(evenChars("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"]);
console.log(evenChars("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"), "invalid string")
console.log(evenChars("a"), "invalid string");
console.log(evenChars(""), "invalid string");

// Find Duplicates (7 kyu)

/* 
Given an array, find the duplicates in that array, and return a new array of those duplicates. 
The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
*/

const duplicates1 = arr => [...new Set(arr.filter((v, i, arr) => arr.indexOf(v) !== i))];

console.log(duplicates1([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']), [4, 3, 1]);
console.log(duplicates1([0, 1, 2, 3, 4, 5]), []);

// Vampire Numbers (7 kyu)

/* 
Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.
*/

const vampire_test = (a, b) => (a.toString() + b.toString()).split('').sort().join() ===
	(a * b).toString().split('').sort().join();

console.log(vampire_test(21, 6), true, "Basic: 21 * 6 = 126 should return true");
console.log(vampire_test(204, 615), true, "Basic: 204 * 615 = 125460 should return true");
console.log(vampire_test(30, -51), true, "One Negative: 30 * -51 = -1530 should return true");
console.log(vampire_test(-246, -510), false, "Double Negatives: -246 * -510 = 125460 should return false (The negative signs aren't present on the product)");
console.log(vampire_test(2947050, 8469153), true, "Large: 2947050 * 8469153 = 24959017348650 should return true");
console.log(vampire_test(2947051, 8469153), false, "Large: 2947051 * 8469153 = 24959025817803 should return false");

// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!! (6 kyu)

/* 
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 
What's the use of saying "Eureka"? Because this sum gives the same number: 
89=81+92
89=8 1 +9 2 

The next number in having this property is 135
135:

See this property again: 
135=11+32+53
135=1 1 +3 2 +5 3 

Task
We need a function to collect these numbers, that may receive two integers 
�a, �b that defines the range 
[�,�]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[�,�]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!!
*/

const sumDigPow = (a, b) => {
	var res = [];
	while (a <= b) {
		if (a.toString().split('').reduce((acc, item, i) => acc + parseInt(item, 10) ** (i + 1), 0) === a)
			res.push(a);
		a++;
	}
	return res;
}

console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
console.log(sumDigPow(10, 100), [89]);
console.log(sumDigPow(90, 100), []);
console.log(sumDigPow(90, 150), [135]);
console.log(sumDigPow(50, 150), [89, 135]);
console.log(sumDigPow(10, 150), [89, 135]);

// Simple Encryption #1 - Alternating Split (7 kyu)

/* 
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all 
the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

const encrypt = (text, n) => {
	if (!text || n <= 0) return text;
	while (n--) {
		let ans = '';
		for (let i = 1; i < text.length; i += 2) {
			ans += text[i];
		}
		for (let i = 0; i < text.length; i += 2) {
			ans += text[i];
		}
		text = ans;
	}
	return text;
};

const decrypt = (encryptedText, n) => {
	if (!encryptedText || n <= 0) return encryptedText;
	const ans = new Array(encryptedText.length);
	while (n--) {
		let j = 0;
		for (let i = 1; i < ans.length; i += 2) {
			ans[i] = encryptedText[j++];
		}
		for (let i = 0; i < ans.length; i += 2) {
			ans[i] = encryptedText[j++];
		}
		encryptedText = ans.join('');
	}
	return encryptedText;
};

console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

// longest_palindrome (6 kyu)

/* 
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
*/

const twosDifference = input => input.sort((a, b) => a - b)
	.reduce((acc, item, _i, arr) => {
		if (arr.includes(item + 2)) {
			acc.push([item, item + 2])
		}
		return acc;
	}, []);

console.log(twosDifference([1, 2, 3, 4]), [[1, 3], [2, 4]]);
console.log(twosDifference([1, 3, 4, 6]), [[1, 3], [4, 6]]);
console.log(twosDifference([1, 23, 3, 4, 7]), [[1, 3]]);
console.log(twosDifference([4, 3, 1, 5, 6]), [[1, 3], [3, 5], [4, 6]]);

// Primorial Of a Number (6 kyu)

/* 
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, 
only prime numbers are multiplied to calculate the primorial of a number. 
It's denoted with P# and it is the product of the first n prime numbers.

Explanation:
Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .
*/

const numPrimorial = n => {
	const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
	primeNumbers.length = n;
	return primeNumbers.reduce((acc, item) => acc * item, 1);
}

console.log(numPrimorial(3), 30);
console.log(numPrimorial(4), 210);
console.log(numPrimorial(5), 2310);
console.log(numPrimorial(8), 9699690);
console.log(numPrimorial(9), 223092870);

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented? (6 kyu)

/* 
You will be given a sequence of objects (associative arrays in PHP) representing data about developers 
who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 
'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
*/

const allContinents = list => {
	const continents = [];
	list.forEach((item) => {
		if (!continents.includes(item.continent)) {
			continents.push(item.continent);
		}
	});
	return continents.length === 5;
}

const list11 = [
	{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
	{ firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
	{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
	{ firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
	{ firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

const list21 = [
	{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
];

console.log(allContinents(list11), true);
console.log(allContinents(list21), false);

// Calculate String Rotation (6 kyu)

/* 
Write a function that receives two strings and returns n, where n is equal to the number of 
characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has 
been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
*/

const shiftedDiff = (first, second) => {
	if (first.length !== second.length) {
		return -1;
	}
	return (second + second).indexOf(first);
};

console.log(shiftedDiff("eecoff", "coffee"), 4);
console.log(shiftedDiff("Moose", "moose"), -1);
console.log(shiftedDiff("isn't", "'tisn"), 2);
console.log(shiftedDiff("Esham", "Esham"), 0);
console.log(shiftedDiff(" ", " "), 0);
console.log(shiftedDiff("hoop", "pooh"), -1);
console.log(shiftedDiff("  ", " "), -1);

// Simple Fun #79: Delete a Digit (7 kyu)

/* 
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
*/

const deleteDigit = n => {
	let res = 0;
	const arr = n.toString();

	for (let i = 0; i < arr.length; i++) {
		let currentNumber = parseInt(((arr.slice(0, i) + arr.slice(i + 1))), 10)
		if (currentNumber > res) {
			res = currentNumber;
		}
	}
	return res;
}

console.log(deleteDigit(152), 52);
console.log(deleteDigit(1001), 101);
console.log(deleteDigit(10), 1);

// Simple frequency sort (7 kyu)

/* 
In this Kata, you will sort elements in an array by decreasing frequency of elements. 
If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency. 
If two elements have same frequency, we sort by increasing value
More examples in test cases.
*/

const solve = arr => {
	const obj = {};
	arr.forEach(item => {
		obj[item] = obj[item] + 1 || 1;
	});
	return [...arr].sort((a, b) => obj[b] - obj[a] || a - b);
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]), [3, 3, 3, 5, 5, 7, 7, 2, 9]);
console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]), [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]);
console.log(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]), [9, 9, 9, 9, 4, 4, 5, 5, 6, 6]);
console.log(solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]), [1, 1, 2, 2, 3, 3, 4, 4, 5, 8]);
console.log(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]), [0, 0, 4, 4, 9, 9, 3, 5, 7, 8]);

// Function Composition (6 kyu)

/* 
Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. 
It is explained well here, but this is my explanation, in simple mathematical notation:

f3 = compose( f1 f2 )
	Is equivalent to...
f3(a) = f1( f2( a ) )
Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. 
Ruby functions will be passed, and should return, either a proc or a lambda. 
Remember that the resulting composed function may be passed multiple arguments!

compose(f , g)(x)
=> f( g( x ) )
*/

const compose = (f, g) => (...args) => f(g(...args));

const add1 = a => a + 1;
const addAll3 = (a, b, c) => a + b + c;

console.log(compose(add1, addAll3)(1, 2, 3), 7);

// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names (6 kyu)

/* 
You will be given an array of objects representing data about developers who have signed 
up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII 
representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.
*/

const findOddNames = list => list.filter(item => item.firstName.split('')
	.reduce((acc, item) => acc + item.charCodeAt(), 0) % 2 !== 0);

const list1234 = [
	{ firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
	{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

const answer123 = [
	{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1234), answer123);

// first character that repeats (6 kyu)

/* 
Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/

const firstDup = s => s.split('').filter((item, i, arr) => {
	if (i !== arr.lastIndexOf(item)) {
		return item;
	}
})[0];

console.log(firstDup('tweet'), 't');
console.log(firstDup('Ode to Joy'), ' ');
console.log(firstDup('ode to joy'), 'o');
console.log(firstDup('bar'), undefined);
console.log(firstDup('123123'), '1');
console.log(firstDup('!@#$!@#$'), '!');

// Strip Url Params (6 kyu)

/* 
Complete the method so that it does the following:
Removes any duplicate query string parameters from the url (the first occurence should be kept)
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
 */

const stripUrlParams = (url, paramsToStrip) => {

	const [urlPath, urlParams] = url.split('?');
	const paramKVMap = {};
	let urlDistinctParams = ''
	if (urlParams) {
		urlParams.split('&').forEach((e) => {
			let [key, val] = e.split('=');
			if (!paramsToStrip || !paramsToStrip.includes(key)) {
				if (!paramKVMap[key]) {
					paramKVMap[key] = val;
					urlDistinctParams += `${key}=${val}&`;
				}
			}
		});
		if (urlDistinctParams) {
			urlDistinctParams = urlDistinctParams.substring(0, urlDistinctParams.length - 1);
		}
	}
	return urlPath + (urlDistinctParams ? '?' + urlDistinctParams : '');
}

const url1 = 'www.codewars.com?a=1&b=2';
const url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
const url3 = 'www.codewars.com?a=1';
const url4 = 'www.codewars.com';

console.log(stripUrlParams(url1), url1, "Didn't return correct value when given a url that had nothing to be stripped");
console.log(stripUrlParams(url2), url1, "Didn't strip duplicates from url");
console.log(stripUrlParams(url2, ['b']), url3, "Didn't strip param that was specified in paramsToStrip array");
console.log(stripUrlParams(url4, ['b']), url4, "Didn't return an un-modifed url when there was nothing to strip");
console.log(stripUrlParams(url1, ['a', 'b']), url4, "Didn't strip all parameters");

// Message Validator (6 kyu)

/* 
In this kata, you have an input string and you should check whether it is a valid message. 
To decide that, you need to split the string by the numbers, 
and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, 
hi and the function should return true, because "hey" is 3 characters, "hello" is 5, 
and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: 
e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true
*/

const isAValidMessage = message => {
	const reg = /\d+/;
	const splitArr = [];

	while (message.length) {
		const num = reg.test(message) && !message.search(reg) && message.match(reg)[0];
		message = message.replace(num, '');
		const str = reg.test(message) ? message.slice(0, message.search(reg)) : message;
		message = message.replace(str, '');

		splitArr.push(num);
		splitArr.push(str);
	}

	for (let i = 0; i < splitArr.length; i += 2) {
		if (splitArr[i] * 1 !== splitArr[i + 1].length) {
			return false;
		}
	}

	return true;
}

console.log(isAValidMessage("3hey5hello2hi"), true);
console.log(isAValidMessage("4code13hellocodewars"), true);
console.log(isAValidMessage("3hey5hello2hi5"), false);
console.log(isAValidMessage("code4hello5"), false);
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee"), true);
console.log(isAValidMessage(""), true);

// "Stringing"+"Me"+"Along" (6 kyu)

/* 
Implement a function that receives a string, and lets you extend it with repeated calls. 
When no argument is passed you should return a string consisting of space-separated words you've received earlier.

Note: There will always be at least 1 string; all inputs will be non-empty.

For example:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
Tip (helpful, but not necessary): Try using classes!

Good luck and happy coding!
*/

const createMessage = (str) => (newStr) => newStr ? createMessage(str + ' ' + newStr) : str;

console.log(createMessage("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?");

// Hard Time Bomb (6 kyu)

/* 
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. 
There is a global var that holds the numeric ID to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);
*/

const wireCode = Object.keys(global);
const numVariable = wireCode.filter(key => (typeof global[key] === 'number'))[0]
Bomb.CutTheWire(global[numVariable]);

// Simple Substitution Cipher Helper (6 kyu)

/* 
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, 
where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be.
*/

function SubstitutionCipher(abc1, abc2) {
	this.encode = function (str) {
		let newStr = '';
		for (let i = 0; i < str.length; i++) {
			const j = abc1.indexOf(str[i]);
			j !== -1 ? newStr += abc2[j] : newStr += str[i];
		}
		return newStr;
	}
	this.decode = function (str) {
		let newStr = '';
		for (let i = 0; i < str.length; i++) {
			const j = abc2.indexOf(str[i]);
			j !== -1 ? newStr += abc1[j] : newStr += str[i];
		}
		return newStr;
	}
}

const abc1 = "abcdefghijklmnopqrstuvwxyz";
const abc2 = "etaoinshrdlucmfwypvbgkjqxz";
const sub = new SubstitutionCipher(abc1, abc2);

console.log(sub.encode("xyz"), "qxz");
console.log(sub.encode("abc"), "eta");
console.log(sub.encode("aeiou"), "eirfg");

console.log(sub.decode("eta"), "abc");
console.log(sub.decode("qxz"), "xyz");
console.log(sub.decode("eirfg"), "aeiou");

// Framed Reflection (6 kyu)

/* 
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). 
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:
*********
* elleH *
* dlroW *
*********

Words in your solution should be left-aligned.
*/

const mirror = text => {
	const stars = Math.max(...text.split(' ').map(v => v.length)) + 4;
	const space = Math.max(...text.split(' ').map(v => v.length));
	const arr = text.split(' ')
		.map(v => '\n* ' + v.split('').reverse().join('') + ' '.repeat(space - v.length) + ' *\n')
		.join('')
		.replace(/\*\n\n\*/g, '*\n*');
	return '*'.repeat(stars) + arr + '*'.repeat(stars)
};

console.log(mirror('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
console.log(mirror('Codewars'), '************\n* srawedoC *\n************');

// Isograms (7 kyu)

/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

const isIsogram = str => {
	if (str.isEmpty) {
		return true;
	} else {
		str = str.toLowerCase();
	}

	const arr = str.split('');
	const sortedArr = arr.slice().sort();

	for (let i = 0; i < arr.length; i++) {
		if (sortedArr[i + 1] == sortedArr[i]) {
			return false;
		}
	}
	return true;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");

// Sum of odd numbers (7 kyu)

/* 
Given the triangle of consecutive odd numbers:

				 1
			 3     5
		 7     9    11
	13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

const rowSumOddNumbers = n => Math.pow(n, 3);

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(4), 64);
console.log(rowSumOddNumbers(42), 74088);

// Find the divisors! (7 kyu)

/* 
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's 
divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, 
String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

const divisors = integer => {
	let divisors = [];
	for (let i = 2; i < integer; i++) {
		if (integer % i == 0) {
			divisors.push(i);
		}
	}

	return divisors.length !== 0 ? divisors : `${integer} is prime`;
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");

// Breaking chocolate problem (7 kyu)

/* 
Your task is to split the chocolate bar of given dimension n x m into small squares. 
Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, 
but for size 3 x 1 you must do two breaks.
If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). 
Input will always be a non-negative integer.
*/

const breakChocolate = (n, m) => n > 0 && m > 0 ? (n - 1) + n * (m - 1) : 0;

console.log(breakChocolate(5, 5), 24);
console.log(breakChocolate(1, 1), 0);
console.log(breakChocolate(5, 0), 0);

// Two fighters, one winner. (7 kyu)

/* 
Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. 
Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. 
You can mutate the Fighter objects.
Your function also receives a third argument, a string, with the name of the fighter that attacks first.
*/

const declareWinner = (fighter1, fighter2, firstAttacker) => {
	const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
	const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
	return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker
};

function Fighter(name, health, damagePerAttack) {
	this.name = name;
	this.health = health;
	this.damagePerAttack = damagePerAttack;
	this.toString = function () {
		return this.name;
	}
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald");
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald");
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald");
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald");

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe (7 kyu)

/* 
You will be given an array of objects (hashes in ruby) representing data about developers who 
have signed up to attend the coding meetup that you are organising for the first time.
Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.
*/

const countDevelopers = list => list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length;

const list12345 = [
	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
	{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
	{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

const list234 = [
	{ firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
	{ firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

console.log(countDevelopers(list12345), 1, "Noah is the only JavaScript developer from Europe");
console.log(countDevelopers(list234), 0, "Lukas is not a JS devolper");

// Minimize Sum Of Array (Array Series #1) (7 kyu)

/* 
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/

const minSum = arr => {
	const sort = arr.sort((a, b) => a - b)
	let minSum = 0;
	for (let i = 0; i < arr.length / 2; i++) {
		minSum += sort[i] * sort[sort.length - 1 - i]
	}
	return minSum
};

console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);

// Which color is the brightest? (7 kyu)

/* 
One of the common ways of representing color is the RGB color model, in which the Red, Green, 
and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

One of the ways to determine brightness of a color is to find the value V of the alternative HSV 
(Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.
*/

const brightest = colors => {
	let colorIndex = 0;
	let brightest = 0;

	const getColorValue = (currentColor, startPos, endPos, notation = 16) =>
		parseInt(currentColor.slice(startPos, endPos), notation);

	for (let i = 0; i < colors.length; i++) {
		const currentColor = colors[i];
		const R = getColorValue(currentColor, 1, 3);
		const G = getColorValue(currentColor, 3, 5);
		const B = getColorValue(currentColor, 5, 7);
		const maxValue = Math.max(R, G, B);
		if (maxValue > brightest) {
			brightest = maxValue;
			colorIndex = i;
		}
	}

	return colors[colorIndex];
}

console.log(brightest(["#001000", "#000000"]), "#001000");
console.log(brightest(["#ABCDEF", "#123456"]), "#ABCDEF");
console.log(brightest(["#00FF00", "#FFFF00"]), "#00FF00");
console.log(brightest(["#FFFFFF", "#1234FF"]), "#FFFFFF");
console.log(brightest(["#FFFFFF", "#123456", "#000000"]), "#FFFFFF");

// Handshake problem (6 kyu)

/* 
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. 
He also knows that some of the possible handshake combinations may not happen.
However, Johnny would like to know the minimal amount of people that participated this year just by counting 
all the handshakes.
Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people 
needed to perform these handshakes (a pair of farmers handshake only once).
*/

const getParticipants = handshakes => {
	//! maxHandshakes = countParticipants × (countParticipants - 1) / 2 ===>
	//! countParticipants**2 - countParticipants - 2 * maxHandshakes = 0; (quadratic equation )

	let countParticipants = 0;
	const a = 1, b = -1, c = -handshakes * 2;

	if (!handshakes) {
		return countParticipants;
	}

	const D = b ** 2 - 4 * a * c;
	const countParticipantsFirst = (-(b) - Math.sqrt(D)) / 2 * a;
	const countParticipantsSecond = (-(b) + Math.sqrt(D)) / 2 * a;
	countParticipants = Math.max(countParticipantsFirst, countParticipantsSecond)

	return Math.ceil(countParticipants);
};

console.log(getParticipants(1), 2);
console.log(getParticipants(0), 0);
console.log(getParticipants(3), 3);
console.log(getParticipants(6), 4);
console.log(getParticipants(7), 5);
console.log(getParticipants(12), 6);
console.log(getParticipants(19), 7);
console.log(getParticipants(27), 8);

// Array Deep Count (6 kyu)

/* 
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

const deepCount = arr => arr.reduce((res, item) => Array.isArray(item) ? res += deepCount(item) : res, arr.length);

console.log(deepCount([]), 0, "Expected 0");
console.log(deepCount([1, 2, 3]), 3, "Expected 3");
console.log(deepCount(["x", "y", ["z"]]), 4, "Expected 4");
console.log(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7");
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");

// N-th Fibonacci (6 kyu)

/* 
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

	nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

const nthFibo = n => {
	const fibonacciSeries = [0, 1];

	for (let i = 2; i <= n; i++) {
		fibonacciSeries[i] = fibonacciSeries[i - 2] + fibonacciSeries[i - 1]
	}

	return fibonacciSeries[n - 1];
}

console.log(nthFibo(1), 0, "1-st Fibo");
console.log(nthFibo(2), 1, "2-nd Fibo");
console.log(nthFibo(3), 1, "3-rd Fibo");
console.log(nthFibo(4), 2, "4-th Fibo");
console.log(nthFibo(5), 3, "5-th Fibo");
console.log(nthFibo(6), 5, "6-th Fibo");
console.log(nthFibo(7), 8, "7-th Fibo");
console.log(nthFibo(8), 13, "8-th Fibo");
console.log(nthFibo(9), 21, "9-th Fibo");

// Unlucky Days (7 kyu)

/* 
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.
Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

const unluckyDays = year => {
	let countFridayThirteenth = 0;
	for (let i = 0; i < 12; i++) {
		const month = i;
		const date = new Date(year, month, 13);
		date.getDay() === 5 ? countFridayThirteenth++ : null;
	}
	return countFridayThirteenth;
}

console.log(unluckyDays(1586), 1, "should be: 1");
console.log(unluckyDays(1001), 3, "should be: 3");
console.log(unluckyDays(2819), 2, "should be: 2");
console.log(unluckyDays(2792), 2, "should be: 2");
console.log(unluckyDays(2723), 2, "should be: 2");
console.log(unluckyDays(1909), 1, "should be: 1");
console.log(unluckyDays(1812), 2, "should be: 2");
console.log(unluckyDays(1618), 2, "should be: 2");
console.log(unluckyDays(2132), 1, "should be: 1");
console.log(unluckyDays(2065), 3, "should be: 3");

// The Coupon Code (7 kyu)

/* 
Story
Your online store likes to give out coupons for special occasions. 
Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. 
All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December'];

	if (enteredCode === correctCode) {
		const [currentMonthAndDay, currentYear] = currentDate.split(', ');
		const [expirationMonthAndDay, expirationYear] = expirationDate.split(', ');

		if (Number(currentYear) < Number(expirationYear)) {
			return true;
		} else if (Number(currentYear) === Number(expirationYear)) {
			const [currentMonth, currentDay] = currentMonthAndDay.split(' ');
			const [expirationMonth, expirationDay] = expirationMonthAndDay.split(' ');

			if (months.indexOf(currentMonth) === months.indexOf(expirationMonth)) {
				return Number(currentDay) <= Number(expirationDay);
			} else if (months.indexOf(currentMonth) < months.indexOf(expirationMonth)) {
				return true;
			}
		}
	}

	return false;
};

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"), true);
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"), false);
console.log(checkCoupon("abc", "abc", "November 8, 2013", "November 5, 2014"), true);

// Head, Tail, Init and Last (7 kyu)

/* 
Haskell has some useful functions for dealing with lists:
$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. 
Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
*/

const head = (arr) => arr[0];
const tail = (arr) => arr.slice(1, arr.length);
const init = (arr) => arr.slice(0, arr.length - 1);
const lastF = (arr) => arr[arr.length - 1];

console.log(head([5, 1]), 5);
console.log(tail([1]), []);
console.log(init([1, 5, 7, 9]), [1, 5, 7]);
console.log(lastF([7, 2]), 2);

// Let's Recycle! (6 kyu)

/* 
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. 
The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material 
(and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/

const input = [
	{ type: 'rotten apples', material: 'organic' },
	{ type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
	{ type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
	{ type: 'amazon box', material: 'paper' },
	{ type: 'beer bottle', material: 'glass', secondMaterial: 'paper' }
];
const output = [
	['wine bottle', 'amazon box', 'beer bottle'],
	['wine bottle', 'beer bottle'],
	['rotten apples', 'out of date yogurt'],
	['out of date yogurt']
];

const recycle = array => {
	const paperTrashBin = [];
	const glassTrashBin = [];
	const organicTrashBin = [];
	const plasticTrashBin = [];
	for (const obj of array) {
		obj.material === 'paper' || obj.secondMaterial === 'paper' ? paperTrashBin.push(obj.type) : null;
		obj.material === 'glass' || obj.secondMaterial === 'glass' ? glassTrashBin.push(obj.type) : null;
		obj.material === 'organic' || obj.secondMaterial === 'organic' ? organicTrashBin.push(obj.type) : null;
		obj.material === 'plastic' || obj.secondMaterial === 'plastic' ? plasticTrashBin.push(obj.type) : null;
	}

	return [paperTrashBin, glassTrashBin, organicTrashBin, plasticTrashBin];
}

console.log(recycle(input), output);

// Javascript Mathematician (7 kyu)

/* 
You are writing a function that takes two sets of arguments of arbitrary length. 
The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
*/

const calculate1234 = (...arg1) => {
	let sum = arg1.reduce((acc, item) => acc + item, 0)
	return (...arg2) => arg2.reduce((acc, item) => acc + item, 0) + sum;
};

console.log(calculate1234(1)(1), 2);
console.log(calculate1234(1, 1)(1), 3);
console.log(calculate1234(1, 1)(1, -1), 2);
console.log(calculate1234(2, 4)(3, 7, 1), 17);

// Can you keep a secret? (6 kyu)

/* 
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/

const createSecretHolder = secret => ({
	getSecret: () => secret,
	setSecret: (newSecret) => {
		secret = newSecret;
	}
});

const secretHolder = createSecretHolder(5);

console.log(secretHolder.getSecret(), 'returns 5');
console.log(secretHolder.setSecret(2));
console.log(secretHolder.getSecret(), 'returns 2');

// Run - length encoding (6 kyu)

/* 
Run-length encoding (RLE) is a very simple form of data compression in which runs of data 
(that is, sequences in which the same data value occurs in many consecutive data elements) 
are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. 
For a given string, return a list (or array) of pairs (or arrays) 
[ (i1, s1), (i2, s2), …, (in, sn) ], 
such that one can reconstruct the original string by replicating the character sx ix times 
and concatening all those strings. Your run-length encoding should be minimal, ie. 
for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. 
It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
	[[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
	[[34,'a'], [3,'b']]
*/

const runLengthEncoding = str => {
	let value = 1;
	return str.split('').reduce((acc, item, i, array) => {
		if (item !== array[i + 1]) {
			acc.push([value, item]);
			value = 1;
			return acc;
		} else {
			value++;
			return acc;
		}
	}, [])
};

console.log(runLengthEncoding(""), []);
console.log(runLengthEncoding("abc"), [[1, 'a'], [1, 'b'], [1, 'c']]);
console.log(runLengthEncoding("aab"), [[2, 'a'], [1, 'b']]);
console.log(runLengthEncoding("hello world!"),
	[[1, 'h'], [1, 'e'], [2, 'l'], [1, 'o'], [1, ' '], [1, 'w'], [1, 'o'], [1, 'r'], [1, 'l'], [1, 'd'], [1, '!']]);
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
	[[34, 'a'], [3, 'b']]);
console.log(
	runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
	[[12, 'W'], [1, 'B'], [12, 'W'], [3, 'B'], [24, 'W'], [1, 'B'], [14, 'W']]
);

// Walk the Object Path (6 kyu)

/* 
Implement the method find which takes in an two parameters object and path. 
The path will be a period-delimited string of properties that we will use to traverse 
through our object to find our target value.

Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790

Edge Cases And Further Consideration
Be sure to handle passing array indices. For example, if we have an object: { people: ['John', 'Dave', 'Lisa'] } 
and the path is 'people.1', the target value is 'Dave' which is the string at position 1 inside of the people array.

Also this method should handle invalid paths. If we have an object { user: { name: 'Dan' } } 
and the path is 'user.wallet.money', we should return undefined. 
Valid paths are exclusive to properties on the object which are not inherited, 
in other words it is specific to this object and does not need to look up the prototype chain.
*/

const object = {
	user: {
		name: {
			first: 'John',
			last: 'Snow'
		}
	}
};
const path = 'user.name.first';

const find = (object, path) => {
	path = path.split(/[.]/);
	for (const j in newPath) {
		if (object.hasOwnProperty(newPath[j]) === true) {
			object = object[newPath[j]];
		} else {
			return undefined;
		}
	}

	return object;
};
const actual = find(object, path);

console.log(actual, expected);

// Angle Between Clock Hands (6 kyu)

/* 
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), 
return the angle between the two hands of a 12-hour analog clock in radians.

Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 
because the hour hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
*/

const handAngle = date => {
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const anglePerHour = 360 / 12;
	const anglePerMinute = 360 / 60;

	const hourHand = hours * anglePerHour + minutes / 60 * anglePerHour;
	const minuteHand = minutes * anglePerMinute;

	const angleDegree = Math.abs(hourHand - minuteHand);
	const angelRadian = Math.min(360 - angleDegree, angleDegree) * Math.PI / 180;

	return angelRadian
};

const makeDate = (hours, minutes) => {
	const date = new Date();
	date.setMinutes(minutes);
	date.setHours(hours);
	return date;
};

console.log(handAngle(makeDate(0, 0)), 0.0);
console.log(handAngle(makeDate(12, 0)), 0.0);
console.log(handAngle(makeDate(6, 0)), 3.141592653589793);
console.log(handAngle(makeDate(1, 0)), 0.5235987755982988);
console.log(handAngle(makeDate(9, 0)), 1.5707963267948966);
console.log(handAngle(makeDate(10, 0)), 1.0471975511965976);
console.log(handAngle(makeDate(0, 15)), 1.4398966328953218);
console.log(handAngle(makeDate(0, 45)), 1.9634954084936207);
console.log(handAngle(makeDate(12, 30)), 2.8797932657906435);
console.log(handAngle(makeDate(7, 15)), 2.2252947962927703);
console.log(handAngle(makeDate(6, 5)), 2.6616271092913526);

// Human readable duration format (4 kyu)

/* 
Your task in order to complete this Kata is to write a function which formats a duration, 
given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". 
Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
	 "1 minute and 2 seconds"
* For seconds = 3662, your function should return
	 "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. 
In general, a positive integer and one of the valid units of time, separated by a space. 
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). 
Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. 
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. 
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". 
It means that the function should not return 61 seconds, but 1 minute and 1 second instead. 
Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

const formatDuration = seconds => {
	const time = {
		year: 31536000,
		day: 86400, hour: 3600,
		minute: 60,
		second: 1
	};
	const result = [];

	if (seconds === 0) {
		return 'now';
	}

	for (const key in time) {
		if (seconds >= time[key]) {
			let val = Math.floor(seconds / time[key]);
			result.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
			seconds = seconds % time[key];
		}
	}

	return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : result[0]
}

console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

// Javascript from the Inside #1 : Map (6 kyu)

/* 
#Description Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, 
it has to be inside the Array's prototype. Don't know what a 'prototype' is? 
This could help you a little as well as this kata.

Moving on, the defaults for Array.prototype.map, Array.prototype.reduce, 
Array.prototype.reduceRight and Array.prototype.forEach will be banned, 
in other words you'll have to create map from scratch.

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var multiply_by_two = function(x) { return x * 2 };
var one_to_nine_doubled = one_to_nine.map(multiply_by_two);
// Expected
[2, 4, 6, 8, 10, 12, 16, 18]
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.map is a function that takes a callback function and an object as 'context'
The callback function should receive the current item, it's index and array object itself
The context will be this inside the callback function
NOTE

You should take into account that an array created by [] and a new Array(length) are entirely different 
on the content they posses and you should take into account that at the moment of building your solution.
A better illustration for that:
[1, 2, 3]; // { '0': 1, '1': 2, '2': 3, length: 3 }
new Array(3); // { length: 3 }

[1, 2, 3].concat([4]); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
new Array(3).concat([4]); // { '3': 4, length: 4 }
That said, you should only apply the callback function to the items that the array posses
That said, Have a happy Coding.

#Oh, I almost forgot Your implementation for this map function should not modify the current array

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.map(function(item) { return item + 2 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [3, 4, 5, 6, 7]
*/

Array.prototype.map = function (func, obj) {
	const arr = [];
	arr.length = this.length;

	for (const i in this) {
		if (!isNaN(Number(i))) {
			arr[i] = (func.apply(obj, [this[i], Number(i), this]));
		}
	}

	return arr;
}

// Javascript from the Inside #2: Filter (6 kyu)

/* 
#Your Task Implement our beloved Array,prototype.filter from scratch.

Example of Filter

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower_than_six = (x) => x < 6
var one_to_five = one_to_nine.filter(lower_than_six);
// Expected
[1, 2, 3, 4, 5]
Not allowed:

Array.prototype.filter
Array.prototype.forEach
I can't disable forEach since console.log needs it and the Test Cases require console.log implicitly, 
but please don't use it since forEach does most of the work.
Array.prototype.reduce/reduceRight
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.fiter is a function that takes a predicate function and an object as a context
The predicate function receives the current item, the index and the array itself
The context will be this inside the predicate function
NOTE

As always, take into account that an array built with [] and new Array(elemn1, elem2...) 
is different in content than a new Array(length).
[1, 2]; // { '0': 1, '1': 2, length: 2}
new Array(1, 2); // { '0': 1, '1': 2, length: 2}
new Array(2); // { length: 2 }

[1, 2].push(3); // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(1, 2).push(3);  // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(2).push(3); // { '2': 3, length: 3 }
That said, Happy Coding!

Another Note

Your implementation should not modify the current array:

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.filter(function(item) { return item < 3 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [1, 2]
*/

Array.prototype.filter = function (callback, nThis) {
	const out = [];

	if (nThis) {
		callback = callback.bind(nThis);
	}

	const t = this;
	const len = t.length;
	for (let i = 0; i < len; i++) {
		if (i in t) {
			if (callback(t[i], i, t)) {
				out.push(t[i]);
			}
		}
	}
	return out;
};

// Power .bind() (6 kyu)

/* 
You probably know about Function.prototype.bind method in JavaScript. 
It returns a copy of the original function but this function will always be called in the specified context. 
The problem is that you can't rebind another context any more.

var func = function () {
  return this.prop;
};
var obj1 = {prop: 1},
	 obj2 = {prop: 2};
	 
func = func.bind(obj1);
func(); // Will produce 1

func = func.bind(obj2);
func(); // Will also produce 1 :(
Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. 
In this kata you don't need to worry about currying, testing function will never get params.
*/

Function.prototype.bind = function (context) {
	const func = this;
	return function (...args) {
		const rightContext = this === global ? context : this;
		return func.apply(rightContext, args);
	}
};

// Moves in squared strings (I) (7 kyu)

/* 
This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
Note:
The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Sample Tests".

Bash Note:
The input strings are separated by , instead of \n. 
The output strings should be separated by \r instead of \n. See "Sample Tests".
*/

const vertMirror = strng => strng.map(strng => [...strng].reverse().join(''));
const horMirror = strng => strng.reverse();
const oper = (fct, strng) => fct(strng.split("\n")).join("\n");

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt");
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK");

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? (7 kyu)

/* 
You will be given an array of objects (associative arrays in PHP) representing data about developers 
who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
your function should return true.

Notes:

The input array will always be valid and formatted as in the example above.
*/

const isRubyComing = list => {
	let count = 0;

	for (let i = 0; i < list.length; i++) {
		list[i].language === 'Ruby' ? count++ : null;
	}

	return count > 0;
}

const list9 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
	{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

const list8 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' }
];

console.log(isRubyComing(list9), true);
console.log(isRubyComing(list8), false);

// Over The Road (7 kyu)

/* 
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. 
Naturally, you would like to find out the house number of the people on the other side of the street. 
The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
  you
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. 
When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Example (address, n --> output)
Given your house number address and length of street n, give the house number on the opposite side of the street.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8
Note about errors
If you are timing out, running out of memory, or get any kind of "error", read on. 
Both n and address could get upto 500 billion with over 200 random tests. 
If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. 
This is not a kata problem so please don't post an issue. Similarly if the tests don't 
complete within 12 seconds then you also fail.

To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. 
Read the discourse for some inspiration :)
*/

const hodd = (r, n) => 1 + (r - 1) * 2;
const heven = (r, n) => 2 * n - (r - 1) * 2;
const rodd = (h, n) => (h + 1) / 2;
const reven = (h, n) => (2 * n + 2 - h) / 2;

const overTheRoad = (h, n) => 0 == n % 2 ? hodd(reven(h, n), n) : heven(rodd(h, n), n);

console.log(overTheRoad(1, 3), 6);
console.log(overTheRoad(3, 3), 4);
console.log(overTheRoad(2, 3), 5);
console.log(overTheRoad(3, 5), 8);
console.log(overTheRoad(7, 11), 16);

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers (7 kyu)

/* 
You will be given an array of objects (associative arrays in PHP, 
	tables in COBOL) representing data about developers who have signed up to attend the next 
	coding meetup that you are organising.

Your task is to return an array where each object will have a new property 
'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
	 greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
	 greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
	 greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Notes:

The order of the properties in the objects does not matter (except in COBOL).
The input array will always be valid and formatted as in the example above.
*/

const greetDevelopers = list => list
	.map(dev => ({ ...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?` }));

console.log(greetDevelopers([
	{
		firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
	},
	{
		firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
	},
	{
		firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
	},
]), [
	{
		firstName: 'Sofia',
		lastName: 'I.',
		country: 'Argentina',
		continent: 'Americas',
		age: 35,
		language: 'Java',
		greeting: 'Hi Sofia, what do you like the most about Java?',
	},
	{
		firstName: 'Lukas',
		lastName: 'X.',
		country: 'Croatia',
		continent: 'Europe',
		age: 35,
		language: 'Python',
		greeting: 'Hi Lukas, what do you like the most about Python?',
	},
	{
		firstName: 'Madison',
		lastName: 'U.',
		country: 'United States',
		continent: 'Americas',
		age: 32,
		language: 'Ruby',
		greeting: 'Hi Madison, what do you like the most about Ruby?',
	},
]);

// Simple beads count (7 kyu)

/* 
Two red beads are placed between every two blue beads. 
There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) 
so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

const countRedBeads = n => n < 2 ? 0 : (n - 1) * 2;

console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);

// Alphabetical Addition (7 kyu)

/* 
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

const addLetters = (...letters) => {
	let code = 0
	if (letters.length === 0) {
		return 'z';
	}

	for (var i = 0; i < letters.length; i++) {
		code += letters[i].charCodeAt(0) - 96;
		if (code > 26) {
			code = code - 26;
		}
	}

	return String.fromCharCode((code) + 96);
};

console.log(addLetters(['a', 'b', 'c']), 'f');
console.log(addLetters(['z']), 'z');
console.log(addLetters(['a', 'b']), 'c');

// Alphabet war (7 kyu)

/* 
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. 
The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. 
When the left side wins return Left side wins!, when the right side wins return Right side wins!, 
in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

const alphabetWar = fight => {
	const dictL = { w: 4, p: 3, b: 2, s: 1 }, dictR = { m: 4, q: 3, d: 2, z: 1 };
	const arr = fight.split('');

	const left = arr.filter(v => v.match(/[wpbs]/g)).map(v => dictL[v]).reduce((a, b) => a + b, 0);
	const right = arr.filter(v => v.match(/[mqdz]/g)).map(v => dictR[v]).reduce((a, b) => a + b, 0);
	return left > right ? "Left side wins!" : left < right ? "Right side wins!" : "Let's fight again!";
};

console.log(alphabetWar("z"), "Right side wins!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("zzzzs"), "Right side wins!");
console.log(alphabetWar("wwwwww"), "Left side wins!");

// Deodorant Evaporator (7  kyu)

/* 
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), 
the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) 
in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, 
as you wish. Some people might prefer to reason with content, some other with percentages only. 
It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/

const evaporator = (content, evap_per_day, threshold) => {
	let result = 0;
	let percentage = 100;
	while (percentage > threshold) {
		percentage = percentage - percentage * (evap_per_day / 100);
		result += 1;
	}
	return result;
}

// Fizz Buzz (7 kyu)

/* 
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

const fizzbuzz = n => {
	const res = [];
	for (let i = 1; i < n + 1; i++) {
		i % 3 === 0 && i % 5 === 0 ? res.push("FizzBuzz") :
			i % 3 === 0 ? res.push("Fizz") :
				i % 5 === 0 ? res.push("Buzz") :
					res.push(i);
	}

	return res;
};

console.log(fizzbuzz(10), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);

// Triangular Treasure (7 kyu)

/* 
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
			  *         **
							*
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/

const triangular = n => n > 0 ? n * (n + 1) / 2 : 0;

console.log(triangular(2), 3);
console.log(triangular(4), 10);
console.log(triangular(-454), 0);

// Gauß needs help! (Sums of a lot of numbers). (7 kyu)

/* 
Due to another of his misbehaved, the primary school's teacher of the young Gauß, 
Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, 
while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers 
from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; 
so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

f(n=100) // returns 5050 
It's your duty to verify that n is a valid positive integer number. 
If not, please, return false (None for Python, null for C#, 0 for COBOL).

Note: the goal of this kata is to invite you to think about some 'basic' mathematic 
formula and how you can do performance optimization on your code. 

Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

Credits: this kata was inspired by the farzher's kata 'Sum of large ints' . 
In fact, it can be seen as a sort of prep kata for that one.
*/

const f = n => n > 0 && parseInt(n, 10) === n ? n * (n + 1) / 2 : false;

console.log(f(100), 5050);
console.log(f(300), 45150);
console.log(f(50000), 1250025000);
console.log(f('n'), false, "n must be a number");
console.log(f(), false, "n must be a value");
console.log(f(3.14), false, "n must be an integer");
console.log(f(0), false, "a value of n greater than 0 is required");
console.log(f(-10), false, "a positive value of n is required");

// Averages of numbers (7 kyu)

/* 
#Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, 
if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

const averages = numbers => {
	const result = [];

	if (numbers) {
		for (let i = 0; i < numbers.length - 1; i++) {
			result.push((numbers[i] + numbers[i + 1]) / 2);
		}
	}

	return result;
};

console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);

// Balanced Number(Special Numbers Series #1) (7 kyu)

/* 
A balanced number is a number where the sum of digits to the left of the middle digit(s) 
and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. 
(For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. 
(For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, 
e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. 
The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
*/

const balancedNum = number => {
	let str = number.toString();
	let result = 0;

	for (let i = 0; i < str.length / 2 - 1; i++) {
		result += parseInt(str[i], 10) - parseInt(str[str.length - 1 - i], 10);
	}

	return result === 0 ? 'Balanced' : 'Not Balanced';
};

console.log(balancedNum(7), "Balanced");
console.log(balancedNum(959), "Balanced");
console.log(balancedNum(13), "Balanced");
console.log(balancedNum(432), "Not Balanced");
console.log(balancedNum(424), "Balanced");
console.log(balancedNum(1024), "Not Balanced");
console.log(balancedNum(66545), "Not Balanced");
console.log(balancedNum(295591), "Not Balanced");
console.log(balancedNum(1230987), "Not Balanced");
console.log(balancedNum(56239814), "Balanced");

// Strong Number (Special Numbers Series #2) (7 kyu)

/* 
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .
*/

const strong = n => {
	const factorial = (number) => {
		let fac = 1;
		for (let i = 1; i < number + 1; i++) {
			fac *= i;
		}
		return fac;
	}

	const sum = n.toString().split('').reduce((acc, item) => acc + factorial(parseInt(item, 10)), 0);

	return sum === n ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strong(1), "STRONG!!!!");
console.log(strong(2), "STRONG!!!!");
console.log(strong(145), "STRONG!!!!");
console.log(strong(7), "Not Strong !!");
console.log(strong(93), "Not Strong !!");
console.log(strong(185), "Not Strong !!");

// Tidy Number (Special Numbers Series #9) (7 kyu)

/* 
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .
*/

const tidyNumber = n => {
	const arr = n.toString().split('');

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}

	return true;
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);

// Maximum Triplet Sum (Array Series #7) (7 kyu)

/* 
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .
*/

const maxTriSum = numbers => {
	const sort = [...new Set(numbers.sort((a, b) => b - a))];
	return sort[0] + sort[1] + sort[2];
};

console.log(maxTriSum([3, 2, 6, 8, 2, 3]), 17);
console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
console.log(maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
console.log(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
console.log(maxTriSum([-2, 0, 2]), 0);
console.log(maxTriSum([-2, -4, 0, -9, 2]), 0);
console.log(maxTriSum([-5, -1, -9, 0, 2]), 1);

// Squares sequence (7 kyu)

/* 
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. 
If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

const squares = (x, n) => {
	const res = [];
	let count = x;
	if (n > 0) {
		for (let i = 0; i < n; i++) {
			if (i === 0) {
				res.push(x);
			} else {
				count = count ** 2;
				res.push(count);
			}
		}
	}

	return res;
};

console.log(squares(2, 5), [2, 4, 16, 256, 65536]);
console.log(squares(3, 3), [3, 9, 81]);
console.log(squares(5, 3), [5, 25, 625]);
console.log(squares(10, 4), [10, 100, 10000, 100000000]);
console.log(squares(2, 0), []);
console.log(squares(2, -5), []);

// Simple Fun #74: Growing Plant (7 kyu)

/* 
Each day a plant is growing by upSpeed meters. Each night that plant's height 
decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. 
We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

Example
For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.

After day 1 --> 100
After night 1 --> 90
After day 2 --> 190
After night 2 --> 180
After day 3 --> 280
After night 3 --> 270
After day 4 --> 370
After night 4 --> 360
After day 5 --> 460
After night 5 --> 450
After day 6 --> 550
After night 6 --> 540
After day 7 --> 640
After night 7 --> 630
After day 8 --> 730
After night 8 --> 720
After day 9 --> 820
After night 9 --> 810
After day 10 --> 910 
For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.

Because the plant reach to the desired height at day 1(10 meters).

After day 1 --> 10
Input/Output
[input] integer upSpeed
A positive integer representing the daily growth.
Constraints: 5 ≤ upSpeed ≤ 100.
[input] integer downSpeed
A positive integer representing the nightly decline.
Constraints: 2 ≤ downSpeed < upSpeed.
[input] integer desiredHeight
A positive integer representing the threshold.
Constraints: 4 ≤ desiredHeight ≤ 1000.
[output] an integer
The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count).
*/

const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
	let day = 0;
	let h = 0;
	while (h <= desiredHeight) {
		h += upSpeed;
		day += 1;
		if (h < desiredHeight) {
			h -= downSpeed;
		}
		else {
			return day;
		}
	}

};

console.log(growingPlant(100, 10, 910), 10);
console.log(growingPlant(10, 9, 4), 1);

// Simple consecutive pairs (7 kyu)

/* 
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/

const pairs = arr => {
	let count = 0;

	for (let i = 0; i < arr.length - 1; i += 2) {
		if (Math.abs(arr[i] - arr[i + 1]) === 1) {
			count++;
		}
	}

	return count;
};

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]), 3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4);
console.log(pairs([73, 72, 8, 9, 73, 72]), 3);

// Rotate for a Max (7 kyu)

/* 
Let us begin with an example:
Take a number: 56789. Rotate left, you get 67895.
Keep the first digit in place and rotate left the other digits: 68957.
Keep the first two digits in place and rotate the other ones: 68579.
Keep the first three digits and rotate left the rest: 68597. 
Now it is over since keeping the first four it remains only one digit which rotated is itself.
You have the following sequence of numbers:
56789 -> 67895 -> 68957 -> 68579 -> 68597
and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n 
returns the maximum number you got doing rotations similar to the above example.
So max_rot (or maxRot or ... depending on the language) is such as:
max_rot(56789) should return 68957
max_rot(38458215) should return 85821534
*/

const maxRot = n => {
	const listOfNums = [];
	const array = [...n.toString()];
	let num = 0;
	while (num < array.length - 1) {
		const number = array.splice(num, 1);
		array.push(parseInt(number, 10));
		listOfNums.push(parseInt(array.join(""), 10));
		num++;
	}
	listOfNums.unshift(n);

	return Math.max(...listOfNums);
};

console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);

// Greatest common divisor (7 kyu)

/* 
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, 
so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

const mygcd = (x, y) => y === 0 ? x : mygcd(y, x % y);

console.log(mygcd(30, 12), 6);
console.log(mygcd(36, 12), 12);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);

// Sum of Triangular Numbers (7 kyu)

/* 
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) 
obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/

const sumTriangularNumbers = n => {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += (i * (i + 1)) / 2;
	}

	return sum;
};

console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);

// Sort Out The Men From Boys (7 kyu)

/* 
Scenario
Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
*/

const menFromBoys = arr => {
	const men = arr.filter(personAge => personAge % 2 === 0).sort((a, b) => a - b);
	const boys = arr.filter(personAge => personAge % 2 !== 0).sort((a, b) => b - a);

	return [...new Set(men), ...new Set(boys)];
};

console.log(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
console.log(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
console.log(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33]);
console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]), [72, 76, 82, 100, 91, 85]);
console.log(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]), [2, 10, 17, 15, 1]);
console.log(menFromBoys([-32, -39, -35, -41]), [-32, -35, -39, -41]);
console.log(menFromBoys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71]);
console.log(menFromBoys([-94, -99, -100, -99, -96, -99]), [-100, -96, -94, -99]);
console.log(menFromBoys([-53, -26, -53, -27, -49, -51, -14]), [-26, -14, -27, -49, -51, -53]);
console.log(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]), [-86, -56, -30, -15, -17, -33, -45, -85]);
console.log(menFromBoys([12, 89, -38, -78]), [-78, -38, 12, 89]);
console.log(menFromBoys([2, -43, 95, -90, 37]), [-90, 2, 95, 37, -43]);
console.log(menFromBoys([82, -61, -87, -12, 21, 1]), [-12, 82, 21, 1, -61, -87]);
console.log(menFromBoys([63, -57, 76, -85, 88, 2, -28]), [-28, 2, 76, 88, 63, -57, -85]);
console.log(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]), [-282, 818, 900, 928, 281, 49, -1]);

// Indexed capitalization (7 kyu)

/* 
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

const capitalize1 = (s, arr) => [...s].map((item, index) => arr.includes(index) ? item.toUpperCase() : item).join('');

console.log(capitalize1("abcdef", [1, 2, 5]), 'aBCdeF');
console.log(capitalize1("abcdef", [1, 2, 5, 100]), 'aBCdeF');
console.log(capitalize1("codewars", [1, 3, 5, 50]), 'cOdEwArs');
console.log(capitalize1("abracadabra", [2, 6, 9, 10]), 'abRacaDabRA');
console.log(capitalize1("codewarriors", [5]), 'codewArriors');
console.log(capitalize1("indexinglessons", [0]), 'Indexinglessons');

// Array Leaders (Array Series #3) (7 kyu)

/* 
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).
*/

const arrayLeaders = numbers => {
	const result = [];
	numbers.forEach((item, i, arr) => {
		const rightSumArray = arr.slice(i + 1).reduce((acc, num) => acc + num, 0)
		item > rightSumArray ? result.push(item) : null;
	});

	return result;
};

console.log(arrayLeaders([1, 2, 3, 4, 0]), [4]);
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
console.log(arrayLeaders([-1, -29, -26, -2]), [-1]);
console.log(arrayLeaders([-36, -12, -27]), [-36, -12]);
console.log(arrayLeaders([5, -2, 2]), [5, 2]);
console.log(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages (7 kyu)

/* 
You will be given an array of objects (associative arrays in PHP, table in COBOL) 
representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) 
which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
*/

const countLanguages = list => {
	const result = {};
	for (let i = 0; i < list.length; i++) {
		if (!result[list[i].language]) {
			result[list[i].language] = 1;
		} else {
			result[list[i].language]++;
		}
	}
	return result;
};

console.log(countLanguages([
	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
	{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
	{ firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
	{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]), { C: 2, JavaScript: 1, Ruby: 1 });

// All Inclusive? (7 kyu)

/* 
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
*/

const containAllRots = (str, arr) => {
	for (let i = 0; i < str.length; i++) {
		if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
			return false;
		}
	}
	return true;
}

console.log(containAllRots("", []), true)
console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)

// The Office II - Boredom Score (7 kyu)

/* 
Every now and then people in the office moves teams or departments. 
Depending what people are doing with their time they can become more or less boring. 
Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, 
and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

const boredom = staff => {
	const departments = {
		'accounts': 1,
		'finance': 2,
		'canteen': 10,
		'regulation': 3,
		'trading': 6,
		'change': 6,
		'IS': 8,
		'retail': 5,
		'cleaning': 4,
		'pissing about': 25
	};
	let total = 0
	for (const key in staff) {
		total += departments[staff[key]];
	}
	return total <= 80 ? 'kill me now' :
		total < 100 ? 'i can handle this' :
			'party time!!';
};

console.log(boredom({
	tim: 'change', jim: 'accounts',
	randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
	laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
	mr: 'finance'
}), 'kill me now');
console.log(boredom({
	tim: 'IS', jim: 'finance',
	randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
	katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
	alex: 'regulation', john: 'accounts', mr: 'canteen'
}), 'i can handle this');
console.log(boredom({
	tim: 'accounts', jim: 'accounts',
	randy: 'pissing about', sandy: 'finance', andy: 'change',
	katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
	john: 'retail', mr: 'pissing about'
}), 'party time!!');

// 16+18=214 (7 kyu)

/* 
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

const add = (num1, num2) => {
	let sumString = '';
	while (num1 || num2) {
		sumString = (num1 % 10) + (num2 % 10) + sumString;
		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
	}

	return parseInt(sumString, 10) || 0;
};

console.log(add(1222, 30277), 31499);
console.log(add(1236, 30977), 31111013);
console.log(add(38810, 1383), 391193);
console.log(add(49999, 49999), 818181818);

// Recursion #1 - Factorial (7 kyu)

/* 
This is a kata series that you can only solve using recursion.
##1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/

const factorial = n => n > 1 ? n * factorial(n - 1) : 1;

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);

// Digital cypher (7 kyu)

/* 
Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

	s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
	m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts str string and key number and returns an array of integers representing encoded str.

Input / Output
The str input string consists of lowercase characters only.
The key input number is a positive integer.

Example
Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
*/

const encode1 = (str, key) => {
	let keyIndex = 0;
	const result = [];
	const cypher = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26
	};

	key = key.toString();
	str = str.split('');

	str.forEach(item => {
		result.push(cypher[item] + parseInt(key[keyIndex], 10));
		keyIndex++;
		if (keyIndex >= key.length) {
			keyIndex = 0;
		}
	});

	return result;
};

console.log(encode1("scout", 1939), [20, 12, 18, 30, 21]);
console.log(encode1("masterpiece", 1939), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);

// Word values (7 kyu)

/* 
Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, 
our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained 
above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. 
Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.
*/

const wordValue = a => {
	const result = [];
	const cypher = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26
	};

	a.forEach((item, i) => {
		const sum = item.split('').reduce((acc, symb) => acc + (cypher[symb] || 0), 0) * (i + 1);
		result.push(sum);
	});

	return result;
};

console.log(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24]);

// Return the first M multiples of N (7 kyu)

/* 
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. 
Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0]
*/

const multiples12 = (m, n) => {
	let count = n;
	const res = [];
	for (let i = 0; i < m; i++) {
		res.push(count);
		count += n;

	}

	return res;
};

console.log(multiples12(3, 5), [5, 10, 15]);

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language? (7 kyu)

/* 
You will be given an array of objects (associative arrays in PHP, 
	tables in COBOL) representing data about developers who have signed up to attend 
	the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.

Notes:

The strings representing a given language will always be formatted in the same way 
(e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
The input array will always be valid and formatted as in the example above.
*/

const isSameLanguage = list => {
	for (let i = 1; i < list.length; i++) {
		if (list[i].language !== list[0].language) {
			return false;
		}
	}
	return true;
};

console.log(isSameLanguage([
	{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
	{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
]), true);
console.log(isSameLanguage([
	{ firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
	{ firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
	{ firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
]), false);

// The Office IV - Find a Meeting Room (7 kyu)

/* 
Your job at E-Corp is both boring and difficult. 
It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, 
and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. 
Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/

const meeting1 = x => x.indexOf('O') > -1 ? x.indexOf('O') : 'None available!';

console.log(meeting1(['X', 'O', 'X']), 1);
console.log(meeting1(['O', 'X', 'X', 'X', 'X']), 0);
console.log(meeting1(['X', 'X', 'X', 'X', 'X']), 'None available!');

// Holiday III - Fire on the boat (7 kyu)

/* 
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. 
If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
*/

const fireFight = s => s.replace(/Fire/g, '~~');

console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
console.log(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");

// Between Extremes (7 kyu)

/* 
Given an array of numbers, return the difference between the largest and smallest values.
For example:
[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/

const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
console.log(betweenExtremes([-1, -41, -77, -100]), 99);

// shorter concat [reverse longer] (7 kyu)

/* 
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

const shorter_reverse_longer = (a, b) => {
	let max = a.length >= b.length ? a : b;
	let min = a.length < b.length ? a : b;

	return `${min}${max.split('').reverse().join('')}${min}`
};

console.log(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
console.log(shorter_reverse_longer("hello", "bau"), "bauollehbau");
console.log(shorter_reverse_longer("fghi", "abcde"), "fghiedcbafghi");

// Nth power rules them all! (7 kyu)

/* 
You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

Examples
{1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
{1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
*/

const modifiedSum = (a, n) => a.reduce((acc, item) => acc + item ** n, 0) - a.reduce((acc, item) => acc + item, 0);

console.log(modifiedSum([1, 2, 3], 3), 30);
console.log(modifiedSum([1, 2], 5), 30);

// Bingo ( Or Not ) (7 kyu)

/* 
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. 
Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). 
Write a function where you will win the game if your numbers can spell "BINGO". 
They do not need to be in the right order in the input array. 
Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

const bingo12 = a => {
	const winSequence = [2, 9, 14, 7, 15];
	return [...new Set(a)].filter(value => winSequence.includes(value)).length === winSequence.length ? "WIN" : "LOSE";
};

console.log(bingo12([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
console.log(bingo12([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");

// Average Scores (7 kyu)

/* 
Create a function that returns the average of an array of numbers ("scores"), 
rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

The array will never be empty.
*/

const average = scores => Math.round(scores.reduce((acc, item) => (acc + item), 0) / scores.length);

console.log(average([49, 3, 5, 300, 7]), 73);
console.log(average([90, 98, 89, 100, 100, 86, 94]), 94);

// Dictionary from two lists (7 kyu)

/* 
There are two lists, possibly of different lengths. 
The first one consists of keys, the second one consists of values. 
Write a function createDict(keys, values) that returns a dictionary created from keys and values. 
If there are not enough values, the rest of keys should have a None (JS null)value. 
If there not enough keys, just ignore the rest of values.

Example 1:

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
Example 2:

keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
*/

const createDict = (keys, values) => {
	const res = {};

	for (let i = 0; i < keys.length; i++) {
		values[i] !== undefined ? res[keys[i]] = values[i] : res[keys[i]] = null;
	}

	return res;
};

console.log(createDict(['a', 'b', 'c'], [1, 2, 3]), { 'a': 1, 'b': 2, 'c': 3 });
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]), { 'a': 1, 'b': 2, 'c': 3 });
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]), { 'a': 1, 'b': 2, 'c': 3, 'd': null });

// Vowel one (7 kyu)

/* 
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/

const vowelOne = s => s.toLowerCase()
	.split('')
	.map(item =>
		item === 'a' ||
			item === 'e' ||
			item === 'i' ||
			item === 'o' ||
			item === 'u' ? '1' : '0')
	.join('');

console.log(vowelOne("vowelOne"), "01010101");
console.log(vowelOne("123, arou"), "000001011");

// Especially Joyful Numbers (7 kyu)

/* 
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. 
The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, 
gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, 
and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/

const numberJoy = n => {
	const sort = n.toString().split('').map(item => parseInt(item, 10)).reduce((acc, item) => acc + item, 0);
	return n - (sort * sort.toString().split('').reverse().join('')) === 0;
};

console.log(numberJoy(1997), false, 'Not a Harshad number')
console.log(numberJoy(1998), false, 'Harshad but digit sum=27, and 27x72 does not equal 1998')
console.log(numberJoy(1729), true, 'Harshad and digit sum=19, and 19x91 = 1729')
console.log(numberJoy(18), false, 'Harshad but digit sum=9, and 9x9 does not equal 18')
console.log(numberJoy(1), true, "It was correct")
console.log(numberJoy(81), true, "It was correct")
console.log(numberJoy(1458), true, "It was correct")

// makeBackronym (7 kyu)

/* 
back·ro·nym
An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, 
either to create a memorable name or as a fanciful explanation of a word's origin.

"Biodiversity Serving Our Nation", or BISON

(from https://en.oxforddictionaries.com/definition/backronym)

Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, 
using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"
*/

const makeBackronym = string => string.toUpperCase().split('').map(elem => dict[elem]).join(' ');

// Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product (7 kyu)

/* 
Description:
Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
*/

const product = s => (s.match(/\?/g) || []).length * (s.match(/!/g) || []).length;

console.log(product(""), 0);
console.log(product("!"), 0);
console.log(product("!!"), 0);
console.log(product("!??"), 2);
console.log(product("!???"), 3);
console.log(product("!!!??"), 6);
console.log(product("!!!???"), 9);
console.log(product("!???!!"), 9);
console.log(product("!ab? ?"), 2);
console.log(product("!????!!!?"), 20);

// Building Strings From a Hash (7 kyu)

/* 
Complete the solution so that it takes the object (JavaScript/CoffeeScript) 
or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

const solution = pairs => Object.keys(pairs).map(value => value + " = " + pairs[value]).join(',');

// Length and two values (7 kyu)

/* 
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
*/

const alternate = (n, firstValue, secondValue) => Array.from({ length: n }, (_, i) => !(i % 2) ? firstValue : secondValue);

console.log(alternate(5, true, false), [true, false, true, false, true]);
console.log(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']);
console.log(alternate(0, "lemons", "apples"), []);

// Character Counter (7 kyu)

/* 
You are going to be given a word. Your job will be to make sure that each character 
in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.
*/

const validateWord = s => {
	s = s.toLowerCase();
	const counts = {};

	for (let char of s) {
		if (counts[char] === undefined) {
			counts[char] = 0;
		}
		counts[char]++;
	}
	return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
};

console.log(validateWord("abcabc"), true, "The word was: \"abcabc\" \n");
console.log(validateWord("Abcabc"), true, "The word was: \"Abcabc\" \n");
console.log(validateWord("abc123"), true, "The word was: \"abc123\" \n");
console.log(validateWord("abcabcd"), false, "The word was: \"abcabcd\" \n");
console.log(validateWord("abc!abc!"), true, "The word was: \"abc!abc!\" \n");
console.log(validateWord("abc:abc"), false, "The word was: \"abc:abc\" \n");

// Who is the killer? (7 kyu)

/* 
Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, 
you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

const killer = (suspectInfo, dead) => {
	for (const killer in suspectInfo) {
		if ((suspectInfo[killer].includes(dead[0]) && suspectInfo[killer].includes(dead[1])) ||
			suspectInfo[killer].includes(dead[0]) ||
			suspectInfo[killer].includes(dead[1])
		) {
			return killer;
		}
	}
};

console.log(killer({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill']), 'James');
console.log(killer({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben']), 'Megan');

// See You Next Happy Year (7 kyu)

/* 
Scenario
You're saying good-bye your best friend , See you next happy year .

Happy Year is the year with only distinct digits , (e.g) 2018

Task
Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt

Notes
Year Of Course always Positive .
Have no fear , It is guaranteed that the answer exists .
It's not necessary that the year passed to the function is Happy one .
Input Year with in range (1000  ≤  y  ≤  9000)
Input >> Output Examples:
nextHappyYear (7712) ==> return (7801)
Explanation:
As the Next closest year with only distinct digits is 7801 .

nextHappyYear (8989) ==> return (9012)
Explanation:
As the Next closest year with only distinct digits is 9012 .

nextHappyYear (1001) ==> return (1023)
Explanation:
As the Next closest year with only distinct digits is 1023 .
*/

const nextHappyYear = year => {
	const newYear = year + 1;
	const arr = newYear.toString().split('');
	const uniq = arr.filter((item, pos) => arr.indexOf(item) == pos);
	if (uniq.length !== arr.length) {
		return nextHappyYear(newYear);
	}
	return newYear;
};

// Frequency sequence (7 kyu)

/* 
Your task is to return an output string that translates an input string s by replacing each character 
in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/

const freqSeq = (str, sep) => {
	let result = '';
	const obj = {};

	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]] === undefined) {
			obj[str[i]] = 0;
		}
		obj[str[i]]++;
	}

	for (let i = 0; i < str.length; i++) {
		i !== str.length - 1 ?
			result += `${obj[str[i]]}${sep}` :
			result += `${obj[str[i]]}`
	}

	return result;
};

console.log(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
console.log(freqSeq('19999999', ':'), '1:7:7:7:7:7:7:7');
console.log(freqSeq('^^^**$', 'x'), '3x3x3x2x2x1');

// Help Bob count letters and digits (7 kyu)

/* 
Bob is a lazy man.

He needs you to create a method that can determine how many letters 
(both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1
*/

const countLettersAndDigits = input => {
	const latter = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
	return input.split('').filter(item => latter.includes(item)).length;
};

console.log(countLettersAndDigits("hel2!lo"), 6);
console.log(countLettersAndDigits("n!!_ice!!123"), 7);
console.log(countLettersAndDigits("1"), 1);
console.log(countLettersAndDigits("?"), 0);
console.log(countLettersAndDigits("12345f%%%t5t&/6"), 10);
console.log(countLettersAndDigits("aBcDeFg090"), 10);
console.log(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);

// Complete The Pattern #2 (7 kyu)

/* 
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
Examples:
pattern(4):

4321
432
43
4
pattern(11):

1110987654321
111098765432
11109876543
1110987654
111098765
11109876
1110987
111098
11109
1110
11
Hint: Use \n in string to jump to next line
*/

const pattern12 = n => {
	let number = "";
	let output = "";

	while (n > 0) {
		number = number + n;
		output = number + (output ? "\n" : "") + output;
		n--;
	}
	return output;
};

console.log(pattern12(1), "1");
console.log(pattern12(2), "21\n2");
console.log(pattern12(5), "54321\n5432\n543\n54\n5");

// Find the missing term in an Arithmetic Progression (6 kyu)

/* 
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive 
terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. 
There is however one hitch: exactly one term from the original series is missing from the set of numbers 
which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. 
The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. 
I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
*/

const findMissing = list => {
	const step = (Math.max(...list) - Math.min(...list)) / list.length;

	for (let i = 0; i < list.length; i++) {
		if (list[list.length - 1] > 0) {
			if ((list[i] + step) !== list[i + 1]) {
				return list[i] + step;
			}
		} else {
			if ((list[i] - step) !== list[i + 1]) {
				return list[i] - step;
			}
		}
	}
};

console.log(findMissing([1, 3, 4]), 2);
console.log(findMissing([1, 4, 7, 10, 16]), 13);
console.log(findMissing([1, 3, 5, 9, 11]), 7);
console.log(findMissing([1, 5, 13, 17, 21, 25, 29]), 9);

// Triple trouble (6 kyu)

/* 
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number 
at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
														// num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

const tripledouble = (num1, num2) => {
	for (let i = 0; i < 10; i++) {
		if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
			return 1;
		}
	}
	return 0;
};

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);

// What century is it? (6 kyu)

/* 
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

const addBC = year => year < 0 ? " BC" : "";

const centurify = year => {
	const num = Math.ceil(Math.abs(year) / 100).toString()
	const suffix = num.match(/(11|12|13)$/)
		? "th" : num.endsWith("1")
			? "st" : num.endsWith("2")
				? "nd" : num.endsWith("3")
					? "rd" : "th";

	return num + suffix + addBC(year)
};

console.log(centurify("1999"), "20th", "With input '1999' solution produced wrong output");
console.log(centurify("2011"), "21st", "With input '2011' solution produced wrong output");
console.log(centurify("2154"), "22nd", "With input '2154' solution produced wrong output");
console.log(centurify("2259"), "23rd", "With input '2259' solution produced wrong output");
console.log(centurify("1234"), "13th", "With input '1234' solution produced wrong output");
console.log(centurify("1023"), "11th", "With input '1023' solution produced wrong output");
console.log(centurify("2000"), "20th", "With input '2000' solution produced wrong output");

//  Find the next perfect square! (7 kyu)

/* 
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

const findNextSquare = sq => {
	const currSq = Math.sqrt(sq);
	return Number.isInteger(currSq) ? (currSq + 1) ** 2 : -1;
};

console.log(findNextSquare(121), 144, "Wrong output for 121");
console.log(findNextSquare(625), 676, "Wrong output for 625");
console.log(findNextSquare(319225), 320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
console.log(findNextSquare(155), -1, "Wrong output for 155");
console.log(findNextSquare(342786627), -1, "Wrong output for 342786627");

// Sum of the first nth term of Series (7 kyu)

/* 
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

const SeriesSum = n => {
	let result = 0;
	let reverage = 1;
	for (let i = 0; i < n; i += 1) {
		if (i === 0) {
			result = 1;
		} else {
			reverage += 3;
			result = result + (1 / reverage);
		}
	}
	return result.toFixed(2);
};

console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");

// Money, Money, Money (7 kyu)

/* 
Mr. Scrooge has a sum of money 'P' that he wants to invest. 
Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount 
to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. 
After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for 
Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. 
However it is best to take into consideration that if 
Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

const calculateYears = (principal, interest, tax, desired) => {
	let year = 0;

	while (principal < desired) {
		year++;
		principal = principal + ((principal * interest) - (principal * interest * tax));
	}

	return year;
};

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14);
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0);

// Speed Control (7 kyu)

/* 
In John's car the GPS records every s seconds the distance travelled from an origin 
(distances are measured in an arbitrary but consistent unit). 
For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. 
If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
With the above data your function gps(s, x) should return 74
*/

const gps = (s, x) => {
	const output = [];
	if (x.length <= 1) {
		return 0;
	}

	for (let i = 0; i < x.length - 1; i++) {
		output.push((x[i + 1] - x[i]) * 3600 / s);
	}

	return Math.max(...output);
};

console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]), 41);
console.log(gps(12, [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25]), 219);

// SantaClausable Interface (7 kyu)

/* 
You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. 
There is only a concept of inheritance, but you can't assume that a certain method or property exists, 
just because it exists in the parent prototype / class. We want to find out, 
whether a given object fulfils the requirements to implement the "SantaClausable" interface. 
We need to implement a method which checks for this interface.

Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object:

sayHoHoHo() / say_ho_ho_ho
distributeGifts() / distribute_gifts
goDownTheChimney() / go_down_the_chimney
Example
var santa = {
	 sayHoHoHo: function() { console.log('Ho Ho Ho!') },
	 distributeGifts: function() { console.log('Gifts for all!'); },
	 goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
	 sayHoHoHo: function() { console.log('Oink Oink!') }
	 // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
*/

const santa = {
	sayHoHoHo: function () { console.log('Ho Ho Ho!') },
	distributeGifts: function () { console.log('Gifts for all!'); },
	goDownTheChimney: function () { console.log('*whoosh*'); }
};

const notSanta = {
	sayHoHoHo: function () { console.log('Oink Oink!') }
};

const isSantaClausable = obj => ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(methodName =>
	typeof obj[methodName] === 'function');

console.log(isSantaClausable(santa), true);
console.log(isSantaClausable(notSanta), false);

// Sum of Two Integers (6 kyu)

/* 
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
Input >> Output Examples
1- Add (5,19) ==> return (24) 

2- Add (-27,18) ==> return (-9)

3- Add (-14,-16) ==> return (-30)
*/

const add = (x, y) => {
	if (y == 0) {
		return x;
	}
	const sum = x ^ y;
	const carry = (x & y) << 1;
	return add(sum, carry);
};

console.log(add(1, 2), 3)
console.log(add(5, 19), 24)
console.log(add(23, 17), 40)
console.log(add(-14, -16), -30);
console.log(add(-50, -176), -226);
console.log(add(-10, -29), -39);
console.log(add(-13, 13), 0);
console.log(add(-27, 18), -9);
console.log(add(-90, 30), -60);

// Fun with ES6 Classes #2 - Animals and Inheritance (7 kyu)

/* 
Fun with ES6 Classes #2 - Animals and Inheritance
Overview
Preloaded for you in this Kata is a class Animal:

class Animal {
  constructor(name, age, legs, species, status) {
	 this.name = name;
	 this.age = age;
	 this.legs = legs;
	 this.species = species;
	 this.status = status;
  }
  introduce() {
	 return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
Task
Define the following classes that inherit from Animal.

I. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. 
All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

II. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. 
Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce/Introduce method for Cat should be identical to the original 
except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  
Meow meow!"; // Notice the TWO spaces - very important
III. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. 
master is the name of the dog's master which will be a string. 
Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce/Introduce method as any other animal, 
but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns 
"Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name 
of the dog's master).
*/

class Animal {
	constructor(name, age, legs, species, status) {
		this.name = name;
		this.age = age;
		this.legs = legs;
		this.species = species;
		this.status = status;
	}
	introduce() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}
}

class Shark extends Animal {
	constructor(name, age, status) {
		super();
		this.name = name;
		this.age = age;
		this.legs = 0;
		this.status = status;
		this.species = 'shark';
	}
}

class Cat extends Animal {
	constructor(name, age, status) {
		super();
		this.name = name;
		this.age = age;
		this.status = status;
		this.legs = 4;
		this.species = 'cat';
	}
	introduce() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
	}
}

class Dog extends Animal {
	constructor(name, age, status, master = '') {
		super();
		this.master = master;
		this.name = name;
		this.age = age;
		this.status = status;
		this.legs = 4;
		this.species = 'dog';
	}
	introduce() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}
	greetMaster() {
		return `Hello ${this.master}`;
	}
}

const billy = new Shark("Billy", 3, "Alive and well");
const charles = new Shark("Charles", 8, "Finding a mate");
const cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
const spitsy = new Cat("Spitsy", 6, "sleeping");
const doug = new Dog("Doug", 12, "Serving his master", "Eliza");

console.log(billy.name, "Billy");
console.log(billy.age, 3);
console.log(billy.legs, 0);
console.log(billy.species, "shark");
console.log(billy.status, "Alive and well");
console.log(billy.introduce(), `Hello, my name is Billy and I am 3 years old.`);
console.log(charles.name, "Charles");
console.log(charles.age, 8);
console.log(charles.legs, 0);
console.log(charles.species, "shark");
console.log(charles.status, "Finding a mate");
console.log(charles.introduce(), `Hello, my name is Charles and I am 8 years old.`);
console.log(cathy.name, "Cathy");
console.log(cathy.age, 7);
console.log(cathy.legs, 4);
console.log(cathy.species, "cat");
console.log(cathy.status, "Playing with a ball of yarn");
console.log(cathy.introduce(), "Hello, my name is Cathy and I am 7 years old.  Meow meow!");
console.log(spitsy.name, "Spitsy");
console.log(spitsy.age, 6);
console.log(spitsy.legs, 4);
console.log(spitsy.species, "cat");
console.log(spitsy.status, "sleeping");
console.log(spitsy.introduce(), "Hello, my name is Spitsy and I am 6 years old.  Meow meow!");
console.log(doug.name, "Doug");
console.log(doug.age, 12);
console.log(doug.legs, 4);
console.log(doug.species, "dog");
console.log(doug.status, "Serving his master");
console.log(doug.introduce(), "Hello, my name is Doug and I am 12 years old.");
console.log(doug.greetMaster(), "Hello Eliza");

// Unpacking Arguments (7 kyu)

/* 
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. 
You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")
*/

const spread = (func, args) => func(...args);

console.log(spread(function (x, y) { return x + y }, [1, 2]), 3)

// Perimeter sequence (7 kyu)

/* 
The first three stages of a sequence are shown.

blocks

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
*/

const perimeterSequence = (a, n) => a * n * 4;

console.log(perimeterSequence(1, 3), 12);

// Sum of the first nth term of Series (7 kyu)

/* 
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

const SeriesSum1 = n => {
	for (var s = 0, i = 0; i < n; i++) {
		s += 1 / (1 + i * 3)
	}

	return s.toFixed(2)
};

console.log(SeriesSum1(1), "1.00");
console.log(SeriesSum1(2), "1.25");
console.log(SeriesSum1(3), "1.39");
console.log(SeriesSum1(4), "1.49");
console.log(SeriesSum1(5), "1.57");

// Basic Sequence Practice (7 kyu)

/* 
A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. 
The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., 
where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... 
This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of 
the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/

const sumOfN = n => Array.from(Array(Math.abs(n) + 1), (el, i) => (i + 1) * i / 2 * (i > 0 ? Math.sign(n) : 1));

console.log(sumOfN(3), [0, 1, 3, 6]);
console.log(sumOfN(-4), [0, -1, -3, -6, -10]);
console.log(sumOfN(1), [0, 1]);
console.log(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);

// Cats and shelves (7 kyu)

/* 
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: 
from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), 
according to the illustration:

					  ┌────────┐
					  │-6------│
					  └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
				│    ┌────────┐
				│    │-4------│
				│    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
*/

const solution = (start, finish) => {
	const diff = finish - start;
	return Math.floor(diff / 3) + (diff % 3);
};

console.log(solution(1, 5), 2);

// JavaScript class-like objects (7 kyu)

/* 
For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. 
It should have a toString method that returns a human readable string indicating the argument information passed in. 
It should also allow the name property to be set.

The following is an example of how the final code would be used and what the expected return values should be:

var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
*/

class Animal {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	toString() {
		return `${this.name} is a ${this.type}`
	}
}

const dog = new Animal('Max', 'dog');

console.log(dog.toString());
console.log(dog.type);
console.log(dog.name);
console.log(dog.name = 'Lassie');

// Get key/value pairs as arrays (7 kyu)

/* 
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). 
For extra style, can you get your method to check for objects that extend their prototype?
*/

const keysAndValues = data => {
	const kyes = [];
	const values = [];
	for (const [key, value] of Object.entries(data)) {
		kyes.push(key);
		values.push(value);
	}

	return [kyes, values];
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }), [['a', 'b', 'c'], [1, 2, 3]]);
console.log(keysAndValues({}), [[], []]);
console.log(keysAndValues({ 1: 'a', 2: 'b', 3: 'c' }), [['1', '2', '3'], ['a', 'b', 'c']]);

// Drying Potatoes (7 kyu)

/* 
All we eat is water and dry matter.

Let us begin with an example:

John bought potatoes: their weight is 100 kilograms. 
Potatoes contain water and dry matter. 
The water content is 99 percent of the total weight. 
He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

At the output the water content is only 98%.

What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

Can you help him?

Task
Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

Example:
potatoes(99, 100, 98) --> 50
*/

const potatoes = (p0, w0, p1) => Math.floor(w0 * (100 - p0) / (100 - p1));

console.log(potatoes(82, 127, 80), 114);
console.log(potatoes(93, 129, 91), 100);

// Caffeine Script (7 kyu)

/* 
Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"
*/

const caffeineBuzz = n => {
	if (n % 12 == 0) {
		return 'CoffeeScript';
	}
	if (n % 6 == 0) {
		return 'JavaScript';
	}
	if (n % 3 == 0) {
		return 'Java';
	}
	return 'mocha_missing!';
}

// Make them bark! (7 kyu)

/* 
#Make them bark

You have been hired by a dogbreeder to write a program to keep record of his dogs.

You've already made a constructor Dog, so no one has to hardcode every puppy.

The work seems to be done. It's high time to collect the payment.

..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark(). 
Even the ones already done with your constructor. 
"Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

You can't even count how much objects that bastard client of yours already made. 
He has a lot of dogs, and none of them can .bark().

Can you solve this problem, or will you let this client outsmart you for good?

Practical info:
The .bark() method of a dog should return the string 'Woof!'.

The contructor you made (it is preloaded) looks like this:

function Dog(name, breed, sex, age){
	 this.name  = name;
	 this.breed = breed;
	 this.sex   = sex;
	 this.age   = age;
}
Hint: A friend of yours just told you about how javascript handles classes diferently from other programming languages. 
He couldn't stop ranting about "prototypes", or something like that. Maybe that could help you...
*/

function Dog(name, breed, sex, age) {
	this.name = name;
	this.breed = breed;
	this.sex = sex;
	this.age = age;
};

Dog.prototype.bark = function () {
	return 'Woof!';
};

const apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
const zeus = new Dog('Zeus', 'Dobermann', 'male', '4');

console.log(apollo.bark(), 'Woof!');
console.log(zeus.bark(), 'Woof!');

// Heron's formula (7 kyu)

/* 
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

�
∗
(
�
−
�
)
∗
(
�
−
�
)
∗
(
�
−
�
)
s∗(s−a)∗(s−b)∗(s−c)
​
 
where

�
=
�
+
�
+
�
2
s= 
2
a+b+c
​
 
Output should have 2 digits precision.
*/

const heron = (a, b, c) => {
	const s = (a + b + c) / 2;
	return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log(heron(3, 4, 5), 6);
console.log(heron(6, 8, 10), 24);

// Colour Association (7 kyu)

/* 
Colour plays an important role in our lifes. Most of us like this colour better then another. 
User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. 
The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

const colourAssociation = array => array.map(([colour, association]) => ({ [colour]: association }));

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]),
	[{ white: "goodness" }, { blue: "tranquility" }]);
console.log(colourAssociation([["red", "energy"], ["yellow", "creativity"], ["brown", "friendly"], ["green", "growth"]]),
	[{ red: "energy" }, { yellow: "creativity" }, { brown: "friendly" }, { green: "growth" }]);

// Making Copies (7 kyu)

/* 
Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

Note that you may have troubles if you do not return an actual copy, item by item, 
just a pointer or an alias for an existing list or array.

If not a list or array is given as a parameter in interpreted languages, the function should raise an error.

Examples:

t = [1, 2, 3, 4]
tCopy = copyList(t)
t[1] += 5
t = [1, 7, 3, 4]
tCopy = [1, 2, 3, 4]
*/

const copyList = l => [...l];
const t = [1, 2, 3, 4];
const tCopy = copyList(t);
t[1] += 5;

console.log(t);
console.log(tCopy);

// Count consonants (7 kyu)

/* 
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

const consonantCount = str => str.split('')
	.filter(letter => 'bcdfghjklmnpqrstvwxyz'.includes(letter.toLowerCase())).length;

console.log(consonantCount(''), 0);
console.log(consonantCount('aeiouAEIOU'), 0);
console.log(consonantCount('bcdfghjklmnpqrstvwxyz'), 21);
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'), 42);
console.log(consonantCount('y'), 1);
console.log(consonantCount('01234567890_'), 0);
console.log(consonantCount(' ^&$#'), 0);
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'), 42);

// Basic JS - Calculating averages (7 kyu)

/* 
Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.
*/

var Calculator = {
	average: function (...arg) {
		return arg.length > 0 ? arg.reduce((acc, item) => acc + item) / arg.length : 0
	}
};

console.log(Calculator.average(3, 4, 5), 4);
console.log(Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3), 5.769230769230769);
console.log(Calculator.average(), 0, 'Calculator.average() (no arguments) should result in 0');

// Name Array Capping (7 kyu)

/* 
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

const capMe = names => names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());

console.log(capMe(['jo', 'nelson', 'jurie']), ['Jo', 'Nelson', 'Jurie']);
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']), ['Karly', 'Daniel', 'Kelsey']);

// Get decimal part of the given number (7 kyu)

/* 
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

const getDecimal = n => Math.abs(n % 1);

console.log(getDecimal(10), 0);
console.log(getDecimal(-1.2), 0.2);
console.log(getDecimal(4.5), 0.5);

// Find the missing element between two arrays (7 kyu)

/* 
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, 
find the missing element.

Please note, there may be duplicates in the arrays, 
so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.
*/

const findMissing1 = (arr1, arr2) => {
	const arr1Sort = arr1.sort((a, b) => a - b);
	const arr2Sort = arr2.sort((a, b) => a - b);

	for (let i = 0; i < arr1Sort.length; i++) {
		if (arr1Sort[i] !== arr2Sort[i]) {
			return arr1Sort[i];
		}
	}
};

console.log(findMissing1([1, 2, 3], [1, 3]), 2);
console.log(findMissing1([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
console.log(findMissing1([7], []), 7);
console.log(findMissing1([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
console.log(findMissing1([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);

// Split The Bill (7 kyu)

/* 
You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. 
Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!

The function should take one parameter: an object/dict with two or 
more name-value pairs that represent the members of the group and the amount spent by each.

Your function should return an object/dict with the same names, 
showing how much money the members should pay or receive.

Further points:

The values should be positive numbers if the person should receive money from the group, 
negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.

Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. 
The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
	 A: 20, 
	 B: 15, 
	 C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}
Good Luck and Happy Eats!
*/

const splitTheBill = x => {
	const average = Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
	const arrKeys = Object.keys(x);
	const arrValues = Object.values(x).map((a, b) => (a - average));

	return Object.assign(...arrKeys.map((n, i) => ({ [n]: parseFloat((arrValues[i]).toFixed(2)) })));
};

console.log(splitTheBill({ A: 20, B: 15, C: 10 }), { A: 5, B: 0, C: -5 });
console.log(splitTheBill({ A: 40, B: 25, X: 10 }), { A: 15, B: 0, X: -15 });

// Return substring instance count (7 kyu)

/* 
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

const solution = (fullText, searchText) => {
	const reg = new RegExp(`${searchText}`, 'g')
	const result = fullText.match(reg) || [];

	return result.length
};

console.log(solution('abcdeb', 'b'), 2);
console.log(solution('abc', 'b'), 1);
console.log(solution('abbc', 'bb'), 1);

// Absent vowel (7 kyu)

/* 
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. 
Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

const absentVowel = x => {
	const vowel = 'AEIOU';

	for (let i = 0; i < vowel.length; i++) {
		if (!x.toUpperCase().includes(vowel[i])) {
			return i;
		}
	}
};

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);

// Milk and Cookies for Santa (7 kyu)

/* 
Happy Holidays fellow Code Warriors!
It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... 
when exactly do we need to do that?

Time for Milk and Cookies
Complete the function function that accepts a Date object, 
and returns true if it's Christmas Eve (December 24th), false otherwise.

Keep in mind Javascript's Date month is 0 based!

Examples
timeForMilkAndCookies(new Date(2013, 11, 24))  // true
timeForMilkAndCookies(new Date(2013, 0, 23))   // false
timeForMilkAndCookies(new Date(3000, 11, 24))  // true
*/

const timeForMilkAndCookies = date => date.getDate() === 24 && date.getMonth() === 11;

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)), true);
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)), false);
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)), true);

// Nice Array (7 kyu)

/* 
A Nice array is defined to be an array where for every value n in the array, 
there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. 
An empty array is not considered nice.
*/

const isNice = arr => arr.length !== 0 ?
	arr.every(el1 => arr.some(el2 => el1 === el2 + 1 || el1 === el2 - 1)) :
	false;

console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([3, 4, 5, 7]), false);

// Dot Calculator (7 kyu)

/* 
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. 
There will be dots on one side, an operator, and dots again after the operator. 
The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. 
If the result is 0, return the empty string. 
When it comes to subtraction, the first number will always be greater than or equal to the second number.
*/

const dotCalculator = equation => {
	const [firstOperand, operator, secondOperand] = equation.split(' ');
	const operations = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'//': (a, b) => a / b,
	}

	return '.'.repeat(operations[operator](firstOperand.length, secondOperand.length));
};

console.log(dotCalculator("..... + ..............."), "....................");
console.log(dotCalculator("..... - ..."), "..");
console.log(dotCalculator("..... - ."), "....");
console.log(dotCalculator("..... * ..."), "...............");
console.log(dotCalculator("..... * .."), "..........");
console.log(dotCalculator("..... // .."), "..");
console.log(dotCalculator("..... // ."), ".....");
console.log(dotCalculator(". // .."), "");
console.log(dotCalculator(". - ."), "");

// Partial Word Searching (7 kyu)

/* 
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. 
Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, 
the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], 
the method should return ["home", "Mercury"].
*/

const wordSearch = (query, seq) => {
	const res = seq.filter(item => item.toLowerCase().includes(query.toLowerCase()));

	return res.length ? res : ['Empty'];
};

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"])
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"])

// First-Class Function Factory (7 kyu)

/*
Description:
Write a function, factory, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter, 
and return an array of those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. 
So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];
*/

const factory = x => array => array.map(a => a * x);

const myArray = [1, 2, 3];
const threes = factory(3);
console.log(threes(myArray), [3, 6, 9]);
const fives = factory(5);
console.log(fives(myArray), [5, 10, 15]);


// Thinking & Testing: A and B ? (7 kyu)

/* 
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

const testit = (a, b) => a | b;

console.log(testit(0, 1), 1, "")
console.log(testit(1, 2), 3, "")
console.log(testit(10, 20), 30, "")
console.log(testit(1, 1), 1, "")
console.log(testit(1, 3), 3, "")

// Pluck (7 kyu)

/* 
Implement a function which takes a sequence of objects and a property name, 
and returns a sequence containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
If an object is missing the property, you should just leave it as undefined/None in the output array.
*/

const pluck = (objs, name) => objs.map(item => item[name]);

console.log(pluck([{ a: 1 }, { a: 2 }], 'a'), [1, 2]);
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b'), [3, undefined]);

// Whose bicycle? (7 kyu)

/* 
I am the father of three wonderful sons. before the beginning of the school year, 
I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. 
it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. 
Use the age table which is constant and preloaded:

const ageTable = {
						'firstSonAge': 14,
						'secondSonAge': 9,
						'thirdSonAge': 8
					 }
*/

const whoseBicycle = (diary1, diary2, diary3) => {
	const arr = [Object.values(diary1), Object.values(diary2), Object.values(diary3)].map(v => v.reduce((acc, item) => acc + item, 0))
	const index = arr.lastIndexOf(Math.max(...arr))
	return `I need to buy a bicycle for my ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'} son.`
};

console.log(whoseBicycle(
	{
		'algebra': 6,
		'history': 7,
		'physics': 8,
		'geography': 9,
		'chemistry': 10
	},
	{
		'algebra': 8,
		'history': 7,
		'physics': 8,
		'geography': 9,
		'chemistry': 10
	},
	{
		'algebra': 6,
		'history': 5,
		'physics': 5,
		'geography': 9,
		'chemistry': 10
	}
), 'I need to buy a bicycle for my second son.'
);

// Coding Meetup #11 - Higher-Order Functions Series - Find the average age (7 kyu)

/* 
You will be given a sequence of objects representing data about developers who have 
signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). 
In the example above your function should return 50 (number).

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.




This kata is part of the Coding Meetup series which includes a number of short and 
easy to follow katas which have been designed to allow mastering the use of higher-order functions. 
In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. 
Other approaches to solving the katas are of course possible.
*/

const getAverageAge = list => Math.round(list.reduce((acc, item) => acc + item.age, 0) / list.length);

const list19 = [
	{ firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
	{ firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

console.log(getAverageAge(list19), 50);


const list23 = [
	{ firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
	{ firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
];

console.log(getAverageAge(list23), 21);

// Building blocks (7 kyu)

/* 
Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] 
from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`
Examples
	 let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
	 b.getWidth() // -> 2
	 
	 b.getLength() // -> 4
	 
	 b.getHeight() // -> 6
	 
	 b.getVolume() // -> 48
	 
	 b.getSurfaceArea() // -> 88
Note: no error checking is needed

Any feedback would be much appreciated
*/

class Block {
	constructor(data) {
		this.data = data
	}
	getWidth() {
		return this.data[0]
	}
	getLength() {
		return this.data[1]
	}
	getHeight() {
		return this.data[2]
	}
	getVolume() {
		return this.data[0] * this.data[1] * this.data[2]

	}
	getSurfaceArea() {
		return (this.data[0] * this.data[1] + this.data[0] * this.data[2] + this.data[1] * this.data[2]) * 2
	}
};

const block = new Block([2, 4, 6]);

console.log(block.getWidth(), 2);
console.log(block.getLength(), 4);
console.log(block.getHeight(), 6);
console.log(block.getVolume(), 48);
console.log(block.getSurfaceArea(), 88);

// Last (7 kyu)

/* 
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/

function last1(list) {
	const last = arguments[arguments.length - 1];
	return last[last.length - 1] || last;
};

console.log(last1([1, 2, 3, 4, 5]), 5);   //-- array
console.log(last1("abcde"), "e");     //-- string
console.log(last1(1, "b", 3, "d", 5), 5);//-- arguments

// The Office I - Outed (7 kyu)

/* 
Your colleagues have been looking over you shoulder. 
When you should have been doing your boring real job, 
you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. 
You're in trouble. You quickly have to gauge the feeling in the room to decide whether or 
not you should gather your things and leave.

Given an object (meet) containing team member names as keys, 
and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. 
If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), 
their score is worth double it's face value (but they are still just one person!).
*/

const outed = (meet, boss) => {
	meet[boss] *= 2;
	return Object.values(meet).reduce((acc, item) => acc + item, 0) / Object.values(meet).length <= 5
		? 'Get Out Now!'
		: 'Nice Work Champ!';
};

console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'), 'Get Out Now!');
console.log(outed({ 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }, 'katie'), 'Nice Work Champ!');
console.log(outed({ 'tim': 2, 'jim': 4, 'randy': 0, 'sandy': 5, 'andy': 8, 'katie': 6, 'laura': 2, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 8 }, 'john'), 'Get Out Now!');

// Combine objects (7 kyu)

/* 
Your task is to write a function that takes two or more objects and returns 
a new object which combines all the input objects.

All input object properties will have only numeric values. 
Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/

function combine() {
	const argsArray = [...arguments];
	const comboObj = {};
	for (let i = 0; i < arguments.length; i++) {
		for (let key in arguments[i]) {
			if (!comboObj[key]) {
				comboObj[key] = arguments[i][key];
			}
			else {
				comboObj[key] += arguments[i][key];
			}
		}
	}
	return comboObj;
};

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }


console.log(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
console.log(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });
console.log(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 });
console.log(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 });

// Return the closest number multiple of 10 (7 kyu)

/* 
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/

const closestMultiple10 = num => {
	const a = parseInt(num / 10, 10) * 10;
	const b = a + 10;

	return (num - a >= b - num) ? b : a;
};

console.log(closestMultiple10(15), 20);
console.log(closestMultiple10(17), 20);
console.log(closestMultiple10(21), 30);

// Easy mathematical callback (7 kyu)

/* 
Write the processArray function, which takes an array and a callback function as parameters. 
The callback function can be, for example, a mathematical function that will be applied 
on each element of this array. Optionally, also write tests similar to the examples below.

Examples
1) Array [4, 8, 2, 7, 5] after processing with function

var myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray,function (a) {
  return a * 2;
});
will be [ 8, 16, 4, 14, 10 ].

2) Array [7, 8, 9, 1, 2] after processing with function

var myArray = [7, 8, 9, 1, 2];
myArray = processArray(myArray, function (a) {
  return a + 5;
});
will be [ 12, 13, 14, 6, 7 ].
*/

const processArray = (arr, callback) => arr.map(callback);

// Running out of space (7 kyu)

/* 
Kevin is noticing his space run out! Write a function that removes the spaces from the values and 
returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce 
['i','ihave','ihaveno','ihavenospace']
*/

const spacey = array => {
	let currentState = '';
	const resultArr = [];
	array.forEach(item => {
		resultArr.push(currentState += item);
	})

	return resultArr;
};

console.log(spacey(['kevin', 'has', 'no', 'space']),
	['kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']),
	['this', 'thischeese', 'thischeesehas', 'thischeesehasno', 'thischeesehasnoholes']);


// Reverse list (7 kyu)

/* 
Write reverseList function that simply reverses lists.
*/

const reverseList = arr => arr.reverse();

console.log(reverseList([]), []);
console.log(reverseList([1, 2, 3]), [3, 2, 1]);

// String Reordering (7 kyu)

/* 
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' 
integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. 
The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
		  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
		  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
		 ]

Output:
'Vatsan took his dog for a spin'
*/

const sentence = List => List.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
	.map(item => item[Object.keys(item)[0]]).join(' ');

const List = [
	{ '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
	{ '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
];

console.log(sentence(List), 'Vatsan took his dog for a spin');

// Valid Parentheses (7 kyu)

/* 
Write a function that takes a string of parentheses, and determines if the order 
of the parentheses is valid. The function should return true if the string is valid, 
and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.
*/

const validParentheses = parens => {
	let result = 0;

	for (let i = 0; i < parens.length && result >= 0; i++) {
		result += (parens[i] == '(') ? 1 : -1;
	}

	return (result === 0);
};

console.log(validParentheses("()"), true);
console.log(validParentheses("((()))"), true);
console.log(validParentheses("()()()"), true);
console.log(validParentheses("(()())()"), true);
console.log(validParentheses("()(())((()))(())()"), true);
console.log(validParentheses(")("), false);
console.log(validParentheses("()()("), false);
console.log(validParentheses("((())"), false);
console.log(validParentheses("())(()"), false);
console.log(validParentheses(")()"), false);
console.log(validParentheses(")"), false);
console.log(validParentheses(""), true);

// Two numbers are positive (7 kyu)

/* 
Your job is to write a function, which takes three integers a, b, 
and c as arguments, and returns True if exactly two of of the three integers are 
positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
*/

const twoArePositive = (a, b, c) => [a, b, c].filter(item => item > 0).length === 2;

console.log(twoArePositive(2, 4, -3), true, '(2, 4, -3)');
console.log(twoArePositive(-4, 6, 8), true, '(-4, 6, 8)');
console.log(twoArePositive(4, -6, 9), true, '(4, -6, 9)');
console.log(twoArePositive(4, 6, 0), true, '(4, 6, 0)');
console.log(twoArePositive(-4, 6, 0), false, '(-4, 6, 0)');
console.log(twoArePositive(4, 6, 10), false, '(4, 6, 10)');
console.log(twoArePositive(-14, -3, -4), false, '(-14, -3, -4)');

// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters (7 kyu)

/* 
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
Task
Define the following classes.

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments 
in the following order: length, width, height and store these three values in this.length, 
this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area 
of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
class Cube is a subclass of class Cuboid. The constructor function of Cube should 
receive one argument only, its length, and use that value passed in to set this.length, 
this.width and this.height.

Hint: Make a call to
super
, passing in the correct arguments, to make life easier ;)

Related Articles
Listed below are a few articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN
*/

class Cuboid {
	constructor(length, width, height) {
		this.length = length;
		this.width = width;
		this.height = height;
	}
	get volume() {
		return this.length * this.width * this.height;
	}
	get surfaceArea() {
		return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
	}
}
class Cube extends Cuboid {
	constructor(length) {
		super(length, length, length);
	}
};

const cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.length, 1);
console.log(cuboid.width, 2);
console.log(cuboid.height, 3);
console.log(cuboid.volume, 6);
console.log(cuboid.surfaceArea, 22);
cuboid.length = 4;
console.log(cuboid.volume, 24);
console.log(cuboid.surfaceArea, 52);
cuboid.width = 5;
console.log(cuboid.volume, 60);
console.log(cuboid.surfaceArea, 94);
cuboid.height = 6;
console.log(cuboid.volume, 120);
console.log(cuboid.surfaceArea, 148);
[cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
console.log(cuboid.volume, 504);
console.log(cuboid.surfaceArea, 382);

// For the sake of argument (7 kyu)

/* 
Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/

const numbers12 = (...args) => args.every(arg => typeof arg === 'number');

// Return a sorted list of objects (7 kyu)

/* 
You'll be passed an array of objects (list) - you must sort them in descending order 
based on the value of the specified property (sortBy).

Example
When sorted by "a", this:

[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
*/

const sortList = (sortBy, list) => list.sort((a, b) => b[sortBy] - a[sortBy]);

console.log(sortList('a', [
	{ "a": 1, "b": 3 },
	{ "a": 3, "b": 2 },
	{ "a": 2, "b": 40 },
	{ "a": 4, "b": 12 }
]), [
	{ "a": 4, "b": 12 },
	{ "a": 3, "b": 2 },
	{ "a": 2, "b": 40 },
	{ "a": 1, "b": 3 }
]);

// Find Your Villain Name (7 kyu)

/* 
Create a function that returns a villain name based on the user's birthday. 
The birthday will be passed to the function as a valid Date object, so for simplicity, 
there's no need to worry about converting strings to dates.

The first name will come from the month, and the last name will come from the last digit of the date:

Month -> first name

January -> "The Evil"
February -> "The Vile"
March -> "The Cruel"
April -> "The Trashy"
May -> "The Despicable"
June -> "The Embarrassing"
July -> "The Disreputable"
August -> "The Atrocious"
September -> "The Twirling"
October -> "The Orange"
November -> "The Terrifying"
December -> "The Awkward"
Last digit of date -> last name

0 -> "Mustache"
1 -> "Pickle"
2 -> "Hood Ornament"
3 -> "Raisin"
4 -> "Recycling Bin"
5 -> "Potato"
6 -> "Tomato"
7 -> "House Cat"
8 -> "Teaspoon"
9 -> "Laundry Basket"
The returned value should be a string in the form of "First Name Last Name".

For example, a birthday of November 18 would return "The Terrifying Teaspoon"
*/

const getVillainName = birthday => {
	const firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
	const lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
	return `${firstNames[birthday.getMonth()]} ${lastNames[birthday.getDate() % 10]}`
};

//may 3
console.log(getVillainName(new Date("May 3")), "The Despicable Raisin", "Expected result: The Despicable Raisin; Your result: " + getVillainName(new Date("May 13")));

//apr 1
console.log(getVillainName(new Date("April 21")), "The Trashy Pickle", "Expected result: The Trashy Pickle; Your result: " + getVillainName(new Date("April 21")));

//dec 7
console.log(getVillainName(new Date("December 17")), "The Awkward House Cat", "Expected result: The Awkward House Cat; Your result: " + getVillainName(new Date("December 17")));

// Find the index of the second occurrence of a letter in a string (7 kyu)

/* 
In this kata, you need to write a function that takes a string and a letter as input and then returns 
the index of the second occurrence of that letter in the string. 
If there is no such letter in the string, then the function should return -1. 
If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
Good luck ;) And don't forget to rate this Kata if you liked it.
*/

const secondSymbol = (str, symbol) => {
	let i = str.indexOf(symbol);
	if (i >= 0) {
		i = str.indexOf(symbol, i + 1);
	}

	return i;
};

console.log(secondSymbol('Hello world!!!', 'l'), 3, 'Find the index of the second symbol "l" in the string');
console.log(secondSymbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string');
console.log(secondSymbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string');
console.log(secondSymbol('', 'q'), -1, 'The symbol "q" is not in the string');
console.log(secondSymbol('Hello', '!'), -1, 'The symbol "!" is not in the string');

// Convert Hash To An Array (7 kyu)

/* 
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.

Good Luck!
*/

const convertHashToArray = hash => Object.entries(hash).sort();

console.log(convertHashToArray({ name: "Jeremy" }), [["name", "Jeremy"]]);
console.log(convertHashToArray({ name: "Jeremy", age: 24 }), [["age", 24], ["name", "Jeremy"]]);
console.log(convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }), [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 }), [["powerLevelOver", 9000], ["product", "CodeWars"]]);
console.log(convertHashToArray({}), []);

// Counting in the Amazon (7 kyu)

/* 
The Arara are an isolated tribe found in the Amazon who count in pairs. 
For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.

countArara(3) 'adak anane'

countArara(8) 'adak adak adak adak'
countArara 3 // -> "adak anane"

countArara 8 // -> "adak adak adak adak"
*/

const countArara = n => n % 2 === 0 ? 'adak '.repeat((n - 2) / 2) + 'adak' : 'adak '.repeat(n / 2) + 'anane';

console.log(countArara(1), "anane");
console.log(countArara(3), "adak anane");
console.log(countArara(8), "adak adak adak adak");

// Sum a list but ignore any duplicates (7 kyu)

/* 
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

const sumNoDuplicates = numList =>
	numList.filter(item => numList.indexOf(item) === numList.lastIndexOf(item))
		.reduce((acc, item) => acc + item, 0);

const fixedCases = [
	[[1, 1, 2, 3], 5],
	[[], 0],
	[[1, 1, 2, 2, 3], 3],
	[[5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1], 21],
	[[0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0], 31],
	[[0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2], 15],
	[[7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5], 25],
	[[7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5], 27],
	[[1, 9, 9, 5, 7, 7, 6, 1, 5, 6], 0],
	[[10, 10, 1, 4, 10, 3, 9, 6, 10, 10, 9, 9, 10, 5, 6, 10, 4, 1], 8],
	[[7, 10, 10, 9, 0, 2, 5, 10, 3, 8, 1, 4, 9, 9, 5, 8, 8, 8, 5, 3], 14],
	[[1, 9, 2, 1, 5, 5, 1, 1, 5, 10, 5, 9, 5, 2, 1], 10],
	[[8, 6, 3, 6, 7, 3, 4, 4, 2, 1, 4, 5, 8, 6], 15],
	[[10, 9, 2, 8, 9, 10, 4, 6, 9, 5, 1, 1, 4, 3, 9, 7, 8, 5, 5], 18],
	[[5, 5, 0, 0, 6, 3, 7, 2, 4, 2], 20],
	[[0, 8, 5, 10, 1, 1, 6, 8], 21],
	[[4, 2, 10, 9, 10, 5, 1, 7, 1, 9, 8, 7, 4, 2, 5, 8, 3, 10, 8], 3],
	[[9, 8, 3, 1, 8, 1, 7], 19],
	[[1, 4, 3, 8, 9, 4, 7, 5, 10, 10, 7, 6, 9, 3], 20],
	[[2, 0, 4, 2, 2, 3, 6, 7, 3, 8, 10, 6, 8], 21],
	[[7, 9, 5, 6, 1, 0, 5, 0, 4, 7, 1, 2, 8, 9, 6, 1], 14],
	[[7, 1, 8, 8, 5, 5, 1, 4, 0, 1, 10, 1], 21],
];

for (let [input, expected] of fixedCases) {
	console.log(sumNoDuplicates(input), expected);
}

// LinkedList -> Array (7 kyu)

/* 
Linked lists are data structures composed of nested or chained objects, 
each containing a single value and a reference to the next object.

Here's an example of a list:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}
Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

[1, 2, 3]
Assume all inputs are valid lists with at least one value. For the purpose of simplicity, 
all values will be either numbers, strings, or Booleans.
*/

const listToArray = list => {
	const result = [];

	for (const key in list) {
		if (typeof list[key] === 'object') {
			result.push(listToArray(list[key]))
		} else {
			result.push(list[key])
		}
	}

	return result.flat();
};

const list123456 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const list2345 = { value: "foo", next: { value: "bar", next: null } };

console.log(listToArray(list123456), [1, 2, 3]);
console.log(listToArray(list2345), ["foo", "bar"]);

// Sort Santa's Reindeer (7 kyu)

/* 
Happy Holidays fellow Code Warriors!
Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, 
Donder and Blitzen! That's the order Santa wanted his reindeer...right? 
What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

Sort Santa's Reindeer
Write a function that accepts a sequence of Reindeer names, 
and returns a sequence with the Reindeer names sorted by their last names.

Notes:
It's guaranteed that each string is composed of two words
In case of two identical last names, keep the original order
Examples
For this input:

[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]
*/

const sortReindeer = reindeerNames =>
	reindeerNames.sort((a, b) =>
		a.split(' ')[1].localeCompare(b.split(' ')[1]));


const input12349 = [
	"Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
	"Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
];
const output129 = [
	"Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall",
	"Donder Jonker", "Comet Karavani", "Dancer Moore", "Dasher Tonoyan"
];
console.log(sortReindeer(input12349), output129);

// Ninja vs Samurai: Strike (7 kyu)

/* 
Something is wrong with our Warrior class. The strike method does not work correctly. 
The following shows an example of this code being used:

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
Can you figure out what is wrong?
*/

const Warrior = function (name) {
	this.name = name;
	this.health = 100;
}

Warrior.prototype.strike = function (enemy, swings) {
	return enemy.health = Math.max(0, enemy.health - (swings * 10));
}

const ninja = new Warrior('Ninja');
const samurai = new Warrior('Samurai');

console.log(samurai.strike(ninja, 3));

// Candy problem (7 kyu)

/* 
"It's the end of trick-or-treating and we have a list/array representing how much candy 
each child in our group has made out with. We don't want the kids to start arguing, 
and using our parental intuition we know trouble is brewing as many of the children in 
the group have received different amounts of candy from each home.

So we want each child to have the same amount of candies, only we can't exactly take any candy away from the kids, 
that would be even worse. Instead we decide to give each child extra candy until they all have the same amount.

Task
Your job is to find out how much candy each child has, 
and give them each additional candy until they too have as much as the child(ren) with the most candy. 
You also want to keep a total of how much candy you've handed out because reasons."

Your job is to give all the kids the same amount of candies as the kid with the most candies and then 
return the total number candies that have been given out. If there are no kids, or only one, return -1.

In the first case (look below) the most candies are given to second kid (i.e second place in list/array), 8. 
Because of that we will give the first kid 3 so he can have 8 and the third kid 2 and the fourth kid 4, 
so all kids will have 8 candies.So we end up handing out 3 + 2 + 4 = 9.

candies ([5,8,6,4]) // return 9

candies ([1,2,4,6]) // return 11

candies ([]) // return -1

candies ([1,6]) // return 5
*/

const candies = kids => {
	if (kids.length <= 1) {
		return -1;
	}
	const maxCandies = Math.max(...kids);

	return kids.reduce((acc, item) => acc + maxCandies - item, 0);
};

console.log(candies([5, 8, 6, 4]), 9);
console.log(candies([1, 2, 4, 6]), 11);
console.log(candies([1, 2]), 1);
console.log(candies([4, 2]), 2);

// Who's Online? (7 kyu)

/* 
You have a group chat application, but who is online!?
	 You want to show your users which of their friends are online and available to chat!
	 Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
	 If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
	 The input data has the following structure:
	 [{
		username: 'David',
		status: 'online',
		lastActivity: 10
	 }, {
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22
	 }, {
		username: 'Bob',
		status: 'online',
		lastActivity: 104
	 }]
	 username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
	 Finally, if you have no friends in your chat application, the input will be an empty array [].
	 In this case you should return an empty object {} (empty Dictionary in C#).
*/

const whosOnlinee = friends =>
	friends.reduce((activities, { username, status, lastActivity }) => {
		const realStatus = status === 'online' && lastActivity > 10 ? 'away' : status
		return { ...activities, [realStatus]: activities[realStatus] ? [...activities.realStatus, username] : [username] }
	}, {});

// Coding Meetup #14 - Higher - Order Functions Series - Order the food (7 kyu)

/* 
You will be given an array of objects representing data about 
developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food 
options selected by the developers on the meetup sign-up form..

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
	 meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
	 meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
	 meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
	 meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }
Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal 
option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 
'diabetic', 'gluten-intolerant'.
*/

const orderFood = list => {
	const res = {}
	list.forEach(v => res[v.meal] = res[v.meal] ? res[v.meal] + 1 : 1)
	return res;
};

const list191 = [
	{
		firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
		meal: 'vegetarian'
	},
	{
		firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
		meal: 'standard'
	},
	{
		firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
		meal: 'vegan'
	},
	{
		firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
		meal: 'vegetarian'
	},
];

const answer = { vegetarian: 2, standard: 1, vegan: 1 };

console.log(orderFood(list191), answer);

// Arithmetic List! (7 kyu)

/* 
In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned
Useful link: Sequence

Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)
*/

const seqlist = (first, c, l) => {
	const res = [];
	let count = 0;

	while (count < l) {
		res.push(first);
		first += c;
		count++;
	}

	return res;
};

console.log(seqlist(0, 1, 20), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

// Use map() to double the values in an array (7 kyu)

/* 
Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. 
Your solution must use the map() function of the built-in javascript Array object. 
If you're not familiar with map(), reading over the documentation may help.

For example:

var someNumbers = [1,2,10,57];

double(someNumbers); // should return [2,4,20,114]
*/

const double = array => array.map(item => item * 2);

console.log(double([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10]);
console.log(double([71, -548, 12.3, 31415]), [142, -1096, 24.6, 62830]);

// Double Every Other (7 kyu)

/* 
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]
*/

const doubleEveryOther = a => a.map((item, i) => i % 2 !== 0 ? item * 2 : item);

console.log(doubleEveryOther([1, 2, 3, 4]), [1, 4, 3, 8]);

// Sum of a Beach (7 kyu)

/* 
Beaches are filled with sand, water, fish, and sun. Given a string, 
calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0
*/

const sumOfABeach = beach => beach.split(/water|sand|fish|sun/gi).length - 1;

console.log(sumOfABeach("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn"), 4);
console.log(sumOfABeach("sAnDsandwaTerwatErfishFishsunsunsandwater"), 10);
console.log(sumOfABeach("joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef "), 0);
console.log(sumOfABeach("jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f"), 10);

// Ghostbusters (whitespace removal) (7 kyu)

/* 
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"
*/

const ghostBusters = building => {
	if (building.includes(' ')) {
		return building.split(' ').join('');
	}
	return 'You just wanted my autograph didn\'t you?'
}

console.log(ghostBusters("Factor y") === "Factory", 'Nope, there may still be a ghost in the building. Try again.');
console.log(ghostBusters("O  f fi ce") === "Office", 'Nope, there may still be a ghost in the building. Try again.');
console.log(ghostBusters("BusStation") === "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.');

// Is It Negative Zero (-0)? (7 kyu)

/* 
There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

In JavaScript / TypeScript / Coffeescript the input will be a number.

In Python / Java / C / NASM / Haskell / the input will be a float.
*/

const isNegativeZero = n => Object.is(-0, n);

console.log(isNegativeZero(-0), true);
console.log(isNegativeZero(-Infinity), false);
console.log(isNegativeZero(-5), false);
console.log(isNegativeZero(-4), false);
console.log(isNegativeZero(-3), false);
console.log(isNegativeZero(-2), false);
console.log(isNegativeZero(-1), false);

// Nth Root of a Number (7 kyu)

/* 
Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x

Examples
x = 4     n = 2  -->  2    # the square root of 4 is 2     2^2 = 4
x = 8     n = 3  -->  2    # the cube root of 8 is 2       2^3 = 8
x = 256   n = 4  -->  4    # the 4th root of 256 is 4      4^4 = 256
x = 9     n = 2  -->  3    # the square root of 9 is 3     3^2 = 9
x = 6.25  n = 2  -->  2.5  #                             2.5^2 = 6.25
Notes:
4 <= x < 10 ^ 20
4 <= n <= 50
*/

const root = (x, n) => Math.pow(x, 1 / n);

console.log(root(8, 3), 2, "Wrong value");
console.log(root(6.25, 2), 2.5, "Wrong value");

// Power of 4 (7 kyu)

/* 
Write a method that returns true if a given parameter is a power of 4, and false if it's not. 
If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)
*/

const powerOf4 = n => Number.isInteger(n) ? Number.isInteger(Math.log(n) / Math.log(4)) : false;

console.log(powerOf4(4), true);
console.log(powerOf4(16), true, "4^4 = 16");
console.log(powerOf4(1), true, "Four to the power of 0 is 1");
console.log(powerOf4(8), false, "8 is not a power of 4");
console.log(powerOf4(20), false, "20 is not a power of 4");
console.log(powerOf4(32), false, "32 is not a power of 4");
console.log(powerOf4(44), false, "44 is not a power of 4");
console.log(powerOf4(3.1415), false);
console.log(powerOf4("1"), false, "Should return false for strings");
console.log(powerOf4("4"), false, "Should return false for strings");
console.log(powerOf4(null), false, "Should return false for non-numbers");
console.log(powerOf4(undefined), false, "Should return false for non-numbers");
console.log(powerOf4(function () { }), false, "Should return false for non-numbers");

// Alphabetically ordered (7 kyu)

/* 
Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false 
depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)
*/

const alphabetic = s => s === s.split('').sort().join('');

console.log(alphabetic("asd"), false);
console.log(alphabetic("codewars"), false);
console.log(alphabetic("door"), true);
console.log(alphabetic("cell"), true);
console.log(alphabetic("z"), true);
console.log(alphabetic(""), true);

// Determine if the poker hand is flush (7 kyu)

/* 
Determine if the poker hand is flush, meaning if the five cards are of the same suit.

Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), 
meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

Your function should return true if the hand is a flush, false otherwise.

The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

Examples
["AS", "3S", "9S", "KS", "4S"]  ==> true

["AD", "4S", "7H", "KS", "10S"] ==> false
*/

const isFlush = cards => cards.filter((item, _i, arr) => item[item.length - 1] === arr[0][arr[0].length - 1]).length === cards.length;

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]), true);
console.log(isFlush(["AD", "4S", "7H", "KC", "5S"]), false);
console.log(isFlush(["AD", "4S", "10H", "KC", "5S"]), false);
console.log(isFlush(["QD", "4D", "10D", "KD", "5D"]), true);
console.log(isFlush(["10D", "4D", "QD", "KD", "5D"]), true);

// Every archer has its arrows (7 kyu)

/* 
#It's show time! Archers have gathered from all around the world to participate in the Arrow Function Faire. 
But the faire will only start if there are archers signed and if they all have enough arrows in their quivers - 
at least 5 is the requirement! Are all the archers ready?

#Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

#Argument archers is an array of integers, in which each element corresponds to the number of arrows each archer has.

#Return Your function must return true if the requirements are met or false otherwise.

#Examples archersReady([1, 2, 3, 4, 5, 6, 7, 8]) returns false because there are archers with not enough arrows.

archersReady([5, 6, 7, 8]) returns true.
*/

const archersReady = archers => archers.length === 0 ? false : archers.every(item => item >= 5);

console.log(archersReady([]), false, "Should handle no archers");
console.log(archersReady([1, 2, 3, 4]), false, "Should handle unprepared archers");
console.log(archersReady([5, 6, 7, 8]), true, "Should handle prepared archers");
console.log(archersReady([1, 2, 3, 4, 5, 6, 7, 8]), false, "Should handle mixed archers");

// Square(n) Sum (8 kyu)

/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

const squareSum = numbers => numbers.reduce((acc, item) => acc + item ** 2, 0);

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);

// Largest Square Inside A Circle (7 kyu)

/* 
Determine the area of the largest square that can fit inside a circle with radius r.
*/

const areaLargestSquare = r => 2 * (r ** 2);

console.log(areaLargestSquare(5), 50);
console.log(areaLargestSquare(7), 98);
console.log(areaLargestSquare(15), 450);

// Regexp Basics - is it a vowel? (6 kyu)

/* 
Implement the function which should return true if given object is a vowel 
(meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

String.prototype.vowel = function () {
	return /^[aeiou]$/i.test(this)
}

console.log('a'.vowel(), true);
console.log('E'.vowel(), true);
console.log('ou'.vowel(), false);
console.log('z'.vowel(), false);
console.log('lol'.vowel(), false);

// Regexp Basics - is it a letter? (7 kyu)

/* 
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function () {
	return (/^[a-zA-Z]$/g).test(this);
}

console.log("".isLetter(), false);
console.log("a".isLetter(), true);
console.log("X".isLetter(), true);
console.log("7".isLetter(), false);
console.log("*".isLetter(), false);
console.log("ab".isLetter(), false);
console.log("a\n".isLetter(), false);

// Arithmetic Sequence! (7 kyu)

/* 
A sequence is usually a set or an array of numbers that has a strict way for moving from the nth term to the (n+1)th term.
If f(n) = f(n-1) + c where c is a constant value, then f is an arithmetic sequence.
An example would be (where the first term is 0 and the constant is 1) is [0, 1, 2, 3, 4, 5, ... and so on] )
Else if (pun) f(n) = f(n-1) * c where c is a constant value, then f is a geometric sequence.
Example where the first term is 2 and the constant is 2 will be [2, 4, 8, 16, 32, 64, ... to infinity ... ]
There are some sequences that aren't arithmetic nor are they geometric.
Here is a link to feed your brain : Sequence !

You're going to write a function that's going to return the value in the nth index of an arithmetic sequence.
(That is, adding a constant to move to the next element in the "set").

The function's name is nthterm/Nthterm, it takes three inputs first,n,c where:

first is the first value in the 0 INDEX.
n is the index of the value we want.
c is the constant added between the terms.
Remember that first is in the index 0 .. just saying ...
*/

const nthterm = (first, n, c) => first + n * c;

console.log(nthterm(1, 2, 3), 7)
console.log(nthterm(2, 2, 2), 6)
console.log(nthterm(-50, 10, 20), 150)

// Changing letters (7 kyu)

/* 
When provided with a String, capitalize all vowels

For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/

const swap = string => st.replace(/[aeuio]/gi, $1 => $1.toUpperCase());

console.log(swap(""), "");
console.log(swap("   @@@"), "   @@@");
console.log(swap("HelloWorld!"), "HEllOWOrld!");
console.log(swap("Sunday"), "SUndAy");
console.log(swap("Codewars"), "COdEwArs");
console.log(swap("Monday"), "MOndAy");
console.log(swap("Friday"), "FrIdAy");
console.log(swap("abracadabra"), "AbrAcAdAbrA");
console.log(swap("AbrAcAdAbrA"), "AbrAcAdAbrA");
console.log(swap("ABRACADABRA"), "ABRACADABRA");
console.log(swap("aBRaCaDaBRa"), "ABRACADABRA");

// Birthday I - Cake (7 kyu)

/* 
It's your birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (candles). 
Please note this is not reality, and your age can be anywhere up to 1000. Yes, you would look a mess.

As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. 
They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. 
Sounds fun!

When your friend jumps out of the cake, he/she will knock some of the candles to the floor. 
If the number of candles that fall is higher than 70% of total candles, the carpet will catch fire.

You will work out the number of candles that will fall from the provided lowercase string (debris). 
You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in the string, 
with the alphabetical position ("a" = 1, "b" = 2, etc.) of each odd indexed character to get the string's total.

For example:

"abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198
If the carpet catches fire, return "Fire!", if not, return "That was close!".

Notes

if there are no candles to begin with, the carpet cannot catch fire;
as this is not reality, you may have more candles falling from the cake than the total...
*/

const cake = (x, y) => x * 0.7 > y.split('').reduce((acc, item, i) => acc + (i % 2 === 0 ? item.charCodeAt(0) : item.charCodeAt(0) - 96), 0)
	? 'That was close!'
	: 'Fire!';

console.log(cake(900, 'abcdef'), 'That was close!');
console.log(cake(56, 'ifkhchlhfd'), 'Fire!');
console.log(cake(256, 'aaaaaddddr'), 'Fire!');

// Trimming a string (7 kyu)

/* 
Create a function that will trim a string (the first argument given) if it is longer than the requested 
maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

For example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H...", because 1 <= 3

Requested maximum length will be greater than 0. Input string will not be empty.
*/

const trim = (str, size) => str.length <= size ? str : `${str.slice(0, size <= 3 ? size : size - 3)}...`;

console.log(trim("Creating kata is fun", 14), "Creating ka...");
console.log(trim("He", 1), "H...");
console.log(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");

// Reverse the bits in an integer (7 kyu)

/* 
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/

const reverseBits = n => parseInt(n.toString(2).split('').reverse().join(''), 2);

console.log(reverseBits(417), 267);
console.log(reverseBits(267), 417);
console.log(reverseBits(0), 0);
console.log(reverseBits(2017), 1087);
console.log(reverseBits(1023), 1023);
console.log(reverseBits(1024), 1);

// Thinkful - String Drills: Quotable (7 kyu)

/* 
This function should take two string parameters: a person's name (name) and a quote of theirs (quote), 
and return a string attributing the quote to the person in the following format:

'[name] said: "[quote]"'
For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

'Grae said: "Practice makes perfect"'
Unfortunately, something is wrong with the instructions in the function body. 
Your job is to fix it so the function returns correctly formatted quotes.

Click the "Train" button to get started, and be careful with your quotation marks.
*/

const quotable = (name, quote) => `${name} said: "${quote}"`;

console.log(quotable('Grae', 'Practice makes perfect'), 'Grae said: "Practice makes perfect"')
console.log(quotable('Dan', 'Get back to work, Grae'), 'Dan said: "Get back to work, Grae"')
console.log(quotable('Alex', 'Ruby is great fun'), 'Alex said: "Ruby is great fun"')
console.log(quotable('Bethany', 'Yes, way more fun than R'), 'Bethany said: "Yes, way more fun than R"')
console.log(quotable('Darrell', 'What the heck is this thing?'), 'Darrell said: "What the heck is this thing?"')

// Sequence generator (7 kyu)

/* 
Implement function sequence, which returns new n-size Array filled according to pattern.

pattern may be:

a function that takes two: (element, index), one: (element) or any arguments (similar to map function), 
then filled running this function, in other words: function describes sequence,
number, string or any other object, then filled by copying, this object n-times.
Examples:

sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, "s"); // ["s", "s"]
sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Note: Sequences are great to work with functional methods like map, reduce, forEach, every or any. For example:

// sum of numbers 1-10
let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num);
Be careful with long sequences. They are just arrays, every element is created when function is called.
*/

const sequence = (n, pattern) => [...Array(n)].map(typeof pattern === 'function' ? pattern : () => pattern);

console.log(sequence(3, 4), [4, 4, 4], "number filled");
console.log(sequence(3, 's'), ['s', 's', 's'], "string filled");
console.log(sequence(5, []), [[], [], [], [], []], "5 empty arrays");
console.log(sequence(5, (x, idx) => idx % 2), [0, 1, 0, 1, 0], "have to filled by two parram function pattern");

// Naughty or Nice? (7 kyu)

/* 
Happy Holidays fellow Code Warriors!
It's almost Christmas! That means Santa's making his list, and checking it twice. Unfortunately, 
elves accidentally mixed the Naughty and Nice list together! Santa needs your help to save Christmas!

Save Christmas!
Santa needs you to write two functions. Both of the functions accept a sequence of objects. 
The first one returns a sequence containing only the names of the nice people, 
and the other returns a sequence containing only the names of the naughty people. 
Return an empty sequence [] if the result from either of the functions contains no names.

The objects in the passed will represent people. Each object contains two properties: name and wasNice.
name - The name of the person
wasNice - True if the person was nice this year, false if they were naughty
*/

const getNiceNames = people => people.filter(item => item.wasNice).map(item => item.name);

const getNaughtyNames = people => people.filter(item => !item.wasNice).map(item => item.name);

// Sorting Dictionaries (7 kyu)

/* 
Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

The list must be sorted by the value and be sorted largest to smallest.

Examples
sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]
*/

const sortDict = dict => Object.keys(dict)
	.map(v => [+v || v, dict[v]])
	.sort((a, b) => b[1] - a[1]);

console.log(sortDict({ 1: 3, 2: 2, 3: 1 }), [[1, 3], [2, 2], [3, 1]]);
console.log(sortDict({ 3: 1, 2: 2, 1: 3 }), [[1, 3], [2, 2], [3, 1]]);
console.log(sortDict({ 1: 2, 2: 4, 3: 6 }), [[3, 6], [2, 4], [1, 2]]);
console.log(sortDict({ 1: 5, 3: 10, 2: 2, 6: 3, 8: 8 }), [[3, 10], [8, 8], [1, 5], [6, 3], [2, 2]]);

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace() (7 kyu)

/* 
This time we learn three string methods used to change the contents of the string:toUpperCase() toLowerCase() and replace(). Their usage:

stringObject.toUpperCase()
stringObject.toLowerCase()
stringObject.replace(substring/regexp,replacement)
toUpperCase() and toLowerCase() usage is very simple. No parameters needs accept. 
It can convert all the characters in the string to uppercase or lowercase. like this:

var str="My name is John";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//output:
MY NAME IS JOHN
my name is john
The following is a classic usage. Capitalize the first letter of a sentence:

var str="this is an example.";
var result=str[0].toUpperCase()+str.slice(1);
console.log(result);

//output:
This is an example.
The example below is to capitalize the first letter of all the words in the sentence. 
We used the split() and join() that we learned last time.

var str="this is an example.";
var words=str.split(" ");
for (var i=0;i<words.length;i++){
  words[i]=words[i][0].toUpperCase()+words[i].slice(1);
}
console.log(words.join(" "));

//output:
This Is An Example.
It seems a bit complicated. Let's learn new method to improve it.

replace() can replace the text specified(parameter 1) in the string with parameter 2. For example:

var str="this is an example.";
var result=str.replace("this","that");
console.log(result);

//output:
that is an example.
Let's use replace() to improve the example above (capitalized the first letter):

var str="this is an example.";
var words=str.split(" ");
for (var i=0;i<words.length;i++){
  words[i]=words[i].replace(words[i][0],words[i][0].toUpperCase());
}
console.log(words.join(" "));

//output:
This Is An Example.
If the parameter 1 of replace() is a regular expression, it will be more simple(We don't even need to split the string):

var str="this is an example.";
var result=str.replace(/\b\w/g,x=>x.toUpperCase());
console.log(result);

//output:
This Is An Example.
This code uses a regular expression and an arrow function. 
This allows us to achieve a more powerful role in the code. 
All of these will be learning in the future lesson. We need to do now is to learn the basics.

Another point needs to pay attention: If replace() uses a regular expression as parameter 1, 
and all the characters that match the regular expression are replaced(The regular expression uses a global matching option g). 
If we use a string as a parameter 1, only the first match(from left to right) of the string is replaced. like this:

var str="example";
var result=str.replace("e","@");
console.log(result);

//output:
@xample
As you can see, the second "e" will not be replaced.

Ok, lesson is over. let's us do some task.

Task
Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. 
The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. 
Looks very strange? Because this is the form of alien language ;-)

for example:

alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
A small hint: The first conversion of the entire string will make the code easier
*/

const alienLanguage = str => str.split(' ').map(v => v.slice(0, -1).toUpperCase() + v.slice(-1).toLowerCase()).join(' ');

console.log(alienLanguage("My name is John"), "My NAMe Is JOHn");
console.log(alienLanguage("this is an example"), "THIs Is An EXAMPLe");
console.log(alienLanguage("Hello World"), "HELLo WORLd");
console.log(alienLanguage("HELLO WORLD"), "HELLo WORLd");

// Multiply Word in String (7 kyu)

/* 
You are to write a function that takes a string as its first parameter. 
This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. 
The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. 
You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string", 3, 5) 
*/

const modifyMultiply = (str, loc, num) => {
	let result = '';
	const locWorld = str.split(' ')[loc];
	while (num >= 1) {
		result += num !== 1 ? `${locWorld}-` : locWorld;
		num--;
	}
	return result;
};

console.log(modifyMultiply("This is a string", 3, 5), "string-string-string-string-string", "The string is incorrect");
console.log(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.", 8, 10), "that-that-that-that-that-that-that-that-that-that");
console.log(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence", 1, 1), "means");
console.log(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.", 6, 8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");
console.log(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.", 2, 5), "around-around-around-around-around");

// Multiples! (7 kyu)

/* 
Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, 
"Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. 
Note: Your program should only return one value

Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"
*/

const multiple = x => x % 3 === 0 && x % 5 === 0 ? "BangBoom" :
	x % 3 === 0 ? "Bang" :
		x % 5 === 0 ? "Boom" :
			"Miss";

console.log(multiple(30), "BangBoom")
console.log(multiple(3), "Bang")
console.log(multiple(98), "Miss")
console.log(multiple(65), "Boom")
console.log(multiple(23), "Miss")
console.log(multiple(15), "BangBoom")

// Re-open class (7 kyu)

/* 
Ruby and Javascript let you re-open classes so you can add new functionalities to existing classes and objects.

To demonstrate this, you'll have to add a new method (called my_new_method in Ruby or myNewMethod in JS) 
into the String class that simply calls the upcase method (toUpperCase() in Javascript), so that:

Ruby

"abc".my_new_method
JS

"abc".myNewMethod();
returns

"ABC"
*/

String.prototype.myNewMethod = function () {
	return this.toUpperCase();
};

console.log("abc".myNewMethod(), "ABC", '"abc".myNewMethod() should return "ABC"');

// Number Pairs (7 kyu)

/* 
In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

const getLargerNumbers = (a, b) => {
	const res = [];
	for (let i = 0; i < a.length; i++) {
		res.push(Math.max(a[i], b[i]));
	}

	return res;
};

let arrOne = [13, 64, 15, 17, 88];
let arrTwo = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(arrOne, arrTwo), [23, 64, 53, 17, 88], `Wrong result for a = ${arrOne}, b = ${arrTwo}`);
arrOne = [34, -64, 15, 17, 88];
arrTwo = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(arrOne, arrTwo), [34, 14, 53, 17, 88], `Wrong result for a = ${arrOne}, b = ${arrTwo}`);

// Tail Swap (7 kyu)

/* 
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). 
The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

const tailSwap = arr => {
	const res = arr.map((item) => item.split(':'));

	return [[res[0][0], res[1][1]].join(':'), [res[1][0], res[0][1]].join(':')];
};

console.log(tailSwap(['abc:123', 'cde:456']), ['abc:456', 'cde:123']);
console.log(tailSwap(['a:12345', '777:xyz']), ['a:xyz', '777:12345']);

// Filter Coffee (7 kyu)

/* 
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. 
The prices in this string are to be sorted in ascending order.
*/

const search = (budget, prices) => prices.filter(item => item <= budget).sort((a, b) => a - b).join(',');

console.log(search(3, [6, 1, 2, 9, 2]), "1,2,2")
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14")
console.log(search(0, [6, 1, 2, 9, 2]), "")

// Four / Seven (7kyu)

/* 
Simple kata, simple rules: your function should accept the inputs 4 and 7. 
If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. 
Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, 
switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.
*/

const fourSeven = n => {
	const resObj = { 4: 7, 7: 4 };
	return resObj[n] || 0
};

console.log(fourSeven(4), 7, "n = 4 should return 7");
console.log(fourSeven(7), 4, "n = 7 should return 4");

// Hells Kitchen (7 kyu)

/* 
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', 
Any letter 'a' or 'A' should become '@', 
Any other vowel should become '*'.
*/

const gordon = a => a.toUpperCase().replace(/[A]/gi, '@').replace(/[eiuo]/gi, '*').split(' ').map(item => item + '!!!!').join(' ');

console.log(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
console.log(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
console.log(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');

// Hello World - Without Strings (7 kyu)

/* 
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. 
This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible!
*/

const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);

console.log(helloWorld());

// Fix My Phone Numbers! (7 kyu)

/* 
Fix My Phone Numbers
Oh thank goodness you're here! The last intern has completely ruined everything!

All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

The Format
Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone numbers contain lots of random characters, 
whitespace and some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a valid phone number. 
If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, 
else return "Not a phone number".
*/

const isItANum = str => {
	const phoneNumber = str.match(/[0-9]/g) || [];
	return phoneNumber[0] === '0' && phoneNumber.length === 11 ? phoneNumber.join('') : 'Not a phone number';
};

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
console.log(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
console.log(isItANum("0192387415456"), "Not a phone number");
console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165");
console.log(isItANum("stop calling me no I have never been in an accident"), "Not a phone number");

// Keep the Order (7 kyu)

/* 
Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), 
which takes a sorted array ary and a value val, 
and returns the lowest index where you could insert val to maintain the sorted-ness of the array. 
The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
							 ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
			 ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
					 ^(index 2)
*/

const keepOrder = (ary, val) => ary.filter(item => item < val).length;

console.log(keepOrder([1, 2, 3, 4, 7], 5), 4);
console.log(keepOrder([1, 2, 3, 4, 7], 0), 0);
console.log(keepOrder([1, 1, 2, 2, 2], 2), 2);
console.log(keepOrder([1, 2, 3, 4], 5), 4);
console.log(keepOrder([1, 2, 3, 4], -1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 0), 0);
console.log(keepOrder([1, 2, 3, 4], 1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 3), 2);
console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);

// Sort with Arrow Functions (7 kyu)

/* 
Sort and Order people by their age using Arrow Functions
Task
Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
Input
Input will be a valid array with People objects containing an Age and Name
Output
Output will be a valid sorted array with People objects sorted by Age in ascending order
*/

const OrderPeople = people => people.sort((a, b) => a.age - b.age);


console.log(OrderPeople([{ age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' }]),
	[{ age: 26, name: "don" },
	{ age: 46, name: "roger" },
	{ age: 74, name: "brendan" },
	{ age: 83, name: "joel" },
	{ age: 99, name: "vinny" }],
	'The array is still empty');

// Enumerable Magic #5- True for Just One? (7 kyu)

/* 
Create a function called one that accepts two params:

a sequence
a function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

Example
one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false
*/

const one1 = (arr, fun) => arr.filter(fun).length === 1;

console.log(one1([1, 2, 3, 4, 5], function (item) { return item < 2 }), true)
console.log(one1([1, 2, 3, 4, 5], function (item) { return item % 2 }), false, "more than 1 item are odd")
console.log(one1([1, 2, 3, 4, 5], function (item) { return item > 5 }), false, "none item is greater than 5")

// Unscrambled eggs (7 kyu)

/* 
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. 
You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.
*/

const unscrambleEggs = word => word.split('egg').join('');

console.log(unscrambleEggs("ceggodegge heggeregge"), "code here");
console.log(unscrambleEggs("FeggUNegg KeggATeggA"), "FUN KATA");

// Homogenous arrays (7 kyu)

/* 
Challenge:

Given a two-dimensional array, return a new array which carries over only those arrays from the original, 
which were not empty and whose items are all of the same type (i.e. homogenous). 
For simplicity, the arrays inside the array will only contain characters and integers.

Example:

Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

Addendum:

Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

The resultant arrays should be in the order they were originally in and should not have its values changed.

No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.
*/

const filterHomogenous = arrays => {
	const arr = arrays.filter(v => v.every((v, _i, arr) => typeof v === typeof arr[0]))
	return arr.filter(v => v.length !== 0);
};

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]), [[1, 5, 4], ['b']]);
console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]), [[123, 234, 432], ['', 'abc'], [''], ['', '1']]);

// Say "Hello World" JS Style (7 kyu)

/* 
Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"
*/

const say = string1 => string2 => `${string1} ${string2}`;

console.log(say('Hello')('World'), 'Hello World');

// 99 Problems, #1: last in list (7 kyu)

/* 
Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null
*/

const last9 = xs => xs.length === 0 ? null : xs[xs.length - 1];

console.log(last9([1, 2, 3]), 3, "last([1,2,3]) == 3");
console.log(last9([]), null, "last( [] ) == null");

// Words to sentence (7 kyu)

/* 
Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"
*/

const wordsToSentence = words => words.join(' ');

console.log(wordsToSentence(["hello", "world"]), "hello world");

// PatternCraft - Adapter (7 kyu)

/* 
The Adapter Design Pattern can be used, for example in the StarCraft game, 
to insert an external character in the game.

The pattern consists in having a wrapper class that will adapt the code from the external source.

Your Task
The adapter receives an instance of the object that it is going to adapt and handles 
it in a way that works with our application.

In this example we have the pre-loaded classes:

class Marine {
  attack(target) {
	 target.health -= 6;
  }
}

class Zealot {
  attack(target) {
	 target.health -= 8;
  }
}

class Zergling {
  attack(target) {
	 target.health -= 5;
  }
}

class Mario {
  jumpAttack() {
	 console.log('Mamamia!');
	 return 3;
  }
}
Complete the code so that we can create a MarioAdapter that can attack as other units do.

Note to calculate how much damage mario is going to do you have to call the jumpAttack method.
*/
class MarioAdapter {
	constructor(mario) {
		this.mario = mario;
	}

	attack(target) {
		target.health -= this.mario.jumpAttack();
	}
}

// Next Palindromic Number. (7 kyu)

/* 
There were and still are many problem in CW about palindrome numbers and palindrome strings. 
We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

In this kata you will be given a positive integer, 
val and you have to create the function next_pal()(nextPal Javascript) that will
 output the smallest palindrome number higher than val.

Let's see:

For Javascript
nextPal(11) == 22

nextPal(188) == 191

nextPal(191) == 202

nextPal(2541) == 2552
You will be receiving values higher than 10, all valid.
*/

const nextPal = val => {
	for (let i = val + 1; ; i++) {
		if (i.toString() === i.toString().split('').reverse().join('')) {
			return i;
		}
	}
};

console.log(nextPal(11), 22)
console.log(nextPal(188), 191)
console.log(nextPal(191), 202)
console.log(nextPal(2541), 2552)

// Dominant array elements (7 kyu)

/* 
An element in an array is dominant if it is greater than all elements to its right. 
You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
*/

const dominantArrayElement = arr => {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			result.push(arr[i]);
		} else {
			const restArr = arr.slice(i + 1);
			if (restArr.filter(item => item < arr[i]).length === restArr.length) {
				result.push(arr[i]);
			}
		}
	}
	return result;
};

console.log(dominantArrayElement([16, 17, 14, 3, 14, 5, 2]), [17, 14, 5, 2]);
console.log(dominantArrayElement([92, 52, 93, 31, 89, 87, 77, 105]), [105]);
console.log(dominantArrayElement([75, 47, 42, 56, 13, 55]), [75, 56, 55]);
console.log(dominantArrayElement([67, 54, 27, 85, 66, 88, 31, 24, 49]), [88, 49]);
console.log(dominantArrayElement([76, 17, 25, 36, 29]), [76, 36, 29]);
console.log(dominantArrayElement([104, 18, 37, 9, 36, 47, 28]), [104, 47, 28]);

// Sort My Animals (7 kyu)

/* 
Consider the following class:

var Animal = { 
	 name: "Cat", 
	 numberOfLegs: 4 
}
Write a method that accepts a list of objects of type Animal, and returns a new list. 
The new list should be a copy of the original list, sorted first by the animal's number of legs, 
and then by its name.

If an empty list is passed in, it should return an empty list back.
*/

const sortAnimal = animals => {
	const sortAnimals = [...animals]
	return animals ? sortAnimals.sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)) : null;
};

console.log(sortAnimal([
	{ name: "Cat", numberOfLegs: 4 },
	{ name: "Snake", numberOfLegs: 0 },
	{ name: "Dog", numberOfLegs: 4 },
	{ name: "Pig", numberOfLegs: 4 },
	{ name: "Human", numberOfLegs: 2 },
	{ name: "Bird", numberOfLegs: 2 }
]), [
	{ name: 'Snake', numberOfLegs: 0 },
	{ name: 'Bird', numberOfLegs: 2 },
	{ name: 'Human', numberOfLegs: 2 },
	{ name: 'Cat', numberOfLegs: 4 },
	{ name: 'Dog', numberOfLegs: 4 },
	{ name: 'Pig', numberOfLegs: 4 }
]);

// Organise duplicate numbers in list (6 kyu)

/* 
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. 
Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, 
where each subarray contains all the duplicates of a particular number. 
Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/

const group = arr => {
	const includeNumber = [];
	const res = [];
	arr.forEach((item, _i, array) => {
		if (!includeNumber.includes(item)) {
			res.push(Array(arr.filter(number => number === item).length).fill(item))
			includeNumber.push(item)
		}
	})
	return res;
};

console.log(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);
console.log(group([3, 2, 6, 2]), [[3], [2, 2], [6]]);

// The maximum sum value of ranges-- Simple version (6 kyu)

/* 
Given an array arr that contains some integers(positive, negative or 0), 
and a range list such as [[start1,end1],[start2,end2],...], 
start and end are the index of arr and start always less than end. 
Your task is to calculate the sum value of each range (start index and end index are both inclusive), 
and return the maximum sum value.

For example:

 Given arr = [1,-2,3,4,-5,-4,3,2,1], 
		 range = [[1,3],[0,4],[6,8]]
 should return 6
 
 calculation process:
 range[1,3] = arr[1]+arr[2]+arr[3] = 5
 range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
 range[6,8] = arr[6]+arr[7]+arr[8] = 6
 So the maximum sum value is 6
Note:
arr/$a always has at least 5 elements;
range/$range/ranges always has at least 1 element;
All inputs are valid;
This is a simple version, if you want some challenge, please try the challenge version.
Some Examples
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0
*/

const maxSum = (arr, range) => Math.max(...range.map(([first, second]) => arr
	.slice(first, second + 1)
	.reduce((acc, item) => acc + item, 0)
));

console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]), 6);
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]]), 5);
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 4], [2, 5]]), 0);

// Array combinations (6 kyu)

/* 
In this Kata, you will be given an array of arrays and your task will be to return the number of 
unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. 
They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, 
since the extra outcomes are just duplicates.

See test cases for more examples.
*/

const solve = arr => arr.map(item => [...new Set(item)].length).reduce((acc, item) => acc * item, 1);

console.log(solve([[1, 2], [4], [5, 6]]), 4);
console.log(solve([[1, 2], [4, 4], [5, 6, 6]]), 4);
console.log(solve([[1, 2], [3, 4], [5, 6]]), 8);
console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72);

// Arrays Similar (6 kyu)

/* 
Write a function that determines whether the passed in sequences are similar. 
Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
	 arr2 = [2, 1, 2, 4, 3],
	 arr3 = [1, 2, 3, 4],
	 arr4 = [1, 2, 3, "4"]
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/

const arraysSimilar = (arr1, arr2) => {
	const arr1Sort = arr1.sort((a, b) => a - b);
	const arr2Sort = arr2.sort((a, b) => a - b);
	return arr1Sort.length === arr2Sort.length && arr1Sort.every((item, i) => item === arr2Sort[i]);
}

const arr12 = [1, 2, 2, 3, 4],
	arr23 = [2, 1, 2, 4, 3],
	arr33 = [1, 2, 3, 4],
	arr4 = [1, 2, 3, "4"]

console.log(arraysSimilar(arr12, arr23), true);
console.log(arraysSimilar(arr23, arr33), false);
console.log(arraysSimilar(arr33, arr4), false);

// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details (6 kyu)

/* 
You will be given an array of objects representing data about developers who have signed up to 
attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided 
the relevant details (marked with a null value in JavaScript, with the default value in COBOL). 
The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.
*/

const askForMissingDetails = list => list
	.filter(item => Object.values(item).includes(null))
	.map(item => {
		const indexNull = Object.values(item).indexOf(null);
		const key = Object.keys(item)[indexNull];
		return { ...item, question: `Hi, could you please provide your ${key}.` }
	});

const list192 = [
	{ firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
	{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

const answer19 = [
	{
		firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
		question: 'Hi, could you please provide your firstName.'
	},
	{
		firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
		question: 'Hi, could you please provide your language.'
	}
];

console.log(askForMissingDetails(list192), answer19);


const list292 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
	{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

const answer29 = [];

console.log(askForMissingDetails(list292), answer29);

// Odd-heavy Array (6 kyu)

/* 
An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is 
odd is greater than every even-valued element.

eg.

Array [11,4,9,2,8] is odd-heavy,
because its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy,
because one of its even elements (10 from [4,2,10]) is greater than two of
its odd elements (9 and 3 from [11,9,3])

Array [] is not odd-heavy,
because it does not contain any odd numbers

Array [3] is odd-heavy,
because it does not contain any even numbers.
write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns 
true if the array is odd-heavy else return false.
*/

const isOddHeavy = n => {
	const odd = n.filter(item => item % 2 !== 0).sort((a, b) => a - b);
	const even = n.filter(item => item % 2 == 0);
	if (odd.length === 0) {
		return false
	}
	for (let i = 0; i < odd.length; i++) {
		for (let j = 0; j < even.length; j++) {
			if (odd[i] < even[j]) {
				return false;
			}
		}
	}

	return true;
};

console.log(isOddHeavy([0, 2, 19, 4, 4]), true);
console.log(isOddHeavy([1, -2, -1, 2]), false);

// Inside Out Strings (6 kyu)

/* 
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. 
If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

const insideOut = x => {
	return x.split(' ').map(item => {
		if (item.length === 1) {
			return item;
		}
		else if (item.length % 2 === 0) {
			const itemStart = item.slice(0, item.length / 2).split('').reverse().join('');
			const itemEnd = item.slice(item.length / 2, item.length).split('').reverse().join('');
			return itemStart + itemEnd;
		} else {
			const center = Math.floor(item.length / 2)
			const itemStart = item.slice(0, center).split('').reverse().join('');
			const itemEnd = item.slice(center + 1, item.length).split('').reverse().join('');
			// console.log(itemStart, item[center], itemEnd)
			return itemStart + item[center] + itemEnd;
		}
	}).join(' ')
};

console.log(insideOut('man i need a taxi up to ubud'), 'man i ende a atix up to budu');
console.log(insideOut('what time are we climbing up the volcano'), 'hwta item are we milcgnib up the lovcona');
console.log(insideOut('take me to semynak'), 'atek me to mesykan');

// How many pages in a book? (6 kyu)

/* 
Every book has n pages with page numbers 1 to n. 
The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: 
The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.
*/

const amountOfPages = summary => {
	if (summary <= 9) {
		return summary;
	}
	let count = 0;
	let res = 0;
	for (let i = 1; i < summary; i++) {
		count += i.toString().length
		if (count === summary) {
			res = i;
		}
	}
	return res
};

console.log(amountOfPages(5), 5)
console.log(amountOfPages(25), 17)
console.log(amountOfPages(1095), 401)
console.log(amountOfPages(185), 97)
console.log(amountOfPages(660), 256)

// Simple string reversal II (7 kyu)

/* 
In this Kata, you will be given a string and two indexes (a and b). 
Your task is to reverse the portion of that string between those two indices inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
Input will be lowercase and uppercase letters only.

The first index a will always be lower that than the string length; 
the second index b can be greater than the string length. More examples in the test cases. Good luck!
*/

const solve = (st, a, b) => st.slice(0, a) + st.slice(a, b + 1).split('').reverse().join('') + st.slice(b + 1);

console.log(solve("codewars", 1, 5), "cawedors");
console.log(solve("codingIsFun", 2, 100), "conuFsIgnid");
console.log(solve("FunctionalProgramming", 2, 15), "FuargorPlanoitcnmming");
console.log(solve("abcdefghijklmnopqrstuvwxyz", 0, 20), "utsrqponmlkjihgfedcbavwxyz");
console.log(solve("abcdefghijklmnopqrstuvwxyz", 5, 20), "abcdeutsrqponmlkjihgfvwxyz");

// Gradually Adding Parameters (7 kyu)

/* 
This kata is all about adding numbers.

You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??

Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

  add(3,4,5); 
  returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26

Remember the function will return 0 if no arguments are passed.
*/

const add = (...arg) => arg.reduce((acc, item, i) => acc + item * (i + 1), 0);

console.log(add(100, 200, 300), 1400);

// MinMaxMin: Bounded Nums (7 kyu)

/* 
Given an unsorted array of integers, find the smallest number in the array, 
the largest number in the array, and the smallest number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, 
the largest number is 24, and the smallest number between the array bounds is -22. 
You may assume the input is well-formed.

You solution should return an array [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with the lowest value.

The largest integer should be the integer from the array with the highest value.

The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.
*/

const minMinMax = array => {
	let minNumber = Math.min(...array);
	while (array.includes(minNumber)) {
		minNumber++;
	}
	return [Math.min(...array), minNumber, Math.max(...array)]
};

console.log(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24], 'Test Failed');
console.log(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8], 'Test Failed');
console.log(minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9], 'Test Failed');

// Thinkful - List and Loop Drills: Inverse Slicer (7 kyu)

/* 
You're familiar with list slicing in Python and know, for example, that:

>>> ages = [12, 14, 63, 72, 55, 24]
>>> ages[2:4]
[63, 72]
>>> ages[2:]
[63, 72, 55, 24]
>>> ages[:3]
[12, 14, 63]
write a function inverse_slice() that takes three arguments: a list items, an integer a and an integer b. 
The function should return a new list with the slice specified by items[a:b] excluded. For example:

>>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
[12, 14, 55, 24]
The input will always be a valid list, a and b will always be different integers equal to or greater than zero, 
but they may be zero or be larger than the length of the list.
*/

const inverseSlice = (items, a, b) => [...items.slice(0, a), ...items.slice(b)];

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
console.log(inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13), ['Intuition', 'is', 'a', 'poor', 'guide']);

// Dead Ants (6 kyu)

/* 
An orderly trail of ants is marching across the park picnic area.

It looks something like this:

..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. 
The ants surge forward! Oh No, it's an ant stampede!!

Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

The resulting carnage looks like this:

...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
Can you find how many ants have died?

Notes
When in doubt, assume that the scattered bits are from the same ant. e.g. 2 heads and 1 body = 2 dead ants, not 3
*/

const deadAntCount = ants => {
	if (!ants) {
		return 0;
	}
	const str = ants.replace(/ant/g, '');
	const head = str.replace(/[^a]/g, '').length;
	const body = str.replace(/[^n]/g, '').length;
	const tail = str.replace(/[^t]/g, '').length;

	return Math.max(head, body, tail);
};

console.log(deadAntCount("ant ant ant ant"), 0, "Nope")
console.log(deadAntCount(null), 0, "Nope")
console.log(deadAntCount("ant anantt aantnt"), 2, "Nope")
console.log(deadAntCount("ant ant .... a nt"), 1, "Nope");

// Image host filename generator (6 kyu)

/* 
You are developing an image hosting website.

You have to create a function for generating random and unique image filenames.

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique.
*/

const generateName = () => {
	const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const name = Array(6).fill(null)
		.map(e => alpha[Math.floor(Math.random() * 52)])
		.join('');

	return photoManager.nameExists(name) ? generateName() : name;
};

// Only Duplicates (6 kyu)

/* 
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

const onlyDuplicates = str => str.split('')
	.filter(letter => str.replace(new RegExp(letter, 'g'), '').length !== str.length - 1)
	.join('');

console.log(onlyDuplicates('abccdefee'), 'cceee');
console.log(onlyDuplicates('hello'), 'll');
console.log(onlyDuplicates('colloquial'), 'ollol');
console.log(onlyDuplicates('foundersandcoders'), 'ondersndoders');

// Multi-tap Keypad Text Entry on an Old Mobile Phone (6 kyu)

/* 
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|  *  | |space| |  #  |
|     | |  0  | |     |
------- ------- -------
Prior to the development of T9 systems (predictive text entry), 
the method to type words was called "multi-tap" and involved pressing a button repeatedly 
to cycle through all its possible values, in order. For example:

Pressing the button 7 repeatedly will cycle through the letters P -> Q -> R -> S -> 7 -> P -> ....
Pressing the button 0 is cycling through SPACE -> 0 -> SPACE -> 0 -> ....
Buttons with a single symbol on it just type this symbol.
A character is "locked in" and inserted into the message once the user presses a different key or 
pauses for a short period of time (thus, no extra button presses are required beyond what is 
	needed for each letter individually). For example:

To type a letter "R" you would press the 7 key three times 
(as the screen display for the current character cycles through P->Q->R->S->7).
To type in a digit 3, you would press the button 3 four times.
To type in the message "ABC", you would press the button 2 once, wait a second, 
then press the button 2 twice to enter the letter B, then pause for another second, 
and press the button 2 three times, to enter the letter C. You would have to press the button 2 six times in total.
In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. 
No wonder they abbreviated...

For this assignment, write code that can calculate the amount of button presses required for any phrase, 
with the following requirements:

Punctuation can be ignored for this exercise.
Likewise, the phone doesn't distinguish between upper and lowercase characters 
(but you should allow your module to accept input in either form, for convenience).
Tested phrases contain letters (A-Z and a-z), digits (0-9), and special characters # and *.
*/

const presses = phrase => {
	const alphabet = {
		'A': 1,
		'B': 2,
		'C': 3,
		'D': 1,
		'E': 2,
		'F': 3,
		'G': 1,
		'H': 2,
		'I': 3,
		'J': 1,
		'K': 2,
		'L': 3,
		'M': 1,
		'N': 2,
		'O': 3,
		'P': 1,
		'Q': 2,
		'R': 3,
		'S': 4,
		'T': 1,
		'U': 2,
		'V': 3,
		'W': 1,
		'X': 2,
		'Y': 3,
		'Z': 4,
		'1': 1,
		'2': 4,
		'3': 4,
		'4': 4,
		'5': 4,
		'6': 4,
		'7': 5,
		'8': 4,
		'9': 5,
		'0': 2,
		'*': 1,
		'#': 1,
		' ': 1,
	};

	return phrase.toUpperCase().split('').reduce((acc, item) => acc + alphabet[item], 0);
};

console.log(presses('LOL'), 9);
console.log(presses('HOW R U'), 13);
console.log(presses('0123456789'), 37);
console.log(presses('# *'), 3);
console.log(presses('WHERE DO U WANT 2 MEET L8R'), 47);

// Matrix Addition (6 kyu)

/* 
Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. 
Both matrices being passed into the function will be of size N x N (square), containing only integers.

How to sum two matrices:

Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. 
This will be cell [n][m] of the solution matrix. (Except for C where solution matrix will be a 1d pseudo-multidimensional array).

Visualization:

|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
*/

const matrixAddition = (a, b) => a.map((currentList, i) => currentList.map((item, j) => item + b[i][j]));

console.log(matrixAddition(
	[[1, 2],
	[1, 2]],
	//    +
	[[2, 3],
	[2, 3]]),
	//    =
	[[3, 5],
	[3, 5]]);

console.log(matrixAddition(
	[[1]],
	//   +
	[[2]]),
	//   =
	[[3]]);

console.log(matrixAddition(
	[[1, 2, 3],
	[3, 2, 1],
	[1, 1, 1]],
	//      +
	[[2, 2, 1],
	[3, 2, 3],
	[1, 1, 3]]),
	//      =
	[[3, 4, 4],
	[6, 4, 4],
	[2, 2, 4]]);

// Selective Array Reversing (6 kyu)

/* 
Given an array, return the reversed version of the array (a different kind of reverse though), 
you reverse portions of the array, you'll be given a length argument which represents 
the length of each portion you are to reverse.

E.g

selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]
if after reversing some portions of the array and the length of the remaining portion 
in the array is not up to the length argument, just reverse them.

selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]
selReverse(array, length)

array - array to reverse
length - length of each portion to reverse
Note : if the length argument exceeds the array length, reverse all of them, 
if the length argument is zero do not reverse at all.
*/

const selReverse = (array, length) => {
	if (length) {
		const result = [];
		for (let i = 0; i < array.length; i += length) {
			result.push(array.slice(i, i + length).reverse());
		}
		return result.flat()
	}

	return array;
};

console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3), [6, 4, 2, 12, 10, 8, 16, 14]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 2), [2, 1, 4, 3, 6, 5]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 0), [1, 2, 3, 4, 5, 6]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 1), [1, 2, 3, 4, 5, 6]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 10), [6, 5, 4, 3, 2, 1]);

// Pairs of Bears (6 kyu)

/* 
In order to prove it's success and gain funding, the wilderness zoo needs to prove 
to environmentalists that it has x number of mating pairs of bears.

Task:
You must check within a string (s) to find all of the mating pairs, 
returning a list/array of the string containing valid mating pairs and 
a boolean indicating whether the total number of bears is greater than or equal to x.

Rules for a 'valid' mating pair:
Bears are either 'B' (male) or '8' (female),
Bears must be together in male/female pairs 'B8' or '8B',
Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
Return an array containing a string of the valid mating pairs available (empty string if there are no pairs), 
and a boolean indicating whether the total number of bears is greater than or equal to x. , e.g:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; in this example, 
the number of bears(=4) is lesser than the given value of x(=6)
*/

const bears = (x, s) => {
	const pairs = s.match(/(B8)|(8B)/g) || [];
	return [pairs.join(""), pairs.length >= x];
}

console.log(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8", false]);
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B", true]);
console.log(bears(8, '8'), ["", false]);

// Turn String Input into Hash (6 kyu)

/* 
Please write a function that will take a string as input and return a hash. 
The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/

const strToHash = str => {
	const result = {};
	if (str.length) {

		str.split(', ').forEach(item => {
			const [key, value] = item.split('=');
			result[key] = Number(value);
		})
	}

	return result;
};

console.log(strToHash("a=1, b=2, c=3, d=4"), { 'a': 1, 'b': 2, 'c': 3, 'd': 4 })
console.log(strToHash(""), {})

// Remember (6 kyu)

/* 
Write a function that takes a string and returns an array of 
the repeated characters (letters, numbers, whitespace) in the string.

If a charater is repeated more than once, only show it once in the result array.

Characters should be shown by the order of their first repetition. 
Note that this may be different from the order of first appearance of the character.

Characters are case sensitive.
*/

const remember = str => str.split('').reduce((acc, item, i, arr) => {
	if (i !== arr.indexOf(item) && !acc.includes(item)) {
		acc.push(item);
	}
	return acc;
}, []);

console.log(remember('apple'), ["p"]);
console.log(remember("apPle"), []);
console.log(remember("pippi"), ["p", "i"]);
console.log(remember('Pippi'), ["p", "i"]);
console.log(remember("limbojackassin the garden"), ["a", "s", "i", " ", "e", "n"]);
console.log(remember("11pinguin"), ["1", "i", "n"]);

// Find within array (6 kyu)

/* 
We'll create a function that takes in two parameters:

a sequence (length and types of items are irrelevant)
a function (value, index) that will be called on members of the sequence and their index. 
The function will return either true or false.
Your function will iterate through the members of the sequence in order until the provided function returns true; 
at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3
*/

const findInArray = (array, iterator) => {
	for (let i = 0; i < array.length; i++) {
		const elem = array[i];
		if (iterator(elem, i)) {
			return i;
		}
	}

	return -1;
};

const trueIfEven = (v, i) => v % 2 === 0;
const neverTrue = (v, i) => false;
const trueIfValueEqualsIndex = (v, i) => v === i;
const trueIfLengthEqualsIndex = (v, i) => v.length === i;

console.log(findInArray([], trueIfEven), -1);
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven), 3);
console.log(findInArray([2, 4, 6, 8], trueIfEven), 0);
console.log(findInArray([2, 4, 6, 8], neverTrue), -1);
console.log(findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex), 4);
console.log(findInArray(["one", "two", "three", "four", "five", "six"], trueIfLengthEqualsIndex), 4);
console.log(findInArray(["bc", "af", "d", "e"], trueIfLengthEqualsIndex), -1);

// Function iteration (6 kyu)

/* 
The purpose of this kata is to write a higher-order function which is capable of creating a function 
that iterates on a specified function a given number of times. 
This new functions takes in an argument as a seed to start the computation from.

For instance, consider the function getDouble. When run twice on value 3, yields 12 as shown below.

getDouble(3) => 6
getDouble(6) => 12
Let us name the new function createIterator and we should be able to obtain the same result using 
createIterator as shown below:

var doubleIterator = createIterator(getDouble, 2); // This means, it runs *getDouble* twice
doubleIterator(3) => 12
For the sake of simplicity, all function inputs to createIterator would be functions returning 
a small number and number of iterations would always be integers.
*/

const createIterator = function (func, n) {
	return function () {
		let start = func(...arguments)
		for (let i = 0; i < n - 1; i++) {
			start = func(start)
		}
		return start
	}
};

// Custom Array Filters (6 kyu)

/* 
Dave has a lot of data he is required to apply filters to, which are simple enough, 
but he wants a shorter way of doing so.

He wants the following functions to work as expected:

even    // [1,2,3,4,5].even() should return [2,4]
odd     // [1,2,3,4,5].odd() should return [1,3,5]
under   // [1,2,3,4,5].under(4) should return [1,2,3]
over    // [1,2,3,4,5].over(4) should return [5]
inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
They should also work when used together, for example:

[1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
And finally the filters should only accept integer values from an array, for example:

["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
Note: List with non-numbers will be tested as well.
*/

Array.prototype.even = function () {
	return this.filter(item => item % 2 === 0 && typeof item === 'number' && item !== 0 && Number.isInteger(item));
};

Array.prototype.odd = function () {
	return this.filter(item => item % 2 !== 0 && typeof item === 'number' && Number.isInteger(item));
}

Array.prototype.under = function (x) {
	return this.filter(item => item < x && typeof item === 'number' && Number.isInteger(item));
}

Array.prototype.over = function (x) {
	return this.filter(item => item < x && typeof item === 'number' && Number.isInteger(item))
}

Array.prototype.inRange = function (min, max) {
	return this.filter(item => item >= min && item <= max && typeof item === 'number' && Number.isInteger(item));
}

console.log([1, 2, 3, 4, 5].even(), [2, 4])
console.log([1, 2, 3, 4, 5].odd(), [1, 3, 5])
console.log([1, 2, 3, 4, 5].under(4), [1, 2, 3])
console.log([1, 2, 3, 4, 5].over(4), [5])
console.log([1, 2, 3, 4, 5].inRange(1, 3), [1, 2, 3])

console.log([1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30), [18, 20, 22, 30])
console.log(["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even(), [300, 122])

// FIXME: Hello (6 kyu)

/* 
The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. 
Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.

Notes
There are 3 attributes

name
age
sex ('M' or 'F')
When the same attribute is assigned multiple times the hello method shows it only once. 
If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

Examples
Hello.
Hello. My name is Bob. I am 27. I am male.
Hello. I am 27. I am male. My name is Bob.
Hello. My name is Alice. I am female.
Hello. My name is Batman.
Task
Fix the code so we can all go home early.
*/

class Dinglemouse {

	constructor(age, sex, name) {
		this.person = {};
	}

	setAge(age) {
		this.person.age = ` I am ${age}.`;
		return this
	}

	setSex(sex) {
		this.person.sex = ` I am ${sex == 'M' ? 'male' : 'female'}.`;
		return this
	}

	setName(name) {
		this.person.name = ` My name is ${name}.`;
		return this
	}

	hello() {
		return "Hello." + Object.values(this.person).join('')
	}

};

console.log(new Dinglemouse().setName("Bob").setAge(27).setSex('M'),
	new Dinglemouse().setName("Bob").setAge(27).setSex('M').hello())
console.log(new Dinglemouse().setAge(27).setSex('M').setName("Bob"),
	new Dinglemouse().setAge(27).setSex('M').setName("Bob").hello())
console.log(new Dinglemouse().setName("Alice").setSex('F'),
	new Dinglemouse().setName("Alice").setSex('F').hello())
console.log(new Dinglemouse().setName("Batman"), new Dinglemouse().setName("Batman").hello())

// Three added Characters (6 kyu)

/* 
Given two strings, the first being a random string and the second being the same as the first, 
but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, 
and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.
*/

const addedChar = (s1, s2) => {
	const s1Sort = s1.split('').sort().join('');
	const s2Sort = s2.split('').sort().join('');

	for (let i = 0; i < s1Sort.length; i++) {
		if (s1Sort[i] !== s2Sort[i]) {
			return s2Sort[i] || s2Sort[i + 1];
		} else if (i === s1Sort.length - 1) {
			return s2Sort[i + 1];
		}
	}
};

console.log(addedChar("hello", "checlclo"), 'c', "Wrong!");
console.log(addedChar("abcde", "2db2a2ec"), '2', "Wrong!");
console.log(addedChar("aabbcc", "aacccbbcc"), 'c', "Wrong!");

// Reverse Vowels In A String (6 kyu)

/* 
In this kata, your goal is to write a function which will reverse the vowels in a string. 
Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.
*/

const reverseVowels = str => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;
	let test = '';
	const result = str.split('');
	result.forEach((item, _i, arr) => {
		if (vowels.includes(item.toLowerCase())) {
			count++;
			test += item;
		}
	});
	result.forEach((item, i, arr) => {
		if (vowels.includes(item.toLowerCase())) {
			arr[i] = test[--count];
		}
	});
	return result.join('');
};

console.log(reverseVowels("Hello!"), "Holle!");
console.log(reverseVowels("Tomatoes"), "Temotaos");
console.log(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng");

// Number of anagrams in an array of words (6 kyu)

/* 
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. 
An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, 
and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

const anagramCounter = wordsArray => {
	let count = 0;
	for (let i = 0; i < wordsArray.length - 1; i++) {
		for (let j = i + 1; j < wordsArray.length; j++) {
			const isAnagram = wordsArray[i].split('').sort().join('') === wordsArray[j].split('').sort().join('');
			if (isAnagram) {
				count++
			}
		}
	}
	return count;
};

console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba']), 2, "This should be 2");
console.log(anagramCounter(['dell', 'ledl', 'lled', 'cba']), 3, "This should be 3");
console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']), 11, "This should be 11");

// Find the unique number (6 kyu)

/* 
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. 
The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. 
The array contains at least one number and may contain millions of numbers. 
So make sure your solution is optimized for speed.
*/

const findUnique = numbers => {
	let res = {};
	numbers.forEach(number => {
		if (res.hasOwnProperty(number)) {
			res[number]++;
		} else {
			res[number] = 1;
		}
	});
	const indexValue = Object.values(res).indexOf(1);
	const key = Object.keys(res)[indexValue];
	return Number(key);
};

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
console.log(findUnique([1234567]), 1234567);
console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]), 1);
console.log(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]), 4);
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]), 9);

// Breaking search bad (6 kyu)

/* 
The function must return the sequence of titles that match the string passed as an argument.

TITLES is a preloaded sequence of strings.

TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
search('ock') --> ['Rocky 1', 'Rocky 2']
But the function return some weird result and skip some of the matching results.

Does the function have special movie taste?
*/
const TITLES = [
	'The Big Bang Theory',
	'How I Met Your Mother',
	'Dexter',
	'Breaking Bad',
	'Doctor Who',
	'The Hobbit',
	'Pacific Rim',
	'Pulp Fiction',
	'The Avengers',
	'Shining'
];

const search1 = (searchTerm) => TITLES.filter((title) => new RegExp(searchTerm, 'i').test(title));

console.log(search1('ho'), ['How I Met Your Mother', 'Doctor Who', 'The Hobbit'], 'on search term "ho"');

// Rotate Array (JS) (6 kyu)

/* 
Note: This kata is a translation of this (Java) one: http://www.codewars.com/kata/rotate-array. 
I have not translated this first one as usual because I did not solved it, 
and I fear not being able to solve it (Java is not my cup of... tea). 
@cjmcgraw, if you want to use my translation on your kata feel free to use it.

Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. 
If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.
*/

const rotate = (array, n) => {
	const rot = n % array.length;
	return n === 0 || rot === 0 ?
		array :
		[...array.slice(-rot), ...array.slice(0, -rot)];
};


const data = [1, 2, 3, 4, 5];

console.log(rotate(data, 1), [5, 1, 2, 3, 4])
console.log(rotate(data, 2), [4, 5, 1, 2, 3])
console.log(rotate(data, 3), [3, 4, 5, 1, 2])
console.log(rotate(data, 4), [2, 3, 4, 5, 1])
console.log(rotate(data, 5), [1, 2, 3, 4, 5])

console.log(rotate(data, 0), [1, 2, 3, 4, 5])

console.log(rotate(data, -1), [2, 3, 4, 5, 1])
console.log(rotate(data, -2), [3, 4, 5, 1, 2])
console.log(rotate(data, -3), [4, 5, 1, 2, 3])
console.log(rotate(data, -4), [5, 1, 2, 3, 4])
console.log(rotate(data, -5), [1, 2, 3, 4, 5])

console.log(rotate(['a', 'b', 'c'], 1), ['c', 'a', 'b'])
console.log(rotate([1.0, 2.0, 3.0], 1), [3.0, 1.0, 2.0])
console.log(rotate([true, true, false], 1), [false, true, true])

console.log(rotate(data, 7), [4, 5, 1, 2, 3])
console.log(rotate(data, 11), [5, 1, 2, 3, 4])
console.log(rotate(data, 12478), [3, 4, 5, 1, 2])

// Simple card game (6 kyu)

/* 
Steve and Josh are bored and want to play something. 
They don't want to think too much, so they come up with a really simple game. 
Write a function called winner and figure out who is going to win.

They are dealt the same number of cards. They both flip the card on the top of their deck. 
Whoever has a card with higher value wins the round and gets one point (if the cards are of the same value, 
	neither of them gets a point). 
	After this, the two cards are discarded and they flip another card from the top of their deck. 
	They do this until they have no cards left.

deckSteve and deckJosh are arrays representing their decks. 
They are filled with cards, represented by a single character. 
The card rank is as follows (from lowest to highest):

'2','3','4','5','6','7','8','9','T','J','Q','K','A'
Every card may appear in the deck more than once. 
Figure out who is going to win and return who wins and with what score:

"Steve wins x to y" if Steve wins; where x is Steve's score, y is Josh's score;
"Josh wins x to y" if Josh wins; where x is Josh's score, y is Steve's score;
"Tie" if the score is tied at the end of the game.
Example
Steve is dealt: ['A','7','8']
Josh is dealt: ['K','5','9']
In the first round, ace beats king and Steve gets one point.
In the second round, 7 beats 5 and Steve gets his second point.
In the third round, 9 beats 8 and Josh gets one point.
So you should return: "Steve wins 2 to 1"
*/

const winner = (deckSteve, deckJosh) => {
	const decks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
	let steveCount = 0;
	let joshCount = 0;
	deckSteve.forEach((deck, i) => {
		decks.indexOf(deck) > decks.indexOf(deckJosh[i]) ?
			steveCount++ :
			decks.indexOf(deck) < decks.indexOf(deckJosh[i]) ?
				joshCount++ :
				null;
	});

	return steveCount > joshCount ? `Steve wins ${steveCount} to ${joshCount}` :
		steveCount < joshCount ? `Josh wins ${joshCount} to ${steveCount}` : `Tie`
};

console.log(winner(['A', '7', '8'], ['K', '5', '9']), 'Steve wins 2 to 1');
console.log(winner(['T', '9'], ['T', '8']), 'Steve wins 1 to 0');
console.log(winner(['T'], ['T']), 'Tie');

// "this" is an other problem (6 kyu)

/* 
After you've solved @priyankaherur's problem ( http://www.codewars.com/kata/this-is-a-problem/javascript ) 
you may try to solve this other one.

The problem:
Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, 
lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, 
we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang" 
//-- Oh no ! we want fullName == "John Doe" now !
Your mission:
So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
Note : "input format" to .fullName will be firstName + space+ lastName. 
If given fullName isn't valid then no property is changed.

Examples:
var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
Can you change our function to create such a NamedOne object ?
*/

class NamedOne {
	constructor(first, last) {
		this.firstName = first;
		this.lastName = last;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	set fullName(v) {
		if (/ /.test(v)) [this.firstName, this.lastName] = v.split(' ');
	}
}

// Count Repeats (6 kyu)

/* 
Write a function that returns the count of characters that have to be removed in order 
to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/

const countRepeats = str => str.length - str.replace(/(.)\1+/g, '$1').length;

console.log(countRepeats('AABCCD'), 2);
console.log(countRepeats('AABCCDA'), 2)
console.log(countRepeats('AaBBCCC'), 3);

// The maximum and minimum difference -- Simple version (6 kyu)

/* 
When no more interesting kata can be resolved, I just choose to create the new kata, 
to solve their own, to enjoy the process --myjinxin2015 said

Description:
Given two array of integers(arr1,arr2). 
Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), 
their difference is as big as possible(absolute value); 
Again, you should to find a pair of numbers, their difference is as small as possible. 
Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

For example:

Given arr1 = [3,10,5], arr2 = [20,7,15,8]
should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
Note:
arr1 and arr2 contains only integers(positive, negative or 0);
arr1 and arr2 may have different lengths, they always has at least one element;
All inputs are valid.
This is a simple version, if you want some challenges, try the challenge version.
Some Examples
maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
maxAndMin([3],[20]) === [17,17]
maxAndMin([3,10,5],[3,10,5]) === [7,0]
maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]
*/

const maxAndMin = (array1, array2) => [
	Math.max(...array1.map(item1 => Math.max(...array2.map(item2 => Math.abs(item1 - item2))))),
	Math.min(...array1.map(item1 => Math.min(...array2.map(item2 => Math.abs(item1 - item2)))))
];

console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2]);
console.log(maxAndMin([3], [20]), [17, 17]);
console.log(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0]);
console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1]);

// The Lamp: Revisited (6 kyu)

/* 
Define a class called Lamp. 
It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. 
Define your class constructor with a parameter for color and assign on as false on initialize.

Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

Define another instance method called state that will return 
"The lamp is on." if it's on and "The lamp is off." otherwise.
*/

class Lamp {
	constructor(color) {
		this.color = color;
		this.on = false;
	}

	toggleSwitch() {
		this.on = !this.on
	}

	state() {
		return this.on ? "The lamp is on." : "The lamp is off."
	}
}

const myLamp = new Lamp("Blue")
console.log(myLamp.color, "Blue")
console.log(myLamp.on, false)
console.log(myLamp.state(), "The lamp is off.")
// now switch it on
myLamp.toggleSwitch()
console.log(myLamp.state(), "The lamp is on.")

// Simple Fun #124: Lamps (7 kyu)

/* 
Task
N lamps are placed in a line, some are switched on and some are off. 
What is the smallest number of lamps that need to be switched so that on and off lamps will alternate with each other?

You are given an array a of zeros and ones - 1 mean switched-on lamp and 0 means switched-off.

Your task is to find the smallest number of lamps that need to be switched.

Example
For a = [1, 0, 0, 1, 1, 1, 0], the result should be 3. a --> 1 0 0 1 1 1 0 swith --> 0 1 0 became--> 0 1 0 1 0 1 0

Input/Output
[input] integer array a

array of zeros and ones - initial lamp setup, 1 mean switched-on lamp and 0 means switched-off.

2 < a.length <= 1000

[output] an integer

minimum number of switches.
*/

const lamps = a => {
	let switch1 = 0;
	let switch2 = 0;
	for (let i = 0; i < a.length; i++) {
		if (i % 2 === 0) {
			if (a[i] !== 1) {
				switch1++;
			} else {
				switch2++;
			};
		} else {
			if (a[i] !== 0) {
				switch1++;
			} else {
				switch2++;
			};
		}
	}

	return Math.min(switch1, switch2);
};

console.log(lamps([1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1]), 5)
console.log(lamps([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 6)
console.log(lamps([1, 0, 1]), 0)
console.log(lamps([1, 0, 1, 0]), 0)

// Sequence classifier (6 kyu)

/* 
A series or sequence of numbers is usually the product of a function and can either be infinite or finite.

In this kata we will only consider finite series and you are required to return a code according to the type of sequence:

Code	Type	Example
0	unordered	[3,5,8,1,14,3]
1	strictly increasing	[3,5,8,9,14,23]
2	not decreasing	[3,5,8,8,14,14]
3	strictly decreasing	[14,9,8,5,3,1]
4	not increasing	[14,14,8,8,5,3]
5	constant	[8,8,8,8,8,8]
You can expect all the inputs to be non-empty and completely numerical arrays/lists - no need to validate the data; 
do not go for sloppy code, as rather large inputs might be tested.

Try to achieve a good solution that runs in linear time; also, do it functionally, 
meaning you need to build a pure function or, in even poorer words, do NOT modify the initial input!
*/

// const sequenceClassifier = arr => [0, 1, 5, 2, 3, 0, 4, 0][arr.slice(0, -1)
// 	.reduce((f, a, idx) => f | (a < arr[idx + 1] ? 1 : a === arr[idx + 1] ? 2 : 4), 0)];

const sequenceClassifier = arr => {
	if (arr.every((num) => num === arr[0])) return 5;
	if (arr.slice(1).every((num, i) => num > arr[i])) return 1;
	if (arr.slice(1).every((num, i) => num >= arr[i])) return 2;
	if (arr.slice(1).every((num, i) => num < arr[i])) return 3;
	if (arr.slice(1).every((num, i) => num <= arr[i])) return 4;
	return 0;
};

console.log(sequenceClassifier([3, 5, 8, 1, 14, 3]), 0);
console.log(sequenceClassifier([3, 5, 8, 9, 14, 23]), 1);
console.log(sequenceClassifier([3, 5, 8, 8, 14, 14]), 2);
console.log(sequenceClassifier([14, 9, 8, 5, 3, 1]), 3);
console.log(sequenceClassifier([14, 14, 8, 8, 5, 3]), 4);
console.log(sequenceClassifier([8, 8, 8, 8, 8, 8]), 5);
console.log(sequenceClassifier([8, 9]), 1);
console.log(sequenceClassifier([8, 8, 8, 8, 8, 9]), 2);
console.log(sequenceClassifier([9, 8]), 3);
console.log(sequenceClassifier([9, 9, 9, 8, 8, 8]), 4);

// Create Four Letter Birding Codes from Bird Names (6 kyu)

/* 
In the world of birding there are four-letter codes for the common names of birds. 
These codes are created by some simple rules:

If the bird's name has only one word, the code takes the first four letters of that word.
If the name is made up of two words, the code takes the first two letters of each word.
If the name is made up of three words, the code is created by taking the first letter from 
the first two words and the first two letters from the third word.
If the name is four words long, the code uses the first letter from all the words.
(There are other ways that codes are created, but this Kata will only use the four rules listed above)

Complete the function that takes an array of strings of common bird names from North America, 
and create the codes for those names based on the rules above. 
The function should return an array of the codes in the same order in which the input names were presented.

Additional considertations:

The four-letter codes in the returned array should be in UPPER CASE.
If a common name has a hyphen/dash, it should be considered a space.
Example
If the input array is: ["Black-Capped Chickadee", "Common Tern"]

The return array would be: ["BCCH", "COTE"]
*/

const birdCode = arr => arr.map(name => {
	const splitName = name.replace(/-/g, ' ').toUpperCase().split(' ');
	return splitName.length === 1 ? splitName[0].slice(0, 4) :
		splitName.length === 2 ? splitName[0].slice(0, 2) + splitName[1].slice(0, 2) :
			splitName.length === 3 ? splitName[0][0] + splitName[1][0] + splitName[2].slice(0, 2) :
				splitName[0][0] + splitName[1][0] + splitName[2][0] + splitName[3][0];
});

console.log(birdCode(["Common Tern", "Black-Capped Chickadee", 'Newbird']), ["COTE", "BCCH", "NEWB"])

// Consecutive Count (6 kyu)

/* 
I want to know the size of the longest consecutive elements of X in Y. 
You will receive two arguments: items and key. 
Return the length of the longest segment of consecutive keys in the given items.

Notes:

The items and the key will be either an integer or a string (consisting of letters only)
If the key does not appear in the items, return 0
Examples
90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0
*/

const getConsectiveItems = (items, key) => {
	const reg = new RegExp(`${key.toString()}+`, 'g');
	const res = items.toString().match(reg) || [];
	return res.length ? Math.max(...res.map(item => item.length)) : 0;
};

console.log(getConsectiveItems(90000, 0), 4);
console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i'), 11);

// Free pizza (6kyu)

/* 
In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: 
if you already made at least 5 orders of at least 20 dollars, 
you get a free 12 inch pizza with 3 toppings of your choice.

However, the rewards system may change in the future. Your manager wants you to implement a function that, 
given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

Customers in the dictionary are represented as:

{ 'customerName' : [list_of_order_values_as_integers] }
See example test case for more details.
*/

const pizzaRewards = (customers, minOrders, minPrice) => {
	const res = [];
	for (const i in customers) {
		customers[i].filter(v => v >= minPrice).length >= minOrders ? res.push(i) : null;
	}

	return res;
};

const minOrders = 5
const minPrice = 20
const customers = {
	'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
	'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
}
console.log(pizzaRewards(customers, minOrders, minPrice), ['Jane Doe'])

// Find the Nexus of the Codewars Universe (6 kyu)

/* 
Not to brag, but I recently became the nexus of the Codewars universe! 
My honor and my rank were the same number. I cried a little.

Complete the method that takes a hash/object/directory/association list of users, 
and find the nexus: the user whose rank is the closest is equal to his honor. 
Return the rank of this user. For each user, the key is the rank and the value is the honor.

If nobody has an exact rank/honor match, return the rank of the user who comes closest. 
If there are several users who come closest, return the one with the lowest rank (numeric value). 
The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.

Example
			rank    honor
users = {  1  =>  93,
			 10  =>  55,
			 15  =>  30,
			 20  =>  19,    <--- nexus
			 23  =>  11,
			 30  =>   2 }
*/

const nexus = users => {
	let rank = 0;
	let diff = Infinity;
	for (const user in users) {
		const intermedDiff = Math.abs(user - users[user]);
		if (intermedDiff < diff) {
			diff = intermedDiff;
			rank = Number(user);
		}
	}

	return rank;
};

console.log(nexus({ "1": 3, "3": 3, "5": 3 }), 3);
console.log(nexus({ '1': 93, '10': 55, '15': 30, '20': 19, '23': 11, '30': 2 }), 20);

// Doors in the school (6 kyu)

/* 
In the morning all the doors in the school are closed. 
The school is quite big: there are N doors. Then pupils start coming. 
It might be hard to believe, but all of them want to study! Also, 
there are exactly N children studying in this school, and they come one by one.

When these strange children pass by some doors they change their status 
(i.e. Open -> Closed, Closed -> Open). Each student has their number, 
and each i-th student alters the status of every i-th door. For example: 
when the first child comes to the schools, he changes every first door (he opens all of them). 
The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). 
Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door 
(there's only one such door, though).

You need to count how many doors are left opened after all the students have come.
*/

const doors = n => {
	const doors = Array.from(Array(n), () => false);
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j = j + i + 1) {
			doors[j] = !doors[j];
		}
	}
	return doors.filter(item => item).length
};

console.log(doors(5), 2);
console.log(doors(10), 3);
console.log(doors(100), 10);