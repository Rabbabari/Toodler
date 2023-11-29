import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

const Toolbar = ({ hasSelectedLists, selectedLists, onAdd }) => {
	const isOneListSelected = selectedLists.length === 1;
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight
				style={styles.tollbarAction}
				onPress={() => onAdd()}
			>
				<Text style={styles.toolbarActionText}>Create List</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={[
					styles.tollbarAction,
					!isOneListSelected ? { borderColor: "#949494" } : {},
				]}
				disabled={!isOneListSelected}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!isOneListSelected ? { color: "#949494" } : {},
					]}
				>
					Edit list
				</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={[
					styles.tollbarAction,
					!hasSelectedLists ? { borderColor: "#949494" } : {},
				]}
				disabled={!hasSelectedLists}
			>
				<Text
					style={[
						styles.toolbarActionText,
						!hasSelectedLists ? { color: "#949494" } : {},
					]}
				>
					Delete
				</Text>
			</TouchableHighlight>
		</View>
	);
};

Toolbar.propTypes = {
	hasSelectedLists: PropTypes.bool.isRequired,
	selectedLists: PropTypes.arrayOf(PropTypes.number).isRequired,
	onAdd: PropTypes.func,
};

export default Toolbar;
