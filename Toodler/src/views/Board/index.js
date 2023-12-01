import React, { useState } from "react";
import { View } from "react-native";
import { useData } from "../../services/AppContext";
import Toolbar from "../../components/BoardToolbar";
import BoardList from "../../components/BoardList";
import CreateBoardModal from "../../components/BoardCreateModal";
import BoardEditModal from "../../components/BoardEditModal";

const Board = () => {
	const { boards, setBoards } = useData();
	// All selected boards
	const [selectedBoards, setSelectedBoard] = useState([]);
	// A boolean flag to indicate if the modal to create a board is open or not
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isBoardEditModalOpen, setIsBoardEditModalOpen] = useState(false);

	const [editingBoard, setEditingBoard] = useState(null);

	const onBoardLongPress = (boardID) => {
		//if the boars exists, we want to remove it
		if (selectedBoards.includes(boardID)) {
			setSelectedBoard(selectedBoards.filter((ID) => ID !== boardID));
		}
		//Otherwise, we want to add it
		else {
			//console.log(boardID);
			setSelectedBoard([...selectedBoards, boardID]);
		}
	};

	const deleteBoard = () => {
		const newBoard = boards.filter(
			(board) => !selectedBoards.includes(board.id)
		);
		setBoards(newBoard);
		setSelectedBoard([]);
	};

	const updateBoard = (boardId) => {
		// NOTE
		// update the selected task
	};

	const editSelectedBoards = () => {
		const boardToEdit = boards.find(
			(board) => board.id === selectedBoards[0]
		);
		setEditingBoard(boardToEdit);
		setIsBoardEditModalOpen(true);
	};

	//Adds the new board to the list of boards
	const onAddNewBoard = (name, thumbnailPhoto) => {
		console.log("I'm here");
		const newBoard = {
			id: Math.max(...boards.map((b) => b.id)) + 1,
			name,
			thumbnailPhoto,
		};
		setBoards([...boards, newBoard]);
	};

	return (
		<View>
			<Toolbar
				hasSelectedBoards={selectedBoards.length > 0}
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
				onCreateBoard={() => {}}
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
