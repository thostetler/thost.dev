import { getSortedPostsData, PostData } from '@/lib/posts';

function Post({ post }: { post: PostData }) {
	return (
		<li>
			<div className="relative pb-8">
				<div className="relative flex space-x-3">
					<div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
						<div>
							<p className="text-sm text-gray-500">
								<a href={`/post/${post.id}`} className="font-medium text-gray-700">
									{post.title}
								</a>
							</p>
						</div>
						<div className="whitespace-nowrap text-right text-sm text-gray-900">
							<time dateTime={post.date}>{post.date}</time>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

export default function Home() {
	const allPostsData = getSortedPostsData() as PostData[];

	return (
		<ul className="-mb-8">
			{allPostsData.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</ul>
	);
}
