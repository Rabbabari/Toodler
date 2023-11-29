import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from "../ListsModal";
import styles from "./styles";

const AddModal = ({ isOpen, closeModal, onAddNewList }) => {
	const [listName, setListName] = useState("");
	const [listColor, setListColor] = useState("#FFFFFF");
	const [error, setError] = useState(false);

	const colorOptions = [
		"#a8c7b7",
		"#9e9cc8",
		"#fce99c",
		"#7ba7b5",
		"#eed495",
		"#c9b2d1",
		"#88bdbf",
		"#cca9b6",
	];

	const handleSubmit = () => {
		if (!listName.trim()) {
			setError(true); // Set error state to true
			Alert.alert("Error", "Please enter a list name"); // Show alert
		} else {
			onAddNewList(listName, listColor);
			setListName("");
			setListColor("#FFFFFF");
			setError(false); // Reset error state
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Choose name</Text>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="List Name"
					value={listName}
					onChangeText={setListName}
				/>
				<Text style={styles.text}>Choose Color</Text>
				<View style={styles.colorOptionsContainer}>
					{colorOptions.map((color) => (
						<TouchableOpacity
							key={color}
							onPress={() => setListColor(color)}
							style={[
								styles.colorOption,
								{ backgroundColor: color },
							]}
						>
							{listColor === color && (
								<AntDesign
									name="checkcircle"
									style={styles.checkmark}
								/>
							)}
						</TouchableOpacity>
					))}
				</View>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.text}>Submit</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

export default AddModal;
