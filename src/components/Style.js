import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const colors ={
  red: '#e30016',
  gray: '#c6c7c9',
  blue: '#1D4E89',
  darkRed: '#53131E',
  green: '#379634',
}

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    text-align: center;
}

html,body{
    width:100%;
    min-height:100vh;
    height:100%;
    font-family: 'Montserrat', sans-serif;
    margin:0;
    padding: 0;
}

#root{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

th, td{
  border: 1px solid ${colors.blue}
}
`;

export const FitBox = styled.div`
height: ${(props) => {
  return props.height ? props.height : "100%";
}};
width: ${(props) => {
  return props.width ? props.width : "100%";
}};
display: flex;
flex-direction: ${(props) => {
  return props.flexDirection ? props.flexDirection : "column";
}};
justify-content: ${(props) => {
  return props.justifyContent ? props.justifyContent : "space-around";
}};
align-items: ${(props) => {
  return props.alignItems ? props.alignItems : "center";
}};
flex-wrap: ${(props) => {
  return props.wrap ? props.wrap : "no-wrap";
}};
`

export const Title = styled(FitBox)`
font-size: ${(props) => {
  return props.fontSize ? props.fontSize : "2.5rem";
}};
height: ${(props) => {
  return props.height ? props.height : "fit-content";
}};
font-weight: ${(props) => {
  return props.fontWeight ? props.fontWeight : "bold";
}};
color: ${(props) => {
  return props.color ? props.color : colors.red;
}};
margin: ${(props) => {
  return props.margin ? props.margin : "0";
}};
`

export const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.blue};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 200ms;
  &:hover {
    transform: scale(1.1);
  }
  border: 0.1rem solid ${colors.blue};
  border-radius: 0.2rem;
  width: ${(props)=>{
    return props.width ? props.width : '50%';
  }};

`

export const StyledForm = styled.form`
height: ${(props) => {
  return props.height ? props.height : "100%";
}};
width: ${(props) => {
  return props.width ? props.width : "100%";
}};
display: flex;
flex-direction: ${(props) => {
  return props.flexDirection ? props.flexDirection : "column";
}};
justify-content: ${(props) => {
  return props.justifyContent ? props.justifyContent : "space-around";
}};
align-items: ${(props) => {
  return props.alignItems ? props.alignItems : "center";
}};
flex-wrap: ${(props) => {
  return props.wrap ? props.wrap : "no-wrap";
}};
`

export const StyledInput = styled.input`
  width: 75%;
  min-width: 300px;
  height: fit-content;
  margin: 0.15rem 0;
  background-color: white;
  filter: opacity(0.75);
  border: none;
  outline: none;
  text-align: center;
  color: ${colors.blue};
  font-size: 2rem;
  font-weight: 100;
  padding: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in-out;
  &::placeholder {
    background-color: white;
    color: ${colors.blue};
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 10rem white inset; /* Change the color to your own background color */
    box-shadow: 0 0 0 10rem white inset; /* Change the color to your own background color */
    -webkit-text-fill-color: ${colors.blue};
  }
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 10rem white inset; /*your box-shadow*/
    box-shadow: 0 0 0 10rem white inset; /*your box-shadow*/
    -webkit-text-fill-color: ${colors.blue};
  }
  &:focus {
    transform: scale(1.05);
  }

  border: 0.1rem solid ${colors.blue};
  border-radius: 0.2rem;
  width: ${(props)=>{
    return props.width ? props.width : '50%';
  }};

`

export const StyledSubmitButton = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.blue};
  background-color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 200ms;
  &:hover {
    transform: scale(1.1);
  }
  border: 0.1rem solid ${colors.blue};
  border-radius: 0.2rem;
  width: ${(props)=>{
    return props.width ? props.width : '50%';
  }};

`

export const StyledTh = styled.th`
color: ${colors.red};
font-size: 1.5rem;
background-color: ${colors.gray};
/* width: 5%; */
`

export const StyledTd = styled.td`
font-weight: 500;
text-align: center
`