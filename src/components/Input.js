import React from "react";
import { GlobalContext } from "../AppContext";

const Input = (props) => {
	const { resultField } = GlobalContext();

	return (
		<>
			<div className="result-field">
				{props.resultField}
				<h2>{resultField}</h2>
				<button>delete</button>
				<button>confirm</button>
			</div>
		</>
	);
};

export default Input;
