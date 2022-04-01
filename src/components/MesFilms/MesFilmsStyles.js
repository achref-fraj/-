import styled from "styled-components";

export const MesFilmsContainer = styled.section`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const SmallTitle = styled.h2`
  color: #f5f5f5;
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 5rem;
  &:after {
    content: "";
    position: absolute;
    width: 15rem;
    height: 0.5rem;
    border-radius: 12px;
    background-color: ${(props) => props.theme.colors.background2};
    right: -20rem;
  }

  &:before {
    content: "";
    position: absolute;
    width: 15rem;
    height: 0.5rem;
    border-radius: 12px;
    background-color: ${(props) => props.theme.colors.background2};
    left: -20rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    &:after {
      right: -15rem;
    }
    &:before {
      left: -15rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    &:after {
      width: 8rem;
      right: -7rem;
    }
    &:before {
      width: 8rem;
      left: -7rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    &:after {
      width: 3rem;
      right: -5rem;
    }
    &:before {
      width: 3rem;
      left: -5rem;
    }
  }
`;
export const AfficheContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Affiche = styled.div`
  width: 32%;
 
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
  }
`;

export const Description = styled.div`
  width: 63%;
 
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
  }
`;

export const Table = styled.table`
  border: 1px solid ${(props) => props.theme.colors.background2};
  border-collapse: collapse;
  border-radius: 12px;
  overflow: auto;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 2rem;
  }
`;

export const Th = styled.th`
  color: #fff;
  border-radius: 12px;
  padding: 3rem;
  margin: 1rem;
  margin-left: 0.5rem;
  padding-left: 1rem;
  width: 20%;
  border: 1px solid ${(props) => props.theme.colors.background2};
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 1rem;
    margin: 1rem;
    margin-left: 0.5rem;
    width: 15%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    margin: 0rem;
    margin-left: 0.5rem;
    width: 8% !important;
  }
`;
export const Td = styled.td`
  border: 1px solid ${(props) => props.theme.colors.background2};
  padding: 1rem;
  margin: 1rem;
  color: #fff;
  text-align: justify;
  border-radius: 12px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70% !important ;
  }
`;

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

export const BondeAnnonce = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 67%;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 85%;
    justify-content: center;
  }
`;
export const Video = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.lg} {
    justify-content: center;
  }
`;

export const TitleName = styled.div`
  text-align: left;
  color: #f5f5f5;
  margin: 2rem;
  font-size: 2rem;
  margin-left: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;
