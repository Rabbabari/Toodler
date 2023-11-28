import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const Toolbar = () => {
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight style={styles.tollbarAction}>
				<Text styles={styles.toolbarActionText}>Create List</Text>
			</TouchableHighlight>
			<TouchableHighlight style={styles.tollbarAction}>
				<Text>Delete List</Text>
			</TouchableHighlight>
		</View>
	);
};

export default Toolbar;
