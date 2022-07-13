import React, { useState } from "react";
import {
  SummaryContainer,
  Title,
  TextContainer,
} from "../../styles/GlobalComponents";
import { MonCasting } from "../../constants/constants";
import { useMutation } from "@apollo/client";
import { CREATE_CASTING_DATA } from "../../graphql/mutation";
import {
  Input,
  Label,
  InputsWrapper,
  SecondTitle,
  Button,
} from "./CastingStyles";
const { title, secondTitle } = MonCasting;

const Casting = () => {
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    tel: "",
    adress: "",
    birth: "",
    fbUrl:""
  });

  const handleChange = (e, name) =>
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));

  const InputsData = [
    {
      label: "Nom*",
      type: "text",
      name: "name",
      placeholder: "Nom",
      handleChange: handleChange,
    },
    {
      label: "Prénom*",
      type: "text",
      name: "lastName",
      placeholder: "Pénom",
      handleChange: handleChange,
    },
    {
      label: "Email*",
      type: "text",
      name: "email",
      placeholder: "example@gmail.com",
      handleChange: handleChange,
    },
    {
      label: "Tel*",
      type: "text",
      name: "tel",
      placeholder: "example: +216 99 999 999",
      handleChange: handleChange,
    },
    {
      label: "Adresse*",
      type: "text",
      name: "adress",
      placeholder: "Adresse",
      handleChange: handleChange,
    },
    {
      label: "Date de naissance*",
      type: "text",
      name: "birth",
      placeholder: "0000-00-00",
      handleChange: handleChange,
    },
    {
      label: "Facebook Url*",
      type: "text",
      name: "fbUrl",
      placeholder: "Facebook Url",
      handleChange: handleChange,
    },
  ];

  const [createUser, { data, loading }] = useMutation(CREATE_CASTING_DATA);

  const CheckEmptyInputs = () => {
    if (
      formData.name.length != 0 &&
      formData.lastName.length != 0 &&
      formData.tel.length != 0 &&
      formData.adress.length != 0 &&
      formData.birth.length != 0&&
      formData.fbUrl.length != 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const EmailValidation = () => {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (formData.email.match(emailRegex)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SummaryContainer id="casting">
      <TextContainer>
        <Title>{title}</Title>
        <SecondTitle>{secondTitle}</SecondTitle>
        <InputsWrapper>
          {InputsData.map(
            ({ type, label, name, handleChange, placeholder }, idx) => (
              <InputComponent
                key={idx}
                type={type}
                label={label}
                name={name}
                handleChange={handleChange}
                placeholder={placeholder}
              />
            )
          )}
          {showError && (
            <span style={{ alignSelf: "flex-start", color: "red" }}>
              invalid inputs or invalid email please check your inputs again
            </span>
          )}
          <>{loading && <div className="spinner"></div>}</>
          <>
            {" "}
            {data?.addContact?.success && (
              <span style={{ alignSelf: "flex-start", color: "green" }}>
                Done!{" "}
              </span>
            )}
          </>
          <Button
            style={{ width: "20rem" }}
            onClick={() => {
              if (EmailValidation() && CheckEmptyInputs()) {
                createUser({
                  variables: {
                    name: formData.name,
                    lastname: formData.lastName,
                    email: formData.email,
                    tel: formData.tel,
                    adress: formData.adress,
                    birth: formData.birth,
                    fbUrl: formData.fbUrl,
                  },
                });
                return setShowError(false);
              } else {
                return setShowError(true);
              }
            }}
          >
            Envoyer
          </Button>
        </InputsWrapper>
      </TextContainer>
    </SummaryContainer>
  );
};

export default Casting;

const InputComponent = ({ type, label, name, handleChange, placeholder }) => (
  <div>
    <Label>{label}</Label>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => {
        handleChange(e, name);
      }}
    />
  </div>
);
