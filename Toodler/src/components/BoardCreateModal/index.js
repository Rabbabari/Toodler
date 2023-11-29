import React from "react";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Modal from "../BoardModal";
import styles from "./styles";

const CreateBoardModal = ({
	isOpen,
	closeModal,
	createBoard,
	selectFromCameraRoll,
}) => (
	<Modal
		isOpen={isOpen}
		closeModal={closeModal}
		createBoard={createBoard}
		selectFromCameraRoll={selectFromCameraRoll}
	>
		<TouchableOpacity style={styles.icon} onPress={() => createBoard()}>
			<Entypo name="Choose image" size={24} color="black" />
		</TouchableOpacity>
		<TouchableOpacity
			style={styles.icon}
			onPress={() => selectFromCameraRoll()}
		>
			<Entypo name="Name of the board" size={24} color="black" />
		</TouchableOpacity>
	</Modal>
);

CreateBoardModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// Function to create a new board
	createBoard: PropTypes.func.isRequired,
	// Function to select an image from the camera roll
	selectFromCameraRoll: PropTypes.func.isRequired,
};

export default CreateBoardModal;
