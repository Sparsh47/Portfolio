import {gql, GraphQLClient} from "graphql-request";

const endpoint = "https://gql.hashnode.com"

const graphQlClient = new GraphQLClient(endpoint);

export async function getAllPosts(number: number) {
    const query = gql`
    query {
  publication(host: "sparsh-shandilya.hashnode.dev") {
    posts(first: ${number}) {
      edges {
        node {
          views
          readTimeInMinutes
          title
          slug
          brief
          coverImage {
            url
          }
          publishedAt
        }
      }
    }
  }
}

`

    const data = await graphQlClient.request(query);

    // @ts-ignore
    return data.publication.posts.edges.map(edge => edge.node)
}