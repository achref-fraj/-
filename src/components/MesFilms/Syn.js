import React from "react";
import {
    Video,
    BondeAnnonce,
    TitleName
  } from "./MesFilmsStyles";
const Syn = (props) => {
  
  return (   
  <BondeAnnonce>
    <TitleName>{props?.bonde?.title}</TitleName>
  <Video style={{textAlign:"justify"}}>
    {props?.bonde?.text}
  </Video>        
  </BondeAnnonce>);
};

export default Syn;
