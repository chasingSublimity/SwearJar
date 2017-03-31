import React from 'react';
import axios from 'axios';
import swearCounter from '../helperFunctions/swearCounter';
// import getAndTallyMessages from '../helperFunctions/getAndTallyMessages';
import handleMessagePromise from '../helperFunctions/handleMessagePromise';

// change API Key form input
export const CHANGE_API_KEY_INPUT = 'CHANGE_API_KEY_INPUT';
export const changeApiKeyInput = value =>({
	type: CHANGE_API_KEY_INPUT, 
	value
});

// change Group Id form input
export const CHANGE_GROUP_SUBMIT_INPUT = 'CHANGE_GROUP_SUBMIT_INPUT';
export const changeGroupSubmitInput = value =>({
	type: CHANGE_GROUP_SUBMIT_INPUT, 
	value
});


export const updateGroup = (groupName, groupId) => (dispatch, getState) => {
	const {apiKey} = getState();
	return handleMessagePromise(groupId, apiKey).then(messages => {
		const userSwearCount = swearCounter(messages);
		return dispatch(submitGroupChoiceSuccess(groupName, groupId, userSwearCount));
	});
};

// select group
export const SUBMIT_GROUP_CHOICE_FORM_SUCCESS = 'SUBMIT_GROUP_CHOICE_FORM_SUCCESS';
export const submitGroupChoiceSuccess = (groupName, groupId, userSwearCount) => ({
	type: SUBMIT_GROUP_CHOICE_FORM_SUCCESS, 
	groupName,
	groupId,
	userSwearCount
});


// submit Api Form
export const updateApiKey = (apiKey) => dispatch => {
	const url = `https://api.groupme.com/v3/groups?token=${apiKey}`;
	return axios.get(url).then(apiResponse => {
		// dispatch action with groups returned by api
		return dispatch(updateApiKeySuccess(apiResponse.data.response, apiKey));
	});
};

export const UPDATE_API_KEY_SUCCESS = 'UPDATE_API_KEY_SUCCESS';
export const updateApiKeySuccess = (groupArray, apiKey) => ({
	type: UPDATE_API_KEY_SUCCESS,
	groupArray,
	apiKey
});