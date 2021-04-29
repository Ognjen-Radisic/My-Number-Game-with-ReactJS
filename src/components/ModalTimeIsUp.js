import { Button, Grid } from "@material-ui/core";
import { animated, config, useSpring } from "@react-spring/web";
import React from "react";
import { GlobalContext } from "../AppContext";
import "./modalHowTo.css";

const ModalTimeIsUp = () => {
	const { progress, everythingDefault } = GlobalContext();

	const animation = useSpring({
		config: {
			...config.slow,
		},
		opacity: progress === 100 ? 1 : 0,
		transform: progress === 100 ? `translateY(0%)` : `translateY(100%)`,
	});

	return (
		<>
			{progress === 100 ? (
				<div className="background">
					<animated.div
						style={{ ...animation, width: "250px" }}
						className="modal-wrapper">
						<Grid container direction="column">
							<Grid item>
								<h2>Time ran out..</h2>
							</Grid>
							<Grid item style={{ marginBottom: "10px" }}>
								<Button
									variant="contained"
									color="primary"
									onClick={() => everythingDefault()}>
									Play Again
								</Button>
							</Grid>
						</Grid>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalTimeIsUp;
