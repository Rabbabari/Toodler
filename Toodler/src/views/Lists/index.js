import React, { useState, useLayoutEffect } from "react";
import { View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useData } from "../../services/AppContext";
import Toolbar from "../../components/ListsToolbar";
import ListofLists from "../../components/ListofLists";
import AddModal from "../../components/ListsAddModal";
import EditModal from "../../components/ListsEditModal";

const Lists = () => {
	// Accessing the current route and extracting parameters
	const route = useRoute();
	const boardId = route.params?.boardId;
	const boardName = route.params?.boardName; // Extracting the boardName

	// Using the custom hook to access and set lists
	const { lists, setLists } = useData();

	// State for managing selected lists, modals visibility, and editing list
	const [selectedLists, setSelectedLists] = useState([]);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [editingList, setEditingList] = useState(null);

	// Filtering lists to show only those belonging to the current board
	const displayLists = lists.filter((list) => list.boardId === boardId);

	// Access the navigation object to control navigation
	const navigation = useNavigation();

	// Set the screen title to boardName after layout changes
	useLayoutEffect(() => {
		if (boardName) {
			navigation.setOptions({ title: boardName });
		}
	}, [boardName, navigation]); // Re-run effect if boardName or navigation changes

	// Handler for long press on a list item
	const onListLongPress = (id) => {
		if (selectedLists.includes(id)) {
			// Remove list from selection if already selected
			setSelectedLists(selectedLists.filter((listId) => listId !== id));
		} else {
			// Add list to selection if not already selected
			setSelectedLists([...selectedLists, id]);
		}
	};

	// Handler for adding a new list
	const onAddNewList = (name, color) => {
		const newList = {
			id: Math.max(0, ...lists.map((l) => l.id)) + 1,
			name,
			color,
			boardId: boardId,
		};
		setLists([...lists, newList]);
	};

	// Handler for updating an existing list
	const onUpdateList = (id, name, color) => {
		const updatedLists = [...lists].map((list) => {
			if (list.id === id) {
				return { ...list, name, color };
			}
			return list;
		});
		setLists(updatedLists);
		setSelectedLists([]);
	};

	// Handler for deleting selected lists
	const onDeleteSelectedLists = () => {
		setLists(lists.filter((list) => !selectedLists.includes(list.id)));
		setSelectedLists([]);
	};

	// Handler for editing a selected list
	const onEditSelectedList = () => {
		const listToEdit = lists.find((list) => list.id === selectedLists[0]);
		setEditingList(listToEdit);
		setIsEditModalOpen(true);
	};

	// Rendering the component
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
			<EditModal
				isOpen={isEditModalOpen}
				closeModal={() => setIsEditModalOpen(false)}
				list={editingList}
				onUpdateList={onUpdateList}
			/>
		</View>
	);
};

export default Lists;
