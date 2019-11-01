import React from "react";
import { Row, Col } from 'react-bootstrap/';
import { Link } from "react-router-dom";

const Media = ({ image, title, content, link }) => {
    return(
        <Link to={`/post/${link}`}>
            <Row className="list_item">
                <Col md={5}>
                    <img
                    width={'100%'}
                    height={175}
                    className="align-self-start mr-1"
                    src={image}
                    alt="Generic placeholder"
                    />
                </Col>
                <Col md={7}>
                    <Col>
                    <h5>{title}</h5>
                    </Col>
                    <Col>
                    <p>{content}</p>
                    </Col>
                </Col>
            </Row>
        </Link>
    );
};

export default Media;