import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from "../TaskModal";
import styles from "./styles";
import { useData } from "../../services/AppContext";

const TaskMoveModal = ({ isOpen, closeModal, moveTask }) => {
	const { lists } = useData();
	const [listId, setListId] = useState(1);

	const handleSubmit = () => {
		if (!listId) {
			Alert.alert("Error", "Please pick a list");
		} else {
			moveTask(listId);
			closeModal();
		}
	};
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text styles={styles.text}>Pick a list</Text>
			<Picker
				selectedValue={listId}
				onValueChange={(value) => setListId(value)}
			>
				{lists.map((list) => (
					<Picker.Item
						key={list.id}
						label={list.name}
						value={list.id}
					/>
				))}
			</Picker>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.text}>Submit</Text>
			</TouchableOpacity>
		</Modal>
	);
};

export default TaskMoveModal;
