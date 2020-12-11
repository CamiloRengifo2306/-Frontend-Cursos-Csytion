import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Footer extends Component {


    render() {
        return (
            <div>
                <Card style={{padding:"2%", textAlign: "center"}}>
                    <Card.Footer>
                        <small className="text-muted">Csytion Technology S.A.S 2021 "Todos Los Derechos Reservados"</small>
                    </Card.Footer>

                </Card>

            </div>
        )

    };
}


export default Footer