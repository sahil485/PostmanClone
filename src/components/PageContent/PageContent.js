import React, { useState } from 'react'
import { AppContext } from '../../Context'
import Request from '../requests/Request'
import Response from '../response/Response'
import axios from 'axios'

function PageContent() {

    const [resp, setResp] = useState([]);
    const [ users, setUsers ] = useState([]);
        
    const dispatchUserEvent = (url, actionType) => {
        setUsers([])
		switch (actionType) {
			case 'GET':
                setUsers([])
                console.log("Users:")
                console.log(users)
                axios({
                    url: url,
                    method: actionType
                })
                .catch(e => console.log(e))
                .then((response) =>    {
                    
                    if(typeof response.data == Array){

                        (response.data).forEach(element => {
                            users.push(element)
                            setUsers(users)
                        })
                    }
                    else{
                        setUsers([response.data])
                    }
                });
                return 
			case 'POST':

                const params = {name: "SAhil", gitLink: "ifsojfd", vidLink: "dfsiosjdf"};

                axios.post(url, params,{

                    "headers": {
                    
                    "content-type": "application/json",
                    
                    },
                    
                })
                .catch(e => console.log(e))
                .then((response) =>    {
                    
                    console.log(response)
                });
                
				return;
            case 'PUT':

				return;
            case 'DELETE':
                console.log("delete")
                axios.delete(url)
                .catch(e => console.log(e))
                .then((response) =>    {
                    
                    console.log(response)
                });    

                return;
			default:
				return;
		}
	};

    return (
        <>
            <AppContext.Provider value={{ resp, users, dispatchUserEvent }}>
                <Request />
                <Response />
            </AppContext.Provider>
        </>
    )
}

export default PageContent
