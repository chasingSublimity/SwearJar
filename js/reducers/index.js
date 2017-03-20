import * as actions from '../actions/index';

const initialState = {
	apiKeyInputValue: '',
	groupIdInputValue: '',
	memberBank: [],
	selectedMember: null,
	swearCounter: null
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
	}

	return state;
};