import { StyleSheet } from "react-native";

export default StyleSheet.create({
	toolbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 100,
		backgroundColor: "#dfd5cd",
	},
	toolbarAction: {
		flex: 1,
		marginTop: 15,
		alignItems: "center",
		padding: 10,
		marginVertical: 10,
		marginHorizontal: 5,
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 5,
		backgroundColor: "white",
	},
	toolbarActionText: {
		fontSize: 17,
		fontWeight: "bold",
		color: "black",
	},
});
