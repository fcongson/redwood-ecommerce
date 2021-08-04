export const schema = gql`
  type Product {
    id: Int!
    title: String!
    description: String!
    price: String!
    image: String!
    imageAlt: String!
  }

  type Query {
    products: [Product!]!
    product(id: Int!): Product
  }

  input CreateProductInput {
    title: String!
    description: String!
    price: String!
    image: String!
    imageAlt: String!
  }

  input UpdateProductInput {
    title: String
    description: String
    price: String
    image: String
    imageAlt: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: Int!, input: UpdateProductInput!): Product!
    deleteProduct(id: Int!): Product!
  }
`
