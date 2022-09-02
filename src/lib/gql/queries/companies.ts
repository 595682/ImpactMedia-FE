import { gql } from '@apollo/client';

const GET_TRUESTED_COMPANIES = gql`
  query {
    companies(filters: { showAsTrusted: { eq: true } }) {
      data {
        id
        attributes {
          name
          logo {
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
          logoBW {
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
          showAsTrusted
        }
      }
    }
  }
`;

export { GET_TRUESTED_COMPANIES };
