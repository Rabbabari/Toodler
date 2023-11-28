import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import logo from "../../resources/logo.png";
import styles from "./styles";

const Main = () => {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<Text style={styles.title}>View tasks</Text>
		</View>
	);
};

export default Main;
