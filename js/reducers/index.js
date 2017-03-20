import * as actions from '../actions/index';

const initialState = {
	searchInputValue: '',
	memberBank: [],
	selectedMember: null,
	swearCounter: null
};

export const reducer = (state=initialState, action) => {
	let newState = {};

	switch (action.type) {

	case actions.CHANGE_INPUT:
		newState = Object.assign({}, state, {searchInputValue: action.value});
		return newState;
	}

	return state;
};