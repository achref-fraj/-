import { gql } from "@apollo/client";

export const QUERY_EMAIL_DATA = gql`
  query getUser {
    getContact {
      email
      name
      lastname
      tel
      adress
      birth
      id
      fbUrl
    }
  }
`;
