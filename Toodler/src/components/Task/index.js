import React from "react";
//import { withNavigation } from "@react-navigation";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons"; // Importing icon component
import styles from "./styles";

const Task = ({ task, onLongPress, isSelected, checkTask }) => {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ backgroundColor: isSelected ? "#f2e9e1" : "#f2e9e1" },
			]}
			onLongPress={() => onLongPress(task.id)}
		>
			{isSelected && (
				<AntDesign name="checkcircle" style={styles.checkmark} /> // Showing a checkmark if the item is selected
			)}
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<BouncyCheckbox
					onPress={() => checkTask(task.id)}
					isChecked={task.isFinished}
					style={{ opacity: isSelected ? 0.5 : 1 }}
				/>
				<View style={{ opacity: isSelected ? 0.5 : 1 }}>
					<Text style={styles.taskName}>{task.name}</Text>
					<Text style={styles.taskDescription}>
						{task.description}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

Task.protoTypes = {
	// A single task
	task: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		isFinished: PropTypes.bool,
		listId: PropTypes.number,
	}).isRequired,
	// A funciton that is triggered on a long press
	onLongPress: PropTypes.func.isRequired,
	// Ìs the task selected or not
	isSelected: PropTypes.bool.isRequired,
	// A function that is triggered when a task is checked off
	checkTask: PropTypes.func.isRequired,
};

export default Task;
