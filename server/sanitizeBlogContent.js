const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

// Create a virtual DOM window for DOMPurify to work in a Node.js environment
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const sanitizeBlogContent = (blogContent)=> {
	try {
		if(typeof blogContent !== "string") {
			throw new Error("Content type should be string, is currently ", typeof blogContent)
		}
		// Use DOMPurify to sanitize the input HTML content
		const purifiedContent = DOMPurify.sanitize(blogContent)
		return purifiedContent;	
	} catch(error) {
		console.error("Error sanitizing content", error)
	}
}

module.exports = sanitizeBlogContent;