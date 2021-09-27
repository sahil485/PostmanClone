import React, { useState } from 'react'
import { AppContext } from '../../Context'
import Request from '../requests/Request'
import Response from '../response/Response'
import axios from 'axios'

function PageContent() {

    const [resp, setResp] = useState([]);
    const [ users, setUsers ] = useState([]);
        
    const dispatchUserEvent = (url, actionType, jsonInput) => {
        setUsers([])
		switch (actionType) {
			case 'GET':
                setUsers([])
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

                try {
                    var params = JSON.parse(jsonInput);
                }
                catch (error) {
                    if (error instanceof SyntaxError) {
                        alert("There was a syntax error. Please correct it and try again: " + error.message);
                        return
                    }
                    else {
                        throw error;
                    }
                }

                axios.post(url, params,{

                    "headers": {
                    
                    "content-type": "application/json",
                    
                    },
                    
                })
                .catch(e => alert(e))
                .then((response) =>    {
                    console.log(response)
                });
                
				return;
            case 'PUT':

				return;
            case 'DELETE':
                axios.delete(url)
                .catch(e => alert(e))
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
