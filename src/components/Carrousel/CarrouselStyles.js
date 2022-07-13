import styled from "styled-components";

export const Container = styled.div`
  height: 82rem;
  width: 100%;
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;

  @media ${(props) => props.theme.breakpoints.md} {
  }
`;
export const Content = styled.span`
  position: absolute;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.span`
  transform: translateY(140%);
  letter-spacing: 4px;
  @media ${(props) => props.theme.breakpoints.xl} {
    transform: translateY(150%);
    letter-spacing: 2px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    transform: translateY(80%);
    letter-spacing: 2px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    transform: translateY(90%);
    letter-spacing: 2px;
  }
`;

export const Name1 = styled.span`
  font-size: 66px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 35px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const Logo = styled.span`
  width: 150px;
  transform: translateY(215px);
  @media ${(props) => props.theme.breakpoints.xl} {
    transform: translateY(150px);
    width: 100px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    transform: translateY(100px);
    width: 80px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    transform: translateY(80px);
    width: 50px;
  }
`;

export const Name = styled.span`
  font-size: 10rem;
  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 6rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.3rem;
  }
`;
export const Name2 = styled.span`
font-size: 52; 

`;
export const Title = styled.span`
  font-size: 8rem;
  font-size: 22;
  margin-top: 100px;
  font-family: "Kristen ITC";
  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 6rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3rem;
    margin-top: 0px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.75rem;
    margin-top: -10px;
  }
`;
