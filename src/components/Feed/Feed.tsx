import React, {FC, useState} from 'react';
import './Feed.css';
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import {PostData} from "../../models/PostData";

interface FeedProps {
    username: string
}

const Feed: FC<FeedProps> = (props) => {
    const [posts, setPosts] = useState<Array<PostData>>([]);

    const createPost = (content: string) => {
        setPosts([...posts, new PostData(props.username, content)])
    }
    return (
        <div className="Feed" data-testid="Feed">
            <CreatePost createPost = {(content) => createPost(content)}/>
            {posts.map((post, index) => <Post key = {index} postData = {post} />)}
        </div>
    );
}

export default Feed;
