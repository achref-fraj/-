import React, { useState } from "react";
import {
  SummaryContainer,
  Text,

  SecondTitle,
  TextContainer,
} from "../../styles/GlobalComponents";
import parse from "html-react-parser";
import { NewPrag,NatureArtPhilosophie } from "../../constants/constants";
import { Button } from "../MyMovie/MesMoviesStyles";

import {Title1, ThirdTitle,Div1,SecondTitle1 } from "../MyMovie/MesMoviesStyles";
const { title, secondTitle, text, text1, text2, text3,text4,text5 ,text6,text7,text8} = NewPrag;
const NewPragraphe = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
      <SecondTitle1
          style={{
            textAlign: "center",
          }}
        >
          <ThirdTitle>{NatureArtPhilosophie.title}</ThirdTitle>
        </SecondTitle1>
        <ThirdTitle>{parse(NatureArtPhilosophie.Peinture.titre)}</ThirdTitle>
        <Text>{parse(NatureArtPhilosophie.Peinture.p)}</Text>
        <ThirdTitle>{parse(NatureArtPhilosophie.Cinema.titre)}</ThirdTitle>
        <Text>{parse(NatureArtPhilosophie.Cinema.p)}</Text>
        <ThirdTitle>{parse(NatureArtPhilosophie.philosophie.titre)}</ThirdTitle>
        <Text>{parse(NatureArtPhilosophie.philosophie.p)}</Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default NewPragraphe;
