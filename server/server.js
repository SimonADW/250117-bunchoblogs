const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const { loadBlogPosts, addBlogPost } = require('./data.js');
// Require multer for uploading files
const multer = require("multer");


// Middleware to parse JSON
app.use(express.json());

// Satisfy CORS policy
app.use(
	cors({
		origin: ['http://localhost:5173','http://localhost:4173'],
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);

// Serve static files ( images ) ----------------------
app.use('/static', express.static(path.join(__dirname, 'public')));

// Serve the blog posts
app.get('/', (req, res) => {
	// Get sanitized blogposts from data.json (via data.js)
	const blogPosts = loadBlogPosts();

	console.log('Get request received');
	setTimeout(() => {
		// Simulate Loadtime
		res.status(200).json(blogPosts);
	}, 300);
});


// Single blog post serving ----------------------
app.get("/blogs/:id", (req, res) => {
	console.log("SINGLE Request received");
	// Get sanitized blogposts from data.json (via data.js)
	const blogPosts = loadBlogPosts();
	try {
		const blog = blogPosts.filter((blogpost)=> blogpost.id.toString() === req.params.id.toString());
		
		setTimeout(() => {
			// Simulate Loadtime
			res.status(200).json(blog[0]);
		}, 300);

		if (!blog) return res.status(404).json({ message: "Blog not found" });

	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
});

// Post new blog and add to end of data.json array ----------------------
app.post("/blogs/add-post", (req, res)=> {
	try {
		const newBlogPost = req.body;		
		addBlogPost(newBlogPost);
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}

	console.log("POST request received")
})

// Post new image to server/public/images ----------------------
const upload = multer({ dest: "public/images/" });

app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({ imageUrl: `${req.file.filename}` });
});


// Start the server ----------------------
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
