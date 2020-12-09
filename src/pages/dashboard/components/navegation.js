import React, { Component } from 'react';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button, Image } from 'react-bootstrap';
import fire from '../../../Firebase-config';

class Navegation extends Component {

    cerrar() {
        fire
            .auth()
            .signOut();
    }

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" expand="lg">
                    <Navbar.Brand>
                        <Image
                            alt=""
                            src="./img/10088.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                            Nombre APP
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>Inicio

                            </Nav.Link>
                            <br />

                            <NavDropdown title="Ofirmatica" id="basic-nav-dropdown">
                                <NavDropdown.Item>Microsoft Word</NavDropdown.Item>
                                <NavDropdown.Item>Microsoft Excel</NavDropdown.Item>
                                <NavDropdown.Item>Microsoft Access</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Business" id="basic-nav-dropdown">
                                <NavDropdown.Item >WhatsAap </NavDropdown.Item>
                                <NavDropdown.Item >Facebook</NavDropdown.Item>
                                <NavDropdown.Item >Google Anality</NavDropdown.Item>
                            </NavDropdown>


                        </Nav>

                        <nav>
                            <NavDropdown title="Mi Perfil" id="basic-nav-dropdown">
                                <NavDropdown.Item>Comfiguración</NavDropdown.Item>
                                <NavDropdown.Item>Mis Cursos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <Button
                                    style={{
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}
                                    onClick={this.cerrar}
                                    variant="outline-primary">
                                    Cerrar Sesión
                                </Button>
                            </NavDropdown>
                        </nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar Tu Cursos" className="mr-sm-2" />
                            <Button variant="outline-primary">Buscar.!</Button>
                        </Form>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )

    };
}


export default Navegation