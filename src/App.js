import "./App.css";
import Game from "./components/Game";
import Button from "@material-ui/core/Button";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #FE6b8B, #FF8E53)",
		color: "white",
	},
});

function MainWrapper() {
	const classes = useStyles();
	return <Button className={classes.root}>Hello</Button>;
}

function App() {
	return (
		<div className="App">
			<Button
				startIcon={<PlayCircleFilledWhiteIcon />}
				variant="contained"
				color="primary">
				START GAME
			</Button>
			<Game />
			<MainWrapper />
		</div>
	);
}

export default App;
