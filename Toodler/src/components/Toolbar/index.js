import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const Toolbar = ({ hasSelectedBoards, onCreateBoard }) => {
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight
				style={styles.toolbarAction}
				onPress={() => onCreateBoard()}
			>
				<Text style={styles.toolbarActionText}>Create board</Text>
			</TouchableHighlight>
			<TouchableOpacity
				style={styles.toolbarAction}
				disabled={hasSelectedBoards}
				underlayColor="transparent"
			>
				<Text
					style={[
						!hasSelectedBoards
							? {
									color: "rgba(155, 155, 155, 0.5)",
							  }
							: {},
						styles.toolbarActionText,
					]}
				>
					Delete board
				</Text>
			</TouchableOpacity>
		</View>
	);
};

Toolbar.propTypes = {
	// Whether or not there are any selected boards
	hasSelectedBoards: PropTypes.bool.isRequired,
	onCreateBoard: PropTypes.func,
};

export default Toolbar;
