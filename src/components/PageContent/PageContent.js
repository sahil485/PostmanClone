import React, { useState, useEffect } from 'react'
import { AppContext } from '../../Context'
import Request from '../requests/Request'
import Response from '../response/Response'
import AddKeyVal from '../requests/keyValPairs/AddKeyVal'
import KeyValList from '../requests/keyValPairs/KeyValList'
import axios from 'axios'

function PageContent() {

    const [ users, setUsers ] = useState([]);
    const [pairs, setPairs] = useState([])

    const dispatchKeyVal = (key, value, actionType) => {
        console.log(actionType)
        switch (actionType) {

            case "ADD":


                //pairs.push([key,value])
                setPairs([...pairs, [key, value]])
                return
            
            case "DELETE": 

                setPairs(pairs.filter(pair => pair[0] != key))
                return 
        }
    }

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

    useEffect(() => {
        setPairs(pairs)
    })

    return (
        <>
            <AppContext.Provider value={{ users, pairs, dispatchUserEvent, dispatchKeyVal }}>
                <Request />
                <AddKeyVal />
                <KeyValList />
                <Response />
            </AppContext.Provider>
        </>
    )
}

export default PageContent
