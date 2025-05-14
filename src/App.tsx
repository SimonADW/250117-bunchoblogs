import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import "./assets/styles/fonts.css";
import "./App.css";
import Header from "./components/Header/Header";
import BlogList from "./components/Bloglist/BlogList";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./components/BlogPost/BlogPost";
import Footer from "./components/Footer/Footer";
import BackgroundDot from "./components/BackgroundDot/BackgroundDot";
import AddBlogpost from "./pages/AddBlogpost";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { isAuthenticated, user } = useAuth0();

	
	return (
		<>
			<BrowserRouter>
				<Header>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/blogs">Blog Posts</NavLink>
				</Header>

				<main>
					<BackgroundDot />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blogs" element={<BlogList />} />
						<Route path="/blogs/:id" element={<BlogPost />} />

						{/* Only access route if authenticated */}
						{(isAuthenticated && user) && (
							<>							
								<Route path="/blogs/my-posts" element={<BlogList writer={user.email}/>} />
								<Route path="/add-blog" element={<AddBlogpost userEmail={user.email as string} />} />
							</>
						)}
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;