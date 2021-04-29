import React, { useRef, useEffect, useCallback } from "react";
import "./modalHowTo.css";
import { Button, Grid } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { GlobalContext } from "../AppContext";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

// react spring
import { useSpring, animated, config } from "react-spring";

const ModalHowTo = () => {
	const { showModalHowTo, setShowModalHowTo } = GlobalContext();

	const closeModal = () => {
		setShowModalHowTo(!showModalHowTo);
	};

	//react spring
	const animation = useSpring({
		config: {
			...config.wobbly,
		},
		opacity: showModalHowTo ? 1 : 0,
		transform: showModalHowTo ? `translateY(0%)` : `translateY(-100%)`,
	});

	return (
		<>
			{showModalHowTo ? (
				<div className="background">
					<animated.div style={animation} className="modal-wrapper">
						<Grid
							container
							direction="column"
							justify="space-between"
							className="grid-container">
							<Grid item className="top-bar">
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "10px",
									}}>
									<HelpOutlineIcon />
									<h4>How to play</h4>
								</div>

								<FiberManualRecordIcon
									onClick={closeModal}
									style={{ color: "#FF6666", cursor: "pointer" }}
								/>
							</Grid>
							<Grid item className="content">
								<h2>Tips</h2>
							</Grid>
							<Grid item className="bottom-buttons">
								<Button>Previous Tip</Button>
								<Button>Next Tip</Button>
								<Button onClick={closeModal}>Close</Button>
							</Grid>
						</Grid>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalHowTo;
