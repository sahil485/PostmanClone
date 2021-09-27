import React, { useState, useContext } from 'react'
import { AppContext } from '../../Context';
import { Input } from './elements.request'

const axios = require("axios")


function Request() {

    const { resp, users, dispatchUserEvent } = useContext(AppContext);

    const [url, setUrl] = useState("")
    const [jsonInput, setJSON] = useState("")

    const sendReq = () => { 

        if(url == "")
        {
            return
        }
        dispatchUserEvent(url,  document.getElementById("reqType").value)
        setUrl("")
    }

    return (
        <>
             <select class="form-select flex-grow-0 w-auto" id = "reqType" data-method>
                <option value="GET" defaultValue>GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <Input type = "url" placeholder="http://example.com" id = "urlInput" value={url} onChange={e => {setUrl(e.target.value)}} required></Input>
            <button onClick={sendReq}>Send Request</button>

            <br/>
            <Input id = "jsonInput" value = {jsonInput} onChange = {e => {setJSON(e.target.value)}}></Input>
            {users.map(user =><div><pre>{ JSON.stringify(user, null, 2)}</pre></div>)}
        </>
    )
}

export default Request