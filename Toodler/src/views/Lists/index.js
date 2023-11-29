import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toolbar from "../../components/ListsToolbar";
import ListofLists from "../../components/ListofLists";
import AddModal from "../../components/ListsAddModal";
import data from "../../resources/data.json";

const Lists = () => {
	const route = useRoute();
	const boardId = route.params?.boardId;
<<<<<<< HEAD

	const [lists, setLists] = useState(data.lists);
	const [selectedLists, setSelectedLists] = useState([]);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	const displayLists = lists.filter((list) => list.boardId === boardId);
=======

	// Finding all lists that belong to the board
	const displayLists = data.lists.filter(
		(lists) => lists.boardId === boardId
	);

	const [lists, setLists] = useState(data.lists);
	const [selectedLists, setSelectedLists] = useState([]);
>>>>>>> rebekka

	const onListLongPress = (id) => {
		if (selectedLists.indexOf(id) != -1) {
			setSelectedLists(selectedLists.filter((list) => list !== id));
		} else {
			setSelectedLists([...selectedLists, id]);
		}
	};

	const onAddNewList = (name, color) => {
		const newList = {
			id: Math.max(...lists.map((l) => l.id)) + 1,
			name,
			color,
			boardId: boardId,
		};
		setLists([...lists, newList]);
	};

	return (
		<View style={{ flex: 1 }}>
			<Toolbar
				onAdd={() => setIsAddModalOpen(true)}
				hasSelectedLists={selectedLists.length > 0}
				selectedLists={selectedLists}
			/>
			<ListofLists
				onLongPress={(id) => onListLongPress(id)}
				selectedLists={selectedLists}
				lists={displayLists}
			/>
			<AddModal
				isOpen={isAddModalOpen}
				closeModal={() => setIsAddModalOpen(false)}
				onAddNewList={onAddNewList}
			/>
		</View>
	);
};

export default Lists;
