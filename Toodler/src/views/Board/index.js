import React, { useState } from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/Toolbar";
import BoardList from "../../components/BoardList";
import data from "../../resources/data.json";

const Board = () => {
	// All boards with the application directory
	const [boards, setBoards] = useState(data.boards);
	// All selected boards
	const [selectedBoards, setSelectedBoard] = useState([]);

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

	return (
		<View>
			<Toolbar hasSelectedBoards={selectedBoards.length > 0} />
			<BoardList
				onLongPress={(id) => onBoardLongPress(id)}
				selectedBoard={selectedBoards}
				boards={data.boards}
			/>
		</View>
	);
};

export default Board;
