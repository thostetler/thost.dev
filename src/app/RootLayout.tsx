import { ReactNode } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-full">
			<div className="bg-gray-800 pb-32">
				<header className="py-10">
					<Link href="/" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex align-middle">
						<img src="/android-chrome-512x512.png" className="h-8 w-8 block mr-2" />
						<h1 className="text-3xl font-bold tracking-tight text-white">thost.dev</h1>
					</Link>
				</header>
			</div>

			<main className="-mt-32">
				<div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 bg-white p-4 py-16 border rounded-xl">
					{children}
				</div>
			</main>
		</div>
	);
}
