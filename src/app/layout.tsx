import './globals.css';
import { ReactNode } from 'react';
import RootLayout from '@/app/RootLayout';

export const metadata = {
	title: 'thost.dev',
	description: 'blog',
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="h-full bg-gray-100">
			<body className="h-full">
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
