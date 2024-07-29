import { Section } from '@/App';
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
import { motion } from 'framer-motion';
import { useState } from 'react';

function IconItem({
	icon,
	offsetDegree,
	index,
}: {
	offsetDegree: number;
	index: number;
	icon: React.ReactNode;
}) {
	return (
		<motion.div
			layout
			style={{
				transform: `rotate(${
					index * offsetDegree
				}deg) translate(calc(-512px + 50%))`,
			}}
			className='absolute bottom-0 left-1/2 w-12 h-12 origin-[0%_50%]'
		>
			<div style={{ transform: `rotate(${-1 * index * offsetDegree}deg)` }}>
				{icon}
			</div>
		</motion.div>
	);
}

const items = [
	{ icon: Git, name: 'Git' },
	{ icon: GraphQL, name: 'GraphQL' },
	{ icon: Jest, name: 'Jest' },
	{ icon: Mobx, name: 'Mobx' },
	{ icon: Nextjs, name: 'Nextjs' },
	{ icon: Prettier, name: 'Prettier' },
	{ icon: React, name: 'React' },
	{ icon: ReactQuery, name: 'ReactQuery' },
	{ icon: Sass, name: 'Sass' },
	{ icon: Styled, name: 'Styled' },
	{ icon: Stylex, name: 'Stylex' },
	{ icon: Tailwind, name: 'Tailwind' },
	{ icon: Typescript, name: 'Typescript' },
	{ icon: Redux, name: 'Redux' },
	{ icon: Vite, name: 'Vite' },
	{ icon: WorldGrid, name: 'WorldGrid' },
	{ icon: OutlinedCircle, name: 'OutlinedCircle' },
	{ icon: Sparkle, name: 'Sparkle' },
	{ icon: Dot, name: 'Dot' },
	{ icon: Asterisk, name: 'Asterisk' },
	{ icon: Home, name: 'Home' },
	{ icon: Eslint, name: 'Eslint' },
	{ icon: Javascript, name: 'Javascript' },
];
const TechStacks = () => {
	const [a, setA] = useState(0);
	return (
		<Section id='2' className='relative overflow-hidden'>
			<h2 className='flex gap-7 mt-10 ms-36 text-3xl text-white'>
				What I do
				<Sparkles />
			</h2>

			<div className='mt-16 ps-10'>
				{/* <input
					type='range'
					min={0}
					max={100}
					value={angel}
					onChange={(e) => setAngel(e.target.valueAsNumber)}
				/> */}

				{/* <motion.div
					style={{
						transform: `rotate(${
							angel * 1.8
						}deg) translate(calc(-112px + 50%))`,
					}}
					className='absolute bottom-0 left-1/2 w-12 h-12 origin-[0%_50%]'
				>
					<Eslint />
					<IconItem icon={Eslint} />
				</motion.div> */}
				<p className='text-white' onClick={() => setA((prev) => prev + 1)}>
					Click on the icons to see the animation
				</p>
				{a}
				{items.map((item, index) => (
					<IconItem
						key={item.name}
						icon={<item.icon />}
						index={index + a}
						offsetDegree={15}
					/>
				))}
				{/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12'>
					<Mobx />
				</div> */}
			</div>
		</Section>
	);
};

export default TechStacks;
