import React, { useState, useLayoutEffect } from "react";
import { View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useData } from "../../services/AppContext";
import TaskBar from "../../components/TaskBar";
import TaskList from "../../components/TaskList";
import TaskAddModal from "../../components/TaskAddModal";
import TaskEditModal from "../../components/TaskEditModal";
import TaskMoveModal from "../../components/TaskMoveModal";

const TaskListDisplay = () => {
	const route = useRoute(); // set up the routing
	const listId = route.params?.listId; //id of the list currently open
	const listName = route.params?.listName; // name of the list currently open

	// A boolean flags to indicate if a modal is open or not
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);

	const { tasks, setTasks } = useData(); // All tasks, regardless of listId
	const filteredTasks = tasks.filter((task) => task.listId === listId); // All tasks filtered by lists
	const [selectedTasks, setSelectedTasks] = useState([]); // All selected tasks
	const [editingTask, setEditingTask] = useState(null); // the task being edited

	const { nextTaskId, setNextTaskId } = useData();
	const navigation = useNavigation(); //sets up the link to navigation

	//displays the name of the currently selected list
	useLayoutEffect(() => {
		if (listName) {
			navigation.setOptions({ title: listName });
		}
	}, [listName, navigation]);

	// Toggles isFinished between true and false
	const checkTask = (id) => {
		const updatedTasks = [...tasks]; // A copy of all tasks in the state

		const taskIndex = updatedTasks.findIndex((task) => task.id === id); //Find the index of the selected task
		const taskToChange = updatedTasks[taskIndex]; // The task being checked off
		if (taskIndex !== -1) {
			// Toggle isFinished between true and false
			taskToChange.isFinished = !taskToChange.isFinished;
		}
		setTasks(updatedTasks); // Update all tasks
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
		// Remove all selected tasks from the copy of all tasks
		const updatedTasks = [...tasks].filter(
			(task) => !selectedTasks.includes(task.id)
		);
		setTasks(updatedTasks); // Update the list of all tasks
		setSelectedTasks([]); // Clear the list of selected tasks
	};

	// Create a new task and add it to the state of all tasks
	const createNewTask = (name, description) => {
		const newTask = {
			// Create a new task
			id: nextTaskId,
			name: name,
			description: description,
			isFinished: false,
			listId: listId,
		};
		setNextTaskId(nextTaskId + 1);
		setTasks([...tasks, newTask]); // Add it to the state
	};

	// Updates a task with a new name and description
	const updateTask = (newName, newDescription) => {
		editingTask.name = newName;
		editingTask.description = newDescription;
		setSelectedTasks([]); // Clear the selected task
		setEditingTask(null); // Clears the editing task
	};

	// Sets the task to be edited. The only selected task becomes the task that will be edited
	const editSelectedTask = () => {
		const taskToEdit = tasks.find((list) => list.id === selectedTasks[0]);
		setEditingTask(taskToEdit); //Sets the editing task as the only selected task
		setIsEditModalOpen(true); // Opens the editing modal
	};

	// Moves all the selected task from their original list to another list
	const moveTasks = (newListId) => {
		// Copies the tasks, and updates the listId of the selected tasks
		const updatedTasks = [...tasks].map((task) => {
			if (selectedTasks.includes(task.id)) {
				return { ...task, listId: newListId };
			}
			return task;
		});
		setTasks(updatedTasks); // Sets the state will the tasks that have been moved
	};

	// The return from the task list display
	return (
		<View style={{ flex: 1 }}>
			<TaskBar
				// Toolbar for tasks
				hasSelectedTasks={selectedTasks.length > 0}
				selectedTasksLength={selectedTasks.length}
				deleteTask={() => deleteTask()}
				onAdd={() => {
					setIsAddModalOpen(true);
				}}
				onMove={() => {
					setIsMoveModalOpen(true);
				}}
				onUpdateTask={editSelectedTask}
			/>
			<TaskList
				// Lists all tasks within a certain list
				tasks={filteredTasks}
				selectedTasks={selectedTasks}
				onLongPress={(id) => onLongPress(id)} //make the task selected
				checkTask={(id) => checkTask(id)} //mark a task as done
			/>
			<TaskAddModal
				// A modal to add a new task
				isOpen={isAddModalOpen}
				closeModal={() => setIsAddModalOpen(false)}
				createTask={createNewTask}
			/>
			<TaskEditModal
				// A modal to edit a selected task
				isOpen={isEditModalOpen}
				closeModal={() => setIsEditModalOpen(false)}
				task={editingTask}
				updateTask={updateTask} // A function to update a task
			/>
			<TaskMoveModal
				// A modal to move tasks
				isOpen={isMoveModalOpen}
				closeModal={() => setIsMoveModalOpen(false)}
				moveTasks={moveTasks} // A function to move tasks
				taskListId={listId}
			/>
		</View>
	);
};

export default TaskListDisplay;
