import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Task from "../Task";

const TaskList = ({ tasks, selectedTasks, onLongPress, checkTask }) => {
	return (
		<View>
			<FlatList
				numColumns={1}
				data={tasks}
				renderItem={({ item }) => {
					return (
						<Task
							task={item}
							onLongPress={onLongPress}
							isSelected={selectedTasks.indexOf(item.id) !== -1}
							checkTask={checkTask}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

TaskList.protoTypes = {
	// An array of all tasks
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			description: PropTypes.string,
			isFinished: PropTypes.bool,
			listId: PropTypes.number,
		})
	).isRequired,
	// Array of the ids of the tasks that have been selected
	selectedTasks: PropTypes.arrayOf(PropTypes.number),
	// A function that is triggered on long press
	onLongPress: PropTypes.func.isRequired,
	// A function that is triggered when a task is checked off
	checkTask: PropTypes.func.isRequired,
};

export default TaskList;
