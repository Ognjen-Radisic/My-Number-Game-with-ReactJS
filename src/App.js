import "./App.css";
import Game from "./components/Game";
import "fontsource-roboto";
import { AppProvider } from "./AppContext";

function App() {
	return (
		<AppProvider>
			<div className="App">
				<Game />
			</div>
		</AppProvider>
	);
}

export default App;
