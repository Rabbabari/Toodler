import React from "react";
//import { withNavigation } from "@react-navigation";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const BoardThumbnail = ({
	id,
	name,
	description,
	URL,
	onLongPress,
	isSelected,
}) => {
	const { navigate } = useNavigation();

	return (
		<TouchableOpacity
			onLongPress={() => onLongPress(id)}
			onPress={() => navigate("Lists", { boardId: id })}
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
				<Text style={styles.textName}>{name}</Text>
				<Text style={styles.textDescription}>{description}</Text>
			</View>
		</TouchableOpacity>
	);
};

BoardThumbnail.propTypes = {
	// The board's unique identifier
	id: PropTypes.number,
	// The board's name
	name: PropTypes.string,
	// The board's thumbnail photo represented by a URL
	thumbnailPhoto: PropTypes.string,
	// Whether or not the board is selected
	isSelected: PropTypes.bool,
	// When a board is long pressed
	onLongPress: PropTypes.func,
};

export default BoardThumbnail;
