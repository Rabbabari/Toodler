import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Modal from "../Modal"; // Importing custom modal component
import styles from "../../styles/modal";

const SearchModal = ({ isOpen, closeModal, onSearch }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		onSearch(searchQuery);
		setSearchQuery("");
		closeModal();
	};

	return (
		<Modal isOpen={isOpen} closeModal={closeModal}>
			<Text style={styles.text}>Search List</Text>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Enter list name"
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>
				<TouchableOpacity style={styles.button} onPress={handleSearch}>
					<Text style={styles.text}>Search</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

SearchModal.propTypes = {
	isOpen: PropTypes.bool,
	closeModal: PropTypes.func,
	onSearch: PropTypes.func,
};

export default SearchModal;
