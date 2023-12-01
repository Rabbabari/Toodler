// Importing necessary modules from React and React Native
import React from "react";
import PropTypes from "prop-types"; // For prop type validation
import NativeModal from "react-native-modal"; // Importing modal component from react-native-modal
import { View, Text } from "react-native"; // Importing components from react-native
import styles from "../../styles/modal"; // Importing custom styles for the modal

// Modal component definition
const Modal = ({ isOpen, closeModal, title, children }) => (
	<NativeModal
		isVisible={isOpen} // Determines if the modal is visible
		hasBackdrop={true} // Shows a backdrop behind the modal
		onBackButtonPress={closeModal} // Function to call when back button is pressed
		onSwipeComplete={closeModal} // Function to call when a swipe gesture is completed
		swipeDirection={["up", "down"]} // Allowed directions for swipe gesture
		style={styles.modal} // Custom styles for the modal
	>
		{/* Displaying the title */}
		{/* Rendering children components passed to the Modal */}
		<View style={styles.body}>
			<Text>{title}</Text>
			{children}
		</View>
	</NativeModal>
);

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired, // Boolean to control modal visibility
	closeModal: PropTypes.func.isRequired, // Function to close the modal
	title: PropTypes.string, // Title of the modal
	children: PropTypes.node, // Children components that can be rendered inside the modal
};

export default Modal;
