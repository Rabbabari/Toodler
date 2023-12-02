import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Text, TextInput, Alert, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import Modal from "../Modal"; // Importing custom modal component
import styles from "../../styles/modal"; // Importing custom styles

const CreateBoardModal = ({ isOpen, closeModal, onAddNewBoard }) => {
	const [boardName, setBoardName] = useState("");
	const [boardDescription, setBoardDescription] = useState("");
	const [thumbnailPhoto, setThumbnailPhoto] = useState("");
	const [error, setError] = useState(false);

	const selectFromCameraRoll = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert("Permission to access camera roll is required!");
			return;
		}
		const pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.canceled === true) {
			return;
		}
		setThumbnailPhoto(pickerResult.assets[0].uri);
	};

	const handleBoardSubmit = () => {
		if (!boardName.trim() || !boardDescription.trim()) {
			setError(true);
			Alert.alert("Error", "Please enter a board name and description.");
		} else {
			onAddNewBoard(boardName, boardDescription, thumbnailPhoto);
			setBoardName("");
			setThumbnailPhoto("");
			setBoardDescription("");
			setError(false);
			closeModal();
		}
	};
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Choose name</Text>
			<View>
				<TextInput
					style={styles.textInput}
					placeholder="Board Name"
					value={boardName}
					onChangeText={setBoardName}
				/>
				<Text style={styles.text}>Write description</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Board description"
					value={boardDescription}
					onChangeText={setBoardDescription}
				/>

				<TouchableOpacity onPress={() => selectFromCameraRoll()}>
					<Entypo
						style={styles.icon}
						name="image"
						size={26}
						color="black"
						value={thumbnailPhoto}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={handleBoardSubmit}
				>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

CreateBoardModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// Function to create a new board
	onAddNewBoard: PropTypes.func.isRequired,
};

export default CreateBoardModal;
