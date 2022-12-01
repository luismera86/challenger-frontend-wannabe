import { Container, Image, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>SWAPI</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Personajes</Nav.Link>
          <Nav.Link href='#features'>Películas</Nav.Link>
          <Nav.Link href='#pricing'>Naves Estelares</Nav.Link>
          <Nav.Link href='#pricing'>Vehículos</Nav.Link>
          <Nav.Link href='#pricing'>Especies</Nav.Link>
          <Nav.Link href='#pricing'>Planetas</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar
