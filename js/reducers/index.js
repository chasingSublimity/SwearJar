import * as actions from '../actions/index';

const initialState = {
	isModalOpen: true,
	apiKeyInputValue: '',
	apiKey: '',
	memberBank: [],
	groups: [], 
	selectedGroup: {},
	groupSelectInputValue: null,
	swearCount: [],
	spinnerStopped: true
};

export const reducer = (state=initialState, action) => {
	let newState = {};

	switch (action.type) {

	case actions.CHANGE_API_KEY_INPUT:
		newState = Object.assign({}, state, {apiKeyInputValue: action.value});
		return newState;

	case actions.CHANGE_GROUP_ID_INPUT:
		newState = Object.assign({}, state, {groupIdInputValue: action.value});
		return newState;

	case actions.CHANGE_GROUP_SUBMIT_INPUT:
		newState = Object.assign({}, state, {groupSelectInputValue: action.value});
		return newState;

	case actions.FIRE_SPINNER:
		newState = Object.assign({}, state, {spinnerStopped: action.value});
		return newState;

	case actions.SUBMIT_GROUP_CHOICE_FORM_SUCCESS:
		newState = Object.assign({}, state, {selectedGroup: {[action.groupName]: action.groupId}},
																				{swearCount: action.userSwearCount},
																				{spinnerStopped: action.spinnerStopped});
		return newState;

	case actions.UPDATE_API_KEY_SUCCESS:
		newState = Object.assign({}, state, {groups: [...action.groupArray]}, 
																				{apiKey: action.apiKey}, 
																				{isModalOpen: action.isModalOpen});
		return newState;
	}

	return state;
};