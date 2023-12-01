// Importing necessary modules from React and React Native
import React from "react";
// PropTypes is used for prop type checking
import PropTypes from "prop-types";
// Importing components from react-native for UI
import { View, TouchableHighlight, Text } from "react-native";
// Importing custom styles
import styles from "../../styles/toolbar";

const Toolbar = ({
	hasSelectedLists,
	selectedLists,
	onAdd,
	onDelete,
	onEdit,
}) => {
	// Checking if exactly one list is selected for enabling the Edit functionality
	const isOneListSelected = selectedLists.length === 1;

	// Rendering the toolbar
	return (
		<View styleName="horzontal" style={styles.toolbar}>
			<TouchableHighlight
				style={styles.toolbarAction}
				onPress={() => onAdd()}
			>
				<Text style={styles.toolbarActionText}>Create</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={[
					styles.toolbarAction,
					!isOneListSelected ? { backgroundColor: "#ff8da0" } : {},
				]}
				disabled={!isOneListSelected}
				onPress={onEdit}
			>
				<Text style={styles.toolbarActionText}>Edit</Text>
			</TouchableHighlight>
			<TouchableHighlight
				style={[
					styles.toolbarAction,
					!hasSelectedLists ? { backgroundColor: "#ff8da0" } : {},
				]}
				disabled={!hasSelectedLists}
				onPress={onDelete}
			>
				<Text style={styles.toolbarActionText}>Delete</Text>
			</TouchableHighlight>
		</View>
	);
};

// Defining propTypes for the Toolbar component
// This helps in validating the props passed to the component
Toolbar.propTypes = {
	hasSelectedLists: PropTypes.bool.isRequired, // Boolean indicating if any list is selected
	selectedLists: PropTypes.arrayOf(PropTypes.number).isRequired, // Array of selected list IDs
	onAdd: PropTypes.func, // Function to handle adding a list
	onDelete: PropTypes.func, // Function to handle deleting lists
	onEdit: PropTypes.func, // Function to handle editing a list
};

export default Toolbar;
