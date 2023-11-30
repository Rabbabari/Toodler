import React, { useState } from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/Toolbar";
import BoardList from "../../components/BoardList";
import CreateBoardModal from "../../components/BoardCreateModal";
import data from "../../resources/data.json";

const Board = () => {
	// All boards with the application directory
	const [boards, setBoards] = useState(data.boards);
	// All selected boards
	const [selectedBoards, setSelectedBoard] = useState([]);
	// A boolean flag to indicate if the modal to create a board is open or not
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

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
				//onRemove={() => deleteBoards(selectedBoards)}
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
				takePhoto={() => {}}
				selectFromCameraRoll={() => {}}
				onAddNewBoard={onAddNewBoard}
			/>
		</View>
	);
};

export default Board;
