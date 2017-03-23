import React from 'react';
import axios from 'axios';

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
export const CHANGE_GROUP_SUBMIT_INPUT = 'CHANGE_USER_SUBMIT_INPUT';
export const changeGroupSubmitInput = value =>({
	type: CHANGE_GROUP_SUBMIT_INPUT, 
	value
});

// submit Api Form
export const submitApiForm = () => dispatch => {
	const url = 'https://api.groupme.com/v3/groups?token=04d95e40dab101340a2c1d11b5667958';
	// const options = {'limit': 5};
	return axios.get(url /*, options*/).then(apiResponse => {
		// dispatch action with groups returned by api
		return dispatch(submitApiFormSuccess(apiResponse.data.response));
	});
};

export const SUBMIT_API_FORM_SUCCESS = 'SUBMIT_API_FORM_SUCCESS';
export const submitApiFormSuccess = groupArray => ({
	type: SUBMIT_API_FORM_SUCCESS,
	groupArray
});


// input text in user search field

// select user