import React, { useContext, useState } from "react";

//create variables for context and set initial value
//this variable has method .Provider and .Consumer
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [resultField, setResultField] = useState("");
	const [stringID, setStringID] = useState("");
	const [operationsArray, setOperations] = useState(["+", "-", "*", "/"]);
	const [brackets, setBrackets] = useState(["(", ")"]);

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
		disabled1: false,
		disabled2: false,
		disabled3: false,
		disabled4: false,
		disabled5: false,
		disabled6: false,
		disabled7: false,
		disabled8: false,
		disabled9: false,
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
			}}>
			{children}
		</AppContext.Provider>
	);
};

const GlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, GlobalContext };
