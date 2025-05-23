


export type ChildrenProps = {
	children: React.ReactNode
}

export type BlogPostType = {
	// From form input
	title: string;
	author: string;
	content: string | React.JSX.Element | React.JSX.Element[];
	tags: string[];
	imageUrl?: string;
	// Added properties
	id: string; // UUID
	date: number; // Timestamp
	authorId: string; // From auth0 user.sub
	userEmail: string; // From auth0
}

