import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const TaskBar = () => {
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight style={styles.toolbarAction}>
				<Text style={styles.toolbarActionText}>Move task</Text>
			</TouchableHighlight>
			<TouchableHighlight style={styles.toolbarAction}>
				<Text style={styles.toolbarActionText}>Delete task</Text>
			</TouchableHighlight>
		</View>
	);
};

export default TaskBar;
