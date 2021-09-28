import styled from "styled-components"
import { Button } from "../../../globalStyles"

export const FormInput = styled.input`
padding: 10px 20px;
margin  : 10px;
outline: none;
font-size: 16px;
background-color: #D3D3D3;
border: none;
`

export const DeleteButton = styled.button`
color: white;
background-color: red;
border: 1px solid black;
height: 40px;
width: 80px;
border-radius: 10px;
margin: 5px;
font-size: 20px;
&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    color: red;
}
`

export const FormInput1 = styled.input`
padding: 10px 20px;
margin-right: 10px;
outline: none;
font-size: 16px;

`

export const PairRow = styled.div`
max-height: 50px;
`

export const Pair = styled.div`
padding: 10px 20px;
margin-right: 10px;
outline: none;
font-size: 16px;
`