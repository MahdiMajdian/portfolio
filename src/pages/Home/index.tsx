import { Section } from '@/App';
import { Asterisk, Dot, Home, Sparkle } from '@/assets/icons';
import GithubSquares from '@assets/images/github_squares.png';
import { PropsWithChildren } from 'react';

const HomePage = () => {
	return (
		<Section id='1' className='overflow-hidden'>
			<header className='w-full h-[52px] mt-10 grid grid-cols-3 justify-items-center'>
				<div className='flex justify-center items-center gap-4'>
					<img src={GithubSquares} alt='logo' width={44} height={44} />
					<h1 className='text-white text-2xl'>Mahdi Majdian</h1>
				</div>
				<div className='rounded-full w-fit bg-gradient-to-r flex justify-center items-center relative from-[#5DBBD8] to-[#26A641]'>
					<div className='w-[calc(100%-3px)] h-[calc(100%-3px)] whitespace-nowrap ps-2 pe-8 rounded-full bg-[#1C1C1C] text-white flex justify-center items-center gap-10'>
						<span className='px-4 py-2 my-2 rounded-full bg-[#292929]'>
							<Home />
						</span>
						<a>About</a>
						<a>Services</a>
						<a>Contact me</a>
					</div>
				</div>
			</header>
			<div className='flex flex-col justify-center items-center mt-16'>
				<div className='grid grid-cols-6 w-[1024px] h-[30rem] gap-px bg-white/20 -z-20 border border-b-0 border-white/0'>
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks className='relative'>
						<Sparkle className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-50' />
					</GridBlocks>
					<GridBlocks />
					{/* hidden overflow -> */}
					<GridBlocks className='col-span-4 row-span-3 text-white -z-10 max-h-[258px] flex flex-col items-center justify-center'>
						<h2 className='text-4xl'>FrontEnd Developer</h2>
						<div className='self-start animate-track'>
							<div className='self-start rotate-6 flex justify-center flex-col gap-2 items-center mt-3 text-7xl font-extrabold text-white/20 text-nowrap -z-10'>
								<div className=''>
									<span>Pixel Perfect</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Event Loop</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Tree Shaking</span>
								</div>

								<div className=''>
									<span>SSR</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Mobile-First Design</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Lazy Loading</span>
								</div>

								<div className=''>
									<span>i18n</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Code Splitting</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Accessibility</span>
								</div>

								<div className=''>
									<span>Performance</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Core Web Vitals</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Restful APIs</span>
								</div>

								<div className=''>
									<span>GraphQL</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Authentication</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>PWA</span>
									<Dot className='inline fill-white/20 w-6 h-6' />
									<span>Maintainability</span>
								</div>
							</div>
						</div>
					</GridBlocks>
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks>
						<div className='w-full h-full relative'>
							<Sparkle className='absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2' />
						</div>
					</GridBlocks>
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
					<GridBlocks />
				</div>
				<div className='flex justify-center items-center gap-24 py-5 border-t border-b border-white/20 w-full'>
					<p className='text-xl'>Software Development</p>
					<Asterisk />
					<p className='text-xl'>Web Development</p>
					<Asterisk />
					<p className='text-xl'>Web Design</p>
				</div>
			</div>
		</Section>
	);
};

export default HomePage;

function GridBlocks({
	className,
	children,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<div className={`bg-black w-full${className ? ` ${className}` : ''}`}>
			{children}
		</div>
	);
}
