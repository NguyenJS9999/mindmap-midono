'use client';
import { useSelector } from 'react-redux';

const Home = () => {
	const { nodes, edges } = useSelector(state => state.mindmap);
	// console.log('Home nodes', nodes);
	// console.log('Home edges', edges);

	return (
		<div>
			<h1>Trang chủ 2</h1>
		</div>
	);
};

export default Home;
