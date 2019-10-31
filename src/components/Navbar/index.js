import React from "react";
import { Navbar } from 'react-bootstrap';
import logo from '../../logo.svg'
import { Link } from "react-router-dom";

const Nav = () => {
    return(
    <Navbar sticky="top" bg="dark" variant="dark">
        <Link to="/">
        <Navbar.Brand>
        <img
            alt="Generic placeholder"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        {' nanoTIA'}
        </Navbar.Brand>
        </Link>
    </Navbar>
    );
};

export default Nav;