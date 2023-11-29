import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const TaskBar = ({ hasSelectedTasks }) => {
	return (
		<View styleName="horzontal" style={styles.toolbar}>
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
					Move task
				</Text>
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
					Delete task
				</Text>
			</TouchableHighlight>
		</View>
	);
};

export default TaskBar;
