// Actions
import { ADD, SUBTRACT } from '../actions';

// MIMICS STATE IN REACT
const initialState = {
	value: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return {
				...state,
				value: state.value + 1,
			};
		case SUBTRACT:
			return {
				...state,
				value: state.value - 1,
			};
		default:
			return state;
	}
};

export default reducer;
