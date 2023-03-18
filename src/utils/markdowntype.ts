export interface PostLayout {
	title: string;
	pubDate: string;
	author: string;
	description: string;
	image: {
		url: string;
		alt: string;
	};
	url: string;
	tags: string[];
}
