import styled from "styled-components";

export const Button = styled.button`
  min-width: 8vw;
  padding: 2rem;
  border-radius: 12px;
  transition: 0.3s ease;
  outline: none;
  border: none;
  transform: scale(1.2);
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 2rem;
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 45rem;
  height: 5rem;
  border-radius: 12px;
  padding: 1.5rem;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  outline: none !important ;
  border: 0.5px solid #4c516d;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 30rem;
    height: 4.5rem;
    font-size: 1.8rem;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  font-size: 3rem;
  color: #535978;
  margin-bottom:0.2rem ;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const SecondTitle = styled.h2`
  color: #535978;
  font-size: 3rem;
  margin-bottom: 2rem;
  margin-top: -4rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2.5rem;
    margin-top: -2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
    margin-top: -1.7rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    margin-top: -0.75rem;
  }
`;
