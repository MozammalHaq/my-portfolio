import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import user from '../assets/mozammal.png'

const navlink = {
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: "600",
    marginRight: "20px"
}

const Menubar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top bg-info bg-opacity-25">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={navlink} className='text-info' to="/skills">Skills</Link>                      
                        <Link style={navlink} className='text-info' to="/projects">Projects</Link>                      
                    </Nav>
                    <Nav>
                        <img style={{width: "50px"}} className='rounded-circle border' src={user} alt="" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;