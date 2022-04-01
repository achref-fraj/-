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
        <ThirdTitle>{"Nature et écologie"}</ThirdTitle>

        <Text>
        J’ai découvert l’<b style={{ color: "#535978" }}>écologie</b> et sa dimension civilisationnelle au quartier latin à Paris quand je faisais mes études de philosophie à La Sorbonne et de cinéma à Vincennes au milieu des années 1970. Les belles années d’une nouvelle vie de liberté et de découverte du mode de vie occidental ! 
        <Text>{"\n"}</Text>Je me souviens encore de la déception que j’ai eue en apprenant progressivement que la nature n’était pas ce qu’imaginait l’enfant, puis l’adolescent et même le jeune lycéen que j’étais ! En effet, j’avais une conception romantique d’une nature parfaite et imperturbable. L’écologie m’a enseigné la vulnérable et la fragilité de la nature. Elle a besoin de protection et d’entretien comme nous autres les humains. Ma déception était grande, moi qui croyais à la toute-puissance de la nature et à son éternité. Ma naïveté enfantine était ma source de joie et de bonheur tandis que la prise de conscience écologique était source d’inquiétude et de frustration.
        </Text>
        <Button
          style={{ background: "transparent", alignSelf: "flex-start" }}
          onClick={() => setShow(!show)}
        >
          {!show ? "Aficher plus ..." : "Afficher moins"}
        </Button>
      </TextContainer>
    </SummaryContainer>
  );
};

export default Philosophie;
