
import React, { useEffect } from "react";
import PostContainer from "../../containers/PostContainer";
import SuggestionContainer from "../../containers/SuggestionContainer";
import NavbarContainer from "../../containers/NavbarContainer";

const Post = ({match}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [match]);

    return(
    <>
        <NavbarContainer />
        <PostContainer match={match}/>
        <SuggestionContainer match={match}/>
    </>
    );
};

export default Post;