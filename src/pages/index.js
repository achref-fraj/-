import { Layout } from "../layout/Layout";
import {
  MyMovie,
  MesFilms,
  UpDown,
  Casting,
  Blog,
  Parag,
  NewPragraphe,
  CinémaExistentiel,
  Cinema,
  Philosophie,
  Indepandante,
  Estetique,
  EcologieModern,
  CinemaNonViolence,
  Cinemaesthetique,
} from "../components";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Home = () => {
  return (
    <Layout>
      <>
        <UpDown />
        <MyMovie />
        <NewPragraphe />
        <Cinema/>
        <Philosophie/>
        <Indepandante/>
        <CinémaExistentiel />
        <CinemaNonViolence/>
        <Cinemaesthetique/>
        <Estetique/>
        <EcologieModern/>
        <MesFilms />
        <Casting />
        <Blog />
      </>
    </Layout>
  );
};
export default Home;
//     <Parag />
