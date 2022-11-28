import styled from "styled-components";

export const MyBreadCrumbs = styled.div`
min-height:17px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 120%;
color: #2A2349;
display:flex;
gap:7px;
align-items: center;
padding: 36px 0px 27px;
`

export const Crumb = styled.div`
display:flex;
gap:7px;
align-items: center;
&:last-child{
    color:gray;
}

`