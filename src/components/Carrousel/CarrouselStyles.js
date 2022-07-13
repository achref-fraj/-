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
    transform: translateY(130%);
    letter-spacing: 2px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    transform: translateY(140%);
    letter-spacing: 2px;
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
    transform: translateY(150px);
    width: 80px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    transform: translateY(55px);
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

export const Title = styled.span`
  font-size: 8rem;
  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 6rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.75rem;
  }
`;
