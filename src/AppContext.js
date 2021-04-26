import React, { useContext, useState } from "react";

//create variables for context and set initial value
//this variable has method .Provider and .Consumer
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [resultField, setResultField] = useState("");
	//string with numbers btn id, to enable single deletion if we have 2 or 3 digit numbers
	const [stringID, setStringID] = useState("");
	const [operationsArray, setOperations] = useState(["+", "-", "*", "/"]);
	const [brackets, setBrackets] = useState(["(", ")"]);

	//brackets counters, number of back brackets can never exceed number of front brackets
	const [frontBrackets, setFrontBrackets] = useState(0);
	const [backBrackets, setBackBrackets] = useState(0);

	const [targetNum, setTargetNum] = useState(-1);

	const [curID, setCurID] = useState(1);
	const [values, setValues] = useState({
		value1: null,
		value2: null,
		value3: null,
		value4: null,
		value5: null,
		value6: null,
		value7: null,
		value8: null,
		value9: null,
	});
	const [btnDisable, setBtnDisable] = useState({
		disabled1: true,
		disabled2: true,
		disabled3: true,
		disabled4: true,
		disabled5: true,
		disabled6: true,
		disabled7: true,
		disabled8: true,
		disabled9: true,
	});

	return (
		<AppContext.Provider
			value={{
				values,
				setValues,
				btnDisable,
				setBtnDisable,
				curID,
				setCurID,
				resultField,
				setResultField,
				stringID,
				setStringID,
				operationsArray,
				brackets,
				frontBrackets,
				setFrontBrackets,
				backBrackets,
				setBackBrackets,
				targetNum,
				setTargetNum,
			}}>
			{children}
		</AppContext.Provider>
	);
};

const GlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, GlobalContext };
