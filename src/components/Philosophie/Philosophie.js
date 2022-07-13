import React, { useState } from "react";
import parse from "html-react-parser";
import {
  SummaryContainer,
  Text,
  TextContainer,
} from "../../styles/GlobalComponents";
import { CinémaDeNonViolence } from "../../constants/constants";
import { ThirdTitle, SecondTitle1 } from "../MyMovie/MesMoviesStyles";
import { Button } from "../MyMovie/MesMoviesStyles";
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
          <ThirdTitle>{parse(CinémaDeNonViolence.titre)}</ThirdTitle>
        </SecondTitle1>
          
        <Text>{parse(CinémaDeNonViolence.p)}</Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default Philosophie;
