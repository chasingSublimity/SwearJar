import React from 'react';
import getAndSortMemberData from '../reducers/apiCall';
import $ from 'jquery';

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
	const options = {'limit': 100};
	return $.ajax(url, options).then(response => {
		console.log(response);
	});
};

export const SUBMIT_API_FORM_SUCCESS = 'SUBMIT_API_FORM_SUCCESS';
export const fetchFewestGuessesSuccess = memberArray => ({
	type: SUBMIT_API_FORM_SUCCESS,
	memberArray
});


// input text in user search field

// select user