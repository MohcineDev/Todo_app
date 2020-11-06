import styled from 'styled-components'
//npm i styled-components
 
export const P = styled.p`
background-color: #fff;
border-radius: 10px;
padding: 15px 10px;
cursor: pointer;
margin: 10px auto;
width: 80%;
border-left: 8px solid #f21e64;
border-right: 8px solid #f21e64 ;

&::selection{
    color:red;
}
&:hover{
    color: #f21e64;
}
`


