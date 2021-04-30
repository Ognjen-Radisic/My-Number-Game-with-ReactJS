import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button, Container } from "@material-ui/core";

const LinkToRepo = () => {
	return (
		<Container
			maxWidth="sm"
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<h2 style={{ color: "#050A30", fontWeight: "50" }}>
				by{" "}
				<a
					style={{ color: "inherit", textDecoration: "none" }}
					href="https://github.com/Ognjen-Radisic">
					Ognjen Radisic
				</a>
			</h2>
			<Button
				variant="contained"
				style={{
					background: "green",
					height: "30px",
					color: "#000C66",
					backgroundColor: "#7EC8E3",
					fontWeight: "1000",
				}}
				onClick={() => window.open("https://www.google.com/", "_blank")}>
				<FavoriteIcon
					style={{ fontSize: "15px", marginRight: "5px", marginBottom: "2px" }}
				/>
				Code
			</Button>
		</Container>
	);
};

export default LinkToRepo;
