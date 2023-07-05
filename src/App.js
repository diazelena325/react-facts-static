import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
	const [darkMode, setDarkMode] = React.useState(false);

	function toggleMode() {
		setDarkMode((prevMode) => !prevMode);
	}

	return (
		<div className="container">
			<Navbar darkMode={darkMode} toggleDarkMode={toggleMode} />
			<Main darkMode={darkMode} />
		</div>
	);
}

export default App;
