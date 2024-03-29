import React from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import BoardThumbnail from "../BoardThumbnail";

const BoardList = ({ boards, selectedBoard, onLongPress }) => {
	return (
		<View style={styles.listContainer}>
			<FlatList
				numColumns={2}
				data={boards}
				renderItem={({
					item: { id, name, description, thumbnailPhoto },
				}) => {
					return (
						<BoardThumbnail
							id={id}
							name={name}
							description={description}
							URL={thumbnailPhoto}
							onLongPress={onLongPress}
							isSelected={selectedBoard.indexOf(id) !== -1}
						/>
					);
				}}
				keyExtractor={(board) => board.id}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

BoardList.propTypes = {
	// A list of boards to display
	boards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			thumbnailPhoto: PropTypes.string,
		})
	),
	// A list of selected boards
	selectedBoard: PropTypes.arrayOf(PropTypes.number),
	// when a board is long pressed
	onLongPress: PropTypes.func.isRequired,
};

export default BoardList;
