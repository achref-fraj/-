import styled, { keyframes } from "styled-components";
const fadeIn1 = keyframes`
  from {

    opacity: 0;
  }

  to {
   
    opacity: 1;
  }
`;
const fadeIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;
export const DownContainer = styled.div`
  width: 40px;
  top: 85rem;
  right: 50%;
 background-color: transparent;
  position: fixed;
  animation: ${fadeIn1} 2s;
  bottom: 100px;
  cursor: pointer;
  z-index: 50000000000000;
  @media ${(props) => props.theme.breakpoints.xl} {
   display: none;
 }

`;

export const UpContainer = styled.div`
  width: 40px;
  right: 40px;
  transition: 0.2s;
  cursor: pointer;
  animation: ${fadeIn} 2s;
  opacity: 1;
  background-color: transparent;
  position: fixed;
  bottom: 40px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 35px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 30px;
  }
`;
