import { PropsWithChildren } from 'react';
import { Layout } from './components';
import HomePage from './pages/Home';
import TechStacks from './pages/TechStacks';

export function Section({
	children,
	id,
	className,
}: PropsWithChildren<{ className?: string; id?: string }>) {
	return (
		<section
			id={id}
			className={`page-section w-screen snap-start flex-none h-full ${className}`}
		>
			{children}
		</section>
	);
}

function App() {
	return (
		<Layout>
			<HomePage />
			<TechStacks />
		</Layout>
	);
}

export default App;
