import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navigation from '../../components/navegation';
import Cards from '../../components/cards';
import Footer from '../../components/footer';

class Business extends Component {


    render() {
        return (
            <div>
                <Navigation />
                <Image src="./img/business.jpg" fluid
                    style={{ width: 1800, height: 600 }} />
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ WhatsAap Business ↓ </h3>
                <Cards style={{ padding:10 }} />
                <br/>
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ Facebook Business ↓  </h3>
                <Cards style={{ padding:10 }} />
                <br/>
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ Google Business ↓  </h3>
                <Cards style={{ padding:10 }} />
                <br/>
                <h3 style={{padding: "5%", textAlign: "center"}}> ↓ Instagram Business ↓  </h3>
                <Cards style={{ padding:10 }} />
                <Footer/>
            </div>
        )

    };
}


export default Business;