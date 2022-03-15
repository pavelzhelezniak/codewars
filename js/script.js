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