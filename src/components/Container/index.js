import React from "react";
import { Container as MyContainer, Row, Col } from 'react-bootstrap/';

const Container = ({children}) => {
    return(
    <MyContainer>
        <Row>
            <Col md={2}/>
            <Col md={8}>
            {children}
            </Col>
            <Col md={2}/>
        </Row>
      </MyContainer>
    );
};

export default Container;