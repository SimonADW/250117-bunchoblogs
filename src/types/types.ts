


export type ChildrenProps = {
	children: React.ReactNode
}

export type BlogPostType = {
	id: number;
	title: string;
	content: string;
	date: string;
	author: string;
	tags: string | string[];
	imageUrl?: string;
	userName: string;
}
