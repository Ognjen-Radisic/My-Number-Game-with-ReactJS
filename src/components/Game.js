import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import LinearWithValueLabel from "./ProgressBar";
import { Typography } from "@material-ui/core";

const Game = () => {
	return (
		<Container
			maxWidth="xs"
			style={{ height: 500, backgroundColor: "#8ceabb" }}>
			<Typography variant="h4">Moj Broj</Typography>
			<MyButton color="blue">START</MyButton>
			<LinearWithValueLabel />
			<Grid container spacing={2} justify="space-between">
				<Grid item>
					<Paper style={{ height: 50, width: 100 }} />
				</Grid>
				<Grid item>
					<Paper style={{ height: 50, width: 100 }} />
				</Grid>
				<Grid item>
					<Paper style={{ height: 50, width: 100 }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Game;
