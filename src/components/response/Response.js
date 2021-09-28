import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import { ResponseContainer } from './elements.response'
import { Container } from '../../globalStyles';
import { H4 } from './elements.response'

function Response() {

    const { users } = useContext(AppContext);

    return (
        <>
            <Container>
                <H4>Response</H4>
                {users.map(user =><div><pre>{ JSON.stringify(user, null, 2)}</pre></div>)}
            </Container>
        </>
    )
}

export default Response
