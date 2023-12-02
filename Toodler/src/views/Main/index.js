import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useData } from "../../services/AppContext";
import { useNavigation } from "@react-navigation/native";
import SearchModal from "../../components/MainSearchModal";
import logo from "../../resources/logo.png";
import styles from "./styles";

const Main = ({ navigation: { navigate } }) => {
	const { lists } = useData(); // Access the lists from your data context
	const navigation = useNavigation();

	// Boolean for if the search modal is open
	const [isSearchModalVisible, setSearchModalVisible] = useState(false);

	const handleSearch = (query) => {
		// Find the list that matches the search query
		const foundList = lists.find(
			(list) => list.name.toLowerCase() === query.toLowerCase()
		);
		if (foundList) {
			// Navigate to the list screen with the found list's details
			navigation.navigate("Tasks", {
				listId: foundList.id,
				listName: foundList.name,
			});
		} else {
			// Handle case where no list is found
			Alert.alert("List not found", "Please try a different name");
		}
		setSearchModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<TouchableOpacity
				onPress={() => navigate("Board")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>View boards</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => setSearchModalVisible(true)}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Search list</Text>
			</TouchableOpacity>

			{/* Search Modal */}
			<SearchModal
				isOpen={isSearchModalVisible}
				closeModal={() => setSearchModalVisible(false)}
				onSearch={handleSearch}
			/>
		</View>
	);
};

export default Main;
