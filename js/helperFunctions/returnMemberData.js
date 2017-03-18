import $ from 'jquery';
const url = 'https://api.groupme.com/v3/groups/16580230?token=04d95e40dab101340a2c1d11b5667958';
const options = {'limit': 100};

// make a get request to groupme api. pass data to sortMemberData callback
export default function returnMemberData() {
	$.getJSON(url, options, function(data) {
		sortMemberData(data.response.members);});
}

// return array of objects. each object contains the nickname, imageUrl and api id of
// a groupchat member.
function sortMemberData(data) {
	const memberArray = [];
	for (let i=0; i < data.length; i++) {
		memberArray.push(
			{nickname: data[i].nickname, imageUrl: data[i].image_url, id: data[i].id});
	}
	console.log(memberArray);
	return memberArray;
}