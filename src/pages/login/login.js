import React, { Component } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import Formulario from './components/formulario';
import Header from './components/header';
import Imagen from './components/imagen';


class Login extends Component
{
  constructor(props) 
  {
    super(props);
    
    
  }


  render()
  {
    return(
      
      <div className="App">
         <Header/>
          <Container>
              <h1 style={{padding: "5%", textAlign: "center"}}>Bienvenidos </h1>
            <Row className="landing">
                
                <Col> <Formulario fire = {this.props.fire}/>  </Col>
                
                <Col> <Imagen/> </Col>
            </Row>
           </Container>

      </div>
    )

  };
}


export default Login