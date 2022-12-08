import { Container, Nav, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink className='text-warning m-2 text-decoration-none' to='/'>
          SWAPI
        </NavLink>
        <Nav className='me-auto'>
          <NavLink className='text-warning m-2 text-decoration-none' to='/characters'>
            Personajes
          </NavLink>
          <NavLink className='text-warning m-2 text-decoration-none' to='/films'>
            Películas
          </NavLink>
          <NavLink className='text-warning m-2 text-decoration-none' to='/starships'>
            Naves Estelares
          </NavLink>
          <NavLink className='text-warning m-2 text-decoration-none' to='/vehicles'>
            Vehículos
          </NavLink>
          <NavLink className='text-warning m-2 text-decoration-none' to='/species'>
            Especies
          </NavLink>
          <NavLink className='text-warning m-2 text-decoration-none' to='/planets'>
            Planetas
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar
