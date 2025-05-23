


export type ChildrenProps = {
	children: React.ReactNode
}

export type BlogPostType = {
	id: string; // UUID
	title: string;
	content: string | React.JSX.Element | React.JSX.Element[];
	date: number; // Timestamp
	author: string;
	tags: string[];
	imageUrl?: string;
	userEmail: string;
	authorId: string;
}

