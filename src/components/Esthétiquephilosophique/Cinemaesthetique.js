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
const Cinemaesthetique = () => {
  const [show, setShow] = useState(false);
  return (
    <SummaryContainer id="portfolio">
      <TextContainer>
      <ThirdTitle>{"Esthétique philosophique"}</ThirdTitle>
             <Text>  {" "} Ma conception
            de l’esthétique est philosophique en ce sens que je considère la
            beauté comme le cœur battant de la vie et de l’art. La beauté est
            liée pour moi à la sensualité. L’esthétique n’est pas une simple
            apparence décorative et ornementale ou un habillement et un
            maquillage. La beauté d’une actrice n’est pas seulement un physique
            mais aussi une présence, un regard, un geste, une démarche, une
            voix, une parole, une façon d’être, un charme, une sensibilité, une
            sensualité, un non-dit et un non-vu.{" "}
          </Text>
        {/* <ThirdTitle>{"Cinéma existentiel"}</ThirdTitle>
        <Text>
          Percer la dimension <b style={{ color: "#535978" }}>existentielle</b> de la vie
          par-delà l’agitation événementielle de la société est l’orientation de
          recherche philosophique et artistique du cinéma que j’espère
          contribuer à mettre en oeuvre. Je me concentre sur des moments dans la vie où rien ne se
          passe ou presque, des moments considérés en général comme non
          événementiels, des moments de temps de repos. Une séquence de
          contemplation de la mer sur une plage déserte suivie d’une baignade
          tranquille dans une eau calme, limpide et sans grand monde est
          considéré comme un non-événement cinématographique par rapport à une
          séquence de poursuite de voitures avec fusillades et tueries.
        </Text> */}
        {/* {show && (
          <Text>
            {" "}
            Je considère que la séquence de la contemplation de la mer et de la
            baignade révèle l’intensité et la permanence de l’existence dans sa
            plus grande simplicité et profondeur existentielle à la fois. Vivre
            en harmonie avec la nature et son temps naturel dans la lenteur et
            l’apaisement est le sens premier et profond de l’existence.Ce qui n’est pas donné à la grande majorité des personnes prises dans le tourbillon de la vie sociale et professionnelle. C’est la
            nature comme donnée première et fondamentale qui inspire ma
            philosophie de la vie et du cinéma. Mes films sont l’expression de
            moments d’existence harmonieuse avec la nature et non la narration
            d’une histoire chargée d’événements et connectés au mode de vie
            social accéléré et accentué par des violences et des drames
            artificiels prétendus l’expression de la réalité.<Text>{"\n"}</Text> Mon inclinaison
            vers la nature n’exclue pas mon adhésion à la <b style={{ color: "#535978" }}>modernité</b>, celle au
            service de la préservation et le développement de la vie naturelle
            et humaine vers le meilleur. Une idée forte pour une histoire simple
            est ma devise. L’idée n’est pas pour moi nécessairement un énoncé
            intellectuel et un thème précis et clair. Le point de départ peut
            être une intuition, une émotion, une impression, une image, un bruit
            ou un son. La vie n’est pas en premier lieu une <b style={{ color: "#535978" }}>histoire</b> à raconter
            mais une <b style={{ color: "#535978" }}>existence</b> à vivre.  {" "}
            </Text>
            
        )} */}
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

export default Cinemaesthetique;
