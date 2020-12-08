import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import 'firebase/auth';

class Formulario extends Component
{
  constructor(props) 
  {
    super (props)
  }

    login() 
    {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        this.props.fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then((u) => {
            console.log('Successfully Signed Up');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }
  
      render()
  {
    return(
      <div>
        <Form  style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Correo Electronico:</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Ingrese tu correo aquí" />
                    
                </Form.Group>
                <Form.Group >
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control id="password" type="password" placeholder="Ingrese tu Contraseña aquí" />
                </Form.Group>
                <Button 
                style={{
                    display: "block", 
                    marginLeft: "auto",
                    marginRight: "auto"}}
                type="button"
                variant="outline-primary"
                onClick = {()=> this.login()}>
                    iniciar Sessión..!
                </Button>
            </Form>

      </div>
    )

  };
}


export default Formulario;