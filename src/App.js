import "./App.css";
import Game from "./components/Game";
import "fontsource-roboto";
import { AppProvider } from "./AppContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import LinkToRepo from "./components/LinkToRepo";

function App() {
	const handleFullscreen = useFullScreenHandle();

	return (
		<AppProvider>
			<FullScreen handle={handleFullscreen}>
				<div className="App">
					<Game handleFullscreen={handleFullscreen} />
					<LinkToRepo />
				</div>
			</FullScreen>
		</AppProvider>
	);
}

export default App;
