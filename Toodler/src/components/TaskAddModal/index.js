import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text, TextInput, Alert } from "react-native";
import Modal from "../Modal";
import styles from "../../styles/modal";

const TaskAddModal = ({ isOpen, closeModal, createTask }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState(false);

	// When a user presses submit, if there is a name, create a new task with that name and description
	const handleSubmit = () => {
		if (!name.trim()) {
			setError(true);
			Alert.alert("Error", "Please enter a name and description");
		} else {
			createTask(name, description);
			setName("");
			setDescription("");
			setError(false);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<View style={styles.formContainer}>
				<Text style={styles.text}>Name</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Task name"
					value={name}
					onChangeText={setName}
				/>
				<Text style={styles.text}>Description</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Task description"
					value={description}
					onChangeText={setDescription}
				/>

				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

TaskAddModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// Function to create a new task
	createTask: PropTypes.func,
};

export default TaskAddModal;
