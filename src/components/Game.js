import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import LinearWithValueLabel from "./ProgressBar";
import { Typography } from "@material-ui/core";
import "./game.css";
import Numbers from "./Numbers";
import Operations from "./Operations";
import Input from "./Input";

const Game = () => {
	return (
		<Container
			maxWidth="sm"
			style={{
				height: 500,
				backgroundColor: "#8ceabb",
				marginTop: "100px",
				borderRadius: "10px",
				paddingTop: "5px",
			}}>
			{/* TITLE MyNumber */}
			<Typography variant="h4" style={{ margin: "10px 0" }}>
				Moj Broj
			</Typography>

			{/* Start the game, and stop each number in place */}
			<MyButton color="blue">START</MyButton>

			{/* timer that starts after the last digit loaded, 50 seconds timer */}
			{/* <LinearWithValueLabel /> */}

			{/* 3 individual digits at the top that make target number, below, 4 single digits, one 'medium' number, one 'large' number */}
			<Numbers />

			{/* divide lower field in two parts, on the left user input, on the right mathematical operations */}
			<Grid
				container
				spacing={1}
				justify="space-around"
				style={{ margin: "10px 0", height: "40%" }}>
				{/* Left part with user input */}
				<Grid item>
					<Input />
				</Grid>

				{/* Right part with mathematical operations */}
				<Grid item>
					<Operations />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Game;
