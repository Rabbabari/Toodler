import React from "react";
//import { withNavigation } from "@react-navigation";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const BoardThumbnail = ({ id, name, URL, onLongPress, isSelected }) => {
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			onLongPress={() => onLongPress(id)}
			//onPress={() => navigate("Preview", { boardID: id })}
		>
			{isSelected && (
				<AntDesign name="checkcircleo" style={styles.checkmark} />
			)}

			<View style={{ opacity: isSelected ? 0.5 : 1 }}>
				<Image
					style={styles.image}
					resizeMode="cover"
					source={{ uri: URL }}
				/>
				<Text style={styles.text}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
};

BoardThumbnail.propTypes = {
	// The board's unique identifier
	id: PropTypes.number.isRequired,
	// The board's name
	name: PropTypes.string.isRequired,
	// The board's thumbnail photo represented by a URL
	thumbnailPhoto: PropTypes.string.isRequired,
	// Whether or not the board is selected
	isSelected: PropTypes.bool.isRequired,
	// When a board is long pressed
	onLongPress: PropTypes.func.isRequired,
};

export default BoardThumbnail;
