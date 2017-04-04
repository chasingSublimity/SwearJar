// This function, when given an array of GroupMe message objects, returns an object
// of Users (key) and # of swears (value)

import curseDictionary from './curseDictionary';
import assignOrder from './assignOrder';

// potential refactor for readability

function sortAndTokenizeUserMessages(messages) {
  // userMessages will contain the user name (key) and an array of messages posted by that user (value).
	const userMessagesAndImage = {};
	// tokenizedUserMessages will contain the user name (key) and a tokenized string of messages posted by that user (value).
	for (let i=0; i < messages.length; i++) {
		const messageAuthor = messages[i].name;
		const avatar_url = messages[i].avatar_url;
		const messageText = messages[i].text;
		// if the user is already in userMessages, push the message text to the corresponding array
		if (messageAuthor in userMessagesAndImage && messageAuthor !== 'GroupMe') {
			userMessagesAndImage[messageAuthor].messages.push(messageText);
		// if the user is not in userMessages, create a prop/key value with the user name and an array containing message text
		} else if (messageAuthor !== 'GroupMe') {
			userMessagesAndImage[messageAuthor] = {messages: [messageText], avatar_url};
		}
	}
	// tokenize the messages in userMessages
	for (let user in userMessagesAndImage) {
		userMessagesAndImage[user].messages = tokenizeMessages(userMessagesAndImage[user].messages);
	}
	return userMessagesAndImage;
}
  
function tokenizeMessages(messageArray) {
										//filters out falsy values, joins into one array of lowercase strings
	return messageArray.filter(Boolean).join().toLowerCase()
											// removes punctuation
											.replace(/[.,\/#!"?$%\^&\*;:{}=\-_`~()]/g,' ')
											// removes extra white space
											.replace(/\s{2,}/g,' ').trim()
											// splits into individual words
											.split(' ');
}

function tallySwearWords(userMessageObject) {
	let userSwearTallyAndImage = {};
	// loop through each user to access message array
	for (let user in userMessageObject) {
		const avatar_url = userMessageObject[user].avatar_url;
		let swearTally = 0;
		const messageArray = userMessageObject[user].messages;
		// loop through message array to determine swear counter
		for (let i=0; i<messageArray.length; i++) {
			if (messageArray[i] in curseDictionary) {
				swearTally++;
			}
		}
		// initialize a user property with the # of swears as a value
		userSwearTallyAndImage[user] = {swearTally, avatar_url};
	}
	// return object with users (key) and # of swears (value)
	return userSwearTallyAndImage;
}

export default function swearCounter(messageArray) {
	// returns sorted and tokenized data
	const userObject = tallySwearWords(sortAndTokenizeUserMessages(messageArray));
	const orderedUserObject = assignOrder(userObject);
	// convert orderedUserObject into an array of individual objects,
	// one for each user.
	const userAndMessageArray = [];
	Object.keys(orderedUserObject).forEach(user => {
		userAndMessageArray.push({name: user, order: (orderedUserObject[user].order + 1), tally: orderedUserObject[user].swearTally, avatar_url: orderedUserObject[user].avatar_url});
	});
	return userAndMessageArray;
}