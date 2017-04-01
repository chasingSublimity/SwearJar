import axios from 'axios';

export default function getMessages(groupId, apiKey, before_id='', messageArray=[], apiCallCounter=0) {
	return new Promise((resolve, reject) => {
		const url = `https://api.groupme.com/v3/groups/${groupId}/messages?limit=1&token=${apiKey}&before_id=${before_id}`;
		axios.get(url).then(apiResponse => {
			return apiResponse.data.response.messages;
		}).then((messages) => {
			if (apiCallCounter === 10) {
				console.log('promiseFromHell: ', messageArray);
				resolve(messageArray);
			} else {
				messageArray.push(...messages);
				getMessages(groupId, apiKey, messages[messages.length-1].id, messageArray, ++apiCallCounter);
			}
		}).catch((error) => {
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