import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "../../styles/toolbar";

const TaskBar = ({
	hasSelectedTasks,
	selectedTasksLength,
	deleteTask,
	onAdd,
	onMove,
	onUpdateTask,
}) => {
	const lenOne = selectedTasksLength === 1;

	return (
		<View styleName="horzontal" style={styles.toolbar}>
			{/* Create a new task */}
			<TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
				<Text style={styles.toolbarActionText}>Create</Text>
			</TouchableHighlight>
			{/* Move tasks */}
			<TouchableHighlight
				style={[
					styles.toolbarAction,
					!hasSelectedTasks ? { backgroundColor: "#ff8da0" } : {},
				]}
				disabled={!hasSelectedTasks}
				onPress={onMove}
			>
				<Text style={styles.toolbarActionText}>Move</Text>
			</TouchableHighlight>
			{/* Update a task */}
			<TouchableHighlight
				style={[
					styles.toolbarAction,
					!lenOne ? { backgroundColor: "#ff8da0" } : {},
				]}
				disabled={!lenOne}
				onPress={onUpdateTask}
			>
				<Text style={styles.toolbarActionText}>Edit</Text>
			</TouchableHighlight>
			{/* Delete tasks */}
			<TouchableHighlight
				style={[
					styles.toolbarAction,
					!hasSelectedTasks ? { backgroundColor: "#ff8da0" } : {},
				]}
				onPress={deleteTask}
				disabled={!hasSelectedTasks}
			>
				<Text style={styles.toolbarActionText}>Delete</Text>
			</TouchableHighlight>
		</View>
	);
};

TaskBar.protoType = {
	// Has a task been selected
	hasSelectedTasks: PropTypes.bool.isRequired,
	// How many tasks have been selected
	hasSelectedTasksLength: PropTypes.number.isRequired,
	// A function to delete a task
	deleteTask: PropTypes.func.isRequired,
	// A function that opens the modal when a new task is created
	onOpen: PropTypes.func.isRequired,
	// A function that triggers when a task is to be moved
	onMove: PropTypes.func.isRequired,
	// A function that is triggered when tasks a is changed
	onChange: PropTypes.func.isRequired,
};

export default TaskBar;
