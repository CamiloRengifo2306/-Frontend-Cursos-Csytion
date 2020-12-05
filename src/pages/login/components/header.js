import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" >
                <Navbar.Brand>Nombre APP</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#">Csytion Technology S.A.S 2021</Nav.Link>
                        </Nav>
               </Navbar>
        </div>
    )
}

export default Header;   