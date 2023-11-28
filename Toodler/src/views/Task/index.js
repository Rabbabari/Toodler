import React from "react";
import { View, Text, TouchableHighlight, FlatList } from "react-native";
import styles from "./styles";
import data from "../../resources/data.json";

// Get all tasks
const AllTasks = data.tasks.map((tasks) => tasks);
// TODO: get the id of the list that was chosen before
const ChosenList = 1;

// get tasks from the chosen list
const FilteredTasks = AllTasks.filter(function (element) {
	return element.listId == ChosenList;
});

const TaskList = ({ tasks }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>all tasks</Text>
			<FlatList
				numColumns={1}
				data={tasks}
				renderItem={({ item }) => {
					return; //return something
				}}
				keyExtractor={(task) => task.id}
			/>
		</View>
	);
};

// Display tasks
// Create new task
// Delete a task
// Move task from one list to another
// Modify a task

export default TaskList;
