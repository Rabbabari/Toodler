import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "./styles";

const ListName = ({ id, name, color }) => {
	console.log(id, name, color);
	return (
		<View>
			<TouchableHighlight
				style={[styles.button, { backgroundColor: color }]}
			>
				<Text style={styles.text}>{name}</Text>
			</TouchableHighlight>
		</View>
	);
};

export default ListName;
