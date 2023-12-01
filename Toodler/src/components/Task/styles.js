import { StyleSheet } from "react-native";

export default StyleSheet.create({
	listContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		// justifyContent: "space-between",
		// flexWrap: "wrap",
		maxWidth: "80%",
		padding: 10,
		marginTop: 10,
		marginLeft: 5,
	},
	taskName: {
		fontSize: 18,
	},
	taskDescription: {
		fontSize: 16,
		marginTop: 5,
		marginLeft: 10,
	},
	checkmark: {
		position: "absolute",
		top: 15,
		right: 15,
		fontSize: 16,
	},
});
