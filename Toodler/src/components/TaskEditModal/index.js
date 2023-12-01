import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, TextInput, Alert } from "react-native";
import Modal from "../TaskModal";
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

	const handleSubmit = () => {
		if (!name.trim() || !description.trim()) {
			Alert.alert("Error", "Please enter a name and description");
		} else {
			updateTask(name, description);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Choose name</Text>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Task name"
					value={name}
					onChangeText={setName}
				/>
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
