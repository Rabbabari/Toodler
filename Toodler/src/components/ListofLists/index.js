// Importing necessary modules from React and React Native
import React from "react";
import PropTypes from "prop-types"; // For prop type checking
import { View, FlatList } from "react-native"; // Importing components from react-native
import ListName from "../ListName"; // Importing the ListName component
import styles from "./styles"; // Importing custom styles

// ListofLists component definition
const ListofLists = ({ lists, onLongPress, selectedLists }) => {
	return (
		<View style={styles.listContainer}>
			{/* FlatList to render a list of items */}
			<FlatList
				numColumns={1} // Setting the number of columns to 1
				data={lists} // Data for the list
				renderItem={({ item }) => {
					// Rendering each item using the ListName component
					return (
						<ListName
							onLongPress={onLongPress} // Passing onLongPress function
							isSelected={selectedLists.indexOf(item.id) !== -1} // Check if the list is selected
							id={item.id} // List id
							name={item.name} // List name
							color={item.color} // List color
							boardId={item.boardId} // Board id of the list
						/>
					);
				}}
				keyExtractor={(item) => item.id} // Key extractor for the list items
			/>
		</View>
	);
};

ListofLists.propTypes = {
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired, // Each list item should have an id
			name: PropTypes.string.isRequired, // Each list item should have a name
			color: PropTypes.string.isRequired, // Each list item should have a color
			boardId: PropTypes.number.isRequired, // Each list item should belong to a board
		})
	).isRequired, // Lists array is required
	selectedLists: PropTypes.arrayOf(PropTypes.number).isRequired, // Array of selected list ids
	onLongPress: PropTypes.func.isRequired, // Function to be called on long press
};

export default ListofLists;
