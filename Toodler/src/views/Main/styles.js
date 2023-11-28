import { StyleSheet } from "react-native";
import { periwinkle } from "../../styles/colors";

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: periwinkle,
		alignItems: "center",
		justifyContent: "space-around",
	},
	logo: {
		width: 300,
		height: 300,
	},
});
