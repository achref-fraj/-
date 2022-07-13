import React from "react";
import Image from "next/image";
import {
  FooterWrapper,
  Column,
  Row,
  Images,
  ContactImage,
  Text,
  Text1,
  SecondRow,
  CopyRight,
} from "./FooterStyles";
import { SocialIcons } from "../Header/HeaderStyles";

import { DataFooter } from "../../constants/constants";
const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <Column>
        <Row>
          <Images>
            <ImagesComponent
              src={"/images/fish-removebg-preview.png"}
              width={100}
              height={40}
            />
          </Images>

          <Text>Abdelwaheb Bouden</Text>
          <Text1>Auteur/Réalisateur/Producteur</Text1>
        </Row>
        <Row>
          <SecondRow>
            <ContactImage>
              <ImagesComponent
                src={"/images/phone.png"}
                width={80}
                height={80}
              />
            </ContactImage>
            <a
              href={`tel:${DataFooter[1].text}`}
              target="_blank"
              aria-label={"telephone"}
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                color:"white"
              }}
            >
              {DataFooter[1].text}
            </a>
          </SecondRow>
          <SecondRow>
            <ContactImage>
              <ImagesComponent
                src={"/images/mail.png"}
                width={80}
                height={80}
              />
            </ContactImage>
            <a
              href={`mailto:${DataFooter[0].text}`}
              target="_blank"
              aria-label={"email"}
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                color: "white",
              }}
            >
              {DataFooter[0].text}
            </a>
          </SecondRow>
        </Row>
      </Column>
      <CopyRight>&copy; Copyright FADYM.com</CopyRight>
    </FooterWrapper>
  );
};

export default Footer;

const ImagesComponent = ({ src, width, height }) => (
  <Image
    src={src}
    alt={"images"}
    width={width}
    height={height}
    layout="responsive"
    objectFit="cover"
    placeholder="blur"
    priority
    blurDataURL
  />
);
