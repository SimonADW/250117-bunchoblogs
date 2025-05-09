// Handle image upload
export const uploadImage = async (file: File): Promise<string> => {
	const formData = new FormData();
	formData.append("image", file);

	try {
		const response = await fetch("http://localhost:3000/upload", {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			throw new Error("Failed to upload image");
		}

		const result = await response.json();
		return result.imageUrl; // Resolve the Promise with the image URL
	} catch (error) {
		console.error("Error uploading image: ", error);
		throw error; // Re-throw the error to handle it in the calling function
	}
};
