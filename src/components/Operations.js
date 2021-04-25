import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "../AppContext";

const Operations = () => {
	const {
		resultField,
		setResultField,
		stringID,
		setStringID,
		operationsArray,
		bracekts,
	} = GlobalContext();

	const changeResultField = (e) => {
		const btnSign = e.target.value;
		const lastChar = resultField.charAt(resultField.length - 1);

		if (btnSign === "(") {
			addFrontBracketToResult(lastChar);
		} else if (btnSign === ")") {
			addBackBracketToResult(lastChar);
		} else {
			addOperationToResult(lastChar, btnSign);
		}
	};

	const addFrontBracketToResult = (lastCharacter) => {
		//they can go at the beggining and after another "(" front bracket
		if (lastCharacter === "" || lastCharacter === "(") {
			setResultField(`${resultField}(`);
		}
		// they can go after matchematical operation
		else if (operationsArray.includes(lastCharacter)) {
			setResultField(`${resultField}(`);
		}
	};

	const addBackBracketToResult = (lastCharacter) => {
		//they can't go at the beggining but can go after another ")" back bracket
		if (lastCharacter === ")") {
			setResultField(`${resultField})`);
		}
		// they can go after number
		else if (!isNaN(parseInt(lastCharacter))) {
			setResultField(`${resultField})`);
		}
	};

	const addOperationToResult = (lastCharacter, btnSign) => {
		//they can't go at the beggining but can go after another ")" back bracket
		if (lastCharacter === ")") {
			setResultField(`${resultField}${btnSign}`);
		}
		// they can go after number
		else if (!isNaN(parseInt(lastCharacter))) {
			setResultField(`${resultField}${btnSign}`);
		}
	};
	return (
		<div className="grid-operations">
			<Grid container direction="column" spacing={1}>
				<Grid item>
					<button onClick={changeResultField} value={"+"}>
						+
					</button>
				</Grid>
				<Grid item>
					<button onClick={changeResultField} value={"*"}>
						*
					</button>
				</Grid>
				<Grid item>
					<button onClick={changeResultField} value={"("}>
						(
					</button>
				</Grid>
			</Grid>

			<Grid container direction="column" spacing={1}>
				<Grid item>
					<button onClick={changeResultField} value={"-"}>
						-
					</button>
				</Grid>
				<Grid item>
					<button onClick={changeResultField} value={"/"}>
						/
					</button>
				</Grid>
				<Grid item>
					<button onClick={changeResultField} value={")"}>
						)
					</button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Operations;
