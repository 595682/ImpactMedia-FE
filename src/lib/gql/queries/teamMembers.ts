import { gql } from '@apollo/client';

const GET_TEAM_MEMBERS = gql`
  query {
    teamMembers {
      data {
        id
        attributes {
          name
          position
          description
          avatar {
            data {
              attributes {
                formats
                width
                height
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_TEAM_MEMBERS };
