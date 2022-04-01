import React from "react";
import { QUERY_EMAIL_DATA } from "../../graphql/query";
import { useQuery } from "@apollo/client";
import {
  EmailContainer,
  Cards,
  Headers1,
  P,
  Span1,
} from "../../styles/GlobalComponents";
const BlogsData = () => {
  const { data, loading} = useQuery(QUERY_EMAIL_DATA);
  if (data) {
    return (
      <>
        <Headers1>Emails for casting </Headers1>
        <EmailContainer>
          {data?.getContact.map(
            ({ lastname, name, tel, email, birth, adress ,fbUrl}, idx) => (
              <Cards key={idx}>
                <P style={{ textAlign: "center" }}>Email n {idx + 1}</P>
                <P>
                  <Span1>Sujet:</Span1> Casting
                </P>
                <P>
                  <Span1>Email from: </Span1>
                  {lastname + "" + name}
                </P>
                <P>
                  <Span1>Email:</Span1> {email}
                </P>
                <P>
                  <Span1> Nom:</Span1> {name}
                </P>
                <P>
                  <Span1> Prénom:</Span1> {lastname}
                </P>
                <P>
                  <Span1>Tel:</Span1> {tel}
                </P>
                <P>
                  <Span1>Adresse:</Span1> {adress}
                </P>
                <P>
                  <Span1>Date de naissance:</Span1> {birth}
                </P>
                <P>
                  <Span1>Facebook Url:</Span1> {fbUrl}
                </P>
              </Cards>
            )
          )}
        </EmailContainer>
      </>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          marginInline: "auto",
          minHeight: "100vh",
          display: "flex",
          alignItems: " center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="loading">
          <div></div>
        </div>
        <div>Loading...</div>
      </div>
    );
  }
};

export default BlogsData;
//