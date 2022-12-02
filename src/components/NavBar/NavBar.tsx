import { Container, Image, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container >
        <Navbar.Brand className='text-warning' href='#home'>SWAPI</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link className='text-warning' href='#home'>Personajes</Nav.Link>
          <Nav.Link className='text-warning' href='#features'>Películas</Nav.Link>
          <Nav.Link className='text-warning' href='#pricing'>Naves Estelares</Nav.Link>
          <Nav.Link className='text-warning' href='#pricing'>Vehículos</Nav.Link>
          <Nav.Link className='text-warning' href='#pricing'>Especies</Nav.Link>
          <Nav.Link className='text-warning' href='#pricing'>Planetas</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar
