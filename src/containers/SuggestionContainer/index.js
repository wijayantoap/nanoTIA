import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import _ from 'underscore';
import { fromJS } from 'immutable';
import { truncate, stripHTML } from "../../utils";
import Card from "../../components/Card";
import { CardDeck } from "react-bootstrap";
import { showAlert } from '../../actions';
import { useDispatch } from 'react-redux';

const ListContainer = ({match}) => {
    const [hasError, setErrors] = useState(false);
    const [suggestions, setSuggestions] = useState();
    const [loading, setLoading] = useState(true);
    const hasSuggestion = !_.isEmpty(suggestions);
    const dispatch = useDispatch();

    async function fetchData() {
        const res = await fetch(`https://id.techinasia.com/wp-json/techinasia/2.0/posts?per_page=3&page=${Math.floor(Math.random() * 100) + 1}`);
        res
        .json()
        .then(res => {
            setSuggestions(fromJS(res.posts));
            setLoading(false);
        })
        .catch(err => {
            dispatch(showAlert({ isOpen: true,
                err}));
            setErrors(err);
        });
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [match]);


    return(
    <div style={{ padding: '24px 0', backgroundColor: 'rgba(0, 0, 0, 0.02)'}}>
        <Container>
            <h1>More From nanoTIA</h1>
            <hr />
            <CardDeck>
        {!hasSuggestion || loading ? 'Loading...' :
            hasSuggestion && suggestions.map((suggestion, index) => (
            <Card
                key={index}
                title={stripHTML(suggestion.get('title'))} 
                content={truncate(stripHTML(suggestion.get('content')))}
                image={suggestion.getIn(['featured_image', 'attachment_meta', 'sizes', 'medium', 'url'])}
                link={suggestion.get('slug')}
                />
            ))}
            </CardDeck>
        </Container>
    </div>
    );
};

export default ListContainer;