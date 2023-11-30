import React from "react";
//import { withNavigation } from "@react-navigation";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./styles";

const Task = ({ task, onLongPress, isSelected, checkTask }) => {
	return (
		<View style={styles.listContainer}>
			<BouncyCheckbox
				onPress={() => checkTask(task.id)}
				isChecked={task.isFinished}
				disabled={isSelected}
				style={{ opacity: isSelected ? 0.2 : 1 }}
			/>
			<TouchableOpacity onLongPress={() => onLongPress(task.id)}>
				<View style={{ opacity: isSelected ? 0.2 : 1 }}>
					<Text style={styles.taskName}>{task.name}</Text>
					<Text style={styles.taskDescription}>
						{task.description}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

// BoardThumbnail.propTypes = {
// 	// The board's unique identifier
// 	id: PropTypes.number.isRequired,
// 	// The board's name
// 	name: PropTypes.string.isRequired,
// 	// The board's thumbnail photo represented by a URL
// 	thumbnailPhoto: PropTypes.string.isRequired,
// 	// Whether or not the board is selected
// 	isSelected: PropTypes.bool.isRequired,
// 	// When a board is long pressed
// 	onLongPress: PropTypes.func.isRequired,
// };

export default Task;
