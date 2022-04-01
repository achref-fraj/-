import React from "react";
import {
  SummaryContainer,
  Text,
  TextContainer,
} from "../../styles/GlobalComponents";


import { ThirdTitle } from "../MyMovie/MesMoviesStyles";

const Cinema = () => {
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <ThirdTitle>{"Cinéma"}</ThirdTitle>

        <Text>
        Parallèlement à la peinture, j’étais émerveillé par les beaux paysages des plaines et des canyons de la nature américaine dans les films western que je voyais comme d’immenses tableaux à l’échelle naturelle. J’éprouvais de l’admiration et de la sympathie envers les indiens que je voyais plus proches de la nature que les autres personnages des films. Je ne prêtais pas beaucoup d’attention aux histoires racontées. Ce qui m’attirait le plus c’étaient les paysages naturels et les chevauchées des indiens. Un western sans les paysages sauvages et sans les chevauchées des indiens ne satisfaisait pas à l’adolescent que j’étais.<Text>{"\n"}</Text> Aussitôt ai-je appris
          la constitution d’un club de cinéastes amateurs, que je n’ai pas
          hésité à y adhérer et ma passion de la peinture s’est mutée
          progressivement vers le <b style={{ color: "#535978" }}>cinéma</b> et
          la <b style={{ color: "#535978" }}>photographie</b> sans perdre le
          lien esthétique avec mon art de départ. La trace est évidente dans mes
          films d’aujourd’hui.
        </Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default Cinema;
