
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

import PostContainer from "../../containers/PostContainer";
import SuggestionContainer from "../../containers/SuggestionContainer";

const Post = ({match}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [match]);

    return(
    <>
        <Navbar />
        <PostContainer match={match}/>
        <SuggestionContainer match={match}/>
    </>
    );
};

export default Post;