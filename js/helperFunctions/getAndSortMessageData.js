import axios from 'axios';
import curseDictionary from './curseDictionary';

var baseURL = 'https://api.groupme.com/v3/groups/16580230/messages?token=04d95e40dab101340a2c1d11b5667958';
var options = {limit: 50};

function sortAndTokenizeData(messages) {
  // userMessages will contain the user name (key) and an array of messages posted by that user (value).
	const userMessages = {};
	// _userMessages will contain the user name (key) and a tokenized string of messages posted by that user (value).
	const tokenizedUserMessages = {};
	for (let i=0; i < messages.length; i++) {
		const messageAuthor = messages[i].name;
		const messageText = messages[i].text;
		// if the user is already in userMessages, push the message text to the corresponding array
		if (messageAuthor in userMessages) {
			userMessages[messageAuthor].push(messageText);
		// if the user is not in userMessages, create a prop/key value with the user name and an array containing message text
		} else {
			userMessages[messageAuthor] = [messageText];
		}
	}
	// tokenize the messages in userMessages
	for (let user in userMessages) {
		tokenizedUserMessages[user] = tokenizeData(userMessages[user]);
	}
	return tokenizedUserMessages;
}
  
function tokenizeData(messageArray) {
										//filters out falsy values, joins into one array
	return messageArray.filter(Boolean).join().toLowerCase()
											// removes punctuation
											.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,' ')
											// removes extra white space
											.replace(/\s{2,}/g,' ').trim()
											// splits into individual words
											.split();
}

function tallySwearWords(userMessageObject) {
	let userSwearTally = {};
	// loop through each user to access message array
	for (let user in userMessageObject) {
		let swearTally = 0;
		const messageArray = userMessageObject[user];
		// loop through message array to determine swear counter
		for (let i=0; i<messageArray.length; i++) {
			if (messageArray[i] in curseDictionary) {
				swearTally++;
			}
		}
		// initialize a key(user):value(# of swear words)
		userSwearTally[user] = swearTally;
	}
	console.log(userSwearTally);
	return userSwearTally;
}

function getSortTokenizeAndTallyData() {
	axios.get(baseURL, options)
	.then(data => {
		sortAndTokenizeData(data.response.messages);
	})
	.then(data => {
		tallySwearWords(data);
	});
}

getSortTokenizeAndTallyData();