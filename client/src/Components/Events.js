import React from 'react';
import CardExampleCard from './CardExampleCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Events = () =>(
    <div className="container">
        <h1>Events Page</h1>
        <Container>  
            <Row>
                <Col sm={4}><CardExampleCard /></Col>
                <Col style={{marginLeft: "0px"}}  sm={4}><CardExampleCard /></Col>
                <Col style={{marginLeft: "0px"}}  sm={4}><CardExampleCard /></Col>
            </Row>
        </Container>
      
       
    </div>
    
)
export default Events;