import React, { useEffect, useState } from "react";
import { GlobalContext } from "../AppContext";

const NubmberShufler = () => {
	const {
		getRandomInt,
		getRandomIntMid,
		getRandomIntLarge,
		curID,
	} = GlobalContext();
	const [num, setNum] = useState();

	useEffect(() => {
		const interval = setInterval(() => {
			if (curID < 8) {
				setNum(() => {
					return getRandomInt(9);
				});
			} else if (curID === 8) {
				setNum(() => {
					return getRandomIntMid();
				});
			} else if (curID === 9) {
				setNum(() => {
					return getRandomIntLarge();
				});
			}
		}, 100);
		return () => clearInterval(interval);
	}, []);
	return <div>{num}</div>;
};

export default NubmberShufler;
