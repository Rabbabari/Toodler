import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const ImageThumbnail = ({ name, URL }) => {
	//console.log("Here");
	//console.log(name, URL);
	return (
		<View>
			<Image
				style={styles.image}
				resizeMode="cover"
				source={{ uri: URL }}
			/>
		</View>
	);
};

export default ImageThumbnail;
