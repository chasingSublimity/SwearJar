import axios from 'axios';

function getMessages(groupId, apiKey, before_id='') {
	const url = `https://api.groupme.com/v3/groups/${groupId}/messages?limit=100&token=${apiKey}&before_id=${before_id}`;
	return axios.get(url);
}

function handleMessagePromise(groupId, apiKey)  {
	return new Promise((resolve, reject) => {
		let messageArray = [];
		getMessages(groupId, apiKey)
			.then(apiResponse => {
				const messages = apiResponse.data.response.messages;
				messageArray.push(...messages);
				const before_id = messages[messages.length-1].id;
				return before_id;
			})
			.then((before_id) => {
				return getMessages(groupId, apiKey, before_id);
			})
			.then((apiResponse) => {
				const messages = apiResponse.data.response.messages;
				messageArray.push(...messages);
				const before_id = messages[messages.length-1].id;
				return before_id;
			})
			.then(() => {
				resolve(messageArray);
			});
	});
}


export default handleMessagePromise;