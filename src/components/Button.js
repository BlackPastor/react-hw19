import styled from "styled-components";

const Button = ({ children, ...props }) => {
    return <SButton {...props}>{children}</SButton>
}
const SButton = styled.button`
margin-top: 20px;
width: 280px; 
height: 30px;
background-color: rgb(125, 157, 205);
color:black;
border: none;
font-weight: 600;
border-radius: 5px;
text-transform: uppercase;
`

export default Button;