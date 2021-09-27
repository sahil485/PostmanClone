import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import { Output } from './elements.response'

function Response() {

    const { resp } = useContext(AppContext);

    return (
        <>
            <Output>{resp}</Output>
        </>
    )
}

export default Response
