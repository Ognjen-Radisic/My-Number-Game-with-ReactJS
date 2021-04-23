import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Numbers = () => {
	return (
		<>
			<Grid container spacing={1} justify="center" style={{ margin: "10px 0" }}>
				<Grid item>
					<Paper style={paperStyle} id="1">
						9
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={paperStyle} id="2">
						9
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={paperStyle} id="3">
						9
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
