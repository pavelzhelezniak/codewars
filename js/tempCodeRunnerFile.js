const tidyNumber = n => {
	const arr = n.toString().split('');

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i = 1]) {
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