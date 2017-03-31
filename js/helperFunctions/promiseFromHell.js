import axios from 'axios';

let messageArray = [];
let apiCallCounter = 0;
let before_id;

function getMessages(groupId, apiKey, before_id='') {
	return new Promise((resolve, reject) => {
		const url = `https://api.groupme.com/v3/groups/${groupId}/messages?limit=1&token=${apiKey}&before_id=${before_id}`;
		return axios.get(url).then(apiResponse => {
			let messages = apiResponse.data.response.messages;
			before_id = messages[messages.length-1].id;
			messageArray.push(...messages);
			apiCallCounter++;
			let _messageArray = messageArray;
			return _messageArray;
		}).then((_messageArray) => {
			if (apiCallCounter === 10) {
				resolve(_messageArray);
			} else {
				getMessages(groupId, apiKey, before_id);
			}
		}).catch((error) => {
			reject(Error(error));
		});
	}).then((data) => {
		console.log(data);
		return(data);
	});
}

export default function handleMessagePromise(groupId, apiKey)  {
	return new Promise((resolve, reject) => {
		return getMessages(groupId, apiKey).then((data) => {
			console.log('third');
			resolve(data);
		})
			.catch((error) => {
				reject(Error(error));
			});
	}).then((data) => {
		return data;
	}); 
}