import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type PostData = {
	id: string;
	title: string;
	date: string;
};
const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '');

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		} as PostData;
	});
	// Sort posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		}
		return -1;
	});
}

export function getPostById(id: string) {
	const filename = path.join(postsDirectory, `${id}.md`);
	if (fs.existsSync(filename)) {
		const contents = fs.readFileSync(filename, 'utf-8');
		const result = matter(contents);
		return {
			...result,
			content: marked.parse(result.content),
		};
	}
	throw new Error('Post does not exist');
}
