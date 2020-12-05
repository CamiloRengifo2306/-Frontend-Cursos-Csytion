import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Formulario = () => {
    return (
        <div>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Correo Electronico:</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese tu correo aquí" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese tu Contraseña aquí" />
                </Form.Group>
                <Button 
                style={{
                    display: "block", 
                    marginLeft: "auto",
                    marginRight: "auto"}}
                type="submit"
                variant="outline-primary">
                    iniciar Sessión..!
                </Button>
            </Form>
        </div>
    )
}

export default Formulario;