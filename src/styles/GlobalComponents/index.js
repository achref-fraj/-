import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const SummaryContainer = styled.section`
  background-color: #fff;
  color: #000;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0rem;
  }
`;

export const Title = styled.h1`
  color: #4c516d;
  font-size: 10rem;
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
export const SecondTitle = styled.h2`
  color: #535978;
  font-size: 4rem;
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
    text-align: center;
  }
`;

export const Text = styled.div`
  color: #868cab;
  font-size: 4rem;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 2rem;
    font-size: 2.5rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.25rem;
    padding: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.75rem;
    padding: 1.2rem;
  }
`;
export const Button1 = styled.button`
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
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    width: 96%;
  }
`;
export const Headers1 = styled.h1`
  text-align: center;
`;
export const Cards = styled.div`
  color: #fff;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  border-radius: 12px;
  width: calc(94% / 2);
  margin: 2rem;
  padding: 2rem;
  overflow: auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: calc(80%);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(97%);
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;
export const P = styled.p`
  margin: 1rem;
  padding: 1rem;
  padding-left:1rem;
`;

export const Span1 = styled.span`
  font-weight: blod;
`;
