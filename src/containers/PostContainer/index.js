
import React, { useState, useEffect } from "react";
import _ from 'underscore';
import { fromJS } from 'immutable';
import Container from "../../components/Container";
import { Row, Col, Image } from 'react-bootstrap/';
import { stripHTML } from "../../utils";
import moment from 'moment';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';
import ContentLoader from 'react-content-loader'

const PostContainer = ({ match }) => {
    const [hasError, setErrors] = useState(false);
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const res = await fetch(`https://id.techinasia.com/wp-json/techinasia/3.0/posts/${match.params.slug}`);
        res
        .json()
        .then(res => {
            setPost(fromJS(res));
            setLoading(false);
        })
        .catch(err => setErrors(err));
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [match]);

    const hasPost = !_.isEmpty(post);

    return(
    <>
        <Container>  
        {!hasPost || loading ? 
            <ContentLoader height={400}>
                <rect x="0" y="0" rx="4" ry="4" width="400" height="10" />
                <rect x="0" y="20" rx="4" ry="4" width="400" height="10" />
                <rect x="0" y="45" rx="50" ry="50" width="30" height="30" />
                <rect x="50" y="45" rx="4" ry="4" width="100" height="10" />
                <rect x="50" y="60" rx="4" ry="4" width="100" height="10" />
                <rect x="0" y="90" rx="4" ry="4" width="400" height="200" />
            </ContentLoader> : 
            <>
                <Row>
                    <Col>
                    <h1>{hasPost && stripHTML(post.getIn(['posts', 0, 'title']))}</h1>
                    </Col>
                </Row>
                <Row className="post_info">
                    <Col md="auto">
                        <img className="avatar" alt="Generic placeholder" width={50} height={50} src={hasPost && post.getIn(['posts', 0, 'author', 'avatar_url'])} />
                    </Col>
                    <Col>
                    <span className="name">{hasPost && post.getIn(['posts', 0, 'author', 'display_name'])}</span>
                        <h6>{hasPost && moment(post.getIn(['posts', 0, 'modified'])).format('MMM DD h:mm A')}</h6></Col>
                    <Col md="auto" offset="4">
                        <h6 className="category">{hasPost && post.getIn(['posts', 0, 'categories', 0, 'name'])}</h6>
                        <Row noGutters>
                    <Col fluid="true" />
                    <Col md="auto"><FacebookShareButton className="share_button" url={window.location.href}><FacebookIcon size={30} /></FacebookShareButton></Col>
                    <Col md="auto"><TwitterShareButton className="share_button" url={window.location.href}><TwitterIcon size={30}/></TwitterShareButton></Col>
                </Row>
                    </Col>
                </Row>
                <Row>
                    <Image className="post_image" src={hasPost && post.getIn(['posts', 0, 'featured_image', 'attachment_meta', 'sizes', 'medium_large', 'url'])} fluid />
                </Row>
                <Row>
                    <Col>
                    <div dangerouslySetInnerHTML={{ __html: hasPost && post.getIn(['posts', 0, 'content'])}} />
                    </Col>
                </Row>
            </>
        }
        </Container>
    </>
    );
};

export default PostContainer;