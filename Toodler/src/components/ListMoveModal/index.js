import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
// import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import Modal from "../Modal";
import { useData } from "../../services/AppContext";
import styles from "../../styles/modal";

DropDownPicker.setListMode("MODAL");

const ListMoveModal = ({ isOpen, closeModal, moveLists, listBoardId }) => {
	const [open, setOpen] = useState(false); // Boolean for if the modal is open or not
	const { boards } = useData(); // Gets all the boards for the user to choose from
	const boardsCopy = [...boards].map((board) => ({
		// A copy of all boards only including the name and value
		label: board.name,
		value: board.id,
	}));

	const [boardId, setListId] = useState(listBoardId); // sets the boardId as the old list id

	// When the user presses submit, if a list is chosed,
	// call the funciton that moves the tasks and close the modal
	const handleSubmit = () => {
		if (!boardId) {
			Alert.alert("Error", "Please pick a board");
		} else {
			moveLists(boardId);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Pick a board</Text>
			<View style={{ zIndex: 100 }}>
				<DropDownPicker
					style={styles.textInput}
					items={boardsCopy}
					value={boardId}
					open={open}
					setOpen={setOpen}
					setValue={setListId}
					modalTitle="Pick a board"
					searchable={true}
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.text}>Submit</Text>
			</TouchableOpacity>
		</Modal>
	);
};

export default ListMoveModal;
