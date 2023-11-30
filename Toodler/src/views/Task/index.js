import React, { useState } from "react";
import { View, Text, TouchableHighlight, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import TaskBar from "../../components/TaskBar";
import TaskList from "../../components/TaskList";
import TaskAddModal from "../../components/TaskAddModal";
import data from "../../resources/data.json";

const TaskListDisplay = () => {
	const route = useRoute();
	const listId = route.params?.listId;
	// A boolean flag to indicate if the modal is open or not
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	// All tasks, regardless of listId
	const [allTasks, setAllTasks] = useState(data.tasks);

	// All tasks filtered by lists
	const filteredTasks = data.tasks
		.filter(function (element) {
			return element.listId == listId;
		})
		.map((tasks) => tasks);

	// All tasks within the application directory
	const [tasks, setTasks] = useState(filteredTasks);
	// All selected tasks
	const [selectedTasks, setSelectedTasks] = useState([]);

	// Toggles isFinished between true and false
	const checkTask = (id) => {
		const updatedTasks = [...tasks];

		const taskIndex = updatedTasks.findIndex((task) => task.id === id);
		const taskToChange = updatedTasks[taskIndex];
		if (taskIndex !== -1) {
			if (taskToChange.isFinished) {
				taskToChange.isFinished = false;
			} else {
				taskToChange.isFinished = true;
			}
		}
		setTasks(updatedTasks);
	};

	// Adds a task to the array of selected tasks
	const onLongPress = (id) => {
		if (selectedTasks.indexOf(id) !== -1) {
			// The task is already in the list
			setSelectedTasks(selectedTasks.filter((task) => task !== id));
		} else {
			// Add it to the list
			setSelectedTasks([...selectedTasks, id]);
		}
	};

	// Delete a task from the state
	const deleteTask = () => {
		// TODO figure out why it wont delete from the state permenantly
		// console.log("tasks");
		// tasks.forEach((task) => {
		// 	console.log(task);
		// });
		const tasksCopy = [...tasks];
		// console.log("tasksCopy");
		// tasksCopy.forEach((task) => {
		// 	console.log(task);
		// });
		const updatedTasks = tasksCopy.filter(
			(task) => !selectedTasks.includes(task.id)
		);
		// console.log("updated tasks");
		// updatedTasks.forEach((task) => {
		// 	console.log(task);
		// });
		setTasks(updatedTasks);
		setSelectedTasks([]);
	};
	const createNewTask = (name, description) => {
		const newTask = {
			id: Math.max(...allTasks.map((l) => l.id)) + 1,
			name: name,
			description: description,
			isFinished: false,
			listId: listId,
		};
		setAllTasks([...allTasks, newTask]);
		setTasks([...tasks, newTask]);
	};

	const moveTask = () => {
		// TODO
		// Display all lists to chose which to move to
		// change listId for selected tasks to the new list
		const tasksCopy = [...tasks];
		const tasksToMove = tasksCopy.filter(
			(task) => !selectedTasks.includes(task.id)
		);
		const newListId = getListId();
		tasksToMove.forEach((task) => {
			task.listId = newListId;
		});
	};
	return (
		<View style={{ flex: 1 }}>
			<TaskBar
				hasSelectedTasks={selectedTasks.length > 0}
				selectedTasksLength={selectedTasks.length}
				deleteTask={() => deleteTask()}
				onAdd={() => {
					setIsAddModalOpen(true);
				}}
			/>
			<TaskList
				onCheck={(id) => onTaskCheck(id)}
				onLongPress={(id) => onLongPress(id)}
				tasks={tasks}
				selectedTasks={selectedTasks}
				checkTask={(id) => checkTask(id)}
			/>
			<TaskAddModal
				isOpen={isAddModalOpen}
				closeModal={() => setIsAddModalOpen(false)}
				createTask={createNewTask}
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
