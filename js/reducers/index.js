import * as actions from '../actions/index';

const initialState = {
	apiKeyInputValue: '',
	apiKey: '',
	memberBank: [],
	groupSelectInputValue: null,
	swearCount: null,
	groups: [], 
	selectedGroup: {}
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

	case actions.SUBMIT_GROUP_CHOICE_FORM_SUCCESS:
		newState = Object.assign({}, state, {selectedGroup: {[action.groupName]: action.groupId}},
																				{swearCount: action.userSwearCount}
														);
		return newState;

	case actions.SUBMIT_API_FORM_SUCCESS:
		newState = Object.assign({}, state, {groups: [...action.groupArray]}, {apiKey: action.apiKey});
		return newState;
	}

	return state;
};