import React, {FC, useState} from 'react';
import './CreatePost.css';
import {PostData} from "../../models/PostData";

interface CreatePostProps {
    createPost: (content: string) => void,
}

const CreatePost: FC<CreatePostProps> = (props) => {
    const [content, setContent] = useState('');
    return (
        <div className="CreatePost" data-testid="CreatePost">
            <input onChange={event => setContent(event.target.value)} type="text" placeholder="What's on your mind?"/>
            <div className="bottom">
                <div className="bottom-buttons">
                    <p>Add media</p>
                    <p>Go live</p>
                </div>
                <button onClick={() => props.createPost(content)}>Post</button>
            </div>
        </div>
    );
}

export default CreatePost;
