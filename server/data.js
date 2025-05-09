const path = require('path');
const fs = require('fs');
const sanitizeBlogContent = require('./sanitizeBlogContent');


// Get blogPosts from JSON file
const dataFilePath = path.join(__dirname, 'data.json');

const loadBlogPosts = ()=> {
	try {
		// Get and parse data
		const jsonData = fs.readFileSync(dataFilePath, 'utf8');		
		const parsedData = JSON.parse(jsonData);
		
		// Sanitize HTML content of each blogpost		
		for (blogPost of parsedData) {
			blogPost.content = sanitizeBlogContent(blogPost.content);
		}
		
		return parsedData;
	} catch (err){
		console.error('Error reading data file:', err);
		return [];
	}
}


const addBlogPost = (newPost)=> {
	try {
		if (!newPost || (typeof newPost !== 'object')) {
			throw new Error(`Failed to add blog. New blog entry is ${typeof newPost}`)
		}

		// Get array of data
		const jsonData = fs.readFileSync(dataFilePath, 'utf8');
		const data = JSON.parse(jsonData);

		// Add new post to data
		data.push(newPost);			
		console.log(`New post to be added: ${newPost}`);		

		// Overwrite data with new data containing new post
		fs.writeFileSync(dataFilePath, JSON.stringify(data))
	} catch (err) {
		console.error("Error adding post", err);
	}
}

module.exports = { loadBlogPosts, addBlogPost };