import { StyleSheet } from "react-native";

export default StyleSheet.create({
	text: {
		margin: 13,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
	},
	button: {
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 10,
		marginTop: 10,
		marginLeft: 40,
		marginRight: 40,
		paddingLeft: 20,
		paddingRight: 20,
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
