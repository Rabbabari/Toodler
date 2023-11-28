import { StyleSheet } from "react-native";

export default StyleSheet.create({
	toolbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 120,
		backgroundColor: "white",
	},
	tollbarAction: {
		flex: 1,
		marginTop: 20,
		alignItems: "center",
	},
	toolbarActionText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
	},
});
