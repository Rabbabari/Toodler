import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text, TextInput, Alert } from "react-native";
import Modal from "../Modal";
import styles from "../../styles/modal";

const TaskEditModal = ({ isOpen, closeModal, task, updateTask }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	useEffect(() => {
		if (task) {
			setName(task.name);
			setDescription(task.description);
		}
	}, [task]);

	// When a user presses select, if there is a name, update the task with the new name and description
	const handleSubmit = () => {
		if (!name.trim()) {
			Alert.alert("Error", "Please enter a name and description");
		} else {
			updateTask(name, description);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Name</Text>
			<View>
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

TaskEditModal.propTypes = {
	// Indicator that the Modal is open
	isOpen: PropTypes.bool.isRequired,
	// Function to close the Modal
	closeModal: PropTypes.func.isRequired,
	// A task to be updated
	task: PropTypes.object,
	// Function to update a task
	updateTask: PropTypes.func.isRequired,
};

export default TaskEditModal;
