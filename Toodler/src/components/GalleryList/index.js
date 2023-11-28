import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import ImageThumbnail from "../ImageThumbnail";

const GalleryList = ({ images }) => {
	console.log(images);
	return (
		<View style={styles.listContainer}>
			<FlatList
				numColumns={2}
				data={images}
				renderItem={({ item }) => {
					return <ImageThumbnail URL={item} />;
				}}
				keyExtractor={(image) => image.name}
			/>
		</View>
	);
};

export default GalleryList;
