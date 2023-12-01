import { StyleSheet } from "react-native";
import { pink } from "../../styles/colors";

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 70,
		alignItems: "center",
		justifyContent: "space-around",
		fontWeight: 100,
		backgroundColor: pink,
	},
	logo: {
		width: 350,
		height: 350,
	},
	button: {
		backgroundColor: "white",
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 40,
		paddingRight: 40,
		borderWidth: 0,
		borderColor: "black",
		borderRadius: 24,
		width: 300,
		height: 80,
		shadowColor: "#000",
		shadowOffset: {
			width: 7,
			height: 7,
		},
		shadowOpacity: 0.3,
		shadowRadius: 3.84,
		elevation: 5,
	},
	buttonText: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
});
