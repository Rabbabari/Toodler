import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

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
			<TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
				<Text style={styles.toolbarActionText}>New</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.toolbarAction}
				disabled={!hasSelectedTasks}
				onPress={onMove}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!hasSelectedTasks
							? { color: "rgba(155,155,155,.5)" }
							: {},
					]}
				>
					Move
				</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.toolbarAction}
				disabled={!lenOne}
				onPress={onUpdateTask}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!lenOne ? { color: "rgba(155,155,155,.5)" } : {},
					]}
				>
					Modify
				</Text>
			</TouchableHighlight>
			<TouchableHighlight
				onPress={deleteTask}
				style={styles.toolbarAction}
				disabled={!hasSelectedTasks}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!hasSelectedTasks
							? { color: "rgba(155,155,155,.5)" }
							: {},
					]}
				>
					Delete
				</Text>
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
