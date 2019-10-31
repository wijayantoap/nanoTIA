import React from "react";
import { Card as MyCard, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { truncate } from "../../utils";

const Card = ({ image, title, content, link }) => {
    return(
    <MyCard>
        <MyCard.Img variant="top" src={image} />
        <MyCard.Body>
          <MyCard.Title>{title}</MyCard.Title>
          <MyCard.Text>
          {truncate(content, 100)}
          </MyCard.Text>
          <Link to={`/post/${link}`}><Button variant="danger">Read More</Button></Link>
        </MyCard.Body>
      </MyCard>
    );
};

export default Card;