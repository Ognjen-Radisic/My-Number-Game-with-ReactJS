import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { animated, config, useSpring } from "@react-spring/web";
import { GlobalContext } from "../AppContext";

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
		transform: resultModalVisible ? `translateY(0%)` : `translateY(-100%)`,
	});

	return (
		<>
			{resultModalVisible ? (
				<div className="background">
					<animated.div style={animation} className="modal-wrapper">
						<Grid container direction="column" className="grid-container">
							<Grid item>
								<h3>RESULT</h3>
								<h4>Goal number: {targetNum}</h4>
							</Grid>
							<Grid item>
								<h4>Your result:</h4>
								<h4>
									{resultField} = {eval(resultField)}
								</h4>
							</Grid>
							<Grid item>
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
								<h4>
									{isResultCorrect
										? progress <= 50
											? "GOLDEN TROPHY! Well done, more then half of your time remained."
											: "SILVER TROPHY! Well done you solved it, try to do it faster next time and earn golden trophy."
										: "You made a mistake, this time.."}
								</h4>
							</Grid>
							<Grid item className="bottom-buttons">
								<Button onClick={() => everythingDefault()}>Play Again</Button>
							</Grid>
						</Grid>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalConfirmResult;
