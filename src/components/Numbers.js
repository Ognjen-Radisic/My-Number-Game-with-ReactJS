import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";

const Numbers = () => {
	const allIds = [1, 2, 3, 4, 5, 6, 7];
	const [value, setValue] = useState(
		setInterval(() => {
			setValue(getRandomInt(10));
		}, 100)
	);
	const [value1, setValue1] = useState(50);
	const [curID, setCurID] = useState(1);

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	const addOneToIdCounter = () => {
		setCurID(curID + 1);
		console.log(curID);
	};

	return (
		<>
			<MyButton color="red" onClick={addOneToIdCounter}>
				stop
			</MyButton>
			<Grid container spacing={1} justify="center" style={{ margin: "10px 0" }}>
				<Grid item>
					<Paper style={paperStyle} data-id="1">
						{curID === 1 ? value : value1}
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={paperStyle} data-id="2">
						{curID === 1 ? value : value1}
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={paperStyle} data-id="3">
						{curID === 1 ? value : value1}
					</Paper>
				</Grid>
			</Grid>
			<div className="numbers-container">
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<Paper style={paperStyle} id="4">
							9
						</Paper>
					</Grid>
					<Grid item>
						<Paper style={paperStyle} id="5">
							9
						</Paper>
					</Grid>
					<Grid item>
						<Paper
							onClick={() => console.log("hello")}
							style={paperStyle}
							id="6">
							9
						</Paper>
					</Grid>
					<Grid item>
						<Paper style={paperStyle} id="7">
							9
						</Paper>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<Paper style={{ ...paperStyle, width: 80 }} id="8">
							25
						</Paper>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={1}
					justify="center"
					style={{ margin: "10px 0" }}>
					<Grid item>
						<Paper style={{ ...paperStyle, width: 80 }} id="9">
							100
						</Paper>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

const paperStyle = {
	display: "flex",
	height: 40,
	width: 40,
	alignItems: "center",
	justifyContent: "center",
	fontSize: "150%",
	fontWeight: 700,
};

export default Numbers;
