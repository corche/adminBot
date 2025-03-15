import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Help from "./Help.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/help" element={<Help />} />
		</Routes>
	</HashRouter>
);
