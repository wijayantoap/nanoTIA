import React from "react";
import { Row, Col, Spinner as MySpinner } from 'react-bootstrap/';
import Container from "../Container";


const Spinner = () => {
    return(
        <Container>
            <Row>
                <Col md={5} />
                <Col md="auto">
                    <MySpinner key={0} animation="border" variant="secondary" />
                    </Col>
                <Col md={5} />
            </Row>
        </Container>
    );
};

export default Spinner;