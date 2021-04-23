import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import LinearWithValueLabel from "./ProgressBar";
import { Typography } from "@material-ui/core";
import "./game.css";
import Numbers from "./Numbers";
import Operations from "./Operations";

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
			<Typography variant="h4" style={{ margin: "10px 0" }}>
				Moj Broj
			</Typography>
			<MyButton color="blue">START</MyButton>
			<LinearWithValueLabel />
			<Numbers />
			<Grid
				container
				spacing={1}
				justify="space-around"
				style={{ margin: "10px 0" }}>
				<Grid item>input</Grid>
				<Grid item>
					<Operations />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Game;
