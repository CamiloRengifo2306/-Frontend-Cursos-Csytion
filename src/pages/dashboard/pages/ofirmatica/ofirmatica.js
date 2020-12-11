import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navigation from '../../components/navegation';
import Cards from '../../components/cards';
import Footer from '../../components/footer';

class Ofirmatica extends Component {


    render() {
        return (
            <div>
                <Navigation />
                <Image src="./img/ofirmatica.jpg" fluid
                    style={{ width: 1800, height: 600 }} />
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ Microsoft Office Word ↓ </h3>
                <Cards style={{ padding:10 }} />
                <br/>
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ Microsoft Office Excel ↓  </h3>
                <Cards style={{ padding:10 }} />
                <br/>
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ Microsoft Office Power Point ↓  </h3>
                <Cards style={{ padding:10 }} />
                <br/>
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ Microsoft Office Access ↓  </h3>
                <Cards style={{ padding:10 }} />
                <Footer/>
            </div>
        )

    };
}


export default Ofirmatica;