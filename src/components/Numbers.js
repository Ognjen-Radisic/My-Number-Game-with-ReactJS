import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import { GlobalContext } from "../AppContext";

const Numbers = () => {
	const [tempValue, setTempValue] = useState("?");
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
	} = GlobalContext();

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	function getRandomIntMid() {
		const arr = [10, 15, 20];
		return arr[Math.floor(Math.random() * arr.length)];
	}
	function getRandomIntLarge() {
		const arr = [25, 50, 75, 100];
		return arr[Math.floor(Math.random() * arr.length)];
	}

	// lock in numbers by taversing ids and match them to the element
	// when they are matched assing random number from the given range
	const getNumbers = () => {
		if (curID < 8) {
			setValues({ ...values, [`value${curID}`]: getRandomInt(10) });
		} else if (curID === 8) {
			setValues({ ...values, [`value${curID}`]: getRandomIntMid() });
		} else if (curID === 9) {
			setValues({ ...values, [`value${curID}`]: getRandomIntLarge() });
		}
		setCurID(curID + 1);
		if (curID === 9) {
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

	const displayNum = (e) => {
		console.log(e.target);
		const id = e.target.id;
		console.log(id);
		console.log(values[`value${id}`]);
		addNumberToResultField(id);
	};

	const addNumberToResultField = (id) => {
		var lastChar = resultField.charAt(resultField.length - 1);
		if (
			operationsArray.includes(lastChar) ||
			resultField === "" ||
			lastChar === "("
		) {
			setBtnDisable({ ...btnDisable, [`disabled${id}`]: true });
			setResultField(`${resultField}${values[`value${id}`]}`);
		}
		console.log(resultField);
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
					<button
						disabled={btnDisable.disabled1}
						style={paperStyle}
						id="1"
						onClick={displayNum}>
						{curID === 1 ? tempValue : values.value1}
					</button>
				</Grid>
				<Grid item>
					<button
						disabled={btnDisable.disabled2}
						style={paperStyle}
						id="2"
						onClick={displayNum}>
						{curID === 2 ? tempValue : values.value2}
					</button>
				</Grid>
				<Grid item>
					<button
						disabled={btnDisable.disabled3}
						style={paperStyle}
						id="3"
						onClick={displayNum}>
						{curID === 3 ? tempValue : values.value3}
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
							{curID === 4 ? tempValue : values.value4}
						</button>
					</Grid>
					<Grid item>
						<button
							disabled={btnDisable.disabled5}
							style={paperStyle}
							id="5"
							onClick={displayNum}>
							{curID === 5 ? tempValue : values.value5}
						</button>
					</Grid>
					<Grid item>
						<button
							disabled={btnDisable.disabled6}
							style={paperStyle}
							id="6"
							onClick={displayNum}>
							{curID === 6 ? tempValue : values.value6}
						</button>
					</Grid>
					<Grid item>
						<button
							disabled={btnDisable.disabled7}
							style={paperStyle}
							id="7"
							onClick={displayNum}>
							{curID === 7 ? tempValue : values.value7}
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
							{curID === 8 ? tempValue : values.value8}
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
							{curID === 9 ? tempValue : values.value9}
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
