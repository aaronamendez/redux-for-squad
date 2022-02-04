// EXPORT ONE FOR REDUCER
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

// EXPORT ONE FOR ANYWHERE ELSE
export const addToCount = () => {
	return { type: ADD };
};

export const subtractToCount = () => {
	return { type: SUBTRACT };
};
