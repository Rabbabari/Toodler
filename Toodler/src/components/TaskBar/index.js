import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const TaskBar = ({ hasSelectedTasks, selectedTasksLength, deleteTask }) => {
	const lenOne = selectedTasksLength === 1;
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight style={styles.toolbarAction}>
				<Text style={styles.toolbarActionText}>New</Text>
			</TouchableHighlight>
			<TouchableHighlight
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
					Move
				</Text>
			</TouchableHighlight>
			<TouchableHighlight style={styles.toolbarAction} disabled={!lenOne}>
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

export default TaskBar;
