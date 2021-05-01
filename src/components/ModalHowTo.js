import React, { useRef, useEffect, useCallback, useState } from "react";
import "./modalHowTo.css";
import { Button, Grid } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { GlobalContext } from "../AppContext";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

// react spring
import { useSpring, animated, config } from "react-spring";

import TipSection from "./TipSection";

const ModalHowTo = () => {
	const { showModalHowTo, setShowModalHowTo } = GlobalContext();
	const modalRef = useRef();

	///////////tip traversing logic//////////
	const [currentTip, setCurrentTip] = useState(1);

	const nextTip = () => {
		if (currentTip === 7) {
			return;
		} else {
			setCurrentTip(currentTip + 1);
		}
	};
	const prevTip = () => {
		if (currentTip === 0) {
			return;
		} else {
			setCurrentTip(currentTip - 1);
		}
	};
	/////////////////////////////////////////////

	//when click on background close modal
	const closeModalOnBackground = (e) => {
		if (modalRef.current === e.target) {
			setShowModalHowTo(false);
		}
	};

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

	//exit by pressing escape key
	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModalHowTo) {
				setShowModalHowTo(false);
				console.log("You pressed escape");
			}
		},
		[setShowModalHowTo, showModalHowTo]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{showModalHowTo ? (
				<div
					className="background"
					ref={modalRef}
					onClick={closeModalOnBackground}>
					<animated.div style={animation} className="modal-wrapper">
						<Grid
							container
							direction="column"
							justify="space-between"
							className="grid-container"
							style={{ backgroundColor: "#DBE8D8", borderRadius: "15px" }}>
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
								<TipSection currentTip={currentTip} />
							</Grid>
							<Grid item className="bottom-buttons">
								<Button
									variant="contained"
									onClick={prevTip}
									disabled={currentTip === 0 ? true : false}>
									Previous Tip
								</Button>
								<Button
									variant="contained"
									onClick={nextTip}
									disabled={currentTip === 7 ? true : false}
									style={{ backgroundColor: "#08313a", color: "white" }}>
									Next Tip
								</Button>
							</Grid>
						</Grid>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalHowTo;
