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
        <ThirdTitle>{"Cinéma indépendant "}</ThirdTitle>

        <Text>
          Devenu cinéaste professionnel, j’avais constitué ma petite société de
          production cinématographique en 2008 afin d’être libre et autonome
          vis-à-vis des exigences du cinéma commercial. En effet je cherchais
          dès le départ à exprimer mes idées et réaliser mon propre style artistique.
        </Text>
        {show && (
          <>
          <Text>
            Je suis cinéaste <b style={{ color: "#535978" }}>indépendant</b> en ce sens que j’écris mes films, les
            réalise et les produis par moi-même, de l’idée jusqu’à la phase
            finale de la postproduction.  <Text>{"\n"}</Text>Mes films sont des longs métrages de
            fiction produits à petits budgets et financés par mes propres
            moyens. Je travaille en petite équipe avec une seule actrice, un
            seul acteur et des techniciens limités à l’essentiel dans un décors
            naturel où la mer est omniprésente. Je fais moi-même les repérages
            et les castings.
          </Text>
         <Text > Si le cinéma en général fonctionne comme une
         industrie et un commerce, y compris dans son aspect artistique et
         culturel, mon cinéma se situe en dehors de ce système dominant commandé par
         les grandes firmes cinématographiques internationales qui
         monopolisent la production, la distribution ainsi que la conception
         artistique et thématique des films, ne laissant qu’une petite place
         de strapontin à un cinéma différent. <Text>{"\n"}</Text> L’autonomie financière,
         l’austérité dans la production ainsi que la simplicité dans les
         choix artistiques et thématiques sont à l’origine de la faisabilité
         de mes films. </Text>
         <Text >  Je refuse de subordonner l’art à l’économie comme je
         refuse de considérer le film comme une marchandise. Je me souci en
         premier lieu de création artistique et d’expression philosophique,
         indépendamment des impératifs commerciaux. <Text>{"\n"}</Text> Mon désir le plus ultime en tant
         qu’<b style={{ color: "#535978" }}>artiste-philosophe</b> est l’expression de la beauté et l’éveil de la 
         <b style={{ color: "#535978" }}> pensée libre</b>. </Text>
         </>
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
