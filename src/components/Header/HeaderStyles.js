import { IoIosArrowDropdown } from "react-icons/io";
import styled, { keyframes } from "styled-components";

export const ContainerHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(0, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  padding: 1rem;
  padding-top: 2rem;
 
 

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    transition: all 0.5s 0s ease;
    position: relative;
    height: 100rem;
    width: 25rem;
    border-radius: 0px 12px 12px 0px;
    position: absolute;
    z-index: 50000;
    top: 0;
    backdrop-filter: blur(12px);
  }
`;
export const Div1 = styled.div`
  height: 8rem;
  width: 60px;
`;
export const Div2 = styled.ul`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
 
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 2rem;
  }
`;

// Navigation Links
export const NavLink = styled.p`
  font-size: 2rem;
  line-height: 32px;
  position: relative;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    background-color: #212d45;
    border-radius: 12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
    color: white;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  height: 208px;
  top: 6rem;
  left: 0;
  min-width: 140px;
  width: max(240px, 70%);
  font-size: 16px;
  text-align: left;
  letter-spacing: -0.08px;
  color: #ffffff;
  background-color: #172136;
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.07) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.04) 0px 6px 12px 0px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 900;
  @media ${(props) => props.theme.breakpoints.md} {
    backdrop-filter: blur(12px);
    color: white;
    transition: all 0.5s 0s ease;
  }
`;
export const DropDownContent = styled.div`
  cursor: pointer;
  height: 4rem;
  padding-left: 1.5rem;
  margin: 0.5rem;
  transition: 0.3s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    background-color: #212d45;
    border-radius: 12px;
  }
`;
export const Span = styled.span`
  font-size: 2rem;
`;
export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};
  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;



export const SocialIcons = styled.a`
  transition: 0.3s ease;
  border-radius: 50px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Menu = styled.div`
  display: none;
  cursor: pointer;
  margin-top: 1rem;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Close = styled.div`
  height: 12px;
  width: 40px;
  position: absolute;
  right: 1rem;
  display: none;

  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: rgb(30, 44, 72);
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

