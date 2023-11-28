import React from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/ListsToolbar";
import ListofLists from "../../components/ListofLists";
import data from "../../resources/data.json";

const Lists = () => {
	return (
		<View style={{ flex: 1 }}>
			<Toolbar />
			<ListofLists lists={data.lists} />
		</View>
	);
};

export default Lists;
