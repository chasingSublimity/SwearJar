import React from 'react';
import axios from 'axios';
import swearCounter from '../helperFunctions/swearCounter';
import getMessages from '../helperFunctions/handleMessagePromise';

// change API Key form input
export const CHANGE_API_KEY_INPUT = 'CHANGE_API_KEY_INPUT';
export const changeApiKeyInput = value =>({
	type: CHANGE_API_KEY_INPUT, 
	value
});

// change Group Id form input
export const CHANGE_SELECTED_GROUP = 'CHANGE_SELECTED_GROUP';
export const changeSelectedGroup = value => (dispatch, getState) => {
	const selectedGroup = getState().groups.find(group => group.name === value);
	const selectedGroupNameAndId = {name: selectedGroup.name, id: selectedGroup.id};
	dispatch(changeSelectedGroupSuccess(selectedGroupNameAndId));
};

export const CHANGE_SELECTED_GROUP_SUCCESS = 'CHANGE_SELECTED_GROUP_SUCCESS';
export const changeSelectedGroupSuccess = (selectedGroupNameAndId) =>  ({
	type: CHANGE_SELECTED_GROUP_SUCCESS, 
	selectedGroupNameAndId
});


export const FIRE_SPINNER = 'FIRE_SPINNER';
export const fireSpinner = value => ({
	type: FIRE_SPINNER,
	value
});

export const submitGroup = (groupName, groupId) => (dispatch, getState) => {
	const {apiKey} = getState();
	const {spinnerStopped} = getState();
	return getMessages(groupId, apiKey).then(messages => {
		const userSwearCount = swearCounter(messages);
																																								// return toggled boolean
		return dispatch(submitGroupChoiceSuccess(groupName, groupId, userSwearCount, !spinnerStopped));
	});
};

// select group
export const SUBMIT_GROUP_CHOICE_FORM_SUCCESS = 'SUBMIT_GROUP_CHOICE_FORM_SUCCESS';
export const submitGroupChoiceSuccess = (groupName, groupId, userSwearCount, spinnerStopped) => ({
	type: SUBMIT_GROUP_CHOICE_FORM_SUCCESS, 
	groupName,
	groupId,
	userSwearCount,
	spinnerStopped
});


// submit Api Form
export const updateApiKey = (apiKey) => (dispatch, getState) => {
	const {isModalOpen} = getState();
	const url = `https://api.groupme.com/v3/groups?token=${apiKey}`;
	return axios.get(url).then(apiResponse => {
		// for ux reasons, the name of the first group in the api response becomes the default selected group
		const defaultGroupData = {name: apiResponse.data.response[0].name, id: apiResponse.data.response[0].id};
		// dispatch action with groups returned by api, apiKey, and the inverse modal boolean
		return dispatch(updateApiKeySuccess(apiResponse.data.response, apiKey, (!isModalOpen), defaultGroupData));
	});
};

export const UPDATE_API_KEY_SUCCESS = 'UPDATE_API_KEY_SUCCESS';
export const updateApiKeySuccess = (groupArray, apiKey, isModalOpen, defaultGroupData) => ({
	type: UPDATE_API_KEY_SUCCESS,
	groupArray,
	apiKey,
	isModalOpen, 
	defaultGroupData
});

export const RESET_APP = 'RESET_APP';
export const resetApp = () => ({
	type:RESET_APP
});