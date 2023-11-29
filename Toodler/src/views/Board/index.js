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

	// const deleteBoards = async () => {
	// 	setLoadingBoards(true);

	// 	setBoards(boards.filter((board) => !boardIDs.includes(board.id)));
	// 	setSelectedBoard([]);

	// 	setLoadingBoards(false);
	// };

	return (
		<View>
			<Toolbar
				hasSelectedBoards={selectedBoards.length > 0}
				onCreate={() => setIsCreateModalOpen(true)}
				//onRemove={() => deleteBoards(selectedBoards)}
			/>
			<BoardList
				onLongPress={(id) => onBoardLongPress(id)}
				selectedBoard={selectedBoards}
				boards={data.boards}
			/>
			<CreateBoardModal
				isOpen={isCreateModalOpen}
				closeModal={() => setIsCreateModalOpen(false)}
				createBoard={() => {}}
				selectFromCameraRoll={() => {}}
			/>
		</View>
	);
};

export default Board;
