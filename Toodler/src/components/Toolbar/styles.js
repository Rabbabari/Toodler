import { StyleSheet } from "react-native";

export default StyleSheet.create({
	toolbar: {
		flexDirection: "row",
		//alignItems: "center",
		justifyContent: "center",
		paddingTop: 10,
		paddingBottom: 10,
		height: 80,
		backgroundColor: "white",
	},
	toolbarAction: {
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
