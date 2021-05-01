import React from "react";
import "./tipSection.css";
//tip data to pass as prop into tip section
import { tipData } from "./TipData";

const TipSection = ({ currentTip }) => {
	return (
		<section className="tip-section">
			<div>Tip: {currentTip}</div>
			<div className="tip-text-section">{tipData[`tip${currentTip}`].text}</div>
			<div className="tip-image-section">
				<img src={tipData[`tip${currentTip}`].image} alt="tip" />
			</div>
		</section>
	);
};

export default TipSection;
