import React, { useState, useLayoutEffect } from "react";
import { View, Text, TouchableHighlight, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import TaskBar from "../../components/TaskBar";
import TaskList from "../../components/TaskList";
import TaskAddModal from "../../components/TaskAddModal";
import TaskEditModal from "../../components/TaskEditModal";
import TaskMoveModal from "../../components/TaskMoveModal";
import { useData } from "../../services/AppContext";

const TaskListDisplay = () => {
	const route = useRoute();
	const listId = route.params?.listId;
	const listName = route.params?.listName;
	// A boolean flags to indicate if a modal is open or not
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);

	// All tasks, regardless of listId
	const { tasks, setTasks } = useData();
	// All tasks filtered by lists
	const filteredTasks = tasks.filter((task) => task.listId === listId);
	// All selected tasks
	const [selectedTasks, setSelectedTasks] = useState([]);
	const [tasksToMove, setTasksToMove] = useState([]);
	const [editingTask, setEditingTask] = useState(null);

	const navigation = useNavigation();

	useLayoutEffect(() => {
		if (listName) {
			navigation.setOptions({ title: listName });
		}
	}, [listName, navigation]);
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
		const tasksCopy = [...tasks];
		const updatedTasks = tasksCopy.filter(
			(task) => !selectedTasks.includes(task.id)
		);
		setTasks(updatedTasks);
		setSelectedTasks([]);
	};

	const createNewTask = (name, description) => {
		const newTask = {
			id: Math.max(...tasks.map((l) => l.id)) + 1,
			name: name,
			description: description,
			isFinished: false,
			listId: listId,
		};
		setTasks([...tasks, newTask]);
	};

	const updateTask = (newName, newDescription) => {
		editingTask.name = newName;
		editingTask.description = newDescription;
	};

	const editSelectedTask = () => {
		const taskToEdit = tasks.find((list) => list.id === selectedTasks[0]);
		setEditingTask(taskToEdit);
		setIsEditModalOpen(true);
	};

	const moveSelectedTasks = () => {
		const taskCopy = [...tasks];
		const filteredMoveTasks = taskCopy.filter((task) =>
			selectedTasks.includes(task.id)
		);
		setTasksToMove(filteredMoveTasks);
		setIsMoveModalOpen(true);
	};

	const moveTask = (newListId) => {
		// Move all selected tasks to another list
		// Display all lists to chose which to move to
		// change listId for selected tasks to the new list

		const updatedTasks = [...tasks].map((task) => {
			if (selectedTasks.includes(task.id)) {
				return { ...task, listId: newListId };
			}
			return task;
		});
		setTasks(updatedTasks);
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
				onMove={moveSelectedTasks}
				onUpdateTask={editSelectedTask}
			/>
			<TaskList
				onCheck={(id) => onTaskCheck(id)}
				onLongPress={(id) => onLongPress(id)}
				tasks={filteredTasks}
				selectedTasks={selectedTasks}
				checkTask={(id) => checkTask(id)}
			/>
			<TaskAddModal
				isOpen={isAddModalOpen}
				closeModal={() => setIsAddModalOpen(false)}
				createTask={createNewTask}
			/>
			<TaskEditModal
				isOpen={isEditModalOpen}
				closeModal={() => setIsEditModalOpen(false)}
				task={editingTask}
				updateTask={updateTask}
			/>
			<TaskMoveModal
				isOpen={isMoveModalOpen}
				closeModal={() => setIsMoveModalOpen(false)}
				moveTask={moveTask}
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
