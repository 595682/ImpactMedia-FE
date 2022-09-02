import { gql } from '@apollo/client';

const GET_CLIENT_FEEDBACKS = gql`
  query {
    clientFeedbacks {
      data {
        id
        attributes {
          company {
            data {
              attributes {
                name
              }
            }
          }
          feedback
          feedbackFrom {
            name
            position
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
  }
`;

export { GET_CLIENT_FEEDBACKS };
