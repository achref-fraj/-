import React from "react";
import {
    Video,
    BondeAnnonce,
    TitleName
  } from "./MesFilmsStyles";
const BondeEtFilm = (props) => {
  
  return (   
  <BondeAnnonce>
    <TitleName>{props.bonde.name}</TitleName>
  <Video>
    <iframe
      width="750"
      height="300"
      src={props.bonde.link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </Video>        
  </BondeAnnonce>);
};

export default BondeEtFilm;
