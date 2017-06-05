import * as actions from '../actions/index';

const initialState = {
	isModalOpen: true,
	apiKeyInputValue: '',
	apiKey: '',
	memberBank: [],
	groups: [], 
	selectedGroup: {},
	swearCount: [],
	spinnerStopped: true
};

export const reducer = (state=initialState, action) => {
	let newState = {};

	switch (action.type) {

	case actions.CHANGE_API_KEY_INPUT:
		newState = Object.assign({}, state, {apiKeyInputValue: action.value});
		return newState;

	case actions.CHANGE_SELECTED_GROUP_SUCCESS:
		newState = Object.assign({}, state, {selectedGroup: action.selectedGroupNameAndId});
		return newState;

	case actions.FIRE_SPINNER:
		newState = Object.assign({}, state, {spinnerStopped: action.value});
		return newState;

	case actions.SUBMIT_GROUP_CHOICE_FORM_SUCCESS:
		newState = Object.assign({}, state, {swearCount: action.userSwearCount},
																				{spinnerStopped: action.spinnerStopped});
		return newState;

	case actions.UPDATE_API_KEY_SUCCESS:
		newState = Object.assign({}, state, {groups: [...action.groupArray]}, 
																				{apiKey: action.apiKey}, 
																				{isModalOpen: action.isModalOpen}, 
																				{selectedGroup: action.defaultGroupData});
		return newState;

	case actions.RESET_APP:
		newState = Object.assign({}, initialState);
		return newState;
				
	}

	return state;
};