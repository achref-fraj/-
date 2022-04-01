import React, { useState, useEffect } from "react";
import {
  SummaryContainer,
  Title,
  TextContainer,
} from "../../styles/GlobalComponents";

import { Button1 } from "../../styles/GlobalComponents/index";
import styled from "styled-components";
import {
  Input,
  Label,
  InputsWrapper,
} from "../../components/Casting/CastingStyles";
export const TextArea = styled.textarea`
  border-radius: 12px;
  padding: 1rem;
  font-size: 2rem;
  height: 60vh;
  width: 100%;
`;
const CreationBlog = () => {
  const [blogData, setBlogData] = useState({
    blogTitle: "",
    imageUrl: "https://",
    content: "",
    author: "Abdelwaheb Bouden",
  });

  const handleChange = (e, name) =>
    setBlogData((prevState) => ({ ...prevState, [name]: e.target.value }));
  const InputsData = [
    {
      label: "titre",
      type: "text",
      name: "blogTitle",
      handleChange: handleChange,
      value: blogData.blogTitle,
    },
  ];
  useEffect(() => {
    if (blogData.content.length > 220) {
      return alert("T'as dépassé la limite!");
    }
  }, [blogData.content]);
  const submit = async (e) => {
    if (blogData.content.length > 220) {
      return alert("T'as dépassé la limite!");
    }
    try {
      const response = await fetch(
        `https://fithub-tn-app.herokuapp.com/blogs`,
        {
          body: JSON.stringify({
            blogTitle: blogData.blogTitle,
            imageUrl: blogData.imageUrl,
            content: blogData.content,
            author: blogData.author,
          }),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );

      const data = await response.json();

      if (data) {
        setBlogData({
          blogTitle: "",
          imageUrl: "https://",
          content: "",
          author: "Abdelwaheb Bouden",
        });
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <SummaryContainer id="casting">
      <TextContainer>
        <Title>{"Creation du blog"}</Title>
        <InputsWrapper>
          {InputsData.map(({ type, label, name, handleChange, value }, idx) => (
            <InputComponent
              key={idx}
              type={type}
              label={label}
              name={"blogTitle"}
              value={value}
              handleChange={handleChange}
            />
          ))}
          <Label
            style={{
              alignSelf: "flex-start",
            }}
          >
            {"Contenu"}
          </Label>
          <TextArea
            cols="60"
            rows="5"
            name="blog"
            maxlength="256"
            value={blogData.content}
            onChange={(e, name = "content") => {
              handleChange(e, name);
            }}
          ></TextArea>
          <Button1
            style={{ width: "20rem", marginTop: "5rem" }}
            onClick={submit}
          >
            Envoyer
          </Button1>
        </InputsWrapper>
      </TextContainer>
    </SummaryContainer>
  );
};

const InputComponent = ({ type, label, name, handleChange, value }) => (
  <>
    <Label style={{ alignSelf: "flex-start" }}>{label}</Label>
    <Input
      style={{ width: "100%" }}
      type={type}
      name={name}
      value={value}
      onChange={(e) => {
        handleChange(e, name);
      }}
    />
  </>
);

export default CreationBlog;
