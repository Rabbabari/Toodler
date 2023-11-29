import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toolbar from "../../components/ListsToolbar";
import ListofLists from "../../components/ListofLists";
import data from "../../resources/data.json";

const Lists = () => {
	const route = useRoute();
	const boardId = route.params?.boardId;
	console.log(boardId);
	const displayLists = data.lists.filter(
		(lists) => lists.boardId === boardId
	);

	const [lists, setLists] = useState(data.lists);
	const [selectedLists, setSelectedLists] = useState([]);
	const onListLongPress = (id) => {
		if (selectedLists.indexOf(id) != -1) {
			setSelectedLists(selectedLists.filter((list) => list !== id));
		} else {
			setSelectedLists([...selectedLists, id]);
		}
	};
	return (
		<View style={{ flex: 1 }}>
			<Toolbar
				hasSelectedLists={selectedLists.length > 0}
				selectedLists={selectedLists}
			/>
			<ListofLists
				onLongPress={(id) => onListLongPress(id)}
				selectedLists={selectedLists}
				lists={displayLists}
			/>
		</View>
	);
};

export default Lists;
