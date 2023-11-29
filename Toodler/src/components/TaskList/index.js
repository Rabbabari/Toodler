import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./styles";
import Task from "../Task";

const TaskList = ({ tasks, onCheck, onLongPress, selectedTasks }) => {
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
							onCheck={(id) => onCheck(item.id)}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default TaskList;
