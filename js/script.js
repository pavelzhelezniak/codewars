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

function reverseLetter(str) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	return str.split('').reverse().filter(item => alphabet.indexOf(item) !== -1).join('')

}

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