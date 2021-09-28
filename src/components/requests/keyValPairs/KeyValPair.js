import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../Context';

const KeyValPair = (props) => {
	const { dispatchKeyVal } = useContext(AppContext);

	const handleRemovePair = () => {
        dispatchKeyVal(props.KEY, props.value, "DELETE")
	};


	return (
		<>
                <p>{"KEY: " + props.KEY}</p>
                <p>{"VAL: " + props.val}</p>
				<button onClick={handleRemovePair}>Delete</button>
		</>
	);
};

export default KeyValPair;