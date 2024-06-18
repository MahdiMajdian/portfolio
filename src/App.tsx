import { Layout } from '@components';
import { motion } from 'framer-motion';
import { useState } from 'react';
const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
};
function App() {
	return (
		<Layout>
			<div className='mx-auto w-full mt-96'>
				<motion.div layout transition={spring}></motion.div>
			</div>
		</Layout>
	);
}

export default App;
