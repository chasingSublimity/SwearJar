import axios from 'axios';

export default function handleMessageCalls(groupId, apiKey) {
	const messageArray = [];
	const url = `https://api.groupme.com/v3/groups/${groupId}/messages?limit=100&token=${apiKey}`;
	for (let i=0; i<10;i++) {
		axios.get(url).then(apiResponse => 
			messageArray.push(apiResponse.data.response.messages));
	}
	return messageArray;
}

