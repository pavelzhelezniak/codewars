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