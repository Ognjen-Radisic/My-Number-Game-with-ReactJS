import React from "react";
import "./game.css";
import { GlobalContext } from "../AppContext";
import { Button } from "@material-ui/core";

const Input = () => {
	const { resultField, setResultField } = GlobalContext();

	const deleteCharacter = () => {
		const lastChar = resultField.charAt(resultField.length - 1);
		if (resultField === "") {
			return;
		} else if (isNaN(parseInt(lastChar))) {
			const newResult = resultField.slice(0, -1);
			setResultField(newResult);
		} else {
			const newResult = resultField.slice(0, -1);
			setResultField(newResult);
		}
	};

	return (
		<>
			<div className="result-section">
				<div className="result-field">{resultField}</div>
				<div className="button-section">
					<Button
						color="secondary"
						variant="contained"
						onClick={deleteCharacter}>
						DELETE
					</Button>
					<Button color="primary" variant="contained">
						CONFIRM
					</Button>
				</div>
			</div>
		</>
	);
};

export default Input;
