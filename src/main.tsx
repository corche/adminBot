import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./Help.tsx";
import Tos from "./Tos.tsx";
import Privacy from "./Privacy.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/help" element={<Help />} />
			<Route path="/tos" element={<Tos />} />
			<Route path="/privacy" element={<Privacy />} />
		</Routes>
	</BrowserRouter>
);
