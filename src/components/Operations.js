import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Operations = () => {
	return (
		<div className="grid-operations">
			<Grid container direction="column" spacing={1}>
				<Grid item>
					<Button variant="contained" color="primary" fontSize="30">
						+
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary">
						*
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary">
						(
					</Button>
				</Grid>
			</Grid>

			<Grid container direction="column" spacing={1}>
				<Grid item>
					<Button variant="contained" color="primary">
						-
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary">
						/
					</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary">
						)
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Operations;
