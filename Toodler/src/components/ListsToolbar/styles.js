import { StyleSheet } from "react-native";

export default StyleSheet.create({
	toolbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 100,
		backgroundColor: "#dfd5cd",
	},
	tollbarAction: {
		flex: 1,
		marginTop: 15,
		alignItems: "center",
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 10,
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		paddingLeft: 10,
		paddingRight: 10,
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
