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

// submit Api Form
export const submitApiForm = () => dispatch => {
	const url = 'https://api.groupme.com/v3/groups/16580230?token=04d95e40dab101340a2c1d11b5667958';
	// const options = {'limit': 5};
	return axios.get(url /*, options*/).then(apiResponse => {
		// While we do not all of the data for each member contained in the api response,
		// each entire member object is fed into the dispatch function.
		return dispatch(submitApiFormSuccess(apiResponse.data.response.members));
	});
};

export const SUBMIT_API_FORM_SUCCESS = 'SUBMIT_API_FORM_SUCCESS';
export const submitApiFormSuccess = memberArray => ({
	type: SUBMIT_API_FORM_SUCCESS,
	memberArray
});


// input text in user search field

// select user