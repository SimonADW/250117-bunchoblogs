const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const { loadBlogPosts, addBlogPost } = require('./data.js');

// Get blogposts from data.json (via data.js)
const blogPosts = loadBlogPosts();

// Satisfy CORS policy
app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);

// Serve static files ( images ) 
app.use('/static', express.static(path.join(__dirname, 'public')));

// Serve the blog posts
app.get('/', (req, res) => {
	console.log('Get request received');
	setTimeout(() => {
		// Simulate Loadtime
		res.status(200).json(blogPosts);
	}, 300);
});


// Single blog post serving ----------------------
app.get("/blogs/:id", (req, res) => {
	console.log("SINGLE Request received");
	try {
		const blog = blogPosts[Number(req.params.id - 1)];  // Use index of the blogpost
		setTimeout(() => {
			// Simulate Loadtime
			res.status(200).json(blog);
		}, 300);

		if (!blog) return res.status(404).json({ message: "Blog not found" });

	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
});


// Start the server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
