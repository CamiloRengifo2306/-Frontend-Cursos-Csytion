import React, { Component } from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';


class Cards extends Component {


    render() {
        return (
            <div>
               
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="./img/business.jpg" />
                        <Card.Body>
                            <Card.Title>Principiante</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
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
                        <Card.Img variant="top" src="./img/business.jpg" />
                        <Card.Body>
                            <Card.Title>Intermedio</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        
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
                        <Card.Img variant="top" src="./img/business.jpg" />
                        <Card.Body>
                            <Card.Title>Avanzado</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
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


export default Cards;