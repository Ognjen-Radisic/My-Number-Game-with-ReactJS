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
		btnDisable,
		setBtnDisable,
		targetNum,
		frontBrackets,
		setFrontBrackets,
		backBrackets,
		setBackBrackets,
		makeModalPop,
	} = GlobalContext();

	///////////////////////////////////////DELETING FUNCTIONALITY//////////////////////////////////////////
	const deleteCharacter = () => {
		const lastChar = resultField.charAt(resultField.length - 1);
		if (resultField === "") {
			return;
		}
		//ako nije broj samo obrisi poslednji karakter
		else if (isNaN(parseInt(lastChar))) {
			if (lastChar === "(") {
				setFrontBrackets(frontBrackets - 1);
			} else if (lastChar === ")") {
				setBackBrackets(backBrackets - 1);
			}
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
	////////////////////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////CONFIRM RESULT FUNCTIONALITY////////////////////////////////////////////////
	const checkResult = () => {
		const lastChar = resultField.charAt(resultField.length - 1);

		//if string is empty //snackbar
		if (resultField === "") {
			alert("You should type something");
		}

		//user didnt type the same number of front and back brackets //snackbar
		else if (frontBrackets !== backBrackets) {
			alert("Number of your brackets is not good");
		}

		//if it doesnt finish with the number //snackbar
		else if (lastChar !== ")" && isNaN(parseInt(lastChar))) {
			alert("Watch out! Your result field is incomplete.");
		}

		//if it is correct //modal
		else if (targetNum === eval(resultField)) {
			makeModalPop(true);
		}

		//if it is incorrect we pass false to make values in modal different//modal
		else {
			makeModalPop(false);
		}
	};
	///////////////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<>
			<div className="result-section">
				<div className="result-field">{resultField}</div>
				<div className="button-section">
					<Button
						color="secondary"
						variant="contained"
						onClick={deleteCharacter}
						disabled={resultField === "" ? true : false}>
						DELETE
					</Button>
					<Button color="primary" variant="contained" onClick={checkResult}>
						CONFIRM
					</Button>
				</div>
			</div>
		</>
	);
};

export default Input;
