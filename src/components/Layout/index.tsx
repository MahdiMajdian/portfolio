import { PropsWithChildren, useEffect } from 'react';

function Layout({ children }: PropsWithChildren) {
	useEffect(() => {
		let currentPage: Element;
		const pages = Array.from(document.querySelectorAll('.page-section'));

		const intersectionCallback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					currentPage = entry.target;
				}
			});
		};
		const observer = new IntersectionObserver(intersectionCallback, {
			root: null, // Use the viewport as the root
			threshold: 0.5,
		});

		pages.forEach((section) => observer.observe(section));

		const scrollContainer = document.querySelector(
			'.scroll-container'
		) as HTMLDivElement;

		// let start = Date.now();
		scrollContainer.addEventListener('wheel', (event: WheelEvent) => {
			event.preventDefault();
			// if (Date.now() - start < 50) {
			// 	start = Date.now();
			// 	return;
			// }

			const direction = event.deltaY > 0 ? 1 : -1;

			const next =
				pages[pages.findIndex((page) => page === currentPage) + direction];

			if (next) {
				// start = Date.now();
				scrollContainer.scrollTo({
					left: next.getBoundingClientRect().width * (+next.id - 1),
					top: 0,
					behavior: 'smooth',
				});
			}
		});
	}, []);

	return (
		<>
			<main className='scroll-container snap-x snap-mandatory no-scrollbar poppins-regular text-white flex overflow-x-scroll w-full h-full'>
				{children}
			</main>
		</>
	);
}

export default Layout;
