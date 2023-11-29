import React from "react";
import { View, FlatList, Text, TouchableHighlight } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./styles";

const TaskList = ({ tasks, onCheck }) => {
	return (
		<View>
			<FlatList
				numColumns={1}
				data={tasks}
				renderItem={({ item }) => {
					return (
						<View style={styles.listContainer}>
							<BouncyCheckbox onPress={onCheck} />
							<TouchableHighlight>
								<View style={styles.taskContainer}>
									<Text style={styles.taskName}>
										{item.name}
									</Text>
									<Text style={styles.taskDescription}>
										{item.description}
									</Text>
								</View>
							</TouchableHighlight>
						</View>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default TaskList;
