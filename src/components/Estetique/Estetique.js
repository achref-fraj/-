import React, { useState } from "react";
import {
  SummaryContainer,
  Text,
  TextContainer,
} from "../../styles/GlobalComponents";

import { ThirdTitle } from "../MyMovie/MesMoviesStyles";
import { Button } from "../MyMovie/MesMoviesStyles";
const Philosophie = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <ThirdTitle>{""}</ThirdTitle>

        <Text>
        <b style={{ color: "#535978" }}>L’esthétique est le constituant même de l’existence.</b><Text>{"\n"}</Text> 
          L’expression du beau existentiel est une finalité
          essentielle et de premier ordre de ma vie, de ma philosophie et de mon
          cinéma. Les dimensions philosophiques et écologiques en sont
          le prolongement.
        </Text>
        <Text>
          Je aime user de <b style={{ color: "#535978" }}>plans séquences, fixes</b> et <b style={{ color: "#535978" }}>larges</b>. Je conçois les
          plans comme des tableaux de peinture et comme des photographies
          artistiques.<Text>{"\n"}</Text> J’évite de disséquer les séquences en plusieurs plans et
          en différentes valeurs de plans pour approcher la réalité dans son
          ensemble et permettre au spectateur d’être dans l’image.
        </Text>
        <Text>
        Pas de<b style={{ color: "#535978" }}> musique d’accompagnement</b> que je considère comme artificielle.
          Je préfère le bruitage naturel issus de l’image même.
        </Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default Philosophie;
