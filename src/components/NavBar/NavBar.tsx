import { Container, Image, Nav, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand className='text-warning' href='#home'>
          SWAPI
        </Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink className='text-warning' to='/characters'>
            Personajes
          </NavLink>
          <NavLink to='/films'>
          
            Películas
          
          </NavLink>
          
          <Nav.Link className='text-warning' href='#pricing'>
            Naves Estelares
          </Nav.Link>
          <Nav.Link className='text-warning' href='#pricing'>
            Vehículos
          </Nav.Link>
          <Nav.Link className='text-warning' href='#pricing'>
            Especies
          </Nav.Link>
          <Nav.Link className='text-warning' href='#pricing'>
            Planetas
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar
