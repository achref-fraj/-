import React from "react";
import {
  Container,
  Header,
  Logo,
  Name,
  Title,
  Content,
} from "./CarrouselStyles";
import Image from "next/image";
import { CarouselImages } from "../../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const Carrousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        pagination
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
     
        {CarouselImages.map(({ src, alt }, i) => (
          <>
            <SwiperSlide key={i}>
              <Container>
                <Image
                  src={src}
                  alt={alt}
                  width={220}
                  height={98}
                  layout="responsive"
                  objectFit="cover"
                  placeholder="blur"
                  priority
                  blurDataURL
                />
              </Container>
            </SwiperSlide>
          </>
        ))}
           <SwiperSlide key={"55"}>
          <Content>
            <Logo>
              <Image
                src={"/images/pngegg.png"}
                alt={"images"}
                width={220}
                height={110}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                priority
                blurDataURL
              />
            </Logo>
            <Header>
              <Name style={{
                fontFamily: "Kristen ITC"
              }}><b style={{ fontSize:66 }}>Abdelwaheb</b> BOUDEN</Name>
              <br />
<br></br><br></br>
              <Title style={{
                fontFamily: "Kristen ITC",
                fontSize:22,
                marginTop:100
              }}>Artistephilosophe <b style={{ fontSize:52 }}>Réalisateur</b></Title>
            </Header>
          </Content>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrousel;
