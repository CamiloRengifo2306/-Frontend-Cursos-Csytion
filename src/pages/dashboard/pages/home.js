import React, { Component } from 'react';
import { CardDeck, Card, Button} from 'react-bootstrap';
import Navigation from '../components/navegation';

class Home extends Component {


    render() {
        return (
            <div>
                <Navigation />
                
                <CardDeck style={{ padding:10 }}>
                   
                    <Card>
                        <Card.Img variant="top" src="./img/business.jpg" style={{border:"none"}} />
                        <Card.Body>
                            <Card.Title>Cursos Business</Card.Title>
                            <Card.Text>
                                Con este cursos encontraras y aprenderas como 
                                maneja las ultimas tecnologias en marketing digital,
                                 posicionamiento en la web, entre muchos cursos mas para
                                  que pueda salir adelante con tu negocio.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button
                                    style={{
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}
                                    variant="outline-primary"
                                    size="lg">
                                    Ver Cursos
                                </Button>
                        </Card.Footer>
                    </Card>
                    
                    <Card>
                        <Card.Img variant="top" src="./img/ofirmatica.jpg" />
                        <Card.Body>
                            <Card.Title>Curso ofirmatica</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button
                                    style={{
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}
                                    variant="outline-primary"
                                    size="lg">
                                    Ver Cursos
                                </Button>
                        </Card.Footer>
                    </Card>
                    
                </CardDeck>

            
            </div>
        )

    };
}


export default Home;