import React, { useState } from "react";
import { View } from "react-native";
import { useData } from "../../services/AppContext";
import Toolbar from "../../components/BoardToolbar";
import BoardList from "../../components/BoardList";
import CreateBoardModal from "../../components/BoardCreateModal";
import BoardEditModal from "../../components/BoardEditModal";

const Board = () => {
	const { boards, setBoards } = useData();
	const { nextBoardId, setNextBoardId } = useData();
	// All selected boards
	const [selectedBoards, setSelectedBoard] = useState([]);
	// A boolean flag to indicate if the modal to create a board is open or not
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	// A boolean flag to indicate if the modal to edit a board is open or not
	const [isBoardEditModalOpen, setIsBoardEditModalOpen] = useState(false);
	// The board that is being edited
	const [editingBoard, setEditingBoard] = useState(null);

	// When a board is long pressed, we want to select it
	const onBoardLongPress = (boardID) => {
		//if the boars exists, we want to remove it
		if (selectedBoards.includes(boardID)) {
			setSelectedBoard(selectedBoards.filter((ID) => ID !== boardID));
		}
		//Otherwise, we want to add it
		else {
			setSelectedBoard([...selectedBoards, boardID]);
		}
	};

	// Delete the selected board
	const deleteBoard = () => {
		const newBoard = boards.filter(
			(board) => !selectedBoards.includes(board.id)
		);
		setBoards(newBoard);
		setSelectedBoard([]);
	};

	const updateBoard = (board, newName, newThumbnailPhoto, newDescription) => {
		// update the selected task
		board.name = newName;
		board.thumbnailPhoto = newThumbnailPhoto;
		board.description = newDescription;
	};

	// Edit the selected board
	const editSelectedBoards = () => {
		const boardToEdit = boards.find(
			(board) => board.id === selectedBoards[0]
		);
		setEditingBoard(boardToEdit);
		setIsBoardEditModalOpen(true);
		setSelectedBoard([]);
	};

	//Adds the new board to the list of boards
	const onAddNewBoard = (name, description, thumbnailPhoto) => {
		const newBoard = {
			id: nextBoardId,
			name,
			description,
			thumbnailPhoto,
		};
		setNextBoardId(nextBoardId + 1);
		setBoards([...boards, newBoard]);
	};
	return (
		<View style={{ flex: 1 }}>
			<Toolbar
				hasSelectedBoards={selectedBoards.length > 0}
				selectedBoardsLength={selectedBoards.length}
				onCreateBoard={() => setIsCreateModalOpen(true)}
				deleteBoard={() => deleteBoard(selectedBoards)}
				editBoard={() => editSelectedBoards(selectedBoards)}
			/>
			<BoardList
				onLongPress={(id) => onBoardLongPress(id)}
				selectedBoard={selectedBoards}
				boards={boards}
			/>
			<CreateBoardModal
				isOpen={isCreateModalOpen}
				closeModal={() => setIsCreateModalOpen(false)}
				selectFromCameraRoll={() => {}}
				onAddNewBoard={onAddNewBoard}
			/>
			<BoardEditModal
				isOpen={isBoardEditModalOpen}
				closeModal={() => setIsBoardEditModalOpen(false)}
				board={editingBoard}
				updateBoard={updateBoard}
			/>
		</View>
	);
};

export default Board;
