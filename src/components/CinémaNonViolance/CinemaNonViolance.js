import React, { useState } from "react";
import {
  SummaryContainer,
  Text,
  SecondTitle,
  TextContainer,
} from "../../styles/GlobalComponents";
import { CinémaExist } from "../../constants/constants";
import { Button } from "../MyMovie/MesMoviesStyles";

import {
  Title1,
  ThirdTitle,
  Div1,
  SecondTitle1,
} from "../MyMovie/MesMoviesStyles";
const {
  title,
  secondTitle,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
} = CinémaExist;
const CinemaNonViolence = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
      <ThirdTitle>{"Cinéma de non-violence"}</ThirdTitle>
             <Text>  {" "} Mon cinéma existentiel est un cinéma de non-violence. Dès ma petite enfance, je n`appréciais pas la violence dans les films...{" "}</Text>
   
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

export default CinemaNonViolence;
