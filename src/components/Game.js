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
import ModalHowTo from "./ModalHowTo";
import ModalTimeIsUp from "./ModalTimeIsUp";
import ModalConfirmResult from "./ModalConfirmResult";
import SnackBarError from "./SnackBarError";

const Game = ({ handleFullscreen }) => {
	const {
		curID,
		everythingDefault,
		showModalHowTo,
		setShowModalHowTo,
		progress,
		resultModalVisible,
	} = GlobalContext();

	const restartGame = () => {
		everythingDefault();
	};

	const showModal = () => {
		setShowModalHowTo(!showModalHowTo);
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
				My Number
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
				<Button size="small" onClick={showModal}>
					<HelpOutlineIcon />
				</Button>
			</div>
			{/* Modal HOW TO Play */}
			<ModalHowTo />

			{/* Restart game and put all values in default state */}
			<MyButton
				color="blue"
				disabled={curID > 1 ? false : true}
				onClick={restartGame}>
				RESTART
			</MyButton>

			{/* timer that starts after last digit is loaded, 60 seconds timer */}
			{/* we added result modal visible to stop the timer when confirm button is clicked*/}
			{curID >= 10 && progress < 100 && !resultModalVisible ? (
				//this one is dynamic
				<LinearWithValueLabel />
			) : (
				// this one is static
				<LinearProgressWithLabel value={progress} />
			)}
			{/* Modal when the time is up */}
			<ModalTimeIsUp />

			{/* Modal when confirm button is clicked if the result field is not in error then we show snackbar */}
			<ModalConfirmResult />

			{/* Pop a snackbar when result field is confirmed and contains error, FindDOMNode warning will be resolved in material ui version 5, according to the documentation*/}
			<SnackBarError />

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
