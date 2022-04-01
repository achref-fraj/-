import React, { useState } from "react";
import {
  SummaryContainer,
  Text,

  SecondTitle,
  TextContainer,
} from "../../styles/GlobalComponents";
import { NewPrag } from "../../constants/constants";
import { Button } from "../MyMovie/MesMoviesStyles";

import {Title1, ThirdTitle,Div1,SecondTitle1 } from "../MyMovie/MesMoviesStyles";
const { title, secondTitle, text, text1, text2, text3,text4,text5 ,text6,text7,text8} = NewPrag;
const NewPragraphe = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <ThirdTitle>{"Peinture"}</ThirdTitle>
        <Text>Devenu élève à l’unique lycée de ma ville natale, j’ai découvert la <b style={{color:"#535978"}}>peinture</b> qui est devenue pour moi une passion pendant quelques années. Je peignais des paysages et des couchers de soleil sur la mer. La nature constituait évidemment le thème privilégié de mes tableaux. J’ai fait spontanément la jonction entre deux passions, la nature et la peinture. Je trouvais dans la nature et dans la peinture une dimension esthétique qui m’émerveillait.</Text>
      </TextContainer>
    </SummaryContainer>
  );
};

export default NewPragraphe;
