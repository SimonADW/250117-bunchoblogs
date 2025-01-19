const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const blogPosts = require('./data.js');

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
	}, 1000);
});

// Start the server
app.listen(3000, () => {
	console.log('Server listening on port 3000');
});