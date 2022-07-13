import React from "react";
import {
  SummaryContainer,
  Text,
  TextContainer,
} from "../../styles/GlobalComponents";
import parse from "html-react-parser";

import { ThirdTitle, SecondTitle1 } from "../MyMovie/MesMoviesStyles";
import { CinemaExistentiel } from "../../constants/constants";
const Cinema = () => {
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <SecondTitle1
          style={{
            textAlign: "center",
          }}
        >
          <ThirdTitle>{CinemaExistentiel.titre}</ThirdTitle>
        </SecondTitle1>
        <Text>{parse(CinemaExistentiel.p)}</Text>
        <ThirdTitle>
          {parse(CinemaExistentiel.EsthetiquePhilosophique.titre)}
        </ThirdTitle>
        <Text>{parse(CinemaExistentiel.EsthetiquePhilosophique.p)}</Text>
        <ThirdTitle>
          {parse(CinemaExistentiel.beauteExistence.titre)}
        </ThirdTitle>
        <Text>{parse(CinemaExistentiel.beauteExistence.p)}</Text>
        <ThirdTitle>{parse(CinemaExistentiel.ValeursPlans.titre)}</ThirdTitle>
        <Text>{parse(CinemaExistentiel.ValeursPlans.p)}</Text>

        <ThirdTitle>
          {parse(CinemaExistentiel.BruitageAccompagnement.titre)}
        </ThirdTitle>
        <Text>{parse(CinemaExistentiel.BruitageAccompagnement.p)}</Text>
        <ThirdTitle>
          {parse(CinemaExistentiel.ecologieEtModernite.titre)}
        </ThirdTitle>
        <Text>{parse(CinemaExistentiel.ecologieEtModernite.p)}</Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default Cinema;
