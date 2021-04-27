import React from "react";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import { GlobalContext } from "../AppContext";
import NumberShufler from "./NumberShufler";

const Numbers = () => {
	const {
		values,
		setValues,
		btnDisable,
		setBtnDisable,
		curID,
		setCurID,
		resultField,
		setResultField,
		stringID,
		setStringID,
		operationsArray,
		setTargetNum,
		getRandomIntWithZero,
		getRandomInt,
		getRandomIntMid,
		getRandomIntLarge,
	} = GlobalContext();

	// press button stop to generate new numbers at the start of the game
	// lock in numbers by taversing ids and match them to the element
	// when they are matched assing random number from the given range
	const getNumbers = () => {
		if (curID < 4) {
			setValues({ ...values, [`value${curID}`]: getRandomIntWithZero(10) });
		} else if (curID < 8) {
			setValues({ ...values, [`value${curID}`]: getRandomInt(9) });
		} else if (curID === 8) {
			setValues({ ...values, [`value${curID}`]: getRandomIntMid() });
		} else if (curID === 9) {
			setValues({ ...values, [`value${curID}`]: getRandomIntLarge() });
		}
		setCurID(curID + 1);
		if (curID === 9) {
			setTargetNum(
				parseInt(`${values.value1}${values.value2}${values.value3}`)
			);
			setBtnDisable({
				disabled1: false,
				disabled2: false,
				disabled3: false,
				disabled4: false,
				disabled5: false,
				disabled6: false,
				disabled7: false,
				disabled8: false,
				disabled9: false,
			});
		}
	};

	//when button with number is clicked proceed with adding it into result field
	const displayNum = (e) => {
		const id = e.target.id;
		addNumberToResultField(id);
	};

	//display numbers if conditions are met in reselt field
	const addNumberToResultField = (id) => {
		var lastChar = resultField.charAt(resultField.length - 1);
		if (
			operationsArray.includes(lastChar) ||
			resultField === "" ||
			lastChar === "("
		) {
			setBtnDisable({ ...btnDisable, [`disabled${id}`]: true });
			setStringID(
				`${stringID}${id}`,
				setResultField(`${resultField}${values[`value${id}`]}`)
			);
		}
		console.log(resultField);
		console.log(stringID);
	};

	return (
		<>
			{/* Button that initialize numbers from start to finish, and then disabled until game ends */}
			{curID < 10 ? (
				<MyButton color="red" onClick={getNumbers}>
					stop
				</MyButton>
			) : (
				<MyButton disabled={true} color="blue" onClick={getNumbers}>
					good luck
				</MyButton>
			)}

			{/* TOP 3 numbers that make a target 3 digit number */}
			<Grid container spacing={1} justify="center" style={{ margin: "10px 0" }}>
				<Grid item>
					<button style={paperStyle} id="1">
						{curID === 1 ? <NumberShufler /> : values.value1}
					</button>
				</Grid>
				<Grid item>
					<button style={paperStyle} id="2">
						{curID === 2 ? <NumberShufler /> : values.value2}
					</button>
				</Grid>
				<Grid item>
					<button style={paperStyle} id="3">
						{curID === 3 ? <NumberShufler /> : values.value3}
					</button>
				</Grid>
			</Grid>

			{/* numbers that we can work with */}
			<div className="numbers-container">
				{/* 4 single digit numbers on the left */}
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<button
							disabled={btnDisable.disabled4}
							style={paperStyle}
							id="4"
							onClick={displayNum}>
							{curID === 4 ? <NumberShufler /> : values.value4}
						</button>
					</Grid>
					<Grid item>
						<button
							disabled={btnDisable.disabled5}
							style={paperStyle}
							id="5"
							onClick={displayNum}>
							{curID === 5 ? <NumberShufler /> : values.value5}
						</button>
					</Grid>
					<Grid item>
						<button
							disabled={btnDisable.disabled6}
							style={paperStyle}
							id="6"
							onClick={displayNum}>
							{curID === 6 ? <NumberShufler /> : values.value6}
						</button>
					</Grid>
					<Grid item>
						<button
							disabled={btnDisable.disabled7}
							style={paperStyle}
							id="7"
							onClick={displayNum}>
							{curID === 7 ? <NumberShufler /> : values.value7}
						</button>
					</Grid>
				</Grid>

				{/* central number that can be 10, 15 or 20 */}
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<button
							disabled={btnDisable.disabled8}
							style={{ ...paperStyle, width: 60 }}
							id="8"
							onClick={displayNum}>
							{curID === 8 ? <NumberShufler /> : values.value8}
						</button>
					</Grid>
				</Grid>

				{/* right most number that can be 25, 50, 75, 100 */}
				<Grid
					container
					spacing={1}
					justify="flex-start"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<button
							disabled={btnDisable.disabled9}
							style={{ ...paperStyle, width: 80 }}
							id="9"
							onClick={displayNum}>
							{curID === 9 ? <NumberShufler /> : values.value9}
						</button>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

const paperStyle = {
	display: "flex",
	background: "white",
	height: 40,
	width: 40,
	alignItems: "center",
	justifyContent: "center",
	fontSize: "150%",
	fontWeight: 600,
	outline: "none",
};

export default Numbers;
