import styled from "styled-components";

export const Button = styled.button`
  min-width: 8vw;
 
  border-radius: 12px;
  transition: 0.3s ease;
  outline: none;
  border: none;
  transform: scale(1.2);
  padding: 2rem;
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 3rem;
    padding-bottom: 0;
    padding-top: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 0rem;
    margin-bottom: 2.5rem;
  }
`;
export const SecondTitle = styled.h2`
  color: #535978;
  font-size: 4.5rem;
  margin: 8rem;
  margin-bottom: 6rem;
  margin-top: -8rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2.5rem;
    margin-top: -2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
    margin-top: -1.7rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
    margin-top: -0.75rem;
    text-align: center;
  }
`;

export const SecondTitle1 = styled.h2`
  color: #535978;
  font-size: 3rem;
  margin: 8rem;
  margin-bottom: 6rem;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2.5rem;
    margin-top: -2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
    margin-top: -1.7rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 2rem;
    text-align: justify;
    width: 100%;
  }
`;

export const Title1 = styled.h1`
  color: #4c516d;
  font-size: 10rem;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
  }
`;

export const ThirdTitle = styled.h3`
  align-self: flex-start;
  font-size: 5rem;
  margin-top: 10rem;
  color: #535978;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 4rem;
    padding-left: 2rem;
    padding-bottom: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
    margin-top: 5rem;
    padding-left: 1rem;
 
 }
`;

export const Div1 = styled.div`
  font-size: 6rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
  }
`;
