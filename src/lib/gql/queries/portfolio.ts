import { gql } from '@apollo/client';

const GET_ALL_PORTFOLIO_ELEMENTS_LIGHT = gql`
  query {
    portfolioElements(pagination: { limit: 100 }) {
      data {
        id
        attributes {
          publishedAt
          title
          slug
          displayAsShowcase
          elementType
        }
      }
    }
  }
`;

const GET_ALL_PORTFOLIO_ELEMENTS = gql`
  query ($state: PublicationState) {
    portfolioElements(publicationState: $state, pagination: { limit: 100 }) {
      data {
        id
        attributes {
          publishedAt
          title
          subtitle
          slug
          displayAsShowcase
          elementType
          thumbnailImage {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

const GET_SHOWCASE_PORTFOLIO_ELEMENTS = gql`
  query {
    portfolioElements(
      pagination: { page: 1, pageSize: 3 }
      filters: { displayAsShowcase: { eq: true } }
    ) {
      data {
        id
        attributes {
          publishedAt
          title
          subtitle
          slug
          displayAsShowcase
          elementType
          mainVideoUrl
          thumbnailImage {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

const GET_FEATURED_PORTFOLIO_ELEMENTS = gql`
  query {
    portfolioElements(
      pagination: { page: 1, pageSize: 3 }
      filters: { displayAsShowcase: { eq: true } }
    ) {
      data {
        id
        attributes {
          publishedAt
          title
          subtitle
          slug
          displayAsShowcase
          elementType
          thumbnailImage {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

const GET_PORTFOLIO_ELEMENT = gql`
  query ($slug: String, $state: PublicationState) {
    portfolioElements(
      filters: { slug: { eq: $slug } }
      publicationState: $state
    ) {
      data {
        id
        attributes {
          publishedAt
          title
          subtitle
          slug
          displayAsShowcase
          elementType
          mainVideoUrl
          outcomes {
            title
            highlight
            description
            id
          }
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  formats
                  url
                  width
                  height
                  alternativeText
                }
              }
            }
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    formats
                    url
                    width
                    height
                    alternativeText
                  }
                }
              }
            }
            keywords
            metaRobots
            canonicalURL
          }
          mainImage {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
          thumbnailImage {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
          heroImage {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
          brief {
            id
            subtitle
            title
            content
          }
          whatWeDid {
            subtitle
            title
            content
          }
          gallery {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

const GET_MORE_DIFFERENT_PORTFOLIO_ELEMENTS = gql`
  query ($slug: String) {
    portfolioElements(
      pagination: { page: 1, pageSize: 3 }
      sort: ["createdAt:desc"]
      filters: { slug: { ne: $slug } }
    ) {
      data {
        id
        attributes {
          publishedAt
          title
          subtitle
          slug
          displayAsShowcase
          elementType
          thumbnailImage {
            data {
              attributes {
                alternativeText
                formats
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

export {
  GET_ALL_PORTFOLIO_ELEMENTS,
  GET_ALL_PORTFOLIO_ELEMENTS_LIGHT,
  GET_FEATURED_PORTFOLIO_ELEMENTS,
  GET_MORE_DIFFERENT_PORTFOLIO_ELEMENTS,
  GET_PORTFOLIO_ELEMENT,
  GET_SHOWCASE_PORTFOLIO_ELEMENTS,
};
