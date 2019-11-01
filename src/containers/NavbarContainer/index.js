import React from "react";
import Navbar from '../../components/Navbar';
import { Alert, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert } from '../../actions';

const NavbarContainer = () => {
    const isOpen = useSelector(state => state.alert.isOpen);
    const errorMessage = useSelector(state => state.alert.err);
    const dispatch = useDispatch();

    return(
    <>
        <Navbar />
        <Alert show={isOpen} variant="danger">
            <Alert.Heading>Something went wrong</Alert.Heading>
            <p>
                {errorMessage}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => dispatch(showAlert({ isOpen: false,
                err: 'asd'}))} variant="outline-danger">
                Close
            </Button>
            </div>
        </Alert>
    </>
    );
};

export default NavbarContainer;