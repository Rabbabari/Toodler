import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
// import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import Modal from "../TaskModal";
import { useData } from "../../services/AppContext";
import styles from "../../styles/modal";

const TaskMoveModal = ({ isOpen, closeModal, moveTask }) => {
	const [open, setOpen] = useState(false);
	const { lists } = useData();
	const listCopy = [...lists].map((list) => ({
		label: list.name,
		value: list.id,
	}));
	const listNames = lists.map((list) => list.name);
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
			<DropDownPicker
				items={listCopy}
				value={listId}
				open={open}
				setOpen={setOpen}
				setValue={setListId}
				placeholder="Pick a list."
			/>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text>Chosen list: {listId === null ? "none" : listId}</Text>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.text}>Submit</Text>
			</TouchableOpacity>
		</Modal>
	);
};

export default TaskMoveModal;
