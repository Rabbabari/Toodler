import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from "../ListsModal";
import styles from "./styles";

const EditModal = ({ isOpen, closeModal, list, onUpdateList }) => {
	const [listName, setListName] = useState("");
	const [listColor, setListColor] = useState("#FFFFFF");

	useEffect(() => {
		if (list) {
			setListName(list.name);
			setListColor(list.color);
		}
	}, [list]);

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
			Alert.alert("Error", "Please enter a list name");
		} else {
			onUpdateList(list.id, listName, listColor);
			closeModal();
		}
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Edit List</Text>
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
								listColor === color && styles.selectedColor,
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
					<Text style={styles.text}>Save Changes</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

export default EditModal;
