import React, { useState } from "react";
import { View, Text, TouchableHighlight, FlatList } from "react-native";
import styles from "./styles";
import TaskBar from "../../components/TaskBar";
import TaskList from "../../components/TaskList";
import data from "../../resources/data.json";

// Get all tasks

// get tasks from the chosen list

const TaskListDisplay = () => {
	// TODO: get the id of the list that was chosen before
	const ChosenList = 1;

	// All tasks filtered by lists
	const AllTasks = data.tasks
		.filter(function (element) {
			return element.listId == ChosenList;
		})
		.map((tasks) => tasks);

	// All tasks within the application directory
	const [tasks, setTask] = useState(AllTasks);

	const onTaskCheck = (id) => {
		// If the task is not finished, change it to finished
		// Else if the task is finished, change it to not finished
	};

	return (
		<View>
			<TaskBar />
			<TaskList onCheck={(id) => onTaskCheck(id)} tasks={tasks} />
		</View>
	);
};

// Display tasks
// Create new task
// Delete a task
// Move task from one list to another
// Modify a task

export default TaskListDisplay;
