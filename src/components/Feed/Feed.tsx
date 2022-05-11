import React, {FC, useState} from 'react';
import './Feed.css';
import Post from "../Post/Post";
import {CommentablePostData} from "../../models/CommentablePostData";

interface FeedProps {
    posts: Array<CommentablePostData>
}

const Feed: FC<FeedProps> = (props) => (
    <div className="Feed" data-testid="Feed">
        {props.posts.map((post, index) => <Post key = {index} postData = {post} />)}
    </div>
);

export default Feed;
