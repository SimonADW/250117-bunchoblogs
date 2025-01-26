import "./assets/logo/bunchoblogs-logo.jpeg";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import "./App.css";
import Header from "./components/Header/Header";
import BlogList from "./components/Bloglist/BlogList";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header>					
					<NavLink to="/">Home</NavLink>
					<NavLink to="/blogs">Blog Posts</NavLink>
				</Header>

				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blogs" element={<BlogList />} />
						<Route path="/blogpost" element={<BlogPost />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
