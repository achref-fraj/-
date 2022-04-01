import styled from "styled-components";

export const Button = styled.button`
  min-width: 8vw;
  padding: 2rem;
  border-radius: 12px;
  transition: 0.3s ease;
  outline: none;
  border: none;
  transform: scale(1.2);
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding: 2rem;
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

export const SecondTile2 = styled.h2`
  color: #535978;
  font-size: 5rem;
  margin-top: 10rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 4rem;
    margin-top: -2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4rem;
    margin-top: -1.7rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }
`;

export const Text5 = styled.div`
  color: #868cab;
  font-size: 4rem;
  text-align: justify;
  margin-top: 2rem;
  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 2.25rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.75rem;
    margin-top: -1rem;
    padding: 1.2rem;
  }
`;
