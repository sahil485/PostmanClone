import styled from "styled-components"

export const Button = styled.button`
color: white;
background-color: #007FFF;
border: 1px solid black;
height: 40px;
width: 80px;
border-radius: 10px;
margin: 5px;
font-size: 20px;
&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    color: #007FFF
}

`

export const Container = styled.div`
z-index:1;
max-width: 100%;
height: auto;
width: auto;
padding-right: 50px;
padding-left: 50px;
align-self: left;
border:0.7px solid grey;
`