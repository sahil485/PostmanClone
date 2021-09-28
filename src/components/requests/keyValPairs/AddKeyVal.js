import React, { useContext, useState } from 'react';
import { AppContext } from '../../../Context';
import { FormInput } from './elements.keys';

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
				<FormInput type="key" value={key} onChange={e => {setKey(e.target.value)}} placeholder="key" required/>
				<FormInput type="url" value={value} onChange={e => {setValue(e.target.value)}} placeholder="value"/>
				<button onClick={handleAddPair}>Add</button>
			
		</>
	);
};

export default AddKeyVal;