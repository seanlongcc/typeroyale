import Button from './button.component';
import { useState } from 'react';

const PracticeModes = () => {
	const [selected, setSelected] = useState(false);

	return (
		<div>
			{/*upper half*/}
			<div className='grid grid-cols-4 border-solid border-2 border-black'>
				<Button label={'time'} border={'border-solid border-2 border-black'} />
				<Button label={'words'} border={'border-solid border-2 border-black'} />
				<Button
					label={'passage'}
					border={'border-solid border-2 border-black'}
				/>
				<Button
					label={'custom'}
					border={'border-solid border-2 border-black'}
				/>
			</div>
			{/*lower half*/}
			<div>
				<Button
					label={
						'will split each upper half into its own component to make the lower half ez'
					}
				/>
			</div>
		</div>
	);
};

export default PracticeModes;
