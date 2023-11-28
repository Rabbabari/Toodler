import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import logo from "../../resources/logo.png";
import styles from "./styles";

const Main = ({ navigation: { navigate } }) => {
	console.log("Main");
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />
			<TouchableHighlight
				onPress={() => navigate("Gallery")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>View boards</Text>
			</TouchableHighlight>
		</View>
	);
};

export default Main;
