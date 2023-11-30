import React, { useState } from "react";
import { Text, TextInput, Alert } from "react-native";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Modal from "../BoardModal";
import styles from "./styles";

const CreateBoardModal = ({
	isOpen,
	closeModal,
	onCreateBoard,
	takePhoto,
	selectFromCameraRoll,
	onAddNewBoard,
}) => {
	const [boardName, setBoardName] = useState("");
	const [thumbnailPhoto, setThumbnailPhoto] = useState("");
	const [error, setError] = useState(false);

	const handleBoardSubmit = () => {
		if (!boardName.trim()) {
			setError(true);
			Alert.alert("Error", "Please enter a board name");
		} else {
			onAddNewBoard(boardName, thumbnailPhoto);
			setBoardName("");
			setThumbnailPhoto("");
			setError(false);
			closeModal();
		}
	};
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<TouchableOpacity>
				<TextInput
					style={styles.textInput}
					placeholder="Enter Board Name"
					value={boardName}
					onChangeText={setBoardName}
				/>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => selectFromCameraRoll()}>
				<Entypo
					style={styles.icon}
					name="image"
					size={24}
					color="black"
				/>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => takePhoto()}>
				<Entypo
					style={styles.icon}
					name="camera"
					size={24}
					color="black"
				/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.submit} onPress={handleBoardSubmit}>
				<Text style={styles.text}>Create Board</Text>
			</TouchableOpacity>
		</Modal>
	);
};

CreateBoardModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// Function to create a new board
	onCreateBoard: PropTypes.func.isRequired,
	// Function to select an image from the camera roll
	selectFromCameraRoll: PropTypes.func.isRequired,
	// Function to take a photo
	takePhoto: PropTypes.func.isRequired,
};

export default CreateBoardModal;