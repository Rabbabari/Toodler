import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, TouchableHighlight, Text } from "react-native";
import styles from "../../styles/toolbar";

const Toolbar = ({
	hasSelectedBoards,
	selectedBoardsLength,
	onCreateBoard,
	deleteBoard,
	editBoard,
}) => {
	// Checking if exactly one list is selected for enabling the Edit functionality
	const isOneBoardSelected = selectedBoardsLength === 1;

	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight
				style={styles.toolbarAction}
				onPress={() => onCreateBoard()}
			>
				<Text style={styles.toolbarActionText}>Create</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.toolbarAction}
				disabled={!hasSelectedBoards}
				onPress={editBoard}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!isOneBoardSelected ? { color: "#949494" } : {},
					]}
				>
					Edit
				</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.toolbarAction}
				disabled={!hasSelectedBoards}
				onPress={() => deleteBoard()}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!hasSelectedBoards ? { color: "#949494" } : {},
					]}
				>
					Delete
				</Text>
			</TouchableHighlight>
		</View>
	);
};

Toolbar.propTypes = {
	// Whether or not there are any selected boards
	hasSelectedBoards: PropTypes.bool.isRequired,
	onCreateBoard: PropTypes.func.isRequired,
	deleteBoard: PropTypes.func.isRequired,
};

export default Toolbar;
