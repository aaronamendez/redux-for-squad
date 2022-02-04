import React from 'react';
import { connect } from 'react-redux';

const FinalCount = (props) => {
	return (
		<div>
			<h1> 3rd Count: {props.count}</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		count: state.value,
	};
};

export default connect(mapStateToProps)(FinalCount);
