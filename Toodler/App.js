import React from "react";
import AppContainer from "./src/routes";
import { AppProvider } from "./src/services/AppContext";

export default function App() {
	return (
		<AppProvider>
			<AppContainer />
		</AppProvider>
	);
}
