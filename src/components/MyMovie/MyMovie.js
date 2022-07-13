import React, { useState } from "react";
import parse from "html-react-parser";
import {
  SummaryContainer,
  Text,
  SecondTitle,
  TextContainer,
} from "../../styles/GlobalComponents";
import { MonCinéma, myMovie } from "../../constants/constants";
import { Button } from "../MyMovie/MesMoviesStyles";

import { Title1, ThirdTitle, Div1, SecondTitle1 } from "./MesMoviesStyles";
const { title, secondTitle, text, text1, text2, text3, secondTitle1 } =
  MonCinéma;
const MyMovie = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <Title1>
          {title} 
          <Div1 style={{ fontSize: 50 }}>{""}</Div1>
        </Title1>
        <SecondTitle1
          style={{
            textAlign: "center",
          }}
        >
          <div>{parse(secondTitle)}</div>
          <div>{secondTitle1}</div>
          <ThirdTitle>{myMovie.titre}</ThirdTitle>
        </SecondTitle1>

        <ThirdTitle>{myMovie.laCompagne.titre}</ThirdTitle>
        <Text>{parse(myMovie.laCompagne.p)}</Text>

        <ThirdTitle>{myMovie.laMer.titre}</ThirdTitle>
        <Text>{parse(myMovie.laMer.p)}</Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default MyMovie;
