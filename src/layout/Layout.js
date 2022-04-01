import React from "react";
import { Footer, Header, Carrousel, Casting } from "../components";
import { Container, Hr } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Carrousel />
      <main>{children}</main>
      <Hr></Hr>
      <Footer />
    </>
  );
};
