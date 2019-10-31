import React from "react";
import { Media as MyMedia } from 'react-bootstrap/';
import { Link } from "react-router-dom";

const Media = ({ image, title, content, link }) => {
    return(
        <Link to={`/post/${link}`}>
            <MyMedia>
                <img
                width={310}
                height={175}
                className="align-self-start mr-3"
                src={image}
                alt="Generic placeholder"
                />
                <MyMedia.Body>
                <h5>{title}</h5>
                <p>
                    {content}
                </p>
                </MyMedia.Body>
            </MyMedia>
        </Link>
    );
};

export default Media;