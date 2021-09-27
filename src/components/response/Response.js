import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import { Output } from './elements.response'

function Response() {

    const { users } = useContext(AppContext);

    return (
        <>
            {users.map(user =><div><pre>{ JSON.stringify(user, null, 2)}</pre></div>)}
        </>
    )
}

export default Response
