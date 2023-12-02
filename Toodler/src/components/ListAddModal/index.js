// Importing necessary hooks and components from React and React Native
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Importing icon from Expo's vector icons
import PropTypes from "prop-types"; // For prop type validation
import Modal from "../Modal"; // Importing custom modal component
import styles from "../../styles/modal"; // Importing custom styles
import {
	lightPink,
	purple,
	blue,
	green,
	yellow,
	orange,
} from "../../styles/colors";

// AddModal component definition
const AddModal = ({ isOpen, closeModal, onAddNewList }) => {
	// State for managing the list name, color, and error state
	const [listName, setListName] = useState("");
	const [listColor, setListColor] = useState("#FFFFFF");
	const [error, setError] = useState(false);

	// Array of color options for the list
	const colorOptions = [purple, blue, green, yellow, orange, lightPink];

	// Function to handle the submission of the new list
	const handleSubmit = () => {
		if (!listName.trim()) {
			setError(true); // Set error state to true if list name is empty
			Alert.alert("Error", "Please enter a list name"); // Alert if the list name is empty
		} else {
			onAddNewList(listName, listColor); // Call the onAddNewList function with the new list details
			setListName(""); // Reset list name
			setListColor("#FFFFFF"); // Reset list color
			setError(false); // Reset error state
			closeModal(); // Close the modal
		}
	};

	// Rendering the AddModal component
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Choose name</Text>
			<View>
				<TextInput
					style={styles.textInput}
					placeholder="List Name"
					value={listName}
					onChangeText={setListName}
				/>
				<Text style={styles.text}>Choose Color</Text>
				<View style={styles.colorOptionsContainer}>
					{colorOptions.map((color) => (
						<TouchableOpacity
							key={color}
							onPress={() => setListColor(color)}
							style={[
								styles.colorOption,
								{ backgroundColor: color },
							]}
						>
							{listColor === color && (
								<AntDesign
									name="checkcircle"
									style={styles.checkmark}
								/>
							)}
						</TouchableOpacity>
					))}
				</View>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

AddModal.propTypes = {
	isOpen: PropTypes.bool.isRequired, // Boolean to control modal visibility
	closeModal: PropTypes.func.isRequired, // Function to close the modal
	onAddNewList: PropTypes.func.isRequired, // Function to handle adding a new list
};

export default AddModal;
