import { Container, Image, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png' className=''/> */}
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar
