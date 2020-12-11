import React, { Component } from 'react';
import { Navbar, Form, Nav, Dropdown, DropdownButton, FormControl, Button} from 'react-bootstrap';
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
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#">Nombre App</Navbar.Brand>
                        <Nav  className="mr-auto">
                            <DropdownButton id="mi-perfil" title="Mi Perfil" variant="outline-primary">
                                <Dropdown.Item href="#">Configuración</Dropdown.Item>
                                <Dropdown.Item href="#">Avances</Dropdown.Item>
                                <Dropdown.Divider />
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
                            </DropdownButton>

                        </Nav>
                        
                    <Form inline >
                        <FormControl type="text" placeholder="Busqueda" className="mr-sm-2" />
                        <Button variant="outline-primary">Buscar!</Button>
                    </Form>
                </Navbar>
            </div>
        )

    };
}


export default Navegation