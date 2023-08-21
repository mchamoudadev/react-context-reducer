import { createContext, useReducer } from "react";
import { initialState, globalReducer } from "./globalReducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
