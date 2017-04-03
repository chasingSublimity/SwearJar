import axios from 'axios';

export default function getMessages(groupId, apiKey, before_id='', messageArray=[], apiCallCounter=0) {
	return new Promise((resolve, reject) => {
		const url = `https://api.groupme.com/v3/groups/${groupId}/messages?limit=100&token=${apiKey}&before_id=${before_id}`;
		axios.get(url).then(apiResponse => {
			const messages = apiResponse.data.response.messages;
			if (apiCallCounter === 10) {
				console.log('finished');
				resolve(messageArray);
			} else {
				messageArray.push(...messages);
				return getMessages(groupId, apiKey, messages[messages.length-1].id, messageArray, ++apiCallCounter);
			}
		}).then(messageData => {
			resolve(messageData);
		})
		.catch((error) => {
			reject(error);
		});
	});
}

// function handleMessagePromise(groupId, apiKey)  {
// 	return new Promise((resolve, reject) => {
// 		return getMessages(groupId, apiKey).then((data) => {
// 			resolve(data);
// 		})
// 			.catch((error) => {
// 				reject(Error(error));
// 			});
// 	}).then((data) => {
// 		return data;
// 	}); 
// }