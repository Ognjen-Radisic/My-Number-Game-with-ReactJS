import React from "react";

const Input = (props) => {
	return (
		<>
			<div className="result-field">{props.resultField}</div>
			<button>delete</button>
			<button>confirm</button>
		</>
	);
};

export default Input;
