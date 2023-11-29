import React, { useState } from "react";
import { View, Text, TouchableHighlight, FlatList } from "react-native";
import styles from "./styles";
import TaskBar from "../../components/TaskBar";
import TaskList from "../../components/TaskList";
import data from "../../resources/data.json";

// TODO: some tasks are already marked as finished. figure out how to make them checked
// Get all tasks

// get tasks from the chosen list

const TaskListDisplay = () => {
	const route = useRoute();
	const listId = route.params?.listId;

	// All tasks filtered by lists
	const AllTasks = data.tasks
		.filter(function (element) {
			return element.listId == listId;
		})
		.map((tasks) => tasks);

	// All tasks within the application directory
	const [tasks, setTask] = useState(AllTasks);
	// All selected tasks
	const [selectedTasks, setSelectedTasks] = useState([]);

	const onTaskCheck = (id) => {
		// If the task is not finished, change it to finished
		// Else if the task is finished, change it to not finished
	};

	const onLongPress = (id) => {
		if (selectedTasks.indexOf(id) !== -1) {
			// The task is already in the list
			setSelectedTasks(selectedTasks.filter((task) => task !== id));
		} else {
			// Add it to the list
			setSelectedTasks([...selectedTasks, id]);
		}
	};

	return (
		<View>
			<TaskBar hasSelectedTasks={selectedTasks.length > 0} />
			<TaskList
				onCheck={(id) => onTaskCheck(id)}
				onLongPress={(id) => onLongPress(id)}
				tasks={tasks}
				selectedTasks={selectedTasks}
			/>
		</View>
	);
};

// Display tasks
// Create new task
// Delete a task
// Move task from one list to another
// Modify a task

export default TaskListDisplay;
