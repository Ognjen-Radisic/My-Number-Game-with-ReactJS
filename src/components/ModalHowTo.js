import React from "react";
import "./modalHowTo.css";
import { Button, Container, Grid } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { GlobalContext } from "../AppContext";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const ModalHowTo = () => {
	const { showModalHowTo, setShowModalHowTo } = GlobalContext();

	const closeModal = () => {
		setShowModalHowTo(!showModalHowTo);
	};

	return (
		<>
			{showModalHowTo ? (
				<div className="background" onClick={closeModal}>
					<Container
						maxWidth="xs"
						className="modal-wrapper"
						style={{ padding: 0 }}>
						<Grid
							container
							direction="column"
							justify="space-between"
							className="grid-container">
							<Grid item className="top-bar" alignItems="center">
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
								<h2>Content</h2>
							</Grid>
							<Grid item className="bottom-buttons">
								<Button>Previous Tip</Button>
								<Button>Next Tip</Button>
								<Button onClick={closeModal}>Close</Button>
							</Grid>
						</Grid>
					</Container>
				</div>
			) : null}
		</>
	);
};

export default ModalHowTo;
