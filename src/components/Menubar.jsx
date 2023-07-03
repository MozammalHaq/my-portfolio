// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
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
        <nav className="navbar navbar-expand-lg fixed-top bg-info bg-opacity-25">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={navlink} className='text-info' to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={navlink} className='text-info' to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={navlink} className='text-info' to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <img style={{ width: "50px" }} className='rounded-circle border' src={user} alt="" />
                    </form>
                </div>
            </div>
        </nav>

    );
};

export default Menubar;

{/* <Navbar collapseOnSelect expand="lg" className="fixed-top bg-info bg-opacity-25">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={navlink} className='text-info' to="/skills">Skills</Link>                      
                        <Link style={navlink} className='text-info' to="/projects">Projects</Link>                      
                        <Link style={navlink} className='text-info' to="/contact">Contact Me</Link>                      
                    </Nav>
                    <Nav>
                        <img style={{width: "50px"}} className='rounded-circle border' src={user} alt="" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}