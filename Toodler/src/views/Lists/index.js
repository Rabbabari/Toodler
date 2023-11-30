import React, { useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useData } from "../../services/AppContext";
import Toolbar from "../../components/ListsToolbar";
import ListofLists from "../../components/ListofLists";
import AddModal from "../../components/ListsAddModal";
import EditModal from "../../components/ListsEditModal";

const Lists = () => {
	const route = useRoute();
	const boardId = route.params?.boardId;
	const { lists, setLists } = useData();
	const [selectedLists, setSelectedLists] = useState([]);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [editingList, setEditingList] = useState(null);

	const displayLists = lists.filter((list) => list.boardId === boardId);

	const onListLongPress = (id) => {
		if (selectedLists.includes(id)) {
			setSelectedLists(selectedLists.filter((listId) => listId !== id));
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

	const onUpdateList = (id, name, color) => {
		const updatedLists = lists.map((list) => {
			if (list.id === id) {
				return { ...list, name, color };
			}
			return list;
		});
		setLists(updatedLists);
	};

	const onDeleteSelectedLists = () => {
		setLists(lists.filter((list) => !selectedLists.includes(list.id)));
		setSelectedLists([]);
	};

	const onEditSelectedList = () => {
		const listToEdit = lists.find((list) => list.id === selectedLists[0]);
		setEditingList(listToEdit);
		setIsEditModalOpen(true);
	};

	return (
		<View style={{ flex: 1 }}>
			<Toolbar
				onAdd={() => setIsAddModalOpen(true)}
				onEdit={onEditSelectedList}
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
			{editingList && (
				<EditModal
					isOpen={isEditModalOpen}
					closeModal={() => setIsEditModalOpen(false)}
					list={editingList}
					onUpdateList={onUpdateList}
				/>
			)}
		</View>
	);
};

export default Lists;
