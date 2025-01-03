import { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';
import {
	StyledChevron,
	StyledPlatSelDiv,
	StyledPlattformsSelectorDiv,
	StyledPlattSelector
} from './plattformsFilter.styles';

const PlattformsFilter = () => {
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
				<Checkbox filter={'PC'} plattform={'PC'} />
				<Checkbox filter={'PS4'} plattform={'Play Station 5'} />
				<Checkbox filter={'PS5'} plattform={'Play Station 4'} />
			</StyledPlattSelector>
		</StyledPlattformsSelectorDiv>
	);
};

export default PlattformsFilter;
