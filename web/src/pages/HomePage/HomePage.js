/** @jsx jsx */
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
        Super Duper Ecommerce Website
      </h2>
      <p
        sx={{
          fontFamily: 'body',
          fontWeight: 400,
        }}
      >
        Some text here explaining how great your website is!
      </p>
    </MainLayout>
  )
}

export default HomePage
