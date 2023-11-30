import React, { createContext, useContext, useState } from "react";
import initialData from "../resources/data.json";

const AppContext = createContext();

export const useData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [boards, setBoards] = useState(initialData.boards);
	const [lists, setLists] = useState(initialData.lists);
	const [tasks, setTasks] = useState(initialData.tasks);

	return (
		<AppContext.Provider
			value={{ boards, setBoards, lists, setLists, tasks, setTasks }}
		>
			{children}
		</AppContext.Provider>
	);
};
