const Game = ({ title, plattform, image }) => {
	return (
		<div>
			<span>
				{title} - {plattform}
			</span>
			<img src={image} alt='game-image' />
		</div>
	);
};

export default Game;
