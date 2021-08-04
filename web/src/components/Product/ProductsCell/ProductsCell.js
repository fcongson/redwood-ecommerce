import { Link, routes } from '@redwoodjs/router'
// import Products from 'src/components/Product/Products'
import ProductsContainer from 'src/components/ProductsContainer'
import SingleProduct from 'src/components/SingleProduct'

export const QUERY = gql`
  query FindProducts {
    products {
      id
      title
      description
      price
      image
      imageAlt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No products yet. '}
      <Link to={routes.newProduct()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ products }) => {
  // return <Products products={products} />
  return (
    <ProductsContainer>
      {products.map((product) => (
        <SingleProduct
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          imageAlt={product.imageAlt}
        />
      ))}
    </ProductsContainer>
  )
}
