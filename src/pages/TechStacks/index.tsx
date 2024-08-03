import { Section } from '@/App';
import {
	Sparkles,
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
	ArrowRight,
	ArrowLeft,
} from '@assets/icons';
import { motion, Variants } from 'framer-motion';
import { FunctionComponent, useState } from 'react';

function toRadians(angle: number) {
	return angle * (Math.PI / 180);
}

type IconItemProps = {
	icon: React.ReactNode;
	offsetDegree: number;
	index: number;
};

function IconItem({ icon, offsetDegree, index }: IconItemProps) {
	const variants: Variants = {
		rotate: ({
			isSpotlight,
			angel,
		}: {
			isSpotlight: boolean;
			angel: number;
		}) => ({
			scale: isSpotlight ? 3.5 : 1,
			x: Math.cos(toRadians(angel)) * 500,
			y: Math.sin(toRadians(angel)) * -500,
			transition: {
				duration: 0.15,
				type: 'spring',
				stiffness: 100,
				damping: 10,
			},
		}),
		top: {
			scale: 3,
			transition: {
				duration: 0.25,
				delay: 0.15,
				bounce: 'spring',
				stiffness: 100,
			},
		},
	};
	const animationObject = index === 4 ? ['rotate', 'top'] : ['rotate'];
	return (
		<motion.div
			custom={{
				isSpotlight: index === 4,
				angel: index * offsetDegree + (90 % offsetDegree),
			}}
			initial={false}
			animate={animationObject}
			variants={variants}
			className={`absolute -bottom-40 left-1/2`}
		>
			<div>{icon}</div>
		</motion.div>
	);
}

const items: {
	icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
	name: string;
}[] = [
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
	{ icon: ReactQuery, name: 'ReactQuery' },
	{ icon: Vite, name: 'Vite' },
	{ icon: Eslint, name: 'Eslint' },
	{ icon: Javascript, name: 'Javascript' },
];
const TechStacks = () => {
	const [a, setA] = useState(0);
	const handleRotateRight = () => {
		setA((prev) => {
			const newValue = prev - 1;
			if (newValue === -18 || newValue === 18) return 0;
			return newValue;
		});
	};

	const handleRotateLeft = () => {
		setA((prev) => {
			const newValue = prev + 1;
			if (newValue === -18 || newValue === 18) return 0;
			return newValue;
		});
	};
	return (
		<Section id='2' className='relative overflow-hidden'>
			<h2 className='flex gap-7 mt-10 ms-36 text-3xl text-white'>
				What I do
				<Sparkles />
			</h2>

			<div className='mt-16 ps-10'>
				<div onClick={handleRotateRight}>
					<ArrowRight className='absolute top-1/2 -translate-y-1/2 right-8 fill-white w-20 h-20 ' />
				</div>
				<div onClick={handleRotateLeft}>
					<ArrowLeft className='absolute top-1/2 -translate-y-1/2 left-8 fill-white w-20 h-20 ' />
				</div>
				{a}
				{items.map((item, index) => (
					<>
						<IconItem
							key={item.name}
							icon={<item.icon width={56} height={56} />}
							index={(index + a) % items.length}
							offsetDegree={360 / items.length}
						/>
					</>
				))}
				{/* <div className='absolute bottom-0 inset-x-0 w-full h-44 bg-gradient-to-t from-purple-300 from-55% to-transparent'></div> */}
			</div>
		</Section>
	);
};

export default TechStacks;
