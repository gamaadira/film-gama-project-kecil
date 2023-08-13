import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
       
       <div>
        <Navbar variant="dark font-size-2rem">
        <Container>
            <Navbar.Brand>GAMA FILM</Navbar.Brand>
            <Nav>
            <Nav.Link  href="#trending">TRENDING</Nav.Link>
            <Nav.Link  href="#horror">HORROR MOVIES</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
        </div>

    
    )
    
}
export default NavigationBar