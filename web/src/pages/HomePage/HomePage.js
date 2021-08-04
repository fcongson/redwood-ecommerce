/** @jsx jsx */
import ProductsCell from 'src/components/Product/ProductsCell'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { jsx } from 'theme-ui'

const HomePage = () => {
  return (
    <MainLayout>
      <h2
        sx={{
          fontFamily: 'body',
          fontWeight: 400,
        }}
      >
        Camstack - Camera gear sold on the Jamstack
      </h2>
      <p
        sx={{
          fontFamily: 'body',
          fontWeight: 400,
        }}
      >
        Lorem ipsum dolor sit amet buy some camera gear!
      </p>
      <ProductsCell />
    </MainLayout>
  )
}

export default HomePage
