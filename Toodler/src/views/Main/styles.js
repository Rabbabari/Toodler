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
		width: 300,
		height: 300,
	},
	button: {
		backgroundColor: "white",
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 40,
		paddingRight: 40,
		borderWidth: 3,
		borderColor: "black",
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 30,
		fontWeight: "bold",
	},
});
