import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const Toolbar = ({ hasSelectedBoards }) => {
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight style={styles.toolbarAction}>
				<Text style={styles.toolbarActionText}>Create board</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={styles.toolbarAction}
				disabled={!hasSelectedBoards}
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
			</TouchableHighlight>
		</View>
	);
};

Toolbar.propTypes = {
	// Whether or not there are any selected boards
	hasSelectedBoards: PropTypes.bool.isRequired,
};

export default Toolbar;
