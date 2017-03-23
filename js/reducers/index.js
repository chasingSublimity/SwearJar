import * as actions from '../actions/index';

const initialState = {
	apiKeyInputValue: '',
	groupIdInputValue: '',
	memberBank: [],
	groupSelectInputValue: null,
	swearCounter: null,
	groups: [], 
	selectedGroup: []
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

	case actions.SELECT_GROUP:
		newState = Object.assign({}, state, {selectedGroup: action.value});
		return newState;

	case actions.SUBMIT_API_FORM_SUCCESS:
		newState = Object.assign({}, state, {groups: [...action.groupArray]});
		return newState;
	}

	return state;
};