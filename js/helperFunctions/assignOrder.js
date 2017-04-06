function sortTally(a,b) {
	return b-a;
}

function removeDuplicates(array) {
	const newArray = [];
	array.forEach(number => {
		if (newArray.indexOf(number) === -1) {
			newArray.push(number);
		}
	});
	return newArray;
}

export default function assignOrder(messageObject) {
	const countArray = [];
	const users = Object.keys(messageObject);
	// pushes each swearCount into the countArray
	users.forEach(user => {
		countArray.push(messageObject[user].swearTally);
	});
	// sorts the array in descending order
	const sortedArray = countArray.sort(sortTally);
	// removes duplicates. Ties will result in a shared order. i.e., 
	// if two users have a swearCount of 0, they will both in last place.
	const sortedArrayWithoutDuplicates = removeDuplicates(sortedArray);
	// sets the order property for each user by accessing the indexOf their swearCount in the countArray.
	users.forEach(user => {
		const order = sortedArrayWithoutDuplicates.indexOf(messageObject[user].swearTally);
		messageObject[user].order = order;
	});
	return messageObject;
}