import React, { useContext, useState } from 'react';
import { AppContext } from '../../../Context';
import { FormInput, PairRow } from './elements.keys';
import { Button } from '../../../globalStyles';

const AddKeyVal = () => {
	const { dispatchKeyVal } = useContext(AppContext);
	const [ key, setKey ] = useState('');
	const [ value, setValue ] = useState('');

	const handleAddPair = () => {
		console.log(key, value)
		if(key === '' || value === '')
		{
			return
		}
		dispatchKeyVal(key, value, "ADD");
		setKey('');
		setValue('');
	};


	return (
		<>
			<PairRow>

				<FormInput type="key" value={key} onChange={e => {setKey(e.target.value)}} placeholder="enter key"/>
				<FormInput type="url" value={value} onChange={e => {setValue(e.target.value)}} placeholder="enter value"/>
				<Button onClick={handleAddPair}>Add</Button>
			</PairRow>
			
		</>
	);
};

export default AddKeyVal;