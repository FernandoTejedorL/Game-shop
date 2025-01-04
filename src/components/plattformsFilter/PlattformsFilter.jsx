import { useContext, useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import {
	StyledChevron,
	StyledPlatSelDiv,
	StyledPlattformsSelectorDiv,
	StyledPlattSelector
} from './plattformsFilter.styles';
import { CartContext } from '../../contexts/CartContext';

const PlattformsFilter = () => {
	const { filterGames } = useContext(CartContext);
	const [plattHidder, setPlattHidder] = useState(true);

	return (
		<StyledPlattformsSelectorDiv>
			<StyledPlatSelDiv>
				<h3>Plattforms</h3>
				<StyledChevron
					$plattHidder={plattHidder}
					onClick={() => setPlattHidder(!plattHidder)}
					src='/assets/images/chevron-up.svg'
					alt=''
				/>
			</StyledPlatSelDiv>
			<StyledPlattSelector $plattHidder={plattHidder}>
				<Checkbox filterGames={filterGames} filter={'PC'} text={'PC'} />
				<Checkbox
					filterGames={filterGames}
					filter={'PS5'}
					text={'Play Station 5'}
				/>
				<Checkbox
					filterGames={filterGames}
					filter={'PS4'}
					text={'Play Station 4'}
				/>
			</StyledPlattSelector>
		</StyledPlattformsSelectorDiv>
	);
};

export default PlattformsFilter;
