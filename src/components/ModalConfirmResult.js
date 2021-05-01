import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { animated, config, useSpring } from "@react-spring/web";
import { GlobalContext } from "../AppContext";
import "./modalHowTo.css";

//import images
import golden_trophy from "../resources/trophy.svg";
import silver_trophy from "../resources/silver-cup.svg";
import error_trophy from "../resources/x-button.svg";

const ModalConfirmResult = () => {
	const {
		resultModalVisible,
		everythingDefault,
		isResultCorrect,
		progress,
		resultField,
		targetNum,
	} = GlobalContext();

	//react spring
	const animation = useSpring({
		config: {
			...config.wobbly,
		},
		opacity: resultModalVisible ? 1 : 0,
		transform: resultModalVisible ? `translateX(0%)` : `translateX(-100%)`,
	});

	return (
		<>
			{resultModalVisible ? (
				<div className="background">
					<animated.div
						style={{ ...animation, width: "340px" }}
						className="modal-wrapper">
						<Grid
							container
							direction="column"
							className="grid-container"
							justify="space-between"
							style={{ backgroundColor: "#C3CEDA" }}>
							<Grid
								item
								style={{ padding: "30px", backgroundColor: "#0C4160" }}>
								{/* First changable thing in modal, 3 variants */}
								<img
									src={
										isResultCorrect
											? progress <= 50
												? golden_trophy
												: silver_trophy
											: error_trophy
									}
									alt="trophy"
									style={{ width: "80px", height: "80px" }}
								/>
							</Grid>
							<Grid item>
								{/* Second changable thing in modal, 3 variants */}

								{isResultCorrect ? (
									progress <= 50 ? (
										<div>
											<h3>GOLDEN TROPHY!</h3>
											<h4>
												Well done you are FAST, more then half of your time
												remained.
											</h4>
										</div>
									) : (
										<div>
											<h3>SILVER TROPHY!</h3>
											<h4>
												Well done you solved it, try to do it faster next time
												and earn golden trophy.
											</h4>
										</div>
									)
								) : (
									<h3>You made a mistake, this time..</h3>
								)}
							</Grid>
							<Grid item>
								<div>
									{"Number to find:     "}
									{targetNum}
								</div>
							</Grid>
							<Grid item>
								<div>Your result</div>
								<div>
									{resultField} = {eval(resultField)}
								</div>
							</Grid>

							<Grid
								item
								className="bottom-buttons"
								style={{ marginBottom: "10px", justifyContent: "center" }}>
								<Button
									variant="outlined"
									onClick={() => everythingDefault()}
									style={{
										backgroundColor: "#0C4160",
										color: "white",
										fontWeight: "800",
									}}>
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

export default ModalConfirmResult;
