import React from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const ListName = ({ id, name, color, onLongPress, isSelected }) => {
	const { navigate } = useNavigation();
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color }]}
			onLongPress={() => onLongPress(id)}
			onPress={() => navigate("Tasks", { listId: id })}
		>
			{isSelected ? (
				<AntDesign name="checkcircle" style={styles.checkmark} />
			) : (
				<></>
			)}
			<View style={{ opacity: isSelected ? 0.5 : 1 }}>
				<Text style={styles.text}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
};

ListName.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	color: PropTypes.string,
	onLongPress: PropTypes.func.isRequired,
	isSelected: PropTypes.bool.isRequired,
};

export default ListName;
