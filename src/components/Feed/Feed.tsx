import React, {FC, useState} from 'react';
import './Feed.css';
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import {PostData} from "../../models/PostData";

interface FeedProps {
    posts: Array<PostData>
}

const Feed: FC<FeedProps> = (props) => (
    <div className="Feed" data-testid="Feed">
        {props.posts.map((post, index) => <Post key = {index} postData = {post} />)}
    </div>
);

export default Feed;
