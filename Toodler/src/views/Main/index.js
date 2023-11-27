import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import logo from "../../resourses/logo.png";
import styles from "./styles";

const Main = () => {
	<View>
		<Image source={logo} />
		<Text>The Toodler app!</Text>
		<TouchableHighlight>
			<Text>View tasks!</Text>
		</TouchableHighlight>
	</View>;
};

export default Main;
