import styled from "styled-components";

export const FooterWrapper = styled.footer`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding-bottom: 2rem;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  height: 20rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
    height: 30rem;
    align-items: center;
    justify-content: center;
    display: grid;
  }
`;

export const Row = styled.div`
  width: calc((100% - 1%) / 3);
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
`;

export const Images = styled.div`
  width: 100px;
`;

export const ContactImage = styled.div`
  width: 40px;
  margin-right: 1.5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 40px;
    
  }
`;
export const Text = styled.div`
  margin-top: 1rem;
  font-size: 3.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
  }
`;
export const Text1 = styled.div`
  font-size: 2.4rem;
  margin-top: 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.9rem;
  }
`;

export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const CopyRight = styled.div`
  position: relative;
  color: #535978;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 0.2rem;
    background-color: #4c516d;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
