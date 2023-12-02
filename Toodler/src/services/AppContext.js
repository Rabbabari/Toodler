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
	const [nextBoardId, setNextBoardId] = useState(
		boards[boards.length - 1].id + 1
	);
	const [nextListId, setNextListId] = useState(
		lists[lists.length - 1].id + 1
	);
	const [nextTaskId, setNextTaskId] = useState(
		tasks[tasks.length - 1].id + 1
	);
	// Returning the context provider with the application state
	// The value prop contains objects and functions for state management
	return (
		<AppContext.Provider
			value={{
				boards,
				setBoards,
				lists,
				setLists,
				tasks,
				setTasks,
				nextBoardId,
				setNextBoardId,
				nextListId,
				setNextListId,
				nextTaskId,
				setNextTaskId,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
