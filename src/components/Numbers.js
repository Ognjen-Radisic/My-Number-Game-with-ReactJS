import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import { Button } from "@material-ui/core";

const Numbers = () => {
	const allIds = [1, 2, 3, 4, 5, 6, 7];
	const [tempValue, setTempValue] = useState(
		setInterval(() => {
			setTempValue(getRandomInt(10));
		}, 100)
	);
	const [curID, setCurID] = useState(0);
	const [values, setValues] = useState({
		value1: null,
		value2: null,
		value3: null,
		value4: null,
		value5: null,
		value6: null,
		value7: null,
		value8: null,
		value9: null,
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
					<Button style={paperStyle} data-id="1">
						{curID === 1 ? tempValue : values.value1}
					</Button>
				</Grid>
				<Grid item>
					<Button style={paperStyle} data-id="2">
						{curID === 2 ? tempValue : values.value2}
					</Button>
				</Grid>
				<Grid item>
					<Button style={paperStyle} data-id="3">
						{curID === 3 ? tempValue : values.value3}
					</Button>
				</Grid>
			</Grid>
			<div className="numbers-container">
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<Button style={paperStyle} id="4">
							{curID === 4 ? tempValue : values.value4}
						</Button>
					</Grid>
					<Grid item>
						<Button style={paperStyle} id="5">
							{curID === 5 ? tempValue : values.value5}
						</Button>
					</Grid>
					<Grid item>
						<Button
							onClick={() => console.log("hello")}
							style={paperStyle}
							id="6">
							{curID === 6 ? tempValue : values.value6}
						</Button>
					</Grid>
					<Grid item>
						<Button style={paperStyle} id="7">
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
						<Button style={{ ...paperStyle, width: 80 }} id="8">
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
						<Button style={{ ...paperStyle, width: 80 }} id="9">
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
