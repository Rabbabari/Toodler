import React from "react";
import { View, FlatList } from "react-native";
import ListName from "../ListName";
import styles from "./styles";

const ListofLists = ({ lists }) => {
	return (
		<View style={styles.listContainer}>
			<FlatList
				numColumns={1}
				data={lists}
				renderItem={({ item }) => {
					return (
						<ListName
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

export default ListofLists;
