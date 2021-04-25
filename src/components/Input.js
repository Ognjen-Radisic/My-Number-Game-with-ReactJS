import React from "react";
import { GlobalContext } from "../AppContext";

const Input = (props) => {
	const { values } = GlobalContext();

	return (
		<>
			<div className="result-field">
				{props.resultField}
				<h2>{JSON.stringify(values)}</h2>
				<button>delete</button>
				<button>confirm</button>
			</div>
		</>
	);
};

export default Input;
