import { StyleSheet } from "react-native";

export default StyleSheet.create({
	text: {
		margin: 13,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
	},
	button: {
		paddingVertical: 10,
		marginVertical: 10,
		marginHorizontal: 40,
		borderColor: "black",
		borderRadius: 10,
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 5,
	},
	checkmark: {
		position: "absolute",
		top: 15,
		right: 15,
		fontSize: 16,
	},
});
