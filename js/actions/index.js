import React from 'react';
import axios from 'axios';
import swearCounter from '../helperFunctions/swearCounter';

// change API Key form input
export const CHANGE_API_KEY_INPUT = 'CHANGE_API_KEY_INPUT';
export const changeApiKeyInput = value =>({
	type: CHANGE_API_KEY_INPUT, 
	value
});

// change Group Id form input
export const CHANGE_GROUP_ID_INPUT = 'CHANGE_GROUP_ID_INPUT';
export const changeGroupIdInput = value =>({
	type: CHANGE_GROUP_ID_INPUT, 
	value
});

// change Group Id form input
export const CHANGE_GROUP_SUBMIT_INPUT = 'CHANGE_GROUP_SUBMIT_INPUT';
export const changeGroupSubmitInput = value =>({
	type: CHANGE_GROUP_SUBMIT_INPUT, 
	value
});


export const submitGroupChoiceForm = (groupName, groupId) => dispatch => {
	const url = `https://api.groupme.com/v3/groups/${groupId}/messages?token=04d95e40dab101340a2c1d11b5667958`;
	// const url = `https://api.groupme.com/v3/groups/16580230/messages?token=${groupId}`;
	const options = {limit:100};
	return axios.get(url, options).then(apiResponse => {
		const userSwearCount = swearCounter(apiResponse.data.response.messages);
		return dispatch(submitGroupChoiceSuccess(groupName, groupId, userSwearCount));
	});
};

// select group
export const SUBMIT_GROUP_CHOICE_FORM_SUCCESS = 'SUBMIT_GROUP_CHOICE_FORM_SUCCESS';
export const submitGroupChoiceSuccess = (groupName, groupId, userSwearCount) =>({
	type: SUBMIT_GROUP_CHOICE_FORM_SUCCESS, 
	groupName,
	groupId,
	userSwearCount
});


// submit Api Form
export const submitApiSettingsForm = (apiKey) => dispatch => {
	// const url = `https://api.groupme.com/v3/groups?token=${apiKey}`;
	const url = 'https://api.groupme.com/v3/groups?token=04d95e40dab101340a2c1d11b5667958';
	return axios.get(url).then(apiResponse => {
		// dispatch action with groups returned by api
		return dispatch(submitApiFormSuccess(apiResponse.data.response, apiKey));
	});
};

export const SUBMIT_API_FORM_SUCCESS = 'SUBMIT_API_FORM_SUCCESS';
export const submitApiFormSuccess = (groupArray, apiKey) => ({
	type: SUBMIT_API_FORM_SUCCESS,
	groupArray,
	apiKey
});


// input text in user search field

// select user