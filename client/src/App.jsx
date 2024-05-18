import Router from "./Routers/Router";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`
axios.defaults.withCredentials = true;

function App() {
	return (
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
}

export default App;
