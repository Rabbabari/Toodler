import { StyleSheet } from "react-native";

export default StyleSheet.create({
	toolbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 100,
		backgroundColor: "white",
	},
	toolbarAction: {
		flex: 1,
		alignItems: "center",
	},
	toolbarActionText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
	},
});
