import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyButton from "./StyledButton";
import { Button, Typography } from "@material-ui/core";
import "./game.css";
import Numbers from "./Numbers";
import Operations from "./Operations";
import ResultFieldDeleteConfirm from "./ResultFieldDeleteConfirm";
import { GlobalContext } from "../AppContext";
import LinearWithValueLabel, {
	LinearProgressWithLabel,
} from "./ProgressBar.js";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Game = ({ handleFullscreen }) => {
	const { curID, everythingDefault } = GlobalContext();

	const restartGame = () => {
		everythingDefault();
	};

	return (
		<Container
			maxWidth="sm"
			style={{
				height: "550px",
				background:
					"linear-gradient(170deg, rgb(13, 320, 245), rgb(5, 56, 224) 80%) no-repeat center center fixed",
				marginTop: "100px",
				borderRadius: "10px",
				paddingTop: "5px",
				boxShadow: "6px 5px #292929",
				position: "relative",
			}}>
			{/* TITLE MyNumber */}
			<Typography
				variant="h4"
				style={{
					margin: "10px 0",
					fontFamily: "Kanit , sans-serif",
				}}>
				Moj Broj
			</Typography>

			{/* Fullscreen functionality */}
			<div style={{ position: "absolute", top: 20, right: 3 }}>
				{handleFullscreen.active ? (
					<Button size="small" onClick={handleFullscreen.exit}>
						<FullscreenExitIcon onClick={handleFullscreen.exit} />
					</Button>
				) : (
					<Button size="small" onClick={handleFullscreen.enter}>
						<FullscreenIcon />
					</Button>
				)}
			</div>

			{/* How to play button */}
			<div style={{ position: "absolute", top: 20, left: 3 }}>
				<Button size="small">
					<HelpOutlineIcon />
				</Button>
			</div>

			{/* Restart game and put all values in default state */}
			<MyButton
				color="blue"
				disabled={curID > 1 ? false : true}
				onClick={restartGame}>
				RESTART
			</MyButton>

			{/* timer that starts after last digit is loaded, 60 seconds timer */}
			{curID >= 10 ? (
				<LinearWithValueLabel />
			) : (
				<LinearProgressWithLabel value={0} />
			)}

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
					<ResultFieldDeleteConfirm />
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
