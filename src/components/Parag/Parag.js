import React from "react";
import { SummaryContainer, TextContainer } from "../../styles/GlobalComponents";
import { Pragraphe } from "../../constants/constants";
import { SecondTile2, Text5 } from "./ParagStyles";
const Parag = () => {
  const {  text1, text2, text3, text4, text5 } = Pragraphe;
  return (
    <SummaryContainer id="portfolio" style={{
      paddingBottom:"10rem"
    }}>
      <TextContainer>
        <SecondTile2
          style={{
            alignSelf: "flex-start",
          }}
        >
          {"Cinéma"}
        </SecondTile2>
        <Text5>{text1} </Text5>
        <Text5>{text2}</Text5>
        <Text5>{text3}</Text5>
        <Text5>{text2}</Text5>
        <Text5>{text4}</Text5>
        <Text5>{text2}</Text5>
        <Text5>{text5}</Text5>
     </TextContainer>
    </SummaryContainer>
  );
};

export default Parag;
