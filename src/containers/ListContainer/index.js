import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import ContentLoader from 'react-content-loader'
import Media from "../../components/Media";
import Spinner from "../../components/Spinner";
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from "react-router-dom";
import _ from 'underscore';
import { fromJS } from 'immutable';
import { loadData, loadPage } from '../../actions';
import { truncate, stripHTML } from "../../utils";
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';

const ListContainer = () => {
    const [hasError, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postReducer);
    const currentPage = useSelector(state => state.currentPage);
    const hasPosts = !_.isEmpty(posts);

    async function fetchData() {
        const res = await fetch(`https://id.techinasia.com/wp-json/techinasia/2.0/posts?page=${currentPage}`);
        res
        .json()
        .then(res => {
            dispatch(loadData(currentPage === 1 ? fromJS(res.posts) : posts.merge(fromJS(res.posts))));
            setIsLoading(false);
        })
        .catch(err => setErrors(err));
    }

    function loadMore() {
        if(!isLoading) {
        setIsLoading(true);
        dispatch(loadPage());
        fetchData();
        }
    }

    useEffect(() => {
        !hasPosts ? fetchData() : setIsLoading(false);
    }, []);

    return(
    <>
        <InfiniteScroll
            pageStart={0}
            loadMore={() => loadMore()}
            hasMore={!hasError}
            loader={currentPage !== 1 && <Spinner key={0}/>}
        >
            <Container>
            <Carousel style={{ width: "100%", marginBottom: 24 }}>
                {hasPosts && [posts.get(0), posts.get(1), posts.get(2)].map((post, index) => (
                    <Carousel.Item key={index}>
                        <Link to={`/post/${post.get('slug')}`}>
                        <img
                        className="d-block w-100"
                        src={post.getIn(['featured_image', 'attachment_meta', 'sizes', 'medium_large', 'url'])}
                        alt="Generic placeholder"
                        />
                        <Carousel.Caption>
                        <h3>{stripHTML(post.get('title'))}</h3>
                        <p>{truncate(stripHTML(post.get('content')), 100)}</p>
                        </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
            <ul className="list-unstyled">
            {!hasPosts ? 
            [1,2,3,4].map((arr, index) => <ContentLoader height={100} key={index}>
                <rect x="0" y="0" rx="5" ry="5" width="170" height="80" />
                <rect x="180" y="0" rx="4" ry="4" width="300" height="10" />
                <rect x="180" y="20" rx="3" ry="3" width="250" height="60" />
                </ContentLoader>) : 
                hasPosts && posts.skip(3).map((post, index) => (
                    <Media as="li"
                        key={index}
                        title={stripHTML(post.get('title'))} 
                        content={truncate(stripHTML(post.get('content')))}
                        image={post.getIn(['featured_image', 'attachment_meta', 'sizes', 'medium', 'url'])}
                        link={post.get('slug')}
                        />
                ))}
                </ul>
            </Container>
        </InfiniteScroll>
    </>
    );
};

export default ListContainer;