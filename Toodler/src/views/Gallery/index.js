import React from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/Toolbar";
import GalleryList from "../../components/GalleryList";
import data from "../../resources/data.json";

const Gallery = () => {
	const thumbnailPhotos = data.boards.map((board) => board.thumbnailPhoto);
	//console.log(thumbnailPhotos);
	//thumbnailPhotos.forEach((thumbnailPhoto) => console.log(thumbnailPhoto));

	return (
		<View>
			{/* Render toolbar */}
			<Toolbar />
			<GalleryList images={thumbnailPhotos} />
		</View>
	);
};

export default Gallery;
