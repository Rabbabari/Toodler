import React from "react";
import PropTypes from "prop-types";
import NativeModal from "react-native-modal";
import { View, Text } from "react-native";
import styles from "../../styles/modal";

const TaskModal = ({ isOpen, closeModal, title, children }) => (
	<NativeModal
		isVisible={isOpen}
		hasBackdrop={true}
		onBackButtonPress={closeModal}
		onSwipeComplete={closeModal}
		swipeDirection={["up", "down"]}
		style={styles.modal}
	>
		<View style={styles.body}>
			<Text>{title}</Text>
			{children}
		</View>
	</NativeModal>
);

TaskModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// Title of the Modal
	title: PropTypes.string,
	// The nested children of the Modal
	children: PropTypes.node,
};

export default TaskModal;
