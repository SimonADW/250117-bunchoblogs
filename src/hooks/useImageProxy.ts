import React from "react";

const useImageProxy = (imageUrl: string) => {
	const [imageSrc, setImageSrc] = React.useState<string | null>(null);
	const [error, setError] = React.useState<string | null>(null);
	const [loading, setLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (!imageUrl) return;
		const fetchImage = async () => {
			const proxyUrl = `${encodeURIComponent(
				imageUrl
			)}`;
						
			try {
				setLoading(true);
				const response = await fetch(proxyUrl);
				const blob = await response.blob();
				const objectUrl = URL.createObjectURL(blob);		
						
				setImageSrc(objectUrl);
			} catch (error) {
				setError("Failed to fetch image");
				console.error("Failed to fetch image:", error);
			} finally {
				setLoading(false);
			}	
		};

		fetchImage();
		return () => {
			if (imageSrc) URL.revokeObjectURL(imageSrc);
		};
	}, [imageUrl]);

	return { error, loading, imageSrc };
};

export default useImageProxy;