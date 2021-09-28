import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../Context';
import { PairRow, FormInput1 } from './elements.keys';
import { DeleteButton} from './elements.keys';

const KeyValPair = (props) => {
	const { dispatchKeyVal } = useContext(AppContext);

	const handleRemovePair = () => {
        dispatchKeyVal(props.KEY, props.value, "DELETE")
	};


	return (
		<>
			<PairRow>
				<FormInput1 type="key" value={props.KEY} readOnly={true}/>
				<FormInput1 type="url" value={props.val} readOnly={true}/>
				<DeleteButton onClick={handleRemovePair}>Delete</DeleteButton>
			</PairRow>
		</>
	);
};

export default KeyValPair;