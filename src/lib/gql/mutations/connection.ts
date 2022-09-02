import { gql } from "@apollo/client";

const CREATE_CONNECTION = gql`
mutation createConnection(
  $firstName: String
  $lastName: String
  $email: String
  $service: String
  $description: String
  $isQuot: Boolean
) {
  createConnection(
    data: {
      firstName: $firstName
      lastName: $lastName
      email: $email
      service: $service
      description: $description
      isQuot: $isQuot
    }
  ) {
    data {
      id
      attributes {
        firstName
        lastName
        email
        isQuot
      }
    }
  }
}
`;

export {CREATE_CONNECTION}
