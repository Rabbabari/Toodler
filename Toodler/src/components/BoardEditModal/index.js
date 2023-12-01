import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, TextInput, Alert } from "react-native";
import Modal from "../Modal";
import styles from "../../styles/modal";

const BoardEditModal = ({ isOpen, closeModal, board, updateBoard }) => {
	const [name, setName] = useState("");
	const [thumbnailPhoto, setThumbnailPhoto] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (board) {
			console.log(board);
			setName(board.name);
			setThumbnailPhoto(board.thumbnailPhoto);
			setDescription(board.description);
		}
	}, [board]);

	const handleSubmit = () => {
		if (!name.trim()) {
			Alert.alert("Error", "Please enter a name");
		} else {
			board.name = name;
			board.thumbnailPhoto = thumbnailPhoto;
			board.description = description;
			updateBoard(board);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Choose name</Text>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Board name"
					value={name}
					onChangeText={setName}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Board description"
					value={description}
					onChangeText={setDescription}
				/>
				<TouchableOpacity onPress={() => selectFromCameraRoll()}>
					<Entypo
						style={styles.icon}
						name="image"
						size={24}
						color="black"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

BoardEditModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// A board to be updated
	board: PropTypes.object,
	// Function to update a board
	updateBoard: PropTypes.func.isRequired,
};

export default BoardEditModal;
