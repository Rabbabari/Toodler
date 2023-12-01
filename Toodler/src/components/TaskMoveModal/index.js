import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from "../TaskModal";
import styles from "./styles";
import { useData } from "../../services/AppContext";

const TaskMoveModal = ({ isOpen, closeModal }) => {
	const { lists } = useData();
	const [listId, setListId] = useState(1);
	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<View styles={styles.parent}>
				<Text styles={styles.text}>Pick a list</Text>
				<Picker
					selectedValue={listId}
					onValueChange={(value, index) => setListId(value)}
				>
					<Picker.Item label="Java" value="java" />
					<Picker.Item label="JavaScript" value="js" />
				</Picker>
			</View>
		</Modal>
	);
};

export default TaskMoveModal;
