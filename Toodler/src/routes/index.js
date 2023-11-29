import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from "../views/Main";
import Board from "../views/Board";
import Lists from "../views/Lists";

const Routes = () => {
	console.log("Routes");
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Board" component={Board} />
				<Stack.Screen name="Lists" component={Lists} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
