import React from "react";
import styled from "styled-components";

export const Input = ({ children, ...props}) => {
    return (
        <SInput {...props}>
            {children}
        </SInput>
    )
}

const SInput = styled.input`
    box-sizing: border-box;
    width: ${(props) => {
        return props.halfSize ? '135px' : '280px'
    }};
    display: flex;
    height: 40px;
    margin: 5px;
    background-color:transparent;
    border: 1px solid #313131;
    color: #f5f5f5;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
`