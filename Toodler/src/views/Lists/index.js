import React, { useState } from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/ListsToolbar";
import ListofLists from "../../components/ListofLists";
import data from "../../resources/data.json";

const Lists = () => {
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
				lists={lists}
			/>
		</View>
	);
};

export default Lists;
