// Importing necessary hooks from React
import React, { createContext, useContext, useState } from "react";
// Importing initial data from a JSON file
import initialData from "../resources/data.json";

// Creating a context for the application
const AppContext = createContext();

// Custom hook to use the AppContext for easier consumption in components
export const useData = () => useContext(AppContext);

// AppProvider component that will wrap the entire application or part of it
export const AppProvider = ({ children }) => {
	// State for managing boards, lists, and tasks
	// Initial state is set from the imported JSON file
	const [boards, setBoards] = useState(initialData.boards);
	const [lists, setLists] = useState(initialData.lists);
	const [tasks, setTasks] = useState(initialData.tasks);

	// Returning the context provider with the application state
	// The value prop contains objects and functions for state management
	return (
		<AppContext.Provider
			value={{ boards, setBoards, lists, setLists, tasks, setTasks }}
		>
			{children}
		</AppContext.Provider>
	);
};
