


export type ChildrenProps = {
	children: React.ReactNode
}

export type BlogPostType = {
	id: string; // UUID
	title: string;
	content: string;
	date: number; // Timestamp
	author: string;
	tags: string[];
	imageUrl?: string;
	userName: string;
}

