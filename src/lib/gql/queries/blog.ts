import { gql } from '@apollo/client';

const GET_ALL_BLOG_POSTS = gql`
  query {
    blogArticles {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_LIMITED_BLOG_POSTS = gql`
  query ($page: Int) {
    blogArticles(
      pagination: { page: $page, pageSize: 15 }
      sort: ["createdAt:desc"]
    ) {
      data {
        id
        attributes {
          slug
          title
          createdAt
          publishedAt
          shortDescription
          themeImage {
            data {
              id
              attributes {
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

const GET_MORE_DIFFERENT_ARTICLES = gql`
  query ($slug: String) {
    blogArticles(
      pagination: { page: 1, pageSize: 3 }
      sort: ["createdAt:desc"]
      filters: { slug: { ne: $slug } }
    ) {
      data {
        id
        attributes {
          slug
          title
          createdAt
          publishedAt
          shortDescription
          themeImage {
            data {
              id
              attributes {
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

const GET_HEADLINE_POSTS = gql`
  query {
    blogArticles(filters: { pinned: { eq: true } }, sort: "priority:desc") {
      data {
        id
        attributes {
          slug
          title
          createdAt
          publishedAt
          shortDescription
          themeImage {
            data {
              id
              attributes {
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

const GET_BLOG_POST = gql`
  query ($slug: String, $state: PublicationState) {
    blogArticles(filters: { slug: { eq: $slug } }, publicationState: $state) {
      data {
        attributes {
          title
          subtitle
          shortDescription
          keywords
          themeImage {
            data {
              attributes {
                url
                formats
                alternativeText
                height
                width
              }
            }
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
          content {
            ... on ComponentBlogImage {
              image {
                data {
                  attributes {
                    alternativeText
                    height
                    width
                    url
                    formats
                  }
                }
              }
            }
            ... on ComponentBlogGallery {
              images {
                data {
                  attributes {
                    alternativeText
                    height
                    width
                    url
                    formats
                  }
                }
              }
            }
            ... on ComponentBlogVideo {
              title
              videoUrl
            }
            ... on ComponentBlogSectionTitle {
              title
            }
            ... on ComponentBlogSectionSubtitle {
              subtitle
            }
            ... on ComponentBlogTextModule {
              content
              title
            }
            ... on ComponentBlogSimpleCallToAction {
              text
              redirectUrl
            }
            ... on ComponentBlogComplexCallToAction {
              label
              buttonLabel
              redirectUrl
              explainer
            }
          }
        }
      }
    }
  }
`;

export {
  GET_ALL_BLOG_POSTS,
  GET_BLOG_POST,
  GET_HEADLINE_POSTS,
  GET_LIMITED_BLOG_POSTS,
  GET_MORE_DIFFERENT_ARTICLES,
};
