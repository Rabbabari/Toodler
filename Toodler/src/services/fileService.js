import * as FileSystem from "expo-file-system";
const imageDirectory = `${FileSystem.documentDirectory}images`;

export const copyFile = async (file, newLocation) => {
	return await FileSystem.copyAsync({
		from: file,
		to: newLocation,
	});
};

export const addImage = async (imageLocation) => {
	const folderSplit = imageLocation.split("/");
	const fileName = folderSplit[folderSplit.length - 1];

	await copyFile(imageLocation, `${imageDirectory}/${fileName}`);

	return {
		name: fileName,
		type: "image",
		uri: await loadImage(fileName),
	};
};


