import React, { useState } from "react";
import {
  SummaryContainer,
  Text,
  TextContainer,
} from "../../styles/GlobalComponents";

import { ThirdTitle } from "../MyMovie/MesMoviesStyles";
import { Button } from "../MyMovie/MesMoviesStyles";
const Philosophie = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
        <ThirdTitle>{"Philosophie"}</ThirdTitle>

        <Text>
          Ma passion de nature, de peinture, de cinéma et de photographie
          n’était pas étrangère à mes penchées précoces envers la <b style={{ color: "#535978" }}>réflexion
          philosophique</b> solitaire avant même d’étudier plus tard la philosophie au lycée. L’existence en tant que telle m’étonnait et
          m’émerveillait à la fois dès ma petite enfance. Ce <b style={{ color: "#535978" }}>sentiment
          d’exister</b>, je  l’éprouvais avec enivrement auprès de la nature et de la mer en
          particulier mais presque jamais auprès de la société de l’époque.
        </Text>
        {show && (
          <Text>
            Avec la peinture et le cinéma, les cours de littérature et de poésie
            françaises et plus tard de philosophie, ainsi que les débats
            fructueux au ciné-club, ont contribués au développement de mon
            esprit critique et à mon désir d’expression.<Text>{"\n"}</Text> C’était à la salle de cinéma et surtout au Lycée que j’ai découvert d’une façon explicite les valeurs de <b style={{ color: "#535978" }}>liberté</b>, de <b style={{ color: "#535978" }}>modernité</b> et d’<b style={{ color: "#535978" }}>humanisme</b>. Ces valeurs étaient pour moi une alternative salutaire à la tradition conservatrice et dogmatique de la société de l’époque. Le petit club des cinéastes amateurs était le lieu de lutte pour ces valeurs.
          </Text>
        )}
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

export default Philosophie;
