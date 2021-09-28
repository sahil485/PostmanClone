import React, { useContext } from 'react';
import { AppContext } from '../../../Context';
import KeyValPair from './KeyValPair';

const KeyValList = () => {
	const { pairs } = useContext(AppContext);

	return (
		<>
            {pairs.map(pair =><KeyValPair KEY = {pair[0]} val = {pair[1]}/>)}
		</>
	);
};

export default KeyValList;