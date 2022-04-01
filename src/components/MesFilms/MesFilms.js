import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MesFilmsContainer,
  SmallTitle,
  AfficheContainer,
  Affiche,
  Description,
  Table,
  Th,
  Td,
  Button,
  Video,
  BondeAnnonce,
  TitleName,
} from "./MesFilmsStyles";
const obj ={
  title: "Synopsis:",
  text: ` Un jeune homme fait la pêche pour le plaisir. Il passe une jounrnée sur une plage déserte dans le calme et la sérénité. Une belle et jeune femme arrive seule. Ils sympathisent et passent la journée ensemble a s'amuser et jouer. Mais à la fin de la journée, la jeune femme semble choisir une suite personnelle à cette belle aventure amoureuse.`,
}
import BondeEtFilm from "./BondeEtFilm";
import { MesFilmsData } from "../../constants/constants";
import { Title } from "../../styles/GlobalComponents";
import Syn from "./Syn";
const MesFilms = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([MesFilmsData[0]]);
  useEffect(() => {
    return load ? setData(MesFilmsData) : setData([MesFilmsData[0]]);
  }, [load]);
  return (
    <MesFilmsContainer id="films">
      <Title style={{ color: "white",   fontFamily:"Space Grotesk,sans-serif"}}>Mes Films</Title>
      {data?.map(({ filmName, uri, bondeAnnounce, details, film,syn }, idx1) => (
        <>
          <SmallTitle key={idx1+film+uri}>{filmName}</SmallTitle>
          <AfficheContainer key={idx1+film}>
            <Affiche>
              <Image
                src={uri}
                alt={"images"}
                width={110}
                height={150}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                priority
                blurDataURL
              />
            </Affiche>
            <Description>
              <Table>
                {details?.map(({ title, text }, idx) => (
                  <tr key={idx}>
                    <Th>{title}</Th>
                    <Td>{text}</Td>
                  </tr>
                ))}
              </Table>
           
            </Description>
            
          </AfficheContainer>
         <Syn  bonde={syn}/>
          <BondeEtFilm bonde={bondeAnnounce} />
          <BondeEtFilm bonde={film} />
        </>
      ))}
      <Button
        onClick={() => setLoad(!load)}
        style={{
          color: "#EFEFEF",
          background: "transparent",
          border: "1px solid #EFEFEF",
        }}
      >
        {!load ? "Afficher plus ..." : "Afficher moins"}
      </Button>
    </MesFilmsContainer>
  );
};

export default MesFilms;
