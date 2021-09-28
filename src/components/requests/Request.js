import React, { useState, useContext } from 'react'
import { AppContext } from '../../Context';
import { RawInput, Select } from './elements.request'
import { Button } from '../../globalStyles';
import AddKeyVal from './keyValPairs/AddKeyVal';
import KeyValList from './keyValPairs/KeyValList';
import { FormInput, PairRow} from './keyValPairs/elements.keys';



function Request() {

    const { dispatchUserEvent } = useContext(AppContext);

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
            <PairRow>
             <Select id = "reqType" data-method>
                <option value="GET" defaultValue>GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </Select>

            <FormInput type = "url" placeholder="http://example.com" id = "urlInput" value={url} onChange={e => {setUrl(e.target.value)}} required/>
            <Button onClick={sendReq}>Send</Button>
            </PairRow>
            <br/>
            <br/>
            <AddKeyVal />
            <br/>
            <KeyValList />
            <br/>
            <br/>
            <RawInput id = "jsonInput" value = {jsonInput} onChange = {e => {setJSON(e.target.value)}} placeholder = "Enter raw JSON for POST/PUT requests here"></RawInput>
            
            <br/>
            <br/>
        </>
    )
}

export default Request