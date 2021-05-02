import React from "react";
import Grid from "@material-ui/core/Grid";
import { GlobalContext } from "../AppContext";

const Operations = () => {
	const {
		resultField,
		setResultField,
		stringID,
		setStringID,
		operationsArray,
		frontBrackets,
		setFrontBrackets,
		backBrackets,
		setBackBrackets,
		curID,
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
		// console.log(stringID);
	};

	const addFrontBracketToResult = (lastCharacter) => {
		//they can go at the beggining and after another "(" front bracket
		if (curID > 9) {
			if (lastCharacter === "" || lastCharacter === "(") {
				setFrontBrackets(frontBrackets + 1);
				setStringID(`${stringID}(`, setResultField(`${resultField}(`));
			}
			// they can go after matchematical operation
			else if (operationsArray.includes(lastCharacter)) {
				setFrontBrackets(frontBrackets + 1);
				setStringID(`${stringID}(`, setResultField(`${resultField}(`));
			}
		}
	};

	const addBackBracketToResult = (lastCharacter) => {
		//they can't go at the beggining but can go after another ")" back bracket
		if (lastCharacter === ")" && backBrackets < frontBrackets) {
			setBackBrackets(backBrackets + 1);
			setStringID(`${stringID})`, setResultField(`${resultField})`));
		}
		// they can go after number
		else if (!isNaN(parseInt(lastCharacter)) && backBrackets < frontBrackets) {
			setBackBrackets(backBrackets + 1);
			setStringID(`${stringID})`, setResultField(`${resultField})`));
		}
	};

	const addOperationToResult = (lastCharacter, btnSign) => {
		//they can't go at the beggining but can go after another ")" back bracket
		if (lastCharacter === ")") {
			setStringID(
				`${stringID}${btnSign}`,
				setResultField(`${resultField}${btnSign}`)
			);
		}
		// they can go after number
		else if (!isNaN(parseInt(lastCharacter))) {
			setStringID(
				`${stringID}${btnSign}`,
				setResultField(`${resultField}${btnSign}`)
			);
		}
	};
	return (
		<div className="grid-operations">
			<Grid container direction="column" spacing={1} justify="center">
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

			<Grid container direction="column" spacing={1} justify="center">
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
