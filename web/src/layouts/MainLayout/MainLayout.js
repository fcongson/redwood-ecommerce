import Header from 'src/components/Header'
import { Container } from 'theme-ui'

const MainLayout = ({ children }) => {
  return (
    <Container
      sx={{
        maxWidth: 1024,
      }}
    >
      <Header />
      <main>{children}</main>
    </Container>
  )
}

export default MainLayout
