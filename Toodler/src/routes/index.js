import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Main from "../views/Main";
import Gallery from "../views/Gallery";

const Routes = () => {
	console.log("Routes");
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Gallery" component={Gallery} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
