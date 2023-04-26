import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
			<div className="mx-auto max-w-3xl">{children}</div>
		</article>
	);
}
