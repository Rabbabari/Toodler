import React, { useState } from "react";
import { useData } from "../../services/AppContext";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toolbar from "../../components/ListsToolbar";
import ListofLists from "../../components/ListofLists";
import AddModal from "../../components/ListsAddModal";

const Lists = () => {
	const route = useRoute();
	const boardId = route.params?.boardId;
	const { lists, setLists } = useData(lists, setLists);
	const [selectedLists, setSelectedLists] = useState([]);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	const displayLists = lists.filter((list) => list.boardId === boardId);

	const onListLongPress = (id) => {
		if (selectedLists.indexOf(id) !== -1) {
			setSelectedLists(selectedLists.filter((list) => list !== id));
		} else {
			setSelectedLists([...selectedLists, id]);
		}
	};

	const onAddNewList = (name, color) => {
		const newList = {
			id: Math.max(0, ...lists.map((l) => l.id)) + 1,
			name,
			color,
			boardId: boardId,
		};
		setLists([...lists, newList]);
	};

	const onDeleteSelectedLists = () => {
		const newLists = lists.filter(
			(list) => !selectedLists.includes(list.id)
		);
		setLists(newLists);
		setSelectedLists([]);
	};

	return (
		<View style={{ flex: 1 }}>
			<Toolbar
				onAdd={() => setIsAddModalOpen(true)}
				hasSelectedLists={selectedLists.length > 0}
				selectedLists={selectedLists}
				onDelete={onDeleteSelectedLists}
			/>
			<ListofLists
				onLongPress={onListLongPress}
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
