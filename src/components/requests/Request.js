import React, { useState, useContext } from 'react'
import { AppContext } from '../../Context';
import { LinkInput, RawInput } from './elements.request'



function Request() {

    const { users, dispatchUserEvent } = useContext(AppContext);

    const [url, setUrl] = useState("")
    const [jsonInput, setJSON] = useState("")

    const sendReq = () => { 
        if(url == "")
        {
            return
        }
        dispatchUserEvent(url,  document.getElementById("reqType").value, jsonInput)
        setUrl("")
        setJSON("")
    }

    return (
        <>
             <select class="form-select flex-grow-0 w-auto" id = "reqType" data-method>
                <option value="GET" defaultValue>GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <LinkInput type = "url" placeholder="http://example.com" id = "urlInput" value={url} onChange={e => {setUrl(e.target.value)}} required></LinkInput>
            <button onClick={sendReq}>Send Request</button>

            <br/>
            <LinkInput type = "string" placeholder="Key" id = "key" required/>
            <LinkInput type = "string" placeholder="Value" id = "value" required/>
            <br/>
            
            <RawInput id = "jsonInput" value = {jsonInput} onChange = {e => {setJSON(e.target.value)}} placeholder = "Enter raw JSON here"></RawInput>
        </>
    )
}

export default Request