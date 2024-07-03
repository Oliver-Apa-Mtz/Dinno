import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
	return (
		<AnimatedCursor
			innerSize={15}
			outerSize={35}
			color='87, 60, 255'
			outerAlpha={0.4}
			innerScale={1.2}
			outerScale={1.5}
		/>
	);
};

export default Cursor;