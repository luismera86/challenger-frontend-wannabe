import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand className='text-warning m-2 text-decoration-none' >SWAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link className='text-warning m-2 text-decoration-none' onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link className='text-warning m-2 text-decoration-none' onClick={() => navigate('/characters')}>Personajes</Nav.Link>
            <Nav.Link className='text-warning m-2 text-decoration-none' onClick={() => navigate('/films')}>Películas</Nav.Link>
            <Nav.Link className='text-warning m-2 text-decoration-none' onClick={() => navigate('/starships')}>Naves Estelares</Nav.Link>
            <Nav.Link className='text-warning m-2 text-decoration-none' onClick={() => navigate('/vehicles')}>Vehículos</Nav.Link>
            <Nav.Link className='text-warning m-2 text-decoration-none' onClick={() => navigate('/species')}>Especies</Nav.Link>
            <Nav.Link className='text-warning m-2 text-decoration-none' onClick={() => navigate('/planets')}>Planetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar

/* 

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


*/
