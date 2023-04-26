import { getPostById, getSortedPostsData } from '@/lib/posts';

export async function generateStaticParams() {
	const posts = getSortedPostsData();
	return posts.map((p) => ({ slug: p.id }));
}

export default async function Post({ params }: { params: { slug: string } }) {
	try {
		const post = getPostById(params.slug);
		console.log(post);
		return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
	} catch (e) {
		return <h1>{(e as Error).message}</h1>;
	}
}
