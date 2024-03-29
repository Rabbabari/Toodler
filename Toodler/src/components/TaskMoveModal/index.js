import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
// import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import Modal from "../Modal";
import { useData } from "../../services/AppContext";
import styles from "../../styles/modal";

DropDownPicker.setListMode("MODAL");

const TaskMoveModal = ({ isOpen, closeModal, moveTasks, taskListId }) => {
	const [open, setOpen] = useState(false); // Boolean for if the modal is open or not
	const { lists } = useData(); // Gets all the lists for the user to choose from
	const listCopy = [...lists].map((list) => ({
		// A copy of all lists only including the name and value
		label: list.name,
		value: list.id,
	}));

	const [listId, setListId] = useState(taskListId); // sets the listId as the old list id
	// When the user presses submit, if a list is chosed,
	// call the funciton that moves the tasks and close the modal
	const handleSubmit = () => {
		if (!listId) {
			Alert.alert("Error", "Please pick a list");
		} else {
			moveTasks(listId);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Pick a list</Text>
			<View style={{ zIndex: 100 }}>
				<DropDownPicker
					style={styles.textInput}
					items={listCopy}
					value={listId}
					open={open}
					setOpen={setOpen}
					setValue={setListId}
					modalTitle="Pick a list"
					searchable={true}
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.text}>Submit</Text>
			</TouchableOpacity>
		</Modal>
	);
};

export default TaskMoveModal;
