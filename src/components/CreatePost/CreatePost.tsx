import React, {FC, FormEvent, useState} from 'react';
import './CreatePost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo, faCamera} from "@fortawesome/free-solid-svg-icons";

interface CreatePostProps {
    createPost: (content: string) => void,
}

const CreatePost: FC<CreatePostProps> = (props) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.createPost(content);
        setContent('');
    }

    return (
        <form className="CreatePost" onSubmit={handleSubmit} data-testid="CreatePost">
            <input value={content} onChange={event => setContent(event.target.value)} type="text" placeholder="What's on your mind?"/>
            <div className="bottom">
                <div className="bottom-buttons">
                    <div>
                        <FontAwesomeIcon icon={faCamera} />
                        <p>Add media</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faVideo} />
                        <p>Add media</p>
                    </div>
                </div>
                <button type='submit'>Post</button>
            </div>
        </form>
    );
}

export default CreatePost;
