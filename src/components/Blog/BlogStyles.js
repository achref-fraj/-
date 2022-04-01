import styled from "styled-components";


export const BlogsWrraper = styled.div`
max-width: 1280px;
  width: 100%;
  margin: auto;
`

export const BlogsBackColor = styled.div`
margin-top:10rem ;
margin-bottom:20rem ;

`


export const H2 = styled.h2`
   font-size: 10rem;
  font-family: "Space Grotesk",sans-serif;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem !important;
    margin-top:-4rem;
  }

`



export const Div3 = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top:-10rem;
  }

`
