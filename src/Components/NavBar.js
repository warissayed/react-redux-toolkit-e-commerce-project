import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


const NavBar = ()=> {
  const cartProducts = useSelector(state=>state.cart)

  return (
    
                            <>

                                        <Navbar bg='light' expand="lg" >
                                              <Container fluid>
                                                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                                               <Nav>
                                                    <Nav.Link to="/" as={Link}>Home</Nav.Link>
                                                    
                                                 </Nav>  
                                                 <Nav>
                                                    <Nav.Link to="/Cart" as={Link}>Cart</Nav.Link>
                                                    
                                                 </Nav>  
                                                 <Navbar.Toggle/>
                                                  <NavbarCollapse className='justify-content-end'>
                                                    <Navbar.Text>
                                                  <Nav.Link to="/Cart" as={Link}> My Bag {cartProducts.length} </Nav.Link>
                                                    </Navbar.Text>
                                                    </NavbarCollapse>
                                                  
                                                    
                                                  
                                                
                                              </Container>
                                            </Navbar>

            
          </>
    
  )
}

export default NavBar