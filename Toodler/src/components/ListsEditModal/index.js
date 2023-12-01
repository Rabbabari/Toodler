// Importing necessary hooks and components from React and React Native
import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Importing icon from Expo's vector icons
import PropTypes from "prop-types"; // For prop type validation
import Modal from "../ListsModal"; // Importing custom modal component
import styles from "./styles"; // Importing custom styles

// EditModal component definition
const EditModal = ({ isOpen, closeModal, list, onUpdateList }) => {
	// State for managing the list name and color
	const [listName, setListName] = useState("");
	const [listColor, setListColor] = useState("#FFFFFF");

	// useEffect to update state when the list prop changes
	useEffect(() => {
		if (list) {
			setListName(list.name);
			setListColor(list.color);
		}
	}, [list]);

	// Array of color options for the list
	const colorOptions = [
		// List of color codes
		"#a8c7b7",
		"#9e9cc8",
		"#fce99c",
		"#7ba7b5",
		"#eed495",
		"#c9b2d1",
		"#88bdbf",
		"#cca9b6",
	];

	// Function to handle the submission of the edited list
	const handleSubmit = () => {
		if (!listName.trim()) {
			Alert.alert("Error", "Please enter a list name");
		} else {
			onUpdateList(list.id, listName, listColor);
			closeModal();
		}
	};

	// Rendering the EditModal component
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Edit List</Text>
			<View style={styles.formContainer}>
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
								listColor === color && styles.selectedColor,
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
					<Text style={styles.text}>Save Changes</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

EditModal.propTypes = {
	isOpen: PropTypes.bool.isRequired, // Boolean to control modal visibility
	closeModal: PropTypes.func.isRequired, // Function to close the modal
	list: PropTypes.shape({
		// Object representing the list being edited
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		color: PropTypes.string,
	}),
	onUpdateList: PropTypes.func.isRequired, // Function to update the list
};

export default EditModal;
