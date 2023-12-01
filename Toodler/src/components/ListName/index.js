// Importing necessary modules and hooks
import React from "react";
import PropTypes from "prop-types"; // For prop type validation
import { useNavigation } from "@react-navigation/native"; // Navigation hook for navigating between screens
import { Text, View, TouchableOpacity } from "react-native"; // Importing components from react-native
import { AntDesign } from "@expo/vector-icons"; // Importing icon component
import styles from "./styles"; // Importing custom styles

// ListName component definition
const ListName = ({ id, name, color, onLongPress, isSelected }) => {
	const { navigate } = useNavigation(); // Hook to enable navigation

	// Rendering the list item
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color }]} // Styling the button with the list's color
			onLongPress={() => onLongPress(id)} // Handling long press
			onPress={() => navigate("Tasks", { listId: id })} // Handling regular press to navigate
		>
			{isSelected && (
				<AntDesign name="checkcircle" style={styles.checkmark} /> // Showing a checkmark if the item is selected
			)}
			{/* Displaying the list name */}
			<View style={{ opacity: isSelected ? 0.5 : 1 }}>
				<Text style={styles.text}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
};

ListName.propTypes = {
	id: PropTypes.number.isRequired, // List item ID
	name: PropTypes.string.isRequired, // List item name
	color: PropTypes.string.isRequired, // List item color
	onLongPress: PropTypes.func.isRequired, // Function to be called on a long press
	isSelected: PropTypes.bool.isRequired, // Indicates if the list item is selected
};

export default ListName;
