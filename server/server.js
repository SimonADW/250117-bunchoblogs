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

// Proxy for getting the profile image
app.get("/gravatar-proxy", async (req, res) => {
	try {
		// Get original image UTL from query params
		const imageUrl = req.query.url;
		
		// If no url i spassed return a bad request error
		if (!imageUrl) return res.status(400).send('Missing imageUrl query parameter');

		// Fetch the image from the original URL
		const imageResponse = await fetch(imageUrl);

		// Set the content-type of the response to match the image
		res.setHeader("Content-Type", imageResponse.headers.get("Content-Type"));

		// Send image to the client
		imageResponse.body.pipe(res);
	} catch (err) {
		console.error(err);
		res.status(500).send('Error fetching image');
	}
});


// Start the server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
