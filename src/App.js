import React, { useState } from 'react';
import OtherCount from './comps/OtherCount.js';
import { connect } from 'react-redux';
import { addToCount, subtractToCount } from './actions';
import logo from './logo.svg';
import './App.css';

const initialState = {
	value: 5,
};

function App(props) {
	const [count, setCount] = useState(initialState);

	// const addToCount = () => {
	// 	setCount({
	// 		...count,
	// 		value: count.value + 1,
	// 	});
	// };

	const actionAdd = () => {
		props.addToCount();
	};

	// const subtractToCount = () => {
	// 	setCount({
	// 		...count,
	// 		value: count.value - 1,
	// 	});
	// };

	const actionSubtract = () => {
		props.subtractToCount();
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>1st Count: {props.count}</h1>
				<button onClick={actionAdd}>Add</button>
				<button onClick={actionSubtract}>Subtract</button>
				<img src={logo} className="App-logo" alt="logo" />
				<OtherCount count={count.value} />
			</header>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		count: state.value,
	};
};

const mapActionsToProps = () => {
	return {
		addToCount,
		subtractToCount,
	};
};

export default connect(mapStateToProps, mapActionsToProps())(App);
