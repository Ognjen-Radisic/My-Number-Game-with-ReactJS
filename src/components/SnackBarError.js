import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../AppContext";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function SnackBarError() {
	const classes = useStyles();
	const { openSnackbar, setOpenSnackbar, messageSnackbar } = GlobalContext();

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackbar(false);
	};

	return (
		<div className={classes.root}>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={4000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity="error">
					{messageSnackbar}
				</Alert>
			</Snackbar>
		</div>
	);
}
