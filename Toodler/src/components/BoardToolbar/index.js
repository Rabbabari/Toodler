import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const Toolbar = ({
	hasSelectedBoards,
	onCreateBoard,
	deleteBoard,
	editBoard,
}) => {
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight
				style={styles.toolbarAction}
				onPress={() => onCreateBoard()}
			>
				<Text style={styles.toolbarActionText}>Create board</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.toolbarAction}
				disabled={!hasSelectedBoards}
				onPress={editBoard}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!hasSelectedBoards ? { color: "#949494" } : {},
					]}
				>
					Edit board
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
					Delete board
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
