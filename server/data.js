const path = require('path');
const fs = require('fs');

// Get blogPosts from JSON file
const dataFilePath = path.join(__dirname, 'data.json');

const loadBlogPosts = ()=> {
	try {
		const jsonData = fs.readFileSync(dataFilePath, 'utf8');
		return JSON.parse(jsonData);
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
		const jsonData = fs.readFileSync(dataFilePath, 'utf8');
		const data = JSON.parse(jsonData);
		data.push(newPost);			
		console.log(`New post to be added: ${newPost}`);		
		fs.writeFileSync(dataFilePath, JSON.stringify(data))
	} catch (err) {
		console.error("Error adding post", err);
	}
}

module.exports = { loadBlogPosts, addBlogPost };