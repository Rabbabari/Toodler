import React from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";
import ListName from "../ListName";
import styles from "./styles";

const ListofLists = ({ lists, onLongPress, selectedLists }) => {
	return (
		<View style={styles.listContainer}>
			<FlatList
				numColumns={1}
				data={lists}
				renderItem={({ item }) => {
					return (
						<ListName
							onLongPress={onLongPress}
							isSelected={selectedLists.indexOf(item.id) != -1}
							id={item.id}
							name={item.name}
							color={item.color}
							boardId={item.boardId}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

ListofLists.propTypes = {
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			color: PropTypes.string,
			boardId: PropTypes.number,
		})
	),
	selectedLists: PropTypes.arrayOf(PropTypes.string),
	onLongPress: PropTypes.func.isRequired,
};

export default ListofLists;
