import { PropsWithChildren } from 'react';
import { Layout } from './components';
import {
	Asterisk,
	Home,
	Sparkle,
	Dot,
	Sparkles,
	OutlinedCircle,
	WorldGrid,
	Vite,
	Redux,
	Typescript,
	Javascript,
	Tailwind,
	Stylex,
	Styled,
	Sass,
	React,
	ReactQuery,
	Prettier,
	Nextjs,
	Mobx,
	Jest,
	GraphQL,
	Git,
	Eslint,
} from '@assets/icons';
import GithubSquares from '@assets/images/github_squares.png';
function Section({
	children,
	id,
	className,
}: PropsWithChildren<{ className?: string; id?: string }>) {
	return (
		<section
			id={id}
			className={`page-section w-screen snap-start flex-none h-full ${className}`}>
			{children}
		</section>
	);
}

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

function App() {
	return (
		<Layout>
			<Section id='1'>
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
						<GridBlocks className='col-span-4 row-span-3 overflow-hidden text-white -z-10 h-full flex flex-col items-center justify-center'>
							<h2 className='text-4xl'>FrontEnd Developer</h2>
							<div className='self-start animate-track'>
								<p className='self-start rotate-12 flex justify-center items-center gap-3 mt-3 text-9xl font-extrabold text-white/20 text-nowrap -z-10'>
									5+ years of experience
									<Dot className='fill-white w-3 h-3' />
									Super okay!
								</p>
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
			<Section id='2'>
				<h2 className='flex gap-7 mt-10 ms-36 text-3xl text-white'>
					What I do
					<Sparkles />
				</h2>
				<div className='mt-16 ps-10'>
					<Test />
					<div className='w-12 h-12'>
						<Eslint />
					</div>
				</div>
			</Section>
		</Layout>
	);
}

export default App;

function Test() {
	return (
		<div className='flex gap-16'>
			<div className='relative'>
				<div className='absolute left-1/2  bg-white/20 w-px h-full'></div>
				<div className='w-24 h-24 bg-[#101111] relative flex justify-center items-center'>
					<OutlinedCircle />
					<span className='absolute inset-0 flex justify-center items-center text-2xl'>
						1
					</span>
				</div>
			</div>
			<div className='pt-5 w-2/3 flex flex-col gap-6'>
				<WorldGrid />
				<h3 className='text-2xl'>Software Development</h3>
				<p className='text-xl mb-16'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
					mollitia incidunt temporibus laborum
				</p>
			</div>
		</div>
	);
}
