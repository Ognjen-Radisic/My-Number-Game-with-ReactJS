import React, { useState, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import { Button } from "@material-ui/core";

const Numbers = () => {
	const [tempValue, setTempValue] = useState(3);

	const [resultField, setResultField] = useState("hello");
	const [curID, setCurID] = useState(0);
	const hello = 1;
	const [values, setValues] = useState({
		value1: null,
		disabled1: false,
		value2: null,
		disabled2: false,
		value3: null,
		disabled3: false,
		value4: null,
		disabled4: false,
		value5: null,
		disabled5: false,
		value6: null,
		disabled6: false,
		value7: null,
		disabled7: false,
		value8: null,
		disabled8: false,
		value9: null,
		disabled9: false,
	});

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

	const getNumbers = () => {
		setCurID(curID + 1);
		if (curID < 8) {
			values[`value${curID}`] = getRandomInt(10);
		} else if (curID === 8) {
			values[`value${curID}`] = getRandomIntMid();
		} else if (curID === 9) {
			values[`value${curID}`] = getRandomIntLarge();
		}
		console.log(curID);
		console.log(values);
	};

	const displayNum = (e) => {
		console.log(e.target);
		const id = e.target.id;
		console.log(id);
		values[`disabled${id}`] = true;
	};

	return (
		<>
			<MyButton
				disabled={curID > 9 ? true : false}
				color="red"
				onClick={getNumbers}>
				stop
			</MyButton>
			<Grid container spacing={1} justify="center" style={{ margin: "10px 0" }}>
				<Grid item>
					<button
						disabled={values.disabled1}
						style={paperStyle}
						id="1"
						onClick={displayNum}>
						{curID === 1 ? tempValue : values.value1}
					</button>
				</Grid>
				<Grid item>
					<button
						disabled={values.disabled2}
						style={paperStyle}
						id="2"
						onClick={displayNum}>
						{curID === 2 ? tempValue : values.value2}
					</button>
				</Grid>
				<Grid item>
					<button
						disabled={values.disabled3}
						style={paperStyle}
						id="3"
						onClick={displayNum}>
						{curID === 3 ? tempValue : values.value3}
					</button>
				</Grid>
			</Grid>
			<div className="numbers-container">
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<Button style={paperStyle} id="4" onClick={displayNum}>
							{curID === 4 ? tempValue : values.value4}
						</Button>
					</Grid>
					<Grid item>
						<Button style={paperStyle} id="5" onClick={displayNum}>
							{curID === 5 ? tempValue : values.value5}
						</Button>
					</Grid>
					<Grid item>
						<Button
							onClick={() => console.log("hello")}
							style={paperStyle}
							id="6"
							onClick={displayNum}>
							{curID === 6 ? tempValue : values.value6}
						</Button>
					</Grid>
					<Grid item>
						<Button style={paperStyle} id="7" onClick={displayNum}>
							{curID === 7 ? tempValue : values.value7}
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<Button
							style={{ ...paperStyle, width: 80 }}
							id="8"
							onClick={displayNum}>
							{curID === 8 ? tempValue : values.value8}
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={1}
					justify="flex-start"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<Button
							style={{ ...paperStyle, width: 80 }}
							id="9"
							onClick={displayNum}>
							{curID === 9 ? tempValue : values.value9}
						</Button>
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
};

export default Numbers;
