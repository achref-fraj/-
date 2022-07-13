import React, { useState } from "react";
import {
  SummaryContainer,
  Text,
  TextContainer,
} from "../../styles/GlobalComponents";
import parse from "html-react-parser";
import { ThirdTitle, SecondTitle1 } from "../MyMovie/MesMoviesStyles";
import { Button } from "../MyMovie/MesMoviesStyles";
import { CinemaIndependant } from "../../constants/constants";
const Philosophie = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <SecondTitle1
          style={{
            textAlign: "center",
          }}
        >
          <ThirdTitle>{CinemaIndependant.titre}</ThirdTitle>
        </SecondTitle1>

        <Text>{parse(CinemaIndependant.p)}</Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default Philosophie;
