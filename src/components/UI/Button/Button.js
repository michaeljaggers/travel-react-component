import styled from "styled-components";

const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid yellow;
    border-radius: 50%;
    width: 2rem;
    height:3rem;
    color: black;
    background-color: darkgoldenrod;
    text-align: start;
    cursor: pointer;
  
  &:focus {
    outline:none;
  }
  &:hover,
  &:active {
    background-color: ;
    border-color: yellow; 
  } 
  @media (max-width: 768px) {
    background-color:lightslategray;
  } 
  
`;

export default Button;