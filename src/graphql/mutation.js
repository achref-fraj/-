import { gql } from "@apollo/client";

export const CREATE_CASTING_DATA = gql`
  mutation addUser(
    $name: String!
    $lastname: String!
    $email: String!
    $tel: String!
    $adress: String!
    $birth: String
    $fbUrl: String
  ) {
    addContact(
      name: $name
      lastname: $lastname
      email: $email
      tel: $tel
      adress: $adress
      birth: $birth
      fbUrl:$fbUrl
    ) {
      success
    }
  }
`;
