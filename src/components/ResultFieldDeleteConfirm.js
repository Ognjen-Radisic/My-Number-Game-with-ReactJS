import React from "react";
import "./game.css";
import { GlobalContext } from "../AppContext";
import { Button } from "@material-ui/core";

const Input = () => {
	const {
		resultField,
		setResultField,
		stringID,
		setStringID,
		values,
		setValues,
		btnDisable,
		setBtnDisable,
	} = GlobalContext();

	const deleteCharacter = () => {
		const lastChar = resultField.charAt(resultField.length - 1);
		if (resultField === "") {
			return;
		}
		//ako nije broj samo obrisi poslednji karakter
		else if (isNaN(parseInt(lastChar))) {
			const newResultID = stringID.slice(0, -1);
			const newResult = resultField.slice(0, -1);
			setStringID(newResultID, setResultField(newResult));
		}
		//ako jeste broj obrisi poslednji karakter pozivanjem funkcije transformacije
		else {
			removeLastIDAndTransformStringIDToResultField();
		}
	};

	const removeLastIDAndTransformStringIDToResultField = () => {
		//extract last ID from string ID
		const lastID = stringID.charAt(stringID.length - 1);

		//delete last ID from string ID
		const newResultID = stringID.slice(0, -1);

		//new result field to display to user
		const newUserResultField = makeNewResultFieldFromStringID(newResultID);

		//enable button from deleted number so we can click it again
		setBtnDisable({ ...btnDisable, [`disabled${lastID}`]: false });

		//set new values
		setStringID(newResultID, setResultField(newUserResultField));
	};

	//take each char from new string ID where we already deleted last ID and transform it into new resultField
	const makeNewResultFieldFromStringID = (stringWithID) => {
		const arr = stringWithID.split("").map((char) => {
			if (isNaN(parseInt(char))) {
				return char;
			} else {
				return `${values[`value${char}`]}`;
			}
		});
		return arr.join("");
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
