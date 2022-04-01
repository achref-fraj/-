import React, { useState } from "react";
import {
  SummaryContainer,
  Text,

  SecondTitle,
  TextContainer,
} from "../../styles/GlobalComponents";
import { MonCinéma } from "../../constants/constants";
import { Button } from "../MyMovie/MesMoviesStyles";

import {Title1, ThirdTitle,Div1,SecondTitle1 } from "./MesMoviesStyles";
const { title, secondTitle, text, text1, text2, text3,secondTitle1 } = MonCinéma;
const MyMovie = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <Title1>{title}<Div1 style={{fontSize:50}}>{""}</Div1></Title1>
        <SecondTitle1
          style={{
            textAlign: "center",
          }}
        >
          <div>{secondTitle}</div>
          <div>{secondTitle1}</div>
        </SecondTitle1>
        <ThirdTitle>{"Nature"}</ThirdTitle>
        <Text>Dès ma petite enfance, je trouvais la<b style={{ color: "#535978" }}> nature</b> plus amicale, plus attrayante, plus apaisante et plus belle que la société conservatrice et intolérante dans laquelle je vivais. 
  Je me souviens toujours de ces moments de plaisir que je passais dans le verger paternel situé en pleine compagne à plusieurs kilomètres de ma vielle ville natale. Je trouvais auprès de la verdure, des arbres et des animaux le calme et la sérénité. Les couchers du soleil me fascinaient particulièrement.
   </Text>
        {!show ?<Text> Je me souviens aussi de ce lointain espace d’évasion en plein air situé à plusieurs kilomètres de ma ville natale et qui constituait pour moi le deuxième lieu d’apaisement et de liberté : la <b style={{ color: "#535978" }}>mer</b> et la plage d’une ville côtière où ma famille passait chaque année les vacances d’été.<Text>{"\n"}</Text></Text> : <Text>Je me souviens aussi de ce lointain espace d’évasion en plein air situé à plusieurs kilomètres de ma ville natale et qui constituait pour moi le deuxième lieu d’apaisement et de liberté : la <b style={{ color: "#535978" }}>mer</b> et la plage d’une ville côtière où ma famille passait chaque année les vacances d’été. <Text>{"\n"}</Text> Mon rythme de vie quotidien était simple et régulier. Pendant toute la période des vacances, je me réveillais à l’aube et j’allais seul à la plage, alors que les membres de la famille continuaient à dormir. Ma joie était d’arriver à temps à la mer avant le lever du soleil et avant que l’eau ne devienne agitée. Ma joie était aussi d’être seul au bord de la mer avant que les baigneurs n’envahissaient la plage. La mer me fascinait et m’étonnait à la fois.<Text>{"\n"}</Text>
  Je venais chaque jour à l’aube m’assoir sur le rocher le plus avancé vers l’intérieur de la mer en tournant le dos à la ville et ses habitants qui sommeillaient encore à cette heure précoce de la journée. Ma grande satisfaction était de trouver la mer calme, limpide et luisante comme un miroir, sans ondulations ni la moindre brise. Je m’émerveillais de la vision de sa couleur bleue à multiples nuances et de son étendue à perte de vue. Le spectacle quasi journalier du lever du soleil à l’horizon m’émerveillait. Je passais beaucoup de temps à regarder la mer avant de faire mon premier plongeon. Je me régalais de plongeons et de baignades dans une eau fraiche et tonifiante sans me soucier du passage du temps. Je me reposais de temps en temps pour contempler la mer et admirer sa beauté et son immensité. Le silence régnant m’apaisait et la solitude me réconfortait. Face à la mer, ma vue se libérait et mon imaginaire s’affranchissait de toutes les barrières.
  <Text>{"\n"}</Text>Je revenais au bord de la mer à la fin de la journée et presque quotidiennement pour me promener et assister au coucher du soleil avec le même émerveillement. 
  <Text>{"\n"}</Text>Cet émerveillement par la nature en général et la mer en particulier s’est formé en moi dès ma toute petite enfance et m’a accompagné au cours des âges de ma vie jusqu à présent avec intensité et étonnement toujours renouvelés. 
</Text>}
        {show &&  <Text>{text3}</Text>}
        
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

export default MyMovie;
